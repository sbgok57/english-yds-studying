// YDS Soru Tipleri Soru Bankası (100 Önemli Çözümlü + 500 Ekstra Test = 600 Soru)
// 11 Soru Tipi x Tüm Seviyeler (A1-C2 + YDS)

export interface TacticQuestion {
  id: string;
  tacticSlug: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  difficulty: "Kolay" | "Orta" | "İleri" | "YDS";
  passage?: string;
  stem: string;
  options: string[];
  answer: number;
  explanation: string;
  distractorAnalysis?: Record<string, string>;
  tactic: string;
  memoryCode?: string;
  isImportant: boolean;
  importantTag?: string;
  ydsFrequency?: string;
}

export const IMPORTANT_TACTIC_QUESTIONS: TacticQuestion[] = [
  {
    "id": "tq-imp-vocab-1",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Due to the unprecedented drought, agricultural yields dropped ------- across the entire region, causing severe food shortages.",
    "options": [
      "favorably",
      "marginally",
      "moderately",
      "conventionally",
      "drastically"
    ],
    "answer": 4,
    "explanation": "'Unprecedented drought' ve 'severe food shortages' düşüşün çok şiddetli olduğunu gösterir; 'drastically' (ciddi/dramatik biçimde) tam uyar.",
    "distractorAnalysis": {
      "A": "Olumlu biçimde demektir; felaket bağlamına terstir.",
      "B": "Azıcık/önemsiz ölçüde demektir; ağır gıda kıtlığıyla çelişir.",
      "C": "Ilımlı/orta düzeyde demektir; açlığa sebep olamaz.",
      "D": "Geleneksel olarak demektir; miktar değil tarz bildirir.",
      "E": "DOĞRU: 'Unprecedented drought' ve 'severe food shortages' düşüşün çok şiddetli olduğunu gösterir; 'drastically' (ciddi/dramatik biçimde) tam uyar."
    },
    "tactic": "Şiddetli kriz ve felaket sonuçları ancak şiddet zarflarıyla ('drastically') açıklanır. Marginally/moderately çeldiricidir.",
    "memoryCode": "🎵 Drastik düşüş aç bırakır, marginally azıcık sarsar!",
    "isImportant": true,
    "importantTag": "Zarf / Derece",
    "ydsFrequency": "%98"
  },
  {
    "id": "tq-imp-vocab-2",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "The archaeological team had to ------- the excavation project when sudden winter storms made the mountain site completely inaccessible.",
    "options": [
      "put up with",
      "call off",
      "bring about",
      "carry out",
      "look into"
    ],
    "answer": 1,
    "explanation": "Dağlık alanın fırtına nedeniyle tamamen erişilmez hale gelmesi kazı projesinin 'iptal edilmesi' (call off) gerektiğini gösterir.",
    "distractorAnalysis": {
      "A": "Katlanmak demektir; nesnesi genellikle çekilmez bir durum veya kişidir.",
      "B": "DOĞRU: Dağlık alanın fırtına nedeniyle tamamen erişilmez hale gelmesi kazı projesinin 'iptal edilmesi' (call off) gerektiğini gösterir.",
      "C": "Sebep olmak demektir; projeye sebep olmak anlamsızdır.",
      "D": "Yürütmek demektir; fırtınada kazı yürütülemez.",
      "E": "İncelemek/araştırmak demektir; projeyi bitirmeyi ifade etmez."
    },
    "tactic": "Engelleme ve felaket durumlarında projeler ya 'call off' (iptal) ya 'put off' (ertelemek) edilir.",
    "memoryCode": "🎵 Fırtına koptu call off yap, araştırma bitti carry out yap!",
    "isImportant": true,
    "importantTag": "Phrasal Verb / İptal",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-vocab-3",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Despite extensive search efforts in the dense rainforest, the explorers found no ------- of the lost ancient civilization.",
    "options": [
      "remedy",
      "threat",
      "collision",
      "trace",
      "obligation"
    ],
    "answer": 3,
    "explanation": "'Find no trace of' (hiçbir iz/eser bulamamak) YDS'de en çok sorulan eşdizimlerdendir.",
    "distractorAnalysis": {
      "A": "Çare/ilaç demektir; medeniyet için aranmaz.",
      "B": "Tehdit demektir; arama çalışmalarıyla bağdaşmaz.",
      "C": "Çarpışma demektir; medeniyet aramasıyla ilgisizdir.",
      "D": "DOĞRU: 'Find no trace of' (hiçbir iz/eser bulamamak) YDS'de en çok sorulan eşdizimlerdendir.",
      "E": "Zorunluluk demektir; anlamsızdır."
    },
    "tactic": "'No trace of' kalıbı doğrudan isim olarak sorulur. 'Collision' (çarpışma) veya 'obligation' (yükümlülük) bağlam dışıdır.",
    "memoryCode": "🎵 No trace of = izi tozu kalmamış!",
    "isImportant": true,
    "importantTag": "İsim / Collocation",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-vocab-4",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "The committee reached a broad ------- that stricter environmental regulations were necessary to curb carbon emissions.",
    "options": [
      "deterioration",
      "reluctance",
      "discrepancy",
      "consensus",
      "expenditure"
    ],
    "answer": 3,
    "explanation": "'Reach a consensus' (fikir birliğine varmak) YDS metinlerinde çok sık geçen kurumsal bir collocation'dır.",
    "distractorAnalysis": {
      "A": "Kötüleşme demektir; heyetin vardığı bir karar olamaz.",
      "B": "İsteksizlik demektir; düzenlemenin zorunluluğuyla çelişir.",
      "C": "Tutarsızlık demektir; reach fiiliyle bu anlamda uyuşmaz.",
      "D": "DOĞRU: 'Reach a consensus' (fikir birliğine varmak) YDS metinlerinde çok sık geçen kurumsal bir collocation'dır.",
      "E": "Masraf/harcama demektir; bağlam dışıdır."
    },
    "tactic": "'Reach' fiili bir komite veya heyetle birlikte kullanıldığında 'consensus / agreement' arayınız.",
    "memoryCode": "🎵 Reach a consensus = komitede tam uzlaşı!",
    "isImportant": true,
    "importantTag": "İsim / Uzlaşma",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-vocab-5",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Children raised in bilingual households often develop an innate capacity to ------- between two distinct linguistic systems effortlessly.",
    "options": [
      "surrender",
      "demolish",
      "compensate",
      "exaggerate",
      "distinguish"
    ],
    "answer": 4,
    "explanation": "Boşluktan sonra gelen 'between' edatı 'distinguish between X and Y' (ayırt etmek) fiilini zorunlu kılar.",
    "distractorAnalysis": {
      "A": "'surrender to' ile kullanılır (teslim olmak).",
      "B": "Yıkmak demektir; dil sistemleri yıkılmaz.",
      "C": "'compensate for' ile kullanılır (telafi etmek).",
      "D": "Abartmak demektir; between ile kullanılmaz.",
      "E": "DOĞRU: Boşluktan sonra gelen 'between' edatı 'distinguish between X and Y' (ayırt etmek) fiilini zorunlu kılar."
    },
    "tactic": "Boşluktan sonra 'between' görüyorsanız doğrudan 'distinguish', 'differentiate', 'discriminate' seçeneklerine odaklanın.",
    "memoryCode": "🎵 Distinguish between = iki dili şıp diye ayır!",
    "isImportant": true,
    "importantTag": "Fiil / Ayrım",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-vocab-6",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "The transition to electric vehicles has been ------- by substantial subsidies and tax incentives provided by governments.",
    "options": [
      "hampered",
      "accelerated",
      "prohibited",
      "condemned",
      "jeopardized"
    ],
    "answer": 1,
    "explanation": "Sübvansiyon ve vergi indirimleri gibi teşvikler elektrikli araçlara geçişi 'hızlandırmıştır' (accelerate / facilitate).",
    "distractorAnalysis": {
      "A": "Engellemek demektir; sübvansiyonlar engellemez tam aksine kolaylaştırır.",
      "B": "DOĞRU: Sübvansiyon ve vergi indirimleri gibi teşvikler elektrikli araçlara geçişi 'hızlandırmıştır' (accelerate / facilitate).",
      "C": "Yasaklamak demektir; hükümet desteğiyle çelişir.",
      "D": "Kınamak demektir; araç geçişi kınanmaz.",
      "E": "Tehlikeye atmak demektir; devlet desteği tehlikeye atmaz."
    },
    "tactic": "Olumlu devlet teşvikleri süreci olumlu yönde etkiler. Hamper (engellemek) ve jeopardize (tehlikeye atmak) zıt anlamlı çeldiricilerdir.",
    "memoryCode": "🎵 Teşvik varsa accelerate (hızlandır), engel varsa hamper (köstekle)!",
    "isImportant": true,
    "importantTag": "Fiil / Destekleme",
    "ydsFrequency": "%91"
  },
  {
    "id": "tq-imp-vocab-7",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Early humans were extremely ------- to large predators before the development of communal defense strategies and ranged weapons.",
    "options": [
      "invulnerable",
      "resistant",
      "indifferent",
      "immune",
      "vulnerable"
    ],
    "answer": 4,
    "explanation": "'Vulnerable to' (savunmasız, açık hedef) YDS'de en çok sorulan sıfat-edat öbeklerindendir.",
    "distractorAnalysis": {
      "A": "Yenilmez demektir; cümlenin mantığına aykırıdır.",
      "B": "Dirençli demektir; silahsız insanların durumunu açıklamaz.",
      "C": "Kayıtsız demektir; yırtıcı hayvanlara kayıtsız kalınamaz.",
      "D": "Bağışık demektir; hastalıklar için kullanılır.",
      "E": "DOĞRU: 'Vulnerable to' (savunmasız, açık hedef) YDS'de en çok sorulan sıfat-edat öbeklerindendir."
    },
    "tactic": "'To' edatıyla birlikte savunmasızlık bildiren sıfatlar: vulnerable to, susceptible to, prone to.",
    "memoryCode": "🎵 Vulnerable to = savunmasız açık hedef!",
    "isImportant": true,
    "importantTag": "Sıfat / Savunmasızlık",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-vocab-8",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "The newly appointed director promised to allocate ------- resources to modernize the university's research laboratories.",
    "options": [
      "hostile",
      "negligible",
      "fleeting",
      "substantial",
      "trivial"
    ],
    "answer": 3,
    "explanation": "Laboratuvarları modernize etmek için 'substantial' (büyük miktarda, kayda değer) kaynak tahsis edilmelidir.",
    "distractorAnalysis": {
      "A": "Düşmanca demektir; kaynak için kullanılamaz.",
      "B": "Göz ardı edilebilir demektir; laboratuvar yenilenemez.",
      "C": "Gelip geçici demektir; kalıcı bütçeyi ifade etmez.",
      "D": "DOĞRU: Laboratuvarları modernize etmek için 'substantial' (büyük miktarda, kayda değer) kaynak tahsis edilmelidir.",
      "E": "Önemsiz demektir; modernizasyonla çelişir."
    },
    "tactic": "Geliştirme ve modernizasyon projeleri büyük kaynak ister. Negligible (önemsiz) ve trivial (ufak tefek) zıt çeldiricilerdir.",
    "memoryCode": "🎵 Substantial = kayda değer, dağ gibi kaynak!",
    "isImportant": true,
    "importantTag": "Sıfat / Miktar",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-vocab-9",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Unlike his predecessor who acted impulsively, the new minister made policies ------- based on empirical scientific research.",
    "options": [
      "reluctantly",
      "accidentally",
      "hastily",
      "solely",
      "coarsely"
    ],
    "answer": 3,
    "explanation": "Düşüncesizce hareket eden selefinin aksine yeni bakan kararlarını 'yalnızca/sadece' (solely / exclusively) bilimsel araştırmaya dayandırmıştır.",
    "distractorAnalysis": {
      "A": "İsteksizce demektir; tezatlığı desteklemez.",
      "B": "Kazara demektir; bilimsel araştırma kasıtlı bir tercihtir.",
      "C": "Aceleyle demektir; impulsively ile aynı anlamı verip tezatlığı bozardı.",
      "D": "DOĞRU: Düşüncesizce hareket eden selefinin aksine yeni bakan kararlarını 'yalnızca/sadece' (solely / exclusively) bilimsel araştırmaya dayandırmıştır.",
      "E": "Kabaca demektir; bağlam dışıdır."
    },
    "tactic": "'Based on' yapısı öncesinde solely, purely, entirely gibi vurgu zarfları YDS'de sıkça doğru cevaptır.",
    "memoryCode": "🎵 Solely based on = sadece ve sadece kanıta dayalı!",
    "isImportant": true,
    "importantTag": "Zarf / Vurgu",
    "ydsFrequency": "%90"
  },
  {
    "id": "tq-imp-vocab-10",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "The international treaty requires participating nations to implement drastic measures to ------- maritime pollution.",
    "options": [
      "provoke",
      "curb",
      "ignite",
      "aggravate",
      "deteriorate"
    ],
    "answer": 1,
    "explanation": "'Curb' (frenlemek, dizginlemek, sınırlamak) kirlilik, enflasyon ve emisyon gibi zararlı durumları kısıtlamada bir numaralı YDS fiilidir.",
    "distractorAnalysis": {
      "A": "Kışkırtmak demektir; deniz kirliliğini kışkırtmak denmez.",
      "B": "DOĞRU: 'Curb' (frenlemek, dizginlemek, sınırlamak) kirlilik, enflasyon ve emisyon gibi zararlı durumları kısıtlamada bir numaralı YDS fiilidir.",
      "C": "Ateşlemek demektir; kirliliği ateşlemek mantıksızdır.",
      "D": "Ağırlaştırmak demektir; antlaşmanın amacıyla çelişir.",
      "E": "Kötüleşmek (geçişsiz) demektir; nesne alamaz."
    },
    "tactic": "'Curb / control / limit / restrict' eşanlamlıdır. Aggravate (ağırlaştırmak) ve ignite (tutuşturmak) olumsuz çeldiricilerdir.",
    "memoryCode": "🎵 Kirliliği dizginle (curb), büyütme (aggravate)!",
    "isImportant": true,
    "importantTag": "Fiil / Kısıtlama",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-grammar-1",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "By the time the emergency rescue crews ------- the remote mountain village, the blizzard ------- for more than forty-eight hours.",
    "options": [
      "reached / has raged",
      "had reached / was raging",
      "were reaching / had raged",
      "reached / had been raging",
      "would reach / raged"
    ],
    "answer": 3,
    "explanation": "'By the time + Simple Past (reached)' yan cümlesine ana cümlede 'Past Perfect Continuous (had been raging)' eşlik eder.",
    "distractorAnalysis": {
      "A": "Past yan cümle ile Present Perfect ana cümle zaman uyumunu bozar.",
      "B": "By the time içine had V3 girmez, ana cümleye girer.",
      "C": "Ulaşma anlık bir eylemdir; continuous olamaz.",
      "D": "DOĞRU: 'By the time + Simple Past (reached)' yan cümlesine ana cümlede 'Past Perfect Continuous (had been raging)' eşlik eder.",
      "E": "Geçmişteki gerçek olaylarda by the time içine would konmaz."
    },
    "tactic": "By the time + V2 görünce diğer tarafta 'had V3' veya 'had been Ving' arayınız; zaman uyumu kuralıdır.",
    "memoryCode": "🎵 By the time past ile başlarsa, öbür taraf had V3 ile taçlanır!",
    "isImportant": true,
    "importantTag": "Zaman Uyumu / By the time",
    "ydsFrequency": "%99"
  },
  {
    "id": "tq-imp-grammar-2",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Had the engineers ------- the structural defects earlier, the catastrophic bridge collapse ------- completely.",
    "options": [
      "been detected / would prevent",
      "detected / had been prevented",
      "have detected / could prevent",
      "detected / could have been prevented",
      "detect / was prevented"
    ],
    "answer": 3,
    "explanation": "'Had + özne + V3' devrik Type 3 yapısıdır. Sonuç cümlesinde 'could/would have been V3' (past modal) gerekir.",
    "distractorAnalysis": {
      "A": "Özne mühendislerdir; pasif yapı ve aktif sonuç anlamı bozar.",
      "B": "Ana cümleye had V3 tek başına gelemez; modal gerekir.",
      "C": "Had'den sonra have V3 gelmez.",
      "D": "DOĞRU: 'Had + özne + V3' devrik Type 3 yapısıdır. Sonuç cümlesinde 'could/would have been V3' (past modal) gerekir.",
      "E": "Had arkasından yalın fiil gelmez ve Type 3 uyumunu vermez."
    },
    "tactic": "Cümle başında 'Had + özne + V3' görürseniz bu 'If + had V3' demektir; ana cümlede would/could have V3 arayınız.",
    "memoryCode": "🎵 Had başa gelince if uçar, cümlenin sonuna could have V3 konar!",
    "isImportant": true,
    "importantTag": "Devrik Koşul / Inverted If",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-grammar-3",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "------- the rigorous safety inspections and severe penalties, several factories continued to dump toxic chemical waste into the river.",
    "options": [
      "In spite of",
      "As a result of",
      "In accordance with",
      "Because of",
      "In case of"
    ],
    "answer": 0,
    "explanation": "Sıkı güvenlik denetimleri ve ağır cezalara 'rağmen' (In spite of) fabrikaların atık dökmeye devam etmesi bariz bir zıtlıktır.",
    "distractorAnalysis": {
      "A": "DOĞRU: Sıkı güvenlik denetimleri ve ağır cezalara 'rağmen' (In spite of) fabrikaların atık dökmeye devam etmesi bariz bir zıtlıktır.",
      "B": "Sonucu bildirir; cezaların sonucu kirlilik olamaz.",
      "C": "Uyarınca/uygun olarak demektir; cezalara uygun olarak atık dökülmez.",
      "D": "Neden-sonuç bildirir; ceza olduğu için atık döküldü denemez.",
      "E": "Önlem bildirir (durumunda/ihtimaline karşı); mantıksızdır."
    },
    "tactic": "Virgülden sonraki olumsuz eylem ile virgülden önceki önlemler zıt kutupludur (+ / -). Zıtlık bağlacı zorunludur.",
    "memoryCode": "🎵 Önlem var ama atık sürüyorsa: In spite of / Despite!",
    "isImportant": true,
    "importantTag": "Zıtlık / Prepositional Phrase",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-grammar-4",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "The quantum physics theory proposed by the young researcher is ------- intricate ------- only a handful of specialists understand its implications.",
    "options": [
      "such / that",
      "so / that",
      "neither / nor",
      "as / as",
      "too / for"
    ],
    "answer": 1,
    "explanation": "İntricate sıfattır; tek başına gelen sıfat 'so + adj + that' kalıbıyla niteleme ve sonuç bildirir.",
    "distractorAnalysis": {
      "A": "'Such' yanına isim öbeği ister; yalnız sıfatta kullanılmaz.",
      "B": "DOĞRU: İntricate sıfattır; tek başına gelen sıfat 'so + adj + that' kalıbıyla niteleme ve sonuç bildirir.",
      "C": "Olumsuz ikili bağlaçtır; sonuç cümlesi kurmaz.",
      "D": "Eşitlik bildirir; that ile bağlanamaz.",
      "E": "Arkasına mastar (to V1) ister; tam cümleyle kullanılmaz."
    },
    "tactic": "'So + Sıfat + that' kalıbında sıfatın önünde isim veya article (a/an) bulunmaz. İsim olsaydı 'such a/an + sıfat + isim + that' olurdu.",
    "memoryCode": "🎵 Tek sıfata SO yakışır, sıfat+isme SUCH yarışır!",
    "isImportant": true,
    "importantTag": "Sebep-Sonuç / So ... that",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-grammar-5",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "The international expedition team, ------- members had trained in extreme sub-zero conditions, successfully conquered the peak.",
    "options": [
      "where",
      "whose",
      "which",
      "whom",
      "that"
    ],
    "answer": 1,
    "explanation": "Ekip ile üyeleri arasındaki aitlik ilişkisi 'whose + isim' (whose members = üyeleri) yapısını gerektirir.",
    "distractorAnalysis": {
      "A": "Mekân bildirir; üyeler mekan değildir.",
      "B": "DOĞRU: Ekip ile üyeleri arasındaki aitlik ilişkisi 'whose + isim' (whose members = üyeleri) yapısını gerektirir.",
      "C": "Cansız nesneleri niteler; sahiplik bildirmez.",
      "D": "İnsan nesnesini niteler; yanına çıplak isim almaz.",
      "E": "Virgüllü non-defining relative clause yapılarında asla kullanılmaz."
    },
    "tactic": "Boşluğun iki tarafında da isim varsa (ekip ------- üyeleri) ve aralarında sahiplik bağı kuruluyorsa doğru cevap 'whose'dur.",
    "memoryCode": "🎵 İsim ile isim arası iyelik bağı = WHOSE!",
    "isImportant": true,
    "importantTag": "Relative Clause / İyelik",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-grammar-6",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "No sooner ------- the president concluded his speech than the journalists ------- shouting aggressive questions.",
    "options": [
      "has / were beginning",
      "was / had begun",
      "would / began",
      "had / began",
      "did / have begun"
    ],
    "answer": 3,
    "explanation": "'No sooner had + özne + V3 ... than + V2' YDS'nin en klasik devrik zaman kalıbıdır (-er -mez anlamı).",
    "distractorAnalysis": {
      "A": "Present perfect devrik kalıba uymaz.",
      "B": "No sooner arkasından was + özne + concluded denemez.",
      "C": "Zaman ilişkisini geçmişte tamamlanmış olarak vermez.",
      "D": "DOĞRU: 'No sooner had + özne + V3 ... than + V2' YDS'nin en klasik devrik zaman kalıbıdır (-er -mez anlamı).",
      "E": "No sooner geçmişte did ile değil had ile kullanılır."
    },
    "tactic": "No sooner cümle başındaysa yardımcı fiil 'had' özneden önce gelir, bağlaç ise daima 'than'dir.",
    "memoryCode": "🎵 No sooner had ... THAN! Scarcely had ... WHEN!",
    "isImportant": true,
    "importantTag": "Devrik Yapı / No sooner ... than",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-grammar-7",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Archaeologists believe that the ancient stone monument ------- to commemorate a historic military triumph over neighboring tribes.",
    "options": [
      "was erecting",
      "had been erecting",
      "was erected",
      "has erected",
      "erected"
    ],
    "answer": 2,
    "explanation": "Anıt dikme eylemini kendisi yapamaz; 'dikildi / inşa edildi' anlamında pasif (was erected) olmalıdır.",
    "distractorAnalysis": {
      "A": "Geçmişte anıt bir şey dikiyordu anlamına gelir; saçmadır.",
      "B": "Süreç bildiren aktif yapıdır; anıt öznesine uymaz.",
      "C": "DOĞRU: Anıt dikme eylemini kendisi yapamaz; 'dikildi / inşa edildi' anlamında pasif (was erected) olmalıdır.",
      "D": "Hem aktiftir hem de ancient monument için present perfect yanlıştır.",
      "E": "Aktif geçmiş zamandır; anıt birini dikemez."
    },
    "tactic": "Cümle öznesi cansız bir anıt veya yapıt ise fiil pasif olmak zorundadır. V2 'erected' aktif kalır ve elenir.",
    "memoryCode": "🎵 Anıt dikilmez, DİKİLİR (Passive)! Aktif şıkları ele gitsin!",
    "isImportant": true,
    "importantTag": "Passive Voice / Anıtın İnşası",
    "ydsFrequency": "%91"
  },
  {
    "id": "tq-imp-grammar-8",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "You ------- the final report to the executive director yesterday; she specifically asked for it by noon!",
    "options": [
      "could submit",
      "should have submitted",
      "must submit",
      "might submit",
      "would rather submit"
    ],
    "answer": 1,
    "explanation": "'Yesterday' zaman zarfı ve yöneticinin öğleye kadar istemiş olması geçmişte yapılması gereken ama yapılmayan eylemi (should have V3) gösterir.",
    "distractorAnalysis": {
      "A": "Geçmiş genel yetenektir; yerine getirilmeyen görevi eleştirmez.",
      "B": "DOĞRU: 'Yesterday' zaman zarfı ve yöneticinin öğleye kadar istemiş olması geçmişte yapılması gereken ama yapılmayan eylemi (should have V3) gösterir.",
      "C": "Geniş/gelecek zamandır; 'yesterday' ile kullanılamaz.",
      "D": "Zayıf ihtimaldir; kesin talimata uymaz.",
      "E": "Tercih bildirir; yöneticinin talebine cevap vermez."
    },
    "tactic": "Geçmişe dönük pişmanlık, kaçırılmış görev veya sitem daima 'should have V3' veya 'ought to have V3' ile ifade edilir.",
    "memoryCode": "🎵 Dün yapmalıydın ama yapmadın: SHOULD HAVE V3!",
    "isImportant": true,
    "importantTag": "Past Modal / Kaçırılan Görev",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-grammar-9",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "------- the global financial crisis deepened, central banks began to lower interest rates to stimulate borrowing.",
    "options": [
      "Although",
      "Unless",
      "Even though",
      "As",
      "Whereas"
    ],
    "answer": 3,
    "explanation": "Kriz derinleştikçe / derinleştiği için (As) merkez bankalarının faiz indirmesi eşzamanlı bir süreç ve sebep ilişkisidir.",
    "distractorAnalysis": {
      "A": "Zıtlık bildirir; kriz derinleştiğinde faiz indirmek zıtlık değil olağan tedbirdir.",
      "B": "Medikçe/madıkça demektir; olumsuz koşuldur.",
      "C": "Zıtlık bildirir; bağlamla çelişir.",
      "D": "DOĞRU: Kriz derinleştikçe / derinleştiği için (As) merkez bankalarının faiz indirmesi eşzamanlı bir süreç ve sebep ilişkisidir.",
      "E": "Taban tabana zıt iki özneyi karşılaştırır; tek özne sürecinde kullanılmaz."
    },
    "tactic": "'As' hem 'dıkça/dikçe' (paralel değişim) hem de 'çünkü/için' (sebep) anlamıyla bu tip ekonomik metinlerde YDS'nin favorisidir.",
    "memoryCode": "🎵 Zamanla değişim ve sebep bir arada = AS!",
    "isImportant": true,
    "importantTag": "Zaman & Sebep / As",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-grammar-10",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "The laboratory manager insists on ------- the sterilization protocols before any new chemical experiment is initiated.",
    "options": [
      "review",
      "reviewing",
      "to be reviewed",
      "having reviewed",
      "to review"
    ],
    "answer": 1,
    "explanation": "'Insist on' edatıyla (preposition) biter; bütün edatlardan sonra fiil '-ing' (gerund) biçiminde gelir.",
    "distractorAnalysis": {
      "A": "Yalın fiil edat arkasında gelemez.",
      "B": "DOĞRU: 'Insist on' edatıyla (preposition) biter; bütün edatlardan sonra fiil '-ing' (gerund) biçiminde gelir.",
      "C": "Edat arkasında to'lu pasif mastar kullanılmaz.",
      "D": "Öncelik vurgusu gerektiren bir durum yoktur; rutin kuraldır.",
      "E": "Edattan sonra to-infinitive asla gelmez."
    },
    "tactic": "Kural: Edat + V-ing! (insist on doing, look forward to meeting, succeed in finding).",
    "memoryCode": "🎵 Edatı gördün mü arkasına V-ing'i yapıştır!",
    "isImportant": true,
    "importantTag": "Gerund / Preposition arkası",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-cloze-1",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The Renaissance was a fervent period of European cultural, artistic, political and economic rebirth following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance (I) ------- the rediscovery of classical philosophy, literature and art. Some of the greatest thinkers, authors, statesmen, scientists and artists in human history thrived during this era, (II) ------- global exploration opened up new lands and cultures to European commerce.",
    "stem": "Renaissance metninde (I) numaralı boşluk için en uygun ifade hangisidir?",
    "options": [
      "discouraged",
      "concealed",
      "prohibited",
      "neglected",
      "promoted"
    ],
    "answer": 4,
    "explanation": "Rönesans felsefe ve sanatın yeniden keşfedilmesini 'teşvik etmiş/desteklemiştir' (promoted).",
    "distractorAnalysis": {
      "A": "Cesaretini kırdı/vazgeçirdi demektir; tam zıttır.",
      "B": "Gizledi demektir; keşif bağlamına uymaz.",
      "C": "Yasakladı demektir; Rönesans ruhuna aykırıdır.",
      "D": "İhmal etti demektir; yeniden doğuşla çelişir.",
      "E": "DOĞRU: Rönesans felsefe ve sanatın yeniden keşfedilmesini 'teşvik etmiş/desteklemiştir' (promoted)."
    },
    "tactic": "Dönemin altın çağı anlatıldığından olumlu ve ilerici bir fiil aranmalıdır.",
    "memoryCode": "🎵 Kültürel canlanma felsefeyi destekler (promote)!",
    "isImportant": true,
    "importantTag": "Cloze Test / Kelime",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-cloze-2",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The Renaissance was a fervent period of European rebirth... Some of the greatest thinkers thrived during this era, (II) ------- global exploration opened up new lands and cultures to European commerce.",
    "stem": "Renaissance metninde (II) numaralı boşluk için en uygun bağlaç hangisidir?",
    "options": [
      "although",
      "lest",
      "unless",
      "in case",
      "while"
    ],
    "answer": 4,
    "explanation": "Büyük düşünürler gelişirken 'aynı zamanda' (while / as) küresel keşiflerin yeni topraklar açması eşzamanlı iki olumlu olgudur.",
    "distractorAnalysis": {
      "A": "Zıtlık bildirir; iki pozitif olgu arasında zıtlık kurulamaz.",
      "B": "Korkusuyla/olmasın diye demektir; anlamsızdır.",
      "C": "Medikçe demektir; olumsuz koşul bağlam dışıdır.",
      "D": "Önlem bildirir; keşifler önlem amaçlı değildir.",
      "E": "DOĞRU: Büyük düşünürler gelişirken 'aynı zamanda' (while / as) küresel keşiflerin yeni topraklar açması eşzamanlı iki olumlu olgudur."
    },
    "tactic": "Zıtlık değil eşzamanlı paralel süreç anlatılmaktadır; 'while' (iken / aynı zamanda) doğru seçimdir.",
    "memoryCode": "🎵 İki çağdaş gelişme el ele yürüyorsa: WHILE!",
    "isImportant": true,
    "importantTag": "Cloze Test / Bağlaç",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-cloze-3",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "Deep-sea ecosystems are among the most enigmatic habitats on Earth. Hydrothermal vents, discovered only in the late 1970s, support thriving biological communities (I) ------- complete absence of sunlight. Organisms here rely on chemosynthesis rather than photosynthesis, (II) ------- microbes convert toxic chemicals into life-sustaining organic matter.",
    "stem": "Derin deniz metninde (I) numaralı boşluk için en uygun edat öbeği hangisidir?",
    "options": [
      "in terms of the",
      "due to the",
      "in spite of the",
      "as a result of the",
      "on behalf of the"
    ],
    "answer": 2,
    "explanation": "Güneş ışığının tamamen yokluğuna 'rağmen' (in spite of) zengin yaşam topluluklarının barınması olağanüstü bir zıtlıktır.",
    "distractorAnalysis": {
      "A": "Bakımından demektir; zıtlığı vermez.",
      "B": "Yüzünden demektir; güneş yokluğu yaşamın sebebi değildir.",
      "C": "DOĞRU: Güneş ışığının tamamen yokluğuna 'rağmen' (in spite of) zengin yaşam topluluklarının barınması olağanüstü bir zıtlıktır.",
      "D": "Sonucu olarak demektir; mantıksızdır.",
      "E": "Adına demektir; bağlamla ilgisizdir."
    },
    "tactic": "Güneşsizlik (-) ile zengin yaşam (+) arasındaki tezat 'in spite of' gerektirir.",
    "memoryCode": "🎵 Güneş yok ama yaşam fışkırıyor: In spite of the absence!",
    "isImportant": true,
    "importantTag": "Cloze Test / Prepositional Zıtlık",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-cloze-4",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "YDS",
    "passage": "Deep-sea ecosystems are among the most enigmatic habitats... Organisms rely on chemosynthesis, (II) ------- microbes convert toxic chemicals into life-sustaining organic matter.",
    "stem": "Derin deniz metninde (II) numaralı boşluk için en uygun bağlaç hangisidir?",
    "options": [
      "in which",
      "whose",
      "whereby",
      "which",
      "what"
    ],
    "answer": 0,
    "explanation": "Kemosentez sürecinde mikropların kimyasalları dönüştürmesi 'in which / whereby' (içinde / vasıtasıyla) yapısını gerektirir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Kemosentez sürecinde mikropların kimyasalları dönüştürmesi 'in which / whereby' (içinde / vasıtasıyla) yapısını gerektirir.",
      "B": "İyelik ister; virgülden sonra aitlik bağı yoktur.",
      "C": "Benzerdir ancak standart edatlı relative 'in which' önceliklidir.",
      "D": "Özne veya nesne eksikliği ister; cümle tamdır.",
      "E": "İsimden sonra relative zamiri olarak what gelmez."
    },
    "tactic": "Süreç veya yöntem anlatan soyut isimlerden sonra 'in which' veya 'whereby' tam cümleyle bağlanır.",
    "memoryCode": "🎵 Süreç içinde gerçekleşen olay = in which!",
    "isImportant": true,
    "importantTag": "Cloze Test / Relative Clause",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-cloze-5",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The human immune system is a sophisticated biological network designed to defend the body against pathogenic invaders. When a pathogen enters the bloodstream, specialized white blood cells are dispatched to (I) ------- the threat before it can cause widespread cellular damage.",
    "stem": "Bağışıklık sistemi metninde (I) numaralı boşluk için en uygun fiil hangisidir?",
    "options": [
      "trigger",
      "prolong",
      "neutralize",
      "cultivate",
      "overlook"
    ],
    "answer": 2,
    "explanation": "Akyuvarların görevi patojen tehdidini 'etkisiz hale getirmek'tir (neutralize / eliminate).",
    "distractorAnalysis": {
      "A": "Tetiklemek demektir; akyuvar tehdidi tetiklemez.",
      "B": "Uzatmak demektir; vücut hastalığı uzatmak istemez.",
      "C": "DOĞRU: Akyuvarların görevi patojen tehdidini 'etkisiz hale getirmek'tir (neutralize / eliminate).",
      "D": "Yetiştirmek/geliştirmek demektir; tehdit geliştirilmez.",
      "E": "Görmezden gelmek demektir; savunma sistemi ihmal etmez."
    },
    "tactic": "Savunma mekanizması tehditleri yok eder veya nötralize eder. Cultivate (yetiştirmek) ve prolong (uzatmak) çeldiricidir.",
    "memoryCode": "🎵 Tehdit varsa nötralize et (neutralize), uzatma (prolong)!",
    "isImportant": true,
    "importantTag": "Cloze Test / Fiil",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-cloze-6",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "YDS",
    "passage": "Cognitive psychologists have long debated whether human memories are stored as exact replicas of past experiences (I) ------- reconstructed dynamically each time they are recalled. Recent neuroimaging data strongly suggests the latter.",
    "stem": "Bilişsel psikoloji metninde (I) numaralı boşluk için en uygun bağlaç hangisidir?",
    "options": [
      "or",
      "and",
      "nor",
      "so",
      "but"
    ],
    "answer": 0,
    "explanation": "'Whether ... or ...' (öyle mi yoksa böyle mi) kalıbı iki alternatifli tartışmaları bağlamak için zorunludur.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Whether ... or ...' (öyle mi yoksa böyle mi) kalıbı iki alternatifli tartışmaları bağlamak için zorunludur.",
      "B": "Whether ile birlikte ikili seçenek kalıbı oluşturmaz.",
      "C": "Neither ile kullanılır; whether ile kullanılmaz.",
      "D": "Sonuç bağlacıdır; whether ile eşleşmez.",
      "E": "Zıtlık bağlacıdır; whether but kalıbı yoktur."
    },
    "tactic": "Cümle başında 'whether' gördüğünüzde ikinci parçada mutlaka 'or' arayınız.",
    "memoryCode": "🎵 Whether gördün mü gözün OR arasın!",
    "isImportant": true,
    "importantTag": "Cloze Test / İkili Yapı",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-cloze-7",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "YDS",
    "passage": "Urban agriculture has emerged as a promising solution to food insecurity in densely populated metropolises. By utilizing abandoned rooftops and vertical indoor hydroponic systems, city growers can produce fresh vegetables (I) ------- minimal water consumption.",
    "stem": "Kent tarımı metninde (I) numaralı boşluk için en uygun edat hangisidir?",
    "options": [
      "without",
      "beyond",
      "with",
      "under",
      "against"
    ],
    "answer": 2,
    "explanation": "Gelişmiş topraksız tarım yöntemleriyle sebzeler minimum su tüketimi 'ile / kullanarak' (with) yetiştirilir.",
    "distractorAnalysis": {
      "A": "'Without minimal' denmez; mantıksız bir ikili olur.",
      "B": "Ötesinde demektir; miktar öbeğine uymaz.",
      "C": "DOĞRU: Gelişmiş topraksız tarım yöntemleriyle sebzeler minimum su tüketimi 'ile / kullanarak' (with) yetiştirilir.",
      "D": "Altında demektir; su tüketimi fiziksel bir altlık değildir.",
      "E": "Karşı demektir; anlamsızdır."
    },
    "tactic": "Bir vasıta ve şart bildiren 'with minimal water' doğal edat kullanımıdır.",
    "memoryCode": "🎵 Asgari kaynak ile = WITH minimal consumption!",
    "isImportant": true,
    "importantTag": "Cloze Test / Edat",
    "ydsFrequency": "%90"
  },
  {
    "id": "tq-imp-cloze-8",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "Space telescopes positioned beyond Earth's turbulent atmosphere can capture extraordinarily sharp images of distant galaxies. (I) ------- ground-based observatories must constantly compensate for atmospheric distortion, orbital instruments enjoy unobstructed cosmic clarity.",
    "stem": "Uzay teleskopları metninde (I) numaralı boşluk için en uygun geçiş sözcüğü hangisidir?",
    "options": [
      "Otherwise",
      "Therefore",
      "Furthermore",
      "Consequently",
      "Whereas"
    ],
    "answer": 4,
    "explanation": "Yeryüzü teleskopları atmosferik bozulmayla uğraşmak zorundayken, uzay teleskoplarının engelsiz netliğe sahip olması taban tabana zıt bir karşılaştırmadır (Whereas / While).",
    "distractorAnalysis": {
      "A": "Aksi takdirde demektir; koşul yok.",
      "B": "Bu yüzden demektir; iki taraf arasında neden-sonuç yoktur.",
      "C": "Ayrıca demektir; karşıtlığı bağlamaz.",
      "D": "Sonuç olarak demektir; hatalı bağlar.",
      "E": "DOĞRU: Yeryüzü teleskopları atmosferik bozulmayla uğraşmak zorundayken, uzay teleskoplarının engelsiz netliğe sahip olması taban tabana zıt bir karşılaştırmadır (Whereas / While)."
    },
    "tactic": "İki farklı gözlem sisteminin avantaj ve dezavantajı karşılaştırılıyor: 'Whereas X ..., Y ...' yapısı tam oturur.",
    "memoryCode": "🎵 İki farklı sistemi kıyaslıyorsan = WHEREAS!",
    "isImportant": true,
    "importantTag": "Cloze Test / Zıtlık Karşılaştırması",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-sent-1",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Although the pharmaceutical corporation invested billions of dollars in developing the experimental Alzheimer's drug, -------.",
    "options": [
      "the clinical trials failed to demonstrate statistically significant cognitive improvements",
      "it was immediately approved by health authorities worldwide",
      "which revolutionized the treatment of neurological degenerative disorders",
      "because the initial laboratory results were exceptionally promising",
      "therefore patients experienced remarkable long-term memory recovery"
    ],
    "answer": 0,
    "explanation": "'Although' (rağmen) ile başlayan yan cümlede milyarlarca dolar yatırım (+) yapıldığı belirtildiğinden, ana cümlede başarısızlık veya hayal kırıklığı (-) beklenir.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Although' (rağmen) ile başlayan yan cümlede milyarlarca dolar yatırım (+) yapıldığı belirtildiğinden, ana cümlede başarısızlık veya hayal kırıklığı (-) beklenir.",
      "B": "İlacın hemen onaylanması olumlu bir sonuçtur; zıtlık bağlacıyla uyumsuzdur.",
      "C": "Which ile başlayan sıfat cümleciği ana cümle yerine geçemez.",
      "D": "Because ile yeni bir yan cümle açılamaz; ana cümle eksik kalır.",
      "E": "Therefore iki bağımsız cümleyi bağlar; Although varken kullanılamaz."
    },
    "tactic": "Although + Pozitif giriş = Negatif ana cümle! Yatırım büyük ama klinik testler başarısız oldu.",
    "memoryCode": "🎵 Although ile umut başlar, ana cümlede hüzün yaşanır!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Zıtlık",
    "ydsFrequency": "%98"
  },
  {
    "id": "tq-imp-sent-2",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "-------, the government decided to declare a state of emergency and mobilize the armed forces.",
    "options": [
      "As the devastating wildfire rapidly spread toward residential suburbs and threatened thousands of lives",
      "No matter how trivial the damage caused by the minor electrical sparks appeared",
      "Despite the fact that the fire had been brought completely under control by local firefighters",
      "In order that international tourists could enjoy the coastal natural reserves safely",
      "Even if the meteorological department had forecasted heavy seasonal rainfall"
    ],
    "answer": 0,
    "explanation": "Hükümetin olağanüstü hal ilan edip orduyu seferber etmesi son derece vahim bir tehlikeyi gerektirir. 'As the wildfire rapidly spread...' mükemmel sebep cümlesidir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Hükümetin olağanüstü hal ilan edip orduyu seferber etmesi son derece vahim bir tehlikeyi gerektirir. 'As the wildfire rapidly spread...' mükemmel sebep cümlesidir.",
      "B": "Önemsiz hasar için acil durum ilan edilmez.",
      "C": "'Despite the fact that the fire had been brought completely under control by local firefighters' cümlenin mantıksal veya gramatik akışını bozar.",
      "D": "'In order that international tourists could enjoy the coastal natural reserves safely' cümlenin mantıksal veya gramatik akışını bozar.",
      "E": "Yağmur tahmini ordu seferberliğini açıklamaz."
    },
    "tactic": "Ana cümledeki olağanüstü tedbir ancak kontrol edilemeyen acil bir felaket sebebiyle ('As ...') açıklanabilir.",
    "memoryCode": "🎵 Olağanüstü tedbir = Olağanüstü felaket gerekçesi (As / Because)!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Sebep",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-sent-3",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Unless developing countries receive substantial financial assistance and technological transfer from wealthy nations, -------.",
    "options": [
      "they would have eliminated all poverty within the past two decades",
      "which will allow them to build modern green energy infrastructure independently",
      "they have already surpassed their industrial manufacturing projections",
      "they will be unable to achieve their ambitious carbon reduction targets by 2030",
      "since global economic prosperity depends heavily on mutual cooperation"
    ],
    "answer": 3,
    "explanation": "'Unless' (medikçe/madıkça) olumsuz koşul bildirir: Zengin ülkelerden destek almadıkça hedeflerine 'ulaşamayacaklardır' (will be unable to).",
    "distractorAnalysis": {
      "A": "Type 3 geçmiş zaman kalıbıdır; present koşulla eşleşmez.",
      "B": "Which yan cümledir; bağımsız ana cümle oluşturamaz.",
      "C": "Geçmişte aşmış olmaları geleceğe dönük unless koşuluna uymaz.",
      "D": "DOĞRU: 'Unless' (medikçe/madıkça) olumsuz koşul bildirir: Zengin ülkelerden destek almadıkça hedeflerine 'ulaşamayacaklardır' (will be unable to).",
      "E": "Since yan cümlesi ana cümlenin yerini tutamaz."
    },
    "tactic": "Unless + olumlu fiil = olumsuz ana cümle ('will not' veya 'will be unable to'). Zaman Type 1 (Present -> Future) olmalıdır.",
    "memoryCode": "🎵 Unless ile şart koşulur, ana cümlede olumsuz sonuç doğar!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Unless Koşulu",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-sent-4",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "In order to ensure that artificial intelligence algorithms make ethical and unbiased decisions, -------.",
    "options": [
      "although many commercial tech companies prioritize rapid market release over safety",
      "so that machines might eventually replace human judges in legal proceedings",
      "because automated systems operate entirely without subjective personal prejudice",
      "software engineers must train them on diverse and rigorously audited datasets",
      "which are frequently accused of perpetuating historical social inequalities"
    ],
    "answer": 3,
    "explanation": "'In order to ensure ...' (sağlamak amacıyla) amaç bildirir; özne ve fiil bu amacı gerçekleştirecek aksiyonu içermelidir: Mühendisler çeşitli veri setleriyle eğitmelidir.",
    "distractorAnalysis": {
      "A": "'although many commercial tech companies prioritize rapid market release over safety' cümlenin mantıksal veya gramatik akışını bozar.",
      "B": "'so that machines might eventually replace human judges in legal proceedings' cümlenin mantıksal veya gramatik akışını bozar.",
      "C": "Gerekçe sunar ancak amacın nasıl sağlanacağını anlatmaz.",
      "D": "DOĞRU: 'In order to ensure ...' (sağlamak amacıyla) amaç bildirir; özne ve fiil bu amacı gerçekleştirecek aksiyonu içermelidir: Mühendisler çeşitli veri setleriyle eğitmelidir.",
      "E": "Sıfat cümleciğidir; ana cümle değildir."
    },
    "tactic": "Amaç ifadesinden sonra bunu hayata geçirecek yetkili bir özne ve zorunluluk fiili ('engineers must train...') aranmalıdır.",
    "memoryCode": "🎵 Amaç verildiğinde eylemi yapacak mantıklı özneyi bul!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Amaç",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-sent-5",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Whereas traditional printed newspapers have experienced a steep decline in circulation over the last decade, -------.",
    "options": [
      "digital news platforms and podcasts have witnessed an unprecedented surge in subscribers",
      "so that readers can access breaking news reports from anywhere in the world",
      "because advertising revenues have shifted almost entirely to online search engines",
      "as print production costs reached historic highs during the economic crisis",
      "despite the fact that journalism schools continue to teach classic investigative reporting"
    ],
    "answer": 0,
    "explanation": "'Whereas' (oysa / -e karşın) zıt iki özneyi karşılaştırır: Geleneksel gazeteler düşerken, dijital haber platformları rekor artış yaşamıştır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Whereas' (oysa / -e karşın) zıt iki özneyi karşılaştırır: Geleneksel gazeteler düşerken, dijital haber platformları rekor artış yaşamıştır.",
      "B": "Amaç cümlesidir; zıt özneli karşılaştırmayı tamamlamaz.",
      "C": "Yan cümledir; ana cümle yerine geçemez.",
      "D": "Sebep cümlesidir; ana cümle eksiktir.",
      "E": "Yeni bir zıtlık yan cümlesidir; cümle havada kalır."
    },
    "tactic": "Whereas özne karşılaştırması ister: Geleneksel gazete (azalış) <-> Dijital platform (artış).",
    "memoryCode": "🎵 Gazete düşüyor, dijital uçuyor: İki ayrı kutup = WHEREAS!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Taban Tabana Zıtlık",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-sent-6",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Given that honeybees play a vital role in pollinating more than a third of the crops consumed by humanity, -------.",
    "options": [
      "although pesticide manufacturers deny any causal connection with hive collapse",
      "even if wild flowering plants could survive without insect cross-pollination",
      "their mysterious population decline poses an existential threat to global food security",
      "therefore beekeepers harvest hundreds of metric tons of honey annually",
      "which has prompted urban citizens to install rooftop beehives in major cities"
    ],
    "answer": 2,
    "explanation": "'Given that' (mademki / göz önüne alındığında) bir gerçeği sebep gösterir. Arıların hayati rolü göz önüne alındığında, ölümleri küresel gıda güvenliğine tehdittir.",
    "distractorAnalysis": {
      "A": "'although pesticide manufacturers deny any causal connection with hive collapse' cümlenin mantıksal veya gramatik akışını bozar.",
      "B": "Koşul yan cümlesidir; ana cümle eksik kalır.",
      "C": "DOĞRU: 'Given that' (mademki / göz önüne alındığında) bir gerçeği sebep gösterir. Arıların hayati rolü göz önüne alındığında, ölümleri küresel gıda güvenliğine tehdittir.",
      "D": "Gıda tehdidi varken bal hasadı ana vurgu olamaz.",
      "E": "'which has prompted urban citizens to install rooftop beehives in major cities' cümlenin mantıksal veya gramatik akışını bozar."
    },
    "tactic": "Given that + Hayati gerçek = Kaçınılmaz ciddi sonuç.",
    "memoryCode": "🎵 Mademki arılar kritik = Yok oluşları gıda kıtlığı yaratır!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Given that",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-sent-7",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "------- that the earliest human inhabitants migrated across the Bering land bridge during the last glacial maximum.",
    "options": [
      "No matter how harsh the climatic conditions along the coastal corridor were",
      "Compelling archaeological and genetic evidence has definitively proven",
      "Despite widespread disagreement among leading evolutionary anthropologists",
      "In order to investigate the prehistoric settlement patterns in North America",
      "Because radiocarbon dating techniques have become increasingly sophisticated"
    ],
    "answer": 1,
    "explanation": "Boşluktan sonra gelen 'that + tam cümle' bir isim cümlecikleridir (noun clause). Bunu bir iddia veya kanıt fiili ('Evidence has proven that...') tamamlar.",
    "distractorAnalysis": {
      "A": "'No matter how harsh the climatic conditions along the coastal corridor were' cümlenin mantıksal veya gramatik akışını bozar.",
      "B": "DOĞRU: Boşluktan sonra gelen 'that + tam cümle' bir isim cümlecikleridir (noun clause). Bunu bir iddia veya kanıt fiili ('Evidence has proven that...') tamamlar.",
      "C": "Prepositional öbektir; that cümlesini nesne olarak alamaz.",
      "D": "'In order to investigate the prehistoric settlement patterns in North America' cümlenin mantıksal veya gramatik akışını bozar.",
      "E": "Sebep cümleciğidir; ana cümle eksik kalır."
    },
    "tactic": "Boşluğun devamında 'that + cümle' varsa ön tarafta 'Evidence proves that / Scientists believe that' kalıbı aranır.",
    "memoryCode": "🎵 Kanıt gösterdi ki = Evidence has proven THAT!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / That Clause",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-sent-8",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Even though modern surgical procedures have become remarkably safe due to minimally invasive robotic technology, -------.",
    "options": [
      "they were developed through decades of rigorous clinical research and experimentation",
      "because hospital infections have been virtually eradicated in developed nations",
      "which significantly reduces hospital recovery time and post-operative complications",
      "so that surgeons can perform complex neurovascular operations with microscopic precision",
      "patients are still required to sign comprehensive informed consent forms outlining potential risks"
    ],
    "answer": 4,
    "explanation": "Ameliyatların son derece güvenli hale gelmesine 'rağmen' (Even though), hastaların risk belirten onay formlarını imzalamak zorunda olması zıtlıktır.",
    "distractorAnalysis": {
      "A": "'they were developed through decades of rigorous clinical research and experimentation' cümlenin mantıksal veya gramatik akışını bozar.",
      "B": "'because hospital infections have been virtually eradicated in developed nations' cümlenin mantıksal veya gramatik akışını bozar.",
      "C": "'which significantly reduces hospital recovery time and post-operative complications' cümlenin mantıksal veya gramatik akışını bozar.",
      "D": "'so that surgeons can perform complex neurovascular operations with microscopic precision' cümlenin mantıksal veya gramatik akışını bozar.",
      "E": "DOĞRU: Ameliyatların son derece güvenli hale gelmesine 'rağmen' (Even though), hastaların risk belirten onay formlarını imzalamak zorunda olması zıtlıktır."
    },
    "tactic": "Even though + Çok güvenli = Yine de risk formu imzalanıyor (zıt tedbir).",
    "memoryCode": "🎵 Güvenli ama yine de imza şart = EVEN THOUGH!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Even though",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-sent-9",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Just as the invention of the printing press democratized access to written knowledge in the fifteenth century, -------.",
    "options": [
      "because authoritarian regimes attempted to censor radical religious publications",
      "while literacy rates remained stubbornly low among rural peasant populations",
      "in case future generations would lose interest in classical ancient literature",
      "so the rise of the internet has revolutionized the global dissemination of information today",
      "although handwritten manuscripts were preserved with immense reverence in monasteries"
    ],
    "answer": 3,
    "explanation": "'Just as ... so ...' (tıpkı ... olduğu gibi ... da) iki çağ veya olgu arasındaki kusursuz benzerliği anlatır: Matbaanın bilgiyi yayması gibi internet de devrim yapmıştır.",
    "distractorAnalysis": {
      "A": "'because authoritarian regimes attempted to censor radical religious publications' cümlenin mantıksal veya gramatik akışını bozar.",
      "B": "'while literacy rates remained stubbornly low among rural peasant populations' cümlenin mantıksal veya gramatik akışını bozar.",
      "C": "'in case future generations would lose interest in classical ancient literature' cümlenin mantıksal veya gramatik akışını bozar.",
      "D": "DOĞRU: 'Just as ... so ...' (tıpkı ... olduğu gibi ... da) iki çağ veya olgu arasındaki kusursuz benzerliği anlatır: Matbaanın bilgiyi yayması gibi internet de devrim yapmıştır.",
      "E": "'although handwritten manuscripts were preserved with immense reverence in monasteries' cümlenin mantıksal veya gramatik akışını bozar."
    },
    "tactic": "Just as + Geçmiş Devrim = SO + Günümüz Devrimi.",
    "memoryCode": "🎵 Tıpkı matbaa gibi, internet de devrim yaptı: JUST AS ... SO ...!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Benzetme",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-sent-10",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "So severe was the drought that ravaged the agricultural heartland of the country -------.",
    "options": [
      "although the government dispatched emergency water supply convoys",
      "that thousands of farming families were forced to abandon their ancestral lands",
      "because groundwater reserves had been depleted by decades of unsustainable irrigation",
      "unless international humanitarian organizations intervene with food aid packages",
      "which caused grain prices to skyrocket in metropolitan commodity markets"
    ],
    "answer": 1,
    "explanation": "'So + sıfat + was + özne ... that' devrik sebep-sonuç yapısıdır. Cümle 'that + tam cümle' (öyle şiddetliydi ki binlerce aile terk etmek zorunda kaldı) ile tamamlanır.",
    "distractorAnalysis": {
      "A": "Zıtlık yan cümlesidir; devrik So kalıbının that sonucunu vermez.",
      "B": "DOĞRU: 'So + sıfat + was + özne ... that' devrik sebep-sonuç yapısıdır. Cümle 'that + tam cümle' (öyle şiddetliydi ki binlerce aile terk etmek zorunda kaldı) ile tamamlanır.",
      "C": "'because groundwater reserves had been depleted by decades of unsustainable irrigation' cümlenin mantıksal veya gramatik akışını bozar.",
      "D": "'unless international humanitarian organizations intervene with food aid packages' cümlenin mantıksal veya gramatik akışını bozar.",
      "E": "'which caused grain prices to skyrocket in metropolitan commodity markets' cümlenin mantıksal veya gramatik akışını bozar."
    },
    "tactic": "Cümle başında 'So + sıfat + devrik fiil' varsa ikinci parçada mutlaka 'that + sonuç cümlesi' aranmalıdır.",
    "memoryCode": "🎵 So severe was the drought ... THAT thousands fled!",
    "isImportant": true,
    "importantTag": "Cümle Tamamlama / Devrik So ... that",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-entr-1",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"The discovery of penicillin by Alexander Fleming in 1928 not only revolutionized modern medicine but also paved the way for the development of countless life-saving antibiotics.\"",
    "options": [
      "Alexander Fleming tarafından 1928'de penisilinin keşfedilmesi, yalnızca modern tıpta devrim yaratmakla kalmamış, aynı zamanda hayat kurtaran sayısız antibiyotiğin geliştirilmesine de zemin hazırlamıştır.",
      "Hayat kurtaran sayısız antibiyotiğin geliştirilmesi, Alexander Fleming'in 1928'de penisilini keşfetmesiyle mümkün hale gelmiştir.",
      "Modern tıpta devrim yaratan Alexander Fleming, 1928'de penisilini bularak sayısız hayat kurtaran antibiyotik üretilmesini sağlamıştır.",
      "1928 yılında Alexander Fleming penisilini keşfederek modern tıpta devrim yapmış ve hayat kurtaran antibiyotikler geliştirmiştir.",
      "Penisilin 1928'de Alexander Fleming tarafından keşfedilince, hem modern tıp devrim yaşamış hem de antibiyotikler hayat kurtarmaya başlamıştır."
    ],
    "answer": 0,
    "explanation": "'Not only ... but also ...' yapısı Türkçeye 'yalnızca ... kalmamış, aynı zamanda ... da' olarak aktarılır. Ana yüklem 'zemin hazırlamıştır' (paved the way) olmalıdır.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Not only ... but also ...' yapısı Türkçeye 'yalnızca ... kalmamış, aynı zamanda ... da' olarak aktarılır. Ana yüklem 'zemin hazırlamıştır' (paved the way) olmalıdır.",
      "B": "'Hayat kurtaran sayısız antibiyotiğin geliştirilmesi, Alexander Fleming'in 1928'de penisilini keşfetmesiyle mümkün hale gelmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "'Modern tıpta devrim yaratan Alexander Fleming, 1928'de penisilini bularak sayısız hayat kurtaran antibiyotik üretilmesini sağlamıştır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "D": "'1928 yılında Alexander Fleming penisilini keşfederek modern tıpta devrim yapmış ve hayat kurtaran antibiyotikler geliştirmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Penisilin 1928'de Alexander Fleming tarafından keşfedilince, hem modern tıp devrim yaşamış hem de antibiyotikler hayat kurtarmaya başlamıştır.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "İngilizce cümlenin ana fiiline ve 'not only ... but also' ikilisine bakın: 'yalnızca ... ile kalmamış, aynı zamanda ...'.",
    "memoryCode": "🎵 Not only ... but also = Yalnızca değil, aynı zamanda da!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / Not only but also",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-entr-2",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"Unless strict international regulations are enforced to protect endangered marine ecosystems, many rare coral species will become extinct within a few decades.\"",
    "options": [
      "Deniz ekosistemlerinin korunması için uluslararası yasalar çıkarılmadığı takdirde mercan türleri hemen yok olma sürecine girecektir.",
      "Birkaç on yıl içinde yok olma tehlikesi yaşayan nadir mercan türleri, ancak katı uluslararası düzenlemelerin uygulanmasıyla yaşayabilir.",
      "Nesli tükenmekte olan deniz ekosistemlerini korumak için katı uluslararası düzenlemeler uygulanmadıkça, birçok nadir mercan türünün nesli birkaç on yıl içinde tükenecektir.",
      "Uluslararası alanda katı kurallar uygulanırsa nadir mercan türleri korunacak ve deniz ekosistemleri yok olmaktan kurtulacaktır.",
      "Nesli tükenmekte olan mercan türlerini korumak amacıyla uluslararası kurallar getirilse bile ekosistemler birkaç on yıla kadar yok olacaktır."
    ],
    "answer": 2,
    "explanation": "'Unless ... are enforced' ifadesi '-medikçe / uygulanmadıkça' şeklinde çevrilir. Ana cümlenin yüklemi 'tükenecektir' (will become extinct) olmalıdır.",
    "distractorAnalysis": {
      "A": "'Deniz ekosistemlerinin korunması için uluslararası yasalar çıkarılmadığı takdirde mercan türleri hemen yok olma sürecine girecektir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "'Birkaç on yıl içinde yok olma tehlikesi yaşayan nadir mercan türleri, ancak katı uluslararası düzenlemelerin uygulanmasıyla yaşayabilir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "DOĞRU: 'Unless ... are enforced' ifadesi '-medikçe / uygulanmadıkça' şeklinde çevrilir. Ana cümlenin yüklemi 'tükenecektir' (will become extinct) olmalıdır.",
      "D": "'Uluslararası alanda katı kurallar uygulanırsa nadir mercan türleri korunacak ve deniz ekosistemleri yok olmaktan kurtulacaktır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Nesli tükenmekte olan mercan türlerini korumak amacıyla uluslararası kurallar getirilse bile ekosistemler birkaç on yıla kadar yok olacaktır.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "Unless = -medikçe / -madıkça. Yüklem: nesli tükenecektir. Bu iki unsuru taşıyan tek şık doğrudur.",
    "memoryCode": "🎵 Unless = -medikçe! Yüklemi bul, şıkkı vur!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / Unless Şartı",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-entr-3",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"Recent neuroimaging studies indicate that regular aerobic exercise significantly enhances cognitive flexibility by stimulating the growth of new brain cells.\"",
    "options": [
      "Son nörogörüntüleme araştırmalarına göre yeni beyin hücreleri ancak aerobik egzersizler düzenli yapıldığında büyümektedir.",
      "Son nörogörüntüleme çalışmaları, düzenli aerobik egzersizin yeni beyin hücrelerinin büyümesini uyararak bilişsel esnekliği önemli ölçüde artırdığını göstermektedir.",
      "Yeni beyin hücrelerinin büyümesini uyaran düzenli egzersizler bilişsel esnekliği artırmakta ve bunu nörogörüntüleme kanıtlamaktadır.",
      "Düzenli aerobik egzersiz yapmak beyin hücrelerini büyüttüğü için bilişsel esneklik son çalışmalara göre artış göstermektedir.",
      "Bilişsel esnekliğin artırılması için düzenli aerobik egzersiz yapılması gerektiği nörogörüntüleme çalışmalarında belirtilmektedir."
    ],
    "answer": 1,
    "explanation": "Ana özne: 'Recent neuroimaging studies' (Son nörogörüntüleme çalışmaları). Ana yüklem: 'indicate that' (... olduğunu göstermektedir). Zarf: 'significantly' (önemli ölçüde).",
    "distractorAnalysis": {
      "A": "'Son nörogörüntüleme araştırmalarına göre yeni beyin hücreleri ancak aerobik egzersizler düzenli yapıldığında büyümektedir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "DOĞRU: Ana özne: 'Recent neuroimaging studies' (Son nörogörüntüleme çalışmaları). Ana yüklem: 'indicate that' (... olduğunu göstermektedir). Zarf: 'significantly' (önemli ölçüde).",
      "C": "'Yeni beyin hücrelerinin büyümesini uyaran düzenli egzersizler bilişsel esnekliği artırmakta ve bunu nörogörüntüleme kanıtlamaktadır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "D": "'Düzenli aerobik egzersiz yapmak beyin hücrelerini büyüttüğü için bilişsel esneklik son çalışmalara göre artış göstermektedir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Bilişsel esnekliğin artırılması için düzenli aerobik egzersiz yapılması gerektiği nörogörüntüleme çalışmalarında belirtilmektedir.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "İngilizce cümlenin ana öznesi ve yüklemi: 'Çalışmalar göstermektedir'. Aradaki 'by stimulating' ise '-erek / uyararak' şeklinde çevrilmelidir.",
    "memoryCode": "🎵 Özne = Çalışmalar, Yüklem = Göstermektedir!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / That Clause",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-entr-4",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"Although the treaty was signed by all representatives, its implementation was delayed due to fierce political disagreements among member states.\"",
    "options": [
      "Tüm temsilciler antlaşmayı imzaladığı halde üye ülkeler anlaşmazlığa düşmüş ve antlaşma iptal edilmiştir.",
      "Temsilciler antlaşmayı imzalasa da üye ülkeler arasındaki anlaşmazlıklar yüzünden uygulama tamamen durdurulmuştur.",
      "Antlaşma tüm temsilciler tarafından imzalanmış olmasına rağmen, üye devletler arasındaki şiddetli siyasi anlaşmazlıklar nedeniyle uygulanması gecikmiştir.",
      "Üye devletler arasındaki siyasi tartışmalar antlaşmanın imzalanmasını engellemiş ve yürürlüğe girmesini geciktirmiştir.",
      "Antlaşmanın gecikmeli olarak uygulanması, tüm temsilcilerin imzalamasına rağmen üye devletlerin siyasi çekişmelerinden kaynaklanmıştır."
    ],
    "answer": 2,
    "explanation": "'Although the treaty was signed' = Antlaşma imzalanmış olmasına rağmen. 'its implementation was delayed' = uygulanması gecikmiştir. 'due to ... disagreements' = anlaşmazlıklar nedeniyle.",
    "distractorAnalysis": {
      "A": "'Tüm temsilciler antlaşmayı imzaladığı halde üye ülkeler anlaşmazlığa düşmüş ve antlaşma iptal edilmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "'Temsilciler antlaşmayı imzalasa da üye ülkeler arasındaki anlaşmazlıklar yüzünden uygulama tamamen durdurulmuştur.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "DOĞRU: 'Although the treaty was signed' = Antlaşma imzalanmış olmasına rağmen. 'its implementation was delayed' = uygulanması gecikmiştir. 'due to ... disagreements' = anlaşmazlıklar nedeniyle.",
      "D": "'Üye devletler arasındaki siyasi tartışmalar antlaşmanın imzalanmasını engellemiş ve yürürlüğe girmesini geciktirmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Antlaşmanın gecikmeli olarak uygulanması, tüm temsilcilerin imzalamasına rağmen üye devletlerin siyasi çekişmelerinden kaynaklanmıştır.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "Although (-e rağmen) ve 'was delayed' (gecikmiştir) ifadelerinin birebir korunduğu seçenek aranmalıdır.",
    "memoryCode": "🎵 Although = -e rağmen, was delayed = gecikmiştir!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / Although & Pasif",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-entr-5",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"Scientists who investigated the fossilized remains discovered that ancient reptiles had developed feathers millions of years before birds evolved.\"",
    "options": [
      "Eski sürüngenlerin tüy geliştirdiğini belirten bilim insanları, fosilleşmiş kalıntıları inceleyerek kuşların evrimini aydınlatmıştır.",
      "Kuşların evriminden milyonlarca yıl önce yaşayan sürüngenler, bilim insanlarının fosil araştırmaları sayesinde keşfedilmiştir.",
      "Fosilleşmiş kalıntıları inceleyen bilim insanları, eski sürüngenlerin kuşlar evrimleşmeden milyonlarca yıl önce tüy geliştirdiğini keşfettiler.",
      "Kuşlar evrimleşmeden önce tüy geliştiren sürüngenlerin fosilleri, bilim insanlarının yaptığı incelemelerle ortaya çıkarılmıştır.",
      "Bilim insanları fosil kalıntılarını inceleyerek eski sürüngenlerin kuşlardan milyonlarca yıl sonra tüylendiğini buldular."
    ],
    "answer": 2,
    "explanation": "'Scientists who investigated ...' = Fosilleşmiş kalıntıları inceleyen bilim insanları (özne). 'discovered that ...' = keşfettiler (yüklem). 'millions of years before birds evolved' = kuşlar evrimleşmeden milyonlarca yıl önce.",
    "distractorAnalysis": {
      "A": "'Eski sürüngenlerin tüy geliştirdiğini belirten bilim insanları, fosilleşmiş kalıntıları inceleyerek kuşların evrimini aydınlatmıştır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "'Kuşların evriminden milyonlarca yıl önce yaşayan sürüngenler, bilim insanlarının fosil araştırmaları sayesinde keşfedilmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "DOĞRU: 'Scientists who investigated ...' = Fosilleşmiş kalıntıları inceleyen bilim insanları (özne). 'discovered that ...' = keşfettiler (yüklem). 'millions of years before birds evolved' = kuşlar evrimleşmeden milyonlarca yıl önce.",
      "D": "'Kuşlar evrimleşmeden önce tüy geliştiren sürüngenlerin fosilleri, bilim insanlarının yaptığı incelemelerle ortaya çıkarılmıştır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Bilim insanları fosil kalıntılarını inceleyerek eski sürüngenlerin kuşlardan milyonlarca yıl sonra tüylendiğini buldular.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "Who sıfat cümleciği özneyi niteler: 'inceleyen bilim insanları'. Ana yüklem ise cümlenin sonundaki 'keşfettiler'dir.",
    "memoryCode": "🎵 İnceleyen bilim insanları (Özne) ... keşfettiler (Yüklem)!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / Relative Clause",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-entr-6",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"Had the emergency warning sirens sounded in time, the residents living near the coastal cliff could have evacuated their homes safely.\"",
    "options": [
      "Acil durum uyarı sirenleri zamanında çalmış olsaydı, kıyı falezinin yakınında yaşayan mahalle sakinleri evlerini güvenli bir şekilde tahliye edebilirdi.",
      "Acil durum sirenleri zamanında çaldığı için kıyıdaki falezde oturan sakinler güvenle evlerinden ayrılabilmiştir.",
      "Kıyı falezinde yaşayanlar evlerini tahliye edemedi çünkü acil durum sirenleri zamanında çalmadı.",
      "Eğer sirenler zamanında uyarı verseydi kıyı falezindeki mahalle sakinleri evlerini terk etmek zorunda kalmazdı.",
      "Uyarı sirenlerinin geç çalması nedeniyle falez yakınındaki evler zamanında tahliye edilememiştir."
    ],
    "answer": 0,
    "explanation": "'Had the sirens sounded in time' devrik Type 3 şart yapısıdır: 'zamanında çalmış olsaydı'. 'could have evacuated safely' = 'güvenli bir şekilde tahliye edebilirdi'.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Had the sirens sounded in time' devrik Type 3 şart yapısıdır: 'zamanında çalmış olsaydı'. 'could have evacuated safely' = 'güvenli bir şekilde tahliye edebilirdi'.",
      "B": "'Acil durum sirenleri zamanında çaldığı için kıyıdaki falezde oturan sakinler güvenle evlerinden ayrılabilmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "'Kıyı falezinde yaşayanlar evlerini tahliye edemedi çünkü acil durum sirenleri zamanında çalmadı.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "D": "'Eğer sirenler zamanında uyarı verseydi kıyı falezindeki mahalle sakinleri evlerini terk etmek zorunda kalmazdı.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Uyarı sirenlerinin geç çalması nedeniyle falez yakınındaki evler zamanında tahliye edilememiştir.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "Had + V3 = -saydı/-seydi. could have V3 = -ebilirdi/-abilirdi. Koşul ve yetenek kipi eksiksiz aktarılmalıdır.",
    "memoryCode": "🎵 Çalmış olsaydı ... tahliye edebilirdi!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / Devrik Şart",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-entr-7",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"The primary objective of the international climate summit is to establish binding targets that compel developed nations to curb carbon emissions.\"",
    "options": [
      "İklim zirvesinin temel amacı bağlayıcı hedefler koyarak gelişmiş ülkelerin karbon salınımını tamamen durdurmaktır.",
      "Uluslararası iklim zirvesinin birincil hedefi, gelişmiş ülkeleri karbon emisyonlarını dizginlemeye zorlayan bağlayıcı hedefler belirlemektir.",
      "Gelişmiş ülkelerin emisyonlarını sınırlamak için bağlayıcı hedefler koymak, uluslararası iklim zirvesinin tek amacı olmuştur.",
      "Karbon emisyonlarının dizginlenmesi amacıyla toplanan iklim zirvesi, gelişmiş uluslara zorlayıcı yükümlülükler getirmek istemektedir.",
      "Uluslararası iklim zirvesinde gelişmiş ülkelerin karbon emisyonlarını kısıtlaması için bağlayıcı kararlar alınması hedeflenmektedir."
    ],
    "answer": 1,
    "explanation": "Özne: 'The primary objective ...' (birincil hedefi). Yüklem: 'is to establish ...' (belirlemektir). Sıfat cümleciği: 'that compel ...' (zorlayan bağlayıcı hedefler).",
    "distractorAnalysis": {
      "A": "'İklim zirvesinin temel amacı bağlayıcı hedefler koyarak gelişmiş ülkelerin karbon salınımını tamamen durdurmaktır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "DOĞRU: Özne: 'The primary objective ...' (birincil hedefi). Yüklem: 'is to establish ...' (belirlemektir). Sıfat cümleciği: 'that compel ...' (zorlayan bağlayıcı hedefler).",
      "C": "'Gelişmiş ülkelerin emisyonlarını sınırlamak için bağlayıcı hedefler koymak, uluslararası iklim zirvesinin tek amacı olmuştur.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "D": "'Karbon emisyonlarının dizginlenmesi amacıyla toplanan iklim zirvesi, gelişmiş uluslara zorlayıcı yükümlülükler getirmek istemektedir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "'Uluslararası iklim zirvesinde gelişmiş ülkelerin karbon emisyonlarını kısıtlaması için bağlayıcı kararlar alınması hedeflenmektedir.' çeviride anlam kaybı veya yapısal sapma içerir."
    },
    "tactic": "Özne: 'iklim zirvesinin birincil hedefi', Yüklem: '... belirlemektir'. İsim cümlesi yapısı korunmalıdır.",
    "memoryCode": "🎵 Birincil hedefi (Özne) ... belirlemektir (Yüklem)!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / İsim Cümlesi",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-entr-8",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz:\n\n\"By analyzing tiny air bubbles trapped within ancient Antarctic ice cores, paleoclimatologists can reconstruct Earth's atmospheric composition over the past 800,000 years.\"",
    "options": [
      "Antarktika buz çekirdeklerinde bulunan hava kabarcıkları analiz edildiğinde, Dünya atmosferinin 800.000 yıl önceki durumu anlaşılabilir.",
      "Dünya atmosferinin son 800.000 yılını araştıran uzmanlar, Antarktika'daki buz çekirdeklerinde sıkışan kabarcıkları kullanmaktadır.",
      "Son 800.000 yıllık atmosferik veriler, Antarktika'da buz içine hapsolan minik kabarcıkların incelenmesiyle doğrulanabilmiştir.",
      "Paleoklimatologlar son 800.000 yıllık atmosfer bileşimini araştırmak için Antarktika'daki hava kabarcıklarını incelerler.",
      "Antarktika'nın kadim buz çekirdekleri içinde hapsolmuş minik hava kabarcıklarını analiz ederek, paleoklimatologlar Dünya'nın son 800.000 yıldaki atmosferik bileşimini yeniden kurgulayabilirler."
    ],
    "answer": 4,
    "explanation": "'By analyzing ...' = analiz ederek / inceleyerek (-erek/-arak). Özne: 'paleoclimatologists' (paleoklimatologlar). Yüklem: 'can reconstruct' (yeniden kurgulayabilirler / inşa edebilirler).",
    "distractorAnalysis": {
      "A": "'Antarktika buz çekirdeklerinde bulunan hava kabarcıkları analiz edildiğinde, Dünya atmosferinin 800.000 yıl önceki durumu anlaşılabilir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "B": "'Dünya atmosferinin son 800.000 yılını araştıran uzmanlar, Antarktika'daki buz çekirdeklerinde sıkışan kabarcıkları kullanmaktadır.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "C": "'Son 800.000 yıllık atmosferik veriler, Antarktika'da buz içine hapsolan minik kabarcıkların incelenmesiyle doğrulanabilmiştir.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "D": "'Paleoklimatologlar son 800.000 yıllık atmosfer bileşimini araştırmak için Antarktika'daki hava kabarcıklarını incelerler.' çeviride anlam kaybı veya yapısal sapma içerir.",
      "E": "DOĞRU: 'By analyzing ...' = analiz ederek / inceleyerek (-erek/-arak). Özne: 'paleoclimatologists' (paleoklimatologlar). Yüklem: 'can reconstruct' (yeniden kurgulayabilirler / inşa edebilirler)."
    },
    "tactic": "'By + Ving' = '-erek / -arak'. Yüklem: 'reconstruct edebilirler / kurgulayabilirler'.",
    "memoryCode": "🎵 By analyzing = Analiz ederek, can reconstruct = kurgulayabilirler!",
    "isImportant": true,
    "importantTag": "Çeviri EN-TR / By + Ving",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-tren-1",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Gelişmekte olan ülkeler temiz enerji teknolojilerine yatırım yapmadıkça, sanayi üretimlerini artırırken çevre kirliliğini önlemeleri imkansız olacaktır.\"",
    "options": [
      "Although developing countries invest heavily in clean energy, preventing pollution during industrial expansion remains very difficult.",
      "As long as developing nations invested in renewable green energy, they were able to prevent widespread environmental degradation.",
      "If developing countries do not invest in clean energy, they cannot increase their industrial manufacturing and environmental pollution.",
      "Unless developing countries invest in clean energy technologies, it will be impossible for them to prevent environmental pollution while increasing their industrial production.",
      "Unless industrial production is increased by developing countries, clean energy technologies will be impossible to implement without pollution."
    ],
    "answer": 3,
    "explanation": "Türkçe şart: 'yatırım yapmadıkça' (Unless developing countries invest). Ana yüklem: 'imkansız olacaktır' (it will be impossible). Yan zarf: 'artırırken' (while increasing).",
    "distractorAnalysis": {
      "A": "'Although developing countries invest heavily in clean energy, preventing pollution during industrial expansion remains very difficult.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "'As long as developing nations invested in renewable green energy, they were able to prevent widespread environmental degradation.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'If developing countries do not invest in clean energy, they cannot increase their industrial manufacturing and environmental pollution.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "DOĞRU: Türkçe şart: 'yatırım yapmadıkça' (Unless developing countries invest). Ana yüklem: 'imkansız olacaktır' (it will be impossible). Yan zarf: 'artırırken' (while increasing).",
      "E": "'Unless industrial production is increased by developing countries, clean energy technologies will be impossible to implement without pollution.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir."
    },
    "tactic": "'-medikçe' = Unless. 'imkansız olacaktır' = it will be impossible. İki yapıyı eksiksiz birleştiren şık aranır.",
    "memoryCode": "🎵 Yapmadıkça = Unless, İmkansız olacak = will be impossible!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Unless & While",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-tren-2",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Tarihçiler, yazının icadının yalnızca kayıt tutmayı kolaylaştırmakla kalmayıp insan düşüncesinin yapısını da kökten değiştirdiğini savunmaktadır.\"",
    "options": [
      "Historians argue that the invention of writing not only facilitated record-keeping but also fundamentally altered the structure of human thought.",
      "Historians claimed that writing was not only invented for record-keeping but it also transformed historical thinking.",
      "It is argued by historians that human thought changed fundamentally because the invention of writing facilitated records.",
      "Historians believed that record-keeping became easier after the invention of writing, which changed human thinking completely.",
      "According to historians, writing was invented in order to keep records easily and improve the cognitive capacity of humans."
    ],
    "answer": 0,
    "explanation": "Özne: 'Historians' (Tarihçiler). Yüklem: 'argue that' (savunmaktadır). İkili yapı: 'not only facilitated ... but also fundamentally altered' (yalnızca kolaylaştırmakla kalmayıp ... kökten değiştirdiğini).",
    "distractorAnalysis": {
      "A": "DOĞRU: Özne: 'Historians' (Tarihçiler). Yüklem: 'argue that' (savunmaktadır). İkili yapı: 'not only facilitated ... but also fundamentally altered' (yalnızca kolaylaştırmakla kalmayıp ... kökten değiştirdiğini).",
      "B": "'Historians claimed that writing was not only invented for record-keeping but it also transformed historical thinking.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'It is argued by historians that human thought changed fundamentally because the invention of writing facilitated records.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'Historians believed that record-keeping became easier after the invention of writing, which changed human thinking completely.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "'According to historians, writing was invented in order to keep records easily and improve the cognitive capacity of humans.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir."
    },
    "tactic": "Özne + savunmaktadır (argue that). 'yalnızca ... değil, aynı zamanda ...' (not only ... but also).",
    "memoryCode": "🎵 Savunmaktadır = argue that, kalmayıp ... değiştirdiğini = not only ... but also!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Not only but also",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-tren-3",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Hükümet, kamu sağlığını korumak amacıyla tütün ürünlerine uygulanan vergileri gelecek aydan itibaren yüzde yirmi oranında artıracağını duyurdu.\"",
    "options": [
      "It was announced by the government that tobacco products would be heavily taxed starting next month to eliminate health hazards.",
      "The government will announce next month that taxes on tobacco products are going to be increased by twenty percent for health reasons.",
      "The government announced twenty percent higher taxes on all consumer products to safeguard public health starting immediately.",
      "In order to protect public health, the government has decided to ban tobacco products and increase taxes next month by twenty percent.",
      "The government announced that it would increase taxes on tobacco products by twenty percent starting next month in order to protect public health."
    ],
    "answer": 4,
    "explanation": "Özne: 'The government' (Hükümet). Yüklem: 'announced that' (duyurdu). Gelecek zaman aktarımı: 'would increase' (artıracağını). Miktar: 'by twenty percent' (%20 oranında).",
    "distractorAnalysis": {
      "A": "'It was announced by the government that tobacco products would be heavily taxed starting next month to eliminate health hazards.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "'The government will announce next month that taxes on tobacco products are going to be increased by twenty percent for health reasons.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'The government announced twenty percent higher taxes on all consumer products to safeguard public health starting immediately.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'In order to protect public health, the government has decided to ban tobacco products and increase taxes next month by twenty percent.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "DOĞRU: Özne: 'The government' (Hükümet). Yüklem: 'announced that' (duyurdu). Gelecek zaman aktarımı: 'would increase' (artıracağını). Miktar: 'by twenty percent' (%20 oranında)."
    },
    "tactic": "'Duyurdu ki artıracak' aktarmalı anlatımı: announced that it would increase. Yüzde yirmi oranında = by twenty percent.",
    "memoryCode": "🎵 Duyurdu = announced that, artıracağını = would increase!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Reported Speech",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-tren-4",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Yapay zekanın iş gücü piyasasında yol açtığı hızlı dönüşüm, birçok geleneksel mesleğin önümüzdeki on yıl içinde yok olabileceği endişesini doğurmuştur.\"",
    "options": [
      "The labor market is transforming so rapidly that artificial intelligence might replace traditional professions within a decade.",
      "Artificial intelligence has rapidly transformed the labor market, so traditional professions will definitely disappear in ten years.",
      "The rapid transformation caused by artificial intelligence in the labor market has raised concerns that many traditional professions may disappear within the next decade.",
      "Concerns have been raised by traditional workers that artificial intelligence will eliminate all jobs in the labor market next decade.",
      "Many traditional professions are disappearing because artificial intelligence transforms the labor market faster than expected."
    ],
    "answer": 2,
    "explanation": "Özne: 'The rapid transformation caused by AI in the labor market' (Yapay zekanın piyasada yol açtığı hızlı dönüşüm). Yüklem: 'has raised concerns that ...' (endişesini doğurmuştur). İhtimal: 'may disappear' (yok olabileceği).",
    "distractorAnalysis": {
      "A": "'The labor market is transforming so rapidly that artificial intelligence might replace traditional professions within a decade.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "'Artificial intelligence has rapidly transformed the labor market, so traditional professions will definitely disappear in ten years.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "DOĞRU: Özne: 'The rapid transformation caused by AI in the labor market' (Yapay zekanın piyasada yol açtığı hızlı dönüşüm). Yüklem: 'has raised concerns that ...' (endişesini doğurmuştur). İhtimal: 'may disappear' (yok olabileceği).",
      "D": "'Concerns have been raised by traditional workers that artificial intelligence will eliminate all jobs in the labor market next decade.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "'Many traditional professions are disappearing because artificial intelligence transforms the labor market faster than expected.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir."
    },
    "tactic": "Özne: 'The rapid transformation ...', Yüklem: 'has raised concerns that ...' (endişe doğurdu).",
    "memoryCode": "🎵 Dönüşüm (Özne) ... endişe doğurdu (has raised concerns that)!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Noun Clause",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-tren-5",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Uzmanlar, küresel sıcaklık artışı iki derecenin altında tutulamazsa kuraklık ve sel gibi aşırı hava olaylarının çok daha sık yaşanacağı konusunda uyarıyor.\"",
    "options": [
      "Experts warned that global temperatures could not be kept under two degrees without causing frequent floods and severe droughts.",
      "If extreme weather events like droughts happen frequently, experts believe that global warming will exceed two degrees.",
      "According to experts, extreme weather events like floods and droughts occurred because global temperatures rose above two degrees.",
      "Experts are warning governments to keep temperature rise under two degrees in order to prevent floods and drought completely.",
      "Experts warn that if the global temperature rise cannot be kept below two degrees, extreme weather events such as droughts and floods will occur much more frequently."
    ],
    "answer": 4,
    "explanation": "Özne: 'Experts' (Uzmanlar). Yüklem: 'warn that' (uyarıyor). Koşul: 'if ... cannot be kept below two degrees' (2 derecenin altında tutulamazsa). Sonuç: 'will occur much more frequently' (çok daha sık yaşanacaktır).",
    "distractorAnalysis": {
      "A": "'Experts warned that global temperatures could not be kept under two degrees without causing frequent floods and severe droughts.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "'If extreme weather events like droughts happen frequently, experts believe that global warming will exceed two degrees.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'According to experts, extreme weather events like floods and droughts occurred because global temperatures rose above two degrees.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'Experts are warning governments to keep temperature rise under two degrees in order to prevent floods and drought completely.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "DOĞRU: Özne: 'Experts' (Uzmanlar). Yüklem: 'warn that' (uyarıyor). Koşul: 'if ... cannot be kept below two degrees' (2 derecenin altında tutulamazsa). Sonuç: 'will occur much more frequently' (çok daha sık yaşanacaktır)."
    },
    "tactic": "Geniş zaman uyarı: Experts warn that. Pasif koşul: if ... cannot be kept below. Sonuç: will occur much more frequently.",
    "memoryCode": "🎵 Uyarıyor = Experts warn that, tutulamazsa = cannot be kept!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / If Clause & Pasif",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-tren-6",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Antibiyotiklerin bilinçsiz ve aşırı kullanımı, bakterilerin bu ilaçlara karşı direnç geliştirmesine yol açarak modern tıbbı ciddi bir krizle karşı karşıya bırakmaktadır.\"",
    "options": [
      "Because of indiscriminate antibiotics, bacteria have caused a major medical crisis that modern doctors cannot solve easily.",
      "The indiscriminate and excessive use of antibiotics leads bacteria to develop resistance against these drugs, confronting modern medicine with a severe crisis.",
      "Bacteria develop resistance against drugs whenever antibiotics are excessively used by irresponsible patients in medicine.",
      "Modern medicine faces a crisis because bacteria become resistant when people use too many antibiotics without prescription.",
      "The excessive use of drugs by modern medicine has allowed resistant bacteria to create a dangerous global health crisis."
    ],
    "answer": 1,
    "explanation": "Özne: 'The indiscriminate and excessive use of antibiotics' (Bilinçsiz ve aşırı kullanım). Yüklem: 'leads bacteria to develop resistance' (direnç geliştirmesine yol açar). Kısaltma: 'confronting ... with a severe crisis' (karşı karşıya bırakarak).",
    "distractorAnalysis": {
      "A": "'Because of indiscriminate antibiotics, bacteria have caused a major medical crisis that modern doctors cannot solve easily.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "DOĞRU: Özne: 'The indiscriminate and excessive use of antibiotics' (Bilinçsiz ve aşırı kullanım). Yüklem: 'leads bacteria to develop resistance' (direnç geliştirmesine yol açar). Kısaltma: 'confronting ... with a severe crisis' (karşı karşıya bırakarak).",
      "C": "'Bacteria develop resistance against drugs whenever antibiotics are excessively used by irresponsible patients in medicine.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'Modern medicine faces a crisis because bacteria become resistant when people use too many antibiotics without prescription.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "'The excessive use of drugs by modern medicine has allowed resistant bacteria to create a dangerous global health crisis.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir."
    },
    "tactic": "'-erek / -arak' bağlamı İngilizcede virgül + Ving participle (confronting ...) ile mükemmel karşılanır.",
    "memoryCode": "🎵 Kullanım yol açar (leads), karşı karşıya bırakarak (confronting)!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Participle Reduction",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-tren-7",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Güneş panellerinin üretim maliyetlerindeki belirgin düşüş, yenilenebilir enerjiyi fosil yakıtlar karşısında çok daha rekabetçi bir konuma getirmiştir.\"",
    "options": [
      "The marked decrease in the production costs of solar panels has made renewable energy much more competitive against fossil fuels.",
      "The production of solar panels decreased sharply, which made renewable energy as cheap as traditional fossil fuels.",
      "Solar panels are produced much more cheaply today, so that fossil fuels can compete with clean renewable energy.",
      "Fossil fuels have lost their competitiveness since solar panels became the primary source of global electricity generation.",
      "Renewable energy has become competitive because fossil fuels are now more expensive than solar panel production."
    ],
    "answer": 0,
    "explanation": "Özne: 'The marked decrease in the production costs of solar panels' (Güneş panellerinin üretim maliyetlerindeki belirgin düşüş). Yüklem: 'has made renewable energy much more competitive' (çok daha rekabetçi bir konuma getirmiştir).",
    "distractorAnalysis": {
      "A": "DOĞRU: Özne: 'The marked decrease in the production costs of solar panels' (Güneş panellerinin üretim maliyetlerindeki belirgin düşüş). Yüklem: 'has made renewable energy much more competitive' (çok daha rekabetçi bir konuma getirmiştir).",
      "B": "'The production of solar panels decreased sharply, which made renewable energy as cheap as traditional fossil fuels.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'Solar panels are produced much more cheaply today, so that fossil fuels can compete with clean renewable energy.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'Fossil fuels have lost their competitiveness since solar panels became the primary source of global electricity generation.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "'Renewable energy has become competitive because fossil fuels are now more expensive than solar panel production.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir."
    },
    "tactic": "Etkisi süren geçmiş değişim: 'has made ... much more competitive'. Özne: maliyetlerdeki belirgin düşüş (The marked decrease in costs).",
    "memoryCode": "🎵 Belirgin düşüş (marked decrease) ... daha rekabetçi kıldı (has made more competitive)!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Present Perfect",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-tren-8",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz:\n\n\"Yabancı bir dili akıcı şekilde konuşabilmek, yalnızca gramer kurallarını ezberlemekle değil, o dilin kültürel bağlamını kavramakla da mümkündür.\"",
    "options": [
      "It is possible to speak a language without grammar rules as long as you live in its natural cultural environment.",
      "Unless you grasp the cultural context of a language, memorizing its grammatical rules will not help you speak fluently.",
      "Fluency in a foreign language depends entirely on memorizing grammar rather than understanding foreign cultural traditions.",
      "Speaking a foreign language fluently requires students to memorize all grammar rules before understanding cultural nuances.",
      "Being able to speak a foreign language fluently is possible not only by memorizing grammar rules but also by grasping the cultural context of that language."
    ],
    "answer": 4,
    "explanation": "Özne: 'Being able to speak a foreign language fluently' (Yabancı bir dili akıcı konuşabilmek). Yüklem: 'is possible not only by ... but also by ...' (yalnızca ... değil, aynı zamanda ... ile mümkündür).",
    "distractorAnalysis": {
      "A": "'It is possible to speak a language without grammar rules as long as you live in its natural cultural environment.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "B": "'Unless you grasp the cultural context of a language, memorizing its grammatical rules will not help you speak fluently.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "C": "'Fluency in a foreign language depends entirely on memorizing grammar rather than understanding foreign cultural traditions.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "D": "'Speaking a foreign language fluently requires students to memorize all grammar rules before understanding cultural nuances.' İngilizce çeviride eksik/fazla anlam veya gramer hatası içerir.",
      "E": "DOĞRU: Özne: 'Being able to speak a foreign language fluently' (Yabancı bir dili akıcı konuşabilmek). Yüklem: 'is possible not only by ... but also by ...' (yalnızca ... değil, aynı zamanda ... ile mümkündür)."
    },
    "tactic": "Özne mastar (Being able to speak). Yüklem: is possible not only by ... but also by ...",
    "memoryCode": "🎵 Akıcı konuşmak mümkündür = is possible not only by ... but also by ...!",
    "isImportant": true,
    "importantTag": "Çeviri TR-EN / Not only but also",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-para-1",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"For centuries, historians believed that the fall of the Western Roman Empire was caused solely by barbarian invasions. -------. Recent archaeological findings and climate proxy records indicate that prolonged megadroughts and devastating plagues severely weakened the empire's agricultural and economic base long before the final Germanic incursions.\"",
    "options": [
      "Furthermore, Roman emperors welcomed foreign warriors into their imperial bodyguard units with generous stipends",
      "Therefore, historical research has confirmed that military invasions were the only determining catalyst",
      "Consequently, neighboring civilizations easily adopted the administrative institutions left behind by the Romans",
      "However, contemporary scholars argue that a far more intricate combination of internal factors precipitated the collapse",
      "In fact, the barbarian tribes were culturally superior to the Roman legions in every military aspect"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce eski tek boyutlu inanç ('believed ... solely by barbarian invasions'), boşluktan sonra ise iklim ve iç faktörler anlatılıyor. Araya 'However ... contemporary scholars argue ...' zıtlık köprüsü gerekir.",
    "distractorAnalysis": {
      "A": "'Furthermore, Roman emperors welcomed foreign warriors into their imperial bodyguard units with generous stipends' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'Therefore, historical research has confirmed that military invasions were the only determining catalyst' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'Consequently, neighboring civilizations easily adopted the administrative institutions left behind by the Romans' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "DOĞRU: Boşluktan önce eski tek boyutlu inanç ('believed ... solely by barbarian invasions'), boşluktan sonra ise iklim ve iç faktörler anlatılıyor. Araya 'However ... contemporary scholars argue ...' zıtlık köprüsü gerekir.",
      "E": "'In fact, the barbarian tribes were culturally superior to the Roman legions in every military aspect' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "Boşluk öncesi 'Eskiden sadece X sanılırdı' diyorsa, boşlukta 'Oysa günümüzde Y faktörleri öne çıkıyor (However...)' gelmelidir.",
    "memoryCode": "🎵 Eskiden öyle sanılırdı + HOWEVER + Şimdi yeni bulgular var!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Zıtlık Geçişi",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-para-2",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"Bioluminescence, the production and emission of light by living organisms, is widespread in marine environments. In the pitch-black depths of the ocean, creatures use light for camouflage, attracting prey, and communicating with mates. -------. For instance, the anglerfish dangles a luminous lure right in front of its mouth to entice unsuspecting fish into its jaws.\"",
    "options": [
      "Terrestrial fireflies also flash rhythmic yellow patterns during their summer courtship rituals",
      "Some predatory species have evolved highly specialized luminous appendages specifically designed for hunting",
      "Deep-sea submarines must carry heavy industrial floodlights to illuminate the sea floor",
      "Sunlight penetrates only the upper two hundred meters of the oceanic water column",
      "Consequently, marine biologists have abandoned the study of abyssal optical phenomena"
    ],
    "answer": 1,
    "explanation": "Boşluktan sonra 'For instance, the anglerfish dangles a luminous lure ... to entice prey' (Örneğin fener balığı avını çekmek için yem sallar) deniyor. Boşluk 'avlanmak için ışıklı uzuv geliştiren avcılar' cümlesi olmalıdır.",
    "distractorAnalysis": {
      "A": "'Terrestrial fireflies also flash rhythmic yellow patterns during their summer courtship rituals' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "DOĞRU: Boşluktan sonra 'For instance, the anglerfish dangles a luminous lure ... to entice prey' (Örneğin fener balığı avını çekmek için yem sallar) deniyor. Boşluk 'avlanmak için ışıklı uzuv geliştiren avcılar' cümlesi olmalıdır.",
      "C": "'Deep-sea submarines must carry heavy industrial floodlights to illuminate the sea floor' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "'Sunlight penetrates only the upper two hundred meters of the oceanic water column' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "'Consequently, marine biologists have abandoned the study of abyssal optical phenomena' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "Boşluktan sonraki 'For instance' örneği neyin örneğidir? Fener balığının avlanma uzvunun! Boşlukta bu genel kural yer almalıdır.",
    "memoryCode": "🎵 For instance avcı fener balığını veriyorsa, boşluk avcı türleri anlatır!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Örnekleme",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-para-3",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"Urban green spaces, such as parks, community gardens, and green roofs, provide vital ecosystem services in densely populated cities. They mitigate urban heat island effects, filter air pollutants, and absorb stormwater runoff. -------. Studies show that residents living near urban parks report significantly lower levels of cortisol, a primary stress hormone, and exhibit higher life satisfaction.\"",
    "options": [
      "However, municipal governments often refuse to allocate budget funds for park maintenance",
      "Air pollution in industrialized capitals has reached hazardous levels despite catalytic converters",
      "Therefore, civil engineers prefer concrete pavements to absorb heavy vehicular traffic loads",
      "In contrast, rural forests contain a much broader biodiversity of mammalian fauna",
      "Beyond these tangible environmental benefits, green spaces also exert profound positive impacts on human psychological well-being"
    ],
    "answer": 4,
    "explanation": "Boşluktan önce çevresel faydalar (ısı, hava, su) anlatılmış, boşluktan sonra insan psikolojisi ve stres hormonu (cortisol) verilmiştir. Boşluk 'çevresel faydaların ötesinde psikolojik faydalar da vardır' köprüsü olmalıdır.",
    "distractorAnalysis": {
      "A": "'However, municipal governments often refuse to allocate budget funds for park maintenance' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'Air pollution in industrialized capitals has reached hazardous levels despite catalytic converters' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'Therefore, civil engineers prefer concrete pavements to absorb heavy vehicular traffic loads' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "'In contrast, rural forests contain a much broader biodiversity of mammalian fauna' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "DOĞRU: Boşluktan önce çevresel faydalar (ısı, hava, su) anlatılmış, boşluktan sonra insan psikolojisi ve stres hormonu (cortisol) verilmiştir. Boşluk 'çevresel faydaların ötesinde psikolojik faydalar da vardır' köprüsü olmalıdır."
    },
    "tactic": "'Beyond these environmental benefits ... also psychological impacts' köprüsü önceki ve sonraki cümleyi kusursuz birbirine bağlar.",
    "memoryCode": "🎵 Çevrenin ötesinde (Beyond this) + İnsan ruhuna da iyi gelir!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Geçiş İfadesi",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-para-4",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"In linguistics, the Sapir-Whorf hypothesis posits that the structure of a language influences its speakers' worldview and cognitive processes. In its strongest formulation, it claims that language determines thought entirely. -------. Most modern cognitive scientists agree that language shapes perceptual nuances and memory categorization rather than creating insurmountable intellectual boundaries.\"",
    "options": [
      "Furthermore, ancient Latin possessed a far more rigid grammatical inflection system than modern English",
      "In fact, non-verbal animals demonstrate an identical linguistic syntax during territorial signaling",
      "Therefore, translation between different human languages is fundamentally and theoretically impossible",
      "Consequently, children who learn two languages simultaneously suffer severe cognitive delays",
      "However, this deterministic version has been largely rejected by contemporary empirical research"
    ],
    "answer": 4,
    "explanation": "Boşluk öncesi hipotezin aşırı/katı versiyonunu ('determines thought entirely'), boşluk sonrası ise ılımlı modern kabulü ('rather than creating insurmountable boundaries') veriyor. Boşlukta aşırı versiyonun reddedildiği (However, largely rejected) belirtilmelidir.",
    "distractorAnalysis": {
      "A": "'Furthermore, ancient Latin possessed a far more rigid grammatical inflection system than modern English' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'In fact, non-verbal animals demonstrate an identical linguistic syntax during territorial signaling' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'Therefore, translation between different human languages is fundamentally and theoretically impossible' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "'Consequently, children who learn two languages simultaneously suffer severe cognitive delays' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "DOĞRU: Boşluk öncesi hipotezin aşırı/katı versiyonunu ('determines thought entirely'), boşluk sonrası ise ılımlı modern kabulü ('rather than creating insurmountable boundaries') veriyor. Boşlukta aşırı versiyonun reddedildiği (However, largely rejected) belirtilmelidir."
    },
    "tactic": "Aşırı iddia + HOWEVER, REJECTED + Ilımlı bilimsel gerçek.",
    "memoryCode": "🎵 Katı kural ortaya atıldı + HOWEVER REDDEDİLDİ + Modern ılımlı görüş geldi!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Bilimsel Eleştiri",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-para-5",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"Sleep deprivation exerts severe negative consequences on human cognitive performance. When individuals are deprived of adequate sleep, their attention span contracts, reaction times slow down, and emotional regulation deteriorates. -------. During deep slow-wave sleep, the brain's glymphatic system flushes out toxic metabolic waste products, including amyloid-beta proteins associated with neurodegenerative disorders.\"",
    "options": [
      "As a result, professional athletes consume large doses of caffeine before competitive matches",
      "In contrast, reptiles enter prolonged states of brumation during cold winter seasons",
      "Crucially, chronic lack of sleep impedes the vital restorative cleansing processes that occur exclusively during nocturnal rest",
      "Therefore, modern architects design office cubicles with soundproofing acoustic panels",
      "Nevertheless, some historical military leaders claimed to function on barely four hours of rest"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra beynin atık temizleme sistemi (glymphatic system flushes out toxic waste) anlatılıyor. Boşlukta uykusuzluğun bu hayati 'temizleme sürecini engellediği' (impedes restorative cleansing processes) belirtilmelidir.",
    "distractorAnalysis": {
      "A": "'As a result, professional athletes consume large doses of caffeine before competitive matches' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'In contrast, reptiles enter prolonged states of brumation during cold winter seasons' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "DOĞRU: Boşluktan sonra beynin atık temizleme sistemi (glymphatic system flushes out toxic waste) anlatılıyor. Boşlukta uykusuzluğun bu hayati 'temizleme sürecini engellediği' (impedes restorative cleansing processes) belirtilmelidir.",
      "D": "'Therefore, modern architects design office cubicles with soundproofing acoustic panels' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "'Nevertheless, some historical military leaders claimed to function on barely four hours of rest' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "Boşluktan sonraki 'glymphatic system flushes out waste' ifadesini boşluktaki 'cleansing processes' referansı hazırlar.",
    "memoryCode": "🎵 Temizleme süreci aksar (cleansing) -> Beyin atıkları atamaz (flushes out waste)!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Restoratif Süreç",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-para-6",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"The concept of circular economy represents a fundamental departure from the traditional linear 'take-make-dispose' industrial model. Instead of extracting raw materials, manufacturing short-lived products, and discarding them as landfill waste, a circular system aims to keep resources in productive use indefinitely. -------. Through durable design, modular components, and closed-loop recycling, products are continually refurbished and repurposed.\"",
    "options": [
      "In fact, plastic packaging remains the most economical shipping material for international freight",
      "It achieves this objective by designing out waste and pollution from the very inception of product development",
      "However, consumer demand for luxury fossil-fuel sports cars continues to break sales records globally",
      "Therefore, global mining corporations have expanded their deep-sea prospecting leases substantially",
      "Furthermore, municipal landfills have expanded fivefold across developing industrial regions"
    ],
    "answer": 1,
    "explanation": "Boşluk öncesinde döngüsel ekonominin amacı ('keep resources in productive use indefinitely'), boşluk sonrasında ise nasıl yapıldığı (Through durable design, modular components...) anlatılıyor. Boşluk 'Bu hedefe atık ve kirliliği en baştan tasarımdan çıkararak ulaşır' cümlesidir.",
    "distractorAnalysis": {
      "A": "'In fact, plastic packaging remains the most economical shipping material for international freight' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "DOĞRU: Boşluk öncesinde döngüsel ekonominin amacı ('keep resources in productive use indefinitely'), boşluk sonrasında ise nasıl yapıldığı (Through durable design, modular components...) anlatılıyor. Boşluk 'Bu hedefe atık ve kirliliği en baştan tasarımdan çıkararak ulaşır' cümlesidir.",
      "C": "'However, consumer demand for luxury fossil-fuel sports cars continues to break sales records globally' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "'Therefore, global mining corporations have expanded their deep-sea prospecting leases substantially' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "'Furthermore, municipal landfills have expanded fivefold across developing industrial regions' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "'It achieves this objective by ...' referansı, önceki cümlenin 'aims to keep resources...' hedefine doğrudan gönderme yapar.",
    "memoryCode": "🎵 Hedef koydu (aims to) -> Hedefe şöyle ulaşır (achieves this objective by)!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Çözüm Açıklaması",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-para-7",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"The placebo effect is one of the most fascinating phenomena in modern medical science. Patients given an inert sugar pill or saline injection frequently experience genuine clinical improvements simply because they believe they are receiving active treatment. -------. Brain imaging scans demonstrate that the anticipation of relief triggers the release of endorphins, the body's natural pain-relieving neurotransmitters.\"",
    "options": [
      "Consequently, medical insurance providers refuse to reimburse treatments that lack laboratory synthesis",
      "Therefore, pharmaceutical manufacturers have completely eliminated placebo control groups from clinical drug trials",
      "However, surgical operations cannot be simulated under any ethical experimental protocols",
      "In contrast, veterinary medicine never utilizes placebo treatments when caring for domestic animals",
      "Remarkably, this psychological expectation translates into measurable biochemical changes within the central nervous system"
    ],
    "answer": 4,
    "explanation": "Boşluktan önce hastanın 'sadece inanarak iyileşmesi', boşluktan sonra ise 'beyin taramalarında endorfin salgılanması' anlatılıyor. Boşluk 'psikolojik beklentinin ölçülebilir biyokimyasal değişime dönüştüğünü' anlatan cümledir.",
    "distractorAnalysis": {
      "A": "'Consequently, medical insurance providers refuse to reimburse treatments that lack laboratory synthesis' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'Therefore, pharmaceutical manufacturers have completely eliminated placebo control groups from clinical drug trials' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'However, surgical operations cannot be simulated under any ethical experimental protocols' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "'In contrast, veterinary medicine never utilizes placebo treatments when caring for domestic animals' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "DOĞRU: Boşluktan önce hastanın 'sadece inanarak iyileşmesi', boşluktan sonra ise 'beyin taramalarında endorfin salgılanması' anlatılıyor. Boşluk 'psikolojik beklentinin ölçülebilir biyokimyasal değişime dönüştüğünü' anlatan cümledir."
    },
    "tactic": "İnanç (psikolojik) -> Biyokimyasal değişim (endorfin salgısı). Köprü cümle bu dönüşümü ifade etmelidir.",
    "memoryCode": "🎵 İnanç (beklenti) -> Nörokimyasal salgı (endorfin)!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Biyokimyasal Kanıt",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-para-8",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"Throughout history, maps have never been purely objective representations of geographic reality. Rather, they reflect the political ambitions, cultural prejudices, and technological limitations of their creators. -------. The ubiquitous Mercator projection, for instance, dramatically exaggerates the landmass of northern continents like Europe and Greenland while severely shrinking Africa and South America.\"",
    "options": [
      "Modern satellite positioning systems have rendered printed road atlases completely obsolete for drivers",
      "Therefore, political borders between sovereign nations have remained unchanged for centuries",
      "Ancient seafaring navigators relied exclusively on stellar constellations to cross open oceans",
      "Cartographic choices regarding scale, orientation, and projection inevitably introduce distortions that shape our perception of global power",
      "Consequently, geological survey institutes have ceased updating physical topographic charts"
    ],
    "answer": 3,
    "explanation": "Boşluktan sonra Mercator projeksiyonunun kuzey kıtaları devasa, Afrika'yı ise küçük göstermesi örneği veriliyor. Boşluk 'projeksiyon seçimlerinin kaçınılmaz olarak bozulmalara yol açıp güç algısını şekillendirdiği' genel yargısıdır.",
    "distractorAnalysis": {
      "A": "'Modern satellite positioning systems have rendered printed road atlases completely obsolete for drivers' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'Therefore, political borders between sovereign nations have remained unchanged for centuries' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'Ancient seafaring navigators relied exclusively on stellar constellations to cross open oceans' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "DOĞRU: Boşluktan sonra Mercator projeksiyonunun kuzey kıtaları devasa, Afrika'yı ise küçük göstermesi örneği veriliyor. Boşluk 'projeksiyon seçimlerinin kaçınılmaz olarak bozulmalara yol açıp güç algısını şekillendirdiği' genel yargısıdır.",
      "E": "'Consequently, geological survey institutes have ceased updating physical topographic charts' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "Genel tespit: Harita projeksiyonları bozulma (distortion) yaratır -> Örnek: Mercator projeksiyonu Grönland'ı büyütür.",
    "memoryCode": "🎵 Harita tarafsız değildir (distortions) -> ÖRNEK: Mercator yanılsaması!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Harita Yanılsaması",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-para-9",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"Photosynthesis is arguably the most essential biological process on Earth, converting solar energy into chemical energy. However, its efficiency is surprisingly modest, with most crops converting less than two percent of incident sunlight into biomass. -------. Agricultural biotechnologists are currently engineering synthetic biochemical pathways to bypass this metabolic bottleneck and boost harvest yields.\"",
    "options": [
      "Therefore, solar photovoltaic panels have achieved energy conversion efficiencies exceeding twenty-five percent",
      "In contrast, deep-sea chemosynthetic bacteria thrive without any exposure to solar radiation",
      "A major cause of this inefficiency is a sluggish plant enzyme called Rubisco, which frequently binds oxygen instead of carbon dioxide",
      "Consequently, organic farming advocates reject all synthetic nitrogen fertilizers in crop cultivation",
      "Furthermore, vertical indoor farming utilizes artificial ultraviolet light emitting diodes exclusively"
    ],
    "answer": 2,
    "explanation": "Boşluk öncesinde verimsizlik (%2'den az fotosentez), boşluk sonrasında ise bilim insanlarının bu 'metabolik darboğazı' (this metabolic bottleneck) aşmaya çalışması var. Boşluk verimsizliğin nedeni olan 'Rubisco enziminin hantallığıdır'.",
    "distractorAnalysis": {
      "A": "'Therefore, solar photovoltaic panels have achieved energy conversion efficiencies exceeding twenty-five percent' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'In contrast, deep-sea chemosynthetic bacteria thrive without any exposure to solar radiation' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "DOĞRU: Boşluk öncesinde verimsizlik (%2'den az fotosentez), boşluk sonrasında ise bilim insanlarının bu 'metabolik darboğazı' (this metabolic bottleneck) aşmaya çalışması var. Boşluk verimsizliğin nedeni olan 'Rubisco enziminin hantallığıdır'.",
      "D": "'Consequently, organic farming advocates reject all synthetic nitrogen fertilizers in crop cultivation' paragrafın mantıksal akışını ve referans bağını bozar.",
      "E": "'Furthermore, vertical indoor farming utilizes artificial ultraviolet light emitting diodes exclusively' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "'Metabolic bottleneck' ifadesi doğrudan boşluktaki 'sluggish plant enzyme Rubisco'ya referans verir.",
    "memoryCode": "🎵 Verimsizlik nedeni = Rubisco enzimi -> Mühendisler bu darboğazı (bottleneck) aşmaya çalışıyor!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Biyolojik Darboğaz",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-para-10",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere anlam bütünlüğünü sağlamak için getirilebilecek en uygun cümleyi bulunuz:\n\n\"The Library of Alexandria was renowned as the greatest repository of human knowledge in the ancient Mediterranean world. Founded under the Ptolemaic dynasty in Egypt, it attracted leading scholars, mathematicians, and poets from across the Hellenistic sphere. -------. Historians now emphasize that the institution suffered a protracted decline spanning several centuries, exacerbated by municipal budget cuts, administrative neglect, and minor civil conflicts.\"",
    "options": [
      "In fact, Julius Caesar personally funded the architectural reconstruction of the grand papyrus archives",
      "Furthermore, papyrus scrolls were imported exclusively from the upper valleys of the Euphrates River",
      "Therefore, ancient Greek philosophy ceased to influence subsequent medieval Islamic and European civilizations",
      "Contrary to the enduring romantic legend, the great library was not annihilated in a single catastrophic fire",
      "Consequently, all classical literary texts were preserved flawlessly until the advent of the printing press"
    ],
    "answer": 3,
    "explanation": "Boşluktan sonra 'Historians now emphasize that the institution suffered a protracted decline spanning several centuries' (Tarihçiler kütüphanenin tek günde değil, yüzyıllar süren ihmal ve bütçe kesintileriyle yavaş yavaş söndüğünü vurguluyor). Boşluk 'Tek bir yangında yok olduğu efsanesinin aksine...' cümlesidir.",
    "distractorAnalysis": {
      "A": "'In fact, Julius Caesar personally funded the architectural reconstruction of the grand papyrus archives' paragrafın mantıksal akışını ve referans bağını bozar.",
      "B": "'Furthermore, papyrus scrolls were imported exclusively from the upper valleys of the Euphrates River' paragrafın mantıksal akışını ve referans bağını bozar.",
      "C": "'Therefore, ancient Greek philosophy ceased to influence subsequent medieval Islamic and European civilizations' paragrafın mantıksal akışını ve referans bağını bozar.",
      "D": "DOĞRU: Boşluktan sonra 'Historians now emphasize that the institution suffered a protracted decline spanning several centuries' (Tarihçiler kütüphanenin tek günde değil, yüzyıllar süren ihmal ve bütçe kesintileriyle yavaş yavaş söndüğünü vurguluyor). Boşluk 'Tek bir yangında yok olduğu efsanesinin aksine...' cümlesidir.",
      "E": "'Consequently, all classical literary texts were preserved flawlessly until the advent of the printing press' paragrafın mantıksal akışını ve referans bağını bozar."
    },
    "tactic": "Efsane vs. Gerçek: 'Contrary to the legend, not destroyed in a single fire' -> 'Instead, suffered a protracted decline over centuries'.",
    "memoryCode": "🎵 Tek bir yangında yok olmadı (legend) -> Yüzyıllarca ihmal edildi (decline)!",
    "isImportant": true,
    "importantTag": "Paragraf Tamamlama / Efsaneye Karşı Gerçek",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-restate-1",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Had the international community responded immediately to the early warning signs, the humanitarian disaster in the drought-stricken region could have been substantially mitigated.\"",
    "options": [
      "The humanitarian catastrophe caused by the regional drought was completely unavoidable, regardless of whether foreign governments intervened or not.",
      "Because the international community failed to take prompt action when early warning indicators appeared, the humanitarian crisis in the drought-affected region became far worse than it might have been.",
      "The drought in the region turned into an unprecedented disaster only after foreign nations withdrew their financial and technical assistance.",
      "Although global organizations reacted swiftly to the initial warning signs, they were unable to prevent the severe drought from devastating the population.",
      "If the international community had ignored the early warning signals, the humanitarian crisis in the region would certainly have escalated beyond control."
    ],
    "answer": 1,
    "explanation": "Orijinal cümle: 'Erken uyarılara hemen müdahale edilmiş olsaydı felaket hafifletilebilirdi' (yani zamanında müdahale edilmedi ve kriz çok daha kötü oldu). Doğru seçenek bu gerçeği 'Because ... failed to take prompt action, the crisis became far worse' şeklinde tam karşılar.",
    "distractorAnalysis": {
      "A": "'The humanitarian catastrophe caused by the regional drought was completely unavoidable, regardless of whether foreign governments intervened or not.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "DOĞRU: Orijinal cümle: 'Erken uyarılara hemen müdahale edilmiş olsaydı felaket hafifletilebilirdi' (yani zamanında müdahale edilmedi ve kriz çok daha kötü oldu). Doğru seçenek bu gerçeği 'Because ... failed to take prompt action, the crisis became far worse' şeklinde tam karşılar.",
      "C": "'The drought in the region turned into an unprecedented disaster only after foreign nations withdrew their financial and technical assistance.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'Although global organizations reacted swiftly to the initial warning signs, they were unable to prevent the severe drought from devastating the population.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "'If the international community had ignored the early warning signals, the humanitarian crisis in the region would certainly have escalated beyond control.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "Type 3 koşul cümleleri (Had it been done, could have been mitigated) gerçekte eylemin YAPILMADIĞINI ve kötü sonucun DOĞDUĞUNU ifade eder.",
    "memoryCode": "🎵 Şart kipi 'yapılsaydı iyi olurdu' diyorsa = Yapılmadı ve kötü oldu!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Devrik Koşul Paraphrase",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-restate-2",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Few scientific achievements in the twentieth century have had as profound and lasting an influence on human civilization as the decoding of the structure of DNA.\"",
    "options": [
      "Many scientific milestones in the twentieth century affected humanity far more significantly than the discovery of DNA's double helix structure.",
      "Unless scientists in the twentieth century had decoded the DNA molecule, modern technological civilization would never have advanced.",
      "No single scientific discovery before the twentieth century ever matched the societal transformation brought about by molecular genetics.",
      "The structure of DNA was decoded in the twentieth century, but its impact on modern human civilization has been relatively limited.",
      "The decoding of DNA's structure is among the twentieth-century scientific breakthroughs that have influenced human society most profoundly and permanently."
    ],
    "answer": 4,
    "explanation": "'Few achievements have had as profound an influence as X' = 20. yüzyılda çok az başarı DNA'nın yapısının çözülmesi kadar derin bir etki bırakmıştır (yani DNA en derin etkiyi bırakan birkaç buluştan biridir).",
    "distractorAnalysis": {
      "A": "'Many scientific milestones in the twentieth century affected humanity far more significantly than the discovery of DNA's double helix structure.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'Unless scientists in the twentieth century had decoded the DNA molecule, modern technological civilization would never have advanced.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'No single scientific discovery before the twentieth century ever matched the societal transformation brought about by molecular genetics.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'The structure of DNA was decoded in the twentieth century, but its impact on modern human civilization has been relatively limited.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "DOĞRU: 'Few achievements have had as profound an influence as X' = 20. yüzyılda çok az başarı DNA'nın yapısının çözülmesi kadar derin bir etki bırakmıştır (yani DNA en derin etkiyi bırakan birkaç buluştan biridir)."
    },
    "tactic": "'Few things are as X as Y' = Y is among the most X. 'Few ... as profound as' yapısı doğrudan en üstünlük grubunu (among the most profoundly) ifade eder.",
    "memoryCode": "🎵 Çok az şey X kadar etkilidir = X en etkililer arasındadır!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Superlative Eşdeğerliği",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-restate-3",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"It was not until the invention of the electron microscope in the 1930s that biologists could observe the internal architecture of living cells with sub-nanometer clarity.\"",
    "options": [
      "Biologists were unable to examine the interior structures of living cells with sub-nanometer resolution before the electron microscope was developed in the 1930s.",
      "The electron microscope was developed in the 1930s primarily to disprove previous biological theories regarding living cell morphology.",
      "Biologists had already documented the internal structures of living cells long before the electron microscope was invented during the 1930s.",
      "Biologists managed to observe sub-nanometer cellular details only because optical glass microscopes were refined in the 1930s.",
      "Although the electron microscope was available in the 1930s, biologists still struggled to visualize cellular architecture clearly."
    ],
    "answer": 0,
    "explanation": "'It was not until X that Y' = Y ancak X olduktan sonra gerçekleşebildi (yani X'ten önce Y yapılamıyordu). 1930'larda elektron mikroskobu icat edilene kadar biyologlar hücre içini bu netlikte göremediler.",
    "distractorAnalysis": {
      "A": "DOĞRU: 'It was not until X that Y' = Y ancak X olduktan sonra gerçekleşebildi (yani X'ten önce Y yapılamıyordu). 1930'larda elektron mikroskobu icat edilene kadar biyologlar hücre içini bu netlikte göremediler.",
      "B": "'The electron microscope was developed in the 1930s primarily to disprove previous biological theories regarding living cell morphology.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Biologists had already documented the internal structures of living cells long before the electron microscope was invented during the 1930s.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'Biologists managed to observe sub-nanometer cellular details only because optical glass microscopes were refined in the 1930s.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "'Although the electron microscope was available in the 1930s, biologists still struggled to visualize cellular architecture clearly.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "'It was not until ... that' kalıbı 'could not ... before' ile birebir eş anlamlıdır.",
    "memoryCode": "🎵 It was not until X = X'e kadar yapılamadı (unable before X)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / It was not until",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-restate-4",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"So long as industrialized economies depend heavily on imported fossil fuels, their foreign policy decisions will inevitably remain vulnerable to geopolitical blackmail.\"",
    "options": [
      "If industrialized nations reduce their reliance on foreign fossil fuels, their diplomatic leverage in geopolitical disputes will diminish significantly.",
      "Unless foreign suppliers lower fossil fuel prices, industrialized economies will cut off all diplomatic relations with them.",
      "Industrialized nations will continually be exposed to diplomatic pressure and geopolitical extortion provided that they rely predominantly on foreign petroleum and gas.",
      "Industrialized economies have managed to protect their foreign policy sovereignty despite relying entirely on foreign energy imports.",
      "Geopolitical blackmail has forced industrialized countries to transition away from imported fossil fuels toward domestic green power."
    ],
    "answer": 2,
    "explanation": "'So long as ...' = Provided that ... (bağlı kaldığı sürece). 'remain vulnerable to geopolitical blackmail' = will continually be exposed to geopolitical extortion / diplomatic pressure.",
    "distractorAnalysis": {
      "A": "'If industrialized nations reduce their reliance on foreign fossil fuels, their diplomatic leverage in geopolitical disputes will diminish significantly.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'Unless foreign suppliers lower fossil fuel prices, industrialized economies will cut off all diplomatic relations with them.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "DOĞRU: 'So long as ...' = Provided that ... (bağlı kaldığı sürece). 'remain vulnerable to geopolitical blackmail' = will continually be exposed to geopolitical extortion / diplomatic pressure.",
      "D": "'Industrialized economies have managed to protect their foreign policy sovereignty despite relying entirely on foreign energy imports.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "'Geopolitical blackmail has forced industrialized countries to transition away from imported fossil fuels toward domestic green power.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "'So long as' ile 'Provided that' eşanlamlıdır. 'vulnerable to blackmail' = 'exposed to extortion/pressure'.",
    "memoryCode": "🎵 So long as = Provided that (-dığı sürece)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / So long as & Provided that",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-restate-5",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Much to the surprise of the researchers, the experimental vaccine induced a far stronger immunological response in elderly participants than in younger adults.\"",
    "options": [
      "The researchers had not expected that the clinical trial vaccine would stimulate a significantly more robust immune defense in the elderly than in younger people.",
      "The experimental vaccine was deemed unsafe for senior citizens after causing unpredictable immune fluctuations in younger volunteers.",
      "Younger participants in the clinical trial developed a substantially better antibody defense than older individuals, just as researchers anticipated.",
      "The researchers were astonished to find that neither the elderly nor younger adults mounted any detectable immune reaction to the vaccine.",
      "Because elderly individuals generally possess weaker immune systems, the researchers intentionally administered a higher vaccine dose to them."
    ],
    "answer": 0,
    "explanation": "'Much to the surprise of X' = X çok şaşırdı / beklemiyordu (had not expected). Yaşlılarda gençlerden çok daha güçlü bağışıklık yanıtı (far stronger response in elderly than younger).",
    "distractorAnalysis": {
      "A": "DOĞRU: 'Much to the surprise of X' = X çok şaşırdı / beklemiyordu (had not expected). Yaşlılarda gençlerden çok daha güçlü bağışıklık yanıtı (far stronger response in elderly than younger).",
      "B": "'The experimental vaccine was deemed unsafe for senior citizens after causing unpredictable immune fluctuations in younger volunteers.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Younger participants in the clinical trial developed a substantially better antibody defense than older individuals, just as researchers anticipated.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'The researchers were astonished to find that neither the elderly nor younger adults mounted any detectable immune reaction to the vaccine.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "'Because elderly individuals generally possess weaker immune systems, the researchers intentionally administered a higher vaccine dose to them.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "'Much to someone's surprise' = 'Someone had not expected / was surprised'. Yaşlılar > Gençler yanıtı korunmalıdır.",
    "memoryCode": "🎵 Much to surprise = Beklemiyorlardı (had not expected)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Much to surprise",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-restate-6",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"No sooner had the central bank unexpectedly lowered interest rates than investors rushed to purchase real estate and technology equities.\"",
    "options": [
      "Investors sold off their technology stocks and real estate assets as soon as the central bank announced higher interest rates.",
      "The central bank lowered interest rates because investors had demanded more affordable financing for commercial real estate.",
      "Investors had already acquired significant real estate and technology shares long before the central bank decided to cut interest rates.",
      "Immediately after the central bank made an unpredicted reduction in interest rates, investors promptly began buying property and tech shares.",
      "Although the central bank cut interest rates without warning, investors hesitated to invest their capital in equities and property."
    ],
    "answer": 3,
    "explanation": "'No sooner had X than Y' = X olur olmaz hemen Y oldu (Immediately after X, Y promptly occurred). Merkez bankası faiz indirir indirmez yatırımcılar gayrimenkul ve teknoloji hissesi almaya koştu.",
    "distractorAnalysis": {
      "A": "'Investors sold off their technology stocks and real estate assets as soon as the central bank announced higher interest rates.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'The central bank lowered interest rates because investors had demanded more affordable financing for commercial real estate.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Investors had already acquired significant real estate and technology shares long before the central bank decided to cut interest rates.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "DOĞRU: 'No sooner had X than Y' = X olur olmaz hemen Y oldu (Immediately after X, Y promptly occurred). Merkez bankası faiz indirir indirmez yatırımcılar gayrimenkul ve teknoloji hissesi almaya koştu.",
      "E": "'Although the central bank cut interest rates without warning, investors hesitated to invest their capital in equities and property.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "No sooner ... than = Immediately after / As soon as. İki eylemin art arda anında gerçekleşmesi korunmalıdır.",
    "memoryCode": "🎵 No sooner ... than = Olur olmaz hemen (Immediately after)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / No sooner ... than",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-restate-7",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Had it not been for the philanthropic foundation's generous endowment, the marine research laboratory would have been forced to cease operations during the recession.\"",
    "options": [
      "If the economic recession had been less severe, the marine laboratory would never have accepted monetary donations from private foundations.",
      "The marine research institute managed to stay open during the economic downturn solely because of the substantial financial contribution from the charitable foundation.",
      "Despite receiving substantial funding from the charitable trust, the marine laboratory had to shut down permanently during the recession.",
      "The philanthropic foundation provided financial assistance only after the marine laboratory agreed to restructure its research agenda.",
      "The marine laboratory was forced to close its doors during the recession because the philanthropic foundation withdrew its financial pledge."
    ],
    "answer": 1,
    "explanation": "'Had it not been for X, Y would have happened' = X olmasaydı Y gerçekleşirdi (Yani X sayesinde Y gerçekleşmedi). Vakfın bağışı olmasaydı laboratuvar kapanmak zorunda kalırdı (Vakfın bağışı sayesinde açık kalabildi).",
    "distractorAnalysis": {
      "A": "'If the economic recession had been less severe, the marine laboratory would never have accepted monetary donations from private foundations.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "DOĞRU: 'Had it not been for X, Y would have happened' = X olmasaydı Y gerçekleşirdi (Yani X sayesinde Y gerçekleşmedi). Vakfın bağışı olmasaydı laboratuvar kapanmak zorunda kalırdı (Vakfın bağışı sayesinde açık kalabildi).",
      "C": "'Despite receiving substantial funding from the charitable trust, the marine laboratory had to shut down permanently during the recession.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'The philanthropic foundation provided financial assistance only after the marine laboratory agreed to restructure its research agenda.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "'The marine laboratory was forced to close its doors during the recession because the philanthropic foundation withdrew its financial pledge.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "'Had it not been for X' = 'Thanks to X / Solely because of X'. Laboratuvar kapanmadı, açık kaldı.",
    "memoryCode": "🎵 Had it not been for X = X olmasaydı batardık (X sayesinde kurtulduk)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Had it not been for",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-restate-8",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The author's latest historical novel is widely considered to be superior to all his previous literary works in terms of psychological depth and narrative complexity.\"",
    "options": [
      "The author's earlier literary masterpieces possessed far greater narrative complexity than his somewhat superficial latest historical fiction.",
      "Literary scholars agree that the author's latest historical novel is identical in narrative style and psychological depth to his earlier works.",
      "Although the author's previous novels lacked psychological nuance, his newest publication has failed to captivate mainstream book critics.",
      "Most literary critics view the novelist's most recent historical work as more profound in character psychology and intricate in storytelling than anything he has written before.",
      "The author decided to write a historical novel because his previous psychological thrillers had received unfavorable reviews from critics."
    ],
    "answer": 3,
    "explanation": "'Superior to all his previous works in terms of X and Y' = X ve Y açısından önceki tüm eserlerinden üstündür (more profound and intricate than anything he has written before).",
    "distractorAnalysis": {
      "A": "'The author's earlier literary masterpieces possessed far greater narrative complexity than his somewhat superficial latest historical fiction.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'Literary scholars agree that the author's latest historical novel is identical in narrative style and psychological depth to his earlier works.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Although the author's previous novels lacked psychological nuance, his newest publication has failed to captivate mainstream book critics.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "DOĞRU: 'Superior to all his previous works in terms of X and Y' = X ve Y açısından önceki tüm eserlerinden üstündür (more profound and intricate than anything he has written before).",
      "E": "'The author decided to write a historical novel because his previous psychological thrillers had received unfavorable reviews from critics.' orijinal cümlenin anlamını daraltır, abartır veya saptırır."
    },
    "tactic": "'Superior to all previous works' = 'Better / more profound than anything written before'.",
    "memoryCode": "🎵 Superior to all previous = Önceki hepsinden daha üstün!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Superior to",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-restate-9",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"It is virtually impossible to master a complex musical instrument without dedicating thousands of hours to disciplined, deliberate practice.\"",
    "options": [
      "Disciplined rehearsal is helpful, but innate genetic talent is the single decisive factor in mastering a musical instrument.",
      "Even if an aspiring musician devotes thousands of hours to daily rehearsal, mastering an instrument remains highly unlikely.",
      "Spending thousands of hours on repetitive musical drills guarantees that an amateur will become a world-renowned virtuoso.",
      "Musicians who possess natural aptitude can effortlessly play difficult instruments without any formal practice regimen.",
      "Achieving true proficiency on an intricate musical instrument necessitates countless hours of focused and structured training."
    ],
    "answer": 4,
    "explanation": "'Virtually impossible without X' = X olmadan neredeyse imkansızdır (yani ustalaşmak X'i zorunlu kılar: necessitates countless hours of structured practice).",
    "distractorAnalysis": {
      "A": "'Disciplined rehearsal is helpful, but innate genetic talent is the single decisive factor in mastering a musical instrument.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'Even if an aspiring musician devotes thousands of hours to daily rehearsal, mastering an instrument remains highly unlikely.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Spending thousands of hours on repetitive musical drills guarantees that an amateur will become a world-renowned virtuoso.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'Musicians who possess natural aptitude can effortlessly play difficult instruments without any formal practice regimen.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "DOĞRU: 'Virtually impossible without X' = X olmadan neredeyse imkansızdır (yani ustalaşmak X'i zorunlu kılar: necessitates countless hours of structured practice)."
    },
    "tactic": "'Impossible without X' = 'Necessitates / requires X'. Disiplinli binlerce saat çalışma şarttır.",
    "memoryCode": "🎵 X olmadan imkansız = X'i zorunlu kılar (Necessitates X)!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Zorunluluk",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-restate-10",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The proliferation of automated robotic production lines will inevitably eliminate numerous blue-collar assembly jobs, yet it will simultaneously create specialized engineering opportunities.\"",
    "options": [
      "Unless manufacturing companies halt the installation of robotic assembly systems, all traditional engineering professions will be phased out.",
      "Because industrial robots have made assembly lines more efficient, manual laborers have successfully transitioned into high-tech engineering roles.",
      "Robotic automation creates fewer engineering positions than the massive number of blue-collar assembly jobs it terminates annually.",
      "The rise of factory automation will permanently destroy blue-collar employment without offering any alternative career paths for the workforce.",
      "While the widespread adoption of industrial robotics is bound to displace many manual manufacturing workers, it will also generate new positions for technical engineering specialists."
    ],
    "answer": 4,
    "explanation": "'Will inevitably eliminate X, yet will simultaneously create Y' = Bir yandan X'i yok ederken diğer yandan Y fırsatları yaratacaktır (While displacing X, it will also generate Y).",
    "distractorAnalysis": {
      "A": "'Unless manufacturing companies halt the installation of robotic assembly systems, all traditional engineering professions will be phased out.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "B": "'Because industrial robots have made assembly lines more efficient, manual laborers have successfully transitioned into high-tech engineering roles.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "C": "'Robotic automation creates fewer engineering positions than the massive number of blue-collar assembly jobs it terminates annually.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "D": "'The rise of factory automation will permanently destroy blue-collar employment without offering any alternative career paths for the workforce.' orijinal cümlenin anlamını daraltır, abartır veya saptırır.",
      "E": "DOĞRU: 'Will inevitably eliminate X, yet will simultaneously create Y' = Bir yandan X'i yok ederken diğer yandan Y fırsatları yaratacaktır (While displacing X, it will also generate Y)."
    },
    "tactic": "'Yet simultaneously create' = 'While doing X, it also generates Y'. İki yönlü etki dengeli aktarılmalıdır.",
    "memoryCode": "🎵 Bir yandan işleri bitirirken, diğer yandan yeni uzmanlıklar açar!",
    "isImportant": true,
    "importantTag": "Anlamca En Yakın / Zıtlık & Eşzamanlılık",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-irrel-1",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) Photosynthesis is the primary biochemical process that sustains complex life on our planet by converting solar light into chemical energy. (II) During this intricate reaction, chlorophyll molecules within plant chloroplasts absorb photons and split water molecules. (III) Fossil fuels, including coal and crude oil, were originally formed from decayed prehistoric organic matter millions of years ago. (IV) The released electrons drive the synthesis of ATP and NADPH, which subsequently fuel the Calvin cycle. (V) Ultimately, carbon dioxide from the atmosphere is fixed into glucose, providing essential nourishment for herbivores and ecosystems.",
    "options": [
      "II",
      "V",
      "IV",
      "I",
      "III"
    ],
    "answer": 4,
    "explanation": "Paragrafın I, II, IV ve V. cümleleri fotosentezin adım adım biyokimyasal aşamalarını (klorofil, foton, elektron, ATP, glikoz) anlatmaktadır. III. cümle ise birdenbire fosil yakıtların (kömür ve petrolün) jeolojik oluşumuna geçerek akışı bozmaktadır.",
    "distractorAnalysis": {
      "A": "II fotosentezin ilk biyokimyasal basamağını açıklayarak I'i devam ettirir.",
      "B": "V ATP'nin karbondioksiti şekere dönüştürmesini vererek süreci tamamlar.",
      "C": "IV II'deki suyun parçalanmasından çıkan elektronların ATP üretmesini bağlar.",
      "D": "I paragrafın ana konusunu (fotosentezi) tanıtan temel giriş cümlesidir.",
      "E": "DOĞRU CEVAP (III): Paragrafın I, II, IV ve V. cümleleri fotosentezin adım adım biyokimyasal aşamalarını (klorofil, foton, elektron, ATP, glikoz) anlatmaktadır. III. cümle ise birdenbire fosil yakıtların (kömür ve petrolün) jeolojik oluşumuna geçerek akışı bozmaktadır."
    },
    "tactic": "Akış adımlarını takip edin: I (Giriş) -> II (Foton ve suyun ayrılması) -> IV (Elektronlar ve ATP) -> V (Karbondioksitin şekere dönüşmesi). III. cümle jeolojiye sapmıştır.",
    "memoryCode": "🎵 Biyokimyasal döngü anlatılırken fosil yakıt oluşumu davetsiz misafirdir!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Konu Sapması",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-irrel-2",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) The James Webb Space Telescope (JWST) was engineered to observe the universe primarily in the infrared spectrum. (II) Because cosmic expansion stretches light emitted by primordial stars into longer infrared wavelengths, optical telescopes cannot detect these ancient signals. (III) By utilizing its massive gold-coated beryllium primary mirror, the JWST can capture faint infrared photons from galaxies formed over 13 billion years ago. (IV) Hubble, launched in 1990, suffered an initial optical flaw that required a hazardous space shuttle servicing mission to install corrective mirrors. (V) These unprecedented observations are currently revolutionizing astrophysics by challenging established models of early galactic assembly.",
    "options": [
      "V",
      "IV",
      "III",
      "II",
      "I"
    ],
    "answer": 1,
    "explanation": "Paragraf baştan sona James Webb Uzay Teleskobu'nun (JWST) kızılötesi gözlem yeteneğini ve evrenin ilk galaksilerini keşfetmesini anlatmaktadır. IV. cümle ise birdenbire Hubble teleskobunun 1990'daki ayna arızasına ve tamir görevine geçerek konudan kopmaktadır.",
    "distractorAnalysis": {
      "A": "V III'teki gözlemlerin astrofizikteki devrimci sonuçlarını bağlar.",
      "B": "DOĞRU CEVAP (IV): Paragraf baştan sona James Webb Uzay Teleskobu'nun (JWST) kızılötesi gözlem yeteneğini ve evrenin ilk galaksilerini keşfetmesini anlatmaktadır. IV. cümle ise birdenbire Hubble teleskobunun 1990'daki ayna arızasına ve tamir görevine geçerek konudan kopmaktadır.",
      "C": "III JWST'nin aynası sayesinde 13 milyar yıl önceki galaksileri gördüğünü anlatır.",
      "D": "II kızılötesi spektrumun neden gerekli olduğunu (evrenin genişlemesi) açıklar.",
      "E": "I JWST'nin temel kızılötesi tasarımını tanıtan giriş cümlesidir."
    },
    "tactic": "Tüm cümlelerin öznesi JWST ve kızılötesi gözlemdir. V. cümledeki 'These unprecedented observations' III. cümledeki JWST gözlemlerine bağlanır. IV araya girmiş yabancı bir bilgidir.",
    "memoryCode": "🎵 JWST kızılötesi yeteneği anlatılırken Hubble'ın arıza hikayesi akışı bozar!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Özne Değişimi",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-irrel-3",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) Honeybees perform an elaborate physical sequence known as the 'waggle dance' to communicate the location of rich floral nectar sources to their hive mates. (II) Through the angle of the dance relative to vertical gravity, the performing bee indicates the precise direction of the flowers relative to the sun. (III) Furthermore, the duration of the central waggle run correlates directly with the distance of the foraging site from the nest. (IV) Commercial beekeepers frequently transport artificial hives across thousands of miles to pollinate industrial almond orchards. (V) By integrating these spatial coordinates, recruit bees can fly straight to the newly discovered blossoms with remarkable navigational accuracy.",
    "options": [
      "III",
      "I",
      "II",
      "V",
      "IV"
    ],
    "answer": 4,
    "explanation": "Paragraf arıların kendi aralarında yön ve mesafe bildiren 'sallantı dansı' (waggle dance) iletişim sistemini açıklamaktadır. IV. cümle ise ticari arıcıların kovanları badem bahçelerine taşımasına geçmektedir.",
    "distractorAnalysis": {
      "A": "III dans süresinin mesafeyi nasıl kodladığını bağlar.",
      "B": "I waggle dance iletişim sistemini tanıtan giriş cümlesidir.",
      "C": "II dans açısının güneş yönünü nasıl gösterdiğini açıklar.",
      "D": "V II ve III'teki koordinatları alan arıların çiçeğe uçmasını tamamlar.",
      "E": "DOĞRU CEVAP (IV): Paragraf arıların kendi aralarında yön ve mesafe bildiren 'sallantı dansı' (waggle dance) iletişim sistemini açıklamaktadır. IV. cümle ise ticari arıcıların kovanları badem bahçelerine taşımasına geçmektedir."
    },
    "tactic": "I, II, III ve V arının dansındaki açı ve sürenin navigasyona dönüşmesini adım adım anlatır. V. cümledeki 'these spatial coordinates' II ve III'e doğrudan bağlıdır; IV konu dışıdır.",
    "memoryCode": "🎵 Arı dansı ve navigasyon anlatılırken ticari arıcılık taşımacılığı akışı bozar!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Odak Kayması",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-irrel-4",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) The human gut microbiome comprises trillions of bacteria, fungi, and viruses that inhabit the gastrointestinal tract. (II) These microorganisms play an indispensable role in digesting complex dietary fibers, synthesizing essential vitamins, and training the immune system. (III) Recent clinical research demonstrates that disruptions in microbiome diversity are linked to inflammatory bowel disease, obesity, and mental health disorders. (IV) Dentists strongly advise brushing twice daily with fluoride toothpaste to prevent dental cavities and gum inflammation. (V) Consequently, therapeutic interventions such as targeted probiotics and dietary modifications are being actively explored to restore microbial equilibrium.",
    "options": [
      "V",
      "III",
      "I",
      "IV",
      "II"
    ],
    "answer": 3,
    "explanation": "Metin bağırsak mikrobiyomunun (gut microbiome) sindirim, bağışıklık ve genel sağlık üzerindeki rolünü anlatmaktadır. IV. cümle ise diş macunuyla diş fırçalamaktan bahsederek tamamen alakasız bir alana zıplamaktadır.",
    "distractorAnalysis": {
      "A": "V III'teki bozulmaları tedavi etmek için probiyotik araştırmalarını bağlar.",
      "B": "III mikrobiyom bozulmasının yol açtığı hastalıkları belirtir.",
      "C": "I bağırsak mikrobiyomunu tanıtan giriş cümlesidir.",
      "D": "DOĞRU CEVAP (IV): Metin bağırsak mikrobiyomunun (gut microbiome) sindirim, bağışıklık ve genel sağlık üzerindeki rolünü anlatmaktadır. IV. cümle ise diş macunuyla diş fırçalamaktan bahsederek tamamen alakasız bir alana zıplamaktadır.",
      "E": "II mikrobiyomun sindirim ve bağışıklıktaki işlevlerini sıralar."
    },
    "tactic": "Bağırsak mikrobiyomu ve sindirim sistemi anlatılırken diş fırçalama tavsiyesi akıştan derhal elenmelidir.",
    "memoryCode": "🎵 Bağırsak mikrobiyomu nerede, diş macunu nerede!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Bariz Yabancı Cümle",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-irrel-5",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) During the Middle Ages, illuminated manuscripts were painstakingly produced by hand in monastic scriptoria. (II) Scribes utilized quill pens carved from goose feathers and inks formulated from soot, iron gall, and crushed minerals. (III) Because calfskin vellum was exceedingly costly, scribes often scraped away older texts to reuse the parchment sheets. (IV) Today, modern digital e-readers allow students to carry thousands of textbooks in a lightweight pocket-sized device. (V) Skilled artists then decorated the margins with intricate gold leaf foliage, vibrant miniature illustrations, and elaborate initial capitals.",
    "options": [
      "IV",
      "II",
      "III",
      "V",
      "I"
    ],
    "answer": 0,
    "explanation": "Paragraf Orta Çağ'da manastırlarda el yazması kitapların (illuminated manuscripts) tüy kalem, mürekkep, parşömen ve altın varakla nasıl üretildiğini anlatmaktadır. IV. cümle günümüz dijital e-kitap okuyucularına atlayarak tarihsel akışı bozmaktadır.",
    "distractorAnalysis": {
      "A": "DOĞRU CEVAP (IV): Paragraf Orta Çağ'da manastırlarda el yazması kitapların (illuminated manuscripts) tüy kalem, mürekkep, parşömen ve altın varakla nasıl üretildiğini anlatmaktadır. IV. cümle günümüz dijital e-kitap okuyucularına atlayarak tarihsel akışı bozmaktadır.",
      "B": "II kullanılan tüy kalem ve mürekkepleri anlatır.",
      "C": "III parşömen derisinin pahalılığını ve kullanımını açıklar.",
      "D": "V metin yazıldıktan sonra altın varak ve minyatür süslemesini tamamlar.",
      "E": "I Orta Çağ el yazmalarının manastırlarda yapıldığını tanıtır."
    },
    "tactic": "Tüm paragraflar Orta Çağ el yazması üretim aşamalarıdır. V. cümledeki 'Skilled artists then decorated...' ifadesi II ve III'teki yazı yazma aşamasının devamıdır. IV ilgisizdir.",
    "memoryCode": "🎵 Orta Çağ elyazması üretilirken modern e-kitap okuyucu araya giremez!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Zaman ve Çağ Uyumsuzluğu",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-irrel-6",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) Deep-sea hydrothermal vents create extreme ecological niches characterized by scalding mineral-rich water, toxic sulfides, and immense hydrostatic pressure. (II) In complete darkness where solar photosynthesis is impossible, specialized chemosynthetic bacteria thrive by oxidizing hydrogen sulfide. (III) These microbial autotrophs serve as the primary producers that sustain dense communities of giant tube worms, blind shrimp, and vent crabs. (IV) In contrast, coral reefs located in tropical shallow waters require warm temperatures and intense sunlight to maintain symbiotic zooxanthellae algae. (V) The existence of such thriving deep-sea ecosystems suggests that extraterrestrial life could potentially exist in the ice-covered sub-surface oceans of icy moons like Europa and Enceladus.",
    "options": [
      "I",
      "III",
      "V",
      "IV",
      "II"
    ],
    "answer": 3,
    "explanation": "Metin derin deniz hidrotermal bacalarındaki kemosenteze dayalı karanlık ekosistemi ve bunun Europa gibi okyanuslu uydularda yaşam ihtimaline dair ipuçlarını anlatmaktadır. IV. cümle ise tropikal mercan resiflerindeki güneş ışığına geçerek metnin odağını saptırmaktadır.",
    "distractorAnalysis": {
      "A": "I hidrotermal bacaların aşırı fiziksel koşullarını tanıtır.",
      "B": "III bakterilerin tüp solucanı ve yengeçleri beslemesini anlatır.",
      "C": "V bu bacaların Europa ve Enceladus'ta yaşam ihtimaline ilham verdiğini bağlar.",
      "D": "DOĞRU CEVAP (IV): Metin derin deniz hidrotermal bacalarındaki kemosenteze dayalı karanlık ekosistemi ve bunun Europa gibi okyanuslu uydularda yaşam ihtimaline dair ipuçlarını anlatmaktadır. IV. cümle ise tropikal mercan resiflerindeki güneş ışığına geçerek metnin odağını saptırmaktadır.",
      "E": "II güneşsiz ortamda kemosentez yapan bakterileri açıklar."
    },
    "tactic": "Derin deniz bacaları (I) -> Kemosentez (II) -> Tüp solucanları (III) -> Europa'da yaşam ihtimali (V). IV. cümle ise sığ mercan resiflerini araya sokarak akışı koparmaktadır.",
    "memoryCode": "🎵 Hidrotermal baca ve Europa yaşamı anlatılırken tropik mercan araya giremez!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Alakasız Karşılaştırma",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-irrel-7",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) In psychology, cognitive dissonance refers to the intense mental discomfort experienced when an individual holds contradictory beliefs, values, or actions simultaneously. (II) To alleviate this psychological tension, individuals typically alter their attitudes, justify their behavior with excuses, or rationalize conflicting evidence. (III) For example, a heavy smoker who acknowledges that smoking causes lung cancer may convince himself that his daily stress relief outweighs long-term health risks. (IV) Severe tobacco taxation policies implemented in European nations have caused cigarette sales to drop by fifteen percent over the last decade. (V) Through such psychological rationalization, the individual restores cognitive equilibrium without actually abandoning the unhealthy behavior.",
    "options": [
      "III",
      "V",
      "I",
      "IV",
      "II"
    ],
    "answer": 3,
    "explanation": "Paragraf bilişsel çelişkiyi (cognitive dissonance) ve sigara içen birinin kanser riskini nasıl akılcılaştırarak (rationalization) kendini rahatlattığını anlatmaktadır. IV. cümle ise Avrupa'daki tütün vergisi politikalarına ve satış düşüşüne geçmektedir.",
    "distractorAnalysis": {
      "A": "III sigara içen birinin kanser gerçeğini nasıl akılcılaştırdığı örneğini verir.",
      "B": "V bu tip akılcılaştırmayla (such rationalization) zihinsel dengenin sağlandığını bağlar.",
      "C": "I bilişsel çelişki kavramının tanımını yapar.",
      "D": "DOĞRU CEVAP (IV): Paragraf bilişsel çelişkiyi (cognitive dissonance) ve sigara içen birinin kanser riskini nasıl akılcılaştırarak (rationalization) kendini rahatlattığını anlatmaktadır. IV. cümle ise Avrupa'daki tütün vergisi politikalarına ve satış düşüşüne geçmektedir.",
      "E": "II bireylerin bu gerginliği azaltmak için nasıl mazeret ürettiğini açıklar."
    },
    "tactic": "V. cümledeki 'Through such psychological rationalization' ifadesi III'teki sigara içicisinin kendi kendini kandırma örneğine bağlıdır. IV. cümledeki devlet vergi politikası araya girmiş yabancı bir unsurdur.",
    "memoryCode": "🎵 Bilişsel çelişki ve kendini kandırma anlatılırken devlet tütün vergisi akışı bozar!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Politika Sapması",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-irrel-8",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Paragrafta numaralanmış cümlelerden hangisinin anlatım bütünlüğünü bozduğunu bulunuz:\n\n(I) Renewable energy microgrids are transforming rural electrification across remote regions of the developing world. (II) By combining decentralized photovoltaic arrays, small wind turbines, and battery storage banks, microgrids deliver reliable electricity without relying on expensive national grid extensions. (III) Local communities can power primary healthcare clinics, refrigerate vaccines, and illuminate schools after sunset. (IV) Many rural families still burn kerosene lamps and dried cattle dung inside poorly ventilated huts, causing severe respiratory illnesses. (V) Furthermore, local entrepreneurs can utilize this dependable energy to operate small milling machinery, irrigational water pumps, and telecommunication charging kiosks.",
    "options": [
      "IV",
      "I",
      "V",
      "III",
      "II"
    ],
    "answer": 0,
    "explanation": "Paragraf mikroşebekelerin (microgrids) getirdiği faydaları, elektriğin kliniklere, aşı dolaplarına, okullara (III) ve yerel işletmelere (V) sağladığı olumlu dönüşümü anlatmaktadır. IV. cümle mikroşebeke öncesi ilkel tezek ve gaz lambası dumanına dönerek başarı akışını bozmaktadır.",
    "distractorAnalysis": {
      "A": "DOĞRU CEVAP (IV): Paragraf mikroşebekelerin (microgrids) getirdiği faydaları, elektriğin kliniklere, aşı dolaplarına, okullara (III) ve yerel işletmelere (V) sağladığı olumlu dönüşümü anlatmaktadır. IV. cümle mikroşebeke öncesi ilkel tezek ve gaz lambası dumanına dönerek başarı akışını bozmaktadır.",
      "B": "I kırsal mikroşebeke teknolojisini tanıtır.",
      "C": "V furthermore ile işletmelerin su pompası ve makineleri çalıştırmasını bağlar.",
      "D": "III elektrikle klinik ve okulların güçlendirilmesini anlatır.",
      "E": "II güneş ve rüzgarla şebekenin nasıl bağımsız çalıştığını açıklar."
    },
    "tactic": "Mikroşebekenin kurulumu (II) -> Klinik ve okulların aydınlanması (III) -> 'Furthermore' ile işletmelerin çalışması (V). IV. cümle araya negatif geçmiş detayı sokarak akışı kesmektedir.",
    "memoryCode": "🎵 Mikroşebekenin getirdiği elektrik ve kalkınma anlatılırken tezek dumanı akışı bozar!",
    "isImportant": true,
    "importantTag": "Akışı Bozan Cümle / Durum Karışıklığı",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-dial-1",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nProfessor Harrison: Did you have a chance to review the lab results from our latest geothermal groundwater sampling?\nDr. Miller: Yes, and the mineral concentrations are far higher than our computational models predicted.\nProfessor Harrison: -------?\nDr. Miller: Almost certainly. The seismic tremors last Thursday likely fractured deep sub-surface aquifers and allowed magmatic fluids to seep into the reservoir.",
    "options": [
      "Why did the undergraduate technicians forget to calibrate the spectrophotometer properly",
      "Are you suggesting that we should cancel the field expedition to Iceland next month",
      "Should we immediately submit our findings to an international peer-reviewed journal",
      "How much funding do we have left in our departmental research budget for next semester",
      "Do you think the recent tectonic activity in the fault zone could be responsible for this sudden surge"
    ],
    "answer": 4,
    "explanation": "Dr. Miller'ın cevabı: 'Almost certainly. The seismic tremors last Thursday likely fractured deep aquifers...' (Neredeyse kesinlikle. Geçen perşembe yaşanan sismik sarsıntılar derin akiferleri çatlattı). Bu cevaba yol açacak soru: Sismik/tektonik aktivitenin bu artıştan sorumlu olabileceğini mi düşünüyorsun?",
    "distractorAnalysis": {
      "A": "'Why did the undergraduate technicians forget to calibrate the spectrophotometer properly' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "B": "'Are you suggesting that we should cancel the field expedition to Iceland next month' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "'Should we immediately submit our findings to an international peer-reviewed journal' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'How much funding do we have left in our departmental research budget for next semester' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "DOĞRU: Dr. Miller'ın cevabı: 'Almost certainly. The seismic tremors last Thursday likely fractured deep aquifers...' (Neredeyse kesinlikle. Geçen perşembe yaşanan sismik sarsıntılar derin akiferleri çatlattı). Bu cevaba yol açacak soru: Sismik/tektonik aktivitenin bu artıştan sorumlu olabileceğini mi düşünüyorsun?"
    },
    "tactic": "Boşluktan sonraki yanıta ('Almost certainly. The seismic tremors...') bakın; soru mutlaka sismik veya tektonik etkiyi sormalıdır.",
    "memoryCode": "🎵 Yanıt 'sismik sarsıntılar' diyorsa, soru 'tektonik aktivite mi' diye sorar!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Bağlam ve Yanıt Uyumu",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-dial-2",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nEmily: I noticed that you've been working late every evening this week preparing the quarterly audit report.\nDavid: Yes, our overseas subsidiary discovered several accounting discrepancies that we must resolve before Friday's board meeting.\nEmily: That sounds overwhelming. -------?\nDavid: That would be a tremendous relief, thank you! Could you cross-check the foreign currency exchange reconciliations on spreadsheets B and C?",
    "options": [
      "Would you like me to take over some of the data verification tasks so you can focus on the executive summary",
      "Should we suggest postponing Friday's board meeting until the next fiscal quarter",
      "Why didn't you report the overseas subsidiary to the international financial regulatory agency",
      "Do you think the chief financial officer will fire the entire accounting department next week",
      "How many employees are currently working in our overseas manufacturing branch in Singapore"
    ],
    "answer": 0,
    "explanation": "David'in cevabı: 'That would be a tremendous relief, thank you! Could you cross-check the foreign currency spreadsheets...?' (Bu müthiş bir rahatlama olur, teşekkürler! Döviz tablolarını kontrol edebilir misin?). Demek ki Emily bir yardım teklifinde bulunmuştur.",
    "distractorAnalysis": {
      "A": "DOĞRU: David'in cevabı: 'That would be a tremendous relief, thank you! Could you cross-check the foreign currency spreadsheets...?' (Bu müthiş bir rahatlama olur, teşekkürler! Döviz tablolarını kontrol edebilir misin?). Demek ki Emily bir yardım teklifinde bulunmuştur.",
      "B": "'Should we suggest postponing Friday's board meeting until the next fiscal quarter' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "'Why didn't you report the overseas subsidiary to the international financial regulatory agency' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'Do you think the chief financial officer will fire the entire accounting department next week' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'How many employees are currently working in our overseas manufacturing branch in Singapore' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Cevap 'Müthiş bir rahatlama olur, teşekkürler, şu tabloları kontrol eder misin' ise, soru doğrudan yardım teklifidir.",
    "memoryCode": "🎵 Yanıt 'Müthiş bir rahatlama olur, teşekkürler' ise soru yardım teklifidir!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Yardım Teklifi",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-dial-3",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Evans: The new clinical trials show that patients taking the synthetic hormone experienced a 30% reduction in migraine frequency.\nDr. Ramos: That sounds promising, but did you monitor their cardiovascular markers during the six-month trial?\nDr. Evans: -------.\nDr. Ramos: That is indeed reassuring. In that case, we can proceed to Phase III trials with reasonable confidence.",
    "options": [
      "No, our research team lacked the specialized cardiology equipment to measure vascular changes",
      "Unfortunately, several participants developed chronic hypertension and arrhythmia within two weeks",
      "Cardiovascular markers are completely irrelevant when evaluating migraine neuropathology",
      "Why do you always raise unnecessary objections whenever we achieve a breakthrough",
      "Yes, blood pressure and cardiac rhythm remained completely stable across all age cohorts"
    ],
    "answer": 4,
    "explanation": "Dr. Ramos'un sonraki tepkisi: 'That is indeed reassuring. In that case, we can proceed to Phase III trials...' (Bu gerçekten iç rahatlatıcı. Bu durumda 3. aşamaya güvenle geçebiliriz). Demek ki Dr. Evans kalp sağlığının tamamen stabil ve güvenli olduğunu söylemiştir.",
    "distractorAnalysis": {
      "A": "'No, our research team lacked the specialized cardiology equipment to measure vascular changes' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "B": "'Unfortunately, several participants developed chronic hypertension and arrhythmia within two weeks' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "'Cardiovascular markers are completely irrelevant when evaluating migraine neuropathology' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'Why do you always raise unnecessary objections whenever we achieve a breakthrough' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "DOĞRU: Dr. Ramos'un sonraki tepkisi: 'That is indeed reassuring. In that case, we can proceed to Phase III trials...' (Bu gerçekten iç rahatlatıcı. Bu durumda 3. aşamaya güvenle geçebiliriz). Demek ki Dr. Evans kalp sağlığının tamamen stabil ve güvenli olduğunu söylemiştir."
    },
    "tactic": "Sonraki cümle 'That is reassuring' (İç rahatlatıcı) diyorsa boşluktaki yanıt kardiyovasküler risklerin olmadığını kanıtlamalıdır.",
    "memoryCode": "🎵 Karşı taraf 'İçim rahatladı, devam edelim' diyorsa cevap güven vericidir!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Güvence ve Olumlu Seyir",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-dial-4",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nJournalist: Many environmental activists argue that carbon offset credits merely give corporations a license to pollute.\nCorporate Spokesperson: That is a fundamental misunderstanding of how verified credit mechanisms function.\nJournalist: -------?\nCorporate Spokesperson: Because certified carbon credits mandate audited emissions reductions elsewhere, compelling industries to finance tangible reforestation and renewable infrastructure.",
    "options": [
      "How many metric tons of plastic packaging did your distribution centers recycle last quarter",
      "How do you justify that claim when companies can simply buy credits rather than cutting their own emissions",
      "Do you believe that international environmental treaties have completely failed to slow global warming",
      "Why did your executive board decide to invest in offshore petroleum drilling platforms last year",
      "When was your corporation founded and what are its primary manufacturing products"
    ],
    "answer": 1,
    "explanation": "Sözcünün cevabı 'Because certified carbon credits mandate audited reductions elsewhere, compelling industries to finance...' (Çünkü sertifikalı krediler başka yerlerde denetlenen emisyon azalışını zorunlu kılıyor...). Gazeteci 'Şirketler kendi emisyonunu azaltmak yerine kredi satın alırken bu iddiayı nasıl savunuyorsunuz?' diye sormuştur.",
    "distractorAnalysis": {
      "A": "'How many metric tons of plastic packaging did your distribution centers recycle last quarter' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "B": "DOĞRU: Sözcünün cevabı 'Because certified carbon credits mandate audited reductions elsewhere, compelling industries to finance...' (Çünkü sertifikalı krediler başka yerlerde denetlenen emisyon azalışını zorunlu kılıyor...). Gazeteci 'Şirketler kendi emisyonunu azaltmak yerine kredi satın alırken bu iddiayı nasıl savunuyorsunuz?' diye sormuştur.",
      "C": "'Do you believe that international environmental treaties have completely failed to slow global warming' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'Why did your executive board decide to invest in offshore petroleum drilling platforms last year' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'When was your corporation founded and what are its primary manufacturing products' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Cevap 'Because ...' ile gerekçe açıklıyorsa, gazeteci sözcünün iddiasını nasıl temellendirdiğini ('How do you justify that claim?') sormuştur.",
    "memoryCode": "🎵 Cevap 'Because' ile gerekçe veriyorsa soru 'How do you justify' ile hesap sorar!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / 'Because' Yanıtına Uygun Soru",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-dial-5",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nArchaeologist A: Look at these ceramic fragments uncovered from the lower strata of the settlement mound.\nArchaeologist B: Remarkable! The geometric incisions are virtually identical to pottery found in the Indus Valley.\nArchaeologist A: Exactly. -------.\nArchaeologist B: I agree. It suggests that trans-continental maritime trade routes were operational much earlier than previously assumed.",
    "options": [
      "Therefore, the ancient inhabitants must have lived in complete cultural isolation",
      "Ancient potters lacked the technical skill to fire clay vessels at high temperatures",
      "This strongly indicates that direct commercial contact existed between these two distant civilizations",
      "We should immediately rebury the artifacts to protect them from weather damage",
      "The chemical composition of the clay proves that the pottery was fabricated locally"
    ],
    "answer": 2,
    "explanation": "Arkeolog B'nin cevabı: 'I agree. It suggests that trans-continental maritime trade routes were operational much earlier...' (Katılıyorum. Kıtalararası deniz ticaret yollarının sanılandan çok daha önce işlediğini gösteriyor). Arkeolog A 'Bu iki medeniyet arasında doğrudan ticari temas olduğunu gösteriyor' demiştir.",
    "distractorAnalysis": {
      "A": "'Therefore, the ancient inhabitants must have lived in complete cultural isolation' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "B": "'Ancient potters lacked the technical skill to fire clay vessels at high temperatures' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "DOĞRU: Arkeolog B'nin cevabı: 'I agree. It suggests that trans-continental maritime trade routes were operational much earlier...' (Katılıyorum. Kıtalararası deniz ticaret yollarının sanılandan çok daha önce işlediğini gösteriyor). Arkeolog A 'Bu iki medeniyet arasında doğrudan ticari temas olduğunu gösteriyor' demiştir.",
      "D": "'We should immediately rebury the artifacts to protect them from weather damage' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'The chemical composition of the clay proves that the pottery was fabricated locally' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Arkeolog B'nin ticaret yollarını onaylaması ('I agree. It suggests maritime trade...'), Arkeolog A'nın medeniyetler arası ticari temasa (commercial contact) işaret ettiğini kanıtlar.",
    "memoryCode": "🎵 Ticaret yolları onayı (trade routes) = Ticari temas tespiti (commercial contact)!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Çıkarım Uyumu",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-dial-6",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nPatient: Doctor, I've been experiencing severe lower back pain whenever I sit at my desk for more than an hour.\nPhysician: Have you tried any ergonomic modifications to your workspace, or are you sitting in the same office chair?\nPatient: -------.\nPhysician: In that case, I strongly recommend acquiring an adjustable lumbar-support chair and setting a timer to stand up every forty minutes.",
    "options": [
      "I'm still using the standard rigid wooden chair that came with my rental apartment",
      "I always sleep on a firm orthopedic mattress recommended by a neurosurgeon",
      "I run twenty miles every weekend and stretch my hamstrings twice daily without pain",
      "My back pain completely disappeared two weeks ago after I started acupuncture therapy",
      "I have already purchased an expensive orthopedic standing desk and customized ergonomic chair"
    ],
    "answer": 0,
    "explanation": "Doktorun tavsiyesi: 'In that case, I strongly recommend acquiring an adjustable lumbar-support chair...' (O halde ayarlanabilir bel destekli bir koltuk edinmenizi öneririm). Demek ki hasta ergonomik olmayan eski/sert bir sandalye kullandığını belirtmiştir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Doktorun tavsiyesi: 'In that case, I strongly recommend acquiring an adjustable lumbar-support chair...' (O halde ayarlanabilir bel destekli bir koltuk edinmenizi öneririm). Demek ki hasta ergonomik olmayan eski/sert bir sandalye kullandığını belirtmiştir.",
      "B": "'I always sleep on a firm orthopedic mattress recommended by a neurosurgeon' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "'I run twenty miles every weekend and stretch my hamstrings twice daily without pain' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'My back pain completely disappeared two weeks ago after I started acupuncture therapy' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'I have already purchased an expensive orthopedic standing desk and customized ergonomic chair' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Doktor 'O halde ergonomik bir koltuk al' diyorsa, hasta 'Hala sert tahta sandalyede oturuyorum' demiştir.",
    "memoryCode": "🎵 Doktor 'Koltuk al' diyorsa hasta 'Tahta sandalyede oturuyorum' demiştir!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Tıbbi Tavsiye Tetikleyici",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-dial-7",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nInterviewer: Many candidates highlight technical programming proficiency, but our engineering teams value collaborative adaptability above all else. Can you provide an example of that?\nJob Applicant: In my previous position, our lead architect unexpectedly resigned two weeks before a major enterprise software deployment. -------.\nInterviewer: That demonstrates commendable leadership and cross-functional coordination under pressure.",
    "options": [
      "I decided to submit my two weeks' notice immediately because the workload became completely unreasonable",
      "I informed executive management that the project was doomed to fail without the lead architect",
      "I immediately stepped up to coordinate our sprint backlog, redistributed responsibilities, and ensured our team met the deadline seamlessly",
      "I prefer working entirely alone in quiet environments without interruption from colleagues",
      "I ignored the software deployment schedule and focused solely on my personal programming portfolio"
    ],
    "answer": 2,
    "explanation": "Mülakatçının övgüsü: 'That demonstrates commendable leadership and cross-functional coordination under pressure' (Bu, baskı altında takdire şayan bir liderlik ve ekipler arası koordinasyon gösteriyor). Başvuran kişi mimar istifa edince inisiyatif alıp ekibi organize ettiğini anlatmalıdır.",
    "distractorAnalysis": {
      "A": "'I decided to submit my two weeks' notice immediately because the workload became completely unreasonable' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "B": "'I informed executive management that the project was doomed to fail without the lead architect' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "DOĞRU: Mülakatçının övgüsü: 'That demonstrates commendable leadership and cross-functional coordination under pressure' (Bu, baskı altında takdire şayan bir liderlik ve ekipler arası koordinasyon gösteriyor). Başvuran kişi mimar istifa edince inisiyatif alıp ekibi organize ettiğini anlatmalıdır.",
      "D": "'I prefer working entirely alone in quiet environments without interruption from colleagues' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'I ignored the software deployment schedule and focused solely on my personal programming portfolio' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Övgü: Liderlik ve ekipler arası koordinasyon. Cevap: İnisiyatif alıp görevleri yeniden dağıtarak teslim tarihine ulaştık.",
    "memoryCode": "🎵 Liderlik övgüsü = Görevleri organize ettim ve başardık cevabı!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Mülakat & Liyakat",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-dial-8",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nProfessor Vance: Our comparative literature department is considering removing ancient Greek tragedy from the mandatory core curriculum.\nProfessor Kline: I would strongly advise against that decision. -------.\nProfessor Vance: You make a compelling point. We should perhaps modernize the analytical frameworks rather than eliminating the classical texts altogether.",
    "options": [
      "Greek tragedies articulate foundational archetypes of justice, hubris, and moral conflict that remain indispensable for understanding modern drama",
      "Modern theatrical plays owe virtually nothing to ancient Athenian dramatic conventions",
      "Very few university libraries retain original Hellenistic manuscripts in their archival collections",
      "Greek tragedy is far too antiquated and linguistically convoluted for undergraduate students to comprehend today",
      "Enrollment in classical literature courses has plummeted by over sixty percent across the country"
    ],
    "answer": 0,
    "explanation": "Professor Kline Antik Yunan trajedilerinin müfredattan kaldırılmasına şiddetle karşı çıkıyor ('strongly advise against'). Vance de 'Compelling point' diyerek ikna oluyor. Kline trajedilerin modern dramayı anlamada vazgeçilmez ahlak ve adalet arketipleri sunduğunu savunmuştur.",
    "distractorAnalysis": {
      "A": "DOĞRU: Professor Kline Antik Yunan trajedilerinin müfredattan kaldırılmasına şiddetle karşı çıkıyor ('strongly advise against'). Vance de 'Compelling point' diyerek ikna oluyor. Kline trajedilerin modern dramayı anlamada vazgeçilmez ahlak ve adalet arketipleri sunduğunu savunmuştur.",
      "B": "'Modern theatrical plays owe virtually nothing to ancient Athenian dramatic conventions' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "C": "'Very few university libraries retain original Hellenistic manuscripts in their archival collections' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "D": "'Greek tragedy is far too antiquated and linguistically convoluted for undergraduate students to comprehend today' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz.",
      "E": "'Enrollment in classical literature courses has plummeted by over sixty percent across the country' diyalogun bağlamına, tonuna veya yanıt mantığına uymaz."
    },
    "tactic": "Kaldırılmasına karşı çıkan profesör, eserin kalıcı evrensel değerini (foundational archetypes of justice and moral conflict) vurgulamalıdır.",
    "memoryCode": "🎵 Müfredattan çıkarmayın çünkü modern edebiyatın temel taşıdır!",
    "isImportant": true,
    "importantTag": "Diyalog Tamamlama / Akademik Savunma",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-read-1",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The discovery of extremophiles—organisms that thrive in environments once thought entirely inhospitable to life—has profoundly transformed modern astrobiology. Microbes thriving in boiling volcanic hot springs, beneath crushing hydrostatic pressures in ocean trenches, or deep within Antarctic ice shelves demonstrate that life possesses an astonishing resilience. These findings have compelled scientists to radically broaden the search parameters for extraterrestrial life within our solar system. Instead of focusing solely on Earth-like temperate worlds, planetary scientists now consider moons like Europa, with its sub-surface saline ocean, and Enceladus, with its hydrothermal plumes, as plausible abodes of primitive alien life.",
    "stem": "It can be inferred from the passage that the discovery of extremophiles -------.",
    "options": [
      "has expanded the range of celestial bodies where planetary scientists search for living organisms",
      "confirmed that liquid water is unnecessary for any biochemical biological metabolism",
      "led scientists to abandon Earth-based laboratory experiments completely",
      "demonstrated that multicellular organisms cannot survive in hot volcanic springs",
      "has proved conclusively that intelligent civilizations exist on Saturn's moons"
    ],
    "answer": 0,
    "explanation": "Pasajda 'compelled scientists to radically broaden the search parameters for extraterrestrial life... moons like Europa and Enceladus as plausible abodes' ifadesi, incelenen gök cisimlerinin kapsamının genişletildiğini açıkça doğrular.",
    "distractorAnalysis": {
      "A": "DOĞRU: Pasajda 'compelled scientists to radically broaden the search parameters for extraterrestrial life... moons like Europa and Enceladus as plausible abodes' ifadesi, incelenen gök cisimlerinin kapsamının genişletildiğini açıkça doğrular.",
      "B": "'confirmed that liquid water is unnecessary for any biochemical biological metabolism' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'led scientists to abandon Earth-based laboratory experiments completely' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "'demonstrated that multicellular organisms cannot survive in hot volcanic springs' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "E": "'has proved conclusively that intelligent civilizations exist on Saturn's moons' metindeki bilgi veya çıkarımlarla çelişmektedir."
    },
    "tactic": "Astrobiologlar artık sadece Dünya benzeri gezegenleri değil, aşırı koşullara sahip uyduları da listeye aldılar: 'expanded the range of celestial bodies'.",
    "memoryCode": "🎵 Ekstrem canlılar bulundu -> Uzayda aranacak yerler genişledi!",
    "isImportant": true,
    "importantTag": "Okuma / Çıkarım",
    "ydsFrequency": "%97"
  },
  {
    "id": "tq-imp-read-2",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The discovery of extremophiles—organisms that thrive in environments once thought entirely inhospitable to life—has profoundly transformed modern astrobiology. Microbes thriving in boiling volcanic hot springs, beneath crushing hydrostatic pressures in ocean trenches, or deep within Antarctic ice shelves demonstrate that life possesses an astonishing resilience. These findings have compelled scientists to radically broaden the search parameters for extraterrestrial life within our solar system. Instead of focusing solely on Earth-like temperate worlds, planetary scientists now consider moons like Europa, with its sub-surface saline ocean, and Enceladus, with its hydrothermal plumes, as plausible abodes of primitive alien life.",
    "stem": "According to the passage, planetary scientists previously -------.",
    "options": [
      "denied the existence of hydrothermal plumes on Enceladus and Europa",
      "believed that volcanic activity was the sole catalyst for extraterrestrial evolution",
      "insisted that microorganisms were unable to survive under normal atmospheric pressure",
      "restricted their search for alien life primarily to planets with temperate conditions similar to Earth's",
      "assumed that life could exist only in sub-surface saline oceans beneath ice shelves"
    ],
    "answer": 3,
    "explanation": "Pasajda 'Instead of focusing solely on Earth-like temperate worlds...' (Yalnızca Dünya benzeri ılıman dünyalara odaklanmak yerine...) denmektedir. Bu da eskiden aramanın yalnızca Dünya benzeri ılıman gezegenlerle sınırlandırıldığını gösterir.",
    "distractorAnalysis": {
      "A": "'denied the existence of hydrothermal plumes on Enceladus and Europa' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "B": "'believed that volcanic activity was the sole catalyst for extraterrestrial evolution' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'insisted that microorganisms were unable to survive under normal atmospheric pressure' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "DOĞRU: Pasajda 'Instead of focusing solely on Earth-like temperate worlds...' (Yalnızca Dünya benzeri ılıman dünyalara odaklanmak yerine...) denmektedir. Bu da eskiden aramanın yalnızca Dünya benzeri ılıman gezegenlerle sınırlandırıldığını gösterir.",
      "E": "'assumed that life could exist only in sub-surface saline oceans beneath ice shelves' metindeki bilgi veya çıkarımlarla çelişmektedir."
    },
    "tactic": "'Instead of focusing solely on Earth-like temperate worlds' = Önceden sadece Dünya benzeri ılıman yerlere odaklanıyorlardı.",
    "memoryCode": "🎵 Instead of X = Eskiden sadece X yapılıyordu!",
    "isImportant": true,
    "importantTag": "Okuma / Detay & Geçmiş Durum",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-read-3",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "YDS",
    "passage": "The discovery of extremophiles—organisms that thrive in environments once thought entirely inhospitable to life—has profoundly transformed modern astrobiology. Microbes thriving in boiling volcanic hot springs, beneath crushing hydrostatic pressures in ocean trenches, or deep within Antarctic ice shelves demonstrate that life possesses an astonishing resilience. These findings have compelled scientists to radically broaden the search parameters for extraterrestrial life within our solar system. Instead of focusing solely on Earth-like temperate worlds, planetary scientists now consider moons like Europa, with its sub-surface saline ocean, and Enceladus, with its hydrothermal plumes, as plausible abodes of primitive alien life.",
    "stem": "The author's primary purpose in writing this passage is to -------.",
    "options": [
      "demonstrate that multicellular organisms originated exclusively in deep ocean trenches",
      "argue that Europa and Enceladus are too hostile for human astronaut colonization",
      "criticize planetary scientists for wasting public research funds on lunar exploration",
      "compare the genetic architecture of volcanic bacteria with Antarctic microorganisms",
      "explain how terrestrial extremophile research has revolutionized theories regarding extraterrestrial life"
    ],
    "answer": 4,
    "explanation": "Metin baştan sona Dünya'daki zorlu yaşam formlarının (extremophiles) uzayda yaşam arama teorilerini ve astrobiyolojiyi nasıl kökten değiştirdiğini (revolutionized / transformed) anlatmaktadır.",
    "distractorAnalysis": {
      "A": "'demonstrate that multicellular organisms originated exclusively in deep ocean trenches' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "B": "'argue that Europa and Enceladus are too hostile for human astronaut colonization' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'criticize planetary scientists for wasting public research funds on lunar exploration' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "'compare the genetic architecture of volcanic bacteria with Antarctic microorganisms' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "E": "DOĞRU: Metin baştan sona Dünya'daki zorlu yaşam formlarının (extremophiles) uzayda yaşam arama teorilerini ve astrobiyolojiyi nasıl kökten değiştirdiğini (revolutionized / transformed) anlatmaktadır."
    },
    "tactic": "Metnin ana teması extremophile bulgularının uzayda yaşam araştırmalarına etkisidir.",
    "memoryCode": "🎵 Yazarın amacı = Dünya'daki aşırı canlıların uzay araştırmalarına devrimci etkisini açıklamak!",
    "isImportant": true,
    "importantTag": "Okuma / Yazarın Amacı",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-read-4",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "The discovery of extremophiles—organisms that thrive in environments once thought entirely inhospitable to life—has profoundly transformed modern astrobiology. Microbes thriving in boiling volcanic hot springs, beneath crushing hydrostatic pressures in ocean trenches, or deep within Antarctic ice shelves demonstrate that life possesses an astonishing resilience. These findings have compelled scientists to radically broaden the search parameters for extraterrestrial life within our solar system. Instead of focusing solely on Earth-like temperate worlds, planetary scientists now consider moons like Europa, with its sub-surface saline ocean, and Enceladus, with its hydrothermal plumes, as plausible abodes of primitive alien life.",
    "stem": "The tone of the author throughout the passage can best be described as -------.",
    "options": [
      "sarcastic and dismissive",
      "nostalgic and romantic",
      "alarmist and apprehensive",
      "indifferent and skeptical",
      "informative and objective"
    ],
    "answer": 4,
    "explanation": "Yazar bilimsel bulguları nesnel, bilgilendirici ve profesyonel bir dille aktarmaktadır (informative and objective).",
    "distractorAnalysis": {
      "A": "Alaycı veya küçümseyici bir ifade yoktur.",
      "B": "Nostaljik veya romantik bir ton taşımamaktadır.",
      "C": "Korkutucu veya endişe verici bir durum yoktur.",
      "D": "Kayıtsız veya şüpheci değildir.",
      "E": "DOĞRU: Yazar bilimsel bulguları nesnel, bilgilendirici ve profesyonel bir dille aktarmaktadır (informative and objective)."
    },
    "tactic": "Akademik bilimsel metinlerin tonu genellikle 'informative / objective / analytical'dır.",
    "memoryCode": "🎵 Bilimsel makale tonu = Nesnel ve bilgilendirici (Informative and objective)!",
    "isImportant": true,
    "importantTag": "Okuma / Yazarın Tonu",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-read-5",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "YDS",
    "passage": "The discovery of extremophiles—organisms that thrive in environments once thought entirely inhospitable to life—has profoundly transformed modern astrobiology. Microbes thriving in boiling volcanic hot springs, beneath crushing hydrostatic pressures in ocean trenches, or deep within Antarctic ice shelves demonstrate that life possesses an astonishing resilience. These findings have compelled scientists to radically broaden the search parameters for extraterrestrial life within our solar system. Instead of focusing solely on Earth-like temperate worlds, planetary scientists now consider moons like Europa, with its sub-surface saline ocean, and Enceladus, with its hydrothermal plumes, as plausible abodes of primitive alien life.",
    "stem": "Which of the following is NOT mentioned as a hostile habitat where extremophiles survive?",
    "options": [
      "Sub-zero Antarctic ice shelves",
      "Sub-surface hydrothermal environments",
      "Deep ocean trenches under crushing hydrostatic pressure",
      "Boiling volcanic hot springs",
      "Arid desert dunes devoid of any subterranean mineral moisture"
    ],
    "answer": 4,
    "explanation": "Metinde kaynar volkanik kaplıcalar, okyanus çukurları ve Antarktika buzulları sayılmıştır; ancak kurak çöl kumulları (arid desert dunes) sayılmamıştır.",
    "distractorAnalysis": {
      "A": "Metinde açıkça geçmektedir ('deep within Antarctic ice shelves').",
      "B": "Metinde açıkça geçmektedir ('hydrothermal plumes').",
      "C": "Metinde açıkça geçmektedir ('crushing hydrostatic pressures in ocean trenches').",
      "D": "Metinde açıkça geçmektedir ('boiling volcanic hot springs').",
      "E": "DOĞRU: Metinde kaynar volkanik kaplıcalar, okyanus çukurları ve Antarktika buzulları sayılmıştır; ancak kurak çöl kumulları (arid desert dunes) sayılmamıştır."
    },
    "tactic": "Metinde açıkça geçen üç mekan: boiling volcanic hot springs, ocean trenches, Antarctic ice shelves. Çöl kumulları metinde yoktur.",
    "memoryCode": "🎵 Metinde geçmeyen şık: Çöl kumulları!",
    "isImportant": true,
    "importantTag": "Okuma / Negatif Sorgulama (Not Mentioned)",
    "ydsFrequency": "%92"
  },
  {
    "id": "tq-imp-read-6",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "Urbanization during the Industrial Revolution precipitated profound transformations in human social structures. As millions of rural agricultural laborers migrated to burgeoning manufacturing metropolises, traditional familial safety nets dissolved. In cramped tenement slums, factory workers faced twelve-hour workdays, dangerous machinery devoid of safety guards, and rampant cholera outbreaks triggered by contaminated communal water pumps. However, this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes demanding fair wages, and parliamentary legislation gradually curtailed child exploitation, paving the way for the contemporary welfare state.",
    "stem": "According to the passage, the concentration of laborers in industrial cities -------.",
    "options": [
      "functioned as a catalyst for the emergence of organized labor movements and legal reforms",
      "strengthened traditional rural extended family networks across agricultural communities",
      "guaranteed that factory owners voluntarily introduced humane eight-hour work shifts",
      "discouraged factory workers from participating in political activism or unionization",
      "completely eradicated infectious diseases like cholera from European metropolises"
    ],
    "answer": 0,
    "explanation": "Metinde 'this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes...' denmektedir.",
    "distractorAnalysis": {
      "A": "DOĞRU: Metinde 'this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes...' denmektedir.",
      "B": "'strengthened traditional rural extended family networks across agricultural communities' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'guaranteed that factory owners voluntarily introduced humane eight-hour work shifts' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "'discouraged factory workers from participating in political activism or unionization' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "E": "'completely eradicated infectious diseases like cholera from European metropolises' metindeki bilgi veya çıkarımlarla çelişmektedir."
    },
    "tactic": "Şehirlerdeki yoğunlaşma ve sefalet, organize işçi hareketlerinin ve yasal reformların ortaya çıkmasında katalizör görevi görmüştür (catalyst for reforms).",
    "memoryCode": "🎵 Şehir sefaleti sendikaları ve sosyal reformları doğurdu!",
    "isImportant": true,
    "importantTag": "Okuma / Sebep-Sonuç",
    "ydsFrequency": "%95"
  },
  {
    "id": "tq-imp-read-7",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "YDS",
    "passage": "Urbanization during the Industrial Revolution precipitated profound transformations in human social structures. As millions of rural agricultural laborers migrated to burgeoning manufacturing metropolises, traditional familial safety nets dissolved. In cramped tenement slums, factory workers faced twelve-hour workdays, dangerous machinery devoid of safety guards, and rampant cholera outbreaks triggered by contaminated communal water pumps. However, this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes demanding fair wages, and parliamentary legislation gradually curtailed child exploitation, paving the way for the contemporary welfare state.",
    "stem": "It can be understood from the passage that before migrating to cities, rural laborers -------.",
    "options": [
      "organized nationwide industrial strikes to demand agricultural subsidies",
      "enjoyed modern healthcare facilities and clean piped municipal water",
      "worked under strict parliamentary labor regulations limiting daily shifts",
      "resided in overcrowded multi-story tenement buildings with shared sanitation",
      "relied on traditional family and communal support networks for security"
    ],
    "answer": 4,
    "explanation": "Metinde şehre göçle birlikte 'traditional familial safety nets dissolved' (geleneksel ailesel güvenlik ağları dağıldı) denmektedir. Bu da göçten önce kırsal işçilerin bu ailevi destek ağlarına dayandığını gösterir.",
    "distractorAnalysis": {
      "A": "'organized nationwide industrial strikes to demand agricultural subsidies' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "B": "'enjoyed modern healthcare facilities and clean piped municipal water' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'worked under strict parliamentary labor regulations limiting daily shifts' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "'resided in overcrowded multi-story tenement buildings with shared sanitation' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "E": "DOĞRU: Metinde şehre göçle birlikte 'traditional familial safety nets dissolved' (geleneksel ailesel güvenlik ağları dağıldı) denmektedir. Bu da göçten önce kırsal işçilerin bu ailevi destek ağlarına dayandığını gösterir."
    },
    "tactic": "'Traditional familial safety nets dissolved' = Şehre gelmeden önce geleneksel aile destek ağları vardı.",
    "memoryCode": "🎵 Kırsalda geleneksel aile koruma ağı vardı, şehre gelince dağıldı!",
    "isImportant": true,
    "importantTag": "Okuma / Çıkarım",
    "ydsFrequency": "%94"
  },
  {
    "id": "tq-imp-read-8",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "YDS",
    "passage": "Urbanization during the Industrial Revolution precipitated profound transformations in human social structures. As millions of rural agricultural laborers migrated to burgeoning manufacturing metropolises, traditional familial safety nets dissolved. In cramped tenement slums, factory workers faced twelve-hour workdays, dangerous machinery devoid of safety guards, and rampant cholera outbreaks triggered by contaminated communal water pumps. However, this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes demanding fair wages, and parliamentary legislation gradually curtailed child exploitation, paving the way for the contemporary welfare state.",
    "stem": "The word 'crucible' in the passage is closest in meaning to -------.",
    "options": [
      "negligible coincidence",
      "testing ground or transformative origin",
      "financial catastrophe",
      "decorative artifact",
      "insurmountable barrier"
    ],
    "answer": 1,
    "explanation": "'Crucible' mecazi olarak büyük zorlukların yeni bir şey doğurduğu 'dönüştürücü pota / çetin sınav ortamı' (testing ground / transformative origin) anlamında kullanılır.",
    "distractorAnalysis": {
      "A": "Önemsiz tesadüf demektir; anlamsızdır.",
      "B": "DOĞRU: 'Crucible' mecazi olarak büyük zorlukların yeni bir şey doğurduğu 'dönüştürücü pota / çetin sınav ortamı' (testing ground / transformative origin) anlamında kullanılır.",
      "C": "Finansal felaket demektir; dönüşüm anlamını vermez.",
      "D": "Süs eşyası demektir; bağlam dışıdır.",
      "E": "Aşılamaz engel demektir; zıttır."
    },
    "tactic": "'Served as the crucible for modern social reforms' = Sosyal reformların doğduğu çetin pota/kaynak görevi gördü.",
    "memoryCode": "🎵 Crucible = Zorlukların yeni bir şeyi doğurduğu pota (transformative origin)!",
    "isImportant": true,
    "importantTag": "Okuma / Kelime Anlamı",
    "ydsFrequency": "%96"
  },
  {
    "id": "tq-imp-read-9",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "YDS",
    "passage": "Urbanization during the Industrial Revolution precipitated profound transformations in human social structures. As millions of rural agricultural laborers migrated to burgeoning manufacturing metropolises, traditional familial safety nets dissolved. In cramped tenement slums, factory workers faced twelve-hour workdays, dangerous machinery devoid of safety guards, and rampant cholera outbreaks triggered by contaminated communal water pumps. However, this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes demanding fair wages, and parliamentary legislation gradually curtailed child exploitation, paving the way for the contemporary welfare state.",
    "stem": "Which of the following was a primary cause of cholera outbreaks in industrial slums?",
    "options": [
      "Prolonged physical exhaustion resulting from twelve-hour daily shifts",
      "Excessive exposure to outdoor smog and soot from factory smokestacks",
      "The lack of adequate heating systems during freezing winter months",
      "The consumption of water from polluted communal supply pumps",
      "Contact with dangerous moving parts on unregulated textile machines"
    ],
    "answer": 3,
    "explanation": "Metinde açıkça 'rampant cholera outbreaks triggered by contaminated communal water pumps' (kirlenmiş ortak su pompalarının tetiklediği kolera salgınları) denmektedir.",
    "distractorAnalysis": {
      "A": "'Prolonged physical exhaustion resulting from twelve-hour daily shifts' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "B": "'Excessive exposure to outdoor smog and soot from factory smokestacks' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "'The lack of adequate heating systems during freezing winter months' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "D": "DOĞRU: Metinde açıkça 'rampant cholera outbreaks triggered by contaminated communal water pumps' (kirlenmiş ortak su pompalarının tetiklediği kolera salgınları) denmektedir.",
      "E": "'Contact with dangerous moving parts on unregulated textile machines' metindeki bilgi veya çıkarımlarla çelişmektedir."
    },
    "tactic": "Koleranın sebebi doğrudan 'contaminated water pumps' olarak verilmiştir.",
    "memoryCode": "🎵 Kolera = Kirlenmiş su pompaları (polluted water pumps)!",
    "isImportant": true,
    "importantTag": "Okuma / Doğrudan Bilgi",
    "ydsFrequency": "%93"
  },
  {
    "id": "tq-imp-read-10",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "YDS",
    "passage": "Urbanization during the Industrial Revolution precipitated profound transformations in human social structures. As millions of rural agricultural laborers migrated to burgeoning manufacturing metropolises, traditional familial safety nets dissolved. In cramped tenement slums, factory workers faced twelve-hour workdays, dangerous machinery devoid of safety guards, and rampant cholera outbreaks triggered by contaminated communal water pumps. However, this concentrated urban misery also served as the crucible for modern social reforms. Laborers organized mutual aid societies, trade unions staged coordinated strikes demanding fair wages, and parliamentary legislation gradually curtailed child exploitation, paving the way for the contemporary welfare state.",
    "stem": "What is the primary takeaway of the author regarding early industrialization?",
    "options": [
      "Industrialization was an unmitigated disaster that permanently ruined human civilization",
      "Parliamentary laws were entirely ineffective in curbing child labor in textile mills",
      "While it imposed horrific human hardship, it simultaneously sparked the institutional foundations of workers' rights",
      "Rural agricultural life was far more dangerous and unsanitary than factory tenement life",
      "Trade unions managed to eradicate all social inequalities within a single decade"
    ],
    "answer": 2,
    "explanation": "Metnin ana fikri: Erken sanayileşme korkunç acılara ve sefalete yol açtı ancak aynı zamanda modern işçi haklarının, sendikaların ve refah devletinin temellerini attı (Both hardship and catalyst for workers' rights).",
    "distractorAnalysis": {
      "A": "'Industrialization was an unmitigated disaster that permanently ruined human civilization' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "B": "'Parliamentary laws were entirely ineffective in curbing child labor in textile mills' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "C": "DOĞRU: Metnin ana fikri: Erken sanayileşme korkunç acılara ve sefalete yol açtı ancak aynı zamanda modern işçi haklarının, sendikaların ve refah devletinin temellerini attı (Both hardship and catalyst for workers' rights).",
      "D": "'Rural agricultural life was far more dangerous and unsanitary than factory tenement life' metindeki bilgi veya çıkarımlarla çelişmektedir.",
      "E": "'Trade unions managed to eradicate all social inequalities within a single decade' metindeki bilgi veya çıkarımlarla çelişmektedir."
    },
    "tactic": "Pasajın iki kutbu: Ağır sefalet (-) ve modern sosyal hakların doğuşu (+). Ana fikir bu ikisini birleştiren seçenektir.",
    "memoryCode": "🎵 Korkunç sefalet getirdi AMA modern hakların ve sendikaların temelini attı!",
    "isImportant": true,
    "importantTag": "Okuma / Ana Fikir",
    "ydsFrequency": "%96"
  }
];

export const EXTRA_TACTIC_QUESTIONS: TacticQuestion[] = [
  {
    "id": "tq-extra-vocab-1",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The local library is an important ------- for students who need quiet study spaces and research books.",
    "options": [
      "resource",
      "injury",
      "disaster",
      "threat",
      "obstacle"
    ],
    "answer": 0,
    "explanation": "Kütüphane öğrenciler için önemli bir 'kaynaktır' (resource).",
    "tactic": "A1 sözcük dağarcığı: library = resource (kaynak).",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-2",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Scientists usually ------- several preliminary experiments before publishing their final research findings.",
    "options": [
      "conduct",
      "destroy",
      "ignore",
      "postpone",
      "cancel"
    ],
    "answer": 0,
    "explanation": "Deney 'yürütmek / yapmak' anlamında 'conduct experiments' kullanılır.",
    "tactic": "Collocation: conduct / carry out an experiment.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-3",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Drinking sufficient water daily helps protect our bodies against dehydration and ------- diseases.",
    "options": [
      "worsen",
      "expand",
      "cause",
      "infect",
      "prevent"
    ],
    "answer": 4,
    "explanation": "Yeterli su içmek vücudu susuzluktan korur ve hastalıkları 'önler' (prevent).",
    "tactic": "Pozitif eylem: protect ... and prevent!",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-4",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The city council decided to build a new bridge to ------- traffic congestion during rush hours.",
    "options": [
      "accelerate",
      "celebrate",
      "reduce",
      "prolong",
      "increase"
    ],
    "answer": 2,
    "explanation": "Trafik sıkışıklığını 'azaltmak' (reduce) için köprü inşa edilmiştir.",
    "tactic": "Trafik gibi sorunlar 'reduce/alleviate' edilir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-5",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Good teachers always ------- their students to read widely and think critically about world events.",
    "options": [
      "punish",
      "encourage",
      "forbid",
      "blame",
      "refuse"
    ],
    "answer": 1,
    "explanation": "İyi öğretmenler öğrencilerini eleştirel düşünmeye 'teşvik eder' (encourage).",
    "tactic": "Encourage someone to do something (teşvik etmek).",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-6",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The climate in the polar regions is extremely -------, with temperatures regularly dropping below minus forty degrees.",
    "options": [
      "pleasant",
      "tropical",
      "moderate",
      "mild",
      "severe"
    ],
    "answer": 4,
    "explanation": "Kutup iklimi son derece 'çetindir / serttir' (severe).",
    "tactic": "Aşırı soğuk iklimler 'severe' veya 'harsh' sıfatıyla nitelenir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-7",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Regular physical exercise has a ------- impact on both cardiovascular health and psychological mood.",
    "options": [
      "harmful",
      "toxic",
      "destructive",
      "fatal",
      "beneficial"
    ],
    "answer": 4,
    "explanation": "Düzenli egzersiz hem kalp sağlığına hem de psikolojiye 'yararlı' (beneficial) bir etki yapar.",
    "tactic": "Egzersiz olumlu sonuç doğurur; 'beneficial' pozitif sıfattır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-8",
    "tacticSlug": "vocabulary",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "The museum charges a small admission fee to cover the daily costs of building -------.",
    "options": [
      "pollution",
      "abandonment",
      "negligence",
      "destruction",
      "maintenance"
    ],
    "answer": 4,
    "explanation": "Bina 'bakım' (maintenance) masraflarını karşılamak için giriş ücreti alınır.",
    "tactic": "Binaların ve makinelerin periyodik korunması 'maintenance'tır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-9",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The government launched a comprehensive public campaign to promote energy ------- among citizens.",
    "options": [
      "exhaustion",
      "extravagance",
      "contamination",
      "depletion",
      "conservation"
    ],
    "answer": 4,
    "explanation": "Enerji 'tasarrufu / korunumu' (conservation) teşvik edilmiştir.",
    "tactic": "Energy conservation = enerji tasarrufu/korunumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-10",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Due to heavy seasonal rainfall, the soil became completely ------- with water, triggering landslides.",
    "options": [
      "hollow",
      "barren",
      "saturated",
      "scarce",
      "arid"
    ],
    "answer": 2,
    "explanation": "Toprak suyla tamamen 'doygun' (saturated with) hale gelmiştir.",
    "tactic": "'Saturated with' = -e doymuş/sırılsıklam.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-11",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The company's rapid expansion into overseas markets brought ------- profits to its major shareholders.",
    "options": [
      "substantial",
      "trivial",
      "meager",
      "scanty",
      "negligible"
    ],
    "answer": 0,
    "explanation": "Yurtdışı pazarlara açılmak hissedarlara 'hatırı sayılır / büyük' (substantial) kârlar getirdi.",
    "tactic": "Büyük kâr ve büyüme 'substantial / considerable' ile anlatılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-12",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Medical researchers have made an astonishing medical ------- that could lead to a permanent cure for diabetes.",
    "options": [
      "drawback",
      "reluctance",
      "breakthrough",
      "setback",
      "obstacle"
    ],
    "answer": 2,
    "explanation": "Şeker hastalığına kalıcı çare olabilecek şaşırtıcı bir 'çığır açıcı buluş' (breakthrough) yapılmıştır.",
    "tactic": "Breakthrough = bilimsel atılım/buluş.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-13",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The rapid melting of Arctic glaciers constitutes a severe ------- to coastal settlements around the globe.",
    "options": [
      "privilege",
      "remedy",
      "relief",
      "threat",
      "advantage"
    ],
    "answer": 3,
    "explanation": "Kutup buzullarının erimesi kıyı yerleşimlerine büyük bir 'tehdit' (threat) oluşturmaktadır.",
    "tactic": "Pose a threat to = -e tehdit oluşturmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-14",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Because the evidence presented in court was largely -------, the judge dismissed the lawsuit immediately.",
    "options": [
      "definitive",
      "unreliable",
      "authentic",
      "indisputable",
      "compelling"
    ],
    "answer": 1,
    "explanation": "Kanıtlar büyük ölçüde 'güvenilmez' (unreliable) olduğu için hakim davayı reddetmiştir.",
    "tactic": "Davanın reddedilmesi kanıtların çürük/güvenilmez olduğunu gösterir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-15",
    "tacticSlug": "vocabulary",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The prime minister's controversial remarks sparked intense ------- among opposition political parties.",
    "options": [
      "controversy",
      "consensus",
      "solidarity",
      "harmony",
      "agreement"
    ],
    "answer": 0,
    "explanation": "Başbakanın tartışmalı sözleri yoğun bir 'tartışma / polemik' (controversy) ateşlemiştir.",
    "tactic": "Spark controversy = tartışma yaratmak/ateşlemek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-16",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Archaeologists have successfully ------- ancient papyrus scrolls that were buried under volcanic ash for centuries.",
    "options": [
      "scattered",
      "abandoned",
      "wiped out",
      "recovered",
      "demolished"
    ],
    "answer": 3,
    "explanation": "Arkeologlar volkanik kül altında kalan antik papirüs rulolarını başarıyla 'kurtarmış/çıkarmıştır' (recovered).",
    "tactic": "Recover = kurtarmak, geri kazanmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-17",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "In times of economic uncertainty, consumers tend to cut down on ------- expenditures such as luxury vacations.",
    "options": [
      "discretionary",
      "compulsory",
      "vital",
      "essential",
      "mandatory"
    ],
    "answer": 0,
    "explanation": "Ekonomik belirsizlikte tüketiciler lüks tatil gibi 'isteğe bağlı / zorunlu olmayan' (discretionary) harcamaları kısarlar.",
    "tactic": "Discretionary spending = keyfi/isteğe bağlı harcama.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-18",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The unexpected volcanic eruption severely ------- air travel across northern Europe for nearly three weeks.",
    "options": [
      "restored",
      "facilitated",
      "promoted",
      "encouraged",
      "disrupted"
    ],
    "answer": 4,
    "explanation": "Beklenmedik volkan patlaması hava trafiğini neredeyse üç hafta boyunca ciddi biçimde 'aksatmıştır' (disrupted).",
    "tactic": "Disrupt = aksatmak, kesintiye uğratmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-19",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The continuous degradation of marine coral reefs has ------- consequences for biodiversity across the globe.",
    "options": [
      "salutary",
      "deleterious",
      "favorable",
      "benign",
      "propitious"
    ],
    "answer": 1,
    "explanation": "Mercan resiflerinin bozulması biyolojik çeşitlilik üzerinde 'zararlı / tahrip edici' (deleterious) sonuçlar doğurur.",
    "tactic": "Deleterious effects/consequences = zararlı sonuçlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-20",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The university committee decided to ------- the candidate's degree after discovering extensive academic plagiarism.",
    "options": [
      "endorse",
      "validate",
      "revoke",
      "confer",
      "bestow"
    ],
    "answer": 2,
    "explanation": "İntihal tespit edilince heyet adayın unvanını 'iptal etmeye / geri almaya' (revoke) karar verdi.",
    "tactic": "Revoke a degree/license = unvanı/lisansı iptal etmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-21",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Despite his immense wealth and fame, the philosopher maintained an extraordinarily ------- lifestyle in a remote cottage.",
    "options": [
      "luxurious",
      "extravagant",
      "opulent",
      "lavish",
      "austere"
    ],
    "answer": 4,
    "explanation": "Muazzam zenginliğe rağmen filozof ücra bir kulübede son derece 'sade / gösterişsiz' (austere) bir yaşam sürdürdü.",
    "tactic": "Austere lifestyle = çileci/sade/mütevazı yaşam.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-22",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The geopolitical tension between the two neighboring states was further ------- by hostile military drills near the border.",
    "options": [
      "alleviated",
      "exacerbated",
      "mitigated",
      "assuaged",
      "mollified"
    ],
    "answer": 1,
    "explanation": "Sınır tatbikatları iki komşu ülke arasındaki gerilimi daha da 'kötüleştirmiştir / tırmandırmıştır' (exacerbated).",
    "tactic": "Exacerbate tension/crisis = gerilimi tırmandırmak/kötüleştirmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-23",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The CEO's charismatic speech was intended to ------- employee anxieties regarding the impending corporate merger.",
    "options": [
      "inflame",
      "instigate",
      "allay",
      "provoke",
      "intensify"
    ],
    "answer": 2,
    "explanation": "CEO'nun konuşması çalışanların şirket birleşmesine dair endişelerini 'yatıştırmayı' (allay) amaçlıyordu.",
    "tactic": "Allay fears/anxieties = korkuları/kaygıları gidermek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-24",
    "tacticSlug": "vocabulary",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Astronomers detected a faint cosmic signal that appears to be ------- from a supermassive black hole in a distant galaxy.",
    "options": [
      "vanishing",
      "deteriorating",
      "emanating",
      "receding",
      "withering"
    ],
    "answer": 2,
    "explanation": "Gökbilimciler uzak bir galaksideki kara delikten 'yayılan / çıkan' (emanating from) zayıf bir sinyal tespit ettiler.",
    "tactic": "Emanate from = -den yayılmak/kaynaklanmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-25",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The rapid spread of misinformation on social media has severely ------- public trust in democratic institutions.",
    "options": [
      "buttressed",
      "fortified",
      "bolstered",
      "undermined",
      "reinforced"
    ],
    "answer": 3,
    "explanation": "Sosyal medyadaki dezenformasyon demokratik kurumlara duyulan güveni ciddi şekilde 'sarsmıştır / baltalamıştır' (undermined).",
    "tactic": "Undermine trust/authority = güveni baltalamak/sarsmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-26",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The treaty contains an explicit clause designed to ------- future border disputes between the signing parties.",
    "options": [
      "precipitate",
      "foster",
      "stimulate",
      "preclude",
      "ignite"
    ],
    "answer": 3,
    "explanation": "Antlaşma imzacı taraflar arasındaki gelecekteki sınır anlaşmazlıklarını 'önceden engellemek' (preclude) için tasarlandı.",
    "tactic": "Preclude = önlemek, imkansız kılmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-27",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "In retrospect, the critic noted that the artist's early paintings were remarkably ------- of his later abstract masterpieces.",
    "options": [
      "destitute",
      "oblivious",
      "devoid",
      "premonitory",
      "deprived"
    ],
    "answer": 3,
    "explanation": "Eleştirmen sanatçının ilk resimlerinin sonraki soyut başyapıtlarının 'ön habercisi / ön belirtisi' (premonitory / harbinger) olduğunu belirtti.",
    "tactic": "Premonitory = önceden haber veren.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-28",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The newly discovered deep-sea trench ecosystem is composed of organisms that possess ------- adaptations to survive extreme cold.",
    "options": [
      "ingenious",
      "futile",
      "ineffectual",
      "clumsy",
      "obsolete"
    ],
    "answer": 0,
    "explanation": "Yeni bulunan ekosistem aşırı soğukta hayatta kalmak için 'dahiyane / son derece zekice' (ingenious) adaptasyonlara sahiptir.",
    "tactic": "Ingenious adaptation = ustalıklı/dahice uyum sağlama.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-29",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The author's prose is characterized by a ------- brevity that conveys profound philosophical insights in very few words.",
    "options": [
      "verbose",
      "redundant",
      "rambling",
      "laconic",
      "loquacious"
    ],
    "answer": 3,
    "explanation": "Yazarın üslubu çok az sözcükle derin düşünceler aktaran 'özlü / az ve öz' (laconic / concise) bir kısalıkla karakterizedir.",
    "tactic": "Laconic brevity = az ve öz anlatım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-30",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The government's heavy subsidies to coal industries were criticized as an ------- policy that hinders the clean energy transition.",
    "options": [
      "visionary",
      "revolutionary",
      "cutting-edge",
      "progressive",
      "anachronistic"
    ],
    "answer": 4,
    "explanation": "Kömür sanayisine verilen sübvansiyonlar temiz enerjiye engel olan 'çağdışı / modası geçmiş' (anachronistic) bir politika olarak eleştirildi.",
    "tactic": "Anachronistic = çağa uymayan/anakronik.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-31",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The sudden economic recession proved to be a ------- catastrophe that wiped out the savings of millions of families.",
    "options": [
      "profound",
      "transient",
      "fleeting",
      "superficial",
      "trivial"
    ],
    "answer": 0,
    "explanation": "Ani ekonomik kriz milyonlarca ailenin birikimlerini silip süpüren 'derin' (profound) bir felaket oldu.",
    "tactic": "Profound catastrophe = derin felaket.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-32",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Before approving the international trade merger, regulatory authorities demanded ------- documentation from both corporations.",
    "options": [
      "exhaustive",
      "superficial",
      "cursory",
      "perfunctory",
      "sketchy"
    ],
    "answer": 0,
    "explanation": "Düzenleyici kurumlar birleşmeyi onaylamadan önce her iki şirketten de 'ayrıntılı / eksiksiz' (exhaustive) belge talep etti.",
    "tactic": "Exhaustive documentation = kapsamlı/eksiksiz evrak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-33",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The historic peace treaty served to ------- centuries of animosity between the two warring dynasties.",
    "options": [
      "prolong",
      "perpetuate",
      "sustain",
      "extinguish",
      "foster"
    ],
    "answer": 3,
    "explanation": "Tarihi barış antlaşması iki hanedan arasındaki asırlık düşmanlığı 'sona erdirmeye / söndürmeye' (extinguish) hizmet etti.",
    "tactic": "Extinguish animosity = husumeti bitirmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-34",
    "tacticSlug": "vocabulary",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The researcher's claim that vaccines cause cognitive impairment was completely ------- by independent medical trials.",
    "options": [
      "authenticated",
      "substantiated",
      "refuted",
      "validated",
      "corroborated"
    ],
    "answer": 2,
    "explanation": "Aşıların bilişsel bozulmaya yol açtığı iddiası bağımsız tıbbi deneylerle tamamen 'çürütüldü' (refuted).",
    "tactic": "Refute a claim = iddiayı çürütmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-35",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The novel provides an extraordinarily ------- portrayal of rural poverty during the Great Depression.",
    "options": [
      "ambiguous",
      "obscure",
      "vague",
      "hazy",
      "vivid"
    ],
    "answer": 4,
    "explanation": "Roman Büyük Buhran sırasında kırsal yoksulluğun olağanüstü derecede 'canlı / net' (vivid) bir tasvirini sunar.",
    "tactic": "Vivid portrayal = canlı/etkileyici tasvir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-36",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Despite facing immense political pressure, the investigative journalist refused to ------- the identity of her whistleblower source.",
    "options": [
      "camouflage",
      "suppress",
      "disclose",
      "withhold",
      "conceal"
    ],
    "answer": 2,
    "explanation": "Büyük baskıya rağmen araştırmacı gazeteci gizli kaynağının kimliğini 'açıklamayı / ifşa etmeyi' (disclose) reddetti.",
    "tactic": "Disclose identity/information = bilgiyi açığa vurmak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-37",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Marine conservationists have warned that overfishing in coastal reefs will inevitably ------- local fish stocks.",
    "options": [
      "enhance",
      "recharge",
      "augment",
      "replenish",
      "deplete"
    ],
    "answer": 4,
    "explanation": "Çevreciler aşırı avlanmanın yerel balık stoklarını kaçınılmaz olarak 'tüketeceği' (deplete) uyarısında bulundu.",
    "tactic": "Deplete stocks/resources = kaynakları tüketmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-38",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The sudden surge in consumer demand caused a severe ------- of semiconductor microchips worldwide.",
    "options": [
      "shortage",
      "plethora",
      "surplus",
      "abundance",
      "excess"
    ],
    "answer": 0,
    "explanation": "Tüketici talebindeki patlama dünya çapında ciddi bir mikroçip 'kıtlığına' (shortage / deficit) neden oldu.",
    "tactic": "Severe shortage of = -in ciddi kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-39",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The archaeological expedition discovered an intact tomb ------- with ancient jewelry and gold artifacts.",
    "options": [
      "stripped",
      "deprived",
      "devoid",
      "adorned",
      "destitute"
    ],
    "answer": 3,
    "explanation": "Arkeoloji heyeti antik mücevherler ve altın eserlerle 'süslenmiş / donatılmış' (adorned with) el değmemiş bir mezar buldu.",
    "tactic": "Adorned with = -ile süslenmiş.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-40",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The mayor acknowledged that solving the housing affordability crisis would require an ------- collaborative approach.",
    "options": [
      "customary",
      "traditional",
      "routine",
      "unprecedented",
      "conventional"
    ],
    "answer": 3,
    "explanation": "Belediye başkanı konut krizini çözmenin 'tarihte görülmemiş / benzeri olmayan' (unprecedented) bir işbirliği gerektireceğini kabul etti.",
    "tactic": "Unprecedented = emsalsiz/daha önce görülmemiş.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-41",
    "tacticSlug": "vocabulary",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The university's ethics committee determined that the experimental clinical trials complied ------- with international safety protocols.",
    "options": [
      "strictly",
      "haphazardly",
      "loosely",
      "negligently",
      "carelessly"
    ],
    "answer": 0,
    "explanation": "Etik kurulu deneylerin uluslararası güvenlik protokollerine 'kesinlikle / harfiyen' (strictly) uyduğunu belirledi.",
    "tactic": "Comply strictly with = -e harfiyen uymak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-42",
    "tacticSlug": "vocabulary",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The architect designed the modern office building with large glass atriums to maximize ------- natural sunlight.",
    "options": [
      "inadequate",
      "deficient",
      "sparse",
      "abundant",
      "scarce"
    ],
    "answer": 3,
    "explanation": "Mimar bol miktardaki doğal güneş ışığını en üst düzeye çıkarmak için binayı cam avlularla tasarladı.",
    "tactic": "Abundant sunlight = bol gün ışığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-43",
    "tacticSlug": "vocabulary",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The diplomatic peace talks collapsed when both factions demonstrated a stubborn ------- to make territorial compromises.",
    "options": [
      "willingness",
      "eagerness",
      "readiness",
      "enthusiasm",
      "reluctance"
    ],
    "answer": 4,
    "explanation": "İki taraf da toprak tavizi vermede inatçı bir 'isteksizlik' (reluctance) gösterince barış görüşmeleri çöktü.",
    "tactic": "Reluctance to compromise = taviz vermede isteksizlik.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-44",
    "tacticSlug": "vocabulary",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The introduction of mandatory seatbelt laws resulted in a ------- reduction in motor vehicle fatalities.",
    "options": [
      "drastic",
      "trivial",
      "meager",
      "negligible",
      "nominal"
    ],
    "answer": 0,
    "explanation": "Zorunlu emniyet kemeri yasaları araç ölümlerinde 'çok ciddi / çarpıcı' (drastic) bir düşüş sağladı.",
    "tactic": "Drastic reduction = dramatik/şiddetli düşüş.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-45",
    "tacticSlug": "vocabulary",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The international aid foundation provided emergency relief supplies to ------- the immediate suffering of earthquake survivors.",
    "options": [
      "worsen",
      "aggravate",
      "intensify",
      "compound",
      "alleviate"
    ],
    "answer": 4,
    "explanation": "Uluslararası yardım vakfı depremzedelerin acısını 'hafifletmek' (alleviate) için acil yardım malzemeleri sağladı.",
    "tactic": "Alleviate suffering/pain = acıyı hafifletmek.",
    "isImportant": false
  },
  {
    "id": "tq-extra-vocab-46",
    "tacticSlug": "vocabulary",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The research team concluded that exposure to artificial blue light before sleep significantly ------- melatonin secretion.",
    "options": [
      "promotes",
      "fosters",
      "inhibits",
      "induces",
      "stimulates"
    ],
    "answer": 2,
    "explanation": "Araştırma ekibi yatmadan önce mavi ışığa maruz kalmanın melatonin salgılanmasını önemli ölçüde 'baskıladığı' (inhibits) sonucuna vardı.",
    "tactic": "Inhibit secretion/growth = salgıyı/büyümeyi baskılamak.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-1",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "She always ------- her homework immediately after returning from school in the afternoon.",
    "options": [
      "do",
      "does",
      "did",
      "is doing",
      "has done"
    ],
    "answer": 1,
    "explanation": "Simple Present rutin eylem: He/she/it için fiil -s takısı alır ('does').",
    "tactic": "Always sıklık zarfı rutin geniş zamanı gösterir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-2",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Look at those children over there; they ------- a beautiful sandcastle on the beach right now.",
    "options": [
      "are building",
      "had built",
      "have built",
      "built",
      "build"
    ],
    "answer": 0,
    "explanation": "Right now konuşma anındaki eylemi belirtir (am/is/are + Ving).",
    "tactic": "Right now / at the moment şimdiki zamanı gerektirir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-3",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Yesterday afternoon, we ------- our grandparents in the countryside and helped them in the garden.",
    "options": [
      "visit",
      "will visit",
      "visited",
      "are visiting",
      "have visited"
    ],
    "answer": 2,
    "explanation": "Yesterday geçmiş zaman zarfıdır; Simple Past (V2) 'visited' gerekir.",
    "tactic": "Dün bitmiş eylemlerde Present Perfect kullanılmaz; V2 kullanılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-4",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "While my sister ------- her book in the living room, the telephone suddenly rang.",
    "options": [
      "read",
      "reads",
      "is reading",
      "was reading",
      "has read"
    ],
    "answer": 3,
    "explanation": "While geçmişte devam eden süreci (Past Continuous), ana cümle anlık kesintiyi (rang) anlatır.",
    "tactic": "While + was/were Ving, Simple Past (kesinti).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-5",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "I ------- in this historic neighborhood since my family relocated from Istanbul ten years ago.",
    "options": [
      "have lived",
      "was living",
      "live",
      "lived",
      "am living"
    ],
    "answer": 0,
    "explanation": "Since + V2 (relocated) kuralına ana cümlede have/has V3 ('have lived') eşlik eder.",
    "tactic": "Since başlangıç noktası verir; ana cümle Present Perfect ister.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-6",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "By the time the ambulance arrived at the scene of the accident, the injured driver ------- to the hospital.",
    "options": [
      "has already been taken",
      "was already taking",
      "had already taken",
      "is already taken",
      "had already been taken"
    ],
    "answer": 4,
    "explanation": "By the time + V2 yapısına diğer tarafta Past Perfect pasif ('had already been taken') eşlik eder.",
    "tactic": "By the time geçmişte önce olanı Past Perfect yapar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-7",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "If you ------- hard throughout the semester, you will easily pass the national entrance examination.",
    "options": [
      "had studied",
      "study",
      "studied",
      "were studying",
      "would study"
    ],
    "answer": 1,
    "explanation": "Type 1 koşul: If + Simple Present (study) -> Future (will pass).",
    "tactic": "Gelecek zamanlı ana cümleye if içinde Simple Present eşlik eder.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-8",
    "tacticSlug": "grammar",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "If I had known that the flight was cancelled, I ------- to the airport at five in the morning.",
    "options": [
      "have not driven",
      "would not drive",
      "will not drive",
      "do not drive",
      "would not have driven"
    ],
    "answer": 4,
    "explanation": "Type 3 geçmiş koşul: If + had known -> would have V3 ('would not have driven').",
    "tactic": "Geçmişte gerçekleşmemiş pişmanlık Type 3 gerektirir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-9",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The new high-speed rail line ------- by the transportation ministry before the end of this year.",
    "options": [
      "completed",
      "has completed",
      "was completing",
      "will be completed",
      "is completed"
    ],
    "answer": 3,
    "explanation": "Gelecekte tamamlanacak demiryolu cansız öznedir; Future Passive ('will be completed') gerekir.",
    "tactic": "Nesne konumundaki özne pasif yapı ister.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-10",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The young scholar is widely believed ------- the lost manuscript during his archival research in Rome.",
    "options": [
      "discovering",
      "to have discovered",
      "discovered",
      "having discovered",
      "to discover"
    ],
    "answer": 1,
    "explanation": "Geçmişteki keşif inanıştan önce gerçekleştiği için perfect infinitive ('to have discovered') kullanılır.",
    "tactic": "Is believed + to have V3 (önceki eylem).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-11",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "You ------- all those heavy reference books to class; the professor uploaded digital copies online!",
    "options": [
      "could not bring",
      "should bring",
      "might not bring",
      "must not bring",
      "needn't have brought"
    ],
    "answer": 4,
    "explanation": "Gerek olmadığı halde geçmişte yapılan eylemler için 'needn't have V3' kullanılır.",
    "tactic": "Needn't have V3 = Gerek yoktu ama yaptın!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-12",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The laboratory assistant ------- the chemical samples before leaving the research center yesterday.",
    "options": [
      "must lock",
      "can lock",
      "should lock",
      "must have locked",
      "might lock"
    ],
    "answer": 3,
    "explanation": "Dün akşam gerçekleştiğinden kesin olan geçmiş çıkarım 'must have V3' (must have locked) ile ifade edilir.",
    "tactic": "Geçmiş kesin çıkarım = must have V3.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-13",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The scientific journal ------- published the groundbreaking genetics paper is recognized globally.",
    "options": [
      "where",
      "who",
      "which",
      "whose",
      "whom"
    ],
    "answer": 2,
    "explanation": "Dergi cansız öznedir ve niteleme özne konumundadır; 'which' veya 'that' kullanılır.",
    "tactic": "Cansız nesne/özne nitelemesinde which kullanılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-14",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The distinguished professor, with ------- I collaborated during my doctoral studies, received a Nobel Prize.",
    "options": [
      "who",
      "whom",
      "that",
      "whose",
      "which"
    ],
    "answer": 1,
    "explanation": "Edattan sonra (with -------) insanı nitelemek için yalnızca 'whom' kullanılabilir.",
    "tactic": "Preposition + whom (insan için edat arkası kuralı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-15",
    "tacticSlug": "grammar",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "The historic palace, ------- majestic marble towers overlook the river, attracts millions of tourists.",
    "options": [
      "where",
      "which",
      "whom",
      "whose",
      "that"
    ],
    "answer": 3,
    "explanation": "Saray ile mermer kuleleri arasındaki aitlik bağı 'whose' zamirini zorunlu kılar.",
    "tactic": "İsim + whose + isim (sahiplik/iyelik bağı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-16",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "She did not explain to the committee ------- she had decided to decline the prestigious fellowship offer.",
    "options": [
      "that",
      "which",
      "what",
      "why",
      "whom"
    ],
    "answer": 3,
    "explanation": "Sebep bildiren isim cümleciği: 'why she had decided...' (neden reddettiğini).",
    "tactic": "Noun clause: explain + why/how/whether.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-17",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the heavy rain flooded the stadium pitch, the championship football match had to be postponed.",
    "options": [
      "Although",
      "Because",
      "Unless",
      "Whereas",
      "Despite"
    ],
    "answer": 1,
    "explanation": "Maçın ertelenmesi zemin su basmasının doğrudan sonucudur; sebep bağlacı 'Because' gereklidir.",
    "tactic": "Neden-sonuç bağı: Because + cümle.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-18",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- the economic sanctions imposed on the country, foreign investments dropped significantly.",
    "options": [
      "Due to",
      "Even though",
      "Although",
      "Whereas",
      "In spite of"
    ],
    "answer": 0,
    "explanation": "İsim öbeği (economic sanctions) önünde neden bildiren edat 'Due to' / 'Owing to' kullanılır.",
    "tactic": "Due to + İsim öbeği (sebep).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-19",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "------- had the keynote speaker stepped onto the stage when the entire audience erupted in applause.",
    "options": [
      "Hardly",
      "Scarcely",
      "No sooner",
      "Not only",
      "Seldom"
    ],
    "answer": 1,
    "explanation": "'Scarcely ... when' kalıbı devrik zaman yapısıdır (-er -mez).",
    "tactic": "Scarcely had + özne + V3 ... WHEN!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-20",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Under no circumstances ------- the secret security access codes be shared with unauthorized personnel.",
    "options": [
      "have",
      "must have",
      "ought",
      "would have",
      "should"
    ],
    "answer": 4,
    "explanation": "'Under no circumstances' devrik başlar; yardımcı fiil 'should' özneden önce gelir.",
    "tactic": "Under no circumstances + modal + özne + V1.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-21",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Not only ------- the prestigious international competition, but she also set a new world record.",
    "options": [
      "she won",
      "has she won",
      "was she winning",
      "did she win",
      "she had won"
    ],
    "answer": 3,
    "explanation": "'Not only' cümle başındaysa devrik yapı ('did she win') zorunludur.",
    "tactic": "Not only + devrik yardımcı fiil + özne!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-22",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The suspect denied ------- anywhere near the scene of the burglary on the night of the crime.",
    "options": [
      "been",
      "to be",
      "being",
      "be",
      "to have been"
    ],
    "answer": 2,
    "explanation": "'Deny' fiilinden sonra gerund (V-ing) 'being' gelir.",
    "tactic": "Deny + V-ing (inkar etmek).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-23",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "We are genuinely looking forward to ------- you at the annual biomedical engineering symposium next week.",
    "options": [
      "be met",
      "meeting",
      "have met",
      "to meet",
      "meet"
    ],
    "answer": 1,
    "explanation": "'Look forward to' kalıbındaki 'to' bir edattır; arkasından gerund ('meeting') gelir.",
    "tactic": "Look forward to + V-ing (dört gözle beklemek).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-24",
    "tacticSlug": "grammar",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "The board of directors decided ------- the corporate restructuring plan until the next fiscal quarter.",
    "options": [
      "postpone",
      "postponed",
      "to postpone",
      "postponing",
      "having postponed"
    ],
    "answer": 2,
    "explanation": "'Decide' fiilinden sonra mastar ('to postpone') kullanılır.",
    "tactic": "Decide + to V1 (karar vermek).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-25",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- from the ancient volcanic ash, the petrified trees resemble solid marble statues.",
    "options": [
      "To preserve",
      "Having been preserved",
      "Having preserved",
      "Preserving",
      "Preserve"
    ],
    "answer": 1,
    "explanation": "Ağaçlar kendilerini korumamış, korunmuştur; pasif geçmiş kısaltma 'Having been preserved' gerekir.",
    "tactic": "Participle reduction: Pasif geçmiş = Having been V3.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-26",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "------- the laboratory experiments thoroughly, the biochemist presented her findings to the faculty.",
    "options": [
      "To complete",
      "Having completed",
      "Completed",
      "Complete",
      "Being completed"
    ],
    "answer": 1,
    "explanation": "Önce deneyleri tamamlayıp sonra sunduğu için öncelik bildiren aktif kısaltma 'Having completed' tam uyar.",
    "tactic": "Participle reduction: Aktif öncelik = Having V3.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-27",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The company had its legal contracts ------- by a prestigious commercial law firm in London.",
    "options": [
      "review",
      "reviewed",
      "to review",
      "reviewing",
      "reviews"
    ],
    "answer": 1,
    "explanation": "'Have something done' ettirgen kalıbı: nesneden sonra fiilin 3. hali ('reviewed') gelir.",
    "tactic": "Causative: Have + nesne + V3 (yaptırmak).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-28",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The strict laboratory supervisor made the interns ------- all test tubes with distilled water twice.",
    "options": [
      "washes",
      "washing",
      "to wash",
      "washed",
      "wash"
    ],
    "answer": 4,
    "explanation": "'Make someone do something' ettirgeninde fiil yalın ('wash') kullanılır.",
    "tactic": "Causative: Make + kişi + V1 yalın!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-29",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Seldom ------- such breathtaking architectural harmony in a modern metropolitan skyscraper.",
    "options": [
      "one is encountering",
      "one has encountered",
      "does one encounter",
      "one encounters",
      "one encountered"
    ],
    "answer": 2,
    "explanation": "'Seldom' sıklık zarfı başa geldiğinde cümle devrik ('does one encounter') kurulur.",
    "tactic": "Seldom + do/does/did + özne + V1.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-30",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Hardly had the scientific team published their controversial paper ------- other researchers attempted to replicate it.",
    "options": [
      "that",
      "before",
      "when",
      "than",
      "as"
    ],
    "answer": 2,
    "explanation": "'Hardly had ... when' eşleşmesi değişmez kuraldır.",
    "tactic": "Hardly ... WHEN, No sooner ... THAN!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-31",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The manager suggested that the executive committee ------- the safety regulations immediately.",
    "options": [
      "would revise",
      "to revise",
      "revises",
      "revised",
      "revise"
    ],
    "answer": 4,
    "explanation": "'Suggest that' yapısından sonra subjunctive (yalın fiil 'revise') kullanılır.",
    "tactic": "Subjunctive: suggest that + özne + V1 yalın.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-32",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "It is essential that every clinical participant ------- informed written consent prior to the trial.",
    "options": [
      "provide",
      "provides",
      "must provide",
      "providing",
      "provided"
    ],
    "answer": 0,
    "explanation": "'It is essential that' arkasından subjunctive yalın fiil ('provide') gelir.",
    "tactic": "Subjunctive: It is essential that + özne + V1.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-33",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "The young girl speaks French so fluently as though she ------- in Paris for her entire childhood.",
    "options": [
      "lives",
      "is living",
      "has lived",
      "will live",
      "had lived"
    ],
    "answer": 4,
    "explanation": "'As though' gerçek dışı geçmiş durumu anlatırken Past Perfect ('had lived') alır.",
    "tactic": "As if / As though gerçeğe aykırıysa bir derece past yapılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-34",
    "tacticSlug": "grammar",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "I would rather you ------- all the confidential research data to the cloud server yesterday.",
    "options": [
      "would not upload",
      "do not upload",
      "did not upload",
      "have not uploaded",
      "had not uploaded"
    ],
    "answer": 4,
    "explanation": "'Would rather + özne + Past Perfect' geçmişe dönük pişmanlık/tercih anlatır.",
    "tactic": "Would rather + özne + had V3 (dün için).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-35",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "------- severe the winter blizzard became, the dedicated rescue workers refused to abandon the search.",
    "options": [
      "However",
      "Whenever",
      "Wherever",
      "Whichever",
      "Whatever"
    ],
    "answer": 0,
    "explanation": "'However + sıfat + özne + fiil' (ne kadar şiddetli olursa olsun) zıtlık yapısıdır.",
    "tactic": "However + Sıfat/Zarf = No matter how!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-36",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "You may borrow the specialized laboratory microscope ------- you promise to clean the optical lenses carefully.",
    "options": [
      "provided that",
      "lest",
      "although",
      "in case",
      "unless"
    ],
    "answer": 0,
    "explanation": "'Provided that' (şartıyla) koşul bağlacıdır; mikroskobu temizleme şartıyla izin verilir.",
    "tactic": "Provided that = As long as (koşuluyla).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-37",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "She packed warm waterproof clothing in her backpack ------- the weather in the mountains deteriorated rapidly.",
    "options": [
      "provided that",
      "in case",
      "unless",
      "so that",
      "in order that"
    ],
    "answer": 1,
    "explanation": "Hava kötüleşirse diye 'önlem' amaçlı mont almıştır; 'in case' (ihtimaline karşı) tam uyar.",
    "tactic": "In case = Önlem bağlacı (durumunda/ihtimaline karşı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-38",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The government invested heavily in digital fiber-optic cables ------- citizens in rural towns could access the internet.",
    "options": [
      "lest",
      "unless",
      "in case",
      "provided that",
      "so that"
    ],
    "answer": 4,
    "explanation": "Kırsaldaki vatandaşlar internete erişebilsin diye 'amaç' bildirir; 'so that' kullanılır.",
    "tactic": "So that + modal (can/could) = Amaç.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-39",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "He walked through the sleeping ward on tiptoe ------- he should disturb the critically ill patients.",
    "options": [
      "so that",
      "lest",
      "unless",
      "in order that",
      "in case"
    ],
    "answer": 1,
    "explanation": "'Lest ... should' (korkusuyla / olmasın diye) olumsuz amaç bağlacıdır.",
    "tactic": "Lest + özne + (should) V1 = Olmasın diye.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-40",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "The new antibiotic formulation proved to be ------- more effective than traditional penicillin treatments.",
    "options": [
      "so",
      "substantially",
      "too",
      "very",
      "more"
    ],
    "answer": 1,
    "explanation": "Karşılaştırma sıfatlarının (more effective) derecesini artırmak için 'substantially / far / much' kullanılır.",
    "tactic": "Comparative niteleyicileri: much, far, substantially, significantly.",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-41",
    "tacticSlug": "grammar",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "This is by far the ------- complex mathematical theorem ever proven by theoretical topologists.",
    "options": [
      "much",
      "more",
      "most",
      "very",
      "too"
    ],
    "answer": 2,
    "explanation": "'By far the + Superlative' (açık ara en...) kalıbı 'the most complex' gerektirir.",
    "tactic": "By far the most = Açık ara en...",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-42",
    "tacticSlug": "grammar",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The more carbon dioxide humanity pumps into the atmosphere, ------- global surface temperatures will rise.",
    "options": [
      "the faster",
      "faster",
      "more fast",
      "the fastest",
      "fastest"
    ],
    "answer": 0,
    "explanation": "'The more ..., the more ...' orantı kalıbı: 'the faster' doğru biçimdir.",
    "tactic": "The + comparative ..., the + comparative ...",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-43",
    "tacticSlug": "grammar",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Neither the chief medical officer nor the attending physicians ------- able to determine the cause of the fever.",
    "options": [
      "was",
      "be",
      "were",
      "is",
      "are"
    ],
    "answer": 2,
    "explanation": "'Neither ... nor' yapısında fiil en yakın özneye ('physicians' çoğul) göre çekimlenir ('were').",
    "tactic": "Neither ... nor kuralı: Fiil nor'dan sonraki özneye uyar!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-44",
    "tacticSlug": "grammar",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Every single candidate who applies for the managerial position ------- required to undergo a security background check.",
    "options": [
      "have been",
      "be",
      "are",
      "were",
      "is"
    ],
    "answer": 4,
    "explanation": "'Every single candidate' tekildir; yüklem tekil ('is') olmalıdır.",
    "tactic": "Every / Each daima tekil fiil alır!",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-45",
    "tacticSlug": "grammar",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "A large number of marine researchers ------- currently investigating the catastrophic bleaching of coral reefs.",
    "options": [
      "was",
      "are",
      "be",
      "is",
      "has been"
    ],
    "answer": 1,
    "explanation": "'A number of + çoğul isim' çoğul fiil ('are investigating') alır.",
    "tactic": "A number of = Çoğul fiil! (The number of = Tekil fiil).",
    "isImportant": false
  },
  {
    "id": "tq-extra-grammar-46",
    "tacticSlug": "grammar",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "The number of endangered bird species in the protected wetland sanctuary ------- steadily over the past decade.",
    "options": [
      "are increasing",
      "have increased",
      "were increasing",
      "has increased",
      "increase"
    ],
    "answer": 3,
    "explanation": "'The number of' yapısı sayı miktarını belirttiğinden tekil fiil ('has increased') alır.",
    "tactic": "The number of = Tekil fiil!",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-1",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "negligibly",
      "superficially",
      "dramatically",
      "barely",
      "scarcely"
    ],
    "answer": 2,
    "explanation": "Maliyetlerin düşüşü dramatik boyuttadır.",
    "tactic": "Zarf nitelemesi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-2",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "unless",
      "instead of",
      "despite",
      "in order to",
      "in case of"
    ],
    "answer": 3,
    "explanation": "Teşviklerin amacı kurulumu artırmaktır.",
    "tactic": "In order to + V1 amaç.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-3",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "unless",
      "although",
      "whereas",
      "in spite of",
      "because"
    ],
    "answer": 4,
    "explanation": "Geceleri üretim durduğu için depolama zordur.",
    "tactic": "Sebep bağlacı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-4",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "ensured",
      "ensure",
      "to ensure",
      "ensuring",
      "for ensuring"
    ],
    "answer": 2,
    "explanation": "Amaç: şebeke istikrarını sağlamak için (to ensure).",
    "tactic": "Mastar amaç bildirir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-5",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "from",
      "through",
      "at",
      "on",
      "by"
    ],
    "answer": 4,
    "explanation": "Gelecek bir tarihe kadar: by 2040.",
    "tactic": "By + Gelecek yıl = -e kadar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-6",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "avoids",
      "cancels",
      "prevents",
      "eliminates",
      "triggers"
    ],
    "answer": 4,
    "explanation": "CO2 emişi derin kimyasal değişiklikleri tetikler.",
    "tactic": "Fiil bağlamı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-7",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "to lower",
      "lowers",
      "lowered",
      "lowering",
      "having lowered"
    ],
    "answer": 3,
    "explanation": "Virgül + Ving: pH seviyesini düşürerek.",
    "tactic": "Participle reduction.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-8",
    "tacticSlug": "cloze-test",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "at",
      "with",
      "to",
      "from",
      "for"
    ],
    "answer": 2,
    "explanation": "Pose a threat to: -e tehdit oluşturmak.",
    "tactic": "Preposition collocations.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-9",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "drastically",
      "moderately",
      "partially",
      "marginally",
      "mildly"
    ],
    "answer": 0,
    "explanation": "Kabuksuz canlıların hayatta kalması dramatik düşer.",
    "tactic": "Zarf şiddeti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-10",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "aggravate",
      "avert",
      "prolong",
      "worsen",
      "provoke"
    ],
    "answer": 1,
    "explanation": "Krizi önlemek/savuşturmak için (avert).",
    "tactic": "Kriz engelleme fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-11",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "verified",
      "supported",
      "confirmed",
      "overturned",
      "maintained"
    ],
    "answer": 3,
    "explanation": "Yeni bulgular eski dogmayı tamamen yıktı/altüst etti.",
    "tactic": "Zıtlık fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-12",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "at",
      "on",
      "with",
      "for",
      "in"
    ],
    "answer": 4,
    "explanation": "In response to: -e cevaben/karşılık olarak.",
    "tactic": "Edat öbeği.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-13",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "lest",
      "unless",
      "in order to",
      "despite",
      "although"
    ],
    "answer": 2,
    "explanation": "Kayıp kapasiteyi telafi etmek amacıyla (in order to).",
    "tactic": "Amaç mastarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-14",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "beyond",
      "against",
      "by",
      "under",
      "without"
    ],
    "answer": 2,
    "explanation": "Terapiler yoluyla/vasıtasıyla: by intensive exercises.",
    "tactic": "Vasıta edatı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-15",
    "tacticSlug": "cloze-test",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "than",
      "so",
      "as",
      "like",
      "from"
    ],
    "answer": 0,
    "explanation": "Comparative sonrası: more effective THAN.",
    "tactic": "Karşılaştırma kalıbı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-16",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "dramatically",
      "negligibly",
      "scarcely",
      "superficially",
      "barely"
    ],
    "answer": 0,
    "explanation": "Maliyetlerin düşüşü dramatik boyuttadır.",
    "tactic": "Zarf nitelemesi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-17",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "in case of",
      "instead of",
      "in order to",
      "despite",
      "unless"
    ],
    "answer": 2,
    "explanation": "Teşviklerin amacı kurulumu artırmaktır.",
    "tactic": "In order to + V1 amaç.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-18",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "whereas",
      "in spite of",
      "because",
      "unless",
      "although"
    ],
    "answer": 2,
    "explanation": "Geceleri üretim durduğu için depolama zordur.",
    "tactic": "Sebep bağlacı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-19",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "ensure",
      "for ensuring",
      "ensuring",
      "to ensure",
      "ensured"
    ],
    "answer": 3,
    "explanation": "Amaç: şebeke istikrarını sağlamak için (to ensure).",
    "tactic": "Mastar amaç bildirir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-20",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "from",
      "on",
      "at",
      "by",
      "through"
    ],
    "answer": 3,
    "explanation": "Gelecek bir tarihe kadar: by 2040.",
    "tactic": "By + Gelecek yıl = -e kadar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-21",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "triggers",
      "prevents",
      "eliminates",
      "cancels",
      "avoids"
    ],
    "answer": 0,
    "explanation": "CO2 emişi derin kimyasal değişiklikleri tetikler.",
    "tactic": "Fiil bağlamı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-22",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "lowers",
      "lowering",
      "lowered",
      "to lower",
      "having lowered"
    ],
    "answer": 1,
    "explanation": "Virgül + Ving: pH seviyesini düşürerek.",
    "tactic": "Participle reduction.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-23",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "for",
      "to",
      "at",
      "from",
      "with"
    ],
    "answer": 1,
    "explanation": "Pose a threat to: -e tehdit oluşturmak.",
    "tactic": "Preposition collocations.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-24",
    "tacticSlug": "cloze-test",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "moderately",
      "partially",
      "mildly",
      "drastically",
      "marginally"
    ],
    "answer": 3,
    "explanation": "Kabuksuz canlıların hayatta kalması dramatik düşer.",
    "tactic": "Zarf şiddeti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-25",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "worsen",
      "prolong",
      "provoke",
      "aggravate",
      "avert"
    ],
    "answer": 4,
    "explanation": "Krizi önlemek/savuşturmak için (avert).",
    "tactic": "Kriz engelleme fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-26",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "overturned",
      "verified",
      "confirmed",
      "supported",
      "maintained"
    ],
    "answer": 0,
    "explanation": "Yeni bulgular eski dogmayı tamamen yıktı/altüst etti.",
    "tactic": "Zıtlık fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-27",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "at",
      "with",
      "in",
      "on",
      "for"
    ],
    "answer": 2,
    "explanation": "In response to: -e cevaben/karşılık olarak.",
    "tactic": "Edat öbeği.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-28",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "lest",
      "unless",
      "in order to",
      "although",
      "despite"
    ],
    "answer": 2,
    "explanation": "Kayıp kapasiteyi telafi etmek amacıyla (in order to).",
    "tactic": "Amaç mastarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-29",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "beyond",
      "against",
      "without",
      "under",
      "by"
    ],
    "answer": 4,
    "explanation": "Terapiler yoluyla/vasıtasıyla: by intensive exercises.",
    "tactic": "Vasıta edatı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-30",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "so",
      "from",
      "as",
      "like",
      "than"
    ],
    "answer": 4,
    "explanation": "Comparative sonrası: more effective THAN.",
    "tactic": "Karşılaştırma kalıbı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-31",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "negligibly",
      "superficially",
      "barely",
      "scarcely",
      "dramatically"
    ],
    "answer": 4,
    "explanation": "Maliyetlerin düşüşü dramatik boyuttadır.",
    "tactic": "Zarf nitelemesi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-32",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "despite",
      "in order to",
      "instead of",
      "in case of",
      "unless"
    ],
    "answer": 1,
    "explanation": "Teşviklerin amacı kurulumu artırmaktır.",
    "tactic": "In order to + V1 amaç.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-33",
    "tacticSlug": "cloze-test",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "in spite of",
      "unless",
      "although",
      "whereas",
      "because"
    ],
    "answer": 4,
    "explanation": "Geceleri üretim durduğu için depolama zordur.",
    "tactic": "Sebep bağlacı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-34",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "to ensure",
      "ensured",
      "for ensuring",
      "ensuring",
      "ensure"
    ],
    "answer": 0,
    "explanation": "Amaç: şebeke istikrarını sağlamak için (to ensure).",
    "tactic": "Mastar amaç bildirir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-35",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "Solar photovoltaics convert sunlight directly into electricity using semiconductor materials. In recent years, production costs have dropped (I) -------, making solar power competitive with fossil fuels. Many nations now offer tax incentives (II) ------- encourage domestic rooftop installations. However, energy storage remains a challenge (III) ------- solar generation ceases during night hours. Advanced lithium-ion batteries are deployed (IV) ------- grid stability. Experts believe that solar will become the dominant energy source (V) ------- 2040.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "through",
      "on",
      "by",
      "at",
      "from"
    ],
    "answer": 2,
    "explanation": "Gelecek bir tarihe kadar: by 2040.",
    "tactic": "By + Gelecek yıl = -e kadar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-36",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "cancels",
      "triggers",
      "avoids",
      "prevents",
      "eliminates"
    ],
    "answer": 1,
    "explanation": "CO2 emişi derin kimyasal değişiklikleri tetikler.",
    "tactic": "Fiil bağlamı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-37",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "to lower",
      "having lowered",
      "lowers",
      "lowering",
      "lowered"
    ],
    "answer": 3,
    "explanation": "Virgül + Ving: pH seviyesini düşürerek.",
    "tactic": "Participle reduction.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-38",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "from",
      "with",
      "at",
      "to",
      "for"
    ],
    "answer": 3,
    "explanation": "Pose a threat to: -e tehdit oluşturmak.",
    "tactic": "Preposition collocations.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-39",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "partially",
      "mildly",
      "marginally",
      "drastically",
      "moderately"
    ],
    "answer": 3,
    "explanation": "Kabuksuz canlıların hayatta kalması dramatik düşer.",
    "tactic": "Zarf şiddeti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-40",
    "tacticSlug": "cloze-test",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The oceans absorb approximately thirty percent of anthropogenic carbon dioxide emissions. While this mitigates atmospheric warming, it (I) ------- profound chemical changes in seawater. Dissolved CO2 reacts with water to form carbonic acid, (II) ------- the pH of the marine environment. This acidification poses a catastrophic threat (III) ------- calcifying organisms such as corals and shellfish. Without protective shells, their survival rates plummet (IV) -------. Marine biologists warn that immediate reductions in global emissions are required to (V) ------- this oceanic crisis.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "prolong",
      "provoke",
      "aggravate",
      "avert",
      "worsen"
    ],
    "answer": 3,
    "explanation": "Krizi önlemek/savuşturmak için (avert).",
    "tactic": "Kriz engelleme fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-41",
    "tacticSlug": "cloze-test",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (I) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "maintained",
      "verified",
      "overturned",
      "supported",
      "confirmed"
    ],
    "answer": 2,
    "explanation": "Yeni bulgular eski dogmayı tamamen yıktı/altüst etti.",
    "tactic": "Zıtlık fiili.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-42",
    "tacticSlug": "cloze-test",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (II) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "for",
      "on",
      "with",
      "in",
      "at"
    ],
    "answer": 3,
    "explanation": "In response to: -e cevaben/karşılık olarak.",
    "tactic": "Edat öbeği.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-43",
    "tacticSlug": "cloze-test",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (III) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "despite",
      "in order to",
      "lest",
      "although",
      "unless"
    ],
    "answer": 1,
    "explanation": "Kayıp kapasiteyi telafi etmek amacıyla (in order to).",
    "tactic": "Amaç mastarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-44",
    "tacticSlug": "cloze-test",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (IV) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "by",
      "without",
      "against",
      "under",
      "beyond"
    ],
    "answer": 0,
    "explanation": "Terapiler yoluyla/vasıtasıyla: by intensive exercises.",
    "tactic": "Vasıta edatı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-cloze-45",
    "tacticSlug": "cloze-test",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "For decades, neuroscientists assumed that the adult human brain was structurally fixed. Recent discoveries have completely (I) ------- this dogma, demonstrating that the brain retains remarkable plasticity throughout life. Neuronal networks continuously rewire themselves (II) ------- response to novel experiences, learning, and physical trauma. When one brain area is damaged, adjacent regions can often adapt (III) ------- compensate for lost functional capacity. This adaptive rewiring is facilitated (IV) ------- intensive cognitive rehabilitation exercises. Consequently, stroke recovery therapies are far more effective (V) ------- previously imagined.",
    "stem": "Parçada (V) numaralı boşluğa uygun düşen sözcük veya ifadeyi bulunuz.",
    "options": [
      "as",
      "like",
      "from",
      "than",
      "so"
    ],
    "answer": 3,
    "explanation": "Comparative sonrası: more effective THAN.",
    "tactic": "Karşılaştırma kalıbı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-1",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Because the train was delayed by heavy snowfall, -------.",
    "options": [
      "the locomotive was operating at record-breaking speeds",
      "we arrived at the conference an hour after the keynote speech began",
      "we arrived at the venue precisely on time without any delay",
      "the weather was pleasantly sunny and warm all afternoon",
      "tickets were distributed to passengers free of charge"
    ],
    "answer": 1,
    "explanation": "Kar yağışı nedeniyle tren geciktiği için salona geç ulaşıldı.",
    "tactic": "Neden-sonuç: gecikme -> geç varış.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-2",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Although she had studied computer programming for only three months, -------.",
    "options": [
      "her computer broke down during the initial examination",
      "she refused to participate in the upcoming technological exhibition",
      "she developed an innovative mobile app that won first prize in the national contest",
      "programming courses were completely cancelled by the school administration",
      "she was unable to write even a single line of basic code"
    ],
    "answer": 2,
    "explanation": "Yalnızca üç aydır çalışmasına rağmen birinci olan bir uygulama geliştirdi (zıtlık).",
    "tactic": "Although + kısa süre (+) -> büyük başarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-3",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "In order to reduce plastic waste in oceans, -------.",
    "options": [
      "many coastal nations have banned single-use plastic bags and straws",
      "marine turtles continue to ingest toxic chemical pollutants",
      "ocean currents carry debris across thousands of nautical miles",
      "industrial fishing vessels harvest metric tons of tuna daily",
      "plastic manufacturing plants have expanded their production lines"
    ],
    "answer": 0,
    "explanation": "Plastik atığı azaltmak amacıyla pek çok ülke poşetleri yasakladı.",
    "tactic": "In order to + Amaç -> Hükümet önlemleri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-4",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Unless the municipal water supply is properly filtered and boiled, -------.",
    "options": [
      "residents will celebrate the improved purity of their drinking reservoir",
      "it can spread waterborne bacteria and cause severe gastrointestinal illness",
      "city engineers will dismantle the central water pipeline permanently",
      "it is completely safe and refreshing to drink directly from the tap",
      "local bottled water manufacturers will lower their retail prices"
    ],
    "answer": 1,
    "explanation": "Su filtrelenip kaynatılmadıkça hastalık yayabilir (olumsuz koşul).",
    "tactic": "Unless + olumlu fiil -> olumsuz tehlike.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-5",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "While classical antibiotics kill both harmful pathogens and beneficial gut bacteria, -------.",
    "options": [
      "they are prescribed by physicians for seasonal viral infections",
      "bacterial resistance has become a minor medical problem in modern clinics",
      "novel targeted antimicrobial peptides attack only disease-causing strains",
      "patients frequently forget to finish their prescribed medical doses",
      "pharmaceutical corporations manufacture millions of penicillin capsules"
    ],
    "answer": 2,
    "explanation": "Geleneksel antibiyotikler faydalıları da öldürürken yeniler sadece hastalıklıları hedefler.",
    "tactic": "While ile iki tıbbi yaklaşım zıtlaştırılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-6",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Since groundwater aquifers are being depleted much faster than natural rainwater can replenish them, -------.",
    "options": [
      "rainy seasons have extended by several months in the region",
      "irrigation technology has become completely unnecessary for crops",
      "underground wells have overflowed into local rivers and streams",
      "agricultural communities face severe water shortages in the near future",
      "farmers harvest record grain yields every single growing season"
    ],
    "answer": 3,
    "explanation": "Yeraltı suları yenilenenden hızlı tükendiği için kuraklık kapıda.",
    "tactic": "Since (çünkü) -> Kaçınılmaz su kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-7",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Despite the rigorous security protocols implemented by the international airport, -------.",
    "options": [
      "luggage screening procedures were completed in record time",
      "all incoming passenger planes landed safely without any technical glitch",
      "a cyberattack temporarily compromised the flight scheduling radar database",
      "security personnel received awards for flawless border surveillance",
      "passengers expressed immense satisfaction with the courteous staff"
    ],
    "answer": 2,
    "explanation": "Sıkı güvenlik protokollerine rağmen siber saldırı radarı çökertti (zıtlık).",
    "tactic": "Despite (+) -> Saldırı (-).",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-8",
    "tacticSlug": "sentence-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "As long as global fossil fuel consumption continues to rise unabated, -------.",
    "options": [
      "international efforts to cap global warming at 1.5 degrees will fail",
      "greenhouse gas emissions will drop to net zero before 2030",
      "atmospheric carbon concentrations will stabilize naturally",
      "renewable energy sources will be phased out across developed nations",
      "polar ice sheets will gradually expand and thicken over time"
    ],
    "answer": 0,
    "explanation": "Fosil yakıt tüketimi arttığı sürece sıcaklığı sınırlama çabaları başarısız olacaktır.",
    "tactic": "As long as + olumsuz gidişat -> başarısızlık.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-9",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "So intricate was the ancient clockwork mechanism discovered in the shipwreck -------.",
    "options": [
      "that modern engineers required specialized 3D X-ray tomography to decipher its gears",
      "although it was fabricated from ordinary bronze and copper alloys",
      "because sponge divers had damaged the delicate wooden case",
      "which proved that ancient astronomers had predicted planetary orbits",
      "unless maritime archaeologists transport the relic to an overseas museum"
    ],
    "answer": 0,
    "explanation": "Mekanizma o kadar karmaşıktı ki mühendisler çözmek için 3D tomografi kullandı.",
    "tactic": "So + Sıfat + was + özne ... THAT!",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-10",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "-------, the scientific expedition was forced to abandon its base camp on the glacier.",
    "options": [
      "Since all communications equipment functioned flawlessly during the storm",
      "When an unexpected blizzard unleashed hurricane-force winds and buried their tents",
      "In order to celebrate the successful collection of ice core samples",
      "Even if the team possessed state-of-the-art thermal survival equipment",
      "Although the weather forecast promised clear skies and mild sunshine"
    ],
    "answer": 1,
    "explanation": "Fırtına çadırları gömünce heyet kampı terk etmek zorunda kaldı.",
    "tactic": "Terk etme gerekçesi: When an unexpected blizzard...",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-11",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Because the train was delayed by heavy snowfall, -------.",
    "options": [
      "the locomotive was operating at record-breaking speeds",
      "the weather was pleasantly sunny and warm all afternoon",
      "we arrived at the venue precisely on time without any delay",
      "tickets were distributed to passengers free of charge",
      "we arrived at the conference an hour after the keynote speech began"
    ],
    "answer": 4,
    "explanation": "Kar yağışı nedeniyle tren geciktiği için salona geç ulaşıldı.",
    "tactic": "Neden-sonuç: gecikme -> geç varış.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-12",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Although she had studied computer programming for only three months, -------.",
    "options": [
      "she was unable to write even a single line of basic code",
      "she refused to participate in the upcoming technological exhibition",
      "programming courses were completely cancelled by the school administration",
      "her computer broke down during the initial examination",
      "she developed an innovative mobile app that won first prize in the national contest"
    ],
    "answer": 4,
    "explanation": "Yalnızca üç aydır çalışmasına rağmen birinci olan bir uygulama geliştirdi (zıtlık).",
    "tactic": "Although + kısa süre (+) -> büyük başarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-13",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "In order to reduce plastic waste in oceans, -------.",
    "options": [
      "industrial fishing vessels harvest metric tons of tuna daily",
      "marine turtles continue to ingest toxic chemical pollutants",
      "ocean currents carry debris across thousands of nautical miles",
      "many coastal nations have banned single-use plastic bags and straws",
      "plastic manufacturing plants have expanded their production lines"
    ],
    "answer": 3,
    "explanation": "Plastik atığı azaltmak amacıyla pek çok ülke poşetleri yasakladı.",
    "tactic": "In order to + Amaç -> Hükümet önlemleri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-14",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Unless the municipal water supply is properly filtered and boiled, -------.",
    "options": [
      "city engineers will dismantle the central water pipeline permanently",
      "it is completely safe and refreshing to drink directly from the tap",
      "it can spread waterborne bacteria and cause severe gastrointestinal illness",
      "residents will celebrate the improved purity of their drinking reservoir",
      "local bottled water manufacturers will lower their retail prices"
    ],
    "answer": 2,
    "explanation": "Su filtrelenip kaynatılmadıkça hastalık yayabilir (olumsuz koşul).",
    "tactic": "Unless + olumlu fiil -> olumsuz tehlike.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-15",
    "tacticSlug": "sentence-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "While classical antibiotics kill both harmful pathogens and beneficial gut bacteria, -------.",
    "options": [
      "bacterial resistance has become a minor medical problem in modern clinics",
      "novel targeted antimicrobial peptides attack only disease-causing strains",
      "they are prescribed by physicians for seasonal viral infections",
      "pharmaceutical corporations manufacture millions of penicillin capsules",
      "patients frequently forget to finish their prescribed medical doses"
    ],
    "answer": 1,
    "explanation": "Geleneksel antibiyotikler faydalıları da öldürürken yeniler sadece hastalıklıları hedefler.",
    "tactic": "While ile iki tıbbi yaklaşım zıtlaştırılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-16",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Since groundwater aquifers are being depleted much faster than natural rainwater can replenish them, -------.",
    "options": [
      "underground wells have overflowed into local rivers and streams",
      "rainy seasons have extended by several months in the region",
      "agricultural communities face severe water shortages in the near future",
      "irrigation technology has become completely unnecessary for crops",
      "farmers harvest record grain yields every single growing season"
    ],
    "answer": 2,
    "explanation": "Yeraltı suları yenilenenden hızlı tükendiği için kuraklık kapıda.",
    "tactic": "Since (çünkü) -> Kaçınılmaz su kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-17",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Despite the rigorous security protocols implemented by the international airport, -------.",
    "options": [
      "security personnel received awards for flawless border surveillance",
      "luggage screening procedures were completed in record time",
      "all incoming passenger planes landed safely without any technical glitch",
      "a cyberattack temporarily compromised the flight scheduling radar database",
      "passengers expressed immense satisfaction with the courteous staff"
    ],
    "answer": 3,
    "explanation": "Sıkı güvenlik protokollerine rağmen siber saldırı radarı çökertti (zıtlık).",
    "tactic": "Despite (+) -> Saldırı (-).",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-18",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "As long as global fossil fuel consumption continues to rise unabated, -------.",
    "options": [
      "polar ice sheets will gradually expand and thicken over time",
      "renewable energy sources will be phased out across developed nations",
      "greenhouse gas emissions will drop to net zero before 2030",
      "international efforts to cap global warming at 1.5 degrees will fail",
      "atmospheric carbon concentrations will stabilize naturally"
    ],
    "answer": 3,
    "explanation": "Fosil yakıt tüketimi arttığı sürece sıcaklığı sınırlama çabaları başarısız olacaktır.",
    "tactic": "As long as + olumsuz gidişat -> başarısızlık.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-19",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "So intricate was the ancient clockwork mechanism discovered in the shipwreck -------.",
    "options": [
      "that modern engineers required specialized 3D X-ray tomography to decipher its gears",
      "because sponge divers had damaged the delicate wooden case",
      "although it was fabricated from ordinary bronze and copper alloys",
      "which proved that ancient astronomers had predicted planetary orbits",
      "unless maritime archaeologists transport the relic to an overseas museum"
    ],
    "answer": 0,
    "explanation": "Mekanizma o kadar karmaşıktı ki mühendisler çözmek için 3D tomografi kullandı.",
    "tactic": "So + Sıfat + was + özne ... THAT!",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-20",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "-------, the scientific expedition was forced to abandon its base camp on the glacier.",
    "options": [
      "In order to celebrate the successful collection of ice core samples",
      "Since all communications equipment functioned flawlessly during the storm",
      "Even if the team possessed state-of-the-art thermal survival equipment",
      "Although the weather forecast promised clear skies and mild sunshine",
      "When an unexpected blizzard unleashed hurricane-force winds and buried their tents"
    ],
    "answer": 4,
    "explanation": "Fırtına çadırları gömünce heyet kampı terk etmek zorunda kaldı.",
    "tactic": "Terk etme gerekçesi: When an unexpected blizzard...",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-21",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Because the train was delayed by heavy snowfall, -------.",
    "options": [
      "tickets were distributed to passengers free of charge",
      "we arrived at the conference an hour after the keynote speech began",
      "we arrived at the venue precisely on time without any delay",
      "the locomotive was operating at record-breaking speeds",
      "the weather was pleasantly sunny and warm all afternoon"
    ],
    "answer": 1,
    "explanation": "Kar yağışı nedeniyle tren geciktiği için salona geç ulaşıldı.",
    "tactic": "Neden-sonuç: gecikme -> geç varış.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-22",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Although she had studied computer programming for only three months, -------.",
    "options": [
      "her computer broke down during the initial examination",
      "she developed an innovative mobile app that won first prize in the national contest",
      "she was unable to write even a single line of basic code",
      "programming courses were completely cancelled by the school administration",
      "she refused to participate in the upcoming technological exhibition"
    ],
    "answer": 1,
    "explanation": "Yalnızca üç aydır çalışmasına rağmen birinci olan bir uygulama geliştirdi (zıtlık).",
    "tactic": "Although + kısa süre (+) -> büyük başarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-23",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "In order to reduce plastic waste in oceans, -------.",
    "options": [
      "many coastal nations have banned single-use plastic bags and straws",
      "ocean currents carry debris across thousands of nautical miles",
      "marine turtles continue to ingest toxic chemical pollutants",
      "industrial fishing vessels harvest metric tons of tuna daily",
      "plastic manufacturing plants have expanded their production lines"
    ],
    "answer": 0,
    "explanation": "Plastik atığı azaltmak amacıyla pek çok ülke poşetleri yasakladı.",
    "tactic": "In order to + Amaç -> Hükümet önlemleri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-24",
    "tacticSlug": "sentence-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Unless the municipal water supply is properly filtered and boiled, -------.",
    "options": [
      "it can spread waterborne bacteria and cause severe gastrointestinal illness",
      "it is completely safe and refreshing to drink directly from the tap",
      "residents will celebrate the improved purity of their drinking reservoir",
      "city engineers will dismantle the central water pipeline permanently",
      "local bottled water manufacturers will lower their retail prices"
    ],
    "answer": 0,
    "explanation": "Su filtrelenip kaynatılmadıkça hastalık yayabilir (olumsuz koşul).",
    "tactic": "Unless + olumlu fiil -> olumsuz tehlike.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-25",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "While classical antibiotics kill both harmful pathogens and beneficial gut bacteria, -------.",
    "options": [
      "pharmaceutical corporations manufacture millions of penicillin capsules",
      "patients frequently forget to finish their prescribed medical doses",
      "bacterial resistance has become a minor medical problem in modern clinics",
      "novel targeted antimicrobial peptides attack only disease-causing strains",
      "they are prescribed by physicians for seasonal viral infections"
    ],
    "answer": 3,
    "explanation": "Geleneksel antibiyotikler faydalıları da öldürürken yeniler sadece hastalıklıları hedefler.",
    "tactic": "While ile iki tıbbi yaklaşım zıtlaştırılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-26",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Since groundwater aquifers are being depleted much faster than natural rainwater can replenish them, -------.",
    "options": [
      "rainy seasons have extended by several months in the region",
      "agricultural communities face severe water shortages in the near future",
      "underground wells have overflowed into local rivers and streams",
      "farmers harvest record grain yields every single growing season",
      "irrigation technology has become completely unnecessary for crops"
    ],
    "answer": 1,
    "explanation": "Yeraltı suları yenilenenden hızlı tükendiği için kuraklık kapıda.",
    "tactic": "Since (çünkü) -> Kaçınılmaz su kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-27",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Despite the rigorous security protocols implemented by the international airport, -------.",
    "options": [
      "a cyberattack temporarily compromised the flight scheduling radar database",
      "luggage screening procedures were completed in record time",
      "security personnel received awards for flawless border surveillance",
      "all incoming passenger planes landed safely without any technical glitch",
      "passengers expressed immense satisfaction with the courteous staff"
    ],
    "answer": 0,
    "explanation": "Sıkı güvenlik protokollerine rağmen siber saldırı radarı çökertti (zıtlık).",
    "tactic": "Despite (+) -> Saldırı (-).",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-28",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "As long as global fossil fuel consumption continues to rise unabated, -------.",
    "options": [
      "international efforts to cap global warming at 1.5 degrees will fail",
      "greenhouse gas emissions will drop to net zero before 2030",
      "polar ice sheets will gradually expand and thicken over time",
      "renewable energy sources will be phased out across developed nations",
      "atmospheric carbon concentrations will stabilize naturally"
    ],
    "answer": 0,
    "explanation": "Fosil yakıt tüketimi arttığı sürece sıcaklığı sınırlama çabaları başarısız olacaktır.",
    "tactic": "As long as + olumsuz gidişat -> başarısızlık.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-29",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "So intricate was the ancient clockwork mechanism discovered in the shipwreck -------.",
    "options": [
      "unless maritime archaeologists transport the relic to an overseas museum",
      "because sponge divers had damaged the delicate wooden case",
      "which proved that ancient astronomers had predicted planetary orbits",
      "although it was fabricated from ordinary bronze and copper alloys",
      "that modern engineers required specialized 3D X-ray tomography to decipher its gears"
    ],
    "answer": 4,
    "explanation": "Mekanizma o kadar karmaşıktı ki mühendisler çözmek için 3D tomografi kullandı.",
    "tactic": "So + Sıfat + was + özne ... THAT!",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-30",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "-------, the scientific expedition was forced to abandon its base camp on the glacier.",
    "options": [
      "When an unexpected blizzard unleashed hurricane-force winds and buried their tents",
      "In order to celebrate the successful collection of ice core samples",
      "Since all communications equipment functioned flawlessly during the storm",
      "Even if the team possessed state-of-the-art thermal survival equipment",
      "Although the weather forecast promised clear skies and mild sunshine"
    ],
    "answer": 0,
    "explanation": "Fırtına çadırları gömünce heyet kampı terk etmek zorunda kaldı.",
    "tactic": "Terk etme gerekçesi: When an unexpected blizzard...",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-31",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Because the train was delayed by heavy snowfall, -------.",
    "options": [
      "the weather was pleasantly sunny and warm all afternoon",
      "we arrived at the venue precisely on time without any delay",
      "the locomotive was operating at record-breaking speeds",
      "tickets were distributed to passengers free of charge",
      "we arrived at the conference an hour after the keynote speech began"
    ],
    "answer": 4,
    "explanation": "Kar yağışı nedeniyle tren geciktiği için salona geç ulaşıldı.",
    "tactic": "Neden-sonuç: gecikme -> geç varış.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-32",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Although she had studied computer programming for only three months, -------.",
    "options": [
      "she refused to participate in the upcoming technological exhibition",
      "she developed an innovative mobile app that won first prize in the national contest",
      "she was unable to write even a single line of basic code",
      "programming courses were completely cancelled by the school administration",
      "her computer broke down during the initial examination"
    ],
    "answer": 1,
    "explanation": "Yalnızca üç aydır çalışmasına rağmen birinci olan bir uygulama geliştirdi (zıtlık).",
    "tactic": "Although + kısa süre (+) -> büyük başarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-33",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "In order to reduce plastic waste in oceans, -------.",
    "options": [
      "many coastal nations have banned single-use plastic bags and straws",
      "industrial fishing vessels harvest metric tons of tuna daily",
      "ocean currents carry debris across thousands of nautical miles",
      "plastic manufacturing plants have expanded their production lines",
      "marine turtles continue to ingest toxic chemical pollutants"
    ],
    "answer": 0,
    "explanation": "Plastik atığı azaltmak amacıyla pek çok ülke poşetleri yasakladı.",
    "tactic": "In order to + Amaç -> Hükümet önlemleri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-34",
    "tacticSlug": "sentence-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Unless the municipal water supply is properly filtered and boiled, -------.",
    "options": [
      "residents will celebrate the improved purity of their drinking reservoir",
      "local bottled water manufacturers will lower their retail prices",
      "it is completely safe and refreshing to drink directly from the tap",
      "city engineers will dismantle the central water pipeline permanently",
      "it can spread waterborne bacteria and cause severe gastrointestinal illness"
    ],
    "answer": 4,
    "explanation": "Su filtrelenip kaynatılmadıkça hastalık yayabilir (olumsuz koşul).",
    "tactic": "Unless + olumlu fiil -> olumsuz tehlike.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-35",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "While classical antibiotics kill both harmful pathogens and beneficial gut bacteria, -------.",
    "options": [
      "patients frequently forget to finish their prescribed medical doses",
      "bacterial resistance has become a minor medical problem in modern clinics",
      "they are prescribed by physicians for seasonal viral infections",
      "novel targeted antimicrobial peptides attack only disease-causing strains",
      "pharmaceutical corporations manufacture millions of penicillin capsules"
    ],
    "answer": 3,
    "explanation": "Geleneksel antibiyotikler faydalıları da öldürürken yeniler sadece hastalıklıları hedefler.",
    "tactic": "While ile iki tıbbi yaklaşım zıtlaştırılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-36",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Since groundwater aquifers are being depleted much faster than natural rainwater can replenish them, -------.",
    "options": [
      "farmers harvest record grain yields every single growing season",
      "rainy seasons have extended by several months in the region",
      "irrigation technology has become completely unnecessary for crops",
      "underground wells have overflowed into local rivers and streams",
      "agricultural communities face severe water shortages in the near future"
    ],
    "answer": 4,
    "explanation": "Yeraltı suları yenilenenden hızlı tükendiği için kuraklık kapıda.",
    "tactic": "Since (çünkü) -> Kaçınılmaz su kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-37",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Despite the rigorous security protocols implemented by the international airport, -------.",
    "options": [
      "all incoming passenger planes landed safely without any technical glitch",
      "a cyberattack temporarily compromised the flight scheduling radar database",
      "security personnel received awards for flawless border surveillance",
      "passengers expressed immense satisfaction with the courteous staff",
      "luggage screening procedures were completed in record time"
    ],
    "answer": 1,
    "explanation": "Sıkı güvenlik protokollerine rağmen siber saldırı radarı çökertti (zıtlık).",
    "tactic": "Despite (+) -> Saldırı (-).",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-38",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "As long as global fossil fuel consumption continues to rise unabated, -------.",
    "options": [
      "international efforts to cap global warming at 1.5 degrees will fail",
      "greenhouse gas emissions will drop to net zero before 2030",
      "renewable energy sources will be phased out across developed nations",
      "polar ice sheets will gradually expand and thicken over time",
      "atmospheric carbon concentrations will stabilize naturally"
    ],
    "answer": 0,
    "explanation": "Fosil yakıt tüketimi arttığı sürece sıcaklığı sınırlama çabaları başarısız olacaktır.",
    "tactic": "As long as + olumsuz gidişat -> başarısızlık.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-39",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "So intricate was the ancient clockwork mechanism discovered in the shipwreck -------.",
    "options": [
      "that modern engineers required specialized 3D X-ray tomography to decipher its gears",
      "because sponge divers had damaged the delicate wooden case",
      "which proved that ancient astronomers had predicted planetary orbits",
      "unless maritime archaeologists transport the relic to an overseas museum",
      "although it was fabricated from ordinary bronze and copper alloys"
    ],
    "answer": 0,
    "explanation": "Mekanizma o kadar karmaşıktı ki mühendisler çözmek için 3D tomografi kullandı.",
    "tactic": "So + Sıfat + was + özne ... THAT!",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-40",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "-------, the scientific expedition was forced to abandon its base camp on the glacier.",
    "options": [
      "When an unexpected blizzard unleashed hurricane-force winds and buried their tents",
      "Even if the team possessed state-of-the-art thermal survival equipment",
      "Although the weather forecast promised clear skies and mild sunshine",
      "Since all communications equipment functioned flawlessly during the storm",
      "In order to celebrate the successful collection of ice core samples"
    ],
    "answer": 0,
    "explanation": "Fırtına çadırları gömünce heyet kampı terk etmek zorunda kaldı.",
    "tactic": "Terk etme gerekçesi: When an unexpected blizzard...",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-41",
    "tacticSlug": "sentence-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Because the train was delayed by heavy snowfall, -------.",
    "options": [
      "we arrived at the conference an hour after the keynote speech began",
      "we arrived at the venue precisely on time without any delay",
      "the locomotive was operating at record-breaking speeds",
      "tickets were distributed to passengers free of charge",
      "the weather was pleasantly sunny and warm all afternoon"
    ],
    "answer": 0,
    "explanation": "Kar yağışı nedeniyle tren geciktiği için salona geç ulaşıldı.",
    "tactic": "Neden-sonuç: gecikme -> geç varış.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-42",
    "tacticSlug": "sentence-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Although she had studied computer programming for only three months, -------.",
    "options": [
      "programming courses were completely cancelled by the school administration",
      "her computer broke down during the initial examination",
      "she refused to participate in the upcoming technological exhibition",
      "she developed an innovative mobile app that won first prize in the national contest",
      "she was unable to write even a single line of basic code"
    ],
    "answer": 3,
    "explanation": "Yalnızca üç aydır çalışmasına rağmen birinci olan bir uygulama geliştirdi (zıtlık).",
    "tactic": "Although + kısa süre (+) -> büyük başarı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-43",
    "tacticSlug": "sentence-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "In order to reduce plastic waste in oceans, -------.",
    "options": [
      "industrial fishing vessels harvest metric tons of tuna daily",
      "marine turtles continue to ingest toxic chemical pollutants",
      "ocean currents carry debris across thousands of nautical miles",
      "many coastal nations have banned single-use plastic bags and straws",
      "plastic manufacturing plants have expanded their production lines"
    ],
    "answer": 3,
    "explanation": "Plastik atığı azaltmak amacıyla pek çok ülke poşetleri yasakladı.",
    "tactic": "In order to + Amaç -> Hükümet önlemleri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-44",
    "tacticSlug": "sentence-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Unless the municipal water supply is properly filtered and boiled, -------.",
    "options": [
      "city engineers will dismantle the central water pipeline permanently",
      "local bottled water manufacturers will lower their retail prices",
      "it can spread waterborne bacteria and cause severe gastrointestinal illness",
      "it is completely safe and refreshing to drink directly from the tap",
      "residents will celebrate the improved purity of their drinking reservoir"
    ],
    "answer": 2,
    "explanation": "Su filtrelenip kaynatılmadıkça hastalık yayabilir (olumsuz koşul).",
    "tactic": "Unless + olumlu fiil -> olumsuz tehlike.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-45",
    "tacticSlug": "sentence-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "While classical antibiotics kill both harmful pathogens and beneficial gut bacteria, -------.",
    "options": [
      "bacterial resistance has become a minor medical problem in modern clinics",
      "they are prescribed by physicians for seasonal viral infections",
      "pharmaceutical corporations manufacture millions of penicillin capsules",
      "novel targeted antimicrobial peptides attack only disease-causing strains",
      "patients frequently forget to finish their prescribed medical doses"
    ],
    "answer": 3,
    "explanation": "Geleneksel antibiyotikler faydalıları da öldürürken yeniler sadece hastalıklıları hedefler.",
    "tactic": "While ile iki tıbbi yaklaşım zıtlaştırılır.",
    "isImportant": false
  },
  {
    "id": "tq-extra-sent-46",
    "tacticSlug": "sentence-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Since groundwater aquifers are being depleted much faster than natural rainwater can replenish them, -------.",
    "options": [
      "rainy seasons have extended by several months in the region",
      "agricultural communities face severe water shortages in the near future",
      "irrigation technology has become completely unnecessary for crops",
      "farmers harvest record grain yields every single growing season",
      "underground wells have overflowed into local rivers and streams"
    ],
    "answer": 1,
    "explanation": "Yeraltı suları yenilenenden hızlı tükendiği için kuraklık kapıda.",
    "tactic": "Since (çünkü) -> Kaçınılmaz su kıtlığı.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-1",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-2",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır."
    ],
    "answer": 2,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-3",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur."
    ],
    "answer": 1,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-4",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer."
    ],
    "answer": 2,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-5",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder."
    ],
    "answer": 1,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-6",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-7",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi."
    ],
    "answer": 2,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-8",
    "tacticSlug": "translation-en-tr",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir."
    ],
    "answer": 3,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-9",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür."
    ],
    "answer": 4,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-10",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır."
    ],
    "answer": 3,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-11",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir."
    ],
    "answer": 0,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-12",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer."
    ],
    "answer": 3,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-13",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar."
    ],
    "answer": 2,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-14",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-15",
    "tacticSlug": "translation-en-tr",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu."
    ],
    "answer": 4,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-16",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir."
    ],
    "answer": 2,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-17",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-18",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir."
    ],
    "answer": 2,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-19",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu."
    ],
    "answer": 4,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-20",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer."
    ],
    "answer": 1,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-21",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür."
    ],
    "answer": 4,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-22",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-23",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur."
    ],
    "answer": 2,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-24",
    "tacticSlug": "translation-en-tr",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer."
    ],
    "answer": 2,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-25",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-26",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-27",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi."
    ],
    "answer": 0,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-28",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi."
    ],
    "answer": 3,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-29",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-30",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar."
    ],
    "answer": 3,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-31",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur."
    ],
    "answer": 3,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-32",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar."
    ],
    "answer": 0,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-33",
    "tacticSlug": "translation-en-tr",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar."
    ],
    "answer": 0,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-34",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir."
    ],
    "answer": 2,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-35",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir."
    ],
    "answer": 2,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-36",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar."
    ],
    "answer": 0,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-37",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-38",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-39",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir."
    ],
    "answer": 0,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-40",
    "tacticSlug": "translation-en-tr",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler."
    ],
    "answer": 4,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-41",
    "tacticSlug": "translation-en-tr",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar."
    ],
    "answer": 1,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-42",
    "tacticSlug": "translation-en-tr",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Children who read books regularly develop richer vocabularies and superior critical thinking skills.\"",
    "options": [
      "Daha zengin kelime dağarcığına sahip çocuklar genellikle düzenli kitap okumaktadır.",
      "Düzenli kitap okumak çocukların kelime dağarcığını ve düşüncelerini zenginleştirir.",
      "Düzenli kitap okuyan çocuklar, daha zengin bir kelime dağarcığı ve üstün eleştirel düşünme becerileri geliştirir.",
      "Kitap okuyan çocukların kelime dağarcığı zenginleşir ve eleştirel düşünceleri artar.",
      "Eleştirel düşünme becerisini geliştiren çocuklar düzenli olarak kitap okuyanlardır."
    ],
    "answer": 2,
    "explanation": "Özne: Düzenli kitap okuyan çocuklar. Yüklem: geliştirir.",
    "tactic": "Relative clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-43",
    "tacticSlug": "translation-en-tr",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Although the medicine was effective in clinical trials, it caused unexpected side effects in some patients.\"",
    "options": [
      "İlaç bazı hastalarda yan etki yarattığı için klinik deneylerde başarısız bulunmuştur.",
      "İlaç klinik deneylerde etkili oldu çünkü hastalarda hiçbir yan etki görülmedi.",
      "Klinik deneylerde etkisi kanıtlanan ilaç bazı hastaların tedavisini geciktirmiştir.",
      "İlaç klinik deneylerde etkili olmasına rağmen, bazı hastalarda beklenmedik yan etkilere neden oldu.",
      "Klinik deneylerde beklenmedik yan etkiler gösteren ilaç hastalar üzerinde etkili olmuştur."
    ],
    "answer": 3,
    "explanation": "Although = -e rağmen. Yüklem: yan etkilere neden oldu.",
    "tactic": "Zıtlık bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-44",
    "tacticSlug": "translation-en-tr",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Scientists have discovered a new species of deep-sea jellyfish that emits bright bioluminescent flashes.\"",
    "options": [
      "Bilim insanlarının derin denizde bulduğu canlılar biyolüminesans ışık yayarak ürer.",
      "Derin denizlerde keşfedilen denizanası türleri bilim insanlarına göre parlak parıltılar yayar.",
      "Parlak biyolüminesans parıltılar yayan denizanaları bilim insanları tarafından üretilmiştir.",
      "Yeni bir denizanası türü keşfeden bilim insanları parlak ışıklar saçan canlıları inceledi.",
      "Bilim insanları, parlak biyolüminesans parıltılar yayan yeni bir derin deniz denizanası türü keşfettiler."
    ],
    "answer": 4,
    "explanation": "Özne: Bilim insanları. Yüklem: keşfettiler. Sıfat cümleciği: parıltılar yayan yeni bir tür.",
    "tactic": "That clause çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-entr-45",
    "tacticSlug": "translation-en-tr",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen İngilizce cümlenin Türkçe karşılığını bulunuz:\n\n\"Solar panels convert sunlight into clean electricity without producing harmful emissions.\"",
    "options": [
      "Temiz elektrik üretmek için kullanılan güneş panelleri emisyonları tamamen yok eder.",
      "Güneş ışığı paneller sayesinde temiz elektriğe dönüşür ancak emisyon açığa çıkar.",
      "Zararlı emisyon üreten güneş panelleri elektrik enerjisini temiz tutmaya yarar.",
      "Güneş panelleri, zararlı emisyonlar üretmeden güneş ışığını temiz elektriğe dönüştürür.",
      "Güneş panelleri temiz elektrik üretmek amacıyla güneş ışığını emisyonla birleştirir."
    ],
    "answer": 3,
    "explanation": "Özne: Güneş panelleri. Yüklem: dönüştürür. Zarf: zararlı emisyonlar üretmeden.",
    "tactic": "Temel özne-yüklem uyumu.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-1",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Regular exercise is protected by cardiovascular health and reduces death rates."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-2",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "In order to support the government, impoverished families started a new welfare campaign.",
      "Impoverished families demanded that the government start a financial assistance project.",
      "A new social welfare program had been launched before families received financial assistance.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "The government will launch a financial program to eliminate poverty among families next year."
    ],
    "answer": 3,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-3",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "Historians examined ancient ruins because the lost civilization had obtained information."
    ],
    "answer": 1,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-4",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures."
    ],
    "answer": 0,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-5",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Protecting cardiovascular health requires people to exercise before death occurs."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-6",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "A new social welfare program had been launched before families received financial assistance.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "Impoverished families demanded that the government start a financial assistance project."
    ],
    "answer": 1,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-7",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians."
    ],
    "answer": 3,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-8",
    "tacticSlug": "translation-tr-en",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures."
    ],
    "answer": 2,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-9",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Protecting cardiovascular health requires people to exercise before death occurs."
    ],
    "answer": 2,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-10",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "A new social welfare program had been launched before families received financial assistance.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "Impoverished families demanded that the government start a financial assistance project."
    ],
    "answer": 2,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-11",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians."
    ],
    "answer": 3,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-12",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans."
    ],
    "answer": 0,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-13",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Protecting cardiovascular health requires people to exercise before death occurs."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-14",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "A new social welfare program had been launched before families received financial assistance.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "Impoverished families demanded that the government start a financial assistance project."
    ],
    "answer": 0,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-15",
    "tacticSlug": "translation-tr-en",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians."
    ],
    "answer": 0,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-16",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise."
    ],
    "answer": 4,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-17",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Protecting cardiovascular health requires people to exercise before death occurs."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-18",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "The government will launch a financial program to eliminate poverty among families next year.",
      "Impoverished families demanded that the government start a financial assistance project.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "A new social welfare program had been launched before families received financial assistance."
    ],
    "answer": 2,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-19",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites."
    ],
    "answer": 0,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-20",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans."
    ],
    "answer": 2,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-21",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-22",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "A new social welfare program had been launched before families received financial assistance.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "Impoverished families demanded that the government start a financial assistance project."
    ],
    "answer": 1,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-23",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Historians will obtain valuable information after they examine the ancient ruins."
    ],
    "answer": 3,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-24",
    "tacticSlug": "translation-tr-en",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise."
    ],
    "answer": 4,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-25",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "Exercising regularly had protected cardiovascular health and reduced death risks."
    ],
    "answer": 3,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-26",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "A new social welfare program had been launched before families received financial assistance.",
      "Impoverished families demanded that the government start a financial assistance project.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "The government will launch a financial program to eliminate poverty among families next year."
    ],
    "answer": 3,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-27",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians."
    ],
    "answer": 1,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-28",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily."
    ],
    "answer": 1,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-29",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly had protected cardiovascular health and reduced death risks."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-30",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "Impoverished families demanded that the government start a financial assistance project.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "A new social welfare program had been launched before families received financial assistance."
    ],
    "answer": 1,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-31",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites."
    ],
    "answer": 3,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-32",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures."
    ],
    "answer": 3,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-33",
    "tacticSlug": "translation-tr-en",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death."
    ],
    "answer": 4,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-34",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "The government will launch a financial program to eliminate poverty among families next year.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "A new social welfare program had been launched before families received financial assistance.",
      "Impoverished families demanded that the government start a financial assistance project."
    ],
    "answer": 2,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-35",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites."
    ],
    "answer": 2,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-36",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise."
    ],
    "answer": 4,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-37",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "Regular exercise is protected by cardiovascular health and reduces death rates."
    ],
    "answer": 1,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-38",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "A new social welfare program had been launched before families received financial assistance.",
      "The government will launch a financial program to eliminate poverty among families next year.",
      "Impoverished families demanded that the government start a financial assistance project.",
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign."
    ],
    "answer": 3,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-39",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Historians will obtain valuable information after they examine the ancient ruins."
    ],
    "answer": 2,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-40",
    "tacticSlug": "translation-tr-en",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise."
    ],
    "answer": 4,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-41",
    "tacticSlug": "translation-tr-en",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Exercising regularly had protected cardiovascular health and reduced death risks.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death."
    ],
    "answer": 4,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-42",
    "tacticSlug": "translation-tr-en",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Hükümet, yoksul ailelere maddi destek sağlamak amacıyla yeni bir sosyal yardım programı başlattı.\"",
    "options": [
      "The government launched a new social welfare program in order to provide financial support to impoverished families.",
      "In order to support the government, impoverished families started a new welfare campaign.",
      "Impoverished families demanded that the government start a financial assistance project.",
      "A new social welfare program had been launched before families received financial assistance.",
      "The government will launch a financial program to eliminate poverty among families next year."
    ],
    "answer": 0,
    "explanation": "Özne: The government. Yüklem: launched. Amaç: in order to provide...",
    "tactic": "Amaç bildiren çeviri.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-43",
    "tacticSlug": "translation-tr-en",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Tarihçiler, antik kalıntıları inceleyerek kayıp medeniyet hakkında değerli bilgiler elde ettiler.\"",
    "options": [
      "Ancient ruins were examined by lost civilizations in order to inform modern historians.",
      "Historians examined ancient ruins because the lost civilization had obtained information.",
      "Obtaining valuable information about lost civilizations requires historians to ruin sites.",
      "Historians will obtain valuable information after they examine the ancient ruins.",
      "By examining ancient ruins, historians obtained valuable information about the lost civilization."
    ],
    "answer": 4,
    "explanation": "İnceleyerek = By examining. Yüklem: obtained valuable information.",
    "tactic": "-erek/-arak zarf çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-44",
    "tacticSlug": "translation-tr-en",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Küresel sıcaklıklar arttıkça kutup buzulları erimeye ve deniz seviyeleri yükselmeye devam edecektir.\"",
    "options": [
      "Sea levels rose as long as polar ice sheets continued to melt at high temperatures.",
      "Although global temperatures increase, polar glaciers and sea levels have risen steadily.",
      "As global temperatures increase, polar glaciers will continue to melt and sea levels will continue to rise.",
      "Polar glaciers melted because global temperatures increased above normal levels.",
      "Unless global temperatures rise, polar ice sheets will melt into the rising oceans."
    ],
    "answer": 2,
    "explanation": "Arttıkça = As ... increase. Yüklem: will continue to melt and rise.",
    "tactic": "Zaman/orantı bağlacı çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-tren-45",
    "tacticSlug": "translation-tr-en",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen Türkçe cümlenin İngilizce karşılığını bulunuz:\n\n\"Düzenli egzersiz yapmak kalp sağlığını korur ve erken ölüm riskini önemli ölçüde azaltır.\"",
    "options": [
      "Exercising regularly protects cardiovascular health and significantly reduces the risk of premature death.",
      "If you exercise regularly, premature death will be eliminated from your cardiovascular system.",
      "Protecting cardiovascular health requires people to exercise before death occurs.",
      "Regular exercise is protected by cardiovascular health and reduces death rates.",
      "Exercising regularly had protected cardiovascular health and reduced death risks."
    ],
    "answer": 0,
    "explanation": "Özne: Düzenli egzersiz yapmak (Exercising regularly). Yüklemler: protects and reduces.",
    "tactic": "Özne mastar çevirisi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-1",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-2",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls"
    ],
    "answer": 4,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-3",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-4",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-5",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls"
    ],
    "answer": 4,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-6",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-7",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity"
    ],
    "answer": 4,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-8",
    "tacticSlug": "paragraph-completion",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-9",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides"
    ],
    "answer": 0,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-10",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-11",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 0,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-12",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments"
    ],
    "answer": 3,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-13",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-14",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs"
    ],
    "answer": 0,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-15",
    "tacticSlug": "paragraph-completion",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment"
    ],
    "answer": 3,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-16",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 1,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-17",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 3,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-18",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments"
    ],
    "answer": 2,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-19",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists"
    ],
    "answer": 1,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-20",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils"
    ],
    "answer": 1,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-21",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment"
    ],
    "answer": 2,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-22",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-23",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-24",
    "tacticSlug": "paragraph-completion",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents"
    ],
    "answer": 1,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-25",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-26",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years"
    ],
    "answer": 1,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-27",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-28",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-29",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 0,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-30",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides"
    ],
    "answer": 1,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-31",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity"
    ],
    "answer": 4,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-32",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years"
    ],
    "answer": 0,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-33",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides"
    ],
    "answer": 3,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-34",
    "tacticSlug": "paragraph-completion",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-35",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 3,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-36",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-37",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology"
    ],
    "answer": 3,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-38",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-39",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides"
    ],
    "answer": 2,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-40",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists"
    ],
    "answer": 0,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-41",
    "tacticSlug": "paragraph-completion",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-42",
    "tacticSlug": "paragraph-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-43",
    "tacticSlug": "paragraph-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-44",
    "tacticSlug": "paragraph-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Archaeologists studying prehistoric human settlements rely heavily on pollen analysis. Fossilized pollen grains preserved in lake sediment cores can survive intact for tens of thousands of years. -------. By identifying the relative proportions of different plant species over time, researchers can reconstruct past climate shifts and deforestation patterns.\"",
    "options": [
      "Therefore, radiocarbon dating cannot be utilized on any organic materials older than five hundred years",
      "However, modern agricultural fertilizers have completely destroyed all ancient pollen layers in European peat bogs",
      "Each plant species produces distinctive microscopic pollen grains with durable, decay-resistant outer walls",
      "In contrast, ceramic pottery fragments provide far more detailed environmental data than floral microfossils",
      "Consequently, ancient hunters preferred manufacturing spears from polished volcanic obsidian rather than flint"
    ],
    "answer": 2,
    "explanation": "Boşluktan sonra 'farklı bitki türlerinin oranlarını belirleyerek' dendiği için, boşlukta her bitkinin mikroskobik polen yapısının kendine has olduğu belirtilmelidir.",
    "tactic": "Detay köprüsü: Her bitkinin poleni ayırt edicidir -> araştırmacılar bu oranlara bakarak iklimi anlar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-45",
    "tacticSlug": "paragraph-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Antibiotics revolutionized medicine in the mid-twentieth century, turning once-fatal infections into easily treatable conditions. -------. Overuse in human medicine and livestock feed has accelerated the evolution of resistant bacterial strains, rendering some frontline drugs virtually useless.\"",
    "options": [
      "Furthermore, pharmaceutical corporations earn the vast majority of their annual profits from antibiotic patents",
      "In fact, viral respiratory illnesses such as influenza respond remarkably well to penicillin treatment",
      "Consequently, infectious diseases have been permanently eradicated from all modern hospital environments",
      "Therefore, physicians strongly advise patients to discontinue taking antibiotics as soon as their fever subsides",
      "Today, however, the miraculous efficacy of these pharmaceutical weapons is gravely threatened by antimicrobial resistance"
    ],
    "answer": 4,
    "explanation": "Eski başarılar anlatıldıktan sonra boşlukta 'Ancak bugün bu etkinlik antibiyotik direnciyle tehdit altında' köprüsü gereklidir.",
    "tactic": "Zaman zıtlığı: 20. yüzyıl mucizesi -> Today, however, gravely threatened by resistance.",
    "isImportant": false
  },
  {
    "id": "tq-extra-para-46",
    "tacticSlug": "paragraph-completion",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta boş bırakılan yere en uygun cümleyi bulunuz:\n\n\"Electric vehicles produce zero tailpipe emissions during operation. -------. Consequently, the overall environmental benefit of an electric vehicle depends heavily on whether its charging electricity comes from coal or renewable solar and wind power.\"",
    "options": [
      "Furthermore, electric batteries can be charged in less than two minutes at standard highway petrol stations",
      "Therefore, gasoline-powered cars remain the most ecologically sustainable option for urban motorists",
      "However, their total carbon footprint must take into account the emissions generated by regional power plants that produce electricity",
      "In fact, traditional diesel trucks have been entirely phased out across all metropolitan delivery fleets",
      "Consequently, automotive manufacturers have ceased all research into hydrogen fuel cell technology"
    ],
    "answer": 2,
    "explanation": "Boşluktan önce sıfır egzoz emisyonu, boşluktan sonra elektriğin kömürden mi güneşten mi geldiği vurgulanıyor. Araya 'üretilen elektriğin emisyonu da hesaba katılmalı' köprüsü gelir.",
    "tactic": "Zıtlık köprüsü: Egzoz temiz AMA elektrik nereden geliyor? (However, emissions generated by power plants).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-1",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 1,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-2",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans."
    ],
    "answer": 4,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-3",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-4",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-5",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery."
    ],
    "answer": 3,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-6",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-7",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-8",
    "tacticSlug": "restatement",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts."
    ],
    "answer": 0,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-9",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-10",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 0,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-11",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations."
    ],
    "answer": 1,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-12",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-13",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-14",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans."
    ],
    "answer": 4,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-15",
    "tacticSlug": "restatement",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort."
    ],
    "answer": 4,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-16",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs."
    ],
    "answer": 4,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-17",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts."
    ],
    "answer": 3,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-18",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules."
    ],
    "answer": 0,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-19",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-20",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans."
    ],
    "answer": 4,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-21",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort."
    ],
    "answer": 4,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-22",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-23",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery."
    ],
    "answer": 2,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-24",
    "tacticSlug": "restatement",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules."
    ],
    "answer": 0,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-25",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-26",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans."
    ],
    "answer": 4,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-27",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-28",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 1,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-29",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture."
    ],
    "answer": 3,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-30",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines."
    ],
    "answer": 3,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-31",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-32",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts."
    ],
    "answer": 3,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-33",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort."
    ],
    "answer": 4,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-34",
    "tacticSlug": "restatement",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty."
    ],
    "answer": 3,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-35",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture."
    ],
    "answer": 2,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-36",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience."
    ],
    "answer": 3,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-37",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs."
    ],
    "answer": 4,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-38",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery."
    ],
    "answer": 0,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-39",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience."
    ],
    "answer": 1,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-40",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 2,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-41",
    "tacticSlug": "restatement",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts."
    ],
    "answer": 0,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-42",
    "tacticSlug": "restatement",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines."
    ],
    "answer": 2,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-43",
    "tacticSlug": "restatement",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions.",
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway."
    ],
    "answer": 3,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-44",
    "tacticSlug": "restatement",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"Rarely do scientists discover an archaeological artifact that completely alters our understanding of human prehistory.\"",
    "options": [
      "Unless an artifact alters human prehistory completely, academic journals will refuse to publish the archaeological discovery.",
      "Scientists frequently uncover ancient tools that confirm existing academic assumptions about prehistoric civilizations.",
      "Archaeologists have ceased excavating prehistoric sites because modern discoveries rarely yield any valuable artifacts.",
      "It is exceptionally uncommon for researchers to find an ancient relic that thoroughly transforms established historical theories about early humans.",
      "Most prehistoric relics discovered by researchers have had virtually no impact on our comprehension of early human culture."
    ],
    "answer": 3,
    "explanation": "Rarely do scientists discover = It is exceptionally uncommon for researchers to find (olağanüstü nadirdir).",
    "tactic": "Rarely = exceptionally uncommon.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-45",
    "tacticSlug": "restatement",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The new high-speed rail network is considered to be vastly superior to previous intercity bus routes in terms of both passenger comfort and punctuality.\"",
    "options": [
      "The previous intercity bus routes were far more punctual and comfortable than the newly opened high-speed railway.",
      "Intercity bus companies have upgraded their passenger seating to match the comfort and punctuality of the new train lines.",
      "Neither the intercity buses nor the new high-speed train network has managed to operate on reliable schedules.",
      "Compared to older intercity bus services, the modern high-speed train system offers significantly better punctuality and passenger comfort.",
      "Although the high-speed rail line is faster, travelers still prefer intercity buses due to lower ticket fares and greater convenience."
    ],
    "answer": 3,
    "explanation": "Vastly superior in comfort and punctuality = offers significantly better punctuality and passenger comfort.",
    "tactic": "Superior to = Significantly better than.",
    "isImportant": false
  },
  {
    "id": "tq-extra-restate-46",
    "tacticSlug": "restatement",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Verilen cümleye anlamca en yakın olan seçeneği bulunuz:\n\n\"The government would not have imposed strict trade tariffs had the neighboring state respected the international maritime border agreement.\"",
    "options": [
      "The government will abolish all trade tariffs as soon as the neighboring state agrees to sign a new maritime treaty.",
      "Trade tariffs were imposed primarily to encourage the neighboring country to expand its maritime fishing fleet.",
      "Although the neighboring country complied with the maritime border treaty, the government introduced severe trade tariffs anyway.",
      "Because the neighboring country breached the international maritime border accord, the government was compelled to introduce stringent trade tariffs.",
      "Unless the neighboring state agrees to violate the border treaty, the government will never introduce trade sanctions."
    ],
    "answer": 3,
    "explanation": "Devrik Type 3 koşul (Had it respected): Komşu anlaşmaya uymadığı İÇİN hükümet gümrük tarifesi koydu.",
    "tactic": "Had it done = Yapılsaydı iyi olurdu (yapılmadı).",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-1",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "I",
      "III",
      "IV",
      "V",
      "II"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-2",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "IV",
      "V",
      "III",
      "I"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-3",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "V",
      "II",
      "I",
      "IV",
      "III"
    ],
    "answer": 3,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-4",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "III",
      "I",
      "V",
      "IV"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-5",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "IV",
      "I",
      "III",
      "V"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-6",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "I",
      "III",
      "IV",
      "II",
      "V"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-7",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "V",
      "I",
      "IV",
      "III",
      "II"
    ],
    "answer": 3,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-8",
    "tacticSlug": "irrelevant-sentence",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "I",
      "III",
      "V",
      "IV",
      "II"
    ],
    "answer": 3,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-9",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "III",
      "II",
      "IV",
      "I",
      "V"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-10",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "V",
      "I",
      "III",
      "IV",
      "II"
    ],
    "answer": 2,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-11",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "IV",
      "V",
      "I",
      "III"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-12",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "III",
      "IV",
      "II",
      "I",
      "V"
    ],
    "answer": 1,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-13",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "IV",
      "III",
      "I",
      "II",
      "V"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-14",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "IV",
      "V",
      "III",
      "I"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-15",
    "tacticSlug": "irrelevant-sentence",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "I",
      "V",
      "IV",
      "III",
      "II"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-16",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "V",
      "III",
      "I",
      "IV",
      "II"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-17",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "IV",
      "V",
      "III",
      "II",
      "I"
    ],
    "answer": 0,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-18",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "IV",
      "V",
      "I",
      "III",
      "II"
    ],
    "answer": 0,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-19",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "V",
      "III",
      "I",
      "IV"
    ],
    "answer": 2,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-20",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "IV",
      "I",
      "II",
      "V",
      "III"
    ],
    "answer": 0,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-21",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "II",
      "IV",
      "I",
      "III",
      "V"
    ],
    "answer": 1,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-22",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "I",
      "V",
      "IV",
      "III"
    ],
    "answer": 4,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-23",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "I",
      "IV",
      "II",
      "V",
      "III"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-24",
    "tacticSlug": "irrelevant-sentence",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "V",
      "III",
      "II",
      "IV",
      "I"
    ],
    "answer": 3,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-25",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "III",
      "IV",
      "I",
      "V"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-26",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "IV",
      "III",
      "II",
      "I",
      "V"
    ],
    "answer": 0,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-27",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "IV",
      "I",
      "III",
      "V",
      "II"
    ],
    "answer": 0,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-28",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "IV",
      "V",
      "III",
      "II",
      "I"
    ],
    "answer": 2,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-29",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "IV",
      "II",
      "I",
      "III",
      "V"
    ],
    "answer": 0,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-30",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "I",
      "II",
      "IV",
      "III",
      "V"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-31",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "V",
      "I",
      "III",
      "II",
      "IV"
    ],
    "answer": 2,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-32",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "V",
      "I",
      "IV",
      "III"
    ],
    "answer": 3,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-33",
    "tacticSlug": "irrelevant-sentence",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "III",
      "II",
      "IV",
      "I",
      "V"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-34",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "I",
      "IV",
      "III",
      "V"
    ],
    "answer": 3,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-35",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "III",
      "IV",
      "II",
      "I",
      "V"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-36",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "V",
      "II",
      "IV",
      "I",
      "III"
    ],
    "answer": 2,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-37",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ],
    "answer": 2,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-38",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "III",
      "II",
      "I",
      "IV",
      "V"
    ],
    "answer": 3,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-39",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "V",
      "IV",
      "II",
      "I",
      "III"
    ],
    "answer": 1,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-40",
    "tacticSlug": "irrelevant-sentence",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "II",
      "III",
      "I",
      "IV",
      "V"
    ],
    "answer": 1,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-41",
    "tacticSlug": "irrelevant-sentence",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "I",
      "II",
      "V",
      "III",
      "IV"
    ],
    "answer": 4,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-42",
    "tacticSlug": "irrelevant-sentence",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "I",
      "V",
      "III",
      "IV",
      "II"
    ],
    "answer": 3,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-43",
    "tacticSlug": "irrelevant-sentence",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Coral reefs are among the most biologically diverse ecosystems on Earth, harboring thousands of fish species. (II) They provide natural coastal protection against destructive storm surges and tsunami waves. (III) Tropical rainforests also contain millions of undescribed insect species in their dense canopies. (IV) Furthermore, millions of coastal residents rely on reef fisheries for daily subsistence and income. (V) Preserving these fragile marine habitats is therefore crucial for global ecological stability.",
    "options": [
      "III",
      "V",
      "I",
      "IV",
      "II"
    ],
    "answer": 0,
    "explanation": "Paragraf mercan resiflerini anlatırken III. cümle tropikal yağmur ormanlarına geçerek akışı bozar.",
    "tactic": "Konu mercan resifleridir; yağmur ormanı araya giremez.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-44",
    "tacticSlug": "irrelevant-sentence",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) The printing press, invented by Johannes Gutenberg around 1440, transformed European society. (II) By allowing books to be mass-produced cheaply, it democratized literacy across social classes. (III) Scientific treatises and philosophical debates spread rapidly across the continent. (IV) Hand-carved wooden furniture was a prominent feature in wealthy merchant homes during the fifteenth century. (V) This technological revolution ultimately catalyzed both the Protestant Reformation and the Scientific Revolution.",
    "options": [
      "II",
      "IV",
      "I",
      "III",
      "V"
    ],
    "answer": 1,
    "explanation": "Matbaanın toplumsal ve bilimsel etkileri anlatılırken IV. cümle zengin evlerindeki ahşap mobilyalara geçmektedir.",
    "tactic": "Matbaa devrimi anlatılırken mobilya detayı ilgisizdir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-irrel-45",
    "tacticSlug": "irrelevant-sentence",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Paragrafta akışı bozan cümleyi bulunuz:\n\n(I) Electric bicycles have surged in popularity as an efficient urban transportation alternative. (II) They allow commuters to navigate congested city streets without sweating excessively. (III) By reducing car trips, e-bikes help lower urban greenhouse gas emissions and noise pollution. (IV) Commercial passenger jetliners consume thousands of gallons of kerosene fuel on trans-Atlantic flights. (V) Many municipal governments are expanding protected bike lanes to accommodate this growing cycling traffic.",
    "options": [
      "IV",
      "I",
      "V",
      "II",
      "III"
    ],
    "answer": 0,
    "explanation": "Şehir içi elektrikli bisikletler anlatılırken IV. cümle transatlantik uçakların yakıt tüketimine atlamıştır.",
    "tactic": "E-bike anlatılırken yolcu uçakları akışı bozar.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-1",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "How much funding are you requesting from the national research foundation",
      "Do you think the university will cancel all environmental science grants next year",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Are you planning to change your dissertation topic completely before Friday"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-2",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "We should transfer her immediately to the intensive care unit for close observation",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "Why did the laboratory technicians take four hours to deliver these test results"
    ],
    "answer": 1,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-3",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions"
    ],
    "answer": 2,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-4",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Are you planning to change your dissertation topic completely before Friday",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Do you think the university will cancel all environmental science grants next year",
      "Would you like me to proofread the draft before you submit it to the committee",
      "How much funding are you requesting from the national research foundation"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-5",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "We should transfer her immediately to the intensive care unit for close observation",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Why did the laboratory technicians take four hours to deliver these test results"
    ],
    "answer": 2,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-6",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Why don't we drive together in my car instead",
      "Did you book a luxury hotel room near the central train station",
      "Why do rail workers always demand higher wages during conference season",
      "How long does the train journey take under normal weather conditions",
      "Should we simply cancel our presentations and stay at home tomorrow"
    ],
    "answer": 0,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-7",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Do you think the university will cancel all environmental science grants next year",
      "How much funding are you requesting from the national research foundation",
      "Are you planning to change your dissertation topic completely before Friday",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Why didn't you finish the entire proposal two weeks ago like everyone else"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-8",
    "tacticSlug": "dialogue",
    "level": "A1",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "We should transfer her immediately to the intensive care unit for close observation"
    ],
    "answer": 1,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-9",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Why don't we drive together in my car instead",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions",
      "Did you book a luxury hotel room near the central train station",
      "Why do rail workers always demand higher wages during conference season"
    ],
    "answer": 0,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-10",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Are you planning to change your dissertation topic completely before Friday",
      "How much funding are you requesting from the national research foundation",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-11",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "We should transfer her immediately to the intensive care unit for close observation",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "I suspect she may have contracted a secondary hospital bacterial infection"
    ],
    "answer": 1,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-12",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "How long does the train journey take under normal weather conditions",
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead",
      "Should we simply cancel our presentations and stay at home tomorrow"
    ],
    "answer": 3,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-13",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "Are you planning to change your dissertation topic completely before Friday",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "How much funding are you requesting from the national research foundation",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-14",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "We should transfer her immediately to the intensive care unit for close observation"
    ],
    "answer": 1,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-15",
    "tacticSlug": "dialogue",
    "level": "A2",
    "difficulty": "Kolay",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "How long does the train journey take under normal weather conditions",
      "Did you book a luxury hotel room near the central train station",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "Why don't we drive together in my car instead",
      "Why do rail workers always demand higher wages during conference season"
    ],
    "answer": 3,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-16",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Do you think the university will cancel all environmental science grants next year",
      "Are you planning to change your dissertation topic completely before Friday",
      "Would you like me to proofread the draft before you submit it to the committee",
      "How much funding are you requesting from the national research foundation",
      "Why didn't you finish the entire proposal two weeks ago like everyone else"
    ],
    "answer": 2,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-17",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "Why did the laboratory technicians take four hours to deliver these test results",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "We should transfer her immediately to the intensive care unit for close observation",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "I suspect she may have contracted a secondary hospital bacterial infection"
    ],
    "answer": 3,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-18",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "How long does the train journey take under normal weather conditions",
      "Why do rail workers always demand higher wages during conference season",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead"
    ],
    "answer": 4,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-19",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "How much funding are you requesting from the national research foundation",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Are you planning to change your dissertation topic completely before Friday",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-20",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "We should transfer her immediately to the intensive care unit for close observation"
    ],
    "answer": 2,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-21",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions",
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead"
    ],
    "answer": 4,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-22",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Are you planning to change your dissertation topic completely before Friday",
      "How much funding are you requesting from the national research foundation",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-23",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "We should transfer her immediately to the intensive care unit for close observation",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Why did the laboratory technicians take four hours to deliver these test results"
    ],
    "answer": 0,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-24",
    "tacticSlug": "dialogue",
    "level": "B1",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Should we simply cancel our presentations and stay at home tomorrow",
      "Why don't we drive together in my car instead",
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "How long does the train journey take under normal weather conditions"
    ],
    "answer": 1,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-25",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "How much funding are you requesting from the national research foundation",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Are you planning to change your dissertation topic completely before Friday",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 1,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-26",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "We should transfer her immediately to the intensive care unit for close observation",
      "Why did the laboratory technicians take four hours to deliver these test results"
    ],
    "answer": 2,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-27",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Why don't we drive together in my car instead",
      "Why do rail workers always demand higher wages during conference season",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions",
      "Did you book a luxury hotel room near the central train station"
    ],
    "answer": 0,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-28",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "Do you think the university will cancel all environmental science grants next year",
      "How much funding are you requesting from the national research foundation",
      "Are you planning to change your dissertation topic completely before Friday",
      "Why didn't you finish the entire proposal two weeks ago like everyone else"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-29",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "We should transfer her immediately to the intensive care unit for close observation",
      "Why did the laboratory technicians take four hours to deliver these test results"
    ],
    "answer": 2,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-30",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "How long does the train journey take under normal weather conditions",
      "Why don't we drive together in my car instead",
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "Should we simply cancel our presentations and stay at home tomorrow"
    ],
    "answer": 1,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-31",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Do you think the university will cancel all environmental science grants next year",
      "How much funding are you requesting from the national research foundation",
      "Are you planning to change your dissertation topic completely before Friday"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-32",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "We should transfer her immediately to the intensive care unit for close observation",
      "I suspect she may have contracted a secondary hospital bacterial infection"
    ],
    "answer": 0,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-33",
    "tacticSlug": "dialogue",
    "level": "B2",
    "difficulty": "Orta",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "Why do rail workers always demand higher wages during conference season",
      "How long does the train journey take under normal weather conditions"
    ],
    "answer": 1,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-34",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Do you think the university will cancel all environmental science grants next year",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "How much funding are you requesting from the national research foundation",
      "Would you like me to proofread the draft before you submit it to the committee",
      "Are you planning to change your dissertation topic completely before Friday"
    ],
    "answer": 3,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-35",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "We should transfer her immediately to the intensive care unit for close observation"
    ],
    "answer": 0,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-36",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Did you book a luxury hotel room near the central train station",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions",
      "Why don't we drive together in my car instead",
      "Why do rail workers always demand higher wages during conference season"
    ],
    "answer": 3,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-37",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "Are you planning to change your dissertation topic completely before Friday",
      "How much funding are you requesting from the national research foundation",
      "Why didn't you finish the entire proposal two weeks ago like everyone else",
      "Do you think the university will cancel all environmental science grants next year"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-38",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "We should transfer her immediately to the intensive care unit for close observation"
    ],
    "answer": 0,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-39",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Why don't we drive together in my car instead",
      "Should we simply cancel our presentations and stay at home tomorrow",
      "Why do rail workers always demand higher wages during conference season",
      "How long does the train journey take under normal weather conditions",
      "Did you book a luxury hotel room near the central train station"
    ],
    "answer": 0,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-40",
    "tacticSlug": "dialogue",
    "level": "C1",
    "difficulty": "İleri",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "How much funding are you requesting from the national research foundation",
      "Are you planning to change your dissertation topic completely before Friday",
      "Do you think the university will cancel all environmental science grants next year",
      "Why didn't you finish the entire proposal two weeks ago like everyone else"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-41",
    "tacticSlug": "dialogue",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "I suspect she may have contracted a secondary hospital bacterial infection",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "We should transfer her immediately to the intensive care unit for close observation",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "In that case, we can safely discharge her from the hospital tomorrow morning"
    ],
    "answer": 4,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-42",
    "tacticSlug": "dialogue",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "How long does the train journey take under normal weather conditions",
      "Why don't we drive together in my car instead",
      "Did you book a luxury hotel room near the central train station",
      "Why do rail workers always demand higher wages during conference season",
      "Should we simply cancel our presentations and stay at home tomorrow"
    ],
    "answer": 1,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-43",
    "tacticSlug": "dialogue",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nSarah: Have you submitted your research proposal for the environmental grant?\nMark: Not yet. I'm still revising the methodology section on groundwater sampling.\nSarah: -------?\nMark: That would be incredibly helpful! Can you review the statistical modeling part as well?",
    "options": [
      "Would you like me to proofread the draft before you submit it to the committee",
      "Do you think the university will cancel all environmental science grants next year",
      "How much funding are you requesting from the national research foundation",
      "Are you planning to change your dissertation topic completely before Friday",
      "Why didn't you finish the entire proposal two weeks ago like everyone else"
    ],
    "answer": 0,
    "explanation": "Mark'ın cevabı: 'That would be incredibly helpful! Can you review the modeling part as well?' Sarah bir taslak inceleme/düzeltme teklifinde bulunmuştur.",
    "tactic": "Yardım teklifi -> Teşekkür.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-44",
    "tacticSlug": "dialogue",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nDr. Clark: The patient's postoperative blood tests look remarkably encouraging.\nNurse Watson: Yes, her inflammatory markers have dropped back to normal levels.\nDr. Clark: -------.\nNurse Watson: I will prepare the discharge paperwork and schedule a follow-up consultation for next Tuesday.",
    "options": [
      "In that case, we can safely discharge her from the hospital tomorrow morning",
      "Unfortunately, we must prepare the operating room for another emergency surgery",
      "Why did the laboratory technicians take four hours to deliver these test results",
      "We should transfer her immediately to the intensive care unit for close observation",
      "I suspect she may have contracted a secondary hospital bacterial infection"
    ],
    "answer": 0,
    "explanation": "Hemşire taburcu evraklarını hazırlayacağını söylediğine göre doktor 'Yarın sabah güvenle taburcu edebiliriz' demiştir.",
    "tactic": "Sonraki yanıt eylemi taburcu etmektir.",
    "isImportant": false
  },
  {
    "id": "tq-extra-dial-45",
    "tacticSlug": "dialogue",
    "level": "C2",
    "difficulty": "YDS",
    "stem": "Diyalogda boş bırakılan yere uygun düşen ifadeyi bulunuz:\n\nAlex: Are you taking the express train to the capital for the conference tomorrow?\nBrian: I was planning to, but the rail workers just announced a 24-hour strike.\nAlex: -------?\nBrian: That's a great idea. We can split the gasoline expenses and take turns driving.",
    "options": [
      "Should we simply cancel our presentations and stay at home tomorrow",
      "How long does the train journey take under normal weather conditions",
      "Why do rail workers always demand higher wages during conference season",
      "Did you book a luxury hotel room near the central train station",
      "Why don't we drive together in my car instead"
    ],
    "answer": 4,
    "explanation": "Brian'ın cevabı: 'Benzin masrafını bölüşürüz ve sırayla süreriz'. Alex arabayla birlikte gitmeyi önermiştir.",
    "tactic": "Ortak araba teklifi -> Masraf bölüşme kabulü.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-1",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "immediately improved the physical health and nutritional quality of human diets",
      "enabled human populations to establish permanent settlements and specialized professions",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 1,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-2",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "were completely free from repetitive strain injuries associated with manual labor",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "refused to consume domesticated livestock meat due to spiritual taboos"
    ],
    "answer": 1,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-3",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution"
    ],
    "answer": 4,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-4",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "caused wild grain species like wheat and barley to become completely extinct",
      "immediately improved the physical health and nutritional quality of human diets",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 3,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-5",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "were completely free from repetitive strain injuries associated with manual labor",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "refused to consume domesticated livestock meat due to spiritual taboos"
    ],
    "answer": 2,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-6",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "prove that wheat domestication was an accidental historical catastrophe",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "criticize archaeologists for relying on skeletal evidence to study prehistory"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-7",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "immediately improved the physical health and nutritional quality of human diets",
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions"
    ],
    "answer": 4,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-8",
    "tacticSlug": "reading",
    "level": "A1",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "lived substantially longer and healthier lives than modern civilized citizens",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "were completely free from repetitive strain injuries associated with manual labor",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "possessed stronger bones and superior dental health compared to nomadic bands"
    ],
    "answer": 1,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-9",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "prove that wheat domestication was an accidental historical catastrophe",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "criticize archaeologists for relying on skeletal evidence to study prehistory"
    ],
    "answer": 1,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-10",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities",
      "immediately improved the physical health and nutritional quality of human diets",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions"
    ],
    "answer": 4,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-11",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "lived substantially longer and healthier lives than modern civilized citizens",
      "were completely free from repetitive strain injuries associated with manual labor",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands"
    ],
    "answer": 3,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-12",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "prove that wheat domestication was an accidental historical catastrophe",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "argue that humanity should abandon agriculture and return to nomadic foraging"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-13",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "prevented human populations from forming sedentary social communities",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "caused wild grain species like wheat and barley to become completely extinct",
      "enabled human populations to establish permanent settlements and specialized professions",
      "immediately improved the physical health and nutritional quality of human diets"
    ],
    "answer": 3,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-14",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "were completely free from repetitive strain injuries associated with manual labor"
    ],
    "answer": 0,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-15",
    "tacticSlug": "reading",
    "level": "A2",
    "difficulty": "Kolay",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "prove that wheat domestication was an accidental historical catastrophe",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution"
    ],
    "answer": 4,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-16",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "immediately improved the physical health and nutritional quality of human diets",
      "caused wild grain species like wheat and barley to become completely extinct",
      "enabled human populations to establish permanent settlements and specialized professions",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 3,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-17",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "were completely free from repetitive strain injuries associated with manual labor",
      "lived substantially longer and healthier lives than modern civilized citizens"
    ],
    "answer": 1,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-18",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "prove that wheat domestication was an accidental historical catastrophe",
      "criticize archaeologists for relying on skeletal evidence to study prehistory"
    ],
    "answer": 1,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-19",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "immediately improved the physical health and nutritional quality of human diets",
      "enabled human populations to establish permanent settlements and specialized professions",
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 2,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-20",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "were completely free from repetitive strain injuries associated with manual labor",
      "refused to consume domesticated livestock meat due to spiritual taboos"
    ],
    "answer": 1,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-21",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution"
    ],
    "answer": 4,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-22",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "immediately improved the physical health and nutritional quality of human diets",
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions"
    ],
    "answer": 4,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-23",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "were completely free from repetitive strain injuries associated with manual labor",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands"
    ],
    "answer": 3,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-24",
    "tacticSlug": "reading",
    "level": "B1",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "prove that wheat domestication was an accidental historical catastrophe",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "compare the hunting weapons used by Paleolithic bands across different continents"
    ],
    "answer": 1,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-25",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "caused wild grain species like wheat and barley to become completely extinct",
      "immediately improved the physical health and nutritional quality of human diets",
      "enabled human populations to establish permanent settlements and specialized professions",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 2,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-26",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "were completely free from repetitive strain injuries associated with manual labor",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers"
    ],
    "answer": 4,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-27",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "prove that wheat domestication was an accidental historical catastrophe"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-28",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "enabled human populations to establish permanent settlements and specialized professions",
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities",
      "immediately improved the physical health and nutritional quality of human diets",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases"
    ],
    "answer": 0,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-29",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "were completely free from repetitive strain injuries associated with manual labor",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "lived substantially longer and healthier lives than modern civilized citizens"
    ],
    "answer": 0,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-30",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe",
      "argue that humanity should abandon agriculture and return to nomadic foraging"
    ],
    "answer": 0,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-31",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "prevented human populations from forming sedentary social communities",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "caused wild grain species like wheat and barley to become completely extinct",
      "enabled human populations to establish permanent settlements and specialized professions",
      "immediately improved the physical health and nutritional quality of human diets"
    ],
    "answer": 3,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-32",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "lived substantially longer and healthier lives than modern civilized citizens",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "were completely free from repetitive strain injuries associated with manual labor",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers"
    ],
    "answer": 4,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-33",
    "tacticSlug": "reading",
    "level": "B2",
    "difficulty": "Orta",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe"
    ],
    "answer": 1,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-34",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "caused wild grain species like wheat and barley to become completely extinct",
      "prevented human populations from forming sedentary social communities",
      "immediately improved the physical health and nutritional quality of human diets",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions"
    ],
    "answer": 4,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-35",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "were completely free from repetitive strain injuries associated with manual labor",
      "possessed stronger bones and superior dental health compared to nomadic bands"
    ],
    "answer": 0,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-36",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "argue that humanity should abandon agriculture and return to nomadic foraging"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-37",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "immediately improved the physical health and nutritional quality of human diets",
      "caused wild grain species like wheat and barley to become completely extinct",
      "enabled human populations to establish permanent settlements and specialized professions",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 2,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-38",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "lived substantially longer and healthier lives than modern civilized citizens",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "were completely free from repetitive strain injuries associated with manual labor"
    ],
    "answer": 0,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-39",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "prove that wheat domestication was an accidental historical catastrophe",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution"
    ],
    "answer": 4,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-40",
    "tacticSlug": "reading",
    "level": "C1",
    "difficulty": "İleri",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "enabled human populations to establish permanent settlements and specialized professions",
      "prevented human populations from forming sedentary social communities",
      "caused wild grain species like wheat and barley to become completely extinct",
      "immediately improved the physical health and nutritional quality of human diets"
    ],
    "answer": 1,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-41",
    "tacticSlug": "reading",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers",
      "were completely free from repetitive strain injuries associated with manual labor",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "lived substantially longer and healthier lives than modern civilized citizens"
    ],
    "answer": 1,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-42",
    "tacticSlug": "reading",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "criticize archaeologists for relying on skeletal evidence to study prehistory",
      "prove that wheat domestication was an accidental historical catastrophe",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "compare the hunting weapons used by Paleolithic bands across different continents"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-43",
    "tacticSlug": "reading",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "It can be understood from the passage that the transition to agriculture -------.",
    "options": [
      "immediately improved the physical health and nutritional quality of human diets",
      "caused wild grain species like wheat and barley to become completely extinct",
      "enabled human populations to establish permanent settlements and specialized professions",
      "guaranteed that hunter-gatherer bands survived without any infectious diseases",
      "prevented human populations from forming sedentary social communities"
    ],
    "answer": 2,
    "explanation": "Paragrafta tarımın yerleşik hayata (permanent villages) ve uzmanlaşmış iş kollarına (specialized labor divisions) yol açtığı belirtilir.",
    "tactic": "Doğrudan çıkarım.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-44",
    "tacticSlug": "reading",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "According to the passage, skeletal analyses indicate that early farmers -------.",
    "options": [
      "lived substantially longer and healthier lives than modern civilized citizens",
      "possessed stronger bones and superior dental health compared to nomadic bands",
      "were completely free from repetitive strain injuries associated with manual labor",
      "refused to consume domesticated livestock meat due to spiritual taboos",
      "frequently experienced greater nutritional deficiencies and epidemics than hunter-gatherers"
    ],
    "answer": 4,
    "explanation": "Son cümlede erken çiftçilerin avcı-toplayıcılara göre daha fazla yetersiz beslenme (malnutrition) ve salgın hastalık çektiği söylenmiştir.",
    "tactic": "Son cümle analizi.",
    "isImportant": false
  },
  {
    "id": "tq-extra-read-45",
    "tacticSlug": "reading",
    "level": "C2",
    "difficulty": "YDS",
    "passage": "The development of agriculture approximately 10,000 years ago during the Neolithic Revolution triggered unprecedented shifts in human demographics. By domesticating wild wheat, barley, and cattle, human groups transitioned from nomadic hunter-gatherer bands to sedentary farming communities. This reliable food surplus enabled population density to multiply, leading directly to the emergence of permanent villages, specialized labor divisions, and ultimately the earliest literate civilizations. However, osteological analyses of early farmer skeletons reveal that agriculturalists often suffered from higher rates of malnutrition, repetitive strain injuries, and infectious epidemics than their hunter-gatherer forebears.",
    "stem": "The author's primary focus in this passage is to -------.",
    "options": [
      "compare the hunting weapons used by Paleolithic bands across different continents",
      "prove that wheat domestication was an accidental historical catastrophe",
      "argue that humanity should abandon agriculture and return to nomadic foraging",
      "outline both the monumental civilizational advances and physical drawbacks of the Neolithic Revolution",
      "criticize archaeologists for relying on skeletal evidence to study prehistory"
    ],
    "answer": 3,
    "explanation": "Metin hem tarımın getirdiği medeniyet atılımlarını hem de getirdiği sağlık ve beslenme zorluklarını dengeli anlatmaktadır.",
    "tactic": "Ana fikir tespiti.",
    "isImportant": false
  }
];

export const ALL_TACTIC_QUESTIONS: TacticQuestion[] = [
  ...IMPORTANT_TACTIC_QUESTIONS,
  ...EXTRA_TACTIC_QUESTIONS,
];

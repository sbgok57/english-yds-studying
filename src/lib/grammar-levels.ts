// CEFR A1–C2 Gramer Seviye Rehberi
// Her gramer konusu için tam 6 seviye (A1, A2, B1, B2, C1, C2)
// Yapı: Seviye başlığı, nokta açıklaması, İngilizce örnek, Türkçe çeviri, hafıza kodu, taktik

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const LEVEL_COLORS: Record<CefrLevel, string> = {
  A1: "from-emerald-500 to-teal-600",
  A2: "from-teal-500 to-cyan-600",
  B1: "from-cyan-500 to-blue-600",
  B2: "from-blue-600 to-indigo-600",
  C1: "from-purple-600 to-fuchsia-600",
  C2: "from-pink-600 to-rose-600",
};

export interface GrammarLevelBlock {
  level: CefrLevel;
  title: string;
  emoji: string;
  point: string;
  example: string;
  exampleTr: string;
  code: string;
  tactic: string;
}

export const GRAMMAR_LEVELS: Record<string, GrammarLevelBlock[]> = {
  "tenses": [
    {
      "level": "A1",
      "title": "Geniş Zaman & Şimdiki Zaman (Rutinler ve Anlık Eylemler)",
      "emoji": "🌱",
      "point": "Simple Present (V1/V-s) genel doğrular, bilimsel gerçekler ve alışkanlıklar için kullanılır. Present Continuous (am/is/are + Ving) ise konuşma anında devam eden olayları belirtir.",
      "example": "Water boils at 100°C, but right now the kettle is whistling on the stove.",
      "exampleTr": "Su 100 derecede kaynar, ancak şu an ocaktaki çaydanlık ötüyor.",
      "code": "Sürekli tekrar = V1 | Tam şu an = be + Ving",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (he/she/it öznesinde -s takısını ara)."
    },
    {
      "level": "A2",
      "title": "Geçmiş Zaman & Gelecek (will vs be going to)",
      "emoji": "🌿",
      "point": "Simple Past (V2) bitmiş geçmiş olayları anlatır. Gelecekte ise will anlık kararlar, söz verme ve kanıtsız tahminlerde; be going to ise önceden planlanmış niyet ve gözle görülür kanıtlarda kullanılır.",
      "example": "Look at those dark clouds; it is going to rain. Don't worry, I will lend you my umbrella.",
      "exampleTr": "Şu kara bulutlara bak; yağmur yağacak. Merak etme, sana şemsiyemi ödünç vereceğim.",
      "code": "Gözle kanıt = going to | Anlık karar & teklif = will",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (belirgin kanıt veya önceden niyet varsa going to, anlık sözde will seç)."
    },
    {
      "level": "B1",
      "title": "Present Perfect & Süreç Zamanları (since & for)",
      "emoji": "🌳",
      "point": "Present Perfect (have/has + V3) geçmişte başlayıp etkisi süren veya zamanı belirtilmemiş olayları anlatır. since başlangıç noktasını (+ Past), for ise geçen süreyi (+ Süre) belirtir.",
      "example": "She has lived in Ankara since she graduated from university in 2018.",
      "exampleTr": "2018'de üniversiteden mezun olduğundan beri Ankara'da yaşıyor.",
      "code": "Başlangıç noktası = SINCE + V2 | Süre = FOR + time",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (since'li yan cümle V2 ise ana cümle have/has V3 ister)."
    },
    {
      "level": "B2",
      "title": "Past Perfect & Future Continuous (Öncelik & Gelecekte Süreç)",
      "emoji": "🎯",
      "point": "Past Perfect (had + V3) geçmişteki iki olaydan daha önce olanını gösterir. Future Continuous (will be + Ving) ise gelecekte belirli bir anda sürüyor olacak eylemleri anlatır; tek başına saat ifadesi bu zamanı zorunlu kılmaz.",
      "example": "By the time the fire brigade arrived, the neighbors had already put out the fire.",
      "exampleTr": "İtfaiye vardığında, komşular yangını çoktan söndürmüştü.",
      "code": "By the time + V2 -> had V3 | Gelecekte süreç = will be Ving",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (geçmişteki iki eylemin kronolojik sırasını had V3 ile kur)."
    },
    {
      "level": "C1",
      "title": "Future Perfect & Karma Zaman Uyumu (by + Gelecek)",
      "emoji": "💎",
      "point": "Future Perfect (will have + V3) gelecekte belirli bir sınırdan önce bitmiş olacak eylemleri anlatır. by 2030 veya by next month ifadeleri bu yapıyı tetikler.",
      "example": "By the end of this century, humanity will have depleted most fossil fuel reserves.",
      "exampleTr": "Bu yüzyılın sonuna kadar, insanlık fosil yakıt rezervlerinin çoğunu tüketmiş olacaktır.",
      "code": "By + Gelecek Tarih = will have + V3",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (by the time + Present simple gelirse ana cümlede will have V3 ara)."
    },
    {
      "level": "C2",
      "title": "Zaman Uyumu İstisnaları & Koşullu Gelecek (will in if-clauses)",
      "emoji": "👑",
      "point": "Normalde zaman/koşul yan cümlelerinde will yer almaz; ancak istek, rica, ısrar ve inatlaşma bağlamlarında if veya when yan cümlelerinde will kullanımı geçerlidir.",
      "example": "If the patient will not cooperate with the medical staff, recovery will be severely delayed.",
      "exampleTr": "Eğer hasta sağlık personeliyle iş birliği yapmamakta ısrar ederse, iyileşme ciddi şekilde gecikecektir.",
      "code": "İnat / Rica yan cümlesinde = if + will",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (ısrar/rica vurgusunu tespit et)."
    }
  ],
  "passive-voice": [
    {
      "level": "A1",
      "title": "Basit Edilgen Yapı (Simple Present & Past Passive)",
      "emoji": "🌱",
      "point": "Eylemi yapan değil, eylemden etkilenen nesne öne çıkar. Formül: BE (am/is/are/was/were) + V3.",
      "example": "The classroom is cleaned every afternoon by the janitor.",
      "exampleTr": "Sınıf her öğleden sonra hademe tarafından temizlenir.",
      "code": "Özne işi yapamazsa = BE + V3",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (öznenin canlı/cansız durumunu değerlendir)."
    },
    {
      "level": "A2",
      "title": "Süren & Kip Edilgeni (Continuous & Modal Passives)",
      "emoji": "🌿",
      "point": "Devam eden eylemlerde being (is being painted), kiplerde ise modal + be + V3 (can be recycled) kullanılır.",
      "example": "Plastic waste can be recycled into useful building materials.",
      "exampleTr": "Plastik atıklar kullanışlı inşaat malzemelerine dönüştürülebilir.",
      "code": "Şu an yapılıyor = is being V3 | Modal edilgen = modal + be V3",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (modal veya continuous ipuçlarını edilgen çatıyla eşle)."
    },
    {
      "level": "B1",
      "title": "Tamamlanmış Edilgen (Present & Past Perfect Passive)",
      "emoji": "🌳",
      "point": "Bitmiş ve etkisi süren veya geçmişte öncelikli eylemlerde been araya girer: have/has been + V3, had been + V3.",
      "example": "The historical treaty had been signed before the boundary conflict erupted.",
      "exampleTr": "Tarihî antlaşma, sınır çatışması patlak vermeden önce imzalanmıştı.",
      "code": "Öncelikli edilgen = had been + V3",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (öncelik veya etki devamı bildiren zaman bağlaçlarına bak)."
    },
    {
      "level": "B2",
      "title": "Çift Nesneli Fiillerin Edilgeni (give, teach, send)",
      "emoji": "🎯",
      "point": "Dolaylı nesne (kişi) özne konumuna alınarak edilgen cümle kurulması dilde daha akıcıdır: He was awarded the Nobel Prize.",
      "example": "The students were given detailed guidelines on academic integrity.",
      "exampleTr": "Öğrencilere akademik dürüstlük konusunda ayrıntılı yönergeler verildi.",
      "code": "Kişi başa gelir = He was awarded / She was given",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (nesnesi eksik geçişli fiilde edilgen ara)."
    },
    {
      "level": "C1",
      "title": "Kişisel Olmayan Edilgen & Aktarımlar (It is said / He is said to)",
      "emoji": "💎",
      "point": "Ortak kanı, bilimsel iddia veya söylenti bildirimlerinde It is believed that... veya He is believed to have V3 kalıbı kullanılır.",
      "example": "The manuscript is believed to have been written during the Byzantine era.",
      "exampleTr": "El yazmasının Bizans döneminde yazılmış olduğuna inanılmaktadır.",
      "code": "Geçmişe edilgen aktarım = is believed TO HAVE BEEN V3",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (ana fiil Present, aktarılan olay Past ise to have been V3 seç)."
    },
    {
      "level": "C2",
      "title": "Edatlı Fiil Edilgenleri (Prepositional Passives)",
      "emoji": "👑",
      "point": "Öbek fiiller ve edatlı eylemler edilgen yapılırken edat fiilin arkasında kalır: The matter must be accounted for.",
      "example": "Every expenditure made during the project must be accounted for by the finance team.",
      "exampleTr": "Proje sırasında yapılan her harcamanın hesabı finans ekibi tarafından verilmelidir.",
      "code": "Edat sonda kalır = accounted FOR / looked AFTER",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (fiilin ayrılmaz edatını eksiltme)."
    }
  ],
  "modals": [
    {
      "level": "A1",
      "title": "Yetenek ve Temel İzin (can / can't / must)",
      "emoji": "🌱",
      "point": "can yetenek ve genel olasılık, can't imkansızlık veya yasak, must ise konuşmacıdan gelen güçlü zorunluluk bildirir.",
      "example": "Visitors must wear protective helmets inside the construction site.",
      "exampleTr": "Ziyaretçiler inşaat sahası içinde koruyucu kask takmalıdır.",
      "code": "Yetenek = can | Güçlü kural = must + V1",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (modal sonrası fiil her zaman yalın V1 gelir)."
    },
    {
      "level": "A2",
      "title": "Tavsiye & Dış Zorunluluk (should vs have to)",
      "emoji": "🌿",
      "point": "should tavsiye ve öğüt verir; have to ise kanun, kural gibi dış kaynaklı zorunlulukları anlatır. don't have to zorunluluk yokluğunu (gerek yok) ifade eder.",
      "example": "You don't have to attend the lecture in person; it is streamed online.",
      "exampleTr": "Derse bizzat katılmak zorunda değilsin; çevrim içi yayınlanıyor.",
      "code": "Tavsiye = should | Dış kural = have to | Zorunluluk yok = don't have to",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (gerek yok anlamında needn't / don't have to ara; mustn't yasak bildirir)."
    },
    {
      "level": "B1",
      "title": "Çıkarım ve Olasılık Kipleri (must be vs may/might be)",
      "emoji": "🌳",
      "point": "Şimdiki zamana dair güçlü kanıtlı çıkarımda must be (olmalı), imkansızlıkta can't be (olamaz), zayıf olasılıkta may/might/could kullanılır.",
      "example": "The lights are off and no one answers the bell; they must be out.",
      "exampleTr": "Işıklar sönük ve kimse zile bakmıyor; dışarıda olmalılar.",
      "code": "%90 kesin doğru = must be | %90 imkansız = can't be | %50 = may/might",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (kanıt varsa must be, kesin imkansızlıkta can't be seç)."
    },
    {
      "level": "B2",
      "title": "Geçmiş Çıkarım & Pişmanlık (Perfect Modals)",
      "emoji": "🎯",
      "point": "must have V3 = yapmış olmalı (güçlü çıkarım); can't/couldn't have V3 = yapmış olamaz; should have V3 = yapmalıydı ama yapmadı; needn't have V3 = gerek yoktu ama yaptı.",
      "example": "You needn't have brought your umbrella; the forecast says it will be sunny all day.",
      "exampleTr": "Şemsiyeni getirmene hiç gerek yoktu; tahminler bütün gün güneşli olacağını söylüyor.",
      "code": "Boşuna zahmet = needn't have V3 | Pişmanlık = should have V3",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (geçmiş bağlamında modal + have + V3 ara)."
    },
    {
      "level": "C1",
      "title": "Kaçan Fırsat & Geçmiş Süreç (could have vs must have been Ving)",
      "emoji": "💎",
      "point": "could have V3 bağlama göre hem geçmiş zayıf olasılık hem de gerçekleşmemiş fırsat anlatır (yapabilirdi ama yapmadı). must have been Ving ise geçmişte süren güçlü çıkarımdır.",
      "example": "The driver must have been speeding when the vehicle skidded on the wet tarmac.",
      "exampleTr": "Araç ıslak asfaltta kaydığında sürücü aşırı hız yapıyor olmalıydı.",
      "code": "Geçmişte eylem sürüyordu = must have been Ving | Fırsat kaçtı = could have V3",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (fırsatın kullanılmadığı ima ediliyorsa could have V3 seç)."
    },
    {
      "level": "C2",
      "title": "Resmî Kipler & Koşulsuz Emirler (shall, lest + should)",
      "emoji": "👑",
      "point": "Resmî sözleşmelerde shall bağlayıcı yükümlülük bildirir (shall pay). lest bağlacı arkasından -mesin diye anlamında yalın fiil veya should + V1 alır.",
      "example": "The contractor shall complete all civil works within eighteen calendar months.",
      "exampleTr": "Yüklenici, tüm inşaat işlerini on sekiz takvim ayı içinde tamamlayacaktır.",
      "code": "Yasal zorunluluk = shall + V1 | Korkusuyla = lest + should",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (resmî metinlerde shall zorunluluktur)."
    }
  ],
  "conditionals": [
    {
      "level": "A1",
      "title": "Zero & First Conditional (Genel Doğrular ve Gelecek Olasılık)",
      "emoji": "🌱",
      "point": "Type 0 bilimsel kurallarda (If you heat ice, it melts). Type 1 ise gelecekteki gerçekçi olasılıklarda kullanılır (If it rains, we will stay home).",
      "example": "If you study regularly, you will achieve your target score on the exam.",
      "exampleTr": "Düzenli çalışırsan, sınavda hedeflediğin puana ulaşırsın.",
      "code": "Genel gerçek = If V1, V1 | Gelecek şart = If V1, will V1",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (if cümlesinde will kullanılmaz)."
    },
    {
      "level": "A2",
      "title": "Second Conditional (Hayali Şimdiki Zaman & Tavsiye)",
      "emoji": "🌿",
      "point": "Şimdiki zaman veya geleceğe dair gerçek dışı durumlarda Type 2 kullanılır: If + V2 (were), would + V1. Tavsiye kalıbı: If I were you, I would...",
      "example": "If I were in your shoes, I would accept that international fellowship immediately.",
      "exampleTr": "Senin yerinde olsaydım, o uluslararası bursu derhal kabul ederdim.",
      "code": "Yerinde olsam = If I were you, I would + V1",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (tüm öznelerde was yerine were akademik olarak tercih edilir)."
    },
    {
      "level": "B1",
      "title": "Third Conditional & Wish Clauses (Geçmiş Pişmanlıklar)",
      "emoji": "🌳",
      "point": "Geçmişte yaşanmış bitmiş olayların tersini kurgularken Type 3 kullanılır: If + had V3, would have + V3. I wish + had V3 geçmiş pişmanlık bildirir.",
      "example": "If they had taken the meteorological warnings seriously, the ship wouldn't have sailed.",
      "exampleTr": "Meteorolojik uyarıları ciddiye almış olsalardı, gemi denize açılmazdı.",
      "code": "Geçmiş pişmanlık = If had V3, would have V3",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (geçmiş bir olay anlatılıyorsa had V3 / would have V3 eşleşmesini ara)."
    },
    {
      "level": "B2",
      "title": "Mixed Conditionals (Zamanlar Arası Çapraz Koşul)",
      "emoji": "🎯",
      "point": "Geçmişteki eylemin sonucu şu anı etkiliyorsa (If had V3, would V1 today); genel karakterin sonucu geçmişi etkiliyorsa (If were, would have V3) kullanılır.",
      "example": "If she hadn't injured her knee last year, she would be competing in the Olympics today.",
      "exampleTr": "Geçen yıl dizini sakatlamamış olsaydı, bugün olimpiyatlarda yarışıyor olurdu.",
      "code": "Geçmiş sebep + Bugün sonuç = If had V3, would V1 today",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (cümle sonundaki today/now ipucuna dikkat et)."
    },
    {
      "level": "C1",
      "title": "Alternatif Koşul Bağlaçları (provided that, as long as, unless)",
      "emoji": "💎",
      "point": "provided that / as long as = şartıyla; unless = if not (-medikçe; arkasından olumsuz cümle almaz); in case = ihtimaline karşı önlem.",
      "example": "You can borrow the laboratory equipment provided that you return it undamaged.",
      "exampleTr": "Hasarsız olarak iade etmeniz şartıyla laboratuvar ekipmanını ödünç alabilirsiniz.",
      "code": "Şartıyla = provided that | Olmadıkça = unless (ikinci NOT yok)",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (unless olan yan cümlede not kullanılmaz)."
    },
    {
      "level": "C2",
      "title": "Devrik Koşul Cümleleri (Inverted Conditionals)",
      "emoji": "👑",
      "point": "If atılarak devrik yapı kurulur: Type 1 -> Should you need; Type 2 -> Were I you / Were they to fail; Type 3 -> Had we known.",
      "example": "Had the government anticipated the financial crisis, they might have introduced austerity measures sooner.",
      "exampleTr": "Hükümet finansal krizi öngörmüş olsaydı, kemer sıkma önlemlerini daha önce uygulamaya koyabilirdi.",
      "code": "If gitti = Had + S + V3 | Should + S + V1 | Were + S + to V1",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (cümle başında Had/Should/Were görünce devrik koşulu tanı)."
    }
  ],
  "relative-clauses": [
    {
      "level": "A1",
      "title": "Temel Sıfat Cümlecikleri (who / which / that)",
      "emoji": "🌱",
      "point": "İnsanlar için who/that, nesneler ve hayvanlar için which/that kullanılır. Tanımlanan ismin hemen arkasına gelir.",
      "example": "The professor who teaches modern linguistics is very popular among students.",
      "exampleTr": "Modern dilbilim dersi veren profesör, öğrenciler arasında çok popülerdir.",
      "code": "İnsan = WHO | Eşya = WHICH | Her ikisi = THAT",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (boşluktan önceki ismin insan mı nesne mi olduğuna bak)."
    },
    {
      "level": "A2",
      "title": "Sahiplik ve Nesne Zamirleri (whose & whom)",
      "emoji": "🌿",
      "point": "whose arkasından yalın isim alır ve sahiplik bildirir (whose car). whom ise sadece insan nesne konumundayken kullanılır ve önüne edat gelebilir (to whom).",
      "example": "The author whose latest novel won the prestigious award gave a lecture yesterday.",
      "exampleTr": "Son romanı prestijli ödülü kazanan yazar dün bir konferans verdi.",
      "code": "İsim + WHOSE + İsim (sahiplik bağı)",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (boşluğun her iki tarafında isim varsa whose seçeneğini test et)."
    },
    {
      "level": "B1",
      "title": "Yer ve Zaman Niteleyicileri (where & when vs which)",
      "emoji": "🌳",
      "point": "where ve when yan cümlede tam cümle ister. Eğer yer ismi nesne konumundaysa veya edat cümlenin sonundaysa where değil which kullanılır.",
      "example": "The laboratory where the vaccines were formulated is equipped with cutting-edge technology.",
      "exampleTr": "Aşıların formüle edildiği laboratuvar, son teknolojiyle donatılmıştır.",
      "code": "Orada bir olay yapıldı = WHERE | Mekanın kendisi anlatıldı = WHICH",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (where sonrası öznesi tam cümle gelir; which sonrası fiille başlayabilir)."
    },
    {
      "level": "B2",
      "title": "Virgüllü Ek Bilgi & Cümleyi Niteleyen Which (Non-defining)",
      "emoji": "🎯",
      "point": "Virgülle ayrılan ek bilgi cümlelerinde that ASLA kullanılmaz. which, virgül sonrasında tüm cümlenin sonucunu niteleyebilir (which surprised everyone).",
      "example": "The candidate refused to participate in the televised debate, which angered the voters.",
      "exampleTr": "Aday, televizyondaki münazaraya katılmayı reddetti; bu durum seçmenleri öfkelendirdi.",
      "code": "Virgül arkasından THAT gelmez! | Bütün cümlenin sonucu = , which",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (virgül gördüğün anda that şıkkını hemen ele)."
    },
    {
      "level": "C1",
      "title": "Edatlı Sıfat Cümlecikleri & Miktar İfadeleri (of which / of whom)",
      "emoji": "💎",
      "point": "many of which, all of whom, in which, by means of which gibi yapılar akademik dilde yaygındır.",
      "example": "The university library contains over fifty thousand manuscripts, many of which date back to antiquity.",
      "exampleTr": "Üniversite kütüphanesi, birçoğu antik döneme dayanan elli binden fazla el yazması içerir.",
      "code": "Miktar + OF WHOM (insan) | OF WHICH (nesne)",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (virgül + miktar sözcüğü arkasından of which / of whom ara)."
    },
    {
      "level": "C2",
      "title": "Sıfat Cümlesi Kısaltmaları & Bağımsız Yapılar (Reduced Relatives)",
      "emoji": "👑",
      "point": "who/which atılarak etken eylem Ving, edilgen eylem V3 yapılır: The team working on the cure / The cure discovered by science.",
      "example": "The delegates representing twenty nations convened to deliberate on carbon emissions.",
      "exampleTr": "Yirmi ülkeyi temsil eden delegeler, karbon emisyonlarını müzakere etmek üzere toplandı.",
      "code": "Aktif kısaltma = Ving | Pasif kısaltma = V3",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (bağlaçsız fiil formu geldiğinde kısaltmayı tespit et)."
    }
  ],
  "noun-clauses": [
    {
      "level": "A1",
      "title": "Temel Nesne Cümlecikleri (that-clauses)",
      "emoji": "🌱",
      "point": "Fiilden sonra tam bir cümleyi nesne yapmak için that kullanılır: I know that..., She believes that...",
      "example": "Historians agree that ancient trade routes facilitated cultural exchange.",
      "exampleTr": "Tarihçiler, antik ticaret yollarının kültürel etkileşimi kolaylaştırdığı konusunda hemfikirdir.",
      "code": "Düşünce/Bilgi bildiren fiil + THAT + Tam Cümle",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (that arkasından eksiksiz bir cümle gelmelidir)."
    },
    {
      "level": "A2",
      "title": "Soru Kelimeli İsim Cümlecikleri (Wh- + Düz Cümle)",
      "emoji": "🌿",
      "point": "Soru kelimeleri isim cümleciği olduğunda soru sırası değil, ÖZNE + FİİL düz cümle sırası kullanılır: I wonder where he lives (does he live değil).",
      "example": "The authorities are still investigating how the confidential data was leaked.",
      "exampleTr": "Yetkililer, gizli verilerin nasıl sızdırıldığını hâlâ araştırmaktadır.",
      "code": "Soru kelimesi + ÖZNE + FİİL (asla soru devriği yapma)",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (noun clause içinde did/does gibi soru yardımcı fiillerini ele)."
    },
    {
      "level": "B1",
      "title": "Dolaylı Anlatım Temelleri & Backshift (say vs tell)",
      "emoji": "🌳",
      "point": "tell bir nesne ister (told me); say nesne almaz (said that). Aktarma fiili geçmişteyse zamanlar bir basamak geçmişe kayar (backshift).",
      "example": "The spokesperson announced that the company had achieved record profits that quarter.",
      "exampleTr": "Sözcü, şirketin o çeyrekte rekor kâr elde ettiğini duyurdu.",
      "code": "Told ME (nesne şart) | Said THAT | Geçmiş aktarma = 1 basamak Past",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (aktarma fiili Past ise yan cümledeki zaman uyumunu denetle)."
    },
    {
      "level": "B2",
      "title": "Evet/Hayır ve Emir Aktarımı (whether / if & tell to V1)",
      "emoji": "🎯",
      "point": "Evet/hayır soruları whether veya if ile aktarılır. Edat sonrası sadece whether kullanılır. Emir ve ricalar tell/ask someone TO V1 ile aktarılır.",
      "example": "The committee debated whether the proposed budget should be approved without amendments.",
      "exampleTr": "Komite, önerilen bütçenin değişiklik yapılmadan onaylanıp onaylanmayacağını tartıştı.",
      "code": "Edat arkasından IF gelmez -> sadece WHETHER gelir",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (edat sonrasındaki boşlukta if şıkkını hemen ele)."
    },
    {
      "level": "C1",
      "title": "Backshift İstisnaları & Zaman Belirteçleri Değişimi",
      "emoji": "💎",
      "point": "Aktarma fiili şimdiki zamandaysa (He says) veya evrensel bir bilimsel gerçek aktarılıyorsa zaman geçmişe kaydırılmaz. tomorrow -> the next day; ago -> before olur.",
      "example": "The astronomer explained that light from the sun takes approximately eight minutes to reach Earth.",
      "exampleTr": "Gökbilimci, güneş ışığının Dünya'ya ulaşmasının yaklaşık sekiz dakika sürdüğünü açıkladı.",
      "code": "Evrensel Bilimsel Doğru = Her zaman Present kalır",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (bilimsel gerçek aktarılırken Past tenselere düşme)."
    },
    {
      "level": "C2",
      "title": "İstek Kipi Cümlecikleri (Subjunctive Noun Clauses)",
      "emoji": "👑",
      "point": "demand, suggest, recommend, vital, crucial gibi yapılardan sonra gelen that cümleciğinde fiil tüm şahıslar için yalın V1 kalır: I suggest that he BE present.",
      "example": "It is imperative that every participant submit their final dissertation before the deadline.",
      "exampleTr": "Her katılımcının nihai tezini son teslim tarihinden önce sunması zorunludur.",
      "code": "Emir/Tavsiye fiili + that + Özne + YALIN FİİL (V1)",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (he/she gelse dahi -s takısı olmayan yalın V1 ara)."
    }
  ],
  "gerunds-infinitives": [
    {
      "level": "A1",
      "title": "Temel İsim-Fiil ve Mastar (enjoy doing vs want to do)",
      "emoji": "🌱",
      "point": "enjoy, avoid, finish gibi fiiller -ing (Gerund); want, decide, hope gibi fiiller to + V1 (Infinitive) alır.",
      "example": "He decided to study international relations because he enjoys analyzing diplomacy.",
      "exampleTr": "Diplomasiyi analiz etmekten keyif aldığı için uluslararası ilişkiler okumaya karar verdi.",
      "code": "want TO do | enjoy DOING",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (ana fiilin to mu yoksa -ing mi istediğini ezberden çek)."
    },
    {
      "level": "A2",
      "title": "Edat Arkası İsim-Fiil (Preposition + Ving)",
      "emoji": "🌿",
      "point": "İngilizcede istisnasız tüm edatlardan sonra fiil gelirse -ing takısı alır: interested in learning, good at solving.",
      "example": "The scientists succeeded in developing an affordable diagnostic test.",
      "exampleTr": "Bilim insanları, uygun maliyetli bir teşhis testi geliştirmeyi başardı.",
      "code": "Tüm EDATLAR (in, on, at, of, by, without) + V-ing",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (boşluğun solunda edat varsa doğrudan Ving şıkkına yönel)."
    },
    {
      "level": "B1",
      "title": "Anlam Değiştiren Fiiller (remember, stop, forget, regret)",
      "emoji": "🌳",
      "point": "remember/regret + Ving geçmişte yapılan işi anlatır; to + V1 ise gelecekte yapılması gereken görevi belirtir. stop to V1 durup yeni bir işe başlamaktır.",
      "example": "I distinctly remember locking the laboratory door before leaving the facility.",
      "exampleTr": "Tesisten ayrılmadan önce laboratuvar kapısını kilitlediğimi net bir şekilde hatırlıyorum.",
      "code": "Geçmiş anı = Ving | Gelecek görev = to V1",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (eylem yapılmış ve hatırlanıyor mu, yoksa bir görev mi tespit et)."
    },
    {
      "level": "B2",
      "title": "Edilgen ve Sürekli Biçimler (being done / to be done)",
      "emoji": "🎯",
      "point": "Edilgen gerund: being + V3 (hates being ignored); edilgen infinitive: to be + V3 (expects to be promoted).",
      "example": "The diplomat avoided being photographed during the informal meeting.",
      "exampleTr": "Diplomat, gayriresmî toplantı sırasında fotoğraflanmaktan kaçındı.",
      "code": "Edilgen gerund = being V3 | Edilgen infinitive = to be V3",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (eylemin pasif yapıldığını nesne eksikliğinden sına)."
    },
    {
      "level": "C1",
      "title": "Öncelik Bildiren Gerund & Infinitive (having V3 / to have V3)",
      "emoji": "💎",
      "point": "Ana fiilden daha önce gerçekleşmiş eylemi vurgulamak için having + V3 veya to have + V3 kullanılır: admits having lied, claims to have discovered.",
      "example": "The suspect denied having met the informant prior to the incident.",
      "exampleTr": "Şüpheli, olaydan önce muhbirle buluşmuş olduğunu reddetti.",
      "code": "Daha önce yapıldı = HAVING + V3 / TO HAVE + V3",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (öncelik belirteci varsa perfect gerund/infinitive ara)."
    },
    {
      "level": "C2",
      "title": "Yalın Fiil İstisnaları & to'nun Edat Olduğu Yapılar (Bare Infinitives)",
      "emoji": "👑",
      "point": "look forward to, be accustomed to, object to yapılarındaki to edattır ve arkasından -ing alır! let ve make etken çatıda yalın fiil alır.",
      "example": "The regulatory agency objected to approving the merger without stringent environmental safeguards.",
      "exampleTr": "Düzenleyici kurum, sıkı çevre güvenceleri olmaksızın birleşmenin onaylanmasına itiraz etti.",
      "code": "Object TO + Ving | Look forward TO + Ving (to burada edattır!)",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (to edat olan tuzak kalıpları ezberle)."
    }
  ],
  "participles": [
    {
      "level": "A1",
      "title": "-ed ve -ing Sıfatları (bored vs boring)",
      "emoji": "🌱",
      "point": "-ed eki hissi yaşayanı anlatır (bored = sıkılmış); -ing eki hissi vereni/kaynağı anlatır (boring = sıkıcı).",
      "example": "The fascinated tourists watched the eclipse with great enthusiasm.",
      "exampleTr": "Büyülenmiş turistler tutulmayı büyük bir coşkuyla izledi.",
      "code": "Hisseden = -ed | Hissettiren = -ing",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (öznenin duyguyu hisseden mi yaşatan mı olduğunu anla)."
    },
    {
      "level": "A2",
      "title": "Temel Sıfat Cümlesi Kısaltması (who is doing -> doing)",
      "emoji": "🌿",
      "point": "Etken sıfat cümleciklerinde zamir ve yardımcı fiil atılır, geriye Ving kalır: The boy standing there = The boy who is standing there.",
      "example": "Passengers travelling on flight 402 must proceed to gate 12 immediately.",
      "exampleTr": "402 sefer sayılı uçuşla seyahat eden yolcular derhal 12 numaralı kapıya gitmelidir.",
      "code": "Aktif yapan = İsim + V-ing",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (ismi niteleyen etken eylemde Ving seç)."
    },
    {
      "level": "B1",
      "title": "Pasif Cümle Kısaltması (which was done -> done)",
      "emoji": "🌳",
      "point": "Edilgen sıfat cümleciklerinde which/that ve be atılır, geriye doğrudan V3 kalır: The bridge built in 1920 = The bridge which was built.",
      "example": "Artifacts unearthed during the recent excavation will be exhibited at the national museum.",
      "exampleTr": "Son kazıda gün yüzüne çıkarılan eserler ulusal müzede sergilenecektir.",
      "code": "Pasif yapılan = İsim + V3",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (isimden sonra gelen fiil nesne almıyorsa V3 kısaltmasıdır)."
    },
    {
      "level": "B2",
      "title": "Zaman ve Sebep Yan Cümlesi Kısaltmaları (While/When + Ving)",
      "emoji": "🎯",
      "point": "Özneleri ortak iki cümlede bağlaç sonrası etken kısaltma Ving, edilgen kısaltma V3 ile yapılır: When asked, he refused to comment.",
      "example": "While examining the archival documents, the historian stumbled upon a forgotten treaty.",
      "exampleTr": "Arşiv belgelerini incelerken tarihçi unutulmuş bir antlaşmaya rastladı.",
      "code": "While/When + Ving (aktif) | When/Once + V3 (pasif)",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (kısaltılan yan cümlenin öznesi ile ana cümle öznesini mutlaka eşleştir)."
    },
    {
      "level": "C1",
      "title": "Öncelik Bildiren Kısaltmalar (Having + V3 & Having been + V3)",
      "emoji": "💎",
      "point": "Yan cümle ana cümleden daha önce tamamlanmışsa etken için Having + V3, edilgen için Having been + V3 kullanılır; having tek başına isimle de kullanılabilir (having breakfast).",
      "example": "Having completed their preliminary research, the engineers drafted the prototype blueprint.",
      "exampleTr": "Ön araştırmalarını tamamlamış olan mühendisler, prototip planını çizdiler.",
      "code": "Önce yaptı = Having + V3 | Önce yapıldı = Having been + V3",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (olayların kronolojik sırası varsa Having V3 ara)."
    },
    {
      "level": "C2",
      "title": "Askıda Kalan Özne Hatası & Bağımsız Partisipler (Absolute Constructions)",
      "emoji": "👑",
      "point": "Dangling participle hatası: Kısaltmanın mantıksal öznesi ile ana cümlenin öznesi uyuşmazsa anlatım bozukluğu oluşur. Farklı özneli bağımsız kısaltmalar: Weather permitting, we will hike.",
      "example": "The experimental drug having failed clinical trials, the pharmaceutical company halted production.",
      "exampleTr": "Deneysel ilacın klinik deneylerde başarısız olması üzerine ilaç şirketi üretimi durdurdu.",
      "code": "Kendi öznesi olan kısaltma = Özne + having V3 / Ving",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (virgülden önceki ifadenin kendi öznesi var mı yok mu denetle)."
    }
  ],
  "causatives": [
    {
      "level": "A1",
      "title": "Temel İzin ve Zorlama (make & let + nesne + V1)",
      "emoji": "🌱",
      "point": "make birine zorla yaptırmak (made me study); let ise izin vermek (let me go) anlamındadır. Her ikisi de şahıstan sonra YALIN fiil (V1) alır.",
      "example": "The strict instructor made all students rewrite their essays from scratch.",
      "exampleTr": "Katı eğitmen, tüm öğrencilere makalelerini baştan yazdırdı.",
      "code": "make / let + KİŞİ + V1 (to yok!)",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (make/let sonrasındaki kişi zamirinden sonra to'suz yalın fiil ara)."
    },
    {
      "level": "A2",
      "title": "İkna Etme ve Yardım (have vs get + kişi)",
      "emoji": "🌿",
      "point": "have someone DO something (rica/yetki ile yaptırmak); get someone TO DO something (ikna ederek yaptırmak). get araya to alır!",
      "example": "The manager got the technical team to work over the weekend to fix the server.",
      "exampleTr": "Müdür, sunucuyu onarmaları için teknik ekibi hafta sonu çalışmaya ikna etti.",
      "code": "have + KİŞİ + V1 | get + KİŞİ + TO V1",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (get varsa to V1, have varsa yalın V1 seç)."
    },
    {
      "level": "B1",
      "title": "Edilgen Ettirgen (have / get something done)",
      "emoji": "🌳",
      "point": "Bir işi başkasına, bir ustaya veya servise yaptırdığımızda araya nesne girer ve fiil V3 olur: have my car repaired, get the room painted.",
      "example": "We must have our solar panels inspected before the onset of winter.",
      "exampleTr": "Kış başlamadan önce güneş panellerimizi kontrol ettirmeliyiz.",
      "code": "have / get + NESNE + V3",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (aradaki kelime işi yapamayan bir nesneyse arkasından V3 gelir)."
    },
    {
      "level": "B2",
      "title": "Edilgen make Kalıbı (be made to do)",
      "emoji": "🎯",
      "point": "make etken çatıda yalın fiil alırken, pasif yapıldığında to geri gelir: He was made to apologize (özür dilettirildi).",
      "example": "The corrupt official was made to refund the misappropriated public funds.",
      "exampleTr": "Yozlaşmış yetkiliye zimmetine geçirdiği kamu fonlarını geri ödemesi sağlatıldı.",
      "code": "Pasif make = was/were MADE TO DO (to geri gelir!)",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (pasif be made kalıbında to V1 arayışına gir)."
    },
    {
      "level": "C1",
      "title": "Kaza ve İstenmeyen Olay Bildiren Causative",
      "emoji": "💎",
      "point": "have something done yapısı sadece bilerek yaptırmayı değil, başa gelen kötü olayları da anlatır: He had his passport stolen (pasaportunu çaldırdı).",
      "example": "The foreign correspondent had her camera equipment confiscated at the customs checkpoint.",
      "exampleTr": "Yabancı muhabirin kamera ekipmanına gümrük kontrol noktasında el konuldu.",
      "code": "Başa gelen olumsuz olay = had his wallet stolen",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (başa gelen talihsizlik bildiriminde have + object + V3 ara)."
    },
    {
      "level": "C2",
      "title": "İleri Düzey Ettirgen Nüansları (have someone doing vs to do)",
      "emoji": "👑",
      "point": "have someone doing birini sürekli bir eyleme sevk etmektir: I'll have you speaking fluent English in six months.",
      "example": "The innovative curriculum will have students engaging in scientific debates within weeks.",
      "exampleTr": "Yenilikçi müfredat, öğrencileri haftalar içinde bilimsel tartışmalara katılır hâle getirecektir.",
      "code": "Bir süreç başlatıp sürdürme = have someone DOING",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (sürekli bir aktiviteye sokma bağlamında Ving değerlendir)."
    }
  ],
  "conjunctions": [
    {
      "level": "A1",
      "title": "Temel Koordinasyon Bağlaçları (and, but, so, because)",
      "emoji": "🌱",
      "point": "and ekleme, but zıtlık, so sonuç, because sebep bildirir. because arkasından tam cümle alır.",
      "example": "The lecture was challenging, but the students found it exceptionally inspiring.",
      "exampleTr": "Ders zorluydu, fakat öğrenciler dersi son derece ilham verici buldular.",
      "code": "Zıtlık = but | Sebep = because | Sonuç = so",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (iki cümlenin anlamca olumlu mu olumsuz mu bağlandığını gör)."
    },
    {
      "level": "A2",
      "title": "Zaman ve Sebep Bağlaçları (when, while, because of)",
      "emoji": "🌿",
      "point": "when tek anı, while süreci belirtir. because + tam cümle alırken, because of + isim veya isim tamlaması alır!",
      "example": "The match was postponed because of the relentless blizzard.",
      "exampleTr": "Maç, dinmek bilmeyen tipi yüzünden ertelendi.",
      "code": "because + CÜMLE | because of + İSİM",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (boşluktan sonra özne+fiil mi yoksa sadece isim tamlaması mı var kontrol et)."
    },
    {
      "level": "B1",
      "title": "Zıtlık ve Amaç Bağlaçları (although vs despite / so that vs in order to)",
      "emoji": "🌳",
      "point": "although/even though + tam cümle alır; despite/in spite of + isim/Ving alır. so that + cümle (amaç), in order to + V1 alır.",
      "example": "Despite facing severe budget constraints, the laboratory published groundbreaking results.",
      "exampleTr": "Ciddi bütçe kısıtlamalarıyla karşılaşmasına rağmen laboratuvar çığır açan sonuçlar yayımladı.",
      "code": "Although + CÜMLE | Despite + İSİM/Ving | in order to + V1",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (tam cümle mi isim mi ayrımıyla şıkların yarısını anında ele)."
    },
    {
      "level": "B2",
      "title": "Sonuç Kalıpları & Koşul (so... that vs such... that / unless)",
      "emoji": "🎯",
      "point": "so + sıfat/zarf + that; such + isim tamlaması + that. unless = if not (-medikçe; arkasında olumsuzluk almaz).",
      "example": "It was such a complicated theorem that even experienced mathematicians struggled to comprehend it.",
      "exampleTr": "O kadar karmaşık bir teoremdi ki deneyimli matematikçiler bile anlamakta zorlandı.",
      "code": "so + SIFAT + that | such + (a) SIFAT İSİM + that",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (that öncesinde tek sıfat mı isim tamlaması mı var bak)."
    },
    {
      "level": "C1",
      "title": "8 Adverbial Grup & Yan Cümle Zaman Kısıtlaması",
      "emoji": "💎",
      "point": "Zaman, sebep, amaç, sonuç, zıtlık, koşul, yer, tarz yan cümlelerinde geleceğe gönderme yapılırken Simple Present kullanılır (When he arrives, we will start).",
      "example": "As soon as the treaty enters into force, trade tariffs between the two nations will be dismantled.",
      "exampleTr": "Antlaşma yürürlüğe girer girmez, iki ülke arasındaki ticaret tarifeleri kaldırılacaktır.",
      "code": "Zaman/Koşul bağlacı yan cümlesinde = Simple Present (will yok)",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (bağlaçlı kısma will getirme tuzağına düşme)."
    },
    {
      "level": "C2",
      "title": "İleri Düzey Geçiş İfadeleri & Söylem Belirteçleri (notwithstanding, albeit)",
      "emoji": "👑",
      "point": "notwithstanding (rağmen; edat veya zarf); albeit (olmakla birlikte; arkasından sadece sıfat/zarf/öbek alır, tam cümle almaz).",
      "example": "The policy achieved its primary economic objectives, albeit at a considerable social cost.",
      "exampleTr": "Politika, kayda değer bir sosyal maliyet getirmekle birlikte, birincil ekonomik hedeflerine ulaştı.",
      "code": "albeit + SIFAT/ÖBEK (cümle almaz) | notwithstanding = rağmen",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (albeit arkasından tam cümle gelmeyeceğini bil)."
    }
  ],
  "prepositions": [
    {
      "level": "A1",
      "title": "Temel Zaman ve Mekan Edatları (at / in / on)",
      "emoji": "🌱",
      "point": "at saatler ve noktasal mekanlarda (at 5 pm, at school); on günlerde ve yüzeylerde (on Monday, on the wall); in aylarda, yıllarda ve kapalı alanlarda kullanılır.",
      "example": "The international symposium will commence at 9 a.m. on Tuesday in the main auditorium.",
      "exampleTr": "Uluslararası sempozyum Salı günü saat 09.00'da ana oditoryumda başlayacaktır.",
      "code": "Saat = AT | Gün = ON | Yıl & Kapalı alan = IN",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (zaman ifadesinin saat mi gün mü yıl mı olduğunu belirle)."
    },
    {
      "level": "A2",
      "title": "Hareket ve Yönelme Edatları (into / onto / through / across)",
      "emoji": "🌿",
      "point": "into içine doğru hareketi, through bir tünel veya alanın içinden geçmeyi, across bir ucundan diğer ucuna geçmeyi belirtir.",
      "example": "Light travels through the fiber optic cables at extraordinary speeds.",
      "exampleTr": "Işık, fiber optik kabloların içinden olağanüstü hızlarda ilerler.",
      "code": "İçinden geçiş = THROUGH | Karşıdan karşıya = ACROSS",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (eylemin durağan mı yoksa yönelimli hareket mi olduğunu tespit et)."
    },
    {
      "level": "B1",
      "title": "Sıfat + Edat Eşleşmeleri (dependent on, interested in, capable of)",
      "emoji": "🌳",
      "point": "İngilizcede sıfatlar belirli edatlarla sabitleşir: capable OF, responsible FOR, addicted TO, aware OF.",
      "example": "Modern economies are heavily dependent on reliable telecommunication infrastructures.",
      "exampleTr": "Modern ekonomiler büyük ölçüde güvenilir telekomünikasyon altyapılarına bağımlıdır.",
      "code": "dependent ON | capable OF | aware OF | responsible FOR",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (sıfatın ayrılmaz edatını eşleştir, Türkçe çeviriye aldanma)."
    },
    {
      "level": "B2",
      "title": "Fiil + Edat Kombinasyonları (contribute to, prevent from, rely on)",
      "emoji": "🎯",
      "point": "contribute TO (katkıda bulunmak), prevent someone FROM doing (engellemek), consist OF (oluşmak), result IN/FROM.",
      "example": "Excessive industrial emissions directly contribute to global atmospheric warming.",
      "exampleTr": "Aşırı endüstriyel emisyonlar, küresel atmosferik ısınmaya doğrudan katkıda bulunur.",
      "code": "contribute TO | prevent FROM | result IN (yol açar) / FROM (kaynaklanır)",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (fiil-edat çiftini bütün olarak oku)."
    },
    {
      "level": "C1",
      "title": "Kalıplaşmış Edat Öbekleri (in terms of, on behalf of, by means of)",
      "emoji": "💎",
      "point": "in terms of = bakımından; with respect to = hususunda; on behalf of = adına; by virtue of = sayesinde/dolayısıyla.",
      "example": "The two universities agreed to collaborate with regard to biomedical research projects.",
      "exampleTr": "İki üniversite, biyomedikal araştırma projeleri hususunda iş birliği yapma konusunda anlaştı.",
      "code": "Bakımından = in terms of | Adına = on behalf of | Sayesinde = by virtue of",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (üç parçalı edat kalıplarının ilk ve son edatını kontrol et)."
    },
    {
      "level": "C2",
      "title": "Soyut ve İleri Düzey Edat İlişkileri (at the expense of, under the auspices of)",
      "emoji": "👑",
      "point": "at the expense of = pahasına; under the auspices of = himayesinde; in accordance with = uyarınca/uyumlu olarak.",
      "example": "Rapid industrialization should not be pursued at the expense of ecological balance.",
      "exampleTr": "Hızlı sanayileşme, ekolojik denge pahasına sürdürülmemelidir.",
      "code": "Pahasına = AT the expense OF | Uyarınca = IN accordance WITH",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (akademik metinlerdeki sabit edat kalıplarını sına)."
    }
  ],
  "phrasal-verbs": [
    {
      "level": "A1",
      "title": "Gündelik Temel Öbek Fiiller (wake up, look at, turn on/off)",
      "emoji": "🌱",
      "point": "Fiil ile edat birleşerek yeni bir anlam oluşturur. turn on (açmak), turn off (kapatmak), get up (kalkmak).",
      "example": "Please turn off the laboratory lights before you leave the building.",
      "exampleTr": "Lütfen binadan ayrılmadan önce laboratuvar ışıklarını kapatınız.",
      "code": "Işığı aç = TURN ON | Kapat = TURN OFF",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (edatın yön ve temel anlamına dikkat et)."
    },
    {
      "level": "A2",
      "title": "Yaygın İki Kelimeli Öbekler (look for, give up, find out)",
      "emoji": "🌿",
      "point": "look for (aramak), give up (bırakmak/vazgeçmek), find out (öğrenmek/keşfetmek), put off (ertelemek).",
      "example": "Researchers worked diligently to find out why the experiment yielded unexpected outcomes.",
      "exampleTr": "Araştırmacılar, deneyin neden beklenmedik sonuçlar verdiğini öğrenmek için titizlikle çalıştılar.",
      "code": "Keşfetmek/öğrenmek = FIND OUT | Vazgeçmek = GIVE UP",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (cümle bağlamından aranan eylemi çıkar)."
    },
    {
      "level": "B1",
      "title": "YDS Sık Çıkan Çiftler (carry out, bring about, put out)",
      "emoji": "🌳",
      "point": "carry out = yürütmek/uygulamak (research/experiment); bring about = yol açmak (change); put out = yangın söndürmek.",
      "example": "The clinical trial was carried out in compliance with international medical standards.",
      "exampleTr": "Klinik deney, uluslararası tıbbi standartlara uygun olarak yürütüldü.",
      "code": "Deney/Araştırma yürütmek = CARRY OUT | Yangın söndürmek = PUT OUT",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (nesne research/study/survey ise ilk olarak carry out'a bak)."
    },
    {
      "level": "B2",
      "title": "Üç Kelimeli Öbek Fiiller (come up with, look down on, cut down on)",
      "emoji": "🎯",
      "point": "come up with = fikir/çözüm üretmek; look down on = hor görmek; cut down on = tüketimi kısmak; run out of = tükenmek.",
      "example": "The advisory board managed to come up with a viable alternative to the austerity measures.",
      "exampleTr": "Danışma kurulu, kemer sıkma önlemlerine uygulanabilir bir alternatif üretmeyi başardı.",
      "code": "Fikir/Çözüm üretmek = COME UP WITH | Azaltmak = CUT DOWN ON",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (üç kelimeli kalıbın son edatını tamamla)."
    },
    {
      "level": "C1",
      "title": "Akademik ve Resmi Öbekler (account for, rule out, stem from)",
      "emoji": "💎",
      "point": "account for = açıklamak veya oran oluşturmak (%40'ını oluşturur); rule out = ihtimal dışı bırakmak; stem from = -den kaynaklanmak.",
      "example": "Renewable sources accounted for more than thirty percent of total energy output last year.",
      "exampleTr": "Yenilenebilir kaynaklar, geçen yıl toplam enerji üretiminin yüzde otuzundan fazlasını oluşturdu.",
      "code": "Oran oluşturmak / Açıklamak = ACCOUNT FOR | Kaynaklanmak = STEM FROM",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (yüzde veya oran ifadesi varsa account for ara)."
    },
    {
      "level": "C2",
      "title": "Çok Anlamlı İleri Düzey Öbek Fiiller (bear out, wear off, pass off as)",
      "emoji": "👑",
      "point": "bear out = doğrulamak/teyit etmek; wear off = etkisini yitirmek; gloss over = geçiştirmek/önemsiz göstermek.",
      "example": "Subsequent archaeological discoveries bore out the hypothesis proposed by the young scholar.",
      "exampleTr": "Daha sonraki arkeolojik keşifler, genç araştırmacının öne sürdüğü hipotezi doğruladı.",
      "code": "Hipotezi doğrulamak = BEAR OUT | Etkisi geçmek = WEAR OFF",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (akademik doğrulama/çürütme bağlamını gözet)."
    }
  ],
  "determiners": [
    {
      "level": "A1",
      "title": "Tanımlıklar (a / an / the & Zero Article)",
      "emoji": "🌱",
      "point": "a/an seçimi yazılışa değil okunuştaki ilk sese göre yapılır: a university (y sesi), an hour (sesli harf), an honest person. Genel çoğullarda artikel kullanılmaz: Cars are fast.",
      "example": "It is an honor to welcome such a distinguished guest to our university.",
      "exampleTr": "Böylesine seçkin bir konuğu üniversitemizde ağırlamak bir onurdur.",
      "code": "Telaffuzda sesli = AN (an hour) | Sessiz = A (a university)",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (kelimenin yazılışına değil okunuşundaki ilk sese bak)."
    },
    {
      "level": "A2",
      "title": "Temel Miktar Belirteçleri (some / any / much / many)",
      "emoji": "🌿",
      "point": "some olumlu cümlelerde, any olumsuz ve sorularda; many sayılabilen çoğullarla, much ise sayılamayan tekil isimlerle kullanılır.",
      "example": "There isn't any doubt that many citizens want better public transportation.",
      "exampleTr": "Pek çok vatandaşın daha iyi toplu taşıma istediği konusunda hiçbir şüphe yoktur.",
      "code": "Sayılamayan = MUCH / LITTLE | Çoğul = MANY / FEW",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (ismin sayılabilir çoğul mu yoksa sayılamayan mı olduğunu belirle)."
    },
    {
      "level": "B1",
      "title": "Azlık Nüansları (few / a few vs little / a little)",
      "emoji": "🌳",
      "point": "few ve little olumsuz anlamdadır (neredeyse hiç yok); a few ve a little olumlu anlamdadır (az da olsa yeterli miktarda var).",
      "example": "Because there was little hope of finding survivors, the mission shifted to recovery.",
      "exampleTr": "Kurtulan bulma konusunda neredeyse hiç umut olmadığından, görev kurtarma çalışmalarına kaydırıldı.",
      "code": "Harfsiz = Olumsuz (yetersiz) | 'a' ile = Olumlu (az ama yeterli)",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (cümlede olumsuz bir sonuç varsa a'sız few/little seç)."
    },
    {
      "level": "B2",
      "title": "Dağıtıcı ve İkili Belirteçler (each, every, both, either, neither)",
      "emoji": "🎯",
      "point": "each/every tekil fiil alır. both iki şeyi olumlu bağlar (çoğul fiil); either/neither iki şey arasında seçim/olumsuzluk bildirir (resmî dilde tekil fiil). all hem sayılabilir hem sayılamayanla kullanılır.",
      "example": "Neither of the proposed solutions addresses the root cause of the inflation.",
      "exampleTr": "Önerilen çözümlerin hiçbiri enflasyonun temel nedenine hitap etmiyor.",
      "code": "Neither of + Çoğul İsim + TEKİL FİİL (resmî kural)",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (neither of yapısında sınavda tekil fiili ara)."
    },
    {
      "level": "C1",
      "title": "Özel Kalıplar (a number of vs the number of / the + sıfat)",
      "emoji": "💎",
      "point": "a number of = pek çok (ÇOĞUL fiil alır); the number of = -ın sayısı (TEKİL fiil alır). the rich, the elderly sıfatı çoğul insan topluluğu yapar (çoğul fiil alır).",
      "example": "A number of prominent linguists have gathered, while the number of participants is capped at fifty.",
      "exampleTr": "Pek çok önde gelen dilbilimci toplanmışken, katılımcı sayısı elli ile sınırlandırılmıştır.",
      "code": "A number of = ÇOĞUL fiil | THE number of = TEKİL fiil",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (a number of -> have/are; the number of -> has/is)."
    },
    {
      "level": "C2",
      "title": "Kurumsal & Coğrafi Belirteçler (go to school vs go to the school)",
      "emoji": "👑",
      "point": "Kurum kendi asıl amacıyla kullanılırsa artikel almaz (go to school/hospital/prison); bina veya ziyaret anlamındaysa the alır. Tek dağ zerosuz, sıradağlar the alır (Everest vs the Alps).",
      "example": "The injured driver was taken to hospital, whereas the investigators went to the hospital to inspect the logs.",
      "exampleTr": "Yaralı sürücü hastaneye (tedaviye) kaldırıldı; araştırmacılar ise kayıtları incelemek üzere hastaneye (binaya) gitti.",
      "code": "Asıl amaç = sıfır artikel | Belirli bina/fiziksel ziyaret = THE",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (kurumun işlev mi bina mı olduğunu analiz et)."
    }
  ],
  "comparatives": [
    {
      "level": "A1",
      "title": "Temel Karşılaştırma ve Üstünlük (-er / more & the -est / most)",
      "emoji": "🌱",
      "point": "Kısa sıfatlar -er alır (faster than); uzun sıfatlar more alır (more expensive than). En üstünlükte the -est veya the most kullanılır.",
      "example": "Renewable energy is becoming cheaper and more accessible than traditional fossil fuels.",
      "exampleTr": "Yenilenebilir enerji, geleneksel fosil yakıtlardan daha ucuz ve daha erişilebilir hâle geliyor.",
      "code": "Kısa sıfat = -er than | Uzun sıfat = more + SIFAT + than",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (cümlede than varsa comparative yapıyı kur)."
    },
    {
      "level": "A2",
      "title": "Eşitlik Karşılaştırması (as... as & not as... as)",
      "emoji": "🌿",
      "point": "as + yalın sıfat/zarf + as (kadar); olumsuzlarda not as/so... as (kadar ... değil) kalıbı kullanılır.",
      "example": "Online education can be as effective as traditional classroom instruction when properly designed.",
      "exampleTr": "Düzgün tasarlandığında çevrim içi eğitim, geleneksel sınıf eğitimi kadar etkili olabilir.",
      "code": "as + YALIN SIFAT + as (araya dereceli sıfat girmez)",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (as... as arasında asla -er veya more kullanılmaz)."
    },
    {
      "level": "B1",
      "title": "Karşılaştırmayı Derecelendirme (much / far / slightly + Comparative)",
      "emoji": "🌳",
      "point": "Karşılaştırmanın derecesini vurgulamak için much, far, a lot, significantly, slightly veya a bit kelimeleri comparative önüne getirilir.",
      "example": "The second prototype proved to be significantly more durable than the original version.",
      "exampleTr": "İkinci prototip, orijinal versiyondan belirgin şekilde daha dayanıklı çıktı.",
      "code": "much / far / significantly + MORE durable than",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (more önüne very gelmez; much/far/significantly gelir)."
    },
    {
      "level": "B2",
      "title": "Ne Kadar... O Kadar... Kalıbı (The more..., the more...)",
      "emoji": "🎯",
      "point": "İki orantılı değişimi ifade etmek için: The + comparative..., the + comparative... yapısı kullanılır.",
      "example": "The more rigorously you review the vocabulary, the higher your confidence will become.",
      "exampleTr": "Kelimeleri ne kadar titiz tekrar ederseniz, özgüveniniz o kadar yüksek olacaktır.",
      "code": "The + Comparative..., the + Comparative...",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (iki tarafta da the + comparative paralelliğini sına)."
    },
    {
      "level": "C1",
      "title": "Katlanarak Artış & Üstünlük Nüansları (Comparative and Comparative)",
      "emoji": "💎",
      "point": "Sürekli artış bildirmek için: more and more, increasingly, better and better. Üstünlük sıfatında of the two kalıbı: the taller of the two.",
      "example": "Global climate patterns are becoming increasingly unpredictable and severe.",
      "exampleTr": "Küresel iklim düzenleri giderek daha öngörülemez ve şiddetli bir hâl alıyor.",
      "code": "Gittikçe daha = more and more / increasingly",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (iki kişi/nesne arasında seçimde the + comparative kullanılır)."
    },
    {
      "level": "C2",
      "title": "Akademik Eşitlik ve İkame İfadeleri (as opposed to, rather than)",
      "emoji": "👑",
      "point": "rather than (yerine/tercihen); as opposed to (aksine/karşıt olarak). Karşılaştırma unsurlarının dilbilgisel paralelliği esastır.",
      "example": "The report emphasizes proactive prevention rather than relying solely on reactive treatment.",
      "exampleTr": "Rapor, yalnızca reaktif tedaviye bel bağlamak yerine, proaktif önlemeyi vurgulamaktadır.",
      "code": "A yerine B = A rather than B (paralel yapı)",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (karşılaştırılan iki yapının türce eşitliğini sağla)."
    }
  ],
  "inversion": [
    {
      "level": "A1",
      "title": "Yer Belirteci ile Başlayan Devrik Yapı (Here / There)",
      "emoji": "🌱",
      "point": "Here veya There cümle başına geldiğinde özne isimse devrik olur: Here comes the bus (Here the bus comes değil).",
      "example": "Here comes the train after an hour-long delay at the previous junction.",
      "exampleTr": "Önceki kavşaktaki bir saatlik gecikmenin ardından işte tren geliyor.",
      "code": "Here / There + Fiil + İsim Özne",
      "tactic": "A1 Taktiği: Temel kalıbı bul, özne-fiil uyumunu kontrol et (özne isimse fiil öne geçer; zamirse devrik olmaz: Here it comes)."
    },
    {
      "level": "A2",
      "title": "Katılma İfadelerinde Devrik Yapı (So do I / Neither do I)",
      "emoji": "🌿",
      "point": "Olumlu cümleye katılmak için So + yardımcı fiil + özne; olumsuz cümleye katılmak için Neither/Nor + yardımcı fiil + özne kullanılır.",
      "example": "She passed the comprehensive exam, and so did her research partner.",
      "exampleTr": "O kapsamlı sınavı geçti ve araştırma ortağı da öyle yaptı.",
      "code": "Olumluya katılma = So do I | Olumsuza katılma = Neither do I",
      "tactic": "A2 Taktiği: Zaman ve anlam işaretçisini bul (önceki cümlenin zamanı neyse aynı yardımcı fiili devrikte kullan)."
    },
    {
      "level": "B1",
      "title": "Olumsuz Zaman Zarfları ile Devrik (Never / Rarely / Seldom)",
      "emoji": "🌳",
      "point": "Never, Rarely, Seldom, Barely, Scarcely başa gelirse arkasından SORU SIRASI (yardımcı fiil + özne + esas fiil) gelir.",
      "example": "Seldom have scientists witnessed such rapid planetary warming in historical records.",
      "exampleTr": "Bilim insanları tarihsel kayıtlarda nadiren böylesine hızlı bir gezegensel ısınmaya tanık olmuşlardır.",
      "code": "Never / Seldom + YARDIMCI FİİL + ÖZNE + FİİL",
      "tactic": "B1 Taktiği: Bağlama göre seçenek ele (cümle olumsuz zarfla başlıyorsa yardımcı fiilin öznenin önüne geçtiği şıkkı ara)."
    },
    {
      "level": "B2",
      "title": "Çift Parçalı Devrik Bağlaçlar (Not only... but also / No sooner... than)",
      "emoji": "🎯",
      "point": "Not only başa gelirse İLK cümle devrik olur: Not only did he pass, but he also got the top score. No sooner had S V3... THAN S V2.",
      "example": "No sooner had the alarm sounded than the emergency crew vacated the premises.",
      "exampleTr": "Alarm çalar çalmaz acil durum ekibi binayı boşalttı.",
      "code": "No sooner HAD + S + V3 ... THAN + S + V2",
      "tactic": "B2 Taktiği: Zaman, çatı ve yan cümle ilişkisini birlikte kontrol et (no sooner gördüğünde than ve had V3 devriğini eşle)."
    },
    {
      "level": "C1",
      "title": "Sınırlayıcı Şartlı Devrikler (Only then, Only after, Under no circumstances)",
      "emoji": "💎",
      "point": "Only after/when/if yan cümleyi tamamladıktan sonra ANA CÜMLE devrik olur! Under no circumstances, In no way gibi kalıplar doğrudan devrik başlar.",
      "example": "Under no circumstances should sensitive personal information be shared over unsecured networks.",
      "exampleTr": "Hiçbir koşul altında hassas kişisel bilgiler güvenli olmayan ağlar üzerinden paylaşılmamalıdır.",
      "code": "Under no circumstances + SHOULD + S + V1",
      "tactic": "C1 Taktiği: Yakın anlamlar, nüanslar ve istisnaları değerlendir (Only after cümleciğinde değil, ana cümlede devrik yap)."
    },
    {
      "level": "C2",
      "title": "Koşul Cümlesi Devrikleri & So/Such Devrikliği",
      "emoji": "👑",
      "point": "Type 1: Should S V1 | Type 2: Were S (to V1) | Type 3: Had S V3. So + sıfat + aux + S + that: So fierce was the storm that roofs collapsed.",
      "example": "So intricate was the encryption algorithm that even supercomputers took weeks to decipher it.",
      "exampleTr": "Şifreleme algoritması o kadar karmaşıktı ki süper bilgisayarların bile onu çözmesi haftalar aldı.",
      "code": "So + SIFAT + was/were + ÖZNE + that...",
      "tactic": "C2 Taktiği: Söylem, vurgu, resmiyet ve doğallığa göre en uygun seçeneği seç (so + sıfat cümle başındaysa devrik fiil ara)."
    }
  ]
};

export function validateGrammarLevels(): { valid: boolean; count: number; errors: string[] } {
  const errors: string[] = [];
  const slugs = Object.keys(GRAMMAR_LEVELS);
  if (slugs.length !== 15) {
    errors.push(`Beklenen 15 konu yerine ${slugs.length} konu var.`);
  }
  for (const slug of slugs) {
    const blocks = GRAMMAR_LEVELS[slug];
    if (!blocks || blocks.length !== 6) {
      errors.push(`${slug}: 6 CEFR seviyesi yerine ${blocks ? blocks.length : 0} seviye var.`);
      continue;
    }
    for (const b of blocks) {
      if (!b.point || !b.example || !b.exampleTr || !b.code || !b.tactic) {
        errors.push(`${slug} (${b.level}): Eksik alan tespit edildi.`);
      }
    }
  }
  return { valid: errors.length === 0, count: slugs.length * 6, errors };
}

// 17 Tense Kapsamlı Seviye Rehberi (A1-YDS, 119 Blok)
export {
  TENSE_TOPICS,
  TENSE_LEVELS,
  type TenseLevel,
  type TenseLevelBlock,
  type TenseTopic,
  validateAllTensesData,
} from "./data-tenses-expanded";


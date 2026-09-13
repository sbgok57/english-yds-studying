export interface TacticStep {
  n: number;
  title: string;
  detail: string;
}

export interface TacticExample {
  question: string;
  options: string[];
  answer: string;
  reason: string;
  tactic?: string;
}

export interface Tactic {
  slug: string;
  title: string;
  emoji: string;
  color: string;
  minutes: string;
  intro: string;
  kodlama: string[];
  steps: TacticStep[];
  example: TacticExample;
  bonusTip: string;
}

export const TACTICS: Tactic[] = [
  {
    "slug": "vocabulary",
    "title": "Kelime Soruları Taktikleri (Soru 1-6)",
    "emoji": "🔤",
    "color": "from-amber-500 to-orange-600",
    "minutes": "1.0 dk",
    "intro": "YDS'nin ilk 6 sorusu: 1 İsim, 1 Sıfat, 1 Zarf, 2 Fiil ve 1 Phrasal Verb'den oluşur. Cümlenin olumlu/olumsuz bağlamı ve collocation (eşdizim) doğru cevabı belirler.",
    "kodlama": [
      "Zarf şıklarda '-ly' ile biter ve daima bir fiili veya sıfatı niteler.",
      "Bağlam Analizi (+/-): Boşluktan önceki ve sonraki kelimelerin olumlu/olumsuz duygu durumunu çıkar.",
      "Phrasal Verb'de nesneye bak: 'carry out a study', 'call off a meeting'!"
    ],
    "steps": [
      {
        "n": 1,
        "title": "Cümledeki Anlam Yönünü Belirle",
        "detail": "Cümle bir başarı, iyileşme (+) mi yoksa bir kriz, felaket, eksiklik (-) mi anlatıyor?"
      },
      {
        "n": 2,
        "title": "Boşluğun Sözcük Türünü Tespit Et",
        "detail": "Boşluk nerede? Öznenin yanında mı (fiil), ismin önünde mi (sıfat), fiilin peşinde mi (zarf)?"
      },
      {
        "n": 3,
        "title": "Eşdizimlilik (Collocation) Testi Yap",
        "detail": "Şıktaki kelime yanındaki edat veya isimle doğal bir ikili oluşturuyor mu?"
      }
    ],
    "example": {
      "question": "Due to the unprecedented drought, agricultural yields dropped ------- across the entire region, causing severe food shortages.\n\nA) marginally\nB) drastically\nC) favorably\nD) moderately\nE) conventionally",
      "options": [
        "marginally",
        "drastically",
        "favorably",
        "moderately",
        "conventionally"
      ],
      "answer": "B",
      "reason": "'Unprecedented drought' (benzeri görülmemiş kuraklık) ve 'severe food shortages' (ağır gıda kıtlığı) düşüşün çok şiddetli olduğunu gösterir. 'Drastically' (ciddi/dramatik biçimde) tek uygun seçenektir.",
      "tactic": "Severe food shortages sonucu ancak 'drastically' (şiddetli) bir düşüşle açıklanabilir. Marginally (azıcık) ve moderately (ılımlı) çeldiricidir."
    },
    "bonusTip": "Kelime sorusunda bilmediğin bir şık varsa hemen panikleme; bildiğin diğer 4 şıkkın cümlenin bağlamına uyup uymadığını eleyerek doğru cevaba ulaş."
  },
  {
    "slug": "grammar",
    "title": "Gramer & Dilbilgisi Taktikleri (Soru 7-15)",
    "emoji": "🧩",
    "color": "from-purple-500 to-indigo-600",
    "minutes": "1.2 dk",
    "intro": "Tenses, Modals, Passive, Prepositions ve Conjunctions sorularını kapsar. Çözümün anahtarı formül bilgisi ve zaman uyumudur.",
    "kodlama": [
      "Zaman zarı yoksa Present ailesi (V1, have V3, is doing) önceliklidir.",
      "By the time + V2 -> Had V3 formülü şaşmaz!",
      "Virgül ve Edat, THAT'e düşmandır!"
    ],
    "steps": [
      {
        "n": 1,
        "title": "Zaman Referansını Yakala",
        "detail": "Geçmiş mi (Past), genel gerçek mi (Present), gelecek mi (Future)?"
      },
      {
        "n": 2,
        "title": "Etken / Edilgen (Active/Passive) Ayrımı",
        "detail": "Özne eylemi kendi mi yapıyor, başkası tarafından mı yapılıyor?"
      },
      {
        "n": 3,
        "title": "Edat / Bağlaç Şartını Doğrula",
        "detail": "Boşluğun sağı ve solu hangi edatı veya kalıbı talep ediyor?"
      }
    ],
    "example": {
      "question": "The global economy, which ------- by severe inflation in recent years, is expected to recover gradually.\n\nA) has been threatened\nB) will threaten\nC) had threatened\nD) is threatening\nE) was threatened",
      "options": [
        "has been threatened",
        "will threaten",
        "had threatened",
        "is threatening",
        "was threatened"
      ],
      "answer": "A",
      "reason": "'in recent years' Present Perfect (have/has V3) gerektirir. Ekonomi tehdit etmez, tehdit edilir (Passive: has been threatened).",
      "tactic": "'in recent years' + 'since' = Present Perfect! Ekonomi etkilendiği için passive arandı."
    },
    "bonusTip": "İki boşluklu gramer sorularında önce en emin olduğun boşluğu (çoğunlukla ikinci boşluktaki edat veya zaman) çözerek şıkların en az 3 tanesini saniyeler içinde ele."
  },
  {
    "slug": "cloze-test",
    "title": "Cloze Test Çözüm Algoritması (Soru 16-25)",
    "emoji": "🗂️",
    "color": "from-cyan-500 to-teal-600",
    "minutes": "3.5 dk",
    "intro": "5'er soruluk 2 paragraftan oluşur. Paragrafın ilk cümlesi ana fikri verir. Sorular bağımsız değil, paragrafın bütüncül bağlamına bağlıdır.",
    "kodlama": [
      "İlk cümleyi oku, metnin konusunu ve zaman eksenini kafana kazı.",
      "Bağlaç sorularında önceki ve sonraki cümlenin artı/eksi (+/-) dengesini tart.",
      "Edat sorularında boşluğun hemen solundaki fiile veya sağındaki isme odaklan."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Metne Kuşbakışı Bakış",
        "detail": "İlk 15 saniyede metnin konusunu ve genel zamanını (Past mı Present mı) anla."
      },
      {
        "n": 2,
        "title": "Cümle İçi Gramer & Bağlaç Taraması",
        "detail": "Boşluğun bulunduğu cümlenin sınırlarını (noktadan noktaya) belirle."
      },
      {
        "n": 3,
        "title": "Anlamsal Akışı Doğrula",
        "detail": "Seçilen şıkkı yerine koyup cümlenin mantıklı bir bütün oluşturduğunu teyit et."
      }
    ],
    "example": {
      "question": "Renewable energy investments have soared globally. -------, fossil fuels still account for the majority of electricity production.\n\nA) Furthermore\nB) Consequently\nC) However\nD) Therefore\nE) In addition",
      "options": [
        "Furthermore",
        "Consequently",
        "However",
        "Therefore",
        "In addition"
      ],
      "answer": "C",
      "reason": "İlk cümle olumlu bir artıştan (soared globally +), ikinci cümle fosil yakıtların baskınlığından (-) bahsediyor. Zıtlık bağlacı 'However' şarttır.",
      "tactic": "İlk cümle (+) ikinci cümle (-) ise zıtlık bağlacını seç."
    },
    "bonusTip": "Cloze testte bir soruya takılıp kalma; bazen 3. sorunun cevabı 5. sorudaki bir ipucunda gizlidir."
  },
  {
    "slug": "sentence-completion",
    "title": "Cümle Tamamlama Taktikleri (Soru 26-36)",
    "emoji": "🧩",
    "color": "from-rose-500 to-pink-600",
    "minutes": "1.5 dk",
    "intro": "Verilen yarım cümlenin diğer yarısını bulma. Bağlaç kuralı, özne takibi (referans zamirler) ve zaman uyumu en kritik unsurlardır.",
    "kodlama": [
      "Özne Takibi: Verilen cümlede 'scientists' varsa diğer tarafta 'they' ara.",
      "Zaman Uyumu: Verilen cümle Past ise ana cümle de Past olmalı (istisna zıtlıklar hariç).",
      "Because / Since varsa sebep-sonuç mantığını tersten sına."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Bağlacı ve Görevini Belirle",
        "detail": "Bağlaç zıtlık mı, sebep-sonuç mu, koşul mu bildiriyor?"
      },
      {
        "n": 2,
        "title": "Özne ve Nesne Referansını Yakala",
        "detail": "İkinci kısımdaki 'it, they, these' kime gönderimde bulunuyor?"
      },
      {
        "n": 3,
        "title": "Zaman Uyumu Elemesi Yap",
        "detail": "Past ile Future gibi imkânsız kombinasyonları şıklardan hemen sil."
      }
    ],
    "example": {
      "question": "Although the new antibiotic showed promising results in laboratory tests, -------.\n\nA) it was widely prescribed by doctors immediately\nB) it proved to have unexpected side effects in human trials\nC) researchers were celebrated for their historic breakthrough\nD) its production cost was remarkably low\nE) bacteria became completely defenseless against it",
      "options": [
        "it was widely prescribed by doctors immediately",
        "it proved to have unexpected side effects in human trials",
        "researchers were celebrated for their historic breakthrough",
        "its production cost was remarkably low",
        "bacteria became completely defenseless against it"
      ],
      "answer": "B",
      "reason": "'Although' zıtlık bağlacıdır. İlk taraf olumlu (promising results +) olduğundan, ikinci taraf olumsuz (-) bir sonuç içermelidir (unexpected side effects).",
      "tactic": "Although (+) ile başladığına göre virgülden sonra (-) bir sonuç aramalısın. B şıkkı tek olumsuz durumdur."
    },
    "bonusTip": "Şıkları okumadan önce cümlenin eksik kalan tarafının ne söylemesi gerektiğini zihninde Türkçe olarak kurgula; doğru şık hemen gözüne çarpacaktır."
  },
  {
    "slug": "translation-en-tr",
    "title": "İngilizce - Türkçe Çeviri Taktikleri (Soru 37-39)",
    "emoji": "🔄",
    "color": "from-blue-500 to-indigo-600",
    "minutes": "1.0 dk",
    "intro": "İngilizce cümlenin yüklemini (ana fiilini) ve öznesini bul, Türkçe cümlenin sonundaki yüklemle birebir eşleştir!",
    "kodlama": [
      "İngilizce cümlenin ana fiili Türkçe cümlenin EN SONUNDA yer alır.",
      "Türkçe cümlenin başındaki özne ile İngilizce cümlenin öznesi tam uyuşmalıdır.",
      "Şıklarda ekleme veya çıkarma yapılmış kelimeleri doğrudan ele!"
    ],
    "steps": [
      {
        "n": 1,
        "title": "Ana Fiili (Yüklemi) Bul",
        "detail": "Cümlenin asıl yüklemi nedir? Zamanı ve çatısı (etken/edilgen) nedir?"
      },
      {
        "n": 2,
        "title": "Türkçe Şıkların Sonunu Tara",
        "detail": "Yalnızca bu yüklemi tam karşılayan Türkçe şıkları tut, diğerlerini çiz."
      },
      {
        "n": 3,
        "title": "Özne Eşlemesi ile Bitir",
        "detail": "Kalan 2 şık arasında öznenin birebir karşılığını kontrol et."
      }
    ],
    "example": {
      "question": "Artificial intelligence, which has evolved rapidly over the past decade, has transformed modern medical diagnostics.\n\nA) Son on yılda hızla gelişen yapay zekâ, modern tıbbi teşhisleri dönüştürmüştür.\nB) Modern tıbbi teşhisler yapay zekâ sayesinde son on yılda hızla gelişmiştir.\nC) Yapay zekâ hızla gelişerek modern tıbbi teşhislere katkıda bulunmaktadır.\nD) Son on yılda modern tıbbi teşhislerin gelişmesi yapay zekâyı dönüştürmüştür.\nE) Yapay zekânın hızlı gelişimi modern tıbbi teşhislerde önemli bir dönüm noktasıdır.",
      "options": [
        "Son on yılda hızla gelişen yapay zekâ, modern tıbbi teşhisleri dönüştürmüştür.",
        "Modern tıbbi teşhisler yapay zekâ sayesinde son on yılda hızla gelişmiştir.",
        "Yapay zekâ hızla gelişerek modern tıbbi teşhislere katkıda bulunmaktadır.",
        "Son on yılda modern tıbbi teşhislerin gelişmesi yapay zekâyı dönüştürmüştür.",
        "Yapay zekânın hızlı gelişimi modern tıbbi teşhislerde önemli bir dönüm noktasıdır."
      ],
      "answer": "A",
      "reason": "Ana yüklem 'has transformed' -> 'dönüştürmüştür'. Özne 'Artificial intelligence, which has evolved rapidly...' -> 'Son on yılda hızla gelişen yapay zekâ'. A şıkkı eksiksiz ve birebir karşılar.",
      "tactic": "Yüklem: has transformed (dönüştürmüştür). Şıkların sonuna bak: sadece A şıkkı 'dönüştürmüştür' diyor! 5 saniyede soru bitti."
    },
    "bonusTip": "Çeviri sorularında tüm metni okuyarak vakit kaybetme; önce YÜKLEM, sonra ÖZNE eşleştirmesi yaparak soruyu 20 saniyede bitir."
  },
  {
    "slug": "translation-tr-en",
    "title": "Türkçe - İngilizce Çeviri Taktikleri (Soru 40-42)",
    "emoji": "🔁",
    "color": "from-teal-500 to-emerald-600",
    "minutes": "1.0 dk",
    "intro": "Türkçe cümlenin sonundaki yüklemi ve başındaki özneyi İngilizce S + V + O düzenine oturt.",
    "kodlama": [
      "Türkçe cümlenin en sonundaki yüklem, İngilizce cümlenin ÖZNESİNDEN HEMEN SONRA gelir.",
      "Edilgen mi (yapıldı, görüldü)? O zaman İngilizce şıkta 'be + V3' ara.",
      "Zaman uyumu: '-mıştır/miştir' için Present Perfect (have/has V3), '-dı/di' için Simple Past (V2)."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Türkçe Yüklemi Tespit Et",
        "detail": "Cümlenin sonundaki eylemi ve modal/zaman çekimini belirle."
      },
      {
        "n": 2,
        "title": "İngilizce Şıklarda Fiili Kontrol Et",
        "detail": "Doğru fiil ve zaman kalıbını barındıran şıkları ayır."
      },
      {
        "n": 3,
        "title": "Özneyi Doğrula",
        "detail": "Öznenin niteleyicileri (sıfatlar, yan cümlecikler) tam mı?"
      }
    ],
    "example": {
      "question": "Fosil yakıtların aşırı kullanımı, küresel ısınmanın hızlanmasında belirleyici bir rol oynamaktadır.\n\nA) Excessive use of fossil fuels plays a decisive role in accelerating global warming.\nB) The acceleration of global warming is primarily caused by fossil fuel consumption.\nC) Playing a role in global warming, fossil fuels are excessively used worldwide.\nD) If fossil fuels are used excessively, global warming will play a decisive role.\nE) Global warming has accelerated decisively due to the misuse of fossil fuels.",
      "options": [
        "Excessive use of fossil fuels plays a decisive role in accelerating global warming.",
        "The acceleration of global warming is primarily caused by fossil fuel consumption.",
        "Playing a role in global warming, fossil fuels are excessively used worldwide.",
        "If fossil fuels are used excessively, global warming will play a decisive role.",
        "Global warming has accelerated decisively due to the misuse of fossil fuels."
      ],
      "answer": "A",
      "reason": "Yüklem: 'rol oynamaktadır' -> 'plays a decisive role'. Özne: 'Fosil yakıtların aşırı kullanımı' -> 'Excessive use of fossil fuels'.",
      "tactic": "Özne: Excessive use of fossil fuels, Yüklem: plays a decisive role. Bu sıralamayı veren tek şık A'dır."
    },
    "bonusTip": "Şıklar arasında kaybolma; Türkçe cümlenin virgülle ayrılmış ana öznesinin İngilizce karşılığına odaklan."
  },
  {
    "slug": "paragraph-completion",
    "title": "Paragraf Tamamlama Taktikleri (Soru 68-71)",
    "emoji": "📄",
    "color": "from-amber-600 to-yellow-600",
    "minutes": "2.0 dk",
    "intro": "Boşluğun öncesi ve sonrasındaki köprü kelimelere (referans zamirler, bağlaçlar, konu akışı) odaklanarak eksik cümleyi yerleştir.",
    "kodlama": [
      "Boşluktan sonra 'This / These / Such' varsa aradığın cümle o varlığı ilk defa tanıtan cümledir.",
      "Boşluktan sonra 'However' varsa aradığın cümle zıt yönde bir duygu taşımalıdır.",
      "Paragrafın genel tonunu (tarihsel mi, bilimsel mi, eleştirel mi) koruyan şıkkı seç."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Önceki Cümlenin Sonunu Oku",
        "detail": "Boşluktan hemen önceki cümlenin bıraktığı fikir ne?"
      },
      {
        "n": 2,
        "title": "Sonraki Cümlenin Başını Oku",
        "detail": "Boşluktan sonraki cümlenin ilk kelimesi (zamir, bağlaç) neyi işaret ediyor?"
      },
      {
        "n": 3,
        "title": "Köprü Cümleyi Seç",
        "detail": "Hem öncesine hem sonrasına kusursuz oturan mantık halkasını bul."
      }
    ],
    "example": {
      "question": "Urbanization has accelerated dramatically over the last century. Millions of people migrate to metropolitan areas every year in search of better job opportunities. -------. Consequently, municipal governments struggle to provide adequate public transportation, housing, and clean water.\n\nA) However, modern cities offer unprecedented cultural and educational advantages.\nB) This rapid influx puts an immense strain on existing urban infrastructure.\nC) Agriculture remains the primary economic activity in most developing nations.\nD) Environmental regulations have successfully eliminated pollution in large capitals.\nE) Technological advancements have made remote working universally accessible.",
      "options": [
        "However, modern cities offer unprecedented cultural and educational advantages.",
        "This rapid influx puts an immense strain on existing urban infrastructure.",
        "Agriculture remains the primary economic activity in most developing nations.",
        "Environmental regulations have successfully eliminated pollution in large capitals.",
        "Technological advancements have made remote working universally accessible."
      ],
      "answer": "B",
      "reason": "Önceki cümledeki 'Millions of people migrate...' ifadesine 'This rapid influx' (bu hızlı akın) köprüsüyle bağlanır. Sonraki cümledeki 'Consequently, municipal governments struggle...' bu baskının (strain) sonucudur.",
      "tactic": "Migration -> This rapid influx -> municipal struggle. Mantık zinciri B şıkkında kilitleniyor."
    },
    "bonusTip": "Boşluktan sonra gelen 'Consequently / As a result' gibi sonuç bağlaçları, boşluğa o sonucun doğrudan NEDENİNİN gelmesini zorunlu kılar."
  },
  {
    "slug": "restatement",
    "title": "Anlamca En Yakın Cümle Taktikleri (Soru 76-80)",
    "emoji": "🔁",
    "color": "from-violet-600 to-purple-700",
    "minutes": "1.5 dk",
    "intro": "Verilen cümlenin anlamını değiştirmeden farklı gramer ve eşanlamlı kelimelerle ifade eden şıkkı bulma sanatı.",
    "kodlama": [
      "Miktar Uçları: 'all, none, only, always, never' kelimelerine dikkat et; asıl cümlede yoksa şıkkı ele!",
      "Koşul ve Modal Uyumu: Asıl cümlede 'might' (ihtimal) varsa şıktaki 'definitely' (kesin) elenir.",
      "Sebep-Sonuç dengesi korunmalıdır; sebep ile sonuç yer değiştiremez."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Cümlenin Çekirdeğini Çıkar",
        "detail": "Özne + Fiil + Temel niteleyiciler nedir?"
      },
      {
        "n": 2,
        "title": "Aşırılık Bildiren Şıkları Ele",
        "detail": "Metinde olmayan 'the most, solely, inevitably' kelimelerini içeren şıkları ele."
      },
      {
        "n": 3,
        "title": "Eşanlamlı Kelime Eşleşmesini Doğrula",
        "detail": "Paraphrase edilmiş anahtar kelimeleri karşılaştır."
      }
    ],
    "example": {
      "question": "Had the company invested in digital security earlier, the recent cyberattack could have been prevented.\n\nA) The company invested in digital security, so the cyberattack was easily prevented.\nB) The recent cyberattack succeeded only because the company failed to invest in digital security in time.\nC) Even if the company had invested in digital security, the cyberattack would still have happened.\nD) Digital security investments always prevent cyberattacks completely.\nE) The cyberattack was so sophisticated that no amount of investment could prevent it.",
      "options": [
        "The company invested in digital security, so the cyberattack was easily prevented.",
        "The recent cyberattack succeeded only because the company failed to invest in digital security in time.",
        "Even if the company had invested in digital security, the cyberattack would still have happened.",
        "Digital security investments always prevent cyberattacks completely.",
        "The cyberattack was so sophisticated that no amount of investment could prevent it."
      ],
      "answer": "B",
      "reason": "Asıl cümle Type 3 Conditional'dır: Yatırım yapılmadı ve saldırı önlenemedi. B şıkkı tam olarak 'saldırının zamanında yatırım yapılmadığı için başarılı olduğunu' ifade eder.",
      "tactic": "Had S V3 = Gizli If (yapılsaydı olurdu, yapılmadı). B şıkkındaki 'failed to invest in time' ile birebir örtüşür."
    },
    "bonusTip": "Asıl cümlede 'not all' varsa şıktaki 'some' ile eşleşir; 'none' ile eşleşmez. Mantıksal kapsamlara dikkat et."
  },
  {
    "slug": "irrelevant-sentence",
    "title": "Akışı Bozan Cümle Taktikleri (Soru 72-75)",
    "emoji": "🚫",
    "color": "from-rose-600 to-red-700",
    "minutes": "1.0 dk",
    "intro": "5 numaralı cümleden oluşan paragrafta ana konudan sapan veya zaman/bakış açısı uyumsuzluğu yaratan yabancı cümleyi at.",
    "kodlama": [
      "Özne sapması: Paragraf 'balinaların avlanması'nı anlatırken bir cümle 'balıkçılık ekonomisi'ne kayıyorsa yabancıdır.",
      "Zaman sapması: Paragraf antik dönemden bahsederken araya giren 'günümüz' cümlesi şüphelidir.",
      "Cümleyi çıkarıp 1 öncesi ile 1 sonrasını peş peşe oku; akış pürüzsüz akıyorsa o cümle bozucudur!"
    ],
    "steps": [
      {
        "n": 1,
        "title": "Ortak Konuyu ve Tonu Belirle",
        "detail": "İlk iki cümlenin ortak temasını tek bir kelimeyle özetle."
      },
      {
        "n": 2,
        "title": "Referans Zamir Bağlarını İncele",
        "detail": "Bir cümle 'These findings' diyorsa, bir önceki cümlede bulgular olmak zorundadır."
      },
      {
        "n": 3,
        "title": "Çıkarma ve Sağlama Testi",
        "detail": "Şüpheli cümleyi atıp önceki ve sonraki cümleyi birbirine bağla."
      }
    ],
    "example": {
      "question": "(I) Sleep deprivation has severe effects on the human immune system.\n(II) Chronic lack of sleep diminishes the body's ability to fight common infections.\n(III) Moreover, researchers have linked inadequate sleep to long-term cardiovascular risks.\n(IV) Most people spend approximately one third of their entire lives sleeping.\n(V) Therefore, healthcare professionals strongly advise getting at least seven hours of restful sleep daily.\n\nA) I\nB) II\nC) III\nD) IV\nE) V",
      "options": [
        "I",
        "II",
        "III",
        "IV",
        "V"
      ],
      "answer": "D",
      "reason": "Paragraf uykusuzluğun sağlık üzerindeki zararlarını (immune system, infections, cardiovascular risks) anlatmaktadır. IV. cümle ise genel bir istatistiki bilgi (ömrün üçte biri uykuda geçer) vererek konunun odağını dağıtmaktadır.",
      "tactic": "Konu: Uykusuzluğun zararları (-). IV. cümle ise nötr bir uyku süresi istatistiğidir. Çıkardığında III ve V (riskler ve tavsiye) birbirine mükemmel bağlanır."
    },
    "bonusTip": "Akışı bozan cümle genellikle 'yanlış bilgi' vermez; doğru bir bilgiyi 'alakasız bir bağlamda' verir. Genel doğrulara değil, paragrafın odağına odaklan."
  },
  {
    "slug": "dialogue",
    "title": "Diyalog Tamamlama Taktikleri (Soru 64-67)",
    "emoji": "💬",
    "color": "from-teal-600 to-cyan-700",
    "minutes": "1.2 dk",
    "intro": "İki kişi arasındaki konuşmada boş bırakılan repliği bulma. Boşluktan hemen sonraki tepki en kritik ipucudur.",
    "kodlama": [
      "Boşluktan sonraki cevap bir 'açıklama' mı, 'şaşkınlık' mı, yoksa 'onay' mı?",
      "Soru-cevap uyumu: Boşluktan sonra 'Not really' diyorsa boşlukta bir 'Yes/No sorusu' olmalıdır.",
      "Hitap ve duygu tonu korunmalıdır."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Boşluktan Sonraki Cevabı Analiz Et",
        "detail": "Karşıdaki kişi neye tepki veriyor? 'I didn't expect that' mi, 'Exactly' mi?"
      },
      {
        "n": 2,
        "title": "Gereken Soru/Cevap Türünü Belirle",
        "detail": "Bilgi mi sorulmalı, öneri mi yapılmalı, itiraz mı edilmeli?"
      },
      {
        "n": 3,
        "title": "Şıkları Sına",
        "detail": "Boşluktan sonraki cümlenin tetikleyicisi olan şıkkı seç."
      }
    ],
    "example": {
      "question": "Sarah: Have you heard about the government's new electric vehicle subsidies?\nDavid: -------.\nSarah: Really? I thought you were planning to replace your old diesel car this year.\nDavid: I was, but the eligible models are still far beyond my budget.\n\nA) Yes, and I have already ordered one of the top models.\nB) I don't follow automotive news very closely.\nC) No, I haven't looked into it because I doubt they make any real difference for me.\nD) Electric vehicles are definitely the future of sustainable transportation.\nE) My mechanic told me that diesel engines are much more durable anyway.",
      "options": [
        "Yes, and I have already ordered one of the top models.",
        "I don't follow automotive news very closely.",
        "No, I haven't looked into it because I doubt they make any real difference for me.",
        "Electric vehicles are definitely the future of sustainable transportation.",
        "My mechanic told me that diesel engines are much more durable anyway."
      ],
      "answer": "C",
      "reason": "Sarah'ın 'Really? I thought you were planning to replace your car...' şaşkınlığı ve David'in bütçe yetersizliği açıklaması, David'in teşvikten yararlanamayacağını veya ilgilenmediğini belirtmesini gerektirir.",
      "tactic": "Sarah'ın 'Really?' tepkisi David'in heves kırıcı bir şey söylediğini gösterir. C şıkkı doğrudan bu tutumu yansıtır."
    },
    "bonusTip": "Boşluktan sonraki konuşmacının 'Really?', 'Why do you say so?', 'I agree' gibi ilk kelimeleri sorunun cevabını %90 oranında ele verir."
  },
  {
    "slug": "reading",
    "title": "Okuma Parçaları (Reading Lab) Taktikleri (Soru 43-63)",
    "emoji": "🔬",
    "color": "from-sky-500 to-blue-600",
    "minutes": "4.0 dk / parça",
    "intro": "5 paragraf x 4 soru = 20 soru. YDS'nin 25 puanlık omurgasıdır. Paragrafı ezberleme, önce soruların köklerini tara!",
    "kodlama": [
      "Önce soruları oku, ne aradığını bilerek metne gir!",
      "According to the passage: Metinde geçen bilginin birebir eşanlamlısını ara.",
      "It can be inferred from the passage: Doğrudan yazmaz, metinden mantıksal çıkarım yapılır.",
      "Main idea / Primary purpose: Paragrafın ilk ve son cümlelerine odaklan."
    ],
    "steps": [
      {
        "n": 1,
        "title": "Soru Köklerini Tara",
        "detail": "Sorulardaki anahtar isim, tarih veya kavramları zihnine kodla."
      },
      {
        "n": 2,
        "title": "Paragrafı Hedef Odaklı Oku",
        "detail": "Anahtar kelimelerin geçtiği satırların altını çizerek oku."
      },
      {
        "n": 3,
        "title": "Şıkları Paraphrase Mantığıyla Karşılaştır",
        "detail": "Doğru cevap metindeki kelimelerin eşanlamlıları ile yazılmış şıktır."
      }
    ],
    "example": {
      "question": "Metin Parçası: 'Deep-sea exploration remains one of the most formidable challenges in modern science due to extreme pressures and complete absence of light. Despite these harsh conditions, hydrothermal vents host remarkably diverse ecosystems.'\n\nSoru: According to the passage, hydrothermal vents are noteworthy because -------.\n\nA) they completely eliminate the immense pressures of the deep ocean\nB) they sustain thriving ecosystems despite extremely inhospitable conditions\nC) scientists have successfully developed lighting systems around them\nD) they are located in shallow waters accessible to conventional submarines\nE) they pose a serious threat to deep-sea biodiversity",
      "options": [
        "they completely eliminate the immense pressures of the deep ocean",
        "they sustain thriving ecosystems despite extremely inhospitable conditions",
        "scientists have successfully developed lighting systems around them",
        "they are located in shallow waters accessible to conventional submarines",
        "they pose a serious threat to deep-sea biodiversity"
      ],
      "answer": "B",
      "reason": "Metindeki 'host remarkably diverse ecosystems' ifadesi B şıkkındaki 'sustain thriving ecosystems', 'harsh conditions' ise 'extremely inhospitable conditions' ile paraphrase edilmiştir.",
      "tactic": "Host diverse ecosystems -> sustain thriving ecosystems. Harika bir paraphrase örneği!"
    },
    "bonusTip": "Paragraf sorularında kendi genel kültürüne göre değil, YALNIZCA metinde yazılan bilgiye göre karar ver; metinde geçmeyen bilgi doğru olsa bile YDS'de yanlıştır."
  }
];

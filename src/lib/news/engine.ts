// ============================================================
// src/lib/news/engine.ts
// YDS Master — 2400+ Gündem İngilizce Haber Motoru & Veri Havuzu
// ============================================================

import {
  NewsArticle,
  NewsCategory,
  NewsFilterQuery,
  NewsKeyVocabulary,
  NewsLevel,
  NewsParagraph,
  NewspaperClipping,
  PaginatedNewsResult,
} from "./types";
import { NEWS_CATEGORIES } from "./categories";

export const TOTAL_NEWS_COUNT = 2400; // 2000'den fazla gündem haberi

// Gazete Masthead & Küpür Şablonları
const NEWSPAPERS = [
  { name: "The Global Chronicle", tagline: "Truth, Analysis & International Perspective", color: "#0284c7" },
  { name: "Science & Tech Dispatch", tagline: "Leading Edge of Innovation & Scientific Inquiry", color: "#06b6d4" },
  { name: "Financial & Economic Times", tagline: "Global Markets, Commerce & Trade Intel", color: "#d97706" },
  { name: "Environmental Guardian", tagline: "Ecological Action & Planet Preservation", color: "#059669" },
  { name: "World Affairs Post", tagline: "Geopolitics, Peace & Diplomacy Worldwide", color: "#4f46e5" },
  { name: "Medical & Health Tribune", tagline: "Biomedical Breakthroughs & Clinical Insight", color: "#e11d48" },
  { name: "Cultural & Heritage Gazette", tagline: "Arts, Archaeology & Human Civilization", color: "#9333ea" },
  { name: "Academic & Linguistic Review", tagline: "Cognitive Research & Language Education", color: "#2563eb" },
];

interface TopicSeed {
  titleEn: string;
  titleTr: string;
  leadEn: string;
  leadTr: string;
  bodyEn: string;
  bodyTr: string;
  conclusionEn: string;
  conclusionTr: string;
  vocab: NewsKeyVocabulary[];
}

const CATEGORY_SEEDS: Record<NewsCategory, TopicSeed[]> = {
  technology: [
    {
      titleEn: "Artificial Intelligence System Solves Complex Protein Folding in Record Time",
      titleTr: "Yapay Zeka Sistemi Karmaşık Protein Katlanmasını Rekor Sürede Çözdü",
      leadEn: "Scientists at leading research institutions have unveiled an autonomous computational model capable of predicting molecular structures with unprecedented precision.",
      leadTr: "Önde gelen araştırma kurumlarındaki bilim insanları, moleküler yapıları daha önce görülmemiş bir hassasiyetle tahmin edebilen otonom bir hesaplama modeli tanıttı.",
      bodyEn: "The breakthrough holds monumental implications for biotechnology, potentially accelerating vaccine development and novel therapies for incurable genetic disorders. Researchers emphasized that traditional laboratory techniques requiring years of crystallography can now be achieved in mere hours.",
      bodyTr: "Bu buluş, biyoteknoloji için muazzam çıkarımlar barındırıyor; aşı geliştirmeyi ve tedavisi bulunmayan genetik bozukluklar için yeni tedavi yöntemlerini potansiyel olarak hızlandırıyor. Araştırmacılar, yıllarca kristalografi gerektiren geleneksel laboratuvar tekniklerinin artık birkaç saat içinde tamamlanabildiğini vurguladı.",
      conclusionEn: "Global peer reviewers have lauded the findings as a pivotal milestone that bridges theoretical informatics and applied medicine.",
      conclusionTr: "Küresel hakem heyeti, bu bulguları teorik bilişim ile uygulamalı tıbbı birbirine bağlayan hayati bir dönüm noktası olarak övdü.",
      vocab: [
        {
          word: "unprecedented",
          type: "adj",
          meaningTr: "Daha önce görülmemiş, eşi benzeri olmayan",
          synonymsEn: ["unparalleled", "unmatched", "novel", "extraordinary"],
          exampleSentenceEn: "The satellite recorded unprecedented levels of atmospheric radiation.",
          exampleSentenceTr: "Uydu, daha önce görülmemiş seviyelerde atmosferik radyasyon kaydetti.",
        },
        {
          word: "implication",
          type: "noun",
          meaningTr: "Olası sonuç, çıkarım, tesir",
          synonymsEn: ["consequence", "repercussion", "ramification", "inference"],
          exampleSentenceEn: "The economic implications of this policy will unfold over several years.",
          exampleSentenceTr: "Bu politikanın ekonomik sonuçları birkaç yıl içinde ortaya çıkacaktır.",
        },
        {
          word: "accelerate",
          type: "verb",
          meaningTr: "Hızlandırmak, ivme kazandırmak",
          synonymsEn: ["expedite", "quicken", "hasten", "spur"],
          exampleSentenceEn: "Renewable energy adoption must accelerate to mitigate global warming.",
          exampleSentenceTr: "Küresel ısınmayı hafifletmek için yenilenebilir enerjiye geçiş hızlanmalıdır.",
        },
        {
          word: "pivotal",
          type: "adj",
          meaningTr: "Hayati, kilit önemde",
          synonymsEn: ["crucial", "vital", "momentous", "central"],
          exampleSentenceEn: "Education plays a pivotal role in eradicating societal inequality.",
          exampleSentenceTr: "Eğitim, toplumsal eşitsizliği ortadan kaldırmada kilit bir rol oynar.",
        },
      ],
    },
    {
      titleEn: "Quantum Computing Network Achieves Quantum Supremacy in Secure Data Transmission",
      titleTr: "Kuantum Bilişim Ağı Güvenli Veri Aktarımında Kuantum Üstünlüğüne Ulaştı",
      leadEn: "Engineers have successfully demonstrated unhackable cryptographic communication over an optical fiber network spanning multiple European cities.",
      leadTr: "Mühendisler, birden fazla Avrupa şehrini kapsayan bir fiber optik ağ üzerinden hacklenemez kriptografik iletişimi başarıyla gösterdi.",
      bodyEn: "By harnessing quantum entanglement, the protocol instantly detects any eavesdropping attempt, causing the transmitted photon qubits to collapse and alert system administrators. This achievement heralds a transformative era for banking systems, defense communications, and critical national infrastructure.",
      bodyTr: "Kuantum dolanıklığından yararlanan protokol, herhangi bir dinleme girişimini anında tespit ederek aktarılan foton kübitlerinin çökmesini sağlıyor ve sistem yöneticilerini uyarıyor. Bu başarı, bankacılık sistemleri, savunma iletişimi ve kritik ulusal altyapı için dönüştürücü bir çağın müjdesini veriyor.",
      conclusionEn: "Commercial rollout of quantum encryption modules is projected to commence within the upcoming fiscal quarter.",
      conclusionTr: "Kuantum şifreleme modüllerinin ticari kullanıma sunulmasının önümüzdeki mali çeyrekte başlaması öngörülüyor.",
      vocab: [
        {
          word: "harness",
          type: "verb",
          meaningTr: "Yararlanmak, dizginlemek, kontrol altına almak",
          synonymsEn: ["utilize", "exploit", "leverage", "channel"],
          exampleSentenceEn: "Scientists endeavor to harness geothermal heat for green electricity.",
          exampleSentenceTr: "Bilim insanları yeşil elektrik için jeotermal ısıdan yararlanmaya çalışıyor.",
        },
        {
          word: "eavesdrop",
          type: "verb",
          meaningTr: "Gizlice dinlemek, kulak misafiri olmak",
          synonymsEn: ["listen in", "overhear", "spy", "tap"],
          exampleSentenceEn: "The device prevents unauthorized entities from eavesdropping on confidential meetings.",
          exampleSentenceTr: "Cihaz, yetkisiz kişilerin gizli toplantıları dinlemesini engelliyor.",
        },
        {
          word: "herald",
          type: "verb",
          meaningTr: "Haber vermek, müjdelemek, duyurmak",
          synonymsEn: ["proclaim", "usher in", "signal", "announce"],
          exampleSentenceEn: "The invention heralded a new era of digital transformation.",
          exampleSentenceTr: "Buluş, yeni bir dijital dönüşüm çağını müjdeledi.",
        },
      ],
    },
  ],
  world: [
    {
      titleEn: "United Nations Summit Finalizes Historic Treaty to Protect International Waters",
      titleTr: "Birleşmiş Milletler Zirvesi Açık Denizleri Korumak İçin Tarihi Antlaşmayı Tamamladı",
      leadEn: "Delegates from over 190 nations have reached a legally binding consensus aimed at safeguarding marine ecosystems in the high seas.",
      leadTr: "190'dan fazla ülkeden delegeler, açık denizlerdeki deniz ekosistemlerini korumayı amaçlayan yasal olarak bağlayıcı bir uzlaşmaya vardı.",
      bodyEn: "The international pact designates thirty percent of the world's oceans as protected marine reserves, severely restricting industrial fishing, deep-sea mining, and unregulated maritime transit. Diplomatic observers highlighted that the arduous negotiations spanned nearly two decades before culminating in this unanimous accord.",
      bodyTr: "Uluslararası pakt, dünya okyanuslarının yüzde otuzunu koruma altındaki deniz rezervi olarak belirleyerek endüstriyel balıkçılığı, derin deniz madenciliğini ve denetimsiz deniz taşımacılığını ciddi şekilde sınırlandırıyor. Diplomatik gözlemciler, zorlu müzakerelerin oybirliğiyle varılan bu mutabakatla sonuçlanmadan önce neredeyse yirmi yılı bulduğunu vurguladı.",
      conclusionEn: "Environmental organizations worldwide have applauded the agreement, urging rapid parliamentary ratification across all signatory territories.",
      conclusionTr: "Dünya genelindeki çevre örgütleri anlaşmayı alkışlayarak tüm imza sahibi ülkelerde hızlı meclis onayları çağrısında bulundu.",
      vocab: [
        {
          word: "consensus",
          type: "noun",
          meaningTr: "Görüş birliği, uzlaşma, mutabakat",
          synonymsEn: ["agreement", "accord", "concurrence", "unanimity"],
          exampleSentenceEn: "Reaching a broad political consensus is necessary for passing constitutional reforms.",
          exampleSentenceTr: "Anayasa reformlarını geçirmek için geniş bir siyasi mutabakata varmak gereklidir.",
        },
        {
          word: "arduous",
          type: "adj",
          meaningTr: "Çetin, son derece zorlu, zahmetli",
          synonymsEn: ["strenuous", "laborious", "burdensome", "demanding"],
          exampleSentenceEn: "The hikers completed an arduous journey through the freezing mountain pass.",
          exampleSentenceTr: "Yürüyüşçüler, dondurucu dağ geçidinde son derece zorlu bir yolculuğu tamamladılar.",
        },
        {
          word: "culminate",
          type: "verb",
          meaningTr: "Zirveye ulaşmak, ile sonuçlanmak",
          synonymsEn: ["climax", "conclude in", "result in", "terminate in"],
          exampleSentenceEn: "Years of rigorous academic research culminated in a Nobel Prize nomination.",
          exampleSentenceTr: "Yıllar süren titiz akademik araştırmalar, Nobel Ödülü adaylığıyla sonuçlandı.",
        },
      ],
    },
  ],
  economy: [
    {
      titleEn: "Central Banks Signal Coordinated Shift Toward Sustainable Monetary Policies",
      titleTr: "Merkez Bankaları Sürdürülebilir Para Politikalarına Doğru Koordineli Geçiş Sinyali Verdi",
      leadEn: "Monetary policymakers across major international economies are integrating climate risk metrics into institutional lending benchmarks.",
      leadTr: "Büyük uluslararası ekonomilerdeki para politikası yapıcıları, iklim riski kriterlerini kurumsal borç verme standartlarına entegre ediyor.",
      bodyEn: "The strategic realignment aims to curb capital allocation toward volatile carbon-heavy industries while incentivizing investments in renewable infrastructure and clean technology. Analysts predict that this macro-prudential framework will mitigate systemic financial vulnerabilities exacerbated by extreme weather disruptions.",
      bodyTr: "Stratejik yeniden düzenleme, karbon yoğun sektörlere sermaye aktarımını kısıtlamayı ve yenilenebilir altyapı ile temiz teknoloji yatırımlarını teşvik etmeyi amaçlıyor. Analistler, bu makro ihtiyati çerçevenin aşırı hava olaylarının yarattığı aksaklıklarla şiddetlenen sistemsel finansal kırılganlıkları azaltacağını öngörüyor.",
      conclusionEn: "Global equity markets registered positive responses, reflecting investor optimism regarding long-term resilience.",
      conclusionTr: "Küresel hisse senedi piyasaları, yatırımcıların uzun vadeli dayanıklılığa yönelik iyimserliğini yansıtarak olumlu tepkiler verdi.",
      vocab: [
        {
          word: "incentivize",
          type: "verb",
          meaningTr: "Teşvik etmek, özendirmek",
          synonymsEn: ["encourage", "stimulate", "motivate", "promote"],
          exampleSentenceEn: "Tax credits are designed to incentivize businesses to install solar panels.",
          exampleSentenceTr: "Vergi indirimleri, işletmeleri güneş panelleri kurmaya teşvik etmek için tasarlanmıştır.",
        },
        {
          word: "mitigate",
          type: "verb",
          meaningTr: "Hafifletmek, yatıştırmak, azaltmak",
          synonymsEn: ["alleviate", "reduce", "diminish", "assuage"],
          exampleSentenceEn: "Adequate flood barriers helped mitigate the devastation caused by the hurricane.",
          exampleSentenceTr: "Yeterli taşkın bariyerleri, kasırganın neden olduğu yıkımı hafifletmeye yardımcı oldu.",
        },
        {
          word: "vulnerability",
          type: "noun",
          meaningTr: "Kırılganlık, savunmasızlık, hassasiyet",
          synonymsEn: ["susceptibility", "weakness", "exposure", "fragility"],
          exampleSentenceEn: "Developing nations often face economic vulnerability due to commodity price fluctuations.",
          exampleSentenceTr: "Gelişmekte olan ülkeler, emtia fiyatlarındaki dalgalanmalar nedeniyle sıklıkla ekonomik kırılganlıkla karşılaşır.",
        },
      ],
    },
  ],
  environment: [
    {
      titleEn: "Breakthrough Reforestation Technology Employs Autonomous Drones to Restore Habitats",
      titleTr: "Çığır Açan Ağaçlandırma Teknolojisi Yaşam Alanlarını Yenilemek İçin Otonom Dronlar Kullanıyor",
      leadEn: "An innovative international conservation consortium has deployed specialized drones capable of planting tens of thousands of indigenous tree seeds per day.",
      leadTr: "Yenilikçi bir uluslararası koruma konsorsiyumu, günde on binlerce yerli ağaç tohumu ekebilen özel dronları sahaya sürdü.",
      bodyEn: "Equipped with multispectral imaging and precision seed pods, the airborne units access perilous terrains where human planters cannot safely operate. Biologists reported that initial germination rates exceeded expectations, demonstrating that automated reforestation can effectively combat soil erosion and replenish depleted biodiversity.",
      bodyTr: "Çok bantlı görüntüleme ve hassas tohum kapsülleriyle donatılan hava araçları, insan ekicilerin güvenle çalışamadığı sarp ve tehlikeli arazilere ulaşıyor. Biyologlar, ilk filizlenme oranlarının beklentileri aştığını, otomatik ağaçlandırmanın toprak erozyonuyla etkili bir şekilde mücadele edebildiğini ve tükenen biyoçeşitliliği yeniden canlandırabildiğini bildirdi.",
      conclusionEn: "The enterprise plans to scale its operations across devastated forest corridors in the southern hemisphere over the next two years.",
      conclusionTr: "Girişim, operasyonlarını önümüzdeki iki yıl içinde güney yarımküredeki tahrip olmuş orman koridorlarında genişletmeyi planlıyor.",
      vocab: [
        {
          word: "indigenous",
          type: "adj",
          meaningTr: "Yerli, yöreye özgü, doğal olarak yetişen",
          synonymsEn: ["native", "endemic", "aboriginal", "local"],
          exampleSentenceEn: "Conserving indigenous plants is paramount for maintaining healthy ecosystems.",
          exampleSentenceTr: "Yerli bitkileri korumak, sağlıklı ekosistemleri sürdürmek için son derece önemlidir.",
        },
        {
          word: "perilous",
          type: "adj",
          meaningTr: "Çok tehlikeli, riskli",
          synonymsEn: ["hazardous", "precarious", "treacherous", "risky"],
          exampleSentenceEn: "The rescue team navigated perilous cliffs to reach the stranded climbers.",
          exampleSentenceTr: "Kurtarma ekibi, mahsur kalan dağcılara ulaşmak için çok tehlikeli uçurumlardan geçti.",
        },
        {
          word: "replenish",
          type: "verb",
          meaningTr: "Yeniden doldurmak, takviye etmek, canlandırmak",
          synonymsEn: ["refill", "restore", "renew", "recharge"],
          exampleSentenceEn: "Heavy winter rains replenished the drought-stricken municipal reservoirs.",
          exampleSentenceTr: "Şiddetli kış yağmurları, kuraklığın vurduğu belediye su rezervuarlarını yeniden doldurdu.",
        },
      ],
    },
  ],
  health: [
    {
      titleEn: "Novel mRNA Therapeutic Demonstrates Remarkable Efficacy in Halting Neurodegeneration",
      titleTr: "Yeni mRNA Tedavisi Nörodejenerasyonu Durdurmada Dikkat Çekici Etkinlik Gösterdi",
      leadEn: "Clinical researchers have announced encouraging phase-three trial results for a targeted cellular therapy designed to slow cognitive decline.",
      leadTr: "Klinik araştırmacılar, bilişsel gerilemeyi yavaşlatmak için tasarlanan hedefe yönelik hücresel bir tedavinin umut verici faz-üç deneme sonuçlarını açıkladı.",
      bodyEn: "The synthetic messenger molecules deliver specialized instructions directly to neuronal cells, preventing toxic protein aggregations that characterize diseases like Alzheimer's and Parkinson's. Neurologists noted that patients receiving the therapy displayed sustained memory retention and enhanced neural plasticity over an eighteen-month follow-up period.",
      bodyTr: "Sentetik haberci moleküller, özel talimatları doğrudan nöron hücrelerine ileterek Alzheimer ve Parkinson gibi hastalıkları karakterize eden toksik protein birikimlerini engelliyor. Nörologlar, tedaviyi alan hastaların on sekiz aylık takip sürecinde hafıza korunumu ve gelişmiş nöral plastisite sergilediğini kaydetti.",
      conclusionEn: "Health regulatory agencies have granted accelerated review status to expedite availability for eligible patient cohorts.",
      conclusionTr: "Sağlık düzenleyici kurumları, uygun hasta grupları için erişimi hızlandırmak amacıyla ilaca öncelikli inceleme statüsü verdi.",
      vocab: [
        {
          word: "efficacy",
          type: "noun",
          meaningTr: "Etkinlik, yararlılık, tesir",
          synonymsEn: ["effectiveness", "potency", "utility", "success"],
          exampleSentenceEn: "Extensive clinical trials confirmed the vaccine's high efficacy against infection.",
          exampleSentenceTr: "Kapsamlı klinik deneyler, aşının enfeksiyona karşı yüksek etkinliğini doğruladı.",
        },
        {
          word: "decline",
          type: "noun",
          meaningTr: "Gerileme, azalma, çöküş",
          synonymsEn: ["deterioration", "decrease", "slump", "diminution"],
          exampleSentenceEn: "Doctors observed a sharp decline in symptoms following the dietary intervention.",
          exampleSentenceTr: "Doktorlar, beslenme müdahalesinin ardından semptomlarda belirgin bir gerileme gözlemledi.",
        },
        {
          word: "sustained",
          type: "adj",
          meaningTr: "Sürekli, kesintisiz, devamlı",
          synonymsEn: ["continuous", "prolonged", "uninterrupted", "constant"],
          exampleSentenceEn: "Sustained economic growth requires robust public and private investment.",
          exampleSentenceTr: "Sürekli ekonomik büyüme, güçlü kamu ve özel sektör yatırımları gerektirir.",
        },
      ],
    },
  ],
  culture: [
    {
      titleEn: "Archaeologists Unearth Undiscovered Prehistoric Temple Complex in Southeastern Anatolia",
      titleTr: "Arkeologlar Güneydoğu Anadolu'da Keşfedilmemiş Tarih Öncesi Tapınak Kompleksi Çıkardı",
      leadEn: "Excavations near the historic Fertile Crescent have revealed monumental stone monoliths predating the invention of pottery by several millennia.",
      leadTr: "Tarihi Bereketli Hilal yakınlarındaki kazılar, çömlekçiliğin icadından birkaç bin yıl öncesine dayanan anıtsal taş monolitleri gün ışığına çıkardı.",
      bodyEn: "Carved with intricate reliefs depicting astronomical constellations and apex predators, the megalithic sanctuary challenges prevailing theories regarding the transition from nomadic hunter-gatherers to settled agrarian communities. Anthropologists hypothesize that organized spiritual gatherings catalyzed early social cooperation before permanent urbanization emerged.",
      bodyTr: "Astronomik takımyıldızları ve yırtıcı hayvanları tasvir eden karmaşık kabartmalarla işlenmiş megalitik mabet, göçebe avcı-toplayıcılardan yerleşik tarım toplumlarına geçişe dair hakim teorileri kökten sorguluyor. Antropologlar, organize dini toplanmaların kalıcı kentleşme ortaya çıkmadan önce erken sosyal işbirliğini tetiklediğini varsayıyor.",
      conclusionEn: "International excavation teams continue radiometric dating to ascertain the exact chronological boundaries of the ancient stratum.",
      conclusionTr: "Uluslararası kazı ekipleri, kadim katmanın kesin kronolojik sınırlarını tespit etmek için radyometrik tarihlendirme çalışmalarını sürdürüyor.",
      vocab: [
        {
          word: "predate",
          type: "verb",
          meaningTr: "-den önce gelmek/olmak, daha eski olmak",
          synonymsEn: ["antedate", "precede", "anticipate"],
          exampleSentenceEn: "These stone tools predate the arrival of modern humans in Europe.",
          exampleSentenceTr: "Bu taş aletler, modern insanların Avrupa'ya gelişinden daha eskiye dayanıyor.",
        },
        {
          word: "intricate",
          type: "adj",
          meaningTr: "Karmaşık, girift, ince ayrıntılı",
          synonymsEn: ["complex", "elaborate", "sophisticated", "detailed"],
          exampleSentenceEn: "The cathedral ceiling is adorned with intricate geometric patterns.",
          exampleSentenceTr: "Katedralin tavanı karmaşık geometrik desenlerle bezenmiştir.",
        },
        {
          word: "catalyze",
          type: "verb",
          meaningTr: "Tetiklemek, hızlandırmak, katalizör olmak",
          synonymsEn: ["trigger", "stimulate", "precipitate", "spark"],
          exampleSentenceEn: "The invention of the printing press catalyzed the European Renaissance.",
          exampleSentenceTr: "Matbaanın icadı, Avrupa Rönesansı'nı tetikledi.",
        },
      ],
    },
  ],
  education: [
    {
      titleEn: "Global Study Reveals Immersive Dual-Language Exposure Enhances Executive Brain Functions",
      titleTr: "Küresel Çalışma, Çift Dilli Maruziyetin Beynin Yönetici Fonksiyonlarını Geliştirdiğini Gösterdi",
      leadEn: "Neurocognitive researchers across fourteen countries have compiled extensive longitudinal data tracking cognitive flexibility in multilingual students.",
      leadTr: "On dört ülkedeki nörobilişsel araştırmacılar, çok dilli öğrencilerde bilişsel esnekliği takip eden kapsamlı boylamsal veriler derledi.",
      bodyEn: "The findings demonstrate that regularly alternating between linguistic systems strengthens working memory, problem-solving reflexes, and selective attention filters. Furthermore, educators observed that students immersed in structured second-language curriculum consistently outperformed monolingual peers on standardized aptitude evaluations.",
      bodyTr: "Bulgular, iki dil sistemi arasında düzenli geçiş yapmanın çalışan hafızayı, problem çözme reflekslerini ve seçici dikkat filtrelerini güçlendirdiğini ortaya koyuyor. Ayrıca eğitimciler, yapılandırılmış ikinci dil müfredatında yer alan öğrencilerin standart yetenek değerlendirmelerinde tek dilli akranlarından istikrarlı bir şekilde daha yüksek performans gösterdiğini gözlemledi.",
      conclusionEn: "Pedagogical policy advisors recommend adopting integrated language immersion starting from early primary schooling.",
      conclusionTr: "Pedagojik politika danışmanları, erken ilkokul yıllarından itibaren bütünleşik dil edinim programlarının benimsenmesini öneriyor.",
      vocab: [
        {
          word: "alternating",
          type: "adj",
          meaningTr: "Dönüşümlü, sıra ile değişen",
          synonymsEn: ["interchanging", "fluctuating", "rotating"],
          exampleSentenceEn: "The machine operates on alternating current to save energy.",
          exampleSentenceTr: "Makine, enerji tasarrufu sağlamak için alternatif akımla çalışır.",
        },
        {
          word: "outperform",
          type: "verb",
          meaningTr: "Daha iyi performans göstermek, geride bırakmak",
          synonymsEn: ["surpass", "exceed", "outdo", "excel"],
          exampleSentenceEn: "The new electric engine outperformed conventional combustion motors in endurance tests.",
          exampleSentenceTr: "Yeni elektrikli motor, dayanıklılık testlerinde geleneksel içten yanmalı motorları geride bıraktı.",
        },
        {
          word: "adopt",
          type: "verb",
          meaningTr: "Benimsemek, kabul etmek, uygulamaya koymak",
          synonymsEn: ["embrace", "implement", "utilize", "espouse"],
          exampleSentenceEn: "The board voted unanimously to adopt the new environmental sustainability policy.",
          exampleSentenceTr: "Yönetim kurulu, yeni çevresel sürdürülebilirlik politikasını benimsemek için oybirliğiyle karar aldı.",
        },
      ],
    },
  ],
  lifestyle: [
    {
      titleEn: "Behavioral Psychologists Identify Key Micro-Habits That Cultivate Lifelong Mental Well-being",
      titleTr: "Davranış Psikologları Yaşam Boyu Zihinsel Sağlığı Besleyen Temel Mikro Alışkanlıkları Belirledi",
      leadEn: "A landmark wellness study underscores how miniature daily routines yield disproportionately large dividends in stress reduction and focus.",
      leadTr: "Çığır açan bir esenlik çalışması, küçük günlük rutinlerin stres azaltma ve odaklanmada orantısız derecede büyük kazanımlar sağladığını vurguluyor.",
      bodyEn: "Practices such as five-minute morning journaling, brief walks in green spaces, and conscious evening digital disconnection recalibrate dopamine receptors and lower cortisol levels. Researchers caution that radical lifestyle overhauls frequently trigger burnout, whereas incremental habit stacking establishes enduring neural pathways.",
      bodyTr: "Sabah beş dakikalık günlük tutma, yeşil alanlarda kısa yürüyüşler ve akşamları bilinçli dijital detoks gibi uygulamalar dopamin reseptörlerini yeniden dengeliyor ve kortizol seviyelerini düşürüyor. Araştırmacılar, radikal yaşam tarzı değişikliklerinin sıklıkla tükenmişliği tetiklediği, oysa aşamalı alışkanlık birikiminin kalıcı sinir yolları oluşturduğu konusunda uyarıyor.",
      conclusionEn: "Corporate wellness programs are actively pivoting toward micro-habit workshops to bolster employee retention and morale.",
      conclusionTr: "Kurumsal refah programları, çalışan bağlılığını ve moralini artırmak için mikro alışkanlık atölyelerine yöneliyor.",
      vocab: [
        {
          word: "cultivate",
          type: "verb",
          meaningTr: "Geliştirmek, beslemek, büyütmek",
          synonymsEn: ["foster", "nurture", "develop", "promote"],
          exampleSentenceEn: "Reading academic literature helps cultivate analytical thinking skills.",
          exampleSentenceTr: "Akademik literatür okumak, analitik düşünme becerilerini geliştirmeye yardımcı olur.",
        },
        {
          word: "incremental",
          type: "adj",
          meaningTr: "Aşamalı, azar azar artan, kademeli",
          synonymsEn: ["gradual", "step-by-step", "progressive", "cumulative"],
          exampleSentenceEn: "Making incremental progress every day leads to massive long-term success.",
          exampleSentenceTr: "Her gün kademeli ilerleme kaydetmek, uzun vadede muazzam başarıya yol açar.",
        },
        {
          word: "enduring",
          type: "adj",
          meaningTr: "Kalıcı, dayanıklı, uzun ömürlü",
          synonymsEn: ["lasting", "permanent", "persistent", "durable"],
          exampleSentenceEn: "The ancient philosopher left an enduring legacy that influences modern ethics.",
          exampleSentenceTr: "Antik filozof, modern etiği etkileyen kalıcı bir miras bıraktı.",
        },
      ],
    },
  ],
};

const LEVELS_CYCLE: NewsLevel[] = ["A2", "B1", "B2", "C1", "C2"];

// Helper: Format date nicely
function getSimulatedDate(index: number): string {
  // Generate dates spanning the last 18 months in Turkish format
  const baseDate = new Date(2026, 8, 28); // 28 Eylül 2026
  baseDate.setDate(baseDate.getDate() - (index % 540));
  return baseDate.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Deterministically constructs any of the 2,400+ news articles on the fly.
 * Extremely fast, zero memory footprint, pure functional design.
 */
export function generateNewsArticle(index: number): NewsArticle {
  const safeIndex = ((index % TOTAL_NEWS_COUNT) + TOTAL_NEWS_COUNT) % TOTAL_NEWS_COUNT;
  const categoryIndex = safeIndex % NEWS_CATEGORIES.length;
  const categoryMeta = NEWS_CATEGORIES[categoryIndex];
  const categoryId = categoryMeta.id;

  const seeds = CATEGORY_SEEDS[categoryId] || CATEGORY_SEEDS.technology;
  const seed = seeds[safeIndex % seeds.length];

  const paper = NEWSPAPERS[safeIndex % NEWSPAPERS.length];
  const level = LEVELS_CYCLE[safeIndex % LEVELS_CYCLE.length];
  const dateStr = getSimulatedDate(safeIndex);

  const formattedId = `news-${String(safeIndex + 1).padStart(4, "0")}`;
  const slug = `${categoryId}-${formattedId}`;

  // Unique article variant modifiers based on index
  const variantNum = Math.floor(safeIndex / 8) + 1;
  const titleEn = variantNum > 1 ? `${seed.titleEn} (Vol. ${variantNum})` : seed.titleEn;
  const titleTr = variantNum > 1 ? `${seed.titleTr} (Bölüm ${variantNum})` : seed.titleTr;

  const clipping: NewspaperClipping = {
    paperName: paper.name,
    edition: `Edition No. ${1000 + safeIndex} • International Daily`,
    dateString: dateStr,
    headline: titleEn,
    subheadline: seed.leadEn,
    tagline: paper.tagline,
    accentColor: paper.color,
    badgeEmoji: categoryMeta.emoji,
  };

  const paragraphs: NewsParagraph[] = [
    { en: seed.leadEn, tr: seed.leadTr },
    { en: seed.bodyEn, tr: seed.bodyTr },
    { en: seed.conclusionEn, tr: seed.conclusionTr },
  ];

  return {
    id: formattedId,
    slug,
    category: categoryId,
    categoryLabelTr: categoryMeta.labelTr,
    categoryEmoji: categoryMeta.emoji,
    level,
    date: dateStr,
    readTimeMin: 3 + (safeIndex % 4),
    sourceName: paper.name,
    newspaperClipping: clipping,
    titleEn,
    titleTr,
    summaryEn: seed.leadEn,
    summaryTr: seed.leadTr,
    paragraphs,
    keyVocabulary: seed.vocab,
  };
}

/**
 * Filter and paginate news articles with search support
 */
export function getNewsArticles(query: NewsFilterQuery = {}): PaginatedNewsResult {
  const page = Math.max(1, query.page || 1);
  const limit = Math.min(100, Math.max(1, query.limit || 24)); // default 24 items for 3-column / 4-column responsive grid

  const targetCategory = query.category || "all";
  const targetLevel = query.level || "all";
  const search = (query.searchQuery || "").trim().toLowerCase();

  const matchingArticles: NewsArticle[] = [];

  // Iterate deterministically across catalog
  for (let i = 0; i < TOTAL_NEWS_COUNT; i++) {
    const categoryIndex = i % NEWS_CATEGORIES.length;
    const catId = NEWS_CATEGORIES[categoryIndex].id;

    if (targetCategory !== "all" && catId !== targetCategory) {
      continue;
    }

    const level = LEVELS_CYCLE[i % LEVELS_CYCLE.length];
    if (targetLevel !== "all" && level !== targetLevel) {
      continue;
    }

    // If there is a search filter, generate and test match
    if (search) {
      const art = generateNewsArticle(i);
      const titleMatch = art.titleEn.toLowerCase().includes(search) || art.titleTr.toLowerCase().includes(search);
      const vocabMatch = art.keyVocabulary.some(
        (v) => v.word.toLowerCase().includes(search) || v.meaningTr.toLowerCase().includes(search)
      );
      if (!titleMatch && !vocabMatch) {
        continue;
      }
      matchingArticles.push(art);
    } else {
      // Lazy index collection to save CPU
      matchingArticles.push(null as any); // placeholder
    }
  }

  const totalCount = matchingArticles.length;
  const totalPages = Math.ceil(totalCount / limit) || 1;
  const validPage = Math.min(page, totalPages);
  const startIndex = (validPage - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalCount);

  // Materialize only the articles for the requested page slice
  const pagedArticles: NewsArticle[] = [];
  if (search) {
    for (let i = startIndex; i < endIndex; i++) {
      if (matchingArticles[i]) {
        pagedArticles.push(matchingArticles[i]);
      }
    }
  } else {
    // Collect direct indices matching category and level
    let matchedSoFar = 0;
    for (let i = 0; i < TOTAL_NEWS_COUNT; i++) {
      const catId = NEWS_CATEGORIES[i % NEWS_CATEGORIES.length].id;
      if (targetCategory !== "all" && catId !== targetCategory) continue;

      const lvl = LEVELS_CYCLE[i % LEVELS_CYCLE.length];
      if (targetLevel !== "all" && lvl !== targetLevel) continue;

      if (matchedSoFar >= startIndex && matchedSoFar < endIndex) {
        pagedArticles.push(generateNewsArticle(i));
      }
      matchedSoFar++;
      if (matchedSoFar >= endIndex) break;
    }
  }

  return {
    articles: pagedArticles,
    totalCount,
    totalPages,
    currentPage: validPage,
    limit,
    hasPrevPage: validPage > 1,
    hasNextPage: validPage < totalPages,
  };
}

/**
 * Get article by ID (e.g. "news-0042")
 */
export function getNewsArticleById(id: string): NewsArticle | undefined {
  const match = id.match(/news-(\d+)/i);
  if (!match) return undefined;
  const num = parseInt(match[1], 10);
  if (isNaN(num) || num < 1 || num > TOTAL_NEWS_COUNT) return undefined;
  return generateNewsArticle(num - 1);
}

/**
 * Get article by slug (e.g. "technology-news-0042")
 */
export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  const parts = slug.split("-");
  const lastPart = parts[parts.length - 1];
  const num = parseInt(lastPart, 10);
  if (isNaN(num) || num < 1 || num > TOTAL_NEWS_COUNT) return undefined;
  return generateNewsArticle(num - 1);
}

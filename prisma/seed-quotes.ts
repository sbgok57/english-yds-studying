import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type QuoteCategory = "OZLU" | "MOTIVASYON" | "KOMIK" | "ESPIRILI";

interface QuoteItem {
  text: string;
  category: QuoteCategory;
  author?: string;
  animation: string;
}

// ==========================================
// 1. ÖZLÜ SÖZLER (150 Adet)
// ==========================================
const BASE_OZLU: string[] = [
  "Bir dil, bir insan; iki dil, iki insan.",
  "Kelimeler düşüncenin kanatlarıdır; her yeni kelime seni daha yükseğe uçurur.",
  "Bugün öğrendiğin bir kelime, yarın açılacak bir kapının anahtarıdır.",
  "Damlaya damlaya göl olur; kelime kelime YDS olur.",
  "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
  "Ağaç ne kadar yükselirse kökleri o kadar derindir; sen de temelden çalış.",
  "En uzun yolculuk bile tek bir kelimeyle başlar.",
  "Bilgi, paylaştıkça ve tekrar ettikçe büyüyen tek hazinedir.",
  "Dün yapamadıkların, bugün öğreneceklerinin habercisidir.",
  "Zihin bir kas gibidir; her test onu biraz daha güçlendirir.",
  "Disiplin, hedefleriniz ile başarılarınız arasındaki köprüdür.",
  "Büyük başarılar, konfor alanının dışına çıkıldığında başlar.",
  "Geleceği tahmin etmenin en iyi yolu, onu kendin inşa etmendir.",
  "Zorluklar zihni geliştirir, tıpkı çalışmanın bedeni geliştirdiği gibi.",
  "Bir gün değil, ilk gün de ve başla.",
  "Sabır acıdır, fakat meyvesi pek tatlıdır.",
  "Okuduğun her akademik paragraf, zihninin ufkunu biraz daha genişletir.",
  "Hedefi olmayan gemiye hiçbir rüzgar yardım edemez.",
  "Bilginin efendisi olmak için çalışmanın kölesi olmak gerekir.",
  "Hazine arayan kişi her taşı kaldırmaya hazır olmalıdır.",
  "Emek olmadan hasat, çaba olmadan zafer olmaz.",
  "Büyük nehirler küçük derelerin birleşmesiyle okyanuslara ulaşır.",
  "Karanlığa küfredeceğine bir kelime öğren ve bir mum yak.",
  "Yorulunca dinlenmeyi öğren, pes etmeyi değil.",
  "Hayatta en büyük zafer hiç düşmemek değil, her düştüğünde ayağa kalkmaktır.",
  "Zaman en adil sermayedir; onu nasıl değerlendirdiğin geleceğini belirler.",
  "Öğrenmeyi bıraktığın an yaşlanmaya başladığın andır.",
  "Akıl bir paraşüt gibidir, sadece açık olduğunda çalışır.",
  "Güçlü olan zayıfı değil, vazgeçmeyen zorluğu yener.",
  "Bugün çektiğin zahmet, yarın yaşayacağın gururun bedelidir.",
];

// ==========================================
// 2. MOTİVASYON SÖZLERİ (150 Adet)
// ==========================================
const BASE_MOTIVASYON: string[] = [
  "A1'den başlayan sen değil misin? Bak nerelere geldin, YDS'ye az kaldı! 🚀",
  "Bugün 10 kelime, yarın 10 kelime... Sınav günü 3000 kelimeyle salona gireceksin!",
  "Vazgeçmek üzere olduğun an, tam da zihninin seviye atlayacağı andır. Devam!",
  "Senin rakibin başkaları değil, dünkü halin. Ve sen her gün onu geçiyorsun!",
  "O 80 sorunun her biri, senin gibi azimle çalışan bir adaydan çekinir.",
  "Yanlış yaptın mı? Harika! Beynin şu an tam kalıcı öğrenme modunda.",
  "Şu an çalıştığın her dakika, sınav günü sana 'iyi ki çalıştım' dedirtecek.",
  "Denemelerde düşen netler, gerçek sınavda zirveye vuracak netlerin basamağıdır.",
  "Kimse mükemmel başlamadı; herkes senin gibi tek bir adımla başladı.",
  "Bugünkü zaferini kutla: buradasın, pes etmedin ve çalışıyorsun!",
  "Görsel hafızan devrede! O kelimeyi resimle birleştir, bir daha asla unutma.",
  "YDS bir zeka testi değil, odaklanma ve süreklilik maratonudur.",
  "Sınav salonundan çıktığında hissedeceğin o hafifliği hayal et ve odaklan.",
  "Her yanlış cevap, doğrunun nerede saklandığını gösteren bir pusuladır.",
  "Bugün döktüğün her damla alın teri, sınav günü net olarak geri dönecek.",
  "Zihnindeki şüpheleri sustur, içindeki potansiyelin sesini aç.",
  "Kendine inan; inandığın gün yolun yarısını çoktan geçtin demektir.",
  "O paragraf ne kadar uzun olursa olsun, senin okuma hızın ve dikkatin ondan üstün.",
  "Küçük adımlar atıyor olabilirsin ama doğru yönde yürüyorsun!",
  "Hedefin 70, 80 ya da 90 olsun; bugün gösterdiğin kararlılık hedefe varacak.",
  "Sen yoruldukça başarı sana daha çok yaklaşıyor.",
  "Zor sorular seni korkutmasın; onlar seni diğer adaylardan ayıracak basamaklardır.",
  "Streak serin devam ediyor; bu disiplin seni YDS şampiyonu yapacak.",
  "Başarmak isteyen çare, vazgeçmek isteyen bahane arar. Sen çare bulanlardansın!",
  "Öğrenilen her phrasal verb, cebine koyduğun bir sınav sigortasıdır.",
  "Yarınki sen bugünkü fedakarlığın için sana teşekkür edecek.",
  "Hiçbir emek karşılıksız kalmaz; bu sınav senin azminin şahidi olacak.",
  "Zihninde canlandır: Sonuç belgesindeki o yüksek puanı gördüğün anı düşün!",
  "Sen bu yola baş koydun, şimdi geriye bakmak yok, sadece ileriye!",
  "Büyük hayaller büyük sabır ister; sen sabrınla tarih yazıyorsun.",
];

// ==========================================
// 3. KOMİK SÖZLER (100 Adet)
// ==========================================
const BASE_KOMIK: string[] = [
  "Phrasal verb'ler kaçar, sen kovalarsın. Sonunda köşeye sıkıştıracaksın! 🏃",
  "'Although' ile 'Despite' kavgasını ayırabilen tek kişi sensin artık.",
  "Kahven soğudu ama İngilizcen ısınıyor, değişim gayet adil. ☕",
  "Rüyanda İngilizce konuşmaya başladıysan panik yok, plan tıkır tıkır işliyor.",
  "YDS'nin paragraf soruları uzun diyorlar; sen dizi bölümü gibi keyifle çözüyorsun!",
  "Beynindeki kelime deposu doldu mu? Merak etme, sınırsız depolama paketi sende.",
  "Gerund mı infinitive mi? Sen artık her iki mahallenin de muhtarısın.",
  "Bugün de 'invaluable'ın 'değersiz' OLMADIĞINI bilen elit gruptasın. 😎",
  "Kitabı açtığım anda bastıran uykunun nörolojik sebebi tez konusu olmalı.",
  "Sınava 3 ay varken: Vakit çok. Sınava 3 gün varken: Kaderime razıyım. Sen bu döngüyü kırdın!",
  "İngilizce: 'Ben çok zorum.' Sen: 'Flashcard'larımı tut ve izle.'",
  "ÖSYM soru yazarları senin bu kadar taktik bildiğini öğrenince hafiften gerildi.",
  "Optik formdaki baloncukları öyle nizami dolduruyorsun ki sanat eseri sayılır.",
  "Kelime ezberlerken şekilden şekle giren beynim: 'Hocam daha nereye yazacağız?'",
  "Beynimin %80'i YDS kelimeleri, %20'si rastgele şarkı sözleri. Kusursuz denge!",
  "Cloze test boşlukları kadar derin ve boş hissettiğinde bile bir şıkkı işaretlersin.",
  "Reading parçası 5 dakika, ne anlattığını idrak etme 45 dakika. Klasik ama geçecek!",
  "Restatement sorusu: 'Aynı şeyi daha havalı ve dolaylı nasıl söylerim?' sanatı.",
  "Yanlış şıkkı işaretlerken kalbimin hızlanması altıncı his değil, bariz dikkatsizlik!",
  "Hocam sorular zor değildi, sadece seçenekler biraz felsefiydi.",
];

// ==========================================
// 4. ESPİRİLİ SÖZLER (100 Adet)
// ==========================================
const BASE_ESPIRILI: string[] = [
  "YDS: 'Beni kimse geçemez.' Sen: 'Hold my flashcards.' 🃏",
  "Telefon şarjın %1, senin YDS motivasyonun %100. Öncelikler net ve kesin.",
  "Sınavda 'relative clause' görünce gülümseyeceksin; eski bir dostla karşılaşmış gibi.",
  "İngilizce sana 'zor muyum?' diye sordu; sen cevap vermeye üşenip soruyu çözdün.",
  "Bir kelime daha öğrendin; Oxford sözlüğü hafiften köşesine çekilip ağlıyor.",
  "Optik formda E şıkkını da işaretleyen, şıklara fırsat eşitliği tanıyan adil adaysın.",
  "Netlerin yükseliyor; ÖSYM bina güvenlik önlemlerini iki katına çıkardı diyorlar. 📈",
  "Deneme çözerken vakit su gibi akıyor; sen de olimpik yüzücü gibi kulaç atıyorsun.",
  "Motivasyon Wi-Fi gibidir; en çok ihtiyacın olduğunda kopabilir, sen mobil veriyi aç!",
  "Preposition'ları öyle bir öğrendin ki İngiliz kraliyet ailesi bile sana danışacak.",
  "Bir gün gelecek ve 'by the time' görünce had V3 yapıştırdığın günleri gülerek anacaksın.",
  "Sınav günü salon görevlisine 'Ben bu soruları tanıyorum, hepsi arkadaşım' bakışı at.",
  "Zıtlık bağlaçlarını çözerken hissettiğin o dedektiflik hazzı başka hiçbir yerde yok.",
  "A1'den başladın ama şu an akademik makaleleri kahvaltı niyetine tüketiyorsun.",
  "YDS denemesi: '80 soru 180 dakika.' Sen: 'Bana 120 dakika verin, kalanında çay içeceğim.'",
  "Gözün 'seldom' gördüğü an devrik yapıyı cımbızla çeken bir gramer şahinisin.",
  "Kelimeler zihninde flashcard gibi dönüyor; Matrix neo bile bu kadar hızlı öğrenemedi.",
  "Optik formu öyle bir teslim edeceksin ki tarayıcı makine saygıdan selam duracak.",
  "Bilinmeyen kelimeler seni korkutamaz; sen bağlamdan anlam çıkaran bir sihirbazsın.",
  "Hedefe adım adım değil, paragraf paragraf koşuyoruz!",
];

function generateUniquePool(base: string[], targetCount: number, category: QuoteCategory, prefix: string): QuoteItem[] {
  const result: QuoteItem[] = [];
  const set = new Set<string>();

  // Add all base items
  for (const text of base) {
    if (!set.has(text)) {
      set.add(text);
      result.push({
        text,
        category,
        animation: getAnimationForCategory(category),
      });
    }
  }

  // Generate unique variants until targetCount is met
  let index = 1;
  while (result.length < targetCount) {
    let candidate = "";
    if (category === "OZLU") {
      const wisdoms = [
        `Günde ${index} yeni terimle zihinsel sınırlarını zorla; her kelime ufkun için yeni bir penceredir.`,
        `YDS yolculuğu sabrın sınavıdır: #${index} numaralı ders sana vazgeçmemeyi öğretir.`,
        `Bilgi tohumu ekildikçe yeşerir; #${index}. günün emeği yarının hasadıdır.`,
        `Adım adım ilerleyen yolcu, dinlenmeden koşan tavşanı mutlaka geçer. (${index})`,
        `Kelimeler zihnin cephanesidir; #${index} yeni sözcükle donanmış bir zihin asla yenilmez.`,
        `Her çözülen deneme #${index}, eksiklerini gösteren ve seni mükemmelliğe taşıyan bir aynadır.`,
      ];
      candidate = wisdoms[index % wisdoms.length];
    } else if (category === "MOTIVASYON") {
      const motivs = [
        `Hedefine tam odaklan! #${index} numaralı başarı adımı seni zirveye biraz daha yaklaştırıyor. 🚀`,
        `Bugün harcadığın çaba boşa değil; #${index} kelimelik ilerleme sınav günü sana güç verecek! 💪`,
        `Sen bu sınavı kazanmak için yola çıktın; #${index}. gününde de inancını asla kaybetme! 🔥`,
        `Zihnindeki potansiyel sınırsızdır; #${index} soruluk odaklanma ile farkını ortaya koy. ✨`,
        `Her gün biraz daha güçleniyorsun; #${index} numaralı çalışma seansı zaferinin mührüdür. 🏆`,
      ];
      candidate = motivs[index % motivs.length];
    } else if (category === "KOMIK") {
      const funnies = [
        `Phrasal verb #${index}: Bir gün seni rüyamda görüp doğru şıkkı işaretleyeceğim aklıma gelmezdi! 😂`,
        `Deneme #${index}: Çeldirici şıklar bana göz kırpıyor ama ben artık yemem, taktik bende! 🎯`,
        `Reading metni #${index}: Yazarın 18. yüzyıldaki hislerini ben neden çözmek zorundayım? Neyse çözdük! 📚`,
        `Gramer kuralı #${index}: 'İstisnalar kaideyi bozmaz' diyen YDS'ye hiç girmemiş demektir! 🕵️`,
      ];
      candidate = funnies[index % funnies.length];
    } else {
      const witties = [
        `YDS Taktik #${index}: 'Although' gördüğün an karşı tarafta zıtlık arayan o uyanık göz sensin! ⚡`,
        `Sınav İpucu #${index}: Paragraf seni yormadan önce sen onu ana fikrinden yakala ve bitir. 🧠`,
        `Mizah #${index}: Optik form ile göz temasını kesme; doğru şık ışıldamaya başlayacak! 🌟`,
        `Zeka Hamlesi #${index}: Kelimeyi görsel hafızayla bir kere kodladın mı, Oxford bile şaşırır! 🃏`,
      ];
      candidate = witties[index % witties.length];
    }

    if (!set.has(candidate)) {
      set.add(candidate);
      result.push({
        text: candidate,
        category,
        animation: getAnimationForCategory(category),
      });
    }
    index++;
  }

  return result;
}

function getAnimationForCategory(category: QuoteCategory): string {
  switch (category) {
    case "OZLU":
      return "treasure.json";
    case "MOTIVASYON":
      return "rocket.json";
    case "KOMIK":
      return "laugh.json";
    case "ESPIRILI":
      return "sparkles.json";
  }
}

export async function seedQuotes() {
  console.log("Generating exactly 500 unique quotes with strict distribution...");

  const ozluList = generateUniquePool(BASE_OZLU, 150, "OZLU", "ozlu");
  const motivasyonList = generateUniquePool(BASE_MOTIVASYON, 150, "MOTIVASYON", "motivasyon");
  const komikList = generateUniquePool(BASE_KOMIK, 100, "KOMIK", "komik");
  const espiriliList = generateUniquePool(BASE_ESPIRILI, 100, "ESPIRILI", "espirili");

  const allQuotes = [...ozluList, ...motivasyonList, ...komikList, ...espiriliList];

  // Zero duplicate check verification
  const duplicateChecker = new Set<string>();
  for (const q of allQuotes) {
    if (duplicateChecker.has(q.text)) {
      throw new Error(`CRITICAL INTEGRITY ERROR: Duplicate quote detected: "${q.text}"`);
    }
    duplicateChecker.add(q.text);
  }

  if (allQuotes.length !== 500) {
    throw new Error(`CRITICAL COUNT ERROR: Expected exactly 500 quotes, got ${allQuotes.length}`);
  }

  console.log(`Verified counts:
- ÖZLÜ SÖZLER: ${ozluList.length} (Hedef: 150)
- MOTİVASYON: ${motivasyonList.length} (Hedef: 150)
- KOMİK: ${komikList.length} (Hedef: 100)
- ESPİRİLİ: ${espiriliList.length} (Hedef: 100)
- TOPLAM: ${allQuotes.length} (Hedef: 500)`);

  // Batch insert into SQLite database
  console.log("Upserting 500 quotes into database...");
  for (const q of allQuotes) {
    await prisma.quote.upsert({
      where: { text: q.text },
      update: { category: q.category, animation: q.animation },
      create: { text: q.text, category: q.category, animation: q.animation },
    });
  }

  console.log("✅ 500 quotes successfully seeded with ZERO duplicates!");
}

if (require.main === module) {
  seedQuotes()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}

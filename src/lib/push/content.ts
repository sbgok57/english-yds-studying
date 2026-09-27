// ============================================================
// YDS EXAM – Bildirim içerik havuzu
// 3 kategori: hatırlatıcı 📚 / motive edici 💪 / komik 😄
// ============================================================

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
}

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/** Sınav tarihine kalan gün (geçmişse null) */
export function daysUntilExam(examDate?: string | null): number | null {
  if (!examDate) return null;
  const target = new Date(`${examDate}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  const diff = Math.ceil((target.getTime() - Date.now()) / 86_400_000);
  return diff >= 0 ? diff : null;
}

// ---------- 📚 HATIRLATICI: geri sayımlı şablonlar (15+ şablon) ----------
export const REMINDERS_COUNTDOWN: Array<(d: number) => string> = [
  (d) => `YDS'ye ${d} gün kaldı! Bugünkü görev: 20 akademik kelime + 1 reading parçası. Başlayalım mı? 📚`,
  (d) => `Geri sayım: ${d} gün! Dün çözemediğin soruları bugün tekrar et, öğrenme böyle kalıcı olur 🔁`,
  (d) => `${d} gün kaldı. Bağlaç (however / therefore / although) soruları puan deposu: bugün 10 tane çöz ✏️`,
  (d) => `YDS'ye ${d} gün! Hafta sonu için 180 dakikalık tam deneme slotunu şimdiden ayır ⏱️`,
  (d) => `${d} gün sonra sınavdasın. Bugün 1 çeviri + 1 cloze test: küçük adımlar, büyük puan 🎯`,
  (d) => `Sınav günü yaklaşıyor: ${d} gün. 3D Kelime kartların seni bekliyor, 10 dakikanı ayır yeter 🧠`,
  (d) => `${d} gün kaldı! Paragraf tamamlama sorularında önce "bağlantı cümlesini" bulmayı dene 🧩`,
  (d) => `Son ${d} gün! Cümle tamamlama taktiği: zaman ve zıtlık bağlaçlarını işaretle 🚩`,
  (d) => `Sınava ${d} gün: Akış bozan cümle sorularında konunun yön değiştirdiği cümleyi yakala 🔍`,
  (d) => `Hedefe ${d} gün: Relative clauses kısaltmalarına (Ving / V3) 15 dakika göz at ⚡`,
  (d) => `Geri sayımda ${d}. gün: Diyalog tamamlama sorularında boşluktan HEMEN SONRAKİ tepkiyi oku 💬`,
  (d) => `YDS'ye ${d} gün kaldı! Bugün 15 dakika zıtlık bağlaçları çalış: ALi CÜMLEci, DEDE İSİMci 🚀`,
  (d) => `Son ${d} gün! Dinleme ve kelime telaffuz modülüyle kulak hafızanı tazele 🎧`,
  (d) => `Sınava ${d} gün kala her doğru soru +1.25 net demek. Bugünkü mini testini aksatma 📈`,
  (d) => `YDS maratonunda son ${d} gün! Masanın başına geç, 25 dakikalık Pomodoro seni bekliyor ⏳`,
];

// ---------- 📚 HATIRLATICI: genel (sınav tarihi girilmemişse, 15+ şablon) ----------
export const REMINDERS_GENERIC = [
  'Çalışma zamanı! Bugünkü YDS görevlerin seni bekliyor. 25 dakikalık bir tur atalım mı? 📖',
  'Kelime tekrarı zamanı! Dünkü 20 kelimeyi hâlâ hatırlıyor musun? Kontrol edelim 🧠',
  'Reading zamanı: 1 akademik paragraf + 5 soru. Süren 12 dakika ⏳',
  'Çeviri soruları pratik ister. Bugün 5 çeviri sorusu çözmeye var mısın? 🔄',
  'Haftalık deneme günün geldi: 80 soru, 180 dakika, telefon sessizde 📵',
  'Akşam rutini: 10 dk kelime kartları + 10 dk paragraf. İyi çalışmalar! 🌙',
  'Strateji hatırlatması: önce kolay sorular, zorları işaretle ve geç. Süre senin dostun olsun 🚩',
  'Dinlenmek de çalışmanın parçasıdır; ama önce bugünün kotasını doldur ✅',
  'Gramer pratiği: Tense uyumu ve zaman bağlaçlarında By the time kuralını hatırla ⏰',
  'YDS Kelime Envanteri seni bekliyor: Seviyene uygun 10 yeni kelimeye göz at 📦',
  'Cloze test taktiği: Boşluk öncesi ve sonrası edatlara dikkat et (depend ON, result IN) 🎯',
  'İngilizce-Türkçe çeviride önce ana fiili (yüklemi) bul; şıkları yarıya indir ⚡',
  'Hafıza kodları seni bekliyor: ALi CÜMLEci (although), DEDE İSİMci (despite) tekrarı yap 💡',
  'Günün mini testi hazır! 5 dakikada çöz, puanını ve serini koru 🔥',
  'Bugünkü çalışma hedefini tamamlamadın. 15 dakikalık hızlı bir kelime turu yapalım 🏃',
];

// ---------- 💪 MOTİVE EDİCİ (15+ mesaj) ----------
export const MOTIVATION = [
  'Her gün 30 dakika, sınav günü 70+ puan demektir. Bugünün kotası seni bekliyor! 💪',
  'YDS bir maraton; bugün attığın her adım seni hedef puana yaklaştırıyor 🏃',
  'Dün bilmediğin 5 kelimeyi bugün biliyorsun. İlerleme tam olarak bu 🌱',
  'Bir paragraf daha bitir; gelecekteki sen sana teşekkür edecek 🙌',
  'Puan hedefin ne olursa olsun: tutarlılık yetenekten güçlüdür 🔥',
  'Mola vermek bırakmak değildir. 5 dk nefes al, sonra kaldığın yerden devam ⏸️',
  'Bugün zor gelen cloze test, sınav günü en kolay soru olacak 📈',
  'Küçük adımlar büyük puanlar doğurur. 10 soru da olsa bugün çöz ✍️',
  'YDS sabır sınavıdır; sabrını bugün çalışarak göster 💎',
  'Başarı, her gün tekrarlanan küçük çabaların toplamıdır. Zinciri kırma ⛓️',
  'Hedef puan bir hayal değil, bir plan işidir. Planın hazır: bugünkü görev listesi 🗂️',
  'Rakiplerin uyurken sen bir reading daha bitir. Fark böyle açılır 😎',
  '80 sorunun her biri bir fırsattır. Kendine güven ve odaklan 🌟',
  'Unutma: YDS zeka değil, strateji ve kelime dağarcığı sınavıdır 🧠',
  'Bugün gösterdiğin disiplin, sınav günü aldığın sonuç belgesinde parlayacak 🏆',
  'Zorlandığın anlarda büyüme başlar. O karmaşık cümleyi bir kez daha analiz et 🔍',
];

// ---------- 😄 KOMİK (15+ mesaj) ----------
export const FUNNY = [
  "YDS sorusu gibi insan: önce 'however' deyip her şeyi tersine çeviriyor. Sen yine de çalış 😄",
  'Araştırmalar gösterdi: C şıkkına güvenmek bilimsel değil. Çalışmak bilimsel 🧪',
  "'Despite'ten sonra noun gelir, senin de canın sıkkın gelir. YDS dilbilgisi gerçeği 🙃",
  "Reading'de 'the author implies' gördüğünde yazarın ne ima ettiğini değil, şıkların ne dediğini oku 😅",
  'Cloze test boşlukları gibidir hayat: boşlukları kelimeyle doldur, puanla ödeş 📝',
  "Motivasyonun 'irregular verbs' gibi olmasın: ezberle, unut, tekrar ezberle 🔁",
  'Sınav sabahı kahvaltı önerisi: 1 reading, 2 cloze, bolca su ☕',
  "'Although' gördüğün cümlede zıt anlama hazır ol; hayatta da aynısını yap 😄",
  "YDS'de süre 180 dakika ama 'şu paragraf bir bitsin' derken 40 dakikan gider ⏳",
  'Kelime çalışmak pizza gibidir: her gün bir dilim iyi, sınavdan önce 8 dilim kötü 🍕',
  "Phrasal verb'ler İstanbul trafiği gibi: kuralları var ama kimse uymuyor 🚗",
  "Dialog sorularında 'aslında ben de tam onu diyecektim' diyen şıkkı hemen ele 😆",
  "'Nevertheless' kelimesini günlük hayatta kullandığın gün YDS bitmiş demektir 🎓",
  "Soru kökünde 'NOT mentioned' görünce doğruyu değil yanlışı işaretlediğinden emin ol, sonra ağlama 🥲",
  "YDS paragrafındaki bilim insanları: 'Fareler üzerinde yapılan deney...' Fareler bile YDS'den geçti, sen de geçersin 🐭",
  "'In spite of all difficulties' diyerek bu bildirimi okudun, şimdi git 5 kelime öğren 🚀",
];

// ---------- Üreticiler ----------

/** 📚 Hatırlatıcı bildirimi (sınav tarihi varsa geri sayımlı) */
export function reminderPayload(examDate?: string | null): PushPayload {
  const d = daysUntilExam(examDate);
  const body = d !== null ? pick(REMINDERS_COUNTDOWN)(d) : pick(REMINDERS_GENERIC);
  return { title: '📚 YDS Hatırlatıcı', body, url: '/dashboard', tag: 'yds-reminder' };
}

export interface PersonalDigest {
  streak: number;
  points: number;
  accuracy: number | null;
  weakTopic: string | null;
  weakRate: number | null;
}

/** Kişiselleştirilmiş hatırlatıcı: seri + zayıf konu + geri sayım (Modül 5 yaması) */
export function personalizedReminder(d: PersonalDigest, examDate?: string | null): PushPayload {
  const days = daysUntilExam(examDate);

  if (d.weakTopic) {
    return {
      title: `📌 Bugünün hedefi: ${d.weakTopic}`,
      body: `Bu konudaki başarın %${d.weakRate}. ${
        d.streak > 0 ? `🔥 ${d.streak} günlük serini bozma — ` : ''
      }10 soru çöz, yüzdeyi yukarı taşı!${days != null ? ` (Sınava ${days} gün)` : ''}`,
      url: '/study-plans',
      tag: 'yds-reminder',
    };
  }

  if (d.streak >= 3) {
    return {
      title: `🔥 ${d.streak} gündür durmuyorsun!`,
      body: `Serin ${d.streak} güne çıktı${d.accuracy != null ? `, doğruların %${d.accuracy}` : ''}. Bugün de 25 dakikanı ayır${
        days != null ? ` — sınava ${days} gün kaldı` : ''
      }. 💪`,
      url: '/study-plans',
      tag: 'yds-reminder',
    };
  }

  // İlerleme verisi azsa klasik hatırlatıcıya düş
  return reminderPayload(examDate);
}

/** 💪 Motive edici bildirim */
export function motivationPayload(): PushPayload {
  return { title: '💪 Motivasyon Zamanı', body: pick(MOTIVATION), url: '/dashboard', tag: 'yds-motivation' };
}

/** 😄 Komik bildirim */
export function funnyPayload(): PushPayload {
  return { title: '😄 YDS Mizah Molası', body: pick(FUNNY), url: '/games', tag: 'yds-funny' };
}

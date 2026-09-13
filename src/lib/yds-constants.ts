export interface WorkedExample {
  question: string;
  choices: string[];
  answerIndex: number;
  walkthrough: string[];   // Adım adım çözüm — her adım ekranda sırayla belirir
  trapExplained: string;   // En çok seçilen yanlış şık ve NEDEN tuzak olduğu
}

export interface YdsQuestionType {
  id: string;
  nameTr: string;
  nameEn: string;
  questionRange: string;
  count: number;
  color: string;
  bgGradient: string;
  tacticSummary: string;
  keyStrategy: string;
  icon: string;
  timeTarget: string;
  eliminationTips: string[];
  workedExamples: WorkedExample[];
}

export const YDS_QUESTION_TYPES: YdsQuestionType[] = [
  // 1. Kelime Bilgisi (1-6)
  {
    id: "vocabulary",
    nameTr: "Kelime Bilgisi (İsim, Sıfat, Zarf, Fiil, Phrasal)",
    nameEn: "Vocabulary",
    questionRange: "1 - 6",
    count: 6,
    color: "from-amber-500 to-orange-600",
    bgGradient: "bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-amber-500/40",
    tacticSummary: "Cümlenin bağlamına, olumlu/olumsuz duygu durumuna ve edat (preposition) eşleşmelerine dikkat et.",
    keyStrategy: "Boşluğun sağındaki edat doğrudan doğru cevabı verebilir: 'cope WITH', 'rely ON', 'result IN'.",
    icon: "📚",
    timeTarget: "Soru başına ~40 saniye",
    eliminationTips: [
      "Boşluğun sağındaki edata bak (örn. 'to', 'with', 'from'). O edatla asla kullanılmayan fiilleri anında ele.",
      "Cümlenin duygu tonunu (+ / -) belirle; cümlenin gidişatı felaket anlatıyorsa olumlu sıfatları doğrudan ele.",
      "Birbirinin tam zıddı iki şık varsa (örn. mitigate vs exacerbate), cevap çoğunlukla bu ikisinden biridir."
    ],
    workedExamples: [
      {
        question: "1. Due to prolonged droughts and soil erosion, agricultural productivity in the arid region has _____ drastically over the last decade.",
        choices: ["deteriorated", "flourished", "accelerated", "reconciled", "subsidized"],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Cümledeki ipuçlarına bak: 'prolonged droughts' (kuraklık) ve 'soil erosion' (erozyon) olumsuz bağlamdır.",
          "Adım 2: 'Drastically' zarfı sert bir düşüşü veya kötüleşmeyi nitelemektedir.",
          "Adım 3: 'Flourished' (gelişmek) ve 'accelerated' (hızlanmak) olumlu/uygunsuzdur, elenir.",
          "Adım 4: 'Deteriorated' (kötüleşti, geriledi) anlamca tam oturur ✓"
        ],
        trapExplained: "Tuzak Şık: 'Flourished' — 'Drastically' kelimesini gören öğrenci olumlu bir büyüme sanabilir; oysa kuraklık verimi sadece düşürür."
      },
      {
        question: "2. The World Health Organization recommended stringent measures to _____ the catastrophic transmission of the novel pathogen.",
        choices: ["curb", "foster", "trigger", "prolong", "induce"],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Cümlenin nesnesi: 'catastrophic transmission' (felaket boyutundaki bulaşma).",
          "Adım 2: Sağlık örgütü salgını ne yapmak ister? Frenlemek, durdurmak.",
          "Adım 3: 'Foster' (teşvik etmek), 'trigger' (tetiklemek), 'prolong' (uzatmak) salgını artıracağı için elenir.",
          "Adım 4: 'Curb' (dizginlemek, frenlemek, sınırlandırmak) doğru yanıttır ✓"
        ],
        trapExplained: "Tuzak Şık: 'Trigger' — Salgın ve hastalık bağlamında sıkça duyulduğu için refleksle işaretlenebilir ama DSÖ salgını tetiklemez, frenler."
      }
    ]
  },

  // 2. Dilbilgisi (7-16)
  {
    id: "grammar",
    nameTr: "Dilbilgisi (Tense, Modals, Passive, Conjunction)",
    nameEn: "Grammar & Structure",
    questionRange: "7 - 16",
    count: 10,
    color: "from-purple-500 to-indigo-600",
    bgGradient: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-purple-500/40",
    tacticSummary: "Zaman uyumu kuralını uygula: Present ile Past genelde karışmaz (since hariç).",
    keyStrategy: "Zaman zarflarına (by the time, since, ago, recently) odaklanarak şıkları 2'ye indir.",
    icon: "⚙️",
    timeTarget: "Soru başına ~45 saniye",
    eliminationTips: [
      "Zaman uyumu (Time Harmony): Bir taraf Past iken diğer tarafta Present Perfect veya will varsa hemen ele (Since istisnası hariç).",
      "By the time + V2 görüyorsan diğer tarafta mutlaka 'had V3' ara.",
      "Boşluktan sonra nesne yoksa ve 'by' geliyorsa aktif seçenekleri ele, pasif (be + V3) odaklan."
    ],
    workedExamples: [
      {
        question: "7. Ever since commercial nuclear energy _____ in the mid-twentieth century, physicists _____ innovative safety protocols to prevent reactor meltdowns.",
        choices: [
          "was introduced / have designed",
          "is introduced / designed",
          "had been introduced / will design",
          "has introduced / had designed",
          "was introducing / design"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Sinyal kelimesi 'Ever since' net olarak görülmektedir.",
          "Adım 2: Altın S-P-P Kuralı: Since + Simple Past (V2) , Present Perfect (have/has V3).",
          "Adım 3: Nükleer enerji kendi kendini tanıtamaz, tanıtıldı (was introduced - passive).",
          "Adım 4: İkinci taraf 'have designed' zaman köprüsünü kurar. Doğru cevap A ✓"
        ],
        trapExplained: "Tuzak Şık: 'had been introduced' — Öğrenci 'geçmişin geçmişi' diye düşünüp since'in yanına had V3 koyar; oysa since arkasına sadece V2 alır!"
      },
      {
        question: "8. By the time the rescue expedition _____ the isolated polar camp, severe blizzard conditions _____ communications for several days.",
        choices: [
          "reached / had severed",
          "had reached / severed",
          "reaches / will sever",
          "was reaching / has severed",
          "has reached / would sever"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: 'By the time' zaman bağlacı mevcuttur.",
          "Adım 2: 'For several days' süreci kurtarma ekibi varmadan ÖNCE tamamlanmıştır.",
          "Adım 3: 'By the time + V2 (reached)' kuralı ana cümlede 'had V3 (had severed)' gerektirir.",
          "Adım 4: Doğru seçenek: reached / had severed ✓"
        ],
        trapExplained: "Tuzak Şık: 'had reached / severed' — Had V3 by the time'ın içine değil, ana cümleye gelmelidir."
      }
    ]
  },

  // 3. Cloze Test (17-26)
  {
    id: "cloze",
    nameTr: "Cloze Test (Paragraf İçi Boşluk Doldurma)",
    nameEn: "Cloze Test",
    questionRange: "17 - 26",
    count: 10,
    color: "from-blue-500 to-cyan-600",
    bgGradient: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-500/40",
    tacticSummary: "Boşluğun bulunduğu cümlenin öncesini ve sonrasını mutlaka bir bütün olarak oku.",
    keyStrategy: "Bağlaç sorularında iki cümle arasındaki artı/eksi (sebep, zıtlık, paralel) ilişkisini tespit et.",
    icon: "🧩",
    timeTarget: "Metin başına ~3.5 dakika (5 soru)",
    eliminationTips: [
      "Sadece boşluğun olduğu satırı okuma; bir önceki cümlenin sonucuna ve bir sonrakinin detayına bak.",
      "Edat sorularında boşluğun solundaki kelimeyle kalıplaşmış collocations kontrol et.",
      "Zıtlık bağlaçlarını (However, Although) ararken iki cümle arasındaki fikir tezatlığını netleştir."
    ],
    workedExamples: [
      {
        question: "17. (Metin içi) Neuroplasticity allows the mammalian brain to reorganize its neural connections. (17) _____ rigorous intellectual engagement, older adults can preserve cognitive agility.",
        choices: ["Thanks to", "In spite of", "Rather than", "As if", "Lest"],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Boşluktan sonra 'rigorous intellectual engagement' (yoğun zihinsel uğraş) pozitif bir etkendir.",
          "Adım 2: Sonuç: 'preserve cognitive agility' (bilişsel çevikliği korumak) pozitif bir sonuçtur.",
          "Adım 3: Pozitif sebep-sonuç ilişkisi veren edat 'Thanks to' (sayesinde) olmalıdır.",
          "Adım 4: Doğru cevap: Thanks to ✓"
        ],
        trapExplained: "Tuzak Şık: 'In spite of' (-e rağmen) — Zıtlık arayan öğrenci tuzağa düşer, burada zıtlık değil vesile olma durumu vardır."
      },
      {
        question: "18. (Metin içi) While early computer pioneers anticipated microchips would become ubiquitous, they could (18) _____ foresee the rise of decentralized quantum algorithms.",
        choices: ["hardly", "wholly", "readily", "substantially", "mutually"],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Cümlenin başındaki 'While' (oysa, her ne kadar) zıtlık sinyalidir.",
          "Adım 2: İlk kısım 'tahmin etmişlerdi' (anticipated), ikinci kısım 'bunu ise öngöremediler' demelidir.",
          "Adım 3: 'Hardly' yarı-olumsuz zarftır ('neredeyse hiç öngöremediler').",
          "Adım 4: Doğru yanıt: hardly ✓"
        ],
        trapExplained: "Tuzak Şık: 'Wholly' (tamamen) — Cümleyi olumlu yapar ve While zıtlığını bozar."
      }
    ]
  },

  // 4. Cümle Tamamlama (27-36)
  {
    id: "sentence-completion",
    nameTr: "Cümle Tamamlama",
    nameEn: "Sentence Completion",
    questionRange: "27 - 36",
    count: 10,
    color: "from-teal-500 to-emerald-600",
    bgGradient: "bg-gradient-to-br from-teal-500/20 to-emerald-600/20 border-teal-500/40",
    tacticSummary: "Özne takibi yap! Verilen cümlenin öznesi ile tamamlayan cümlenin zamiri (pronoun) uyuşmalıdır.",
    keyStrategy: "Zıtlık bağlacı (although, whereas, while) varsa karşı tarafta zıt bir sıfat veya durum ara.",
    icon: "🔗",
    timeTarget: "Soru başına ~50 saniye",
    eliminationTips: [
      "Özne & Zamir Eşleşmesi: Verilen cümlede 'synthetic polymers' çoğulsa, şıkta 'it' yerine 'they/their' ara.",
      "Bağlaç Dengesi: Cümle başında 'Although (+)' varsa, ana cümlede mutlaka (-) bir durum olmalı.",
      "Zaman Uyumu: Verilen kısım Past ise tamamlayan kısım kural olarak Present olamaz."
    ],
    workedExamples: [
      {
        question: "27. Although synthetic polymers have revolutionized modern industrial manufacturing, _____.",
        choices: [
          "their non-biodegradable persistence poses catastrophic threats to marine ecosystems",
          "they are universally recognized as completely benign to organic life forms",
          "production costs had plummeted centuries before the industrial revolution",
          "inventors were awarded prestigious accolades in modern metallurgical journals",
          "plastics are easily dissolved in ordinary room-temperature water"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Bağlaç 'Although' (+): 'polimerler üretimde devrim yarattı' (olumlu).",
          "Adım 2: Beklenti: İkinci kısım polimerlerin olumsuz (-) bir yönünü anlatmalı.",
          "Adım 3: Özne zamiri: 'synthetic polymers' -> 'their / they'.",
          "Adım 4: A şıkkı 'non-biodegradable persistence poses threats' diyerek tam bir zıtlık oluşturur ✓"
        ],
        trapExplained: "Tuzak Şık: B seçeneği — Gramer ve özne uyumu var ama anlamca olumlu olduğu için 'Although' mantığına aykırıdır."
      },
      {
        question: "28. Unless immediate international regulations are implemented regarding deep-sea mining, _____.",
        choices: [
          "fragile benthic hydrothermal ecosystems will suffer irreversible degradation",
          "oceanic conservation funds had already eliminated all deep-water dredging",
          "mining corporations are voluntarily stopping extraction across all coastlines",
          "marine biodiversity would have recovered completely within months",
          "seabed minerals have become redundant in battery manufacturing"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: 'Unless' = If not (şart bağlacı Type 1 Present).",
          "Adım 2: Ana cümle kural olarak 'will + V1' veya modal olmalıdır.",
          "Adım 3: Anlam: Eğer acil düzenleme yapılmazsa, hassas ekosistemler geri dönüşsüz zarar görecektir.",
          "Adım 4: 'will suffer irreversible degradation' doğrudan oturur ✓"
        ],
        trapExplained: "Tuzak Şık: D seçeneği — 'would have recovered' Type 3'tür; unless Present ile Type 3 uyumsuzdur."
      }
    ]
  },

  // 5. Çeviri (37-42)
  {
    id: "translation",
    nameTr: "Çeviri (İngilizce ↔ Türkçe)",
    nameEn: "Translation",
    questionRange: "37 - 42",
    count: 6,
    color: "from-green-500 to-lime-600",
    bgGradient: "bg-gradient-to-br from-green-500/20 to-lime-600/20 border-green-500/40",
    tacticSummary: "YDS'nin en yüksek net getiren bölümüdür. Önce ASIL YÜKLEMİ ve ASIL ÖZNEYİ bul.",
    keyStrategy: "Yüklemi doğru olan şıklar genelde 1 veya 2 tanedir. 10 saniyede elenebilir.",
    icon: "🌐",
    timeTarget: "Soru başına ~30 saniye",
    eliminationTips: [
      "1. Adım: Cümlenin asıl yüklemini bul ve Türkçedeki karşılığına bak. Yüklemi tutmayan 3 şıkkı hemen çiz!",
      "2. Adım: Cümlenin asıl öznesini bul. Özne cümlenin başında mı yer alıyor kontrol et.",
      "3. Adım: Modal varsa (must, can, should) çeviride '-meli, -ebilmek' eklerinin varlığını doğrula."
    ],
    workedExamples: [
      {
        question: "37. The continuous depletion of polar ice caps directly accelerates the global thermal expansion of ocean waters.\n(En doğru Türkçe çevirisini bulunuz:)",
        choices: [
          "Kutup buzullarının sürekli erimesi, okyanus sularının küresel termal genleşmesini doğrudan hızlandırmaktadır.",
          "Okyanus sularının küresel termal genleşmesi, kutup buzullarını hızla eriten temel nedendir.",
          "Kutuplardaki buzullar eridikçe deniz sularının genleşmesi doğrudan doğruya artar.",
          "Deniz sularının termal olarak genleşmesi kutup buzullarının hızla tükenmesine yol açar.",
          "Küresel ısınma nedeniyle kutup buzulları erimekte ve okyanus suları hızla genişlemektedir."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Asıl yüklem: 'directly accelerates' -> 'doğrudan hızlandırmaktadır'.",
          "Adım 2: Asıl özne: 'The continuous depletion of polar ice caps' -> 'Kutup buzullarının sürekli erimesi'.",
          "Adım 3: Nesne: 'the global thermal expansion...' -> 'okyanus sularının küresel termal genleşmesini'.",
          "Adım 4: Bu öğeleri eksiksiz ve tam sırada veren tek şık A'dır ✓"
        ],
        trapExplained: "Tuzak Şık: B şıkkı — Özne ile nesnenin yerini değiştirmiştir; eylemi yapan kutup buzullarının erimesidir."
      },
      {
        question: "38. Yapay zeka algoritmalarının tıp alanında yaygınlaşması, erken teşhis oranlarını kayda değer ölçüde artırmıştır.\n(En doğru İngilizce çevirisini bulunuz:)",
        choices: [
          "The proliferation of artificial intelligence algorithms in medicine has considerably increased early diagnosis rates.",
          "Early diagnosis rates have improved because artificial intelligence is increasingly used by doctors.",
          "Artificial intelligence algorithms were developed in medicine to enhance diagnostic accuracy significantly.",
          "Medicine has adopted artificial intelligence algorithms so that early diagnoses could be increased considerably.",
          "Increasing early diagnosis rates in medicine depends heavily on artificial intelligence algorithms."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Özne: 'Yapay zeka algoritmalarının tıp alanında yaygınlaşması' -> 'The proliferation of AI algorithms in medicine'.",
          "Adım 2: Yüklem: 'artırmıştır' (Present Perfect) -> 'has considerably increased'.",
          "Adım 3: Nesne: 'erken teşhis oranlarını' -> 'early diagnosis rates'.",
          "Adım 4: Tam karşılık A seçeneğidir ✓"
        ],
        trapExplained: "Tuzak Şık: B şıkkı — Cümleyi 'because' bağlacıyla ikiye bölmüştür, orijinal cümlede bağlaç yoktur."
      }
    ]
  },

  // 6. Paragraf Okuma (43-62)
  {
    id: "reading",
    nameTr: "Paragraf / Okuma Parçaları (5 Metin x 4 Soru)",
    nameEn: "Reading Comprehension",
    questionRange: "43 - 62",
    count: 20,
    color: "from-yellow-500 to-amber-600",
    bgGradient: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/40",
    tacticSummary: "Önce soru köklerini hızlıca tara, sonra metni oku. Metinde geçmeyen aşırı genellemelerden (all, only, never) kaçın.",
    keyStrategy: "Doğru cevap çoğunlukla metindeki ifadenin eş anlamlı sözcüklerle yeniden yazılmış (paraphrase) halidir.",
    icon: "📖",
    timeTarget: "Metin başına ~8 dakika (4 soru)",
    eliminationTips: [
      "Aşırı Uç İfadeler: 'always, strictly, sole, only, impossible, entirely' geçen şıklar metinde açıkça yazmıyorsa %95 yanlıştır.",
      "Kendi Bilgini Unut: Kendi tıbbi/tarihi genel kültürünü değil, sadece metinde yazarın söylediğini işaretle!",
      "Eş Anlam Avı: Metindeki 'vital' kelimesi doğru şıkta 'indispensable' veya 'crucial' olarak karşınıza çıkar."
    ],
    workedExamples: [
      {
        question: "43. (Paragraf Sorusundan)\nAccording to the passage on deep-sea hydrothermal vents, extremophile bacteria thrive primarily because _____.",
        choices: [
          "they synthesize organic chemical bonds utilizing geothermal sulfur rather than solar radiation",
          "sunlight easily penetrates the deepest oceanic trenches with extraordinary illumination",
          "predatory vertebrates are completely extinct in all abyssal volcanic ecosystems",
          "ambient water temperatures never deviate from absolute zero around the vent structures",
          "they feed exclusively on plastic micro-fragments sinking from commercial shipping"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Soru kökü: 'extremophile bacteria thrive primarily because...' (neden gelişiyorlar?).",
          "Adım 2: Metin taraması: 'chemosynthesis', 'sulfur oxidation', 'absence of sunlight'.",
          "Adım 3: A şıkkı 'geothermal sulfur rather than solar radiation' diyerek metnin kemosentez bilgisini doğrudan doğrular.",
          "Adım 4: B, C ve D şıklarındaki aşırı ifadeler (completely extinct, never deviate) elenir ✓"
        ],
        trapExplained: "Tuzak Şık: C şıkkı — 'completely extinct' aşırı genellemedir; metinde sadece yırtıcı baskısının az olduğu yazar."
      },
      {
        question: "44. It can be inferred from the passage that the author's attitude towards synthetic gene therapies is _____.",
        choices: ["cautiously optimistic", "openly hostile", "entirely dismissive", "unconditionally supportive", "indifferent and passive"],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Yazar tavrı sorularında metnin ton kelimelerine bakılır: 'great potential' (+) ama 'safety hurdles remain' (-).",
          "Adım 2: Hem umut hem temkin varsa karşılığı 'cautiously optimistic'tir.",
          "Adım 3: Aşırı uçlar ('entirely dismissive', 'unconditionally supportive') dengeli akademik metinlerde neredeyse hiç doğru çıkmaz.",
          "Adım 4: Doğru cevap: cautiously optimistic ✓"
        ],
        trapExplained: "Tuzak Şık: 'unconditionally supportive' — Akademik makale yazarları neredeyse hiçbir teknolojiye 'kayıtsız şartsız' destek vermez."
      }
    ]
  },

  // 7. Diyalog Tamamlama (63-67)
  {
    id: "dialogue",
    nameTr: "Diyalog Tamamlama",
    nameEn: "Dialogue Completion",
    questionRange: "63 - 67",
    count: 5,
    color: "from-orange-500 to-rose-600",
    bgGradient: "bg-gradient-to-br from-orange-500/20 to-rose-600/20 border-orange-500/40",
    tacticSummary: "Boşluktan hemen sonraki konuşmacının tepkisine (şaşırma, onaylama, itiraz) dikkat et.",
    keyStrategy: "Sonraki cümle 'I completely agree' diyorsa, boşlukta bir fikir veya öneri olmalıdır.",
    icon: "💬",
    timeTarget: "Soru başına ~40 saniye",
    eliminationTips: [
      "Boşluktan HEMEN SONRAKİ replik anahtardır: 'Are you sure?', 'That makes sense', 'Not necessarily'.",
      "Kişi 'Actually...' diyorsa boşlukta söylenen genel kabule itiraz ediyordur.",
      "Diyaloğun resmiyet düzeyine bak: Akademik bir tartışmada sokak ağzı içeren şıkları ele."
    ],
    workedExamples: [
      {
        question: "63. Ayşe: Did you review the recent cybersecurity report on quantum decryption?\nBurak: Yes, and it claims standard encryption protocols may become obsolete within a decade.\nAyşe: _____ \nBurak: Exactly. That is why central banks are investing billions into lattice-based cryptography right now.",
        choices: [
          "So, financial data architectures will require fundamental overhauls much earlier than anticipated?",
          "Do you believe conventional retail banking branches will close permanently across Europe?",
          "I think password managers are completely impenetrable to any quantum algorithms.",
          "Why didn't you raise this concern during our executive committee meeting yesterday?",
          "Quantum computing hardware is still too bulky for commercial consumer laptops."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Burak'ın cevabı: 'Exactly. That is why central banks are investing billions...' (Kesinlikle, bu yüzden merkez bankaları milyarlar yatırıyor).",
          "Adım 2: 'Exactly' (Kesinlikle) onayı, Ayşe'nin tehlikenin büyüklüğünü ve acil reform ihtiyacını özetlediğini gösterir.",
          "Adım 3: A şıkkındaki 'financial architectures will require fundamental overhauls' Burak'ın finans vurgusuyla %100 örtüşür.",
          "Adım 4: Doğru cevap: A ✓"
        ],
        trapExplained: "Tuzak Şık: D şıkkı — Suçlayıcı ve bağlam dışıdır, Burak'ın 'Exactly' tepkisiyle uyumsuzdur."
      },
      {
        question: "64. Selin: We are considering replacing our physical servers with decentralized cloud providers.\nDeniz: _____ \nSelin: You have a point, but their redundant distributed backups reduce single-point outage risks.",
        choices: [
          "Aren't you concerned about regulatory compliance and data sovereignty in foreign jurisdictions?",
          "Cloud computing is definitely the most cost-efficient choice for all modern businesses.",
          "I already purchased five new rack servers for our secondary datacenter yesterday.",
          "Can you explain how a server processor handles multithreaded database transactions?",
          "Our employees will certainly appreciate faster login times on the intranet."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Selin'in sonraki cümlesi: 'You have a point, but...' (Haklısın ama yedeklemeler riski azaltır).",
          "Adım 2: Bu demektir ki Deniz bulut bilişimle ilgili meşru bir endişe/risk dile getirmiştir.",
          "Adım 3: A seçeneğindeki yasal uyumluluk ve veri egemenliği endişesi ('Aren't you concerned...') tam bir itirazdır.",
          "Adım 4: Doğru yanıt: A ✓"
        ],
        trapExplained: "Tuzak Şık: B şıkkı — Bulutu övmektedir; oysa Deniz'in bir risk belirtmesi gerekirdi."
      }
    ]
  },

  // 8. Anlamca En Yakın Cümle (68-71)
  {
    id: "restatement",
    nameTr: "Anlamca En Yakın Cümle (Restatement)",
    nameEn: "Restatement",
    questionRange: "68 - 71",
    count: 4,
    color: "from-rose-500 to-pink-600",
    bgGradient: "bg-gradient-to-br from-rose-500/20 to-pink-600/20 border-rose-500/40",
    tacticSummary: "Ana cümledeki koşul, neden, derece (more, most, as...as) ve modal öğelerini işaretle.",
    keyStrategy: "Orijinal cümlede olmayan ekstra bir kesinlik veya genelleme içeren şıkları doğrudan ele.",
    icon: "🔄",
    timeTarget: "Soru başına ~60 saniye",
    eliminationTips: [
      "1. Adım: Cümledeki ana bağlaçları (only if, unless, as long as, because) tespit et.",
      "2. Adım: Cümledeki niteleyicileri (seldom, barely, most, all) kontrol et. Niteleyiciyi değiştiren şık elenir.",
      "3. Adım: Cümledeki zaman dilimini (Past/Present) asla değiştirme."
    ],
    workedExamples: [
      {
        question: "68. No sooner had the initial seismic tremor ceased than civil defense sirens sounded across the metropolitan area.",
        choices: [
          "Immediately after the first earthquake tremor stopped, emergency sirens rang throughout the metropolis.",
          "The sirens were activated before the seismic tremor had completely concluded.",
          "Although the tremor was devastating, municipal sirens failed to alert the residents in time.",
          "Civil defense authorities postponed sounding the sirens until structural damage was assessed.",
          "Whenever a minor tremor occurs, sirens automatically deactivate in the city."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Kalıp analizi: 'No sooner ... than' = 'Immediately after / As soon as' (olur olmaz, hemen ardından).",
          "Adım 2: Zaman: Sarsıntı bitti, ANINDA sirenler çaldı.",
          "Adım 3: A şıkkı 'Immediately after the first tremor stopped, sirens rang' diyerek birebir aynı anlamı verir.",
          "Adım 4: Doğru yanıt: A ✓"
        ],
        trapExplained: "Tuzak Şık: B şıkkı — 'Before tremor concluded' diyerek zaman sırasını tersine çevirmiştir."
      },
      {
        question: "69. Had the engineering team recognized the metal fatigue earlier, the suspension bridge would not have collapsed.",
        choices: [
          "The suspension bridge collapsed solely because the engineering team failed to detect the metal fatigue in advance.",
          "The engineering team detected the metal fatigue early, but the bridge still collapsed due to high winds.",
          "Even if the metal fatigue had been noticed sooner, the bridge collapse was entirely unavoidable.",
          "The engineers were inspecting the metal fatigue at the exact moment the bridge began to collapse.",
          "Because the bridge did not collapse, the engineers were praised for identifying the metal fatigue."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Kalıp: 'Had the team recognized...' = If the team had recognized (Type 3 Inverted).",
          "Adım 2: Gerçek durum: Mühendisler erken fark etmedi VE köprü çöktü.",
          "Adım 3: A şıkkı 'Köprü çöktü çünkü ekip metal yorgunluğunu önceden tespit edemedi' gerçeğini tam verir.",
          "Adım 4: Doğru cevap: A ✓"
        ],
        trapExplained: "Tuzak Şık: C şıkkı — 'unavoidable' (kaçınılmazdı) diyerek cümlenin 'fark etselerdi çökmezdi' mantığını bozar."
      }
    ]
  },

  // 9. Paragraf Tamamlama (72-75)
  {
    id: "paragraph-completion",
    nameTr: "Paragraf Tamamlama",
    nameEn: "Paragraph Completion",
    questionRange: "72 - 75",
    count: 4,
    color: "from-fuchsia-500 to-purple-600",
    bgGradient: "bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 border-fuchsia-500/40",
    tacticSummary: "Boşluğun önündeki ve arkasındaki cümleyle anlamsal bir köprü kur. İşaret zamirlerine (this, these, such) bak.",
    keyStrategy: "Boşluktan sonra 'For instance' geliyorsa, boşluğa bir kural veya genel yargı yerleştirilmelidir.",
    icon: "🧱",
    timeTarget: "Soru başına ~60 saniye",
    eliminationTips: [
      "Boşluğun hemen sonrasındaki referans kelimelere dikkat et: 'This finding', 'These individuals', 'Such difficulties'.",
      "Akış yönü testi: Boşluk öncesi ve sonrası aynı fikri mi destekliyor yoksa bir zıtlık bağlacı mı var?",
      "Cümlenin tonu pozitiften negatife geçiyorsa boşluğa mutlaka bir zıtlık bağlacı oturmalıdır."
    ],
    workedExamples: [
      {
        question: "72. Sleep deprivation impairs cognitive consolidation and synaptic pruning. _____. For instance, hospital interns working consecutive night shifts exhibit a 30% surge in diagnostic oversights.",
        choices: [
          "Consequently, human performance in high-stakes analytical tasks suffers dramatically under chronic fatigue.",
          "In contrast, brief afternoon power naps have proven ineffective for restorative metabolic health.",
          "Nevertheless, advanced neuro-stimulant pharmaceuticals can permanently replace natural sleep cycles.",
          "Therefore, most mammalian species hibernate during prolonged periods of seasonal resource scarcity.",
          "Indeed, voluntary sleep curtailment has become a celebrated virtue among financial hedge-fund executives."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Boşluk öncesi: Uykusuzluk bilişsel konsolidasyonu bozar (olumsuz bilimsel gerçek).",
          "Adım 2: Boşluk sonrası: 'For instance' (örneğin) stajyer doktorların hata oranı %30 artıyor.",
          "Adım 3: Doktorların hata yapması yüksek riskli analitik görevlerde performansın düşmesine örnektir.",
          "Adım 4: A şıkkındaki 'human performance in high-stakes analytical tasks suffers' köprüyü kusursuz kurar ✓"
        ],
        trapExplained: "Tuzak Şık: E şıkkı — Uykusuzluğun övüldüğünü söyleyerek paragrafın tıbbi eleştiri çizgisinden tamamen sapar."
      },
      {
        question: "73. Glaciers act as natural reservoirs, storing precipitation during winter and releasing freshwater in dry seasons. _____. As a result, downstream agricultural valleys face acute irrigation shortages before summer even begins.",
        choices: [
          "However, rapid planetary warming has caused them to melt faster than winter snowpacks can replenish.",
          "Furthermore, glacial meltwater contains essential minerals that enrich alpine riverbed soil nutrients.",
          "Similarly, subterranean aquifers supply deep drinking wells throughout North African oases.",
          "In other words, mountaineers prefer ascending peaks during the stable conditions of mid-autumn.",
          "Fortunately, global hydroelectric dams have expanded their reservoir storage beyond historical records."
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Boşluk öncesi: Buzullar tatlı su depolar (+ olumlu işlev).",
          "Adım 2: Boşluk sonrası: 'As a result... downstream valleys face acute shortages' (sonuç olarak aşağı vadiler su kıtlığı yaşıyor - olumsuz).",
          "Adım 3: Olumludan kıtlığa geçiş bir 'However' (ancak) köprüsü gerektirir: Buzullar eriyip tükeniyor.",
          "Adım 4: A şıkkı 'However, rapid warming has caused them to melt faster...' bu geçişi sağlar ✓"
        ],
        trapExplained: "Tuzak Şık: B şıkkı — 'Furthermore' diyerek buzulları övmeye devam eder, oysa sonrasında kıtlık gelmektedir."
      }
    ]
  },

  // 10. Anlam Bütünlüğünü Bozan Cümle (76-80)
  {
    id: "irrelevant",
    nameTr: "Anlam Bütünlüğünü Bozan Cümle (Irrelevant)",
    nameEn: "Irrelevant Sentence",
    questionRange: "76 - 80",
    count: 5,
    color: "from-violet-500 to-indigo-700",
    bgGradient: "bg-gradient-to-br from-violet-500/20 to-indigo-700/20 border-violet-500/40",
    tacticSummary: "Tüm cümlelerin ana konusunu ve öznesini çıkar. Bir cümle konudan sapmışsa veya çok özele/genele inmişse o bozar.",
    keyStrategy: "Şüpheli cümleyi atıp önceki ve sonraki cümleyi art arda oku; anlam pürüzsüz akıyorsa doğru tespit ettin.",
    icon: "❌",
    timeTarget: "Soru başına ~45 saniye",
    eliminationTips: [
      "Konu + Bakış Açısı Kuralı: Bütün cümleler 'X'in yararları'nı anlatırken tek bir cümle 'X'in tarihi'ne giriyorsa akışı bozar.",
      "Zaman Sapması: Paragraf geçmiş bir tarihi anlatırken aniden 'Today' ile günümüze atlayıp sonra tekrar geçmişe dönüyorsa 'Today' cümlesi bozar.",
      "Sağlama Testi: Seçtiğin numarayı parmağınla kapat ve bir önceki ile bir sonrakini oku; geçiş kusursuzsa doğru cevaptasın."
    ],
    workedExamples: [
      {
        question: "76. (I) Renaissance Florence witnessed an extraordinary explosion of architectural and painterly genius.\n(II) Wealthy patron dynasties like the Medici financed monumental public and private commissions.\n(III) Today, mass tourism in Tuscany creates significant vehicular congestion in narrow historic alleyways.\n(IV) This influx of patronage attracted master craftsmen, humanists, and sculptors from across Europe.\n(V) As a result, the city cemented its legacy as the undisputed crucible of Western cultural rebirth.",
        choices: ["I", "II", "III", "IV", "V"],
        answerIndex: 2, // III
        walkthrough: [
          "Adım 1: Paragrafın ana konusu: Rönesans Floransa'sındaki sanatsal hamilik (patronage) ve Medici ailesi.",
          "Adım 2: (I) Giriş, (II) Medici finansmanı, (IV) 'This influx of patronage' (bu hamilik akını - II'ye bağlanır).",
          "Adım 3: (III) numaralı cümle ise günümüz Toskana turizm ve trafik sıkışıklığına sıçramıştır!",
          "Adım 4: (III) çıkarıldığında (II) doğrudan (IV)'e bağlanır. Bozan cümle III'tür (C şıkkı) ✓"
        ],
        trapExplained: "Tuzak Şık: II veya IV — 'Medici' ve 'patronage' kelimelerini görünce yabancı gelebilir ama bunlar paragrafın belkemiğidir."
      },
      {
        question: "77. (I) Honeybees communicate the precise location of nectar sources through an elaborate series of movements known as the waggle dance.\n(II) By varying the angle and duration of the dance relative to the sun, a forager conveys both distance and direction.\n(III) Other hive members follow these tactile signals in total darkness and fly directly to the flowers.\n(IV) Commercial beekeepers frequently supplement hive nutrition with refined sugar syrup during harsh winters.\n(V) This sophisticated communication system ensures foraging efficiency and colony survival.",
        choices: ["I", "II", "III", "IV", "V"],
        answerIndex: 3, // IV
        walkthrough: [
          "Adım 1: Paragraf konusu: Arıların sallantı dansı (waggle dance) ile konum iletme iletişimi.",
          "Adım 2: (I) Dansın tanımı, (II) Açısı ve süresi, (III) Kovan üyelerinin takibi, (V) 'This sophisticated communication system'.",
          "Adım 3: (IV) Arıcıların kışın şeker şurubu vermesinden bahsederek arı biyolojik iletişiminden arıcılık ticaretine sapmıştır.",
          "Adım 4: Bozan cümle IV'tür (D şıkkı) ✓"
        ],
        trapExplained: "Tuzak Şık: V seçeneği — 'This communication system' diyerek (III)'e bağlanır, asla bozan cümle olamaz."
      }
    ]
  },

  // 11. Diğer Özel YDS Soru Tipleri / Karma Taktikler
  {
    id: "paraphrase-special",
    nameTr: "Akademik Bağlaç & Edat Kombinasyonları",
    nameEn: "Connectors & Prepositional Combinations",
    questionRange: "Karma Sorular",
    count: 10,
    color: "from-fuchsia-600 to-pink-700",
    bgGradient: "bg-gradient-to-br from-fuchsia-600/20 to-pink-700/20 border-fuchsia-600/40",
    tacticSummary: "İkili bağlaçlar (Not only... but also, Neither... nor, Both... and) ve edat öbeklerine odaklan.",
    keyStrategy: "Cümlede 'nor' görüyorsan ilk kısımda 'neither' ara; 'but also' görüyorsan ilk kısımda 'not only' ara.",
    icon: "⚡",
    timeTarget: "Soru başına ~35 saniye",
    eliminationTips: [
      "İkili Bağlaç Paralelliği: 'Not only'den sonra fiil geliyorsa 'but also'dan sonra da fiil gelmelidir.",
      "Neither ... NOR | Either ... OR | Both ... AND | Whether ... OR eşleşmelerini refleks haline getir.",
      "Preposition + Which: Boşluktan önce isim ve edat varsa (in which = where, to which, for which) yapısını kontrol et."
    ],
    workedExamples: [
      {
        question: "80. The recent genomic breakthrough has provided insights _____ into hereditary predispositions _____ into targeted cellular therapies.",
        choices: [
          "not only / but also",
          "neither / or",
          "both / or",
          "whether / nor",
          "either / also"
        ],
        answerIndex: 0,
        walkthrough: [
          "Adım 1: Boşluklar arasındaki paralelliğe bak: 'into hereditary...' ve 'into targeted...'.",
          "Adım 2: 'Not only ... but also' kalıbı (yalnızca ... değil aynı zamanda ...) anlamca ve yapıca kusursuz eşleşir.",
          "Adım 3: Diğer şıklardaki eşleşmeler hatalıdır (neither... or olmaz, neither... nor olur).",
          "Adım 4: Doğru seçenek: not only / but also ✓"
        ],
        trapExplained: "Tuzak Şık: 'neither / or' — Eşleşme hatası vardır; or sadece either veya whether ile kullanılır."
      }
    ]
  }
];

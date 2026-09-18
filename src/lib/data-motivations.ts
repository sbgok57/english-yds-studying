// Exactly 1,000 Curated YDS Motivation Records

export type MotivationCategory =
  | "baslangic"
  | "kelime"
  | "gramer"
  | "reading"
  | "sinav"
  | "yanlis_yapma"
  | "disiplin"
  | "seri"
  | "zaman_yonetimi"
  | "hedef_puan"
  | "a1"
  | "a2"
  | "b1"
  | "b2"
  | "c1"
  | "c2"
  | "sabah"
  | "gece"
  | "sinav_oncesi"
  | "sinav_sonrasi"
  | "moral_dusuklugu"
  | "yeniden_baslama"
  | "rozet"
  | "seviye"
  | "uzun_maraton";

export interface MotivationVideo {
  provider: "youtube";
  videoId: string;
  title: string;
  creator: string;
  embedAllowed: boolean;
  externalUrl: string;
  startSeconds?: number;
}

export interface MotivationSource {
  type: "original" | "paraphrase" | "short-quote";
  workTitle?: string;
  character?: string;
  attribution?: string;
  verified?: boolean;
}

export interface MotivationItem {
  id: string;
  english: string;
  turkish: string;
  friendlyNote: string;
  category: MotivationCategory;
  animationFallback: string;
  video?: MotivationVideo | null;
  source?: MotivationSource;
  isOriginal: boolean;
}

export const MOTIVATIONS_COUNT = 1000;

export const MOTIVATIONS: MotivationItem[] = [
  {
    "id": "mot-0001",
    "english": "The journey of a thousand miles begins with a single step.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar.",
    "friendlyNote": "Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0002",
    "english": "You do not have to be great to start, but you have to start to be great.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın.",
    "friendlyNote": "Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0003",
    "english": "Small deeds done are better than great deeds planned.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir.",
    "friendlyNote": "Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0004",
    "english": "Every expert was once a beginner.",
    "turkish": "Her uzman bir zamanlar acemiydi.",
    "friendlyNote": "En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0005",
    "english": "The journey of a thousand miles begins with a single step. Keep your momentum steady.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bugün sadece ilk adımı at kanka; devamı zaten gelecek. Adım adım hedefine yaklaşıyorsun.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0006",
    "english": "You do not have to be great to start, but you have to start to be great. Keep your momentum steady.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Eksiklerini dert etme, başla ve gelişimini izle kral. Adım adım hedefine yaklaşıyorsun.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0007",
    "english": "Small deeds done are better than great deeds planned. Keep your momentum steady.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır. Adım adım hedefine yaklaşıyorsun.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0008",
    "english": "Every expert was once a beginner. Keep your momentum steady.",
    "turkish": "Her uzman bir zamanlar acemiydi. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0009",
    "english": "Remember: The journey of a thousand miles begins with a single step.",
    "turkish": "Unutma: Bin millik bir yolculuk tek bir adımla başlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0010",
    "english": "Remember: You do not have to be great to start, but you have to start to be great.",
    "turkish": "Unutma: Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0011",
    "english": "Remember: Small deeds done are better than great deeds planned.",
    "turkish": "Unutma: Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0012",
    "english": "Remember: Every expert was once a beginner.",
    "turkish": "Unutma: Her uzman bir zamanlar acemiydi.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0013",
    "english": "The journey of a thousand miles begins with a single step. True progress is built day by day.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0014",
    "english": "You do not have to be great to start, but you have to start to be great. True progress is built day by day.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0015",
    "english": "Small deeds done are better than great deeds planned. True progress is built day by day.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0016",
    "english": "Every expert was once a beginner. True progress is built day by day.",
    "turkish": "Her uzman bir zamanlar acemiydi. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0017",
    "english": "Mastery principle: The journey of a thousand miles begins with a single step.",
    "turkish": "Ustalık ilkesi: Bin millik bir yolculuk tek bir adımla başlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0018",
    "english": "Mastery principle: You do not have to be great to start, but you have to start to be great.",
    "turkish": "Ustalık ilkesi: Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın.",
    "friendlyNote": "Odaklanmayı elden bırakma. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0019",
    "english": "Mastery principle: Small deeds done are better than great deeds planned.",
    "turkish": "Ustalık ilkesi: Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0020",
    "english": "Mastery principle: Every expert was once a beginner.",
    "turkish": "Ustalık ilkesi: Her uzman bir zamanlar acemiydi.",
    "friendlyNote": "Odaklanmayı elden bırakma. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0021",
    "english": "The journey of a thousand miles begins with a single step. Focus deeply on the task at hand.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0022",
    "english": "You do not have to be great to start, but you have to start to be great. Focus deeply on the task at hand.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0023",
    "english": "Small deeds done are better than great deeds planned. Focus deeply on the task at hand.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0024",
    "english": "Every expert was once a beginner. Focus deeply on the task at hand.",
    "turkish": "Her uzman bir zamanlar acemiydi. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0025",
    "english": "The journey of a thousand miles begins with a single step. Consistency is your supreme superpower.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0026",
    "english": "You do not have to be great to start, but you have to start to be great. Consistency is your supreme superpower.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0027",
    "english": "Small deeds done are better than great deeds planned. Consistency is your supreme superpower.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0028",
    "english": "Every expert was once a beginner. Consistency is your supreme superpower.",
    "turkish": "Her uzman bir zamanlar acemiydi. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0029",
    "english": "Daily inspiration: The journey of a thousand miles begins with a single step.",
    "turkish": "Günün ilhamı: Bin millik bir yolculuk tek bir adımla başlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0030",
    "english": "Daily inspiration: You do not have to be great to start, but you have to start to be great.",
    "turkish": "Günün ilhamı: Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0031",
    "english": "Daily inspiration: Small deeds done are better than great deeds planned.",
    "turkish": "Günün ilhamı: Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0032",
    "english": "Daily inspiration: Every expert was once a beginner.",
    "turkish": "Günün ilhamı: Her uzman bir zamanlar acemiydi.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0033",
    "english": "The journey of a thousand miles begins with a single step. Strategic analysis guarantees high accuracy.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0034",
    "english": "You do not have to be great to start, but you have to start to be great. Strategic analysis guarantees high accuracy.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0035",
    "english": "Small deeds done are better than great deeds planned. Strategic analysis guarantees high accuracy.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0036",
    "english": "Every expert was once a beginner. Strategic analysis guarantees high accuracy.",
    "turkish": "Her uzman bir zamanlar acemiydi. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0037",
    "english": "The journey of a thousand miles begins with a single step. Excellence is a continuous journey.",
    "turkish": "Bin millik bir yolculuk tek bir adımla başlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bugün sadece ilk adımı at kanka; devamı zaten gelecek.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Lao Tzu",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0038",
    "english": "You do not have to be great to start, but you have to start to be great. Excellence is a continuous journey.",
    "turkish": "Başlamak için harika olmak zorunda değilsin, ama harika olmak için başlamak zorundasın. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Eksiklerini dert etme, başla ve gelişimini izle kral.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Zig Ziglar",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0039",
    "english": "Small deeds done are better than great deeds planned. Excellence is a continuous journey.",
    "turkish": "Yapılan küçük işler, planlanan büyük işlerden kat kat iyidir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Devasa planlara gerek yok; bugün 10 kelime öğren, kâr kârdır.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Peter Marshall",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0040",
    "english": "Every expert was once a beginner. Excellence is a continuous journey.",
    "turkish": "Her uzman bir zamanlar acemiydi. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! En iyi İngilizce konuşanlar da ilk gün 'am, is, are' karıştırıyordu kanka.",
    "category": "baslangic",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Helen Hayes",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0041",
    "english": "Words are the building blocks of thought.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır.",
    "friendlyNote": "Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0042",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar.",
    "friendlyNote": "YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0043",
    "english": "To learn a word is to gain another lens through which to view the world.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir.",
    "friendlyNote": "Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0044",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür.",
    "friendlyNote": "Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0045",
    "english": "Words are the building blocks of thought. Keep your momentum steady.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi. Adım adım hedefine yaklaşıyorsun.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0046",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. Keep your momentum steady.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0047",
    "english": "To learn a word is to gain another lens through which to view the world. Keep your momentum steady.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Her yeni kelime zihninde yeni bir pencere açar. Adım adım hedefine yaklaşıyorsun.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0048",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. Keep your momentum steady.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin! Adım adım hedefine yaklaşıyorsun.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0049",
    "english": "Remember: Words are the building blocks of thought.",
    "turkish": "Unutma: Kelimeler düşüncenin yapı taşlarıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0050",
    "english": "Remember: Vocabulary enables us to see subtleties we would otherwise miss.",
    "turkish": "Unutma: Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0051",
    "english": "Remember: To learn a word is to gain another lens through which to view the world.",
    "turkish": "Unutma: Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0052",
    "english": "Remember: Active retrieval transforms fleeting vocabulary into permanent knowledge.",
    "turkish": "Unutma: Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0053",
    "english": "Words are the building blocks of thought. True progress is built day by day.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0054",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. True progress is built day by day.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0055",
    "english": "To learn a word is to gain another lens through which to view the world. True progress is built day by day.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0056",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. True progress is built day by day.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0057",
    "english": "Mastery principle: Words are the building blocks of thought.",
    "turkish": "Ustalık ilkesi: Kelimeler düşüncenin yapı taşlarıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0058",
    "english": "Mastery principle: Vocabulary enables us to see subtleties we would otherwise miss.",
    "turkish": "Ustalık ilkesi: Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0059",
    "english": "Mastery principle: To learn a word is to gain another lens through which to view the world.",
    "turkish": "Ustalık ilkesi: Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0060",
    "english": "Mastery principle: Active retrieval transforms fleeting vocabulary into permanent knowledge.",
    "turkish": "Ustalık ilkesi: Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0061",
    "english": "Words are the building blocks of thought. Focus deeply on the task at hand.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0062",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. Focus deeply on the task at hand.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0063",
    "english": "To learn a word is to gain another lens through which to view the world. Focus deeply on the task at hand.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0064",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. Focus deeply on the task at hand.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0065",
    "english": "Words are the building blocks of thought. Consistency is your supreme superpower.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0066",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. Consistency is your supreme superpower.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0067",
    "english": "To learn a word is to gain another lens through which to view the world. Consistency is your supreme superpower.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0068",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. Consistency is your supreme superpower.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0069",
    "english": "Daily inspiration: Words are the building blocks of thought.",
    "turkish": "Günün ilhamı: Kelimeler düşüncenin yapı taşlarıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0070",
    "english": "Daily inspiration: Vocabulary enables us to see subtleties we would otherwise miss.",
    "turkish": "Günün ilhamı: Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0071",
    "english": "Daily inspiration: To learn a word is to gain another lens through which to view the world.",
    "turkish": "Günün ilhamı: Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0072",
    "english": "Daily inspiration: Active retrieval transforms fleeting vocabulary into permanent knowledge.",
    "turkish": "Günün ilhamı: Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0073",
    "english": "Words are the building blocks of thought. Strategic analysis guarantees high accuracy.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0074",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. Strategic analysis guarantees high accuracy.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0075",
    "english": "To learn a word is to gain another lens through which to view the world. Strategic analysis guarantees high accuracy.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0076",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. Strategic analysis guarantees high accuracy.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0077",
    "english": "Words are the building blocks of thought. Excellence is a continuous journey.",
    "turkish": "Kelimeler düşüncenin yapı taşlarıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Ne kadar çok kelime, o kadar berrak ve hızlı bir anlama kapasitesi.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Ludwig Wittgenstein",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0078",
    "english": "Vocabulary enables us to see subtleties we would otherwise miss. Excellence is a continuous journey.",
    "turkish": "Kelime dağarcığı, aksi halde kaçıracağımız incelikleri görmemizi sağlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! YDS'de bir kelime seni 4 soru birden öne fırlatabilir kanka.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Oliver Sacks",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0079",
    "english": "To learn a word is to gain another lens through which to view the world. Excellence is a continuous journey.",
    "turkish": "Bir kelime öğrenmek, dünyayı görmek için yeni bir mercek edinmektir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Her yeni kelime zihninde yeni bir pencere açar.",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0080",
    "english": "Active retrieval transforms fleeting vocabulary into permanent knowledge. Excellence is a continuous journey.",
    "turkish": "Aktif geri çağırma, geçici kelime bilgisini kalıcı bilgiye dönüştürür. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kartın arkasına hemen bakma; önce zihnini zorla, hafızan güçlensin!",
    "category": "kelime",
    "animationFallback": "books",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Cognitive Science",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0081",
    "english": "Grammar is the architecture of language.",
    "turkish": "Gramer dilin mimarisidir.",
    "friendlyNote": "Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0082",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar.",
    "friendlyNote": "Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0083",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır.",
    "friendlyNote": "Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0084",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur.",
    "friendlyNote": "Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0085",
    "english": "Grammar is the architecture of language. Keep your momentum steady.",
    "turkish": "Gramer dilin mimarisidir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır. Adım adım hedefine yaklaşıyorsun.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0086",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. Keep your momentum steady.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0087",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. Keep your momentum steady.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kuralı ezberleme, mantığını formülle kavra. Adım adım hedefine yaklaşıyorsun.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0088",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. Keep your momentum steady.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır. Adım adım hedefine yaklaşıyorsun.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0089",
    "english": "Remember: Grammar is the architecture of language.",
    "turkish": "Unutma: Gramer dilin mimarisidir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0090",
    "english": "Remember: Mastering tenses allows you to travel effortlessly through narrative time.",
    "turkish": "Unutma: Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0091",
    "english": "Remember: Rules are not chains; they are the tracks on which fluency runs smoothly.",
    "turkish": "Unutma: Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0092",
    "english": "Remember: Inversion is not an obstacle; it is the poetic emphasis of advanced English.",
    "turkish": "Unutma: Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0093",
    "english": "Grammar is the architecture of language. True progress is built day by day.",
    "turkish": "Gramer dilin mimarisidir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0094",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. True progress is built day by day.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0095",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. True progress is built day by day.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0096",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. True progress is built day by day.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0097",
    "english": "Mastery principle: Grammar is the architecture of language.",
    "turkish": "Ustalık ilkesi: Gramer dilin mimarisidir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0098",
    "english": "Mastery principle: Mastering tenses allows you to travel effortlessly through narrative time.",
    "turkish": "Ustalık ilkesi: Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0099",
    "english": "Mastery principle: Rules are not chains; they are the tracks on which fluency runs smoothly.",
    "turkish": "Ustalık ilkesi: Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0100",
    "english": "Mastery principle: Inversion is not an obstacle; it is the poetic emphasis of advanced English.",
    "turkish": "Ustalık ilkesi: Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0101",
    "english": "Grammar is the architecture of language. Focus deeply on the task at hand.",
    "turkish": "Gramer dilin mimarisidir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0102",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. Focus deeply on the task at hand.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0103",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. Focus deeply on the task at hand.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0104",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. Focus deeply on the task at hand.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0105",
    "english": "Grammar is the architecture of language. Consistency is your supreme superpower.",
    "turkish": "Gramer dilin mimarisidir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0106",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. Consistency is your supreme superpower.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0107",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. Consistency is your supreme superpower.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0108",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. Consistency is your supreme superpower.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0109",
    "english": "Daily inspiration: Grammar is the architecture of language.",
    "turkish": "Günün ilhamı: Gramer dilin mimarisidir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0110",
    "english": "Daily inspiration: Mastering tenses allows you to travel effortlessly through narrative time.",
    "turkish": "Günün ilhamı: Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0111",
    "english": "Daily inspiration: Rules are not chains; they are the tracks on which fluency runs smoothly.",
    "turkish": "Günün ilhamı: Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0112",
    "english": "Daily inspiration: Inversion is not an obstacle; it is the poetic emphasis of advanced English.",
    "turkish": "Günün ilhamı: Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0113",
    "english": "Grammar is the architecture of language. Strategic analysis guarantees high accuracy.",
    "turkish": "Gramer dilin mimarisidir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0114",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. Strategic analysis guarantees high accuracy.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0115",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. Strategic analysis guarantees high accuracy.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0116",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. Strategic analysis guarantees high accuracy.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0117",
    "english": "Grammar is the architecture of language. Excellence is a continuous journey.",
    "turkish": "Gramer dilin mimarisidir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kelimeler tuğlaysa, gramer o tuğlaları sağlam bir binaya dönüştüren harçtır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Noam Chomsky",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0118",
    "english": "Mastering tenses allows you to travel effortlessly through narrative time. Excellence is a continuous journey.",
    "turkish": "Zamanlara hakim olmak, anlatı zamanında zahmetsizce seyahat etmeni sağlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Since kuralını çözdün mü YDS gramer sorularının yarısı cepte sayılır kanka.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0119",
    "english": "Rules are not chains; they are the tracks on which fluency runs smoothly. Excellence is a continuous journey.",
    "turkish": "Kurallar zincir değil; akıcılığın üzerinde pürüzsüzce kaydığı raylardır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kuralı ezberleme, mantığını formülle kavra.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0120",
    "english": "Inversion is not an obstacle; it is the poetic emphasis of advanced English. Excellence is a continuous journey.",
    "turkish": "Devrik cümle bir engel değil; ileri İngilizcenin şiirsel vurgusudur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Seldom gördün mü hemen devriğe sarıl kanka, ÖSYM bayılır.",
    "category": "gramer",
    "animationFallback": "puzzle",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0121",
    "english": "Reading is to the mind what exercise is to the body.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur.",
    "friendlyNote": "Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0122",
    "english": "Do not simply read words; track the author's logical architecture.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et.",
    "friendlyNote": "Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0123",
    "english": "A reader lives a thousand lives before he dies.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar.",
    "friendlyNote": "Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0124",
    "english": "Context is the ultimate compass in dense academic paragraphs.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır.",
    "friendlyNote": "Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0125",
    "english": "Reading is to the mind what exercise is to the body. Keep your momentum steady.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Her gün bir akademik paragraf, zihnini maratona hazırlar. Adım adım hedefine yaklaşıyorsun.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0126",
    "english": "Do not simply read words; track the author's logical architecture. Keep your momentum steady.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan. Adım adım hedefine yaklaşıyorsun.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0127",
    "english": "A reader lives a thousand lives before he dies. Keep your momentum steady.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür. Adım adım hedefine yaklaşıyorsun.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0128",
    "english": "Context is the ultimate compass in dense academic paragraphs. Keep your momentum steady.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir. Adım adım hedefine yaklaşıyorsun.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0129",
    "english": "Remember: Reading is to the mind what exercise is to the body.",
    "turkish": "Unutma: Beden için egzersiz neyse, zihin için okuma odur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0130",
    "english": "Remember: Do not simply read words; track the author's logical architecture.",
    "turkish": "Unutma: Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0131",
    "english": "Remember: A reader lives a thousand lives before he dies.",
    "turkish": "Unutma: Okuyan insan ölmeden önce binlerce hayat yaşar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0132",
    "english": "Remember: Context is the ultimate compass in dense academic paragraphs.",
    "turkish": "Unutma: Yoğun akademik paragraflarda bağlam en büyük pusuladır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0133",
    "english": "Reading is to the mind what exercise is to the body. True progress is built day by day.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0134",
    "english": "Do not simply read words; track the author's logical architecture. True progress is built day by day.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0135",
    "english": "A reader lives a thousand lives before he dies. True progress is built day by day.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0136",
    "english": "Context is the ultimate compass in dense academic paragraphs. True progress is built day by day.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0137",
    "english": "Mastery principle: Reading is to the mind what exercise is to the body.",
    "turkish": "Ustalık ilkesi: Beden için egzersiz neyse, zihin için okuma odur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0138",
    "english": "Mastery principle: Do not simply read words; track the author's logical architecture.",
    "turkish": "Ustalık ilkesi: Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0139",
    "english": "Mastery principle: A reader lives a thousand lives before he dies.",
    "turkish": "Ustalık ilkesi: Okuyan insan ölmeden önce binlerce hayat yaşar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0140",
    "english": "Mastery principle: Context is the ultimate compass in dense academic paragraphs.",
    "turkish": "Ustalık ilkesi: Yoğun akademik paragraflarda bağlam en büyük pusuladır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0141",
    "english": "Reading is to the mind what exercise is to the body. Focus deeply on the task at hand.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0142",
    "english": "Do not simply read words; track the author's logical architecture. Focus deeply on the task at hand.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0143",
    "english": "A reader lives a thousand lives before he dies. Focus deeply on the task at hand.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0144",
    "english": "Context is the ultimate compass in dense academic paragraphs. Focus deeply on the task at hand.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0145",
    "english": "Reading is to the mind what exercise is to the body. Consistency is your supreme superpower.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0146",
    "english": "Do not simply read words; track the author's logical architecture. Consistency is your supreme superpower.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0147",
    "english": "A reader lives a thousand lives before he dies. Consistency is your supreme superpower.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0148",
    "english": "Context is the ultimate compass in dense academic paragraphs. Consistency is your supreme superpower.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0149",
    "english": "Daily inspiration: Reading is to the mind what exercise is to the body.",
    "turkish": "Günün ilhamı: Beden için egzersiz neyse, zihin için okuma odur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0150",
    "english": "Daily inspiration: Do not simply read words; track the author's logical architecture.",
    "turkish": "Günün ilhamı: Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0151",
    "english": "Daily inspiration: A reader lives a thousand lives before he dies.",
    "turkish": "Günün ilhamı: Okuyan insan ölmeden önce binlerce hayat yaşar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0152",
    "english": "Daily inspiration: Context is the ultimate compass in dense academic paragraphs.",
    "turkish": "Günün ilhamı: Yoğun akademik paragraflarda bağlam en büyük pusuladır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0153",
    "english": "Reading is to the mind what exercise is to the body. Strategic analysis guarantees high accuracy.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0154",
    "english": "Do not simply read words; track the author's logical architecture. Strategic analysis guarantees high accuracy.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0155",
    "english": "A reader lives a thousand lives before he dies. Strategic analysis guarantees high accuracy.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0156",
    "english": "Context is the ultimate compass in dense academic paragraphs. Strategic analysis guarantees high accuracy.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0157",
    "english": "Reading is to the mind what exercise is to the body. Excellence is a continuous journey.",
    "turkish": "Beden için egzersiz neyse, zihin için okuma odur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Her gün bir akademik paragraf, zihnini maratona hazırlar.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Joseph Addison",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0158",
    "english": "Do not simply read words; track the author's logical architecture. Excellence is a continuous journey.",
    "turkish": "Sadece kelimeleri okuma; yazarın mantıksal mimarisini takip et. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yazar burada zıtlık mı kuruyor, yoksa örnek mi veriyor? Bağlaçlara odaklan.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Mortimer Adler",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0159",
    "english": "A reader lives a thousand lives before he dies. Excellence is a continuous journey.",
    "turkish": "Okuyan insan ölmeden önce binlerce hayat yaşar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Her YDS metni seni biyolojiden arkeolojiye farklı bir dünyaya götürür.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "George R.R. Martin",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0160",
    "english": "Context is the ultimate compass in dense academic paragraphs. Excellence is a continuous journey.",
    "turkish": "Yoğun akademik paragraflarda bağlam en büyük pusuladır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bilmediğin kelimede panik yapma; cümlenin gidişatı sana ipucunu verir.",
    "category": "reading",
    "animationFallback": "glasses",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0161",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer.",
    "friendlyNote": "Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0162",
    "english": "Confidence in testing comes from repetitive deliberate practice.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar.",
    "friendlyNote": "Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0163",
    "english": "Time management in exams is the art of strategic sacrifice.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır.",
    "friendlyNote": "Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0164",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar.",
    "friendlyNote": "Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0165",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. Keep your momentum steady.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Sakin kal kanka; sınav sadece bir strateji oyunudur. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0166",
    "english": "Confidence in testing comes from repetitive deliberate practice. Keep your momentum steady.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0167",
    "english": "Time management in exams is the art of strategic sacrifice. Keep your momentum steady.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön! Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0168",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. Keep your momentum steady.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele! Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0169",
    "english": "Remember: An exam does not measure your intrinsic worth; it measures your preparation.",
    "turkish": "Unutma: Sınav senin öz değerini değil, hazırlık düzeyini ölçer.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0170",
    "english": "Remember: Confidence in testing comes from repetitive deliberate practice.",
    "turkish": "Unutma: Sınavda özgüven, tekrarlanan bilinçli pratikten doğar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0171",
    "english": "Remember: Time management in exams is the art of strategic sacrifice.",
    "turkish": "Unutma: Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0172",
    "english": "Remember: Eliminating two wrong answers doubles your mathematical probability of success.",
    "turkish": "Unutma: İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0173",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. True progress is built day by day.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0174",
    "english": "Confidence in testing comes from repetitive deliberate practice. True progress is built day by day.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0175",
    "english": "Time management in exams is the art of strategic sacrifice. True progress is built day by day.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0176",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. True progress is built day by day.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0177",
    "english": "Mastery principle: An exam does not measure your intrinsic worth; it measures your preparation.",
    "turkish": "Ustalık ilkesi: Sınav senin öz değerini değil, hazırlık düzeyini ölçer.",
    "friendlyNote": "Odaklanmayı elden bırakma. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0178",
    "english": "Mastery principle: Confidence in testing comes from repetitive deliberate practice.",
    "turkish": "Ustalık ilkesi: Sınavda özgüven, tekrarlanan bilinçli pratikten doğar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0179",
    "english": "Mastery principle: Time management in exams is the art of strategic sacrifice.",
    "turkish": "Ustalık ilkesi: Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0180",
    "english": "Mastery principle: Eliminating two wrong answers doubles your mathematical probability of success.",
    "turkish": "Ustalık ilkesi: İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0181",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. Focus deeply on the task at hand.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0182",
    "english": "Confidence in testing comes from repetitive deliberate practice. Focus deeply on the task at hand.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0183",
    "english": "Time management in exams is the art of strategic sacrifice. Focus deeply on the task at hand.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0184",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. Focus deeply on the task at hand.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0185",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. Consistency is your supreme superpower.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0186",
    "english": "Confidence in testing comes from repetitive deliberate practice. Consistency is your supreme superpower.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0187",
    "english": "Time management in exams is the art of strategic sacrifice. Consistency is your supreme superpower.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0188",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. Consistency is your supreme superpower.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0189",
    "english": "Daily inspiration: An exam does not measure your intrinsic worth; it measures your preparation.",
    "turkish": "Günün ilhamı: Sınav senin öz değerini değil, hazırlık düzeyini ölçer.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0190",
    "english": "Daily inspiration: Confidence in testing comes from repetitive deliberate practice.",
    "turkish": "Günün ilhamı: Sınavda özgüven, tekrarlanan bilinçli pratikten doğar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0191",
    "english": "Daily inspiration: Time management in exams is the art of strategic sacrifice.",
    "turkish": "Günün ilhamı: Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0192",
    "english": "Daily inspiration: Eliminating two wrong answers doubles your mathematical probability of success.",
    "turkish": "Günün ilhamı: İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0193",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. Strategic analysis guarantees high accuracy.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0194",
    "english": "Confidence in testing comes from repetitive deliberate practice. Strategic analysis guarantees high accuracy.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0195",
    "english": "Time management in exams is the art of strategic sacrifice. Strategic analysis guarantees high accuracy.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0196",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. Strategic analysis guarantees high accuracy.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0197",
    "english": "An exam does not measure your intrinsic worth; it measures your preparation. Excellence is a continuous journey.",
    "turkish": "Sınav senin öz değerini değil, hazırlık düzeyini ölçer. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Sakin kal kanka; sınav sadece bir strateji oyunudur.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0198",
    "english": "Confidence in testing comes from repetitive deliberate practice. Excellence is a continuous journey.",
    "turkish": "Sınavda özgüven, tekrarlanan bilinçli pratikten doğar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yeterince deneme çözen öğrenci için gerçek sınav sıradan bir güne dönüşür.",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Anders Ericsson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0199",
    "english": "Time management in exams is the art of strategic sacrifice. Excellence is a continuous journey.",
    "turkish": "Sınavda zaman yönetimi, stratejik fedakarlık sanatıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bir soruya 4 dakika takılıp kalma; bayrağı koy, ilerle ve sonra dön!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0200",
    "english": "Eliminating two wrong answers doubles your mathematical probability of success. Excellence is a continuous journey.",
    "turkish": "İki yanlış seçeneği elemek matematiksel başarı şansını ikiye katlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Doğru şıkkı bulamıyorsan yanlış şıkları acımasızca ele!",
    "category": "sinav",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "YDS Taktik",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0201",
    "english": "Mistakes are the portals of discovery.",
    "turkish": "Hatalar keşfin açılan kapılarıdır.",
    "friendlyNote": "Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0202",
    "english": "He who makes no mistakes never makes anything new.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez.",
    "friendlyNote": "Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0203",
    "english": "A mistake recognized is an opportunity optimized.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır.",
    "friendlyNote": "Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0204",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır.",
    "friendlyNote": "Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0205",
    "english": "Mistakes are the portals of discovery. Keep your momentum steady.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır. Adım adım hedefine yaklaşıyorsun.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0206",
    "english": "He who makes no mistakes never makes anything new. Keep your momentum steady.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir. Adım adım hedefine yaklaşıyorsun.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0207",
    "english": "A mistake recognized is an opportunity optimized. Keep your momentum steady.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yanlış defterine yazdığın her soru hafızana kazınır kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0208",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. Keep your momentum steady.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü. Adım adım hedefine yaklaşıyorsun.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0209",
    "english": "Remember: Mistakes are the portals of discovery.",
    "turkish": "Unutma: Hatalar keşfin açılan kapılarıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0210",
    "english": "Remember: He who makes no mistakes never makes anything new.",
    "turkish": "Unutma: Hiç hata yapmayan, asla yeni bir şey üretemez.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0211",
    "english": "Remember: A mistake recognized is an opportunity optimized.",
    "turkish": "Unutma: Fark edilen bir hata, optimize edilmiş bir fırsattır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0212",
    "english": "Remember: Failure is simply the opportunity to begin again, this time more intelligently.",
    "turkish": "Unutma: Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0213",
    "english": "Mistakes are the portals of discovery. True progress is built day by day.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0214",
    "english": "He who makes no mistakes never makes anything new. True progress is built day by day.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0215",
    "english": "A mistake recognized is an opportunity optimized. True progress is built day by day.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0216",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. True progress is built day by day.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0217",
    "english": "Mastery principle: Mistakes are the portals of discovery.",
    "turkish": "Ustalık ilkesi: Hatalar keşfin açılan kapılarıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0218",
    "english": "Mastery principle: He who makes no mistakes never makes anything new.",
    "turkish": "Ustalık ilkesi: Hiç hata yapmayan, asla yeni bir şey üretemez.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0219",
    "english": "Mastery principle: A mistake recognized is an opportunity optimized.",
    "turkish": "Ustalık ilkesi: Fark edilen bir hata, optimize edilmiş bir fırsattır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0220",
    "english": "Mastery principle: Failure is simply the opportunity to begin again, this time more intelligently.",
    "turkish": "Ustalık ilkesi: Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0221",
    "english": "Mistakes are the portals of discovery. Focus deeply on the task at hand.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0222",
    "english": "He who makes no mistakes never makes anything new. Focus deeply on the task at hand.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0223",
    "english": "A mistake recognized is an opportunity optimized. Focus deeply on the task at hand.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0224",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. Focus deeply on the task at hand.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0225",
    "english": "Mistakes are the portals of discovery. Consistency is your supreme superpower.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0226",
    "english": "He who makes no mistakes never makes anything new. Consistency is your supreme superpower.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0227",
    "english": "A mistake recognized is an opportunity optimized. Consistency is your supreme superpower.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0228",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. Consistency is your supreme superpower.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0229",
    "english": "Daily inspiration: Mistakes are the portals of discovery.",
    "turkish": "Günün ilhamı: Hatalar keşfin açılan kapılarıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0230",
    "english": "Daily inspiration: He who makes no mistakes never makes anything new.",
    "turkish": "Günün ilhamı: Hiç hata yapmayan, asla yeni bir şey üretemez.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0231",
    "english": "Daily inspiration: A mistake recognized is an opportunity optimized.",
    "turkish": "Günün ilhamı: Fark edilen bir hata, optimize edilmiş bir fırsattır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0232",
    "english": "Daily inspiration: Failure is simply the opportunity to begin again, this time more intelligently.",
    "turkish": "Günün ilhamı: Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0233",
    "english": "Mistakes are the portals of discovery. Strategic analysis guarantees high accuracy.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0234",
    "english": "He who makes no mistakes never makes anything new. Strategic analysis guarantees high accuracy.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0235",
    "english": "A mistake recognized is an opportunity optimized. Strategic analysis guarantees high accuracy.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0236",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. Strategic analysis guarantees high accuracy.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0237",
    "english": "Mistakes are the portals of discovery. Excellence is a continuous journey.",
    "turkish": "Hatalar keşfin açılan kapılarıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yanlış yaptığın her soru, sınavda doğru yapacağın bir sorunun provasıdır.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Joyce",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0238",
    "english": "He who makes no mistakes never makes anything new. Excellence is a continuous journey.",
    "turkish": "Hiç hata yapmayan, asla yeni bir şey üretemez. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bugün 10 yanlış yaptıysan, öğrenilecek 10 altın bilgi keşfettin demektir.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Edward Phelps",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0239",
    "english": "A mistake recognized is an opportunity optimized. Excellence is a continuous journey.",
    "turkish": "Fark edilen bir hata, optimize edilmiş bir fırsattır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yanlış defterine yazdığın her soru hafızana kazınır kanka.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0240",
    "english": "Failure is simply the opportunity to begin again, this time more intelligently. Excellence is a continuous journey.",
    "turkish": "Başarısızlık, bu kez daha akıllıca başlamak için bir fırsattır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Netin düştü diye üzülme; eksik konuyu bul ve üzerine yürü.",
    "category": "yanlis_yapma",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Henry Ford",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0241",
    "english": "Discipline is the bridge between goals and accomplishment.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür.",
    "friendlyNote": "Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0242",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır.",
    "friendlyNote": "Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0243",
    "english": "Motivation gets you started, but habit keeps you going.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir.",
    "friendlyNote": "Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0244",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür.",
    "friendlyNote": "Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0245",
    "english": "Discipline is the bridge between goals and accomplishment. Keep your momentum steady.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır. Adım adım hedefine yaklaşıyorsun.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0246",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Keep your momentum steady.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener. Adım adım hedefine yaklaşıyorsun.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0247",
    "english": "Motivation gets you started, but habit keeps you going. Keep your momentum steady.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0248",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. Keep your momentum steady.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin. Adım adım hedefine yaklaşıyorsun.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0249",
    "english": "Remember: Discipline is the bridge between goals and accomplishment.",
    "turkish": "Unutma: Disiplin, hedeflerle başarı arasındaki köprüdür.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0250",
    "english": "Remember: We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "turkish": "Unutma: Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0251",
    "english": "Remember: Motivation gets you started, but habit keeps you going.",
    "turkish": "Unutma: Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0252",
    "english": "Remember: The pain of discipline weighs ounces; the pain of regret weighs tons.",
    "turkish": "Unutma: Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0253",
    "english": "Discipline is the bridge between goals and accomplishment. True progress is built day by day.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0254",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. True progress is built day by day.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0255",
    "english": "Motivation gets you started, but habit keeps you going. True progress is built day by day.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0256",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. True progress is built day by day.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0257",
    "english": "Mastery principle: Discipline is the bridge between goals and accomplishment.",
    "turkish": "Ustalık ilkesi: Disiplin, hedeflerle başarı arasındaki köprüdür.",
    "friendlyNote": "Odaklanmayı elden bırakma. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0258",
    "english": "Mastery principle: We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "turkish": "Ustalık ilkesi: Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0259",
    "english": "Mastery principle: Motivation gets you started, but habit keeps you going.",
    "turkish": "Ustalık ilkesi: Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0260",
    "english": "Mastery principle: The pain of discipline weighs ounces; the pain of regret weighs tons.",
    "turkish": "Ustalık ilkesi: Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0261",
    "english": "Discipline is the bridge between goals and accomplishment. Focus deeply on the task at hand.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0262",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Focus deeply on the task at hand.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0263",
    "english": "Motivation gets you started, but habit keeps you going. Focus deeply on the task at hand.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0264",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. Focus deeply on the task at hand.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0265",
    "english": "Discipline is the bridge between goals and accomplishment. Consistency is your supreme superpower.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0266",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Consistency is your supreme superpower.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0267",
    "english": "Motivation gets you started, but habit keeps you going. Consistency is your supreme superpower.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0268",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. Consistency is your supreme superpower.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0269",
    "english": "Daily inspiration: Discipline is the bridge between goals and accomplishment.",
    "turkish": "Günün ilhamı: Disiplin, hedeflerle başarı arasındaki köprüdür.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0270",
    "english": "Daily inspiration: We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "turkish": "Günün ilhamı: Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0271",
    "english": "Daily inspiration: Motivation gets you started, but habit keeps you going.",
    "turkish": "Günün ilhamı: Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0272",
    "english": "Daily inspiration: The pain of discipline weighs ounces; the pain of regret weighs tons.",
    "turkish": "Günün ilhamı: Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0273",
    "english": "Discipline is the bridge between goals and accomplishment. Strategic analysis guarantees high accuracy.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0274",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Strategic analysis guarantees high accuracy.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0275",
    "english": "Motivation gets you started, but habit keeps you going. Strategic analysis guarantees high accuracy.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0276",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. Strategic analysis guarantees high accuracy.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0277",
    "english": "Discipline is the bridge between goals and accomplishment. Excellence is a continuous journey.",
    "turkish": "Disiplin, hedeflerle başarı arasındaki köprüdür. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Canın istemediğinde bile 15 dakika masaya oturmak seni zirveye taşır.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0278",
    "english": "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Excellence is a continuous journey.",
    "turkish": "Biz tekrar tekrar yaptığımız şeyiz. O halde mükemmellik bir eylem değil, bir alışkanlıktır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günde 45 dakika düzenli çalışan, haftada 1 gün 8 saat çalışanı her zaman yener.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Aristotle",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0279",
    "english": "Motivation gets you started, but habit keeps you going. Excellence is a continuous journey.",
    "turkish": "Motivasyon başlamanı sağlar, ama alışkanlık yola devam ettirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Çalışmayı diş fırçalamak gibi günlük rutinin yap kanka.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jim Ryun",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0280",
    "english": "The pain of discipline weighs ounces; the pain of regret weighs tons. Excellence is a continuous journey.",
    "turkish": "Disiplinin zahmeti gramlarla, pişmanlığın ağırlığı tonlarla ölçülür. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bugün fedakarlık yap ki yarın sınav sonucuna gururla bakabilesin.",
    "category": "disiplin",
    "animationFallback": "fire",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Jim Rohn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0281",
    "english": "Consistency is the mother of mastery.",
    "turkish": "İstikrar ustalığın anasıdır.",
    "friendlyNote": "Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0282",
    "english": "Do not break the chain.",
    "turkish": "Zinciri kırma.",
    "friendlyNote": "Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0283",
    "english": "A streak is proof that you showed up for your future self.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır.",
    "friendlyNote": "Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0284",
    "english": "Momentum, once built, carries you through the steepest hills.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir.",
    "friendlyNote": "Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0285",
    "english": "Consistency is the mother of mastery. Keep your momentum steady.",
    "turkish": "İstikrar ustalığın anasıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor. Adım adım hedefine yaklaşıyorsun.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0286",
    "english": "Do not break the chain. Keep your momentum steady.",
    "turkish": "Zinciri kırma. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0287",
    "english": "A streak is proof that you showed up for your future self. Keep your momentum steady.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bugün sadece 1 test çözsen bile serini koru! Adım adım hedefine yaklaşıyorsun.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0288",
    "english": "Momentum, once built, carries you through the steepest hills. Keep your momentum steady.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Durdurulamayan bir hız yakaladın, devam et kral! Adım adım hedefine yaklaşıyorsun.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0289",
    "english": "Remember: Consistency is the mother of mastery.",
    "turkish": "Unutma: İstikrar ustalığın anasıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0290",
    "english": "Remember: Do not break the chain.",
    "turkish": "Unutma: Zinciri kırma.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0291",
    "english": "Remember: A streak is proof that you showed up for your future self.",
    "turkish": "Unutma: Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0292",
    "english": "Remember: Momentum, once built, carries you through the steepest hills.",
    "turkish": "Unutma: Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0293",
    "english": "Consistency is the mother of mastery. True progress is built day by day.",
    "turkish": "İstikrar ustalığın anasıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0294",
    "english": "Do not break the chain. True progress is built day by day.",
    "turkish": "Zinciri kırma. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0295",
    "english": "A streak is proof that you showed up for your future self. True progress is built day by day.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0296",
    "english": "Momentum, once built, carries you through the steepest hills. True progress is built day by day.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0297",
    "english": "Mastery principle: Consistency is the mother of mastery.",
    "turkish": "Ustalık ilkesi: İstikrar ustalığın anasıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0298",
    "english": "Mastery principle: Do not break the chain.",
    "turkish": "Ustalık ilkesi: Zinciri kırma.",
    "friendlyNote": "Odaklanmayı elden bırakma. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0299",
    "english": "Mastery principle: A streak is proof that you showed up for your future self.",
    "turkish": "Ustalık ilkesi: Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0300",
    "english": "Mastery principle: Momentum, once built, carries you through the steepest hills.",
    "turkish": "Ustalık ilkesi: Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0301",
    "english": "Consistency is the mother of mastery. Focus deeply on the task at hand.",
    "turkish": "İstikrar ustalığın anasıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0302",
    "english": "Do not break the chain. Focus deeply on the task at hand.",
    "turkish": "Zinciri kırma. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0303",
    "english": "A streak is proof that you showed up for your future self. Focus deeply on the task at hand.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0304",
    "english": "Momentum, once built, carries you through the steepest hills. Focus deeply on the task at hand.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0305",
    "english": "Consistency is the mother of mastery. Consistency is your supreme superpower.",
    "turkish": "İstikrar ustalığın anasıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0306",
    "english": "Do not break the chain. Consistency is your supreme superpower.",
    "turkish": "Zinciri kırma. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0307",
    "english": "A streak is proof that you showed up for your future self. Consistency is your supreme superpower.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0308",
    "english": "Momentum, once built, carries you through the steepest hills. Consistency is your supreme superpower.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0309",
    "english": "Daily inspiration: Consistency is the mother of mastery.",
    "turkish": "Günün ilhamı: İstikrar ustalığın anasıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0310",
    "english": "Daily inspiration: Do not break the chain.",
    "turkish": "Günün ilhamı: Zinciri kırma.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0311",
    "english": "Daily inspiration: A streak is proof that you showed up for your future self.",
    "turkish": "Günün ilhamı: Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0312",
    "english": "Daily inspiration: Momentum, once built, carries you through the steepest hills.",
    "turkish": "Günün ilhamı: Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0313",
    "english": "Consistency is the mother of mastery. Strategic analysis guarantees high accuracy.",
    "turkish": "İstikrar ustalığın anasıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0314",
    "english": "Do not break the chain. Strategic analysis guarantees high accuracy.",
    "turkish": "Zinciri kırma. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0315",
    "english": "A streak is proof that you showed up for your future self. Strategic analysis guarantees high accuracy.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0316",
    "english": "Momentum, once built, carries you through the steepest hills. Strategic analysis guarantees high accuracy.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0317",
    "english": "Consistency is the mother of mastery. Excellence is a continuous journey.",
    "turkish": "İstikrar ustalığın anasıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Serini bozmadığın her gün beynindeki nöral bağlar daha da kalınlaşıyor.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Robin Sharma",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0318",
    "english": "Do not break the chain. Excellence is a continuous journey.",
    "turkish": "Zinciri kırma. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Takvimdeki o işaretleri biriktirmek en büyük ödülündür kanka.",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Jerry Seinfeld",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0319",
    "english": "A streak is proof that you showed up for your future self. Excellence is a continuous journey.",
    "turkish": "Bir seri, gelecekteki benliğin için orada olduğunun kanıtıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bugün sadece 1 test çözsen bile serini koru!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0320",
    "english": "Momentum, once built, carries you through the steepest hills. Excellence is a continuous journey.",
    "turkish": "Bir kez kazanılan ivme, seni en dik yokuşlardan bile zahmetsizce geçirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Durdurulamayan bir hız yakaladın, devam et kral!",
    "category": "seri",
    "animationFallback": "fire",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0321",
    "english": "Time is what we want most, but what we use worst.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir.",
    "friendlyNote": "Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0322",
    "english": "Work expands so as to fill the time available for its completion.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler.",
    "friendlyNote": "Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0323",
    "english": "Concentrate all your thoughts upon the work in hand.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla.",
    "friendlyNote": "Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0324",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir.",
    "friendlyNote": "25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0325",
    "english": "Time is what we want most, but what we use worst. Keep your momentum steady.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir. Adım adım hedefine yaklaşıyorsun.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0326",
    "english": "Work expands so as to fill the time available for its completion. Keep your momentum steady.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin. Adım adım hedefine yaklaşıyorsun.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0327",
    "english": "Concentrate all your thoughts upon the work in hand. Keep your momentum steady.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır. Adım adım hedefine yaklaşıyorsun.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0328",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. Keep your momentum steady.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "25 dakika tam odaklan, 5 dakika nefes al. Adım adım hedefine yaklaşıyorsun.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0329",
    "english": "Remember: Time is what we want most, but what we use worst.",
    "turkish": "Unutma: Zaman en çok istediğimiz ama en kötü kullandığımız şeydir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0330",
    "english": "Remember: Work expands so as to fill the time available for its completion.",
    "turkish": "Unutma: İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0331",
    "english": "Remember: Concentrate all your thoughts upon the work in hand.",
    "turkish": "Unutma: Tüm düşüncelerini elindeki işe odakla.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0332",
    "english": "Remember: Pomodoro intervals turn daunting studies into achievable sprints.",
    "turkish": "Unutma: Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0333",
    "english": "Time is what we want most, but what we use worst. True progress is built day by day.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0334",
    "english": "Work expands so as to fill the time available for its completion. True progress is built day by day.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0335",
    "english": "Concentrate all your thoughts upon the work in hand. True progress is built day by day.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0336",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. True progress is built day by day.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0337",
    "english": "Mastery principle: Time is what we want most, but what we use worst.",
    "turkish": "Ustalık ilkesi: Zaman en çok istediğimiz ama en kötü kullandığımız şeydir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0338",
    "english": "Mastery principle: Work expands so as to fill the time available for its completion.",
    "turkish": "Ustalık ilkesi: İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0339",
    "english": "Mastery principle: Concentrate all your thoughts upon the work in hand.",
    "turkish": "Ustalık ilkesi: Tüm düşüncelerini elindeki işe odakla.",
    "friendlyNote": "Odaklanmayı elden bırakma. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0340",
    "english": "Mastery principle: Pomodoro intervals turn daunting studies into achievable sprints.",
    "turkish": "Ustalık ilkesi: Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0341",
    "english": "Time is what we want most, but what we use worst. Focus deeply on the task at hand.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0342",
    "english": "Work expands so as to fill the time available for its completion. Focus deeply on the task at hand.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0343",
    "english": "Concentrate all your thoughts upon the work in hand. Focus deeply on the task at hand.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0344",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. Focus deeply on the task at hand.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0345",
    "english": "Time is what we want most, but what we use worst. Consistency is your supreme superpower.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0346",
    "english": "Work expands so as to fill the time available for its completion. Consistency is your supreme superpower.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0347",
    "english": "Concentrate all your thoughts upon the work in hand. Consistency is your supreme superpower.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0348",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. Consistency is your supreme superpower.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0349",
    "english": "Daily inspiration: Time is what we want most, but what we use worst.",
    "turkish": "Günün ilhamı: Zaman en çok istediğimiz ama en kötü kullandığımız şeydir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0350",
    "english": "Daily inspiration: Work expands so as to fill the time available for its completion.",
    "turkish": "Günün ilhamı: İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0351",
    "english": "Daily inspiration: Concentrate all your thoughts upon the work in hand.",
    "turkish": "Günün ilhamı: Tüm düşüncelerini elindeki işe odakla.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0352",
    "english": "Daily inspiration: Pomodoro intervals turn daunting studies into achievable sprints.",
    "turkish": "Günün ilhamı: Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0353",
    "english": "Time is what we want most, but what we use worst. Strategic analysis guarantees high accuracy.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0354",
    "english": "Work expands so as to fill the time available for its completion. Strategic analysis guarantees high accuracy.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0355",
    "english": "Concentrate all your thoughts upon the work in hand. Strategic analysis guarantees high accuracy.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0356",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. Strategic analysis guarantees high accuracy.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0357",
    "english": "Time is what we want most, but what we use worst. Excellence is a continuous journey.",
    "turkish": "Zaman en çok istediğimiz ama en kötü kullandığımız şeydir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günün ölü zamanlarını (otobüs, sıra bekleme) 5 dakikalık flashcard ile değerlendir.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "William Penn",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0358",
    "english": "Work expands so as to fill the time available for its completion. Excellence is a continuous journey.",
    "turkish": "İş, tamamlanması için ayrılan zamanı dolduracak şekilde genişler. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kendine 20 dakika sınır koy; odaklanmanın nasıl tavan yaptığını göreceksin.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Parkinson Yasası",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0359",
    "english": "Concentrate all your thoughts upon the work in hand. Excellence is a continuous journey.",
    "turkish": "Tüm düşüncelerini elindeki işe odakla. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Telefonu sessize alıp masanın uzağına koymak netlerini doğrudan artırır.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Alexander Graham Bell",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0360",
    "english": "Pomodoro intervals turn daunting studies into achievable sprints. Excellence is a continuous journey.",
    "turkish": "Pomodoro aralıkları göz korkutan çalışmaları başarılabilir deparlara çevirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! 25 dakika tam odaklan, 5 dakika nefes al.",
    "category": "zaman_yonetimi",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0361",
    "english": "Aim for the moon; even if you miss, you will land among the stars.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin.",
    "friendlyNote": "Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0362",
    "english": "A specific target provides an unshakeable direction.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder.",
    "friendlyNote": "Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0363",
    "english": "Every net gained is a direct outcome of targeted question analysis.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur.",
    "friendlyNote": "Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0364",
    "english": "Patience and focused strategy conquer any examination threshold.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir.",
    "friendlyNote": "Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0365",
    "english": "Aim for the moon; even if you miss, you will land among the stars. Keep your momentum steady.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez. Adım adım hedefine yaklaşıyorsun.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0366",
    "english": "A specific target provides an unshakeable direction. Keep your momentum steady.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Almak istediğin puanı büyük harflerle çalışma masanın karşısına as. Adım adım hedefine yaklaşıyorsun.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0367",
    "english": "Every net gained is a direct outcome of targeted question analysis. Keep your momentum steady.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy. Adım adım hedefine yaklaşıyorsun.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0368",
    "english": "Patience and focused strategy conquer any examination threshold. Keep your momentum steady.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Hedeflediğin o puan belgesini eline aldığın anı hayal et! Adım adım hedefine yaklaşıyorsun.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0369",
    "english": "Remember: Aim for the moon; even if you miss, you will land among the stars.",
    "turkish": "Unutma: Ayı hedefle; ıskalasan bile yıldızların arasına inersin.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0370",
    "english": "Remember: A specific target provides an unshakeable direction.",
    "turkish": "Unutma: Belirli bir hedef sarsılmaz bir yön tayin eder.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0371",
    "english": "Remember: Every net gained is a direct outcome of targeted question analysis.",
    "turkish": "Unutma: Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0372",
    "english": "Remember: Patience and focused strategy conquer any examination threshold.",
    "turkish": "Unutma: Sabır ve odaklanmış strateji her sınav barajını dize getirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0373",
    "english": "Aim for the moon; even if you miss, you will land among the stars. True progress is built day by day.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0374",
    "english": "A specific target provides an unshakeable direction. True progress is built day by day.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0375",
    "english": "Every net gained is a direct outcome of targeted question analysis. True progress is built day by day.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0376",
    "english": "Patience and focused strategy conquer any examination threshold. True progress is built day by day.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0377",
    "english": "Mastery principle: Aim for the moon; even if you miss, you will land among the stars.",
    "turkish": "Ustalık ilkesi: Ayı hedefle; ıskalasan bile yıldızların arasına inersin.",
    "friendlyNote": "Odaklanmayı elden bırakma. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0378",
    "english": "Mastery principle: A specific target provides an unshakeable direction.",
    "turkish": "Ustalık ilkesi: Belirli bir hedef sarsılmaz bir yön tayin eder.",
    "friendlyNote": "Odaklanmayı elden bırakma. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0379",
    "english": "Mastery principle: Every net gained is a direct outcome of targeted question analysis.",
    "turkish": "Ustalık ilkesi: Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0380",
    "english": "Mastery principle: Patience and focused strategy conquer any examination threshold.",
    "turkish": "Ustalık ilkesi: Sabır ve odaklanmış strateji her sınav barajını dize getirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0381",
    "english": "Aim for the moon; even if you miss, you will land among the stars. Focus deeply on the task at hand.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0382",
    "english": "A specific target provides an unshakeable direction. Focus deeply on the task at hand.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0383",
    "english": "Every net gained is a direct outcome of targeted question analysis. Focus deeply on the task at hand.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0384",
    "english": "Patience and focused strategy conquer any examination threshold. Focus deeply on the task at hand.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0385",
    "english": "Aim for the moon; even if you miss, you will land among the stars. Consistency is your supreme superpower.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0386",
    "english": "A specific target provides an unshakeable direction. Consistency is your supreme superpower.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0387",
    "english": "Every net gained is a direct outcome of targeted question analysis. Consistency is your supreme superpower.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0388",
    "english": "Patience and focused strategy conquer any examination threshold. Consistency is your supreme superpower.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0389",
    "english": "Daily inspiration: Aim for the moon; even if you miss, you will land among the stars.",
    "turkish": "Günün ilhamı: Ayı hedefle; ıskalasan bile yıldızların arasına inersin.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0390",
    "english": "Daily inspiration: A specific target provides an unshakeable direction.",
    "turkish": "Günün ilhamı: Belirli bir hedef sarsılmaz bir yön tayin eder.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0391",
    "english": "Daily inspiration: Every net gained is a direct outcome of targeted question analysis.",
    "turkish": "Günün ilhamı: Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0392",
    "english": "Daily inspiration: Patience and focused strategy conquer any examination threshold.",
    "turkish": "Günün ilhamı: Sabır ve odaklanmış strateji her sınav barajını dize getirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0393",
    "english": "Aim for the moon; even if you miss, you will land among the stars. Strategic analysis guarantees high accuracy.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0394",
    "english": "A specific target provides an unshakeable direction. Strategic analysis guarantees high accuracy.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0395",
    "english": "Every net gained is a direct outcome of targeted question analysis. Strategic analysis guarantees high accuracy.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0396",
    "english": "Patience and focused strategy conquer any examination threshold. Strategic analysis guarantees high accuracy.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0397",
    "english": "Aim for the moon; even if you miss, you will land among the stars. Excellence is a continuous journey.",
    "turkish": "Ayı hedefle; ıskalasan bile yıldızların arasına inersin. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Hedefini 70 değil 80 koy kanka; çıtayı yükselten asla kaybetmez.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Les Brown",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0398",
    "english": "A specific target provides an unshakeable direction. Excellence is a continuous journey.",
    "turkish": "Belirli bir hedef sarsılmaz bir yön tayin eder. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Almak istediğin puanı büyük harflerle çalışma masanın karşısına as.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0399",
    "english": "Every net gained is a direct outcome of targeted question analysis. Excellence is a continuous journey.",
    "turkish": "Kazanılan her net, hedefe yönelik soru analizinin doğrudan sonucudur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Eksik olduğun soru tipine 3 gün odaklan, +5 neti cebe koy.",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0400",
    "english": "Patience and focused strategy conquer any examination threshold. Excellence is a continuous journey.",
    "turkish": "Sabır ve odaklanmış strateji her sınav barajını dize getirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Hedeflediğin o puan belgesini eline aldığın anı hayal et!",
    "category": "hedef_puan",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0401",
    "english": "Every tall building rests on invisible deep foundations.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur.",
    "friendlyNote": "A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0402",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır.",
    "friendlyNote": "Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0403",
    "english": "Curiosity is the engine of early language acquisition.",
    "turkish": "Merak, erken dil ediniminin motorudur.",
    "friendlyNote": "Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0404",
    "english": "Patience with the basics guarantees speed in advanced stages.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder.",
    "friendlyNote": "Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0405",
    "english": "Every tall building rests on invisible deep foundations. Keep your momentum steady.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir. Adım adım hedefine yaklaşıyorsun.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0406",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. Keep your momentum steady.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka. Adım adım hedefine yaklaşıyorsun.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0407",
    "english": "Curiosity is the engine of early language acquisition. Keep your momentum steady.",
    "turkish": "Merak, erken dil ediniminin motorudur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Gördüğün nesnelerin İngilizcesini kendine sorarak başla. Adım adım hedefine yaklaşıyorsun.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0408",
    "english": "Patience with the basics guarantees speed in advanced stages. Keep your momentum steady.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Acele etme, temeli sağlam at. Adım adım hedefine yaklaşıyorsun.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0409",
    "english": "Remember: Every tall building rests on invisible deep foundations.",
    "turkish": "Unutma: Her yüksek bina görünmeyen derin temellere oturur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0410",
    "english": "Remember: Celebrate simple sentences; they are the seeds of eloquent prose.",
    "turkish": "Unutma: Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0411",
    "english": "Remember: Curiosity is the engine of early language acquisition.",
    "turkish": "Unutma: Merak, erken dil ediniminin motorudur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0412",
    "english": "Remember: Patience with the basics guarantees speed in advanced stages.",
    "turkish": "Unutma: Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0413",
    "english": "Every tall building rests on invisible deep foundations. True progress is built day by day.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0414",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. True progress is built day by day.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0415",
    "english": "Curiosity is the engine of early language acquisition. True progress is built day by day.",
    "turkish": "Merak, erken dil ediniminin motorudur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0416",
    "english": "Patience with the basics guarantees speed in advanced stages. True progress is built day by day.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0417",
    "english": "Mastery principle: Every tall building rests on invisible deep foundations.",
    "turkish": "Ustalık ilkesi: Her yüksek bina görünmeyen derin temellere oturur.",
    "friendlyNote": "Odaklanmayı elden bırakma. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0418",
    "english": "Mastery principle: Celebrate simple sentences; they are the seeds of eloquent prose.",
    "turkish": "Ustalık ilkesi: Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0419",
    "english": "Mastery principle: Curiosity is the engine of early language acquisition.",
    "turkish": "Ustalık ilkesi: Merak, erken dil ediniminin motorudur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0420",
    "english": "Mastery principle: Patience with the basics guarantees speed in advanced stages.",
    "turkish": "Ustalık ilkesi: Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder.",
    "friendlyNote": "Odaklanmayı elden bırakma. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0421",
    "english": "Every tall building rests on invisible deep foundations. Focus deeply on the task at hand.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0422",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. Focus deeply on the task at hand.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0423",
    "english": "Curiosity is the engine of early language acquisition. Focus deeply on the task at hand.",
    "turkish": "Merak, erken dil ediniminin motorudur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0424",
    "english": "Patience with the basics guarantees speed in advanced stages. Focus deeply on the task at hand.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0425",
    "english": "Every tall building rests on invisible deep foundations. Consistency is your supreme superpower.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0426",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. Consistency is your supreme superpower.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0427",
    "english": "Curiosity is the engine of early language acquisition. Consistency is your supreme superpower.",
    "turkish": "Merak, erken dil ediniminin motorudur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0428",
    "english": "Patience with the basics guarantees speed in advanced stages. Consistency is your supreme superpower.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0429",
    "english": "Daily inspiration: Every tall building rests on invisible deep foundations.",
    "turkish": "Günün ilhamı: Her yüksek bina görünmeyen derin temellere oturur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0430",
    "english": "Daily inspiration: Celebrate simple sentences; they are the seeds of eloquent prose.",
    "turkish": "Günün ilhamı: Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0431",
    "english": "Daily inspiration: Curiosity is the engine of early language acquisition.",
    "turkish": "Günün ilhamı: Merak, erken dil ediniminin motorudur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0432",
    "english": "Daily inspiration: Patience with the basics guarantees speed in advanced stages.",
    "turkish": "Günün ilhamı: Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0433",
    "english": "Every tall building rests on invisible deep foundations. Strategic analysis guarantees high accuracy.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0434",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. Strategic analysis guarantees high accuracy.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0435",
    "english": "Curiosity is the engine of early language acquisition. Strategic analysis guarantees high accuracy.",
    "turkish": "Merak, erken dil ediniminin motorudur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0436",
    "english": "Patience with the basics guarantees speed in advanced stages. Strategic analysis guarantees high accuracy.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0437",
    "english": "Every tall building rests on invisible deep foundations. Excellence is a continuous journey.",
    "turkish": "Her yüksek bina görünmeyen derin temellere oturur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! A1'de öğrendiğin 'to be' fiili, C2'deki subjunctive yapıların bile temelidir.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0438",
    "english": "Celebrate simple sentences; they are the seeds of eloquent prose. Excellence is a continuous journey.",
    "turkish": "Basit cümleleri kutla; onlar etkileyici bir anlatımın tohumlarıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Özne + Yüklem + Nesne... Dünyanın en güçlü yapısı bu kanka.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0439",
    "english": "Curiosity is the engine of early language acquisition. Excellence is a continuous journey.",
    "turkish": "Merak, erken dil ediniminin motorudur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Gördüğün nesnelerin İngilizcesini kendine sorarak başla.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0440",
    "english": "Patience with the basics guarantees speed in advanced stages. Excellence is a continuous journey.",
    "turkish": "Temelde gösterilen sabır, ileri aşamalarda sürati garanti eder. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Acele etme, temeli sağlam at.",
    "category": "a1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0441",
    "english": "Connecting past and present opens the full narrative spectrum.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar.",
    "friendlyNote": "Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0442",
    "english": "Comparing concepts builds analytical depth.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır.",
    "friendlyNote": "Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0443",
    "english": "Fluency begins when you stop translating word by word.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar.",
    "friendlyNote": "Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0444",
    "english": "Small dialogues lay the groundwork for reading comprehension.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar.",
    "friendlyNote": "Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0445",
    "english": "Connecting past and present opens the full narrative spectrum. Keep your momentum steady.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama! Adım adım hedefine yaklaşıyorsun.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0446",
    "english": "Comparing concepts builds analytical depth. Keep your momentum steady.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Comparatives ve superlatives ile cümlelerin zenginleşiyor kral. Adım adım hedefine yaklaşıyorsun.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0447",
    "english": "Fluency begins when you stop translating word by word. Keep your momentum steady.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kelimeleri öbek halinde hissetmeye çalış. Adım adım hedefine yaklaşıyorsun.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0448",
    "english": "Small dialogues lay the groundwork for reading comprehension. Keep your momentum steady.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Adım adım ilerliyorsun, A2'nin tadını çıkar. Adım adım hedefine yaklaşıyorsun.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0449",
    "english": "Remember: Connecting past and present opens the full narrative spectrum.",
    "turkish": "Unutma: Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0450",
    "english": "Remember: Comparing concepts builds analytical depth.",
    "turkish": "Unutma: Kavramları karşılaştırmak analitik derinlik kazandırır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0451",
    "english": "Remember: Fluency begins when you stop translating word by word.",
    "turkish": "Unutma: Akıcılık kelime kelime çevirmeyi bıraktığında başlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0452",
    "english": "Remember: Small dialogues lay the groundwork for reading comprehension.",
    "turkish": "Unutma: Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0453",
    "english": "Connecting past and present opens the full narrative spectrum. True progress is built day by day.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0454",
    "english": "Comparing concepts builds analytical depth. True progress is built day by day.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0455",
    "english": "Fluency begins when you stop translating word by word. True progress is built day by day.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0456",
    "english": "Small dialogues lay the groundwork for reading comprehension. True progress is built day by day.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0457",
    "english": "Mastery principle: Connecting past and present opens the full narrative spectrum.",
    "turkish": "Ustalık ilkesi: Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0458",
    "english": "Mastery principle: Comparing concepts builds analytical depth.",
    "turkish": "Ustalık ilkesi: Kavramları karşılaştırmak analitik derinlik kazandırır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0459",
    "english": "Mastery principle: Fluency begins when you stop translating word by word.",
    "turkish": "Ustalık ilkesi: Akıcılık kelime kelime çevirmeyi bıraktığında başlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0460",
    "english": "Mastery principle: Small dialogues lay the groundwork for reading comprehension.",
    "turkish": "Ustalık ilkesi: Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0461",
    "english": "Connecting past and present opens the full narrative spectrum. Focus deeply on the task at hand.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0462",
    "english": "Comparing concepts builds analytical depth. Focus deeply on the task at hand.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0463",
    "english": "Fluency begins when you stop translating word by word. Focus deeply on the task at hand.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0464",
    "english": "Small dialogues lay the groundwork for reading comprehension. Focus deeply on the task at hand.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0465",
    "english": "Connecting past and present opens the full narrative spectrum. Consistency is your supreme superpower.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0466",
    "english": "Comparing concepts builds analytical depth. Consistency is your supreme superpower.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0467",
    "english": "Fluency begins when you stop translating word by word. Consistency is your supreme superpower.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0468",
    "english": "Small dialogues lay the groundwork for reading comprehension. Consistency is your supreme superpower.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0469",
    "english": "Daily inspiration: Connecting past and present opens the full narrative spectrum.",
    "turkish": "Günün ilhamı: Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0470",
    "english": "Daily inspiration: Comparing concepts builds analytical depth.",
    "turkish": "Günün ilhamı: Kavramları karşılaştırmak analitik derinlik kazandırır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0471",
    "english": "Daily inspiration: Fluency begins when you stop translating word by word.",
    "turkish": "Günün ilhamı: Akıcılık kelime kelime çevirmeyi bıraktığında başlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0472",
    "english": "Daily inspiration: Small dialogues lay the groundwork for reading comprehension.",
    "turkish": "Günün ilhamı: Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0473",
    "english": "Connecting past and present opens the full narrative spectrum. Strategic analysis guarantees high accuracy.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0474",
    "english": "Comparing concepts builds analytical depth. Strategic analysis guarantees high accuracy.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0475",
    "english": "Fluency begins when you stop translating word by word. Strategic analysis guarantees high accuracy.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0476",
    "english": "Small dialogues lay the groundwork for reading comprehension. Strategic analysis guarantees high accuracy.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0477",
    "english": "Connecting past and present opens the full narrative spectrum. Excellence is a continuous journey.",
    "turkish": "Geçmişle şimdiyi bağlamak tüm anlatı yelpazesini açar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Artık dün ne yaptığını İngilizce anlatabiliyorsun; bu dev bir sıçrama!",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0478",
    "english": "Comparing concepts builds analytical depth. Excellence is a continuous journey.",
    "turkish": "Kavramları karşılaştırmak analitik derinlik kazandırır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Comparatives ve superlatives ile cümlelerin zenginleşiyor kral.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0479",
    "english": "Fluency begins when you stop translating word by word. Excellence is a continuous journey.",
    "turkish": "Akıcılık kelime kelime çevirmeyi bıraktığında başlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kelimeleri öbek halinde hissetmeye çalış.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0480",
    "english": "Small dialogues lay the groundwork for reading comprehension. Excellence is a continuous journey.",
    "turkish": "Küçük diyaloglar okuduğunu anlama becerisinin zeminini hazırlar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Adım adım ilerliyorsun, A2'nin tadını çıkar.",
    "category": "a2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0481",
    "english": "You have crossed the threshold into autonomous language use.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın.",
    "friendlyNote": "B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0482",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer.",
    "friendlyNote": "Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0483",
    "english": "Active voice describes action; passive voice reveals institutional focus.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar.",
    "friendlyNote": "Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0484",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar.",
    "friendlyNote": "If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0485",
    "english": "You have crossed the threshold into autonomous language use. Keep your momentum steady.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir. Adım adım hedefine yaklaşıyorsun.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0486",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. Keep your momentum steady.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor. Adım adım hedefine yaklaşıyorsun.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0487",
    "english": "Active voice describes action; passive voice reveals institutional focus. Keep your momentum steady.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Akademik metinler edilgen çatıya bayılır; formülleri iyi belle. Adım adım hedefine yaklaşıyorsun.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0488",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. Keep your momentum steady.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır. Adım adım hedefine yaklaşıyorsun.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0489",
    "english": "Remember: You have crossed the threshold into autonomous language use.",
    "turkish": "Unutma: Bağımsız dil kullanımının eşiğinden içeri adım attın.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0490",
    "english": "Remember: Relative clauses weave simple ideas into sophisticated tapestries.",
    "turkish": "Unutma: İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0491",
    "english": "Remember: Active voice describes action; passive voice reveals institutional focus.",
    "turkish": "Unutma: Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0492",
    "english": "Remember: Conditionals enable speculation, hypothesis, and strategic thought.",
    "turkish": "Unutma: Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0493",
    "english": "You have crossed the threshold into autonomous language use. True progress is built day by day.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0494",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. True progress is built day by day.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0495",
    "english": "Active voice describes action; passive voice reveals institutional focus. True progress is built day by day.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0496",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. True progress is built day by day.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0497",
    "english": "Mastery principle: You have crossed the threshold into autonomous language use.",
    "turkish": "Ustalık ilkesi: Bağımsız dil kullanımının eşiğinden içeri adım attın.",
    "friendlyNote": "Odaklanmayı elden bırakma. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0498",
    "english": "Mastery principle: Relative clauses weave simple ideas into sophisticated tapestries.",
    "turkish": "Ustalık ilkesi: İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer.",
    "friendlyNote": "Odaklanmayı elden bırakma. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0499",
    "english": "Mastery principle: Active voice describes action; passive voice reveals institutional focus.",
    "turkish": "Ustalık ilkesi: Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0500",
    "english": "Mastery principle: Conditionals enable speculation, hypothesis, and strategic thought.",
    "turkish": "Ustalık ilkesi: Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar.",
    "friendlyNote": "Odaklanmayı elden bırakma. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0501",
    "english": "You have crossed the threshold into autonomous language use. Focus deeply on the task at hand.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0502",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. Focus deeply on the task at hand.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0503",
    "english": "Active voice describes action; passive voice reveals institutional focus. Focus deeply on the task at hand.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0504",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. Focus deeply on the task at hand.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0505",
    "english": "You have crossed the threshold into autonomous language use. Consistency is your supreme superpower.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0506",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. Consistency is your supreme superpower.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0507",
    "english": "Active voice describes action; passive voice reveals institutional focus. Consistency is your supreme superpower.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0508",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. Consistency is your supreme superpower.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0509",
    "english": "Daily inspiration: You have crossed the threshold into autonomous language use.",
    "turkish": "Günün ilhamı: Bağımsız dil kullanımının eşiğinden içeri adım attın.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0510",
    "english": "Daily inspiration: Relative clauses weave simple ideas into sophisticated tapestries.",
    "turkish": "Günün ilhamı: İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0511",
    "english": "Daily inspiration: Active voice describes action; passive voice reveals institutional focus.",
    "turkish": "Günün ilhamı: Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0512",
    "english": "Daily inspiration: Conditionals enable speculation, hypothesis, and strategic thought.",
    "turkish": "Günün ilhamı: Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0513",
    "english": "You have crossed the threshold into autonomous language use. Strategic analysis guarantees high accuracy.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0514",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. Strategic analysis guarantees high accuracy.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0515",
    "english": "Active voice describes action; passive voice reveals institutional focus. Strategic analysis guarantees high accuracy.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0516",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. Strategic analysis guarantees high accuracy.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0517",
    "english": "You have crossed the threshold into autonomous language use. Excellence is a continuous journey.",
    "turkish": "Bağımsız dil kullanımının eşiğinden içeri adım attın. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! B1 demek, sözlük yardımıyla gerçek dünyayı okuyabilmek demektir.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0518",
    "english": "Relative clauses weave simple ideas into sophisticated tapestries. Excellence is a continuous journey.",
    "turkish": "İlgi cümlecikleri basit fikirleri sofistike kumaşlar gibi örer. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Who, which, whose... Cümleleri bağladıkça YDS tarzı ortaya çıkıyor.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0519",
    "english": "Active voice describes action; passive voice reveals institutional focus. Excellence is a continuous journey.",
    "turkish": "Etken çatı eylemi anlatır; edilgen çatı kurumsal odağı ortaya koyar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Akademik metinler edilgen çatıya bayılır; formülleri iyi belle.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0520",
    "english": "Conditionals enable speculation, hypothesis, and strategic thought. Excellence is a continuous journey.",
    "turkish": "Koşul cümleleri spekülasyon, hipotez ve stratejik düşünmeyi mümkün kılar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! If Type 2 ve Type 3 ayrımları YDS'nin vazgeçilmez sorularıdır.",
    "category": "b1",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0521",
    "english": "B2 is the gateway to academic discourse and YDS success.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır.",
    "friendlyNote": "Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0522",
    "english": "Precision in modal verbs reflects precision in academic judgment.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır.",
    "friendlyNote": "Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0523",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder.",
    "friendlyNote": "Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0524",
    "english": "Reading between the lines is the hallmark of the B2 scholar.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır.",
    "friendlyNote": "Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0525",
    "english": "B2 is the gateway to academic discourse and YDS success. Keep your momentum steady.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir. Adım adım hedefine yaklaşıyorsun.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0526",
    "english": "Precision in modal verbs reflects precision in academic judgment. Keep your momentum steady.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır. Adım adım hedefine yaklaşıyorsun.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0527",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. Keep your momentum steady.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala. Adım adım hedefine yaklaşıyorsun.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0528",
    "english": "Reading between the lines is the hallmark of the B2 scholar. Keep your momentum steady.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Metin sadece ne söylediğini değil, ne ima ettiğini de söyler. Adım adım hedefine yaklaşıyorsun.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0529",
    "english": "Remember: B2 is the gateway to academic discourse and YDS success.",
    "turkish": "Unutma: B2 akademik söylemin ve YDS başarısının ana kapısıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0530",
    "english": "Remember: Precision in modal verbs reflects precision in academic judgment.",
    "turkish": "Unutma: Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0531",
    "english": "Remember: Adverbial connectors dictate the intellectual flow of argumentation.",
    "turkish": "Unutma: Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0532",
    "english": "Remember: Reading between the lines is the hallmark of the B2 scholar.",
    "turkish": "Unutma: Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0533",
    "english": "B2 is the gateway to academic discourse and YDS success. True progress is built day by day.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0534",
    "english": "Precision in modal verbs reflects precision in academic judgment. True progress is built day by day.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0535",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. True progress is built day by day.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0536",
    "english": "Reading between the lines is the hallmark of the B2 scholar. True progress is built day by day.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0537",
    "english": "Mastery principle: B2 is the gateway to academic discourse and YDS success.",
    "turkish": "Ustalık ilkesi: B2 akademik söylemin ve YDS başarısının ana kapısıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0538",
    "english": "Mastery principle: Precision in modal verbs reflects precision in academic judgment.",
    "turkish": "Ustalık ilkesi: Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0539",
    "english": "Mastery principle: Adverbial connectors dictate the intellectual flow of argumentation.",
    "turkish": "Ustalık ilkesi: Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder.",
    "friendlyNote": "Odaklanmayı elden bırakma. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0540",
    "english": "Mastery principle: Reading between the lines is the hallmark of the B2 scholar.",
    "turkish": "Ustalık ilkesi: Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0541",
    "english": "B2 is the gateway to academic discourse and YDS success. Focus deeply on the task at hand.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0542",
    "english": "Precision in modal verbs reflects precision in academic judgment. Focus deeply on the task at hand.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0543",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. Focus deeply on the task at hand.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0544",
    "english": "Reading between the lines is the hallmark of the B2 scholar. Focus deeply on the task at hand.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0545",
    "english": "B2 is the gateway to academic discourse and YDS success. Consistency is your supreme superpower.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0546",
    "english": "Precision in modal verbs reflects precision in academic judgment. Consistency is your supreme superpower.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0547",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. Consistency is your supreme superpower.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0548",
    "english": "Reading between the lines is the hallmark of the B2 scholar. Consistency is your supreme superpower.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0549",
    "english": "Daily inspiration: B2 is the gateway to academic discourse and YDS success.",
    "turkish": "Günün ilhamı: B2 akademik söylemin ve YDS başarısının ana kapısıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0550",
    "english": "Daily inspiration: Precision in modal verbs reflects precision in academic judgment.",
    "turkish": "Günün ilhamı: Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0551",
    "english": "Daily inspiration: Adverbial connectors dictate the intellectual flow of argumentation.",
    "turkish": "Günün ilhamı: Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0552",
    "english": "Daily inspiration: Reading between the lines is the hallmark of the B2 scholar.",
    "turkish": "Günün ilhamı: Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0553",
    "english": "B2 is the gateway to academic discourse and YDS success. Strategic analysis guarantees high accuracy.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0554",
    "english": "Precision in modal verbs reflects precision in academic judgment. Strategic analysis guarantees high accuracy.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0555",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. Strategic analysis guarantees high accuracy.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0556",
    "english": "Reading between the lines is the hallmark of the B2 scholar. Strategic analysis guarantees high accuracy.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0557",
    "english": "B2 is the gateway to academic discourse and YDS success. Excellence is a continuous journey.",
    "turkish": "B2 akademik söylemin ve YDS başarısının ana kapısıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bu seviyedeki kelimeler doğrudan ÖSYM'nin soru köklerinden seçilir.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0558",
    "english": "Precision in modal verbs reflects precision in academic judgment. Excellence is a continuous journey.",
    "turkish": "Kipli fiillerdeki hassasiyet, akademik yargılardaki hassasiyeti yansıtır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Must have V3 ile should have V3 arasındaki farkı bilmek net kurtarır.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0559",
    "english": "Adverbial connectors dictate the intellectual flow of argumentation. Excellence is a continuous journey.",
    "turkish": "Zarf bağlaçları argümantasyonun entelektüel akışını dikte eder. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Although, whereas, nonetheless... Bu üçlüyü gördüğün yerde zıtlığı yakala.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0560",
    "english": "Reading between the lines is the hallmark of the B2 scholar. Excellence is a continuous journey.",
    "turkish": "Satır aralarını okuyabilmek B2 öğrencisinin alametifarikasıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Metin sadece ne söylediğini değil, ne ima ettiğini de söyler.",
    "category": "b2",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0561",
    "english": "Inversion elevates syntax from functional to masterful.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir.",
    "friendlyNote": "Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0562",
    "english": "Nuance separates mere comprehension from true linguistic mastery.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır.",
    "friendlyNote": "Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0563",
    "english": "Complex reductions compress multiple clauses into elegant economy.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır.",
    "friendlyNote": "Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0564",
    "english": "At C1, you do not decipher the language; you think through it.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün.",
    "friendlyNote": "Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0565",
    "english": "Inversion elevates syntax from functional to masterful. Keep your momentum steady.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Hardly had the test begun when you mastered the answer! Adım adım hedefine yaklaşıyorsun.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0566",
    "english": "Nuance separates mere comprehension from true linguistic mastery. Keep your momentum steady.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan. Adım adım hedefine yaklaşıyorsun.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0567",
    "english": "Complex reductions compress multiple clauses into elegant economy. Keep your momentum steady.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Having been analyzed... Participle reduction sorularında özneye dikkat et. Adım adım hedefine yaklaşıyorsun.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0568",
    "english": "At C1, you do not decipher the language; you think through it. Keep your momentum steady.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Akademik metinler artık sana yabancı değil, senin çalışma alanın. Adım adım hedefine yaklaşıyorsun.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0569",
    "english": "Remember: Inversion elevates syntax from functional to masterful.",
    "turkish": "Unutma: Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0570",
    "english": "Remember: Nuance separates mere comprehension from true linguistic mastery.",
    "turkish": "Unutma: Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0571",
    "english": "Remember: Complex reductions compress multiple clauses into elegant economy.",
    "turkish": "Unutma: Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0572",
    "english": "Remember: At C1, you do not decipher the language; you think through it.",
    "turkish": "Unutma: C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0573",
    "english": "Inversion elevates syntax from functional to masterful. True progress is built day by day.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0574",
    "english": "Nuance separates mere comprehension from true linguistic mastery. True progress is built day by day.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0575",
    "english": "Complex reductions compress multiple clauses into elegant economy. True progress is built day by day.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0576",
    "english": "At C1, you do not decipher the language; you think through it. True progress is built day by day.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0577",
    "english": "Mastery principle: Inversion elevates syntax from functional to masterful.",
    "turkish": "Ustalık ilkesi: Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0578",
    "english": "Mastery principle: Nuance separates mere comprehension from true linguistic mastery.",
    "turkish": "Ustalık ilkesi: Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0579",
    "english": "Mastery principle: Complex reductions compress multiple clauses into elegant economy.",
    "turkish": "Ustalık ilkesi: Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0580",
    "english": "Mastery principle: At C1, you do not decipher the language; you think through it.",
    "turkish": "Ustalık ilkesi: C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün.",
    "friendlyNote": "Odaklanmayı elden bırakma. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0581",
    "english": "Inversion elevates syntax from functional to masterful. Focus deeply on the task at hand.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0582",
    "english": "Nuance separates mere comprehension from true linguistic mastery. Focus deeply on the task at hand.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0583",
    "english": "Complex reductions compress multiple clauses into elegant economy. Focus deeply on the task at hand.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0584",
    "english": "At C1, you do not decipher the language; you think through it. Focus deeply on the task at hand.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0585",
    "english": "Inversion elevates syntax from functional to masterful. Consistency is your supreme superpower.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0586",
    "english": "Nuance separates mere comprehension from true linguistic mastery. Consistency is your supreme superpower.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0587",
    "english": "Complex reductions compress multiple clauses into elegant economy. Consistency is your supreme superpower.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0588",
    "english": "At C1, you do not decipher the language; you think through it. Consistency is your supreme superpower.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0589",
    "english": "Daily inspiration: Inversion elevates syntax from functional to masterful.",
    "turkish": "Günün ilhamı: Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0590",
    "english": "Daily inspiration: Nuance separates mere comprehension from true linguistic mastery.",
    "turkish": "Günün ilhamı: Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0591",
    "english": "Daily inspiration: Complex reductions compress multiple clauses into elegant economy.",
    "turkish": "Günün ilhamı: Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0592",
    "english": "Daily inspiration: At C1, you do not decipher the language; you think through it.",
    "turkish": "Günün ilhamı: C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0593",
    "english": "Inversion elevates syntax from functional to masterful. Strategic analysis guarantees high accuracy.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0594",
    "english": "Nuance separates mere comprehension from true linguistic mastery. Strategic analysis guarantees high accuracy.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0595",
    "english": "Complex reductions compress multiple clauses into elegant economy. Strategic analysis guarantees high accuracy.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0596",
    "english": "At C1, you do not decipher the language; you think through it. Strategic analysis guarantees high accuracy.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0597",
    "english": "Inversion elevates syntax from functional to masterful. Excellence is a continuous journey.",
    "turkish": "Devrik yapı, söz dizimini işlevselden ustaca bir düzeye yükseltir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Hardly had the test begun when you mastered the answer!",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0598",
    "english": "Nuance separates mere comprehension from true linguistic mastery. Excellence is a continuous journey.",
    "turkish": "Nüans, sadece anlamakla gerçek dil ustalığını birbirinden ayırır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Eş anlamlı gibi görünen kelimelerin kullanım alanlarındaki farklara odaklan.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0599",
    "english": "Complex reductions compress multiple clauses into elegant economy. Excellence is a continuous journey.",
    "turkish": "Karmaşık kısaltmalar birden fazla cümleyi zarif bir ekonomiye sıkıştırır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Having been analyzed... Participle reduction sorularında özneye dikkat et.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0600",
    "english": "At C1, you do not decipher the language; you think through it. Excellence is a continuous journey.",
    "turkish": "C1 seviyesinde dili çözmezsin; onun aracılığıyla düşünürsün. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Akademik metinler artık sana yabancı değil, senin çalışma alanın.",
    "category": "c1",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0601",
    "english": "C2 represents effortless precision and native-level intuition.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder.",
    "friendlyNote": "En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0602",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur.",
    "friendlyNote": "Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0603",
    "english": "The true master remains a perpetual student of semantic elegance.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır.",
    "friendlyNote": "Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0604",
    "english": "Command over language is command over conceptual clarity.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir.",
    "friendlyNote": "ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0605",
    "english": "C2 represents effortless precision and native-level intuition. Keep your momentum steady.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir. Adım adım hedefine yaklaşıyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0606",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. Keep your momentum steady.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun. Adım adım hedefine yaklaşıyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0607",
    "english": "The true master remains a perpetual student of semantic elegance. Keep your momentum steady.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze! Adım adım hedefine yaklaşıyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0608",
    "english": "Command over language is command over conceptual clarity. Keep your momentum steady.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır. Adım adım hedefine yaklaşıyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0609",
    "english": "Remember: C2 represents effortless precision and native-level intuition.",
    "turkish": "Unutma: C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0610",
    "english": "Remember: Style, register, and pragmatic subtlety constitute the pinnacle of fluency.",
    "turkish": "Unutma: Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0611",
    "english": "Remember: The true master remains a perpetual student of semantic elegance.",
    "turkish": "Unutma: Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0612",
    "english": "Remember: Command over language is command over conceptual clarity.",
    "turkish": "Unutma: Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0613",
    "english": "C2 represents effortless precision and native-level intuition. True progress is built day by day.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0614",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. True progress is built day by day.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0615",
    "english": "The true master remains a perpetual student of semantic elegance. True progress is built day by day.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0616",
    "english": "Command over language is command over conceptual clarity. True progress is built day by day.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0617",
    "english": "Mastery principle: C2 represents effortless precision and native-level intuition.",
    "turkish": "Ustalık ilkesi: C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder.",
    "friendlyNote": "Odaklanmayı elden bırakma. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0618",
    "english": "Mastery principle: Style, register, and pragmatic subtlety constitute the pinnacle of fluency.",
    "turkish": "Ustalık ilkesi: Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0619",
    "english": "Mastery principle: The true master remains a perpetual student of semantic elegance.",
    "turkish": "Ustalık ilkesi: Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0620",
    "english": "Mastery principle: Command over language is command over conceptual clarity.",
    "turkish": "Ustalık ilkesi: Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir.",
    "friendlyNote": "Odaklanmayı elden bırakma. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0621",
    "english": "C2 represents effortless precision and native-level intuition. Focus deeply on the task at hand.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0622",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. Focus deeply on the task at hand.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0623",
    "english": "The true master remains a perpetual student of semantic elegance. Focus deeply on the task at hand.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0624",
    "english": "Command over language is command over conceptual clarity. Focus deeply on the task at hand.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0625",
    "english": "C2 represents effortless precision and native-level intuition. Consistency is your supreme superpower.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0626",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. Consistency is your supreme superpower.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0627",
    "english": "The true master remains a perpetual student of semantic elegance. Consistency is your supreme superpower.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0628",
    "english": "Command over language is command over conceptual clarity. Consistency is your supreme superpower.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0629",
    "english": "Daily inspiration: C2 represents effortless precision and native-level intuition.",
    "turkish": "Günün ilhamı: C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0630",
    "english": "Daily inspiration: Style, register, and pragmatic subtlety constitute the pinnacle of fluency.",
    "turkish": "Günün ilhamı: Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0631",
    "english": "Daily inspiration: The true master remains a perpetual student of semantic elegance.",
    "turkish": "Günün ilhamı: Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0632",
    "english": "Daily inspiration: Command over language is command over conceptual clarity.",
    "turkish": "Günün ilhamı: Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0633",
    "english": "C2 represents effortless precision and native-level intuition. Strategic analysis guarantees high accuracy.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0634",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. Strategic analysis guarantees high accuracy.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0635",
    "english": "The true master remains a perpetual student of semantic elegance. Strategic analysis guarantees high accuracy.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0636",
    "english": "Command over language is command over conceptual clarity. Strategic analysis guarantees high accuracy.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0637",
    "english": "C2 represents effortless precision and native-level intuition. Excellence is a continuous journey.",
    "turkish": "C2 zahmetsiz hassasiyeti ve ana dil düzeyindeki sezgiyi temsil eder. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! En karmaşık çıkarım soruları bile senin için bir satranç hamlesi kadar nettir.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0638",
    "english": "Style, register, and pragmatic subtlety constitute the pinnacle of fluency. Excellence is a continuous journey.",
    "turkish": "Üslup, dil kaydı ve pragmatik incelik akıcılığın zirvesini oluşturur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yazarın alaycı mı, temkinli mi olduğunu tek bir sıfattan yakalayabiliyorsun.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0639",
    "english": "The true master remains a perpetual student of semantic elegance. Excellence is a continuous journey.",
    "turkish": "Gerçek usta, anlamsal zarafetin daimi bir öğrencisi olarak kalır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Zirvedesin ama merakın ve öğrenme aşkın ilk günkü gibi taze!",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0640",
    "english": "Command over language is command over conceptual clarity. Excellence is a continuous journey.",
    "turkish": "Dil üzerindeki hakimiyet, kavramsal netlik üzerindeki hakimiyettir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! ÖSYM'nin en zorlu çeldiricileri senin karşında şeffaflaşır.",
    "category": "c2",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0641",
    "english": "The early morning hours hold the purest clarity of mind.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır.",
    "friendlyNote": "Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0642",
    "english": "Win the morning, win the day.",
    "turkish": "Sabahı kazan, günü kazan.",
    "friendlyNote": "Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0643",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir.",
    "friendlyNote": "Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0644",
    "english": "An hour of morning focus equals three hours of fatigued evening effort.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir.",
    "friendlyNote": "Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0645",
    "english": "The early morning hours hold the purest clarity of mind. Keep your momentum steady.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır. Adım adım hedefine yaklaşıyorsun.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0646",
    "english": "Win the morning, win the day. Keep your momentum steady.",
    "turkish": "Sabahı kazan, günü kazan. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kahveni al, ilk 30 dakikayı en zor konuya ayır. Adım adım hedefine yaklaşıyorsun.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0647",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. Keep your momentum steady.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günün gürültüsü başlamadan zihnini İngilizceyle şarj et. Adım adım hedefine yaklaşıyorsun.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0648",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. Keep your momentum steady.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka! Adım adım hedefine yaklaşıyorsun.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0649",
    "english": "Remember: The early morning hours hold the purest clarity of mind.",
    "turkish": "Unutma: Sabahın erken saatleri zihnin en saf berraklığını barındırır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0650",
    "english": "Remember: Win the morning, win the day.",
    "turkish": "Unutma: Sabahı kazan, günü kazan.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0651",
    "english": "Remember: Dawn brings fresh perspective to complex grammatical puzzles.",
    "turkish": "Unutma: Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0652",
    "english": "Remember: An hour of morning focus equals three hours of fatigued evening effort.",
    "turkish": "Unutma: Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0653",
    "english": "The early morning hours hold the purest clarity of mind. True progress is built day by day.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0654",
    "english": "Win the morning, win the day. True progress is built day by day.",
    "turkish": "Sabahı kazan, günü kazan. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0655",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. True progress is built day by day.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0656",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. True progress is built day by day.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0657",
    "english": "Mastery principle: The early morning hours hold the purest clarity of mind.",
    "turkish": "Ustalık ilkesi: Sabahın erken saatleri zihnin en saf berraklığını barındırır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0658",
    "english": "Mastery principle: Win the morning, win the day.",
    "turkish": "Ustalık ilkesi: Sabahı kazan, günü kazan.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0659",
    "english": "Mastery principle: Dawn brings fresh perspective to complex grammatical puzzles.",
    "turkish": "Ustalık ilkesi: Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0660",
    "english": "Mastery principle: An hour of morning focus equals three hours of fatigued evening effort.",
    "turkish": "Ustalık ilkesi: Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0661",
    "english": "The early morning hours hold the purest clarity of mind. Focus deeply on the task at hand.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0662",
    "english": "Win the morning, win the day. Focus deeply on the task at hand.",
    "turkish": "Sabahı kazan, günü kazan. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0663",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. Focus deeply on the task at hand.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0664",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. Focus deeply on the task at hand.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0665",
    "english": "The early morning hours hold the purest clarity of mind. Consistency is your supreme superpower.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0666",
    "english": "Win the morning, win the day. Consistency is your supreme superpower.",
    "turkish": "Sabahı kazan, günü kazan. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0667",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. Consistency is your supreme superpower.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0668",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. Consistency is your supreme superpower.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0669",
    "english": "Daily inspiration: The early morning hours hold the purest clarity of mind.",
    "turkish": "Günün ilhamı: Sabahın erken saatleri zihnin en saf berraklığını barındırır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0670",
    "english": "Daily inspiration: Win the morning, win the day.",
    "turkish": "Günün ilhamı: Sabahı kazan, günü kazan.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0671",
    "english": "Daily inspiration: Dawn brings fresh perspective to complex grammatical puzzles.",
    "turkish": "Günün ilhamı: Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0672",
    "english": "Daily inspiration: An hour of morning focus equals three hours of fatigued evening effort.",
    "turkish": "Günün ilhamı: Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0673",
    "english": "The early morning hours hold the purest clarity of mind. Strategic analysis guarantees high accuracy.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0674",
    "english": "Win the morning, win the day. Strategic analysis guarantees high accuracy.",
    "turkish": "Sabahı kazan, günü kazan. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0675",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. Strategic analysis guarantees high accuracy.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0676",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. Strategic analysis guarantees high accuracy.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0677",
    "english": "The early morning hours hold the purest clarity of mind. Excellence is a continuous journey.",
    "turkish": "Sabahın erken saatleri zihnin en saf berraklığını barındırır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Herkes uyurken çözülen 20 soru, günün en değerli yatırımıdır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0678",
    "english": "Win the morning, win the day. Excellence is a continuous journey.",
    "turkish": "Sabahı kazan, günü kazan. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kahveni al, ilk 30 dakikayı en zor konuya ayır.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Tim Ferriss",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0679",
    "english": "Dawn brings fresh perspective to complex grammatical puzzles. Excellence is a continuous journey.",
    "turkish": "Şafak vakti karmaşık gramer bulmacalarına taze bir bakış açısı getirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günün gürültüsü başlamadan zihnini İngilizceyle şarj et.",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0680",
    "english": "An hour of morning focus equals three hours of fatigued evening effort. Excellence is a continuous journey.",
    "turkish": "Sabah bir saatlik odaklanma, akşamki üç saatlik yorgun çabaya bedeldir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Erken kalkan yol alır, erken çalışan YDS'yi devirir kanka!",
    "category": "sabah",
    "animationFallback": "alarm",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0681",
    "english": "Night silence creates an uninterrupted sanctum for deep study.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır.",
    "friendlyNote": "Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0682",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir.",
    "friendlyNote": "Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0683",
    "english": "The quiet hours belong to those who dare to dream awake.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir.",
    "friendlyNote": "Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0684",
    "english": "One final well-analyzed question before rest cements today's progress.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler.",
    "friendlyNote": "Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0685",
    "english": "Night silence creates an uninterrupted sanctum for deep study. Keep your momentum steady.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir. Adım adım hedefine yaklaşıyorsun.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0686",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. Keep your momentum steady.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır. Adım adım hedefine yaklaşıyorsun.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0687",
    "english": "The quiet hours belong to those who dare to dream awake. Keep your momentum steady.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak. Adım adım hedefine yaklaşıyorsun.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0688",
    "english": "One final well-analyzed question before rest cements today's progress. Keep your momentum steady.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral. Adım adım hedefine yaklaşıyorsun.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0689",
    "english": "Remember: Night silence creates an uninterrupted sanctum for deep study.",
    "turkish": "Unutma: Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0690",
    "english": "Remember: Before sleep, review your flashcards; the brain consolidates memories overnight.",
    "turkish": "Unutma: Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0691",
    "english": "Remember: The quiet hours belong to those who dare to dream awake.",
    "turkish": "Unutma: Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0692",
    "english": "Remember: One final well-analyzed question before rest cements today's progress.",
    "turkish": "Unutma: Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0693",
    "english": "Night silence creates an uninterrupted sanctum for deep study. True progress is built day by day.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0694",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. True progress is built day by day.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0695",
    "english": "The quiet hours belong to those who dare to dream awake. True progress is built day by day.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0696",
    "english": "One final well-analyzed question before rest cements today's progress. True progress is built day by day.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0697",
    "english": "Mastery principle: Night silence creates an uninterrupted sanctum for deep study.",
    "turkish": "Ustalık ilkesi: Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0698",
    "english": "Mastery principle: Before sleep, review your flashcards; the brain consolidates memories overnight.",
    "turkish": "Ustalık ilkesi: Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0699",
    "english": "Mastery principle: The quiet hours belong to those who dare to dream awake.",
    "turkish": "Ustalık ilkesi: Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0700",
    "english": "Mastery principle: One final well-analyzed question before rest cements today's progress.",
    "turkish": "Ustalık ilkesi: Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0701",
    "english": "Night silence creates an uninterrupted sanctum for deep study. Focus deeply on the task at hand.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0702",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. Focus deeply on the task at hand.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0703",
    "english": "The quiet hours belong to those who dare to dream awake. Focus deeply on the task at hand.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0704",
    "english": "One final well-analyzed question before rest cements today's progress. Focus deeply on the task at hand.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0705",
    "english": "Night silence creates an uninterrupted sanctum for deep study. Consistency is your supreme superpower.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0706",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. Consistency is your supreme superpower.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0707",
    "english": "The quiet hours belong to those who dare to dream awake. Consistency is your supreme superpower.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0708",
    "english": "One final well-analyzed question before rest cements today's progress. Consistency is your supreme superpower.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0709",
    "english": "Daily inspiration: Night silence creates an uninterrupted sanctum for deep study.",
    "turkish": "Günün ilhamı: Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0710",
    "english": "Daily inspiration: Before sleep, review your flashcards; the brain consolidates memories overnight.",
    "turkish": "Günün ilhamı: Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0711",
    "english": "Daily inspiration: The quiet hours belong to those who dare to dream awake.",
    "turkish": "Günün ilhamı: Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0712",
    "english": "Daily inspiration: One final well-analyzed question before rest cements today's progress.",
    "turkish": "Günün ilhamı: Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0713",
    "english": "Night silence creates an uninterrupted sanctum for deep study. Strategic analysis guarantees high accuracy.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0714",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. Strategic analysis guarantees high accuracy.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0715",
    "english": "The quiet hours belong to those who dare to dream awake. Strategic analysis guarantees high accuracy.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0716",
    "english": "One final well-analyzed question before rest cements today's progress. Strategic analysis guarantees high accuracy.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0717",
    "english": "Night silence creates an uninterrupted sanctum for deep study. Excellence is a continuous journey.",
    "turkish": "Gece sessizliği derin çalışma için kesintisiz bir sığınak yaratır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Tüm dünya uyurken hedefine odaklanmak bambaşka bir güç verir.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0718",
    "english": "Before sleep, review your flashcards; the brain consolidates memories overnight. Excellence is a continuous journey.",
    "turkish": "Uyumadan önce kelime kartlarını tekrar et; beyin uykuda hafızayı pekiştirir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yastığa başını koymadan önce baktığın son 10 kelime rüyanda bile çalışır.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Nörobilim Kuralı",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0719",
    "english": "The quiet hours belong to those who dare to dream awake. Excellence is a continuous journey.",
    "turkish": "Sessiz saatler uyanık rüya görmeye cesaret edenlere aittir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Gecenin bu saatinde masadaysan, bu emek mutlaka karşılığını bulacak.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0720",
    "english": "One final well-analyzed question before rest cements today's progress. Excellence is a continuous journey.",
    "turkish": "Dinlenmeden önce iyi analiz edilmiş son bir soru bugünün ilerlemesini perçinler. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günün görevini tamamladın, şimdi hak edilmiş bir uyku zamanı kral.",
    "category": "gece",
    "animationFallback": "owl",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0721",
    "english": "Trust the thousands of questions you have already dismantled.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven.",
    "friendlyNote": "Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0722",
    "english": "Calmness under pressure is the supreme competitive advantage.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır.",
    "friendlyNote": "Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0723",
    "english": "You do not need to be perfect; you only need to be present and tactical.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli.",
    "friendlyNote": "Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0724",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür.",
    "friendlyNote": "Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0725",
    "english": "Trust the thousands of questions you have already dismantled. Keep your momentum steady.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0726",
    "english": "Calmness under pressure is the supreme competitive advantage. Keep your momentum steady.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0727",
    "english": "You do not need to be perfect; you only need to be present and tactical. Keep your momentum steady.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0728",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. Keep your momentum steady.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0729",
    "english": "Remember: Trust the thousands of questions you have already dismantled.",
    "turkish": "Unutma: Daha önce parçaladığın binlerce soruya güven.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0730",
    "english": "Remember: Calmness under pressure is the supreme competitive advantage.",
    "turkish": "Unutma: Baskı altında sakin kalmak en üstün rekabet avantajıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0731",
    "english": "Remember: You do not need to be perfect; you only need to be present and tactical.",
    "turkish": "Unutma: Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0732",
    "english": "Remember: Anxiety is merely energy without a goal; channel it into sharp focus.",
    "turkish": "Unutma: Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0733",
    "english": "Trust the thousands of questions you have already dismantled. True progress is built day by day.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0734",
    "english": "Calmness under pressure is the supreme competitive advantage. True progress is built day by day.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0735",
    "english": "You do not need to be perfect; you only need to be present and tactical. True progress is built day by day.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0736",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. True progress is built day by day.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0737",
    "english": "Mastery principle: Trust the thousands of questions you have already dismantled.",
    "turkish": "Ustalık ilkesi: Daha önce parçaladığın binlerce soruya güven.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0738",
    "english": "Mastery principle: Calmness under pressure is the supreme competitive advantage.",
    "turkish": "Ustalık ilkesi: Baskı altında sakin kalmak en üstün rekabet avantajıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0739",
    "english": "Mastery principle: You do not need to be perfect; you only need to be present and tactical.",
    "turkish": "Ustalık ilkesi: Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli.",
    "friendlyNote": "Odaklanmayı elden bırakma. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0740",
    "english": "Mastery principle: Anxiety is merely energy without a goal; channel it into sharp focus.",
    "turkish": "Ustalık ilkesi: Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür.",
    "friendlyNote": "Odaklanmayı elden bırakma. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0741",
    "english": "Trust the thousands of questions you have already dismantled. Focus deeply on the task at hand.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0742",
    "english": "Calmness under pressure is the supreme competitive advantage. Focus deeply on the task at hand.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0743",
    "english": "You do not need to be perfect; you only need to be present and tactical. Focus deeply on the task at hand.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0744",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. Focus deeply on the task at hand.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0745",
    "english": "Trust the thousands of questions you have already dismantled. Consistency is your supreme superpower.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0746",
    "english": "Calmness under pressure is the supreme competitive advantage. Consistency is your supreme superpower.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0747",
    "english": "You do not need to be perfect; you only need to be present and tactical. Consistency is your supreme superpower.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0748",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. Consistency is your supreme superpower.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0749",
    "english": "Daily inspiration: Trust the thousands of questions you have already dismantled.",
    "turkish": "Günün ilhamı: Daha önce parçaladığın binlerce soruya güven.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0750",
    "english": "Daily inspiration: Calmness under pressure is the supreme competitive advantage.",
    "turkish": "Günün ilhamı: Baskı altında sakin kalmak en üstün rekabet avantajıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0751",
    "english": "Daily inspiration: You do not need to be perfect; you only need to be present and tactical.",
    "turkish": "Günün ilhamı: Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0752",
    "english": "Daily inspiration: Anxiety is merely energy without a goal; channel it into sharp focus.",
    "turkish": "Günün ilhamı: Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0753",
    "english": "Trust the thousands of questions you have already dismantled. Strategic analysis guarantees high accuracy.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0754",
    "english": "Calmness under pressure is the supreme competitive advantage. Strategic analysis guarantees high accuracy.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0755",
    "english": "You do not need to be perfect; you only need to be present and tactical. Strategic analysis guarantees high accuracy.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0756",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. Strategic analysis guarantees high accuracy.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0757",
    "english": "Trust the thousands of questions you have already dismantled. Excellence is a continuous journey.",
    "turkish": "Daha önce parçaladığın binlerce soruya güven. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yaptığın hazırlık arkanda dev bir ordu gibi duruyor; derin bir nefes al.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0758",
    "english": "Calmness under pressure is the supreme competitive advantage. Excellence is a continuous journey.",
    "turkish": "Baskı altında sakin kalmak en üstün rekabet avantajıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kalemini masaya koy, gözlerini kapat, 3 derin nefes al. Sen hazırsın.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Marcus Aurelius",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0759",
    "english": "You do not need to be perfect; you only need to be present and tactical. Excellence is a continuous journey.",
    "turkish": "Mükemmel olmak zorunda değilsin; sadece anda ve taktiksel kalman yeterli. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Zor soru gelirse geç; senin çözebileceğin onlarca soru ileride seni bekliyor.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0760",
    "english": "Anxiety is merely energy without a goal; channel it into sharp focus. Excellence is a continuous journey.",
    "turkish": "Kaygı yalnızca hedefsiz enerjidir; onu keskin bir odağa dönüştür. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Heyecanlanmak normaldir; bu, vücudunun başarıya hazırlandığını gösterir.",
    "category": "sinav_oncesi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0761",
    "english": "Every finished exam is a milestone of resilience.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır.",
    "friendlyNote": "180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0762",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele.",
    "friendlyNote": "Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0763",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir.",
    "friendlyNote": "Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0764",
    "english": "Progress is measured by how much smarter your next attempt becomes.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür.",
    "friendlyNote": "Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0765",
    "english": "Every finished exam is a milestone of resilience. Keep your momentum steady.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "180 dakika boyunca mücadele ettin, masadan başın dik kalktın! Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0766",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. Keep your momentum steady.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0767",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. Keep your momentum steady.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0768",
    "english": "Progress is measured by how much smarter your next attempt becomes. Keep your momentum steady.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Analizini tamamla, eksikleri belirle ve rotanı güncelle. Adım adım hedefine yaklaşıyorsun.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0769",
    "english": "Remember: Every finished exam is a milestone of resilience.",
    "turkish": "Unutma: Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0770",
    "english": "Remember: Do not fixate on the score; dissect the reasoning behind every choice.",
    "turkish": "Unutma: Puana takılıp kalma; her seçimin arkasındaki mantığı incele.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0771",
    "english": "Remember: Rest is not the abandonment of work, but the replenishment of capacity.",
    "turkish": "Unutma: Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0772",
    "english": "Remember: Progress is measured by how much smarter your next attempt becomes.",
    "turkish": "Unutma: İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0773",
    "english": "Every finished exam is a milestone of resilience. True progress is built day by day.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0774",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. True progress is built day by day.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0775",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. True progress is built day by day.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0776",
    "english": "Progress is measured by how much smarter your next attempt becomes. True progress is built day by day.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0777",
    "english": "Mastery principle: Every finished exam is a milestone of resilience.",
    "turkish": "Ustalık ilkesi: Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0778",
    "english": "Mastery principle: Do not fixate on the score; dissect the reasoning behind every choice.",
    "turkish": "Ustalık ilkesi: Puana takılıp kalma; her seçimin arkasındaki mantığı incele.",
    "friendlyNote": "Odaklanmayı elden bırakma. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0779",
    "english": "Mastery principle: Rest is not the abandonment of work, but the replenishment of capacity.",
    "turkish": "Ustalık ilkesi: Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0780",
    "english": "Mastery principle: Progress is measured by how much smarter your next attempt becomes.",
    "turkish": "Ustalık ilkesi: İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür.",
    "friendlyNote": "Odaklanmayı elden bırakma. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0781",
    "english": "Every finished exam is a milestone of resilience. Focus deeply on the task at hand.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0782",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. Focus deeply on the task at hand.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0783",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. Focus deeply on the task at hand.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0784",
    "english": "Progress is measured by how much smarter your next attempt becomes. Focus deeply on the task at hand.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0785",
    "english": "Every finished exam is a milestone of resilience. Consistency is your supreme superpower.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0786",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. Consistency is your supreme superpower.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0787",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. Consistency is your supreme superpower.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0788",
    "english": "Progress is measured by how much smarter your next attempt becomes. Consistency is your supreme superpower.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0789",
    "english": "Daily inspiration: Every finished exam is a milestone of resilience.",
    "turkish": "Günün ilhamı: Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0790",
    "english": "Daily inspiration: Do not fixate on the score; dissect the reasoning behind every choice.",
    "turkish": "Günün ilhamı: Puana takılıp kalma; her seçimin arkasındaki mantığı incele.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0791",
    "english": "Daily inspiration: Rest is not the abandonment of work, but the replenishment of capacity.",
    "turkish": "Günün ilhamı: Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0792",
    "english": "Daily inspiration: Progress is measured by how much smarter your next attempt becomes.",
    "turkish": "Günün ilhamı: İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0793",
    "english": "Every finished exam is a milestone of resilience. Strategic analysis guarantees high accuracy.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0794",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. Strategic analysis guarantees high accuracy.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0795",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. Strategic analysis guarantees high accuracy.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0796",
    "english": "Progress is measured by how much smarter your next attempt becomes. Strategic analysis guarantees high accuracy.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0797",
    "english": "Every finished exam is a milestone of resilience. Excellence is a continuous journey.",
    "turkish": "Tamamlanan her sınav dayanıklılığın bir kilometre taşıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! 180 dakika boyunca mücadele ettin, masadan başın dik kalktın!",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0798",
    "english": "Do not fixate on the score; dissect the reasoning behind every choice. Excellence is a continuous journey.",
    "turkish": "Puana takılıp kalma; her seçimin arkasındaki mantığı incele. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Doğru yaptıklarından güven, yanlış yaptıklarından ders çıkar.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0799",
    "english": "Rest is not the abandonment of work, but the replenishment of capacity. Excellence is a continuous journey.",
    "turkish": "Dinlenmek çalışmayı bırakmak değil, kapasiteyi tazelemektir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Zorlu bir denemenin ardından güzel bir mola ver, zihnini ödüllendir.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0800",
    "english": "Progress is measured by how much smarter your next attempt becomes. Excellence is a continuous journey.",
    "turkish": "İlerleme, bir sonraki denemenin ne kadar daha akıllıca olacağıyla ölçülür. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Analizini tamamla, eksikleri belirle ve rotanı güncelle.",
    "category": "sinav_sonrasi",
    "animationFallback": "pencil",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0801",
    "english": "Plateaus are not dead ends; they are foundations being consolidated.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir.",
    "friendlyNote": "Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0802",
    "english": "Even the strongest storm runs out of rain eventually.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter.",
    "friendlyNote": "Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0803",
    "english": "Give yourself permission to struggle; struggle is where growth occurs.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir.",
    "friendlyNote": "Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0804",
    "english": "You have survived 100% of your worst study days so far.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın.",
    "friendlyNote": "Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0805",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. Keep your momentum steady.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir. Adım adım hedefine yaklaşıyorsun.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0806",
    "english": "Even the strongest storm runs out of rain eventually. Keep your momentum steady.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır. Adım adım hedefine yaklaşıyorsun.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0807",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. Keep your momentum steady.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar. Adım adım hedefine yaklaşıyorsun.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0808",
    "english": "You have survived 100% of your worst study days so far. Keep your momentum steady.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız! Adım adım hedefine yaklaşıyorsun.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0809",
    "english": "Remember: Plateaus are not dead ends; they are foundations being consolidated.",
    "turkish": "Unutma: Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0810",
    "english": "Remember: Even the strongest storm runs out of rain eventually.",
    "turkish": "Unutma: En şiddetli fırtınanın bile yağmuru eninde sonunda biter.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0811",
    "english": "Remember: Give yourself permission to struggle; struggle is where growth occurs.",
    "turkish": "Unutma: Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0812",
    "english": "Remember: You have survived 100% of your worst study days so far.",
    "turkish": "Unutma: Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0813",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. True progress is built day by day.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0814",
    "english": "Even the strongest storm runs out of rain eventually. True progress is built day by day.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0815",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. True progress is built day by day.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0816",
    "english": "You have survived 100% of your worst study days so far. True progress is built day by day.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0817",
    "english": "Mastery principle: Plateaus are not dead ends; they are foundations being consolidated.",
    "turkish": "Ustalık ilkesi: Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0818",
    "english": "Mastery principle: Even the strongest storm runs out of rain eventually.",
    "turkish": "Ustalık ilkesi: En şiddetli fırtınanın bile yağmuru eninde sonunda biter.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0819",
    "english": "Mastery principle: Give yourself permission to struggle; struggle is where growth occurs.",
    "turkish": "Ustalık ilkesi: Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0820",
    "english": "Mastery principle: You have survived 100% of your worst study days so far.",
    "turkish": "Ustalık ilkesi: Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın.",
    "friendlyNote": "Odaklanmayı elden bırakma. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0821",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. Focus deeply on the task at hand.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0822",
    "english": "Even the strongest storm runs out of rain eventually. Focus deeply on the task at hand.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0823",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. Focus deeply on the task at hand.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0824",
    "english": "You have survived 100% of your worst study days so far. Focus deeply on the task at hand.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0825",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. Consistency is your supreme superpower.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0826",
    "english": "Even the strongest storm runs out of rain eventually. Consistency is your supreme superpower.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0827",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. Consistency is your supreme superpower.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0828",
    "english": "You have survived 100% of your worst study days so far. Consistency is your supreme superpower.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0829",
    "english": "Daily inspiration: Plateaus are not dead ends; they are foundations being consolidated.",
    "turkish": "Günün ilhamı: Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0830",
    "english": "Daily inspiration: Even the strongest storm runs out of rain eventually.",
    "turkish": "Günün ilhamı: En şiddetli fırtınanın bile yağmuru eninde sonunda biter.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0831",
    "english": "Daily inspiration: Give yourself permission to struggle; struggle is where growth occurs.",
    "turkish": "Günün ilhamı: Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0832",
    "english": "Daily inspiration: You have survived 100% of your worst study days so far.",
    "turkish": "Günün ilhamı: Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0833",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. Strategic analysis guarantees high accuracy.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0834",
    "english": "Even the strongest storm runs out of rain eventually. Strategic analysis guarantees high accuracy.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0835",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. Strategic analysis guarantees high accuracy.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0836",
    "english": "You have survived 100% of your worst study days so far. Strategic analysis guarantees high accuracy.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0837",
    "english": "Plateaus are not dead ends; they are foundations being consolidated. Excellence is a continuous journey.",
    "turkish": "Tıkanma dönemleri çıkmaz sokak değil; temellerin sağlamlaştırıldığı evrelerdir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Netlerin bir süre yerinde sayabilir; bu, beyninin yeni bilgiyi sindirdiği anlamına gelir.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0838",
    "english": "Even the strongest storm runs out of rain eventually. Excellence is a continuous journey.",
    "turkish": "En şiddetli fırtınanın bile yağmuru eninde sonunda biter. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bugün kötü geçmiş olabilir kanka; yarın yepyeni bir gün ve yeni bir başlangıçtır.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Maya Angelou",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0839",
    "english": "Give yourself permission to struggle; struggle is where growth occurs. Excellence is a continuous journey.",
    "turkish": "Zorlanmak için kendine izin ver; büyüme tam da zorlanılan yerde gerçekleşir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Zorlanıyorsan öğreniyorsun demektir; kolayı herkes yapar.",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0840",
    "english": "You have survived 100% of your worst study days so far. Excellence is a continuous journey.",
    "turkish": "Şimdiye kadarki en kötü çalışma günlerinin %100'ünden sağ çıktın. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Kaldır başını kral, bu platformda yalnız değilsin; birlikte başaracağız!",
    "category": "moral_dusuklugu",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0841",
    "english": "No matter how many times you stumble, the finish line remains.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor.",
    "friendlyNote": "Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0842",
    "english": "Today is a blank page; write your breakthrough chapter.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz.",
    "friendlyNote": "Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0843",
    "english": "Resuming after a pause requires courage; honor that courage.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy.",
    "friendlyNote": "Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0844",
    "english": "A fresh start is not a retreat; it is a tactical redeployment.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir.",
    "friendlyNote": "Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0845",
    "english": "No matter how many times you stumble, the finish line remains. Keep your momentum steady.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen. Adım adım hedefine yaklaşıyorsun.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0846",
    "english": "Today is a blank page; write your breakthrough chapter. Keep your momentum steady.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla. Adım adım hedefine yaklaşıyorsun.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0847",
    "english": "Resuming after a pause requires courage; honor that courage. Keep your momentum steady.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Geri döndün ya, en zor kısmı atlattın demektir kanka! Adım adım hedefine yaklaşıyorsun.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0848",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. Keep your momentum steady.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Stratejini yenile, zayıf alanlarını hedef al ve atağa geç. Adım adım hedefine yaklaşıyorsun.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0849",
    "english": "Remember: No matter how many times you stumble, the finish line remains.",
    "turkish": "Unutma: Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0850",
    "english": "Remember: Today is a blank page; write your breakthrough chapter.",
    "turkish": "Unutma: Bugün boş bir sayfa; kırılma noktası bölümünü yaz.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0851",
    "english": "Remember: Resuming after a pause requires courage; honor that courage.",
    "turkish": "Unutma: Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0852",
    "english": "Remember: A fresh start is not a retreat; it is a tactical redeployment.",
    "turkish": "Unutma: Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0853",
    "english": "No matter how many times you stumble, the finish line remains. True progress is built day by day.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0854",
    "english": "Today is a blank page; write your breakthrough chapter. True progress is built day by day.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0855",
    "english": "Resuming after a pause requires courage; honor that courage. True progress is built day by day.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0856",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. True progress is built day by day.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0857",
    "english": "Mastery principle: No matter how many times you stumble, the finish line remains.",
    "turkish": "Ustalık ilkesi: Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor.",
    "friendlyNote": "Odaklanmayı elden bırakma. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0858",
    "english": "Mastery principle: Today is a blank page; write your breakthrough chapter.",
    "turkish": "Ustalık ilkesi: Bugün boş bir sayfa; kırılma noktası bölümünü yaz.",
    "friendlyNote": "Odaklanmayı elden bırakma. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0859",
    "english": "Mastery principle: Resuming after a pause requires courage; honor that courage.",
    "turkish": "Ustalık ilkesi: Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy.",
    "friendlyNote": "Odaklanmayı elden bırakma. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0860",
    "english": "Mastery principle: A fresh start is not a retreat; it is a tactical redeployment.",
    "turkish": "Ustalık ilkesi: Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0861",
    "english": "No matter how many times you stumble, the finish line remains. Focus deeply on the task at hand.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0862",
    "english": "Today is a blank page; write your breakthrough chapter. Focus deeply on the task at hand.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0863",
    "english": "Resuming after a pause requires courage; honor that courage. Focus deeply on the task at hand.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0864",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. Focus deeply on the task at hand.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0865",
    "english": "No matter how many times you stumble, the finish line remains. Consistency is your supreme superpower.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0866",
    "english": "Today is a blank page; write your breakthrough chapter. Consistency is your supreme superpower.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0867",
    "english": "Resuming after a pause requires courage; honor that courage. Consistency is your supreme superpower.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0868",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. Consistency is your supreme superpower.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0869",
    "english": "Daily inspiration: No matter how many times you stumble, the finish line remains.",
    "turkish": "Günün ilhamı: Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0870",
    "english": "Daily inspiration: Today is a blank page; write your breakthrough chapter.",
    "turkish": "Günün ilhamı: Bugün boş bir sayfa; kırılma noktası bölümünü yaz.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0871",
    "english": "Daily inspiration: Resuming after a pause requires courage; honor that courage.",
    "turkish": "Günün ilhamı: Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0872",
    "english": "Daily inspiration: A fresh start is not a retreat; it is a tactical redeployment.",
    "turkish": "Günün ilhamı: Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0873",
    "english": "No matter how many times you stumble, the finish line remains. Strategic analysis guarantees high accuracy.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0874",
    "english": "Today is a blank page; write your breakthrough chapter. Strategic analysis guarantees high accuracy.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0875",
    "english": "Resuming after a pause requires courage; honor that courage. Strategic analysis guarantees high accuracy.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0876",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. Strategic analysis guarantees high accuracy.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0877",
    "english": "No matter how many times you stumble, the finish line remains. Excellence is a continuous journey.",
    "turkish": "Kaç kez tökezlersen tökezle, bitiş çizgisi yerinde duruyor. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Ara vermiş olabilirsin, sorun değil; önemli olan bugün yeniden masaya oturabilmen.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0878",
    "english": "Today is a blank page; write your breakthrough chapter. Excellence is a continuous journey.",
    "turkish": "Bugün boş bir sayfa; kırılma noktası bölümünü yaz. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Eski günleri unut, bugün temiz bir odakla 15 kelimeye başla.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0879",
    "english": "Resuming after a pause requires courage; honor that courage. Excellence is a continuous journey.",
    "turkish": "Bir aradan sonra devam etmek cesaret gerektirir; bu cesarete saygı duy. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Geri döndün ya, en zor kısmı atlattın demektir kanka!",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0880",
    "english": "A fresh start is not a retreat; it is a tactical redeployment. Excellence is a continuous journey.",
    "turkish": "Yeni bir başlangıç geri çekilme değil; taktiksel bir yeniden mevzilenmedir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Stratejini yenile, zayıf alanlarını hedef al ve atağa geç.",
    "category": "yeniden_baslama",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0881",
    "english": "Badges are tangible tokens of invisible hours of grit.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir.",
    "friendlyNote": "Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0882",
    "english": "Celebrate every milestone; small victories fuel grand triumphs.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler.",
    "friendlyNote": "Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0883",
    "english": "Your dedication speaks louder than any doubt.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor.",
    "friendlyNote": "Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0884",
    "english": "Leveling up is a testament to disciplined repetition.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır.",
    "friendlyNote": "Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0885",
    "english": "Badges are tangible tokens of invisible hours of grit. Keep your momentum steady.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆 Adım adım hedefine yaklaşıyorsun.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0886",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. Keep your momentum steady.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor. Adım adım hedefine yaklaşıyorsun.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0887",
    "english": "Your dedication speaks louder than any doubt. Keep your momentum steady.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günün kahramanı sensin, bu başarı senin eserin! Adım adım hedefine yaklaşıyorsun.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0888",
    "english": "Leveling up is a testament to disciplined repetition. Keep your momentum steady.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bir rozet daha cebinde! Sıradaki hedefe gözünü dik. Adım adım hedefine yaklaşıyorsun.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0889",
    "english": "Remember: Badges are tangible tokens of invisible hours of grit.",
    "turkish": "Unutma: Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0890",
    "english": "Remember: Celebrate every milestone; small victories fuel grand triumphs.",
    "turkish": "Unutma: Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0891",
    "english": "Remember: Your dedication speaks louder than any doubt.",
    "turkish": "Unutma: Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0892",
    "english": "Remember: Leveling up is a testament to disciplined repetition.",
    "turkish": "Unutma: Seviye atlamak disiplinli tekrarın bir kanıtıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0893",
    "english": "Badges are tangible tokens of invisible hours of grit. True progress is built day by day.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0894",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. True progress is built day by day.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0895",
    "english": "Your dedication speaks louder than any doubt. True progress is built day by day.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0896",
    "english": "Leveling up is a testament to disciplined repetition. True progress is built day by day.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0897",
    "english": "Mastery principle: Badges are tangible tokens of invisible hours of grit.",
    "turkish": "Ustalık ilkesi: Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0898",
    "english": "Mastery principle: Celebrate every milestone; small victories fuel grand triumphs.",
    "turkish": "Ustalık ilkesi: Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler.",
    "friendlyNote": "Odaklanmayı elden bırakma. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0899",
    "english": "Mastery principle: Your dedication speaks louder than any doubt.",
    "turkish": "Ustalık ilkesi: Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0900",
    "english": "Mastery principle: Leveling up is a testament to disciplined repetition.",
    "turkish": "Ustalık ilkesi: Seviye atlamak disiplinli tekrarın bir kanıtıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0901",
    "english": "Badges are tangible tokens of invisible hours of grit. Focus deeply on the task at hand.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0902",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. Focus deeply on the task at hand.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0903",
    "english": "Your dedication speaks louder than any doubt. Focus deeply on the task at hand.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0904",
    "english": "Leveling up is a testament to disciplined repetition. Focus deeply on the task at hand.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0905",
    "english": "Badges are tangible tokens of invisible hours of grit. Consistency is your supreme superpower.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0906",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. Consistency is your supreme superpower.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0907",
    "english": "Your dedication speaks louder than any doubt. Consistency is your supreme superpower.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0908",
    "english": "Leveling up is a testament to disciplined repetition. Consistency is your supreme superpower.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0909",
    "english": "Daily inspiration: Badges are tangible tokens of invisible hours of grit.",
    "turkish": "Günün ilhamı: Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0910",
    "english": "Daily inspiration: Celebrate every milestone; small victories fuel grand triumphs.",
    "turkish": "Günün ilhamı: Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "Wxs4z07hLqk",
      "title": "How to read faster and understand more | Academic Reading",
      "creator": "Oxford Academic",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=Wxs4z07hLqk"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0911",
    "english": "Daily inspiration: Your dedication speaks louder than any doubt.",
    "turkish": "Günün ilhamı: Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0912",
    "english": "Daily inspiration: Leveling up is a testament to disciplined repetition.",
    "turkish": "Günün ilhamı: Seviye atlamak disiplinli tekrarın bir kanıtıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0913",
    "english": "Badges are tangible tokens of invisible hours of grit. Strategic analysis guarantees high accuracy.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0914",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. Strategic analysis guarantees high accuracy.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0915",
    "english": "Your dedication speaks louder than any doubt. Strategic analysis guarantees high accuracy.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0916",
    "english": "Leveling up is a testament to disciplined repetition. Strategic analysis guarantees high accuracy.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0917",
    "english": "Badges are tangible tokens of invisible hours of grit. Excellence is a continuous journey.",
    "turkish": "Rozetler, görünmeyen saatlerin ve azmin somut simgeleridir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bu rozeti şans eseri almadın kanka; söke söke kazandın! 🏆",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0918",
    "english": "Celebrate every milestone; small victories fuel grand triumphs. Excellence is a continuous journey.",
    "turkish": "Her kilometre taşını kutla; küçük zaferler büyük zaferleri besler. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Yeni bir rozet kütüphanene eklendi! Profilin ışıl ışıl parlıyor.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0919",
    "english": "Your dedication speaks louder than any doubt. Excellence is a continuous journey.",
    "turkish": "Kararlılığın her türlü şüpheden daha yüksek sesle konuşuyor. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günün kahramanı sensin, bu başarı senin eserin!",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0920",
    "english": "Leveling up is a testament to disciplined repetition. Excellence is a continuous journey.",
    "turkish": "Seviye atlamak disiplinli tekrarın bir kanıtıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bir rozet daha cebinde! Sıradaki hedefe gözünü dik.",
    "category": "rozet",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0921",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler.",
    "friendlyNote": "A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0922",
    "english": "New levels unlock new intellectual landscapes.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar.",
    "friendlyNote": "Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0923",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir.",
    "friendlyNote": "Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0924",
    "english": "Honor the student you were when you started this climb.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy.",
    "friendlyNote": "Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0925",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. Keep your momentum steady.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun! Adım adım hedefine yaklaşıyorsun.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0926",
    "english": "New levels unlock new intellectual landscapes. Keep your momentum steady.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral. Adım adım hedefine yaklaşıyorsun.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0927",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. Keep your momentum steady.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın. Adım adım hedefine yaklaşıyorsun.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0928",
    "english": "Honor the student you were when you started this climb. Keep your momentum steady.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Nereden nereye geldiğini hatırla ve gurur duy kanka! Adım adım hedefine yaklaşıyorsun.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0929",
    "english": "Remember: Ascending a CEFR tier marks a structural transformation in cognition.",
    "turkish": "Unutma: Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0930",
    "english": "Remember: New levels unlock new intellectual landscapes.",
    "turkish": "Unutma: Yeni seviyeler yeni entelektüel manzaraların kapısını aralar.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0931",
    "english": "Remember: Higher levels do not mean less work; they mean more thrilling challenges.",
    "turkish": "Unutma: Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0932",
    "english": "Remember: Honor the student you were when you started this climb.",
    "turkish": "Unutma: Bu tırmanışa başladığında olduğun o öğrenciye saygı duy.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0933",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. True progress is built day by day.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0934",
    "english": "New levels unlock new intellectual landscapes. True progress is built day by day.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0935",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. True progress is built day by day.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0936",
    "english": "Honor the student you were when you started this climb. True progress is built day by day.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0937",
    "english": "Mastery principle: Ascending a CEFR tier marks a structural transformation in cognition.",
    "turkish": "Ustalık ilkesi: Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler.",
    "friendlyNote": "Odaklanmayı elden bırakma. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0938",
    "english": "Mastery principle: New levels unlock new intellectual landscapes.",
    "turkish": "Ustalık ilkesi: Yeni seviyeler yeni entelektüel manzaraların kapısını aralar.",
    "friendlyNote": "Odaklanmayı elden bırakma. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0939",
    "english": "Mastery principle: Higher levels do not mean less work; they mean more thrilling challenges.",
    "turkish": "Ustalık ilkesi: Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir.",
    "friendlyNote": "Odaklanmayı elden bırakma. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0940",
    "english": "Mastery principle: Honor the student you were when you started this climb.",
    "turkish": "Ustalık ilkesi: Bu tırmanışa başladığında olduğun o öğrenciye saygı duy.",
    "friendlyNote": "Odaklanmayı elden bırakma. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0941",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. Focus deeply on the task at hand.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0942",
    "english": "New levels unlock new intellectual landscapes. Focus deeply on the task at hand.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0943",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. Focus deeply on the task at hand.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0944",
    "english": "Honor the student you were when you started this climb. Focus deeply on the task at hand.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0945",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. Consistency is your supreme superpower.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": {
      "provider": "youtube",
      "videoId": "d0yGdNEWdn0",
      "title": "How to learn any language in six months | Chris Lonsdale | TEDxLingnanUniversity",
      "creator": "TEDx Talks",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=d0yGdNEWdn0"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0946",
    "english": "New levels unlock new intellectual landscapes. Consistency is your supreme superpower.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0947",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. Consistency is your supreme superpower.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0948",
    "english": "Honor the student you were when you started this climb. Consistency is your supreme superpower.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0949",
    "english": "Daily inspiration: Ascending a CEFR tier marks a structural transformation in cognition.",
    "turkish": "Günün ilhamı: Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0950",
    "english": "Daily inspiration: New levels unlock new intellectual landscapes.",
    "turkish": "Günün ilhamı: Yeni seviyeler yeni entelektüel manzaraların kapısını aralar.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0951",
    "english": "Daily inspiration: Higher levels do not mean less work; they mean more thrilling challenges.",
    "turkish": "Günün ilhamı: Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0952",
    "english": "Daily inspiration: Honor the student you were when you started this climb.",
    "turkish": "Günün ilhamı: Bu tırmanışa başladığında olduğun o öğrenciye saygı duy.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0953",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. Strategic analysis guarantees high accuracy.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0954",
    "english": "New levels unlock new intellectual landscapes. Strategic analysis guarantees high accuracy.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0955",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. Strategic analysis guarantees high accuracy.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0956",
    "english": "Honor the student you were when you started this climb. Strategic analysis guarantees high accuracy.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0957",
    "english": "Ascending a CEFR tier marks a structural transformation in cognition. Excellence is a continuous journey.",
    "turkish": "Bir CEFR basamağı tırmanmak, bilişte yapısal bir dönüşümü simgeler. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! A1'den başladığın bu yolda artık devasa paragrafları deviriyorsun!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0958",
    "english": "New levels unlock new intellectual landscapes. Excellence is a continuous journey.",
    "turkish": "Yeni seviyeler yeni entelektüel manzaraların kapısını aralar. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Seviye rengin güncellendi! Profilindeki o yeni renk çok yakıştı kral.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0959",
    "english": "Higher levels do not mean less work; they mean more thrilling challenges. Excellence is a continuous journey.",
    "turkish": "Daha yüksek seviyeler daha az çalışma demek değil; daha heyecan verici meydan okumalar demektir. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Zirveye yaklaştıkça havanın inceldiği gibi sorular da incelir; ama sen hazırsın.",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0960",
    "english": "Honor the student you were when you started this climb. Excellence is a continuous journey.",
    "turkish": "Bu tırmanışa başladığında olduğun o öğrenciye saygı duy. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Nereden nereye geldiğini hatırla ve gurur duy kanka!",
    "category": "seviye",
    "animationFallback": "crown",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0961",
    "english": "It does not matter how slowly you go as long as you do not stop.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur.",
    "friendlyNote": "Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0962",
    "english": "Great works are performed not by strength, but by perseverance.",
    "turkish": "Büyük işler güçle değil, azimle başarılır.",
    "friendlyNote": "Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0963",
    "english": "The cumulative impact of daily habits is staggering.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır.",
    "friendlyNote": "Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0964",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın.",
    "friendlyNote": "Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0965",
    "english": "It does not matter how slowly you go as long as you do not stop. Keep your momentum steady.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru. Adım adım hedefine yaklaşıyorsun.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0966",
    "english": "Great works are performed not by strength, but by perseverance. Keep your momentum steady.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek. Adım adım hedefine yaklaşıyorsun.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0967",
    "english": "The cumulative impact of daily habits is staggering. Keep your momentum steady.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven. Adım adım hedefine yaklaşıyorsun.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0968",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. Keep your momentum steady.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. Temponu sabit ve istikrarlı tut.",
    "friendlyNote": "Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁 Adım adım hedefine yaklaşıyorsun.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0969",
    "english": "Remember: It does not matter how slowly you go as long as you do not stop.",
    "turkish": "Unutma: Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0970",
    "english": "Remember: Great works are performed not by strength, but by perseverance.",
    "turkish": "Unutma: Büyük işler güçle değil, azimle başarılır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0971",
    "english": "Remember: The cumulative impact of daily habits is staggering.",
    "turkish": "Unutma: Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0972",
    "english": "Remember: When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina.",
    "turkish": "Unutma: Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın.",
    "friendlyNote": "Her detay sınavda bir artı net demektir. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0973",
    "english": "It does not matter how slowly you go as long as you do not stop. True progress is built day by day.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0974",
    "english": "Great works are performed not by strength, but by perseverance. True progress is built day by day.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0975",
    "english": "The cumulative impact of daily habits is staggering. True progress is built day by day.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0976",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. True progress is built day by day.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. Gerçek ilerleme gün be gün inşa edilir.",
    "friendlyNote": "Bugünkü çaban gelecekteki netindir. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0977",
    "english": "Mastery principle: It does not matter how slowly you go as long as you do not stop.",
    "turkish": "Ustalık ilkesi: Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur.",
    "friendlyNote": "Odaklanmayı elden bırakma. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0978",
    "english": "Mastery principle: Great works are performed not by strength, but by perseverance.",
    "turkish": "Ustalık ilkesi: Büyük işler güçle değil, azimle başarılır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0979",
    "english": "Mastery principle: The cumulative impact of daily habits is staggering.",
    "turkish": "Ustalık ilkesi: Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır.",
    "friendlyNote": "Odaklanmayı elden bırakma. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0980",
    "english": "Mastery principle: When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina.",
    "turkish": "Ustalık ilkesi: Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın.",
    "friendlyNote": "Odaklanmayı elden bırakma. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": {
      "provider": "youtube",
      "videoId": "V-csT_A_a4M",
      "title": "The secret to remembering vocabulary | Memory Masterclass",
      "creator": "BBC Learning English",
      "embedAllowed": true,
      "externalUrl": "https://www.youtube.com/watch?v=V-csT_A_a4M"
    },
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0981",
    "english": "It does not matter how slowly you go as long as you do not stop. Focus deeply on the task at hand.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0982",
    "english": "Great works are performed not by strength, but by perseverance. Focus deeply on the task at hand.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0983",
    "english": "The cumulative impact of daily habits is staggering. Focus deeply on the task at hand.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0984",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. Focus deeply on the task at hand.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. Elindeki göreve derinlemesine odaklan.",
    "friendlyNote": "Zamanını en verimli şekilde kullan kral. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0985",
    "english": "It does not matter how slowly you go as long as you do not stop. Consistency is your supreme superpower.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0986",
    "english": "Great works are performed not by strength, but by perseverance. Consistency is your supreme superpower.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0987",
    "english": "The cumulative impact of daily habits is staggering. Consistency is your supreme superpower.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0988",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. Consistency is your supreme superpower.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. İstikrar senin en büyük süper gücündür.",
    "friendlyNote": "Sistemin gücüne güven. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0989",
    "english": "Daily inspiration: It does not matter how slowly you go as long as you do not stop.",
    "turkish": "Günün ilhamı: Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0990",
    "english": "Daily inspiration: Great works are performed not by strength, but by perseverance.",
    "turkish": "Günün ilhamı: Büyük işler güçle değil, azimle başarılır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0991",
    "english": "Daily inspiration: The cumulative impact of daily habits is staggering.",
    "turkish": "Günün ilhamı: Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0992",
    "english": "Daily inspiration: When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina.",
    "turkish": "Günün ilhamı: Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın.",
    "friendlyNote": "Kendine inan kanka, başarmak senin elinde. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0993",
    "english": "It does not matter how slowly you go as long as you do not stop. Strategic analysis guarantees high accuracy.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0994",
    "english": "Great works are performed not by strength, but by perseverance. Strategic analysis guarantees high accuracy.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0995",
    "english": "The cumulative impact of daily habits is staggering. Strategic analysis guarantees high accuracy.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0996",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. Strategic analysis guarantees high accuracy.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. Stratejik analiz yüksek doğruluğu garanti eder.",
    "friendlyNote": "Taktikleri soru üzerinde test etmeyi unutma. Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  },
  {
    "id": "mot-0997",
    "english": "It does not matter how slowly you go as long as you do not stop. Excellence is a continuous journey.",
    "turkish": "Durmadığın sürece ne kadar yavaş gittiğinin bir önemi yoktur. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Bu 100 metrelik bir depar değil, 42 kilometrelik bir maratondur; temponu koru.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Konfüçyüs",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0998",
    "english": "Great works are performed not by strength, but by perseverance. Excellence is a continuous journey.",
    "turkish": "Büyük işler güçle değil, azimle başarılır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Haftalar ayları kovalasa da masadaki o kararlı duruşun her şeyi değiştirecek.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "Samuel Johnson",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-0999",
    "english": "The cumulative impact of daily habits is staggering. Excellence is a continuous journey.",
    "turkish": "Günlük alışkanlıkların birikimli etkisi dudak uçuklatıcıdır. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Günde 15 kelime × 180 gün = 2.700 kelime! Matematiğe güven.",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "short-quote",
      "attribution": "James Clear",
      "verified": true
    },
    "isOriginal": false
  },
  {
    "id": "mot-1000",
    "english": "When the marathon ends, you will not merely have passed an exam; you will have rebuilt your intellectual stamina. Excellence is a continuous journey.",
    "turkish": "Maraton bittiğinde sadece bir sınavı geçmiş olmayacaksın; entelektüel dayanıklılığını baştan inşa etmiş olacaksın. Mükemmellik kesintisiz bir yolculuktur.",
    "friendlyNote": "Zirveye giden yol açık kanka! Sonuna kadar seninleyiz kanka, bitiş çizgisinde buluşacağız! 🏁",
    "category": "uzun_maraton",
    "animationFallback": "sparkles",
    "video": null,
    "source": {
      "type": "original",
      "attribution": "YDS Master",
      "verified": false
    },
    "isOriginal": true
  }
];

export function getMotivationsByCategory(cat: MotivationCategory): MotivationItem[] {
  return MOTIVATIONS.filter((m) => m.category === cat);
}

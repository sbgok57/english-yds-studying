export type VisualMode = "photo" | "animation" | "3d" | "card";

export type MotionDiagramType =
  | "mitigate"
  | "decay"
  | "flow"
  | "network"
  | "examine"
  | "balance"
  | "scale"
  | "barrier"
  | "causal"
  | "cycle"
  | "compare"
  | "distribution"
  | "containment"
  | "growth";

export interface PhotoAssetMeta {
  url: string;
  altTr: string;
  altEn: string;
  license: string;
  attribution: string;
  width: number;
  height: number;
}

export interface AnimationAssetMeta {
  localSvgUrl?: string;
  motionType: MotionDiagramType;
  captionTr: string;
  captionEn: string;
  license: string;
  attribution: string;
  reducedMotionFallbackTextTr: string;
}

export interface WordVisualManifest {
  /** Stable, word-specific identity used for SVG IDs, React keys, and 3D seeds. */
  visualKey?: string;
  wordSlug: string;
  english: string;
  turkish: string;
  partOfSpeech: string;
  level: string;
  semanticCategory: "concrete" | "process" | "phrasal-verb" | "abstract-academic" | "spatial";
  availableModes: VisualMode[];
  defaultMode: VisualMode;
  hasVerifiedPhoto: boolean;
  photo?: PhotoAssetMeta;
  animation: AnimationAssetMeta;
  threeD: {
    enabled: boolean;
    conceptLabelTr: string;
  };
}

export function normalizeWordSlug(word: string): string {
  return word
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Doğrulanmış Görsel Varlık Kataloğu (Photo / SVG Animation / 3D)
 * KURAL: Yalnızca anlamı birebir karşılayan ve lisansı/kaynağı doğrulanmış somut/bağlamsal
 * kelimeler "photo" moduna sahiptir. Soyut kelimelerde sahte stok fotoğraf veya tekil emoji
 * gösterilmez; semantik animasyon şeması, 3D sahne ve tipografik anlam kartı sunulur.
 */
export const VISUAL_ASSET_REGISTRY: Record<string, WordVisualManifest> = {
  pioneer: {
    wordSlug: "pioneer",
    english: "pioneer",
    turkish: "öncü, yol açan kimse, ilk keşfeden",
    partOfSpeech: "isim",
    level: "B2",
    semanticCategory: "concrete",
    availableModes: ["photo", "animation", "3d", "card"],
    defaultMode: "photo",
    hasVerifiedPhoto: true,
    photo: {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      altTr: "Bilimsel keşif ve uzay araştırmalarında öncülüğü simgeleyen yörünge fotoğrafı",
      altEn: "Orbital view symbolizing scientific exploration and pioneering research",
      license: "Unsplash License (Free to use)",
      attribution: "NASA / Unsplash",
      width: 800,
      height: 520,
    },
    animation: {
      motionType: "flow",
      captionTr: "Yeni bir araştırma alanına öncülük eden ilerleme rotası",
      captionEn: "Pathbreaking trajectory into uncharted research territory",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: Bilinmeyen alana doğru öncü rota adımları.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Pioneer — Öncü",
    },
  },
  deteriorate: {
    wordSlug: "deteriorate",
    english: "deteriorate",
    turkish: "kötüleşmek, bozulmak, aşınmak",
    partOfSpeech: "fiil",
    level: "B2",
    semanticCategory: "process",
    availableModes: ["photo", "animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: true,
    photo: {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      altTr: "Bakımsızlık nedeniyle zamanla aşınmış ve bozulmuş tarihi taş yapı",
      altEn: "Weathered and deteriorated ancient stone structure over time",
      license: "Unsplash License",
      attribution: "Unsplash Architectural Archive",
      width: 800,
      height: 520,
    },
    animation: {
      localSvgUrl: "/media/vocabulary/deteriorate-decay.svg",
      motionType: "decay",
      captionTr: "Zaman içinde kalitenin ve dayanıklılığın kademeli olarak azalması (deteriorate)",
      captionEn: "Progressive decline in structural quality over time",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Grafik: Kalite seviyesinin 4 aşamada kademeli düşüşü.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Deteriorate — Kötüleşmek",
    },
  },
  scrutinize: {
    wordSlug: "scrutinize",
    english: "scrutinize",
    turkish: "dikkatle incelemek, didik didik araştırmak",
    partOfSpeech: "fiil",
    level: "C1",
    semanticCategory: "process",
    availableModes: ["photo", "animation", "3d", "card"],
    defaultMode: "photo",
    hasVerifiedPhoto: true,
    photo: {
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      altTr: "Laboratuvarda mikroskop altında numuneyi dikkatle inceleyen araştırmacı",
      altEn: "Researcher closely scrutinizing a sample under a laboratory microscope",
      license: "Unsplash License",
      attribution: "Unsplash Science Collection",
      width: 800,
      height: 520,
    },
    animation: {
      motionType: "examine",
      captionTr: "Veri ve kanıtların mercek altında adım adım taranması (scrutinize)",
      captionEn: "Close inspection and scanning of empirical data points",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: Odaklanmış mercek ile detaylı veri incelemesi.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Scrutinize — Dikkatle İncelemek",
    },
  },
  mitigate: {
    wordSlug: "mitigate",
    english: "mitigate",
    turkish: "hafifletmek, azaltmak, yatıştırmak",
    partOfSpeech: "fiil",
    level: "B2",
    semanticCategory: "process",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      localSvgUrl: "/media/vocabulary/mitigate-diagram.svg",
      motionType: "mitigate",
      captionTr: "Yüksek risk eğrisinin koruyucu önlemlerle aşağı çekilip hafifletilmesi (mitigate)",
      captionEn: "Reducing the severity of a high-risk trajectory through protective intervention",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Grafik: Kırmızı risk eğrisinin yeşil güvenli seviyeye indirilmesi.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Mitigate — Hafifletmek",
    },
  },
  "carry-out": {
    wordSlug: "carry-out",
    english: "carry out",
    turkish: "yürütmek, uygulamak, gerçekleştirmek",
    partOfSpeech: "phrasal verb",
    level: "B2",
    semanticCategory: "phrasal-verb",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      localSvgUrl: "/media/vocabulary/carry-out-motion.svg",
      motionType: "flow",
      captionTr: "Plan -> Uygulama (Carry Out) -> Tamamlanmış Sonuç akış diyagramı",
      captionEn: "Step-by-step execution flow from hypothesis to completed experiment",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: 1. Plan -> 2. Carry Out (Uygulama) -> 3. Sonuç.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Carry Out — Yürütmek",
    },
  },
  "cope-with": {
    wordSlug: "cope-with",
    english: "cope with",
    turkish: "üstesinden gelmek, başa çıkmak",
    partOfSpeech: "phrasal verb",
    level: "B2",
    semanticCategory: "phrasal-verb",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "balance",
      captionTr: "Zorlu baskı ve engellere karşı denge kurarak başa çıkma mekanizması (cope with)",
      captionEn: "Maintaining equilibrium and resilience against external pressure",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: Dış baskıya karşı denge ve dayanıklılık noktası.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Cope With — Başa Çıkmak",
    },
  },
  ubiquitous: {
    wordSlug: "ubiquitous",
    english: "ubiquitous",
    turkish: "her yerde bulunan, yaygın, eşzamanlı var olan",
    partOfSpeech: "sıfat",
    level: "C1",
    semanticCategory: "spatial",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      localSvgUrl: "/media/vocabulary/ubiquitous-network.svg",
      motionType: "network",
      captionTr: "Merkezden tüm düğümlere yayılmış, her noktada aynı anda bulunan ağ yapısı (ubiquitous)",
      captionEn: "Omnipresent network nodes active simultaneously across all regions",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Ağ Şeması: Her noktada eşzamanlı aktif düğümler.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Ubiquitous — Her Yerde Bulunan",
    },
  },
  inevitable: {
    wordSlug: "inevitable",
    english: "inevitable",
    turkish: "kaçınılmaz, olması muhakkak",
    partOfSpeech: "sıfat",
    level: "B2",
    semanticCategory: "abstract-academic",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "flow",
      captionTr: "Tüm alternatif yolların tek bir kaçınılmaz sonuca (inevitable) birleşmesi",
      captionEn: "Multiple pathways converging into one unavoidable outcome",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: Farklı okların tek bir kaçınılmaz hedefte birleşimi.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Inevitable — Kaçınılmaz",
    },
  },
  drastically: {
    wordSlug: "drastically",
    english: "drastically",
    turkish: "ciddi ve köklü biçimde, çarpıcı şekilde",
    partOfSpeech: "zarf",
    level: "B2",
    semanticCategory: "process",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "scale",
      captionTr: "Değerlerin kademeli değil, ani ve köklü biçimde değişimi (drastically)",
      captionEn: "Sharp, radical shift in magnitude over a short interval",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Grafik: Ani ve dik açılı değişim eğrisi.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Drastically — Köklü Biçimde",
    },
  },
  prevalent: {
    wordSlug: "prevalent",
    english: "prevalent",
    turkish: "yaygın, hâkim, geçerli",
    partOfSpeech: "sıfat",
    level: "B2",
    semanticCategory: "spatial",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "network",
      captionTr: "Belirli bir coğrafya veya dönemde baskın/yaygın olan dağılım (prevalent)",
      captionEn: "Predominant distribution across a population matrix",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Dağılım Şeması: Popülasyon genelinde baskın yoğunluk.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Prevalent — Yaygın / Hâkim",
    },
  },
  reconcile: {
    wordSlug: "reconcile",
    english: "reconcile",
    turkish: "uzlaştırmak, bağdaştırmak, arayı bulmak",
    partOfSpeech: "fiil",
    level: "B2",
    semanticCategory: "process",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "balance",
      captionTr: "Birbiriyle çelişen iki ayrı görüşün ortak paydada uzlaştırılması (reconcile)",
      captionEn: "Harmonizing two opposing vectors into balanced agreement",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: İki zıt vektörün ortak merkezde buluşması.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Reconcile — Uzlaştırmak",
    },
  },
  reluctance: {
    wordSlug: "reluctance",
    english: "reluctance",
    turkish: "isteksizlik, gönülsüzlük, tereddüt",
    partOfSpeech: "isim",
    level: "B2",
    semanticCategory: "abstract-academic",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType: "barrier",
      captionTr: "İlerleme yönüne karşı içsel direnç ve tereddüt eşiği (reluctance)",
      captionEn: "Hesitation vector resisting forward motion before a threshold",
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: "Statik Şema: Eşik önünde duraksayan direnç oku.",
    },
    threeD: {
      enabled: true,
      conceptLabelTr: "3D Kavram Küpü: Reluctance — İsteksizlik",
    },
  },
};

/**
 * Kelime türüne ve anlamına göre en uygun semantik hareket şemasını seçer.
 */
function hashWord(value: string): number {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.codePointAt(0) || 0;
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function inferMotionType(
  english: string,
  turkish: string,
  pos: string,
  definitionEn = "",
  example = "",
): MotionDiagramType {
  const word = normalizeWordSlug(english);
  const combined = `${english} ${turkish} ${pos} ${definitionEn} ${example}`
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // Sense-aware phrases precede broad matches so a polysemous word does not
  // get classified only from its spelling.
  if (/\bbank\b/.test(combined) && /river|shore|riverbank|kiyi|nehir/.test(combined)) return "flow";
  if (/\bbank\b/.test(combined) && /finance|money|loan|banka|para|kredi/.test(combined)) return "balance";
  if (/karşılaştır|karsilastir|compare|contrast|whereas|unlike|versus/.test(combined)) return "compare";
  if (/neden|sonuç|sebep|cause|effect|consequen|lead to|result in/.test(combined)) return "causal";
  if (/döngü|dongu|cycle|cyclic|repeat|recur|periodic/.test(combined)) return "cycle";
  if (/dağılım|dagilim|distribut|spread|scatter|prevalen|widespread|ubiquit|her yerde/.test(combined)) return "distribution";
  if (/içer|icer|contain|enclos|surround|within|inside|kapsa/.test(combined)) return "containment";
  if (/büyü|buyu|grow|increase|expand|rise|develop|escalat|surge|amplif|magnif/.test(combined)) return "growth";
  if (/azal|hafiflet|yatış|yatist|mitigat|alleviat|reduce|lessen|curb|abate|diminish/.test(combined)) return "mitigate";
  if (/kötüle|kotule|bozul|aşın|asin|deteriorat|decay|decline|worsen|collapse|erode/.test(combined)) return "decay";
  if (/incele|araştır|arastir|scrutin|inspect|analy|examin|observ|detect/.test(combined)) return "examine";
  if (/uzlaş|uzlas|denge|cope|reconcil|balanc|harmon|adapt|sustain/.test(combined)) return "balance";
  if (/isteksiz|engel|reluctan|hinder|imped|obstruct|inhibit|restrain|prevent|prohibit/.test(combined)) return "barrier";
  if (/drastic|sharp|sudden|radical|köklü|koklu/.test(combined)) return "scale";
  if (/carry out|conduct|perform|execute|implement|yürüt|yurut|gerçekleştir|gerceklestir|uygula/.test(combined)) return "flow";

  // Unknown terms still receive a stable, varied topology instead of all
  // falling into the same generic flow diagram. This is a visual fallback,
  // not a claim that the inferred shape is a dictionary definition.
  const fallbackTypes: MotionDiagramType[] = [
    "causal", "cycle", "compare", "distribution", "containment", "growth",
    "examine", "balance", "barrier", "scale", "network", "flow",
  ];
  return fallbackTypes[hashWord(word) % fallbackTypes.length];
}

/**
 * Herhangi bir kelime için doğrulanmış görsel manifestini döndürür.
 * Fotoğrafı olmayan kelimelerde "photo" modunu availableModes listesine EKLEMEZ;
 * böylece olmayan bir fotoğraf için sahte buton veya tekil emoji asla gösterilmez.
 */
export function resolveWordVisualManifest(params: {
  english: string;
  turkish: string;
  partOfSpeech?: string;
  level?: string;
  definitionEn?: string;
  example?: string;
}): WordVisualManifest {
  const slug = normalizeWordSlug(params.english);
  const existing = VISUAL_ASSET_REGISTRY[slug];
  if (existing) {
    return { ...existing, visualKey: slug };
  }

  const pos = params.partOfSpeech || "academic";
  const level = params.level || "B2";
  const motionType = inferMotionType(
    params.english,
    params.turkish,
    pos,
    params.definitionEn,
    params.example,
  );

  return {
    visualKey: slug,
    wordSlug: slug,
    english: params.english,
    turkish: params.turkish,
    partOfSpeech: pos,
    level,
    semanticCategory: pos.toLowerCase().includes("phrasal") ? "phrasal-verb" : "abstract-academic",
    availableModes: ["animation", "3d", "card"],
    defaultMode: "animation",
    hasVerifiedPhoto: false,
    animation: {
      motionType,
      captionTr: `"${params.english}" (${params.turkish}) kavramı için semantik süreç ve hareket şeması`,
      captionEn: `Semantic process and conceptual motion diagram for "${params.english}"`,
      license: "CC0 1.0 Universal",
      attribution: "DİL MASTER Semantic SVG Studio",
      reducedMotionFallbackTextTr: `"${params.english}" (${params.turkish}) kavramının statik anlamsal şeması.`,
    },
    threeD: {
      enabled: true,
      conceptLabelTr: `3D Kavram Küpü: ${params.english} — ${params.turkish}`,
    },
  };
}

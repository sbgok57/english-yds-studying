/**
 * DİL MASTER — Merkezî Ses Kayıt Kütüğü (Central Voice Registry)
 *
 * - İngilizce Öğrenme Sesleri (contentLanguage: "en"):
 *   Kullanıcı arayüzünde yalnızca İngiliz, Amerikan ve Avustralya aksanları sunulur.
 *   Diğer kayıtlar eski tercihlerle uyumluluk için saklıdır ancak devre dışıdır.
 * - Türkçe Anlatım Sesleri (contentLanguage: "tr"):
 *   Sesli Gramer ve Türkçe açıklamalar için 2 ayrı konuşmacı profili:
 *   Emel (tr-TR-EmelNeural) ve Ahmet (tr-TR-AhmetNeural)
 */

export type AccentCode =
  | "en-GB"
  | "en-US"
  | "en-CA"
  | "en-AU"
  | "en-NZ"
  | "en-GB-scotland"
  | "en-IN";

export type VoiceLocale = AccentCode | "tr-TR";

export type ContentLanguage = "en" | "tr";

export type VoiceGender = "female" | "male";

export type VoiceSource =
  | "human-recording"
  | "premium-neural"
  | "secondary-neural"
  | "browser-fallback";

export type NaturalnessTier = "human" | "premium" | "standard" | "fallback";

export interface VoiceProfile {
  id: string;
  provider: string;
  providerVoiceId: string;
  displayName: string;
  locale: VoiceLocale;
  contentLanguage: ContentLanguage;
  accentLabelTr: string;
  accentLabelEn: string;
  flag: string;
  gender: VoiceGender;
  source: VoiceSource;
  naturalnessTier: NaturalnessTier;
  sampleRateHz: number;
  outputFormat: "mp3" | "opus" | "wav";
  enabled: boolean;
  supportsWords: boolean;
  supportsSentences: boolean;
  supportsLongForm: boolean;
  maxCharacters: number;
  license: string;
  description: string;
}

export interface AccentMetadata {
  code: AccentCode;
  shortId: "uk" | "us" | "ca" | "au" | "nz" | "sc" | "in";
  labelTr: string;
  labelEn: string;
  flag: string;
  youglishSlug: string;
  descriptionTr: string;
  femaleVoiceId: string;
  maleVoiceId: string;
  supported: boolean;
}

/**
 * Standart İngilizce Önizleme Metni
 */
export const STANDARD_PREVIEW_TEXT =
  "Welcome to Dil Master. Listen carefully, notice the rhythm, and repeat the sentence naturally.";

/**
 * Standart Türkçe Eğitmen Önizleme Metni (Emel & Ahmet)
 */
export const STANDARD_TURKISH_PREVIEW_TEXT =
  "Merhaba, ben Dil Master gramer eğitmeniniz. Bağlaç sorularında boşluktan sonraki yapıya dikkat edin.";

/**
 * Sunulan üç İngilizce aksan
 */
export const ACCENT_METADATA_LIST: AccentMetadata[] = [
  {
    code: "en-GB",
    shortId: "uk",
    labelTr: "İngiliz",
    labelEn: "British",
    flag: "🇬🇧",
    youglishSlug: "uk",
    descriptionTr: "RP (Received Pronunciation) standart İngiliz telaffuzu",
    femaleVoiceId: "en-GB-female-sonia",
    maleVoiceId: "en-GB-male-ryan",
    supported: true,
  },
  {
    code: "en-US",
    shortId: "us",
    labelTr: "Amerikan",
    labelEn: "American",
    flag: "🇺🇸",
    youglishSlug: "us",
    descriptionTr: "Genel Amerikan (General American) akademik telaffuz",
    femaleVoiceId: "en-US-female-jenny",
    maleVoiceId: "en-US-male-guy",
    supported: true,
  },
  {
    code: "en-AU",
    shortId: "au",
    labelTr: "Avustralya",
    labelEn: "Australian",
    flag: "🇦🇺",
    youglishSlug: "aus",
    descriptionTr: "Genel Avustralya İngilizcesi (General Australian)",
    femaleVoiceId: "en-AU-female-natasha",
    maleVoiceId: "en-AU-male-william",
    supported: true,
  },
];

/**
 * Türkçe Anlatım (Sesli Gramer) Konuşmacı Profilleri — Emel & Ahmet
 */
export const TURKISH_NARRATOR_VOICES: VoiceProfile[] = [
  {
    id: "tr-TR-female-emel",
    provider: "msedge-neural",
    providerVoiceId: "tr-TR-EmelNeural",
    displayName: "Emel",
    locale: "tr-TR",
    contentLanguage: "tr",
    accentLabelTr: "Türkçe (Kadın Eğitmen)",
    accentLabelEn: "Turkish (Female Narrator)",
    flag: "🇹🇷",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 3000,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Sesli Gramer ve hafıza kodları için Türkçe kadın eğitmen sesi (tr-TR-EmelNeural)",
  },
  {
    id: "tr-TR-male-ahmet",
    provider: "msedge-neural",
    providerVoiceId: "tr-TR-AhmetNeural",
    displayName: "Ahmet",
    locale: "tr-TR",
    contentLanguage: "tr",
    accentLabelTr: "Türkçe (Erkek Eğitmen)",
    accentLabelEn: "Turkish (Male Narrator)",
    flag: "🇹🇷",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 3000,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Sesli Gramer ve hafıza kodları için Türkçe erkek eğitmen sesi (tr-TR-AhmetNeural)",
  },
];

/**
 * 14 katalog girdisi (12 etkin İngilizce + 2 devre dışı Scottish claim) + 2 Türkçe anlatıcı
 */
export const VOICE_REGISTRY: VoiceProfile[] = [
  // 1. İngiliz (en-GB)
  {
    id: "en-GB-female-sonia",
    provider: "msedge-neural",
    providerVoiceId: "en-GB-SoniaNeural",
    displayName: "Sonia",
    locale: "en-GB",
    contentLanguage: "en",
    accentLabelTr: "İngiliz",
    accentLabelEn: "British",
    flag: "🇬🇧",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Doğal ve akıcı İngiliz kadın spiker sesi",
  },
  {
    id: "en-GB-male-ryan",
    provider: "msedge-neural",
    providerVoiceId: "en-GB-RyanNeural",
    displayName: "Ryan",
    locale: "en-GB",
    contentLanguage: "en",
    accentLabelTr: "İngiliz",
    accentLabelEn: "British",
    flag: "🇬🇧",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Net ve berrak İngiliz erkek spiker sesi",
  },

  // 2. Amerikan (en-US)
  {
    id: "en-US-female-jenny",
    provider: "msedge-neural",
    providerVoiceId: "en-US-JennyNeural",
    displayName: "Jenny",
    locale: "en-US",
    contentLanguage: "en",
    accentLabelTr: "Amerikan",
    accentLabelEn: "American",
    flag: "🇺🇸",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Standart Amerikan akademik kadın konuşmacı",
  },
  {
    id: "en-US-male-guy",
    provider: "msedge-neural",
    providerVoiceId: "en-US-GuyNeural",
    displayName: "Guy",
    locale: "en-US",
    contentLanguage: "en",
    accentLabelTr: "Amerikan",
    accentLabelEn: "American",
    flag: "🇺🇸",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Derin ve tok Amerikan erkek anlatıcı sesi",
  },

  // 3. Kanada (en-CA)
  {
    id: "en-CA-female-clara",
    provider: "msedge-neural",
    providerVoiceId: "en-CA-ClaraNeural",
    displayName: "Clara",
    locale: "en-CA",
    contentLanguage: "en",
    accentLabelTr: "Kanada",
    accentLabelEn: "Canadian",
    flag: "🇨🇦",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Otantik Kanada İngilizcesi kadın sesi",
  },
  {
    id: "en-CA-male-liam",
    provider: "msedge-neural",
    providerVoiceId: "en-CA-LiamNeural",
    displayName: "Liam",
    locale: "en-CA",
    contentLanguage: "en",
    accentLabelTr: "Kanada",
    accentLabelEn: "Canadian",
    flag: "🇨🇦",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Otantik Kanada İngilizcesi erkek sesi",
  },

  // 4. Avustralya (en-AU)
  {
    id: "en-AU-female-natasha",
    provider: "msedge-neural",
    providerVoiceId: "en-AU-NatashaNeural",
    displayName: "Natasha",
    locale: "en-AU",
    contentLanguage: "en",
    accentLabelTr: "Avustralya",
    accentLabelEn: "Australian",
    flag: "🇦🇺",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Doğal Avustralya kadın telaffuzu",
  },
  {
    id: "en-AU-male-william",
    provider: "msedge-neural",
    providerVoiceId: "en-AU-WilliamMultilingualNeural",
    displayName: "William",
    locale: "en-AU",
    contentLanguage: "en",
    accentLabelTr: "Avustralya",
    accentLabelEn: "Australian",
    flag: "🇦🇺",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: true,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Doğal Avustralya erkek telaffuzu",
  },

  // 5. Yeni Zelanda (en-NZ)
  {
    id: "en-NZ-female-molly",
    provider: "msedge-neural",
    providerVoiceId: "en-NZ-MollyNeural",
    displayName: "Molly",
    locale: "en-NZ",
    contentLanguage: "en",
    accentLabelTr: "Yeni Zelanda",
    accentLabelEn: "New Zealand",
    flag: "🇳🇿",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Yeni Zelanda kadın telaffuzu",
  },
  {
    id: "en-NZ-male-mitchell",
    provider: "msedge-neural",
    providerVoiceId: "en-NZ-MitchellNeural",
    displayName: "Mitchell",
    locale: "en-NZ",
    contentLanguage: "en",
    accentLabelTr: "Yeni Zelanda",
    accentLabelEn: "New Zealand",
    flag: "🇳🇿",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Yeni Zelanda erkek telaffuzu",
  },

  // 6. Hint (en-IN)
  {
    id: "en-IN-female-neerja",
    provider: "msedge-neural",
    providerVoiceId: "en-IN-NeerjaNeural",
    displayName: "Neerja",
    locale: "en-IN",
    contentLanguage: "en",
    accentLabelTr: "Hint",
    accentLabelEn: "Indian",
    flag: "🇮🇳",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Uluslararası standartlarda Hint İngilizcesi kadın sesi",
  },
  {
    id: "en-IN-male-prabhat",
    provider: "msedge-neural",
    providerVoiceId: "en-IN-PrabhatNeural",
    displayName: "Prabhat",
    locale: "en-IN",
    contentLanguage: "en",
    accentLabelTr: "Hint",
    accentLabelEn: "Indian",
    flag: "🇮🇳",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "Uluslararası standartlarda Hint İngilizcesi erkek sesi",
  },

  // 7. İskoçya (en-GB-scotland)
  {
    id: "en-GB-scotland-female-maisie",
    provider: "msedge-neural",
    providerVoiceId: "en-GB-MaisieNeural",
    displayName: "Maisie",
    locale: "en-GB-scotland",
    contentLanguage: "en",
    accentLabelTr: "İskoçya",
    accentLabelEn: "Scottish",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    gender: "female",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "İskoç aksanı olarak doğrulanmadı; kullanılabilir değildir.",
  },
  {
    id: "en-GB-scotland-male-thomas",
    provider: "msedge-neural",
    providerVoiceId: "en-GB-ThomasNeural",
    displayName: "Thomas",
    locale: "en-GB-scotland",
    contentLanguage: "en",
    accentLabelTr: "İskoçya",
    accentLabelEn: "Scottish",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    gender: "male",
    source: "premium-neural",
    naturalnessTier: "premium",
    sampleRateHz: 24000,
    outputFormat: "mp3",
    enabled: false,
    supportsWords: true,
    supportsSentences: true,
    supportsLongForm: true,
    maxCharacters: 2500,
    license: "Microsoft Neural Speech Engine (Service Authorization)",
    description: "İskoç aksanı olarak doğrulanmadı; kullanılabilir değildir.",
  },
];

/**
 * İngilizce aksan kataloğu ve Türkçe anlatıcı profilleri (Emel & Ahmet)
 */
export const ALL_VOICE_REGISTRY: VoiceProfile[] = [
  ...VOICE_REGISTRY,
  ...TURKISH_NARRATOR_VOICES,
];

// Map for ultra-fast O(1) lookup across all 16 voices
const VOICE_MAP_BY_ID = new Map<string, VoiceProfile>(
  ALL_VOICE_REGISTRY.map((v) => [v.id, v])
);

const VOICE_MAP_BY_PROVIDER_ID = new Map<string, VoiceProfile>(
  ALL_VOICE_REGISTRY.map((v) => [v.providerVoiceId, v])
);

/**
 * Voice ID veya Provider Voice ID ile profil getir
 */
export function getVoiceProfile(idOrProviderId: string): VoiceProfile | undefined {
  return (
    VOICE_MAP_BY_ID.get(idOrProviderId) ||
    VOICE_MAP_BY_PROVIDER_ID.get(idOrProviderId)
  );
}

/**
 * Belirli bir locale (en-* veya tr-TR) ve cinsiyet için profil getir
 */
export function findVoice(locale: VoiceLocale, gender: VoiceGender): VoiceProfile {
  const found = ALL_VOICE_REGISTRY.find(
    (v) => v.locale === locale && v.gender === gender && v.enabled
  );
  if (found) return found;
  throw new Error(`Etkin ${locale} ${gender} konuşmacı profili tanımlı değil.`);
}

/** Resolve a profile without allowing unsupported legacy preferences to throw. */
export function findEnabledVoice(locale: VoiceLocale, gender: VoiceGender): VoiceProfile | undefined {
  return ALL_VOICE_REGISTRY.find((v) => v.locale === locale && v.gender === gender && v.enabled);
}

/**
 * Türkçe anlatım (Emel veya Ahmet) profilini getir
 */
export function findTurkishNarratorVoice(
  speakerOrGender: "emel" | "ahmet" | VoiceGender
): VoiceProfile {
  if (speakerOrGender === "ahmet" || speakerOrGender === "male") {
    return getVoiceProfile("tr-TR-male-ahmet")!;
  }
  return getVoiceProfile("tr-TR-female-emel")!;
}

/**
 * Belirli bir aksana ait tüm sesleri getir (kadın ve erkek)
 */
export function getVoicesForAccent(locale: VoiceLocale): VoiceProfile[] {
  return ALL_VOICE_REGISTRY.filter((v) => v.locale === locale && v.enabled);
}

/**
 * Doğrulama: Tüm 7 İngilizce aksanda + Türkçe (tr-TR) anlatımda kadın ve erkek seslerin varlığını test eder.
 */
export function validateVoiceMatrix(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const requiredLocales: VoiceLocale[] = [
    "en-GB",
    "en-US",
    "en-AU",
    "tr-TR",
  ];

  const seenIds = new Set<string>();
  const seenProviderIds = new Set<string>();

  for (const v of ALL_VOICE_REGISTRY) {
    if (seenIds.has(v.id)) errors.push(`Mükerrer voice id: ${v.id}`);
    if (seenProviderIds.has(v.providerVoiceId))
      errors.push(`Mükerrer providerVoiceId: ${v.providerVoiceId}`);
    seenIds.add(v.id);
    seenProviderIds.add(v.providerVoiceId);
  }

  for (const loc of requiredLocales) {
    const female = ALL_VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "female" && v.enabled);
    const male = ALL_VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "male" && v.enabled);
    if (!female) errors.push(`${loc} için kadın ses eksik.`);
    if (!male) errors.push(`${loc} için erkek ses eksik.`);
  }

  for (const locale of ["en-GB-scotland"] as const) {
    if (ALL_VOICE_REGISTRY.some((voice) => voice.locale === locale && voice.enabled)) {
      errors.push(`${locale} desteklenmediği doğrulandığı halde etkin olarak sunuluyor.`);
    }
  }

  for (const locale of ["en-CA", "en-NZ", "en-IN"] as const) {
    if (ALL_VOICE_REGISTRY.some((voice) => voice.locale === locale && voice.enabled)) {
      errors.push(`${locale} gizli eski aksan profili etkin durumda.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

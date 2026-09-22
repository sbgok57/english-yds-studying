/**
 * YDS Master - Merkezî Ses Kayıt Kütüğü (Central Voice Registry)
 * 
 * Tam 6 İngilizce aksanı × 2 cinsiyet = 12 doğrulanmış Neural Konuşmacı.
 * Aksanlar:
 * 1. İngiliz (en-GB)
 * 2. Amerikan (en-US)
 * 3. Kanada (en-CA)
 * 4. Avustralya (en-AU)
 * 5. Yeni Zelanda (en-NZ)
 * 6. Hint İngilizcesi (en-IN)
 */

export type AccentCode =
  | "en-GB"
  | "en-US"
  | "en-CA"
  | "en-AU"
  | "en-NZ"
  | "en-IN";

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
  locale: AccentCode;
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
  shortId: "uk" | "us" | "ca" | "au" | "nz" | "in";
  labelTr: string;
  labelEn: string;
  flag: string;
  youglishSlug: string;
  descriptionTr: string;
  femaleVoiceId: string;
  maleVoiceId: string;
}

/**
 * Standart Nötr Ses Önizleme Metni (6-8 saniyelik karşılaştırma cümlesi)
 */
export const STANDARD_PREVIEW_TEXT =
  "Welcome to YDS Master. Listen carefully, notice the rhythm, and repeat the sentence naturally.";

/**
 * 6 Aksan Meta Verisi
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
  },
  {
    code: "en-CA",
    shortId: "ca",
    labelTr: "Kanada",
    labelEn: "Canadian",
    flag: "🇨🇦",
    youglishSlug: "us",
    descriptionTr: "Standart Kanada İngilizcesi ve sesletim dinamikleri",
    femaleVoiceId: "en-CA-female-clara",
    maleVoiceId: "en-CA-male-liam",
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
  },
  {
    code: "en-NZ",
    shortId: "nz",
    labelTr: "Yeni Zelanda",
    labelEn: "New Zealand",
    flag: "🇳🇿",
    youglishSlug: "aus",
    descriptionTr: "Yeni Zelanda İngilizcesi ve kendine özgü ünlü sesleri",
    femaleVoiceId: "en-NZ-female-molly",
    maleVoiceId: "en-NZ-male-mitchell",
  },
  {
    code: "en-IN",
    shortId: "in",
    labelTr: "Hint",
    labelEn: "Indian",
    flag: "🇮🇳",
    youglishSlug: "uk",
    descriptionTr: "Uluslararası akademik sınavlarda sıklıkla çıkan Hint İngilizcesi",
    femaleVoiceId: "en-IN-female-neerja",
    maleVoiceId: "en-IN-male-prabhat",
  },
];

/**
 * 12 Doğrulanmış Neural Konuşmacı Profili
 */
export const VOICE_REGISTRY: VoiceProfile[] = [
  // 1. İngiliz (en-GB)
  {
    id: "en-GB-female-sonia",
    provider: "msedge-neural",
    providerVoiceId: "en-GB-SoniaNeural",
    displayName: "Sonia",
    locale: "en-GB",
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
    accentLabelTr: "Kanada",
    accentLabelEn: "Canadian",
    flag: "🇨🇦",
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
    description: "Otantik Kanada İngilizcesi kadın sesi",
  },
  {
    id: "en-CA-male-liam",
    provider: "msedge-neural",
    providerVoiceId: "en-CA-LiamNeural",
    displayName: "Liam",
    locale: "en-CA",
    accentLabelTr: "Kanada",
    accentLabelEn: "Canadian",
    flag: "🇨🇦",
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
    description: "Otantik Kanada İngilizcesi erkek sesi",
  },

  // 4. Avustralya (en-AU)
  {
    id: "en-AU-female-natasha",
    provider: "msedge-neural",
    providerVoiceId: "en-AU-NatashaNeural",
    displayName: "Natasha",
    locale: "en-AU",
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
    accentLabelTr: "Yeni Zelanda",
    accentLabelEn: "New Zealand",
    flag: "🇳🇿",
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
    description: "Yeni Zelanda kadın telaffuzu",
  },
  {
    id: "en-NZ-male-mitchell",
    provider: "msedge-neural",
    providerVoiceId: "en-NZ-MitchellNeural",
    displayName: "Mitchell",
    locale: "en-NZ",
    accentLabelTr: "Yeni Zelanda",
    accentLabelEn: "New Zealand",
    flag: "🇳🇿",
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
    description: "Yeni Zelanda erkek telaffuzu",
  },

  // 6. Hint (en-IN)
  {
    id: "en-IN-female-neerja",
    provider: "msedge-neural",
    providerVoiceId: "en-IN-NeerjaNeural",
    displayName: "Neerja",
    locale: "en-IN",
    accentLabelTr: "Hint",
    accentLabelEn: "Indian",
    flag: "🇮🇳",
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
    description: "Uluslararası standartlarda Hint İngilizcesi kadın sesi",
  },
  {
    id: "en-IN-male-prabhat",
    provider: "msedge-neural",
    providerVoiceId: "en-IN-PrabhatNeural",
    displayName: "Prabhat",
    locale: "en-IN",
    accentLabelTr: "Hint",
    accentLabelEn: "Indian",
    flag: "🇮🇳",
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
    description: "Uluslararası standartlarda Hint İngilizcesi erkek sesi",
  },
];

// Map for ultra-fast O(1) lookup
const VOICE_MAP_BY_ID = new Map<string, VoiceProfile>(
  VOICE_REGISTRY.map((v) => [v.id, v])
);

const VOICE_MAP_BY_PROVIDER_ID = new Map<string, VoiceProfile>(
  VOICE_REGISTRY.map((v) => [v.providerVoiceId, v])
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
 * Belirli bir aksan ve cinsiyet için profil getir
 */
export function findVoice(locale: AccentCode, gender: VoiceGender): VoiceProfile {
  const found = VOICE_REGISTRY.find(
    (v) => v.locale === locale && v.gender === gender && v.enabled
  );
  if (found) return found;

  // Fallback: Same locale other gender
  const sameLocale = VOICE_REGISTRY.find(
    (v) => v.locale === locale && v.enabled
  );
  if (sameLocale) return sameLocale;

  // Default: US Female
  return VOICE_REGISTRY[2];
}

/**
 * Belirli bir aksana ait tüm sesleri getir (kadın ve erkek)
 */
export function getVoicesForAccent(locale: AccentCode): VoiceProfile[] {
  return VOICE_REGISTRY.filter((v) => v.locale === locale && v.enabled);
}

/**
 * Doğrulama: Tüm 6 aksanda kadın ve erkek olmak üzere tam 12 sesin varlığını test eder.
 */
export function validateVoiceMatrix(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const requiredLocales: AccentCode[] = [
    "en-GB",
    "en-US",
    "en-CA",
    "en-AU",
    "en-NZ",
    "en-IN",
  ];

  const seenIds = new Set<string>();
  const seenProviderIds = new Set<string>();

  for (const v of VOICE_REGISTRY) {
    if (seenIds.has(v.id)) errors.push(`Mükerrer voice id: ${v.id}`);
    if (seenProviderIds.has(v.providerVoiceId))
      errors.push(`Mükerrer providerVoiceId: ${v.providerVoiceId}`);
    seenIds.add(v.id);
    seenProviderIds.add(v.providerVoiceId);
  }

  for (const loc of requiredLocales) {
    const female = VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "female");
    const male = VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "male");
    if (!female) errors.push(`${loc} için kadın ses eksik.`);
    if (!male) errors.push(`${loc} için erkek ses eksik.`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

import { PartOfSpeech } from '../types/vocabulary';

export interface VisualMemoryData {
  svgContent: string;
  themeColor: string;
  category: string;
  memoryTip: {
    en: string;
    tr: string;
  };
}

// Curated high-yield conceptual SVG icons / illustrations
const CONCEPT_SVGS: Record<string, { svg: string; category: string }> = {
  abandon: {
    category: 'separation',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-abandon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#881337" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="16" fill="url(#grad-abandon)"/>
      <path d="M20 75C35 70 65 80 80 75" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
      <path d="M30 65L45 50L60 65" stroke="#fb7185" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M45 50V35" stroke="#fb7185" stroke-width="2.5"/>
      <path d="M45 38L55 42L45 46" fill="#f43f5e"/>
      <circle cx="72" cy="30" r="6" fill="#fda4af" opacity="0.6"/>
      <path d="M68 62L82 62M78 58L82 62L78 66" stroke="#fb7185" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
  mitigate: {
    category: 'protection',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-mitigate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#064e3b" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="16" fill="url(#grad-mitigate)"/>
      <path d="M50 20L75 32V52C75 68 50 82 50 82C50 82 25 68 25 52V32L50 20Z" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="3" stroke-linejoin="round"/>
      <path d="M40 50L47 57L62 42" stroke="#34d399" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  breakthrough: {
    category: 'innovation',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-breakthrough" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#78350f" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="16" fill="url(#grad-breakthrough)"/>
      <circle cx="50" cy="42" r="18" stroke="#f59e0b" stroke-width="3"/>
      <path d="M43 60H57L54 70H46L43 60Z" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="2"/>
      <path d="M50 16V22M24 42H18M76 42H82M30 26L25 21M70 26L75 21" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M47 38L53 46M53 38L47 46" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
  scarce: {
    category: 'scarcity',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-scarce" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#312e81" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="16" fill="url(#grad-scarce)"/>
      <path d="M35 25H65L55 50L65 75H35L45 50L35 25Z" stroke="#818cf8" stroke-width="3" stroke-linejoin="round"/>
      <path d="M47 62H53" stroke="#c7d2fe" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="68" r="2.5" fill="#a5b4fc"/>
    </svg>`,
  },
  collaborate: {
    category: 'cooperation',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-collab" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="16" fill="url(#grad-collab)"/>
      <circle cx="36" cy="38" r="10" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="64" cy="38" r="10" stroke="#38bdf8" stroke-width="2.5"/>
      <path d="M22 68C22 56 32 54 36 54C42 54 48 57 50 62C52 57 58 54 64 54C68 54 78 56 78 68" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M44 48L50 54L56 48" stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
};

// Known custom cognitive memory tips for high-frequency words
const KNOWN_MEMORY_TIPS: Record<string, { en: string; tr: string }> = {
  abandon: {
    en: 'Visualize a captain who must abandon ship: "A-band-on" leaves the sinking vessel alone.',
    tr: 'Bandoyu sahnede terk eden kaptanı hayal edin: bir yeri, kişiyi veya planı geride bırakmak.',
  },
  accommodate: {
    en: 'Think of a spacious hotel that accommodates all guests comfortably.',
    tr: 'Her misafire yer açan ve şartlara uyum sağlayan konuksever bir mekan düşünün.',
  },
  mitigate: {
    en: 'Shielding against harm: "Mitigate" acts like a gate holding back rising waters.',
    tr: 'Zararı hafifletmek: taşkın kapısı (gate) gibi tehlikenin etkisini yatıştırmak.',
  },
  breakthrough: {
    en: 'Breaking through a concrete wall into pure daylight: a sudden major advance.',
    tr: 'Duvarı kırıp öteye geçmek (break + through): büyük, çığır açan bilimsel gelişme.',
  },
  scarce: {
    en: 'A single drop falling into an hourglass: resources that are rare and insufficient.',
    tr: 'Çöldeki su damlası gibi: az bulunan, kıt ve yetersiz olan.',
  },
  fluctuate: {
    en: 'Ocean waves rising and falling continuously: numbers that oscillate up and down.',
    tr: 'Dalgalı grafik gibi inişli çıkışlı seyretmek, dalgalanmak.',
  },
  accelerate: {
    en: 'Pressing the gas pedal: moving faster and speeding up a process.',
    tr: 'Gaza basarak hızı artırmak, bir süreci ivmelendirmek.',
  },
  comprehensive: {
    en: 'A 360-degree panoramic compass that includes every single angle.',
    tr: 'Her ayrıntıyı içine alan, 360 derece kapsayıcı ve ayrıntılı.',
  },
  scrutinize: {
    en: 'Examining tiny print with a powerful magnifying glass.',
    tr: 'Büyüteçle her detayı didik didik incelemek, mercek altına almak.',
  },
  inevitable: {
    en: 'The sunrise tomorrow morning: something destined to happen that cannot be avoided.',
    tr: 'Güneşin doğuşu gibi önüne geçilemez, kaçınılmaz olan.',
  },
};

/**
 * Generates a resilient procedural SVG vector illustration for any word
 * based on its part of speech, semantic theme, and letter hash.
 */
function generateProceduralSvg(word: string, pos: PartOfSpeech): { svg: string; color: string } {
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = (hash << 5) - hash + word.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  // Palette by part of speech
  const palettes: Record<PartOfSpeech, { bgStart: string; bgEnd: string; stroke: string; glow: string; textFill: string }> = {
    noun: { bgStart: '#064e3b', bgEnd: '#022c22', stroke: '#10b981', glow: '#34d399', textFill: '#6ee7b7' },
    verb: { bgStart: '#1e1b4b', bgEnd: '#0f172a', stroke: '#6366f1', glow: '#818cf8', textFill: '#a5b4fc' },
    adjective: { bgStart: '#451a03', bgEnd: '#27170a', stroke: '#f59e0b', glow: '#fbbf24', textFill: '#fcd34d' },
    adverb: { bgStart: '#3b0764', bgEnd: '#1e0533', stroke: '#a855f7', glow: '#c084fc', textFill: '#e9d5ff' },
    phrasal_verb: { bgStart: '#4c0519', bgEnd: '#290610', stroke: '#f43f5e', glow: '#fb7185', textFill: '#fda4af' },
    preposition: { bgStart: '#082f49', bgEnd: '#031726', stroke: '#0ea5e9', glow: '#38bdf8', textFill: '#7dd3fc' },
    conjunction: { bgStart: '#14532d', bgEnd: '#052e16', stroke: '#22c55e', glow: '#4ade80', textFill: '#86efac' },
    phrase: { bgStart: '#172554', bgEnd: '#0a1024', stroke: '#3b82f6', glow: '#60a5fa', textFill: '#93c5fd' },
  };

  const pal = palettes[pos] || palettes.noun;
  const shapeType = positiveHash % 4; // 0: concentric rings, 1: faceted diamond, 2: ascending node tree, 3: harmonic wave

  let dynamicGlyph = '';
  if (shapeType === 0) {
    dynamicGlyph = `
      <circle cx="50" cy="50" r="28" stroke="${pal.stroke}" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="50" cy="50" r="18" fill="${pal.stroke}" fill-opacity="0.2" stroke="${pal.glow}" stroke-width="2"/>
      <circle cx="50" cy="50" r="7" fill="${pal.glow}"/>
    `;
  } else if (shapeType === 1) {
    dynamicGlyph = `
      <polygon points="50,22 76,50 50,78 24,50" stroke="${pal.stroke}" stroke-width="2.5" fill="${pal.stroke}" fill-opacity="0.15"/>
      <polygon points="50,32 66,50 50,68 34,50" stroke="${pal.glow}" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="4" fill="${pal.glow}"/>
    `;
  } else if (shapeType === 2) {
    dynamicGlyph = `
      <path d="M26 72L42 50L58 60L74 34" stroke="${pal.stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="26" cy="72" r="4" fill="${pal.stroke}"/>
      <circle cx="42" cy="50" r="4" fill="${pal.stroke}"/>
      <circle cx="58" cy="60" r="4" fill="${pal.stroke}"/>
      <circle cx="74" cy="34" r="5" fill="${pal.glow}"/>
      <path d="M66 34H74V42" stroke="${pal.glow}" stroke-width="2.5" stroke-linecap="round"/>
    `;
  } else {
    dynamicGlyph = `
      <path d="M20 50C30 35 40 65 50 50C60 35 70 65 80 50" stroke="${pal.stroke}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M25 58C35 45 45 70 55 58C65 45 75 70 85 58" stroke="${pal.glow}" stroke-width="1.5" stroke-opacity="0.5" stroke-linecap="round"/>
    `;
  }

  const svg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <defs>
      <linearGradient id="grad-${positiveHash}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${pal.bgStart}"/>
        <stop offset="100%" stop-color="${pal.bgEnd}"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="16" fill="url(#grad-${positiveHash})" stroke="${pal.stroke}" stroke-width="1.5" stroke-opacity="0.3"/>
    ${dynamicGlyph}
    <text x="50" y="88" text-anchor="middle" fill="${pal.textFill}" font-size="9" font-family="sans-serif" font-weight="700" letter-spacing="1">
      ${pos.toUpperCase().replace('_', ' ')}
    </text>
  </svg>`;

  return { svg, color: pal.stroke };
}

/**
 * Automatically creates cognitive bilingual memory tip if not present.
 */
function generateMemoryTip(word: string, pos: PartOfSpeech, meaningsTr: string[]): { en: string; tr: string } {
  const norm = word.toLowerCase().trim();
  if (KNOWN_MEMORY_TIPS[norm]) {
    return KNOWN_MEMORY_TIPS[norm];
  }

  const primaryTr = meaningsTr[0] || 'anlamı';
  return {
    en: `Associate "${word}" (${pos}) with active academic context: remember its meaning as "${primaryTr}".`,
    tr: `"${word}" (${pos}) kelimesini zihninizde "${primaryTr}" kavramı ve akademik bağlamı ile kodlayın.`,
  };
}

/**
 * Returns full visual memory assets for any vocabulary word.
 * Guaranteed 100% offline resilient with 0 broken images.
 */
export function getVisualMemory(word: string, pos: PartOfSpeech = 'noun', meaningsTr: string[] = []): VisualMemoryData {
  const norm = word.toLowerCase().trim();

  if (CONCEPT_SVGS[norm]) {
    const item = CONCEPT_SVGS[norm];
    return {
      svgContent: item.svg,
      themeColor: '#3b82f6',
      category: item.category,
      memoryTip: generateMemoryTip(word, pos, meaningsTr),
    };
  }

  const { svg, color } = generateProceduralSvg(word, pos);
  return {
    svgContent: svg,
    themeColor: color,
    category: pos,
    memoryTip: generateMemoryTip(word, pos, meaningsTr),
  };
}

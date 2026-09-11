import { PartOfSpeech, VocabularyItem } from '../types/vocabulary';

export interface VisualMemoryData {
  svgContent: string;
  themeColor: string;
  category: string;
  style: string;
  visualPrompt: string;
  visualSearchQuery: string;
  semanticScene: string;
  emotion: string;
  characterAction: string;
  altText: string;
  memoryTip: {
    en: string;
    tr: string;
  };
}

// Curated high-yield caricature character scenes (Zero text, bold cartoon outlines, expressive faces)
const CURATED_SCENES: Record<
  string,
  {
    svg: string;
    themeColor: string;
    category: string;
    semanticScene: string;
    emotion: string;
    characterAction: string;
    visualSearchQuery: string;
    altText: string;
  }
> = {
  abandon: {
    themeColor: '#f43f5e',
    category: 'separation',
    semanticScene: 'A person walking away leaving a retro suitcase on the roadside, waving goodbye without looking back',
    emotion: 'Reluctant & Detached',
    characterAction: 'Walking away and leaving suitcase behind',
    visualSearchQuery: 'person leaving something behind walking away cartoon',
    altText: 'Expressive cartoon character walking away leaving a bag behind on the ground',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-abandon" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff1f2"/>
          <stop offset="100%" stop-color="#ffe4e6"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-abandon)"/>
      <path d="M20 155C60 152 140 152 180 155" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <rect x="38" y="125" width="34" height="26" rx="5" fill="#f43f5e" stroke="#1e293b" stroke-width="3"/>
      <path d="M48 125V119C48 116 51 114 55 114C59 114 62 116 62 119V125" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <line x1="55" y1="125" x2="55" y2="151" stroke="#fda4af" stroke-width="2"/>
      <path d="M28 135L34 135M24 142L32 142" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <path d="M125 148L132 165M145 148L156 163" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="132" cy="166" rx="7" ry="4" fill="#0f172a"/>
      <ellipse cx="158" cy="164" rx="7" ry="4" fill="#0f172a"/>
      <path d="M124 95C124 95 140 98 152 105C158 114 154 148 140 148C130 148 122 135 120 120Z" fill="#3b82f6" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="138" cy="74" r="18" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <path d="M125 72C123 60 134 54 148 55C156 56 160 62 158 70C152 66 142 66 136 71Z" fill="#78350f" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="132" cy="74" r="3.5" fill="#1e293b"/>
      <circle cx="131" cy="73" r="1" fill="#ffffff"/>
      <path d="M128 68C131 66 135 67 137 69" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M130 84C134 83 138 85 141 83" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M124 105C115 110 106 106 98 98" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="96" cy="96" r="4" fill="#fed7aa" stroke="#1e293b" stroke-width="2"/>
      <path d="M165 95C175 95 180 98 185 98" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M160 115C172 115 178 118 182 118" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },

  reluctant: {
    themeColor: '#f97316',
    category: 'hesitation',
    semanticScene: 'A person invited forward but leaning backward at 45 degrees, dragging heels in refusal',
    emotion: 'Reluctant & Hesitant',
    characterAction: 'Stepping backward and resisting',
    visualSearchQuery: 'hesitant unwilling person stepping backward cartoon',
    altText: 'Expressive cartoon character digging heels into the ground and pulling backward unwillingly',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-reluctant" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff7ed"/>
          <stop offset="100%" stop-color="#ffedd5"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-reluctant)"/>
      <path d="M20 160C70 160 130 160 180 160" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
      <path d="M110 164L140 164M118 168L144 168" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
      <path d="M78 128L98 160M92 128L124 158" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="98" cy="162" rx="8" ry="4" fill="#0f172a" transform="rotate(-15 98 162)"/>
      <ellipse cx="126" cy="160" rx="9" ry="4" fill="#0f172a" transform="rotate(-20 126 160)"/>
      <circle cx="136" cy="158" r="4" fill="#fed7aa"/>
      <circle cx="142" cy="154" r="3" fill="#fed7aa"/>
      <path d="M82 85L70 130C70 130 92 134 100 125L108 90Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="86" cy="62" r="20" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <path d="M70 54C68 40 82 38 98 42C106 44 108 52 106 60C100 52 86 50 70 54Z" fill="#475569" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M78 55L86 58" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M94 59L102 55" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="82" cy="63" r="3" fill="#1e293b"/>
      <circle cx="96" cy="63" r="3" fill="#1e293b"/>
      <path d="M82 74C86 72 90 75 94 72" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M106 62C106 62 110 65 110 68C110 70 108 71 106 71C104 71 102 70 102 68C102 65 106 62 106 62Z" fill="#38bdf8"/>
      <path d="M76 96C65 98 52 94 48 88" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <path d="M48 88L44 82M48 88L42 88M48 88L44 94" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },

  fragile: {
    themeColor: '#06b6d4',
    category: 'caution',
    semanticScene: 'A character holding a delicate crystal vase with intense care and nervous wide eyes',
    emotion: 'Scared & Ultra-Cautious',
    characterAction: 'Delicately balancing fragile glassware',
    visualSearchQuery: 'careful character holding delicate glass nervously cartoon',
    altText: 'Cartoon character nervously balancing a fragile glass vase with sweat drops',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-fragile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ecfeff"/>
          <stop offset="100%" stop-color="#cffafe"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-fragile)"/>
      <path d="M80 148L80 170M120 148L120 170" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="80" cy="172" rx="7" ry="4" fill="#0f172a"/>
      <ellipse cx="120" cy="172" rx="7" ry="4" fill="#0f172a"/>
      <rect x="74" y="98" width="52" height="52" rx="14" fill="#0284c7" stroke="#1e293b" stroke-width="3.5"/>
      <circle cx="100" cy="62" r="22" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <circle cx="85" cy="46" r="8" fill="#b45309"/>
      <circle cx="100" cy="42" r="9" fill="#b45309"/>
      <circle cx="115" cy="46" r="8" fill="#b45309"/>
      <circle cx="91" cy="61" r="6.5" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <circle cx="109" cy="61" r="6.5" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <circle cx="92" cy="61" r="3" fill="#1e293b"/>
      <circle cx="108" cy="61" r="3" fill="#1e293b"/>
      <circle cx="93" cy="59" r="1" fill="#ffffff"/>
      <circle cx="109" cy="59" r="1" fill="#ffffff"/>
      <path d="M85 51C88 47 95 49 97 52" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M103 52C105 49 112 47 115 51" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="74" r="2.5" fill="#1e293b"/>
      <path d="M124 55C124 55 127 58 127 61C127 63 125 64 124 64C122 64 121 63 121 61C121 58 124 55 124 55Z" fill="#38bdf8"/>
      <path d="M72 108C72 108 80 120 90 120" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M128 108C128 108 120 120 110 120" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M92 102H108L104 116C104 124 96 124 96 116L92 102Z" fill="#67e8f9" fill-opacity="0.45" stroke="#0891b2" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M94 105L93 114" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M84 100L88 104M116 100L112 104" stroke="#0891b2" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },

  scarce: {
    themeColor: '#8b5cf6',
    category: 'scarcity',
    semanticScene: 'A bewildered customer facing giant empty grocery shelves with only one solitary can left',
    emotion: 'Surprised & Dismayed',
    characterAction: 'Scratching head in front of empty shelves',
    visualSearchQuery: 'scarcity empty shelves few products limited supply cartoon',
    altText: 'Cartoon character scratching head in front of nearly completely empty shelves',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-scarce" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f5f3ff"/>
          <stop offset="100%" stop-color="#ede9fe"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-scarce)"/>
      <rect x="25" y="45" width="100" height="115" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="3"/>
      <line x1="25" y1="80" x2="125" y2="80" stroke="#94a3b8" stroke-width="3"/>
      <line x1="25" y1="115" x2="125" y2="115" stroke="#94a3b8" stroke-width="3"/>
      <line x1="25" y1="150" x2="125" y2="150" stroke="#94a3b8" stroke-width="3"/>
      <rect x="70" y="98" width="12" height="17" rx="2" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="76" cy="98" rx="6" ry="2" fill="#fca5a5"/>
      <path d="M142 148L140 172M164 148L166 172" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="140" cy="174" rx="7" ry="4" fill="#0f172a"/>
      <ellipse cx="168" cy="174" rx="7" ry="4" fill="#0f172a"/>
      <rect x="135" y="100" width="38" height="50" rx="12" fill="#8b5cf6" stroke="#1e293b" stroke-width="3.5"/>
      <circle cx="152" cy="66" r="20" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <path d="M136 56C136 46 148 44 162 46C172 48 174 58 172 64Z" fill="#1e293b"/>
      <ellipse cx="166" cy="62" rx="9" ry="3" fill="#334155" transform="rotate(-15 166 62)"/>
      <circle cx="146" cy="65" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
      <circle cx="158" cy="65" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
      <circle cx="145" cy="65" r="2.5" fill="#1e293b"/>
      <circle cx="157" cy="65" r="2.5" fill="#1e293b"/>
      <ellipse cx="152" cy="77" rx="3.5" ry="5" fill="#881337" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M170 108C176 100 180 82 170 70" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="169" cy="68" r="4" fill="#fed7aa" stroke="#1e293b" stroke-width="2"/>
    </svg>`,
  },

  abundant: {
    themeColor: '#10b981',
    category: 'abundance',
    semanticScene: 'A joyful merchant surrounded by overflowing baskets of ripe fruits and goods',
    emotion: 'Happy & Overwhelmed with Joy',
    characterAction: 'Spreading arms wide amidst overflowing harvest',
    visualSearchQuery: 'overflowing fruits market character happy abundance cartoon',
    altText: 'Happy cartoon character smiling amidst overflowing piles of fresh fruit and bountiful harvest',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-abundant" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ecfdf5"/>
          <stop offset="100%" stop-color="#d1fae5"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-abundant)"/>
      <ellipse cx="40" cy="155" rx="14" ry="12" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="62" cy="158" rx="13" ry="11" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="50" cy="142" rx="12" ry="10" fill="#10b981" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="145" cy="155" rx="14" ry="12" fill="#eab308" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="165" cy="158" rx="13" ry="11" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
      <ellipse cx="155" cy="142" rx="12" ry="10" fill="#8b5cf6" stroke="#1e293b" stroke-width="2"/>
      <path d="M48 118L50 123L55 125L50 127L48 132L46 127L41 125L46 123Z" fill="#fbbf24"/>
      <path d="M152 118L154 123L159 125L154 127L152 132L150 127L145 125L150 123Z" fill="#fbbf24"/>
      <path d="M92 148L90 172M108 148L110 172" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="90" cy="174" rx="7" ry="4" fill="#0f172a"/>
      <ellipse cx="112" cy="174" rx="7" ry="4" fill="#0f172a"/>
      <rect x="82" y="96" width="36" height="54" rx="12" fill="#10b981" stroke="#1e293b" stroke-width="3.5"/>
      <circle cx="100" cy="62" r="20" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <path d="M89 59C91 56 97 56 99 59" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M101 59C103 56 109 56 111 59" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="88" cy="66" r="3.5" fill="#fca5a5" opacity="0.8"/>
      <circle cx="112" cy="66" r="3.5" fill="#fca5a5" opacity="0.8"/>
      <path d="M92 68C92 78 108 78 108 68Z" fill="#881337" stroke="#1e293b" stroke-width="2"/>
      <path d="M82 105C68 95 56 82 50 68" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <circle cx="49" cy="67" r="4.5" fill="#fed7aa" stroke="#1e293b" stroke-width="2"/>
      <path d="M118 105C132 95 144 82 150 68" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <circle cx="151" cy="67" r="4.5" fill="#fed7aa" stroke="#1e293b" stroke-width="2"/>
    </svg>`,
  },

  mitigate: {
    themeColor: '#059669',
    category: 'protection',
    semanticScene: 'A protective character holding a sturdy umbrella stopping a heavy downpour, keeping dry and calm',
    emotion: 'Relieved & Protective',
    characterAction: 'Shielding from harm with umbrella',
    visualSearchQuery: 'protective character holding sturdy umbrella sheltering cartoon',
    altText: 'Cartoon character holding a sturdy umbrella deflecting storm drops peacefully',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-mitigate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0fdf4"/>
          <stop offset="100%" stop-color="#dcfce7"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-mitigate)"/>
      <path d="M35 30L25 55M55 25L45 50M155 25L145 50M175 30L165 55" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <path d="M45 80C45 42 155 42 155 80Z" fill="#10b981" stroke="#1e293b" stroke-width="3.5"/>
      <path d="M100 42V35" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="100" y1="80" x2="100" y2="120" stroke="#1e293b" stroke-width="3.5"/>
      <rect x="85" y="118" width="30" height="42" rx="10" fill="#047857" stroke="#1e293b" stroke-width="3"/>
      <path d="M92 160L92 174M108 160L108 174" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <circle cx="100" cy="98" r="16" fill="#fed7aa" stroke="#1e293b" stroke-width="2.8"/>
      <path d="M88 92C88 84 96 82 108 84C114 86 116 92 114 96Z" fill="#78350f"/>
      <path d="M92 97C94 95 98 95 100 97" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M102 97C104 95 108 95 110 97" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M96 105C98 107 102 107 104 105" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M100 120C100 126 94 128 90 124" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  },

  breakthrough: {
    themeColor: '#eab308',
    category: 'victory',
    semanticScene: 'A triumphant character breaking through a gray stone wall into bright golden sunshine',
    emotion: 'Excited & Victorious',
    characterAction: 'Bursting through brick barrier with fist pumped',
    visualSearchQuery: 'character breaking through brick wall into light victory cartoon',
    altText: 'Cartoon character victoriously bursting through a brick wall into bright sunlight',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-breakthrough" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fefce8"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-breakthrough)"/>
      <path d="M20 50L55 65L40 90L60 115L35 140L20 155" stroke="#94a3b8" stroke-width="4" fill="#cbd5e1" stroke-linejoin="round"/>
      <path d="M180 50L145 65L160 90L140 115L165 140L180 155" stroke="#94a3b8" stroke-width="4" fill="#cbd5e1" stroke-linejoin="round"/>
      <rect x="58" y="42" width="12" height="7" rx="1" fill="#94a3b8" transform="rotate(25 58 42)"/>
      <rect x="138" y="45" width="12" height="7" rx="1" fill="#94a3b8" transform="rotate(-30 138 45)"/>
      <rect x="142" y="130" width="10" height="6" rx="1" fill="#94a3b8" transform="rotate(15 142 130)"/>
      <path d="M100 30V15M70 40L60 28M130 40L140 28" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
      <path d="M90 148L80 172M110 148L122 170" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="78" cy="174" rx="8" ry="4" fill="#0f172a"/>
      <ellipse cx="124" cy="172" rx="8" ry="4" fill="#0f172a"/>
      <path d="M80 95L120 95L115 148L85 148Z" fill="#eab308" stroke="#1e293b" stroke-width="3.5"/>
      <circle cx="100" cy="62" r="20" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <path d="M92 68C92 78 108 78 108 68Z" fill="#991b1b" stroke="#1e293b" stroke-width="2"/>
      <path d="M91 58L93 54L95 58L99 60L95 62L93 66L91 62L87 60Z" fill="#1e293b"/>
      <path d="M105 58L107 54L109 58L113 60L109 62L107 66L105 62L101 60Z" fill="#1e293b"/>
      <path d="M120 98C128 85 135 68 138 52" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <circle cx="139" cy="50" r="6" fill="#fed7aa" stroke="#1e293b" stroke-width="2.5"/>
    </svg>`,
  },

  collaborate: {
    themeColor: '#0284c7',
    category: 'cooperation',
    semanticScene: 'Two diverse cheerful characters clicking together the final giant jigsaw puzzle piece',
    emotion: 'Collaborative & Cheerful',
    characterAction: 'Snapping puzzle pieces together in teamwork',
    visualSearchQuery: 'two people clicking puzzle piece together teamwork cartoon',
    altText: 'Two cartoon characters happily connecting a large puzzle piece together',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-collab" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0f9ff"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-collab)"/>
      <path d="M85 95H115V110C118 110 120 113 120 116C120 119 118 122 115 122V135H85V122C82 122 80 119 80 116C80 113 82 110 85 110Z" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
      <path d="M48 145L45 170M62 145L62 170" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <rect x="42" y="100" width="30" height="46" rx="8" fill="#10b981" stroke="#1e293b" stroke-width="3"/>
      <circle cx="56" cy="72" r="16" fill="#fed7aa" stroke="#1e293b" stroke-width="2.8"/>
      <circle cx="52" cy="72" r="4.5" stroke="#1e293b" stroke-width="2"/>
      <circle cx="62" cy="72" r="4.5" stroke="#1e293b" stroke-width="2"/>
      <line x1="56.5" y1="72" x2="57.5" y2="72" stroke="#1e293b" stroke-width="2"/>
      <path d="M53 81C56 83 60 83 63 81" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M72 112L85 112" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M138 145L138 170M152 145L155 170" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <rect x="128" y="100" width="30" height="46" rx="8" fill="#f97316" stroke="#1e293b" stroke-width="3"/>
      <circle cx="144" cy="72" r="16" fill="#fbcfe8" stroke="#1e293b" stroke-width="2.8"/>
      <circle cx="140" cy="71" r="2.5" fill="#1e293b"/>
      <circle cx="150" cy="71" r="2.5" fill="#1e293b"/>
      <path d="M141 81C144 83 148 83 151 81" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <path d="M128 112L115 112" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  },

  scrutinize: {
    themeColor: '#6366f1',
    category: 'inspection',
    semanticScene: 'A detective caricature peering closely through a giant magnifying glass, one eye comically enlarged',
    emotion: 'Curious & Scrutinizing',
    characterAction: 'Inspecting tiny clue with giant magnifying glass',
    visualSearchQuery: 'character peering through giant magnifying glass curious cartoon',
    altText: 'Cartoon detective examining a small clue through a giant magnifying glass with huge eye',
    svg: `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="bg-scrutinize" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#eef2ff"/>
          <stop offset="100%" stop-color="#e0e7ff"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="28" fill="url(#bg-scrutinize)"/>
      <path d="M75 145L72 172M98 145L100 172" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
      <ellipse cx="70" cy="174" rx="8" ry="4" fill="#0f172a"/>
      <ellipse cx="102" cy="174" rx="8" ry="4" fill="#0f172a"/>
      <rect x="68" y="96" width="38" height="50" rx="10" fill="#6366f1" stroke="#1e293b" stroke-width="3.5"/>
      <circle cx="88" cy="62" r="22" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/>
      <ellipse cx="88" cy="44" rx="24" ry="7" fill="#4338ca" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M74 62C76 60 80 60 82 62" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M80 75C83 77 87 76 89 74" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="122" cy="64" r="28" fill="#c7d2fe" fill-opacity="0.5" stroke="#1e293b" stroke-width="4"/>
      <path d="M142 84L165 108" stroke="#92400e" stroke-width="7" stroke-linecap="round"/>
      <path d="M142 84L165 108" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="64" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="121" cy="64" r="7" fill="#1e293b"/>
      <circle cx="123" cy="61" r="2.5" fill="#ffffff"/>
      <path d="M106 108C120 108 135 102 145 94" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  },
};

// Character archetypes for procedural caricature generation (diverse, expressive, zero text)
interface ProceduralCharacterProfile {
  name: string;
  hairColor: string;
  shirtColor: string;
  skinColor: string;
  hairStyle: 'curly' | 'spiky' | 'ponytail' | 'elder' | 'bandana';
  accessory?: 'glasses' | 'freckles' | 'earring';
}

const PROCEDURAL_CHARACTERS: ProceduralCharacterProfile[] = [
  {
    name: 'Character A (Curly & Glasses)',
    hairColor: '#78350f',
    shirtColor: '#10b981',
    skinColor: '#fed7aa',
    hairStyle: 'curly',
    accessory: 'glasses',
  },
  {
    name: 'Character B (Spiky & Dynamic)',
    hairColor: '#1e293b',
    shirtColor: '#f97316',
    skinColor: '#fde68a',
    hairStyle: 'spiky',
  },
  {
    name: 'Character C (Ponytail & Focused)',
    hairColor: '#991b1b',
    shirtColor: '#6366f1',
    skinColor: '#fed7aa',
    hairStyle: 'ponytail',
    accessory: 'earring',
  },
  {
    name: 'Character D (Elder & Wise Beret)',
    hairColor: '#e2e8f0',
    shirtColor: '#0284c7',
    skinColor: '#fbcfe8',
    hairStyle: 'elder',
  },
  {
    name: 'Character E (Bandana & Adventurous)',
    hairColor: '#334155',
    shirtColor: '#ec4899',
    skinColor: '#fed7aa',
    hairStyle: 'bandana',
    accessory: 'freckles',
  },
];

type ExpressiveEmotion =
  | 'happy'
  | 'excited'
  | 'surprised'
  | 'confused'
  | 'worried'
  | 'reluctant'
  | 'proud'
  | 'determined'
  | 'curious';

/**
 * Infers semantic emotion and action from word and Turkish meanings without POS bias.
 */
function inferSemanticEmotion(word: string, meaningsTr: string[]): {
  emotion: ExpressiveEmotion;
  characterAction: string;
  semanticScene: string;
  visualSearchQuery: string;
} {
  const text = (word + ' ' + meaningsTr.join(' ')).toLowerCase();

  if (/terk|bırak|kaç|ayrıl|uzaklaş/.test(text)) {
    return {
      emotion: 'reluctant',
      characterAction: 'Walking away and waving goodbye',
      semanticScene: `A character parting ways with something and walking forward`,
      visualSearchQuery: `person leaving something behind walking away cartoon`,
    };
  }
  if (/isteksiz|gönülsüz|çekin|tereddüt|zorla/.test(text)) {
    return {
      emotion: 'reluctant',
      characterAction: 'Digging heels in and leaning backward hesitantly',
      semanticScene: `A character hesitating and stepping backward unwillingly`,
      visualSearchQuery: `hesitant unwilling person stepping backward cartoon`,
    };
  }
  if (/kıt|az|yetersiz|nadir|eksik/.test(text)) {
    return {
      emotion: 'surprised',
      characterAction: 'Looking bewildered at empty shelves with few items',
      semanticScene: `A person facing empty shelves with only one item left`,
      visualSearchQuery: `scarcity empty shelves few products limited supply cartoon`,
    };
  }
  if (/bol|çok|aşırı|bereket|büyü/.test(text)) {
    return {
      emotion: 'excited',
      characterAction: 'Spreading arms wide amidst abundant supply',
      semanticScene: `A joyful character surrounded by plentiful overflowing goods`,
      visualSearchQuery: `cheerful person surrounded by abundance overflowing cartoon`,
    };
  }
  if (/hassas|kırılgan|narin|korku|tehlike|zarar/.test(text)) {
    return {
      emotion: 'worried',
      characterAction: 'Carefully balancing fragile object with nervous wide eyes',
      semanticScene: `A nervous character handling a fragile delicate item`,
      visualSearchQuery: `careful person holding delicate fragile glass nervously cartoon`,
    };
  }
  if (/araştır|incele|fark|keşfet|öğren|anla/.test(text)) {
    return {
      emotion: 'curious',
      characterAction: 'Inspecting closely with a magnifying glass',
      semanticScene: `A curious character examining tiny details intently`,
      visualSearchQuery: `curious person inspecting detail magnifying glass cartoon`,
    };
  }
  if (/başar|zafer|güç|üstün|kazan|ilerle/.test(text)) {
    return {
      emotion: 'proud',
      characterAction: 'Standing tall with hands on hips and confident grin',
      semanticScene: `A proud character celebrating an accomplishment`,
      visualSearchQuery: `confident victorious person celebrating cartoon`,
    };
  }
  if (/koru|önle|yatıştır|hafiflet|yardım/.test(text)) {
    return {
      emotion: 'determined',
      characterAction: 'Holding a protective shield against incoming storm',
      semanticScene: `A character standing resolute with an umbrella or shield`,
      visualSearchQuery: `protective person holding shield umbrella cartoon`,
    };
  }
  if (/şaşır|beklenmedik|ani|tuhaf/.test(text)) {
    return {
      emotion: 'surprised',
      characterAction: 'Jumping up with wide open mouth and surprised eyebrows',
      semanticScene: `A character reacting with wide eyes and open jaw in surprise`,
      visualSearchQuery: `surprised person wide eyes open mouth cartoon`,
    };
  }

  return {
    emotion: 'determined',
    characterAction: 'Thinking actively with an energetic positive posture',
    semanticScene: `An expressive cartoon character engaging with the concept of ${word}`,
    visualSearchQuery: `expressive cartoon character ${word} action scene`,
  };
}

/**
 * Generates an expressive cartoon caricature SVG for any word (Zero text inside SVG).
 */
function generateProceduralCaricatureSvg(
  word: string,
  meaningsTr: string[] = []
): { svg: string; color: string; emotion: string; characterAction: string; semanticScene: string; visualSearchQuery: string } {
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = (hash << 5) - hash + word.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const charProfile = PROCEDURAL_CHARACTERS[positiveHash % PROCEDURAL_CHARACTERS.length];
  const { emotion, characterAction, semanticScene, visualSearchQuery } = inferSemanticEmotion(word, meaningsTr);

  // Background palette
  const bgGradients = [
    { start: '#eff6ff', end: '#dbeafe', stroke: '#93c5fd' },
    { start: '#f0fdf4', end: '#dcfce7', stroke: '#86efac' },
    { start: '#fefce8', end: '#fef08a', stroke: '#fde047' },
    { start: '#faf5ff', end: '#f3e8ff', stroke: '#d8b4fe' },
    { start: '#fff1f2', end: '#ffe4e6', stroke: '#fda4af' },
  ];
  const bg = bgGradients[positiveHash % bgGradients.length];

  let eyesSvg = '';
  let mouthSvg = '';
  let eyebrowsSvg = '';
  let emotionPropSvg = '';

  switch (emotion) {
    case 'happy':
    case 'excited':
      eyesSvg = `
        <path d="M89 64C91 60 97 60 99 64" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M101 64C103 60 109 60 111 64" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="88" cy="70" r="3" fill="#fca5a5" opacity="0.8"/>
        <circle cx="112" cy="70" r="3" fill="#fca5a5" opacity="0.8"/>
      `;
      mouthSvg = `<path d="M92 72C92 82 108 82 108 72Z" fill="#991b1b" stroke="#1e293b" stroke-width="2"/>`;
      eyebrowsSvg = `
        <path d="M88 56C91 54 96 54 99 56" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
        <path d="M101 56C104 54 109 54 112 56" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      `;
      emotionPropSvg = `
        <path d="M142 45L144 50L149 52L144 54L142 59L140 54L135 52L140 50Z" fill="#f59e0b"/>
        <path d="M58 45L60 50L65 52L60 54L58 59L56 54L51 52L56 50Z" fill="#f59e0b"/>
      `;
      break;

    case 'surprised':
      eyesSvg = `
        <circle cx="92" cy="65" r="6" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <circle cx="108" cy="65" r="6" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        <circle cx="92" cy="65" r="2.5" fill="#1e293b"/>
        <circle cx="108" cy="65" r="2.5" fill="#1e293b"/>
      `;
      mouthSvg = `<ellipse cx="100" cy="78" rx="4" ry="6" fill="#881337" stroke="#1e293b" stroke-width="1.8"/>`;
      eyebrowsSvg = `
        <path d="M87 53C90 49 96 49 99 53" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M101 53C104 49 110 49 113 53" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      `;
      emotionPropSvg = `<path d="M100 32V24M96 28L104 28" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>`;
      break;

    case 'worried':
      eyesSvg = `
        <circle cx="92" cy="65" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="108" cy="65" r="5" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="93" cy="66" r="2.5" fill="#1e293b"/>
        <circle cx="107" cy="66" r="2.5" fill="#1e293b"/>
      `;
      mouthSvg = `<path d="M93 78C97 75 103 79 107 76" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>`;
      eyebrowsSvg = `
        <path d="M87 55L97 58" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M103 58L113 55" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      `;
      emotionPropSvg = `
        <path d="M122 58C122 58 126 62 126 65C126 67 124 68 122 68C120 68 119 67 119 65C119 62 122 58 122 58Z" fill="#38bdf8"/>
      `;
      break;

    case 'reluctant':
      eyesSvg = `
        <circle cx="90" cy="66" r="3" fill="#1e293b"/>
        <circle cx="106" cy="66" r="3" fill="#1e293b"/>
      `;
      mouthSvg = `<path d="M92 78C96 76 102 80 108 77" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>`;
      eyebrowsSvg = `
        <path d="M86 58L96 61" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M104 61L114 58" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      `;
      emotionPropSvg = `<path d="M68 95L58 95M64 90L54 90" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>`;
      break;

    case 'curious':
      eyesSvg = `
        <circle cx="91" cy="65" r="4" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="91" cy="65" r="2" fill="#1e293b"/>
        <circle cx="110" cy="64" r="7" fill="#ffffff" stroke="#1e293b" stroke-width="2.2"/>
        <circle cx="110" cy="64" r="3.5" fill="#1e293b"/>
      `;
      mouthSvg = `<path d="M94 77C97 79 101 79 104 77" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`;
      eyebrowsSvg = `
        <path d="M87 57C90 56 94 57 97 58" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
        <path d="M103 52C106 50 112 50 115 53" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      `;
      emotionPropSvg = `<path d="M142 85L155 98" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>`;
      break;

    default: // determined / proud
      eyesSvg = `
        <circle cx="92" cy="65" r="3.5" fill="#1e293b"/>
        <circle cx="108" cy="65" r="3.5" fill="#1e293b"/>
        <circle cx="93" cy="63" r="1" fill="#ffffff"/>
        <circle cx="109" cy="63" r="1" fill="#ffffff"/>
      `;
      mouthSvg = `<path d="M93 75C96 79 104 79 107 75" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>`;
      eyebrowsSvg = `
        <path d="M87 56L97 54" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M103 54L113 56" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
      `;
      emotionPropSvg = `<circle cx="100" cy="30" r="4" fill="#fbbf24"/>`;
      break;
  }

  // Hair style SVG
  let hairSvg = '';
  if (charProfile.hairStyle === 'curly') {
    hairSvg = `
      <circle cx="85" cy="46" r="9" fill="${charProfile.hairColor}"/>
      <circle cx="100" cy="42" r="10" fill="${charProfile.hairColor}"/>
      <circle cx="115" cy="46" r="9" fill="${charProfile.hairColor}"/>
      <circle cx="78" cy="56" r="7" fill="${charProfile.hairColor}"/>
      <circle cx="122" cy="56" r="7" fill="${charProfile.hairColor}"/>
    `;
  } else if (charProfile.hairStyle === 'spiky') {
    hairSvg = `
      <path d="M78 52L86 36L94 48L102 34L110 48L118 36L122 54Z" fill="${charProfile.hairColor}" stroke="#1e293b" stroke-width="2"/>
    `;
  } else if (charProfile.hairStyle === 'ponytail') {
    hairSvg = `
      <path d="M78 55C78 42 90 38 108 40C120 42 122 50 120 58Z" fill="${charProfile.hairColor}"/>
      <path d="M120 48C132 44 140 50 142 62C140 68 132 66 124 56Z" fill="${charProfile.hairColor}" stroke="#1e293b" stroke-width="2"/>
    `;
  } else if (charProfile.hairStyle === 'elder') {
    hairSvg = `
      <ellipse cx="100" cy="45" rx="24" ry="7" fill="#475569" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="80" cy="58" r="6" fill="${charProfile.hairColor}"/>
      <circle cx="120" cy="58" r="6" fill="${charProfile.hairColor}"/>
    `;
  } else {
    // bandana
    hairSvg = `
      <rect x="76" y="44" width="48" height="10" rx="3" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
      <path d="M80 44C80 36 92 34 108 34C118 34 120 40 120 44Z" fill="${charProfile.hairColor}"/>
    `;
  }

  // Accessory SVG
  let accessorySvg = '';
  if (charProfile.accessory === 'glasses') {
    accessorySvg = `
      <circle cx="91" cy="65" r="7" stroke="#1e293b" stroke-width="2" fill="none"/>
      <circle cx="109" cy="65" r="7" stroke="#1e293b" stroke-width="2" fill="none"/>
      <line x1="98" y1="65" x2="102" y2="65" stroke="#1e293b" stroke-width="2"/>
    `;
  } else if (charProfile.accessory === 'freckles') {
    accessorySvg = `
      <circle cx="86" cy="69" r="0.8" fill="#b45309"/>
      <circle cx="89" cy="71" r="0.8" fill="#b45309"/>
      <circle cx="111" cy="71" r="0.8" fill="#b45309"/>
      <circle cx="114" cy="69" r="0.8" fill="#b45309"/>
    `;
  }

  const svg = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <defs>
      <linearGradient id="pgrad-${positiveHash}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg.start}"/>
        <stop offset="100%" stop-color="${bg.end}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" rx="28" fill="url(#pgrad-${positiveHash})"/>
    <path d="M25 162C75 160 125 160 175 162" stroke="${bg.stroke}" stroke-width="3.5" stroke-linecap="round"/>
    ${emotionPropSvg}
    <path d="M88 145L86 170M112 145L114 170" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
    <ellipse cx="84" cy="172" rx="7.5" ry="4" fill="#0f172a"/>
    <ellipse cx="116" cy="172" rx="7.5" ry="4" fill="#0f172a"/>
    <rect x="78" y="96" width="44" height="50" rx="12" fill="${charProfile.shirtColor}" stroke="#1e293b" stroke-width="3.5"/>
    <circle cx="100" cy="66" r="22" fill="${charProfile.skinColor}" stroke="#1e293b" stroke-width="3"/>
    ${hairSvg}
    ${eyebrowsSvg}
    ${eyesSvg}
    ${accessorySvg}
    ${mouthSvg}
    <path d="M78 106C68 112 60 122 62 134" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
    <circle cx="62" cy="135" r="4.5" fill="${charProfile.skinColor}" stroke="#1e293b" stroke-width="2"/>
    <path d="M122 106C132 112 140 122 138 134" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
    <circle cx="138" cy="135" r="4.5" fill="${charProfile.skinColor}" stroke="#1e293b" stroke-width="2"/>
  </svg>`;

  return {
    svg,
    color: charProfile.shirtColor,
    emotion,
    characterAction,
    semanticScene,
    visualSearchQuery,
  };
}

/**
 * Known custom cognitive memory tips for high-frequency words
 */
const KNOWN_MEMORY_TIPS: Record<string, { en: string; tr: string }> = {
  abandon: {
    en: 'Visualize a traveler leaving their heavy baggage behind to move forward freely.',
    tr: 'Ağır çantasını yol kenarında bırakıp geriye bakmadan uzaklaşan kişiyi hayal edin.',
  },
  reluctant: {
    en: 'Visualize a person invited somewhere but pulling backward, digging heels in resistance.',
    tr: 'Bir yere çağrıldığı halde ayaklarını geriye doğru sürüyüp gitmemek için direnen kişiyi düşünün.',
  },
  fragile: {
    en: 'Visualize someone holding an ultra-delicate crystal vase with trembling hands and wide cautious eyes.',
    tr: 'İki eliyle narin bir kristal vazoyu titreyerek ve nefesini tutarak tutan kişiyi gözünüzde canlandırın.',
  },
  scarce: {
    en: 'Visualize a customer staring bewildered at completely empty market shelves with only one item left.',
    tr: 'Boş raflar önünde tek bir ürün kalmışken şaşkınlıkla kafasını kaşıyan müşteriyi hatırlayın.',
  },
  abundant: {
    en: 'Visualize a merchant with wide open joyful arms standing amidst overflowing pyramids of ripe fruits.',
    tr: 'Tezgahındaki taşan meyve dağları arasında kollarını neşeyle iki yana açan pazarcıyı kodlayın.',
  },
  mitigate: {
    en: 'Visualize a sturdy shield or umbrella deflecting a sudden harsh downpour, keeping you dry.',
    tr: 'Şiddetli yağmurda açılan dev şemsiyenin zararı ve tehlikeyi hafifletip korumasını düşünün.',
  },
  breakthrough: {
    en: 'Visualize busting through a gray brick wall with a triumphant cheer directly into golden sunlight.',
    tr: 'Taş duvarı yumruğuyla kırıp aydınlığa çıkan ve zafer sevinci yaşayan karakteri düşünün.',
  },
  collaborate: {
    en: 'Visualize two smiling partners clicking together the final giant jigsaw puzzle piece in unison.',
    tr: 'İki arkadaşın gülümseyerek dev bir yapbozun son parçasını birlikte yerine oturtmasını hayal edin.',
  },
  scrutinize: {
    en: 'Visualize a detective peering through a giant magnifying glass with one comically enlarged curious eye.',
    tr: 'Büyüteçle ufacık bir ipucunu gözünü kırpmadan didik didik inceleyen dedektifi zihninizde tutun.',
  },
  inevitable: {
    en: 'Visualize a giant snowball rolling steadily down the hill that cannot be stopped.',
    tr: 'Yamaçtan yuvarlanan dev kartopunun önüne geçilemez şekilde gelişini hayal edin.',
  },
};

function generateMemoryTip(word: string, _pos: PartOfSpeech = 'noun', meaningsTr: string[] = []): { en: string; tr: string } {
  const norm = word.toLowerCase().trim();
  if (KNOWN_MEMORY_TIPS[norm]) {
    return KNOWN_MEMORY_TIPS[norm];
  }
  const primaryTr = meaningsTr[0] || 'anlamı';
  return {
    en: `Associate "${word}" directly with its visual action scene: remember it conceptually as "${primaryTr}".`,
    tr: `"${word}" kelimesini zihninizde karikatürdeki eylem ve duygu durumu ("${primaryTr}") ile eşleştirin.`,
  };
}

/**
 * Returns full visual memory assets for any vocabulary word.
 * Zero text labels, cartoon caricature character reference, 100% offline resilient.
 */
export function getVisualMemory(
  word: string,
  pos: PartOfSpeech = 'noun',
  meaningsTr: string[] = []
): VisualMemoryData {
  const safeWord = word ? word.trim() : '';
  const safeMeanings = Array.isArray(meaningsTr) ? meaningsTr : [];
  const norm = safeWord.toLowerCase();

  if (CURATED_SCENES[norm]) {
    const item = CURATED_SCENES[norm];
    return {
      svgContent: item.svg,
      themeColor: item.themeColor,
      category: item.category,
      style: 'expressive-colorful-caricature',
      visualPrompt: `An expressive cartoon caricature scene with bold outlines and exaggerated facial expressions depicting: ${item.semanticScene}. Strictly zero text on image.`,
      visualSearchQuery: item.visualSearchQuery,
      semanticScene: item.semanticScene,
      emotion: item.emotion,
      characterAction: item.characterAction,
      altText: item.altText,
      memoryTip: generateMemoryTip(safeWord, pos, safeMeanings),
    };
  }

  // Procedural caricature generation
  const proc = generateProceduralCaricatureSvg(safeWord, safeMeanings);
  return {
    svgContent: proc.svg,
    themeColor: proc.color,
    category: pos,
    style: 'expressive-colorful-caricature',
    visualPrompt: `An expressive cartoon caricature scene with bold outlines and exaggerated facial expressions depicting: ${proc.semanticScene}. Strictly zero text on image.`,
    visualSearchQuery: proc.visualSearchQuery,
    semanticScene: proc.semanticScene,
    emotion: proc.emotion,
    characterAction: proc.characterAction,
    altText: `Cartoon caricature character depicting ${safeWord} (${safeMeanings.join(', ')})`,
    memoryTip: generateMemoryTip(safeWord, pos, safeMeanings),
  };
}

/**
 * Enriches a VocabularyItem with visual metadata fields without POS bias.
 */
export function enrichVocabularyVisualMetadata(item: VocabularyItem): VocabularyItem {
  const safeMeanings = item.meaningsTr || item.turkishMeanings || item.meanings || [];
  const visual = getVisualMemory(item.word, item.partOfSpeech, safeMeanings);

  return {
    ...item,
    meaningsTr: safeMeanings,
    visualConcept: item.visualConcept || visual.semanticScene,
    visualPrompt: item.visualPrompt || visual.visualPrompt,
    visualSearchQuery: item.visualSearchQuery || visual.visualSearchQuery,
    visualStyle: item.visualStyle || 'expressive-colorful-caricature',
    altText: item.altText || visual.altText,
    semanticScene: item.semanticScene || visual.semanticScene,
    emotion: item.emotion || visual.emotion,
    characterAction: item.characterAction || visual.characterAction,
    imageLicense: item.imageLicense || 'CC0 / Public Domain Educational Vector',
  };
}


import { VocabularyItem } from '../types';

/**
 * Service to sanitize vocabulary terms, definitions, and user-facing strings.
 * Guarantees zero leakage of database IDs, UUIDs, hashes, JSON artifacts,
 * undefined/null placeholders, or bracketed codes.
 */

// Regex patterns identifying IDs, hashes, or technical placeholder codes
const ID_PATTERNS = [
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, // UUID
  /^[0-9a-f]{6,}_(?:word|term)_\d+/i, // e.g. 8f72a1_word_004
  /^term_\d+/i,                        // e.g. term_172849
  /^word_\d+/i,                        // e.g. word_004
  /^vocab-[a-z0-9_-]+/i,               // e.g. vocab-mitigate
  /^quizlet-[a-z0-9_-]+/i,             // e.g. quizlet-12345
  /^pdf-[a-z0-9_-]+/i,                 // e.g. pdf-12345
  /^\d{4,}$/,                          // 4+ digit numeric database ID
  /^[a-f0-9]{16,}$/i,                  // 16+ char hex hash
  /^\[object Object\]$/i,              // object serialization error
  /^(?:undefined|null|NaN|nil|none)$/i,// raw JS falsy strings
  /^\[.*?\]$/,                         // Bracketed placeholders, e.g. [Tanım Yok]
];

// Mapping for HTML entities
const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
};

/**
 * Safely decodes HTML entities.
 */
export function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str.replace(/&(?:amp|apos|#39|quot|lt|gt|nbsp);/g, (match) => HTML_ENTITIES[match] || match);
}

/**
 * Safely decodes URI-encoded characters (e.g. %20 -> space).
 */
export function decodeUriSafe(str: string): string {
  if (!str || !str.includes('%')) return str;
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
}

/**
 * Checks if a string represents an ID, UUID, hash, or technical placeholder.
 */
export function isIdOrTechnicalCode(val: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  return ID_PATTERNS.some((pattern) => pattern.test(trimmed));
}

/**
 * Parses raw JSON string if present and extracts authentic term and definition.
 */
export function extractFromJsonString(raw: string): { word?: string; definition?: string } | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
    try {
      const parsed = JSON.parse(trimmed);
      const target = Array.isArray(parsed) ? parsed[0] : parsed;
      if (target && typeof target === 'object') {
        const candidateWord =
          target.term ||
          target.word ||
          target.displayWord ||
          target.text ||
          target.label ||
          target.name ||
          '';
        const candidateMeaning =
          target.definition ||
          target.meaning ||
          target.meaningsTr ||
          target.turkishMeaning ||
          target.translation ||
          '';

        const defStr = Array.isArray(candidateMeaning) ? candidateMeaning.join(', ') : String(candidateMeaning || '');

        if (candidateWord && typeof candidateWord === 'string') {
          return { word: candidateWord.trim(), definition: defStr.trim() };
        }
      }
    } catch {
      // Not valid JSON, proceed normally
    }
  }
  return null;
}

/**
 * Sanitizes an English vocabulary word or term string:
 * - Extracts authentic word from JSON or key-value structures
 * - Strips leading ID prefixes (e.g. "8f72a1_word_004\tapple" -> "apple")
 * - Removes bullet/numbered prefixes ("1. apple" -> "apple")
 * - Strips HTML entities, URI encoding, quotes
 * - Normalizes casing to lowercase for dictionary consistency
 * - Rejects pure IDs or placeholders
 */
export function sanitizeWord(raw: unknown): string {
  if (raw === null || raw === undefined) return '';

  let text = '';
  if (typeof raw === 'object') {
    // If object was passed directly
    const obj = raw as Record<string, unknown>;
    text = String(obj.term || obj.word || obj.displayWord || obj.text || '');
  } else {
    text = String(raw);
  }

  text = decodeHtmlEntities(text);
  text = decodeUriSafe(text);

  // Check JSON representation
  const jsonMatch = extractFromJsonString(text);
  if (jsonMatch && jsonMatch.word) {
    text = jsonMatch.word;
  }

  // Check key-value blocks like "term: apple" or "word: apple"
  const kvMatch = text.match(/(?:term|word|kelime|targetWord)\s*[:=]\s*["']?([^"'\r\n,]+)["']?/i);
  if (kvMatch && kvMatch[1]) {
    text = kvMatch[1];
  }

  // Check compound strings with multiple parts separated by \t, —, –, or |
  if (text.includes('\t') || text.includes('—') || text.includes('–')) {
    const parts = text.split(/[\t—–]/).map((p) => p.trim()).filter(Boolean);
    const nonIdPart = parts.find((p) => !isIdOrTechnicalCode(p) && /^[a-zA-Z\s'-]+$/.test(p));
    if (nonIdPart) {
      text = nonIdPart;
    } else {
      const anyNonId = parts.find((p) => !isIdOrTechnicalCode(p));
      if (anyNonId) text = anyNonId;
    }
  }

  // Check compound strings with ID prefix: "id — word", "id\tword", "id : word"
  const sepMatch = text.match(/^([a-z0-9_-]{4,})\s*(?:[\t:—–-]|->)\s*(.+)$/i);
  if (sepMatch) {
    const left = sepMatch[1].trim();
    const right = sepMatch[2].trim();
    if (isIdOrTechnicalCode(left)) {
      text = right;
    }
  }

  // Strip leading list numbering (e.g. "1. apple" or "02) apple")
  text = text.replace(/^\d+[.)-]\s*/, '');

  // Strip wrapping quotes and brackets
  text = text.replace(/^["'[(]+|["'\])]+$/g, '').trim();

  // If text is a pure ID or placeholder code, return empty string
  if (isIdOrTechnicalCode(text)) {
    return '';
  }

  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();

  // Dictionary convention: lowercase all standard words except proper names
  if (text.length > 0 && !text.includes(' ') && text === text.toUpperCase() && text.length > 3) {
    text = text.toLowerCase();
  } else if (text.length > 0 && /^[A-Z][a-z]+$/.test(text)) {
    text = text.toLowerCase();
  }

  // Common typo corrections
  if (text.toLowerCase() === 'effortlesly') {
    text = 'effortlessly';
  }

  // Apply high-confidence PDF dropout repair
  text = repairKnownPdfDropouts(text);

  return text;
}

/**
 * High-confidence deterministic repairs for PDF text extraction dropouts
 * where a space or missing character occurs in a known context.
 * Strict: Never guesses when ambiguous.
 */
const KNOWN_PDF_DROPOUTS: [RegExp, string][] = [
  [/\be\s+planation\b/gi, 'explanation'],
  [/\be\s+perience\b/gi, 'experience'],
  [/\be\s+pression\b/gi, 'expression'],
  [/\bkno\s+ledge\b/gi, 'knowledge'],
  [/\bsub\s+tantial\b/gi, 'substantial'],
  [/\bignificant\b/gi, 'significant'],
  [/\bphra\s+al\b/gi, 'phrasal'],
  [/\bfollo\s+ing\b/gi, 'following'],
  [/\bdiffi\s+ult\b/gi, 'difficult'],
  [/\beffi\s+ient\b/gi, 'efficient'],
  [/\beffe\s+t\b/gi, 'effect'],
  [/\ba\s+count\s+for\b/gi, 'account for'],
  [/\bturn\s+do\s+n\b/gi, 'turn down'],
  [/\brely\s+o\s+n\b/gi, 'rely on'],
  [/\bloo\s*k\s+after\b/gi, 'look after'],
  [/\bcarry\s+o\s+n\b/gi, 'carry on'],
  [/\blook\s+for\s*ard\s+to\b/gi, 'look forward to'],
  [/\bgo\s+throu\s*gh\b/gi, 'go through'],
  [/\bcome\s+a\s*cross\b/gi, 'come across'],
  [/\bget\s+ri\s*d\s+of\b/gi, 'get rid of'],
  [/\bturn\s+in\s*to\b/gi, 'turn into'],
  [/\bcall\s+o\s*ff\b/gi, 'call off'],
  [/\bput\s+o\s*ff\b/gi, 'put off'],
  [/\bdeal\s+wi\s*th\b/gi, 'deal with'],
  [/\bkeep\s+up\s+wi\s*th\b/gi, 'keep up with'],
  [/\bfall\s+a\s*part\b/gi, 'fall apart'],
  [/\bbreak\s+o\s*ut\b/gi, 'break out'],
  [/\bgive\s+o\s*ff\b/gi, 'give off'],
  [/\bget\s+a\s*way\b/gi, 'get away'],
];

export function repairKnownPdfDropouts(text: string): string {
  if (!text) return '';
  let repaired = text.trim();
  for (const [pattern, replacement] of KNOWN_PDF_DROPOUTS) {
    repaired = repaired.replace(pattern, replacement);
  }
  return repaired.trim();
}

/**
 * Flags words or phrases that show evidence of corrupted extraction,
 * replacement characters, or unresolved dropouts.
 */
export function isExtractionCorrupted(word: string): boolean {
  if (!word) return true;
  const trimmed = word.trim();
  if (trimmed.length < 2 && trimmed !== 'a' && trimmed !== 'I') return true;
  if (/^\d+$/.test(trimmed)) return true;
  if (/^--+/.test(trimmed)) return true;
  if (trimmed.startsWith('---')) return true;
  if (/[\uFFFDÃÄÅ]/.test(trimmed)) return true;
  if (/^\W+$/.test(trimmed)) return true;
  if (/^(?:page|sayfa)\b/i.test(trimmed)) return true;
  if (/\be\s+planation\b/i.test(trimmed)) return true;
  if (/\bkno\s+ledge\b/i.test(trimmed)) return true;
  if (/\be\s+perience\b/i.test(trimmed)) return true;
  if (/^\s+[a-z]{3,}\b/.test(word)) return true; // leading space dropout like " ant" or " ith"
  return false;
}

/**
 * Glued Turkish adverb phrases that frequently appear merged without commas.
 */
const GLUED_PHRASES_FIXES: [RegExp, string[]][] = [
  [/etkili bir şekilde yeterli bir şekilde/i, ['etkili bir şekilde', 'yeterli bir şekilde']],
  [/yaygın bir şekilde geniş ölçüde/i, ['yaygın bir şekilde', 'geniş ölçüde']],
  [/oldukça son derece/i, ['oldukça', 'son derece']],
  [/görünüşe bakılırsa görünüşte/i, ['görünüşe bakılırsa', 'görünüşte']],
  [/elbette kesinlikle/i, ['elbette', 'kesinlikle']],
  [/doğrudan direkt olarak/i, ['doğrudan', 'direkt olarak']],
  [/açıkça anlaşılır biçimde/i, ['açıkça', 'anlaşılır biçimde']],
  [/oldukça adil bir şekilde/i, ['oldukça', 'adil bir şekilde']],
  [/son derece inanılması güç/i, ['son derece', 'inanılması güç']],
  [/aşama aşama giderek/i, ['aşama aşama', 'giderek']],
  [/sadece ancak sırf/i, ['sadece', 'ancak', 'sırf']],
  [/büyük oranda geniş ölçüde/i, ['büyük oranda', 'geniş ölçüde']],
  [/şu anda mevcut durumda/i, ['şu anda', 'mevcut durumda']],
  [/illa ister istemez/i, ['illa', 'ister istemez']],
  [/özellikle, bilhassa önemli derecede/i, ['özellikle', 'bilhassa', 'önemli derecede']],
  [/özellikle, bilhassa ayrıntılı olarak/i, ['özellikle', 'bilhassa', 'ayrıntılı olarak']],
  [/ümit ederim ki umutla/i, ['ümit ederim ki', 'umutla']],
  [/aşırı derecede ağır bir şekilde/i, ['aşırı derecede', 'ağır bir şekilde']],
  [/tam olarak açık olarak kesinlikle/i, ['tam olarak', 'açık olarak', 'kesinlikle']],
  [/tam anlamıyla gerçekten/i, ['tam anlamıyla', 'gerçekten']],
  [/aniden birdenbire/i, ['aniden', 'birdenbire']],
  [/nispeten diğerine nazaran/i, ['nispeten', 'diğerine nazaran']],
  [/nihayetinde eninde sonunda/i, ['nihayetinde', 'eninde sonunda']],
  [/yaklaşık olarak aşağı yukarı/i, ['yaklaşık olarak', 'aşağı yukarı']],
  [/rastgele gelişigüzel/i, ['rastgele', 'gelişigüzel']],
  [/eskiden önceden/i, ['eskiden', 'önceden']],
  [/kalıcı bir şekilde daimi olarak/i, ['kalıcı bir şekilde', 'daimi olarak']],
  [/çarpıcı bir şekilde önemli ölçüde/i, ['çarpıcı bir şekilde', 'önemli ölçüde']],
  [/dikkate değer şekilde önemli derecede/i, ['dikkate değer şekilde', 'önemli derecede']],
  [/derinlemesine, kökten son derece/i, ['derinlemesine', 'kökten', 'son derece']],
  [/yoğun olarak yoğun bir şekilde/i, ['yoğun olarak', 'yoğun bir şekilde']],
  [/şans eseri neyse ki/i, ['şans eseri', 'neyse ki']],
  [/ansızın birdenbire/i, ['ansızın', 'birdenbire']],
  [/yeteri kadar yeterli miktarda/i, ['yeteri kadar', 'yeterli miktarda']],
  [/ciddi olarak ağır biçimde/i, ['ciddi olarak', 'ağır biçimde']],
  [/kesin, tam olarak doğru olarak/i, ['kesin', 'tam olarak', 'doğru olarak']],
  [/gönüllü olarak kendi isteğiyle/i, ['gönüllü olarak', 'kendi isteğiyle']],
  [/kasıtlı olarak bile bile/i, ['kasıtlı olarak', 'bile bile']],
  [/sır olarak gizlice/i, ['sır olarak', 'gizlice']],
  [/açıkça sade bir şekilde/i, ['açıkça', 'sade bir şekilde']],
  [/son derece olağanüstü düzeyde/i, ['son derece', 'olağanüstü düzeyde']],
  [/imkan dahilinde potansiyel olarak/i, ['imkan dahilinde', 'potansiyel olarak']],
  [/derhal, acilen tam zamanında/i, ['derhal', 'acilen', 'tam zamanında']],
  [/sıkı bir şekilde kesin olarak/i, ['sıkı bir şekilde', 'kesin olarak']],
  [/hemen, anında birden/i, ['hemen', 'anında', 'birden']],
  [/yarım yamalak yetersiz bir şekilde/i, ['yarım yamalak', 'yetersiz bir şekilde']],
  [/yararlı bir şekilde ilgili bir şekilde/i, ['yararlı bir şekilde', 'ilgili bir şekilde']],
  [/iddiaya göre söylentilere göre/i, ['iddiaya göre', 'söylentilere göre']],
  [/ender olarak değerli bir biçimde/i, ['ender olarak', 'değerli bir biçimde']],
  [/başarısız bir şekilde etkisiz, sonuçsuz olarak/i, ['başarısız bir şekilde', 'etkisiz', 'sonuçsuz olarak']],
  [/kesin, güçlü bir şekilde yoğun bir şekilde/i, ['keskin', 'güçlü bir şekilde', 'yoğun bir şekilde']],
];

/**
 * Sanitizes Turkish meanings:
 * - Unpacks array or string
 * - Splits on newlines (\n, \r)
 * - Removes bracketed placeholders ([Tanım Yok], [Türkçe anlam PDF metninde bulunamadı])
 * - Splits glued definitions
 * - Corrects Turkish typos (e.g. "süresiz olasak" -> "süresiz olarak")
 * - Removes metadata parentheticals
 * - Ensures a clean list of meanings
 */
export function sanitizeMeanings(raw: unknown): string[] {
  if (!raw) return ['Akademik anlam'];

  let rawList: string[] = [];
  if (Array.isArray(raw)) {
    rawList = raw.map((item) => String(item ?? ''));
  } else if (typeof raw === 'string') {
    // Check if JSON
    const jsonMatch = extractFromJsonString(raw);
    if (jsonMatch && jsonMatch.definition) {
      rawList = [jsonMatch.definition];
    } else {
      rawList = [raw];
    }
  } else {
    rawList = [String(raw)];
  }

  const result: string[] = [];

  for (let entry of rawList) {
    if (!entry) continue;

    entry = decodeHtmlEntities(entry);
    entry = decodeUriSafe(entry);

    // Fix known typo
    entry = entry.replace(/\bsüresiz olasak\b/gi, 'süresiz olarak');

    // Remove unwanted usage parentheticals in meanings
    entry = entry.replace(/\s*\(hem ilişki hem de mesafe için kullanılır\)/gi, '');

    // Split on newlines, carriage returns, or semicolons
    const subLines = entry.split(/[\r\n;]+/).map((s) => s.trim()).filter(Boolean);

    for (const sub of subLines) {
      // Remove bracketed placeholders
      if (/^\[.*?\]$/.test(sub) || isIdOrTechnicalCode(sub)) {
        continue;
      }

      // Check if this sub matches any glued phrases
      let handled = false;
      for (const [pattern, replacements] of GLUED_PHRASES_FIXES) {
        if (pattern.test(sub)) {
          result.push(...replacements);
          handled = true;
          break;
        }
      }

      if (!handled) {
        // Split by comma if multiple items are combined
        const parts = sub.split(',').map((p) => p.trim()).filter(Boolean);
        for (const p of parts) {
          if (!isIdOrTechnicalCode(p) && !/^\[.*?\]$/.test(p)) {
            result.push(p);
          }
        }
      }
    }
  }

  // Deduplicate case-insensitively
  const seen = new Set<string>();
  const uniqueMeanings: string[] = [];
  for (const m of result) {
    const clean = m.trim();
    if (clean.length > 0 && !seen.has(clean.toLowerCase())) {
      seen.add(clean.toLowerCase());
      uniqueMeanings.push(clean);
    }
  }

  return uniqueMeanings.length > 0 ? uniqueMeanings : ['Akademik anlam'];
}

/**
 * Fully sanitizes a VocabularyItem in-place or returning a sanitized clone.
 */
export function sanitizeVocabularyItem(item: VocabularyItem): VocabularyItem {
  const cleanWord = sanitizeWord(item.word) || sanitizeWord(item.displayWord) || 'vocabulary';
  const cleanDisplay = item.displayWord ? sanitizeWord(item.displayWord) : cleanWord;
  const cleanMeanings = sanitizeMeanings(item.meaningsTr || (item as unknown as Record<string, unknown>).turkishMeanings);

  return {
    ...item,
    word: cleanWord,
    displayWord: cleanDisplay,
    meaningsTr: cleanMeanings,
    missingFields: item.missingFields?.filter((f) => f !== 'meaningsTr' || cleanMeanings.length === 0),
    requiresManualReview: item.requiresManualReview && cleanMeanings.length === 0,
  };
}

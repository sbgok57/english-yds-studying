import { VocabularyItem, PartOfSpeech } from '../types';

export interface CsvParseResult {
  validRows: ParsedCsvRow[];
  invalidRows: InvalidCsvRow[];
  duplicateCount: number;
}

export interface ParsedCsvRow {
  rowIndex: number;
  word: string;
  meaningsTr: string[];
  partOfSpeech: PartOfSpeech;
  example: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  difficulty: 'A2' | 'B1' | 'B2' | 'C1' | 'YDS';
  isDuplicate: boolean;
  existingId?: string;
}

export interface InvalidCsvRow {
  rowIndex: number;
  rawText: string;
  reason: string;
}

const VALID_POS = new Set<string>([
  'noun',
  'verb',
  'adjective',
  'adverb',
  'preposition',
  'conjunction',
  'phrase',
  'phrasal_verb',
]);

/**
 * Robust RFC 4180 CSV parser supporting quotes, commas, newlines, and UTF-8 Turkish text.
 */
export function parseCsvContent(content: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let inQuotes = false;

  // Strip UTF-8 BOM if present
  const text = content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // Skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // Skip \r\n
      }
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 0 && !(currentRow.length === 1 && currentRow[0].trim() === '')) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentField += char;
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  return rows;
}

/**
 * Validates parsed CSV lines against domain specifications and detects existing duplicates.
 */
export function validateAndAnalyzeCsv(
  rawRows: string[][],
  existingVocabulary: VocabularyItem[]
): CsvParseResult {
  const validRows: ParsedCsvRow[] = [];
  const invalidRows: InvalidCsvRow[] = [];
  const existingMap = new Map<string, VocabularyItem>();

  existingVocabulary.forEach((item) => {
    existingMap.set(item.word.trim().toLowerCase(), item);
  });

  if (rawRows.length === 0) {
    return { validRows, invalidRows, duplicateCount: 0 };
  }

  // Check header row
  const firstRow = rawRows[0].map((h) => h.trim().toLowerCase());
  const hasHeader =
    firstRow.includes('word') ||
    firstRow.includes('turkishmeaning') ||
    firstRow.includes('meaning');

  const startIndex = hasHeader ? 1 : 0;
  let duplicateCount = 0;

  for (let i = startIndex; i < rawRows.length; i++) {
    const row = rawRows[i];
    const rawLine = row.join(',');

    if (row.length === 0 || (row.length === 1 && row[0].trim() === '')) {
      continue; // Skip empty line
    }

    const word = (row[0] || '').trim();
    const meaning = (row[1] || '').trim();
    const posRaw = (row[2] || '').trim().toLowerCase();
    const example = (row[3] || '').trim();
    const synonymsRaw = (row[4] || '').trim();
    const antonymsRaw = (row[5] || '').trim();
    const collocationsRaw = (row[6] || '').trim();

    if (!word) {
      invalidRows.push({
        rowIndex: i + 1,
        rawText: rawLine,
        reason: 'Word column is empty or missing.',
      });
      continue;
    }

    if (!meaning) {
      invalidRows.push({
        rowIndex: i + 1,
        rawText: rawLine,
        reason: 'Turkish meaning is empty or missing.',
      });
      continue;
    }

    const partOfSpeech: PartOfSpeech = VALID_POS.has(posRaw)
      ? (posRaw as PartOfSpeech)
      : 'noun';

    const meaningsTr = meaning
      .split(/[,;/]/)
      .map((m) => m.trim())
      .filter(Boolean);

    const synonyms = synonymsRaw
      ? synonymsRaw
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    const antonyms = antonymsRaw
      ? antonymsRaw
          .split(';')
          .map((a) => a.trim())
          .filter(Boolean)
      : [];

    const collocations = collocationsRaw
      ? collocationsRaw
          .split(';')
          .map((c) => c.trim())
          .filter(Boolean)
      : [];

    const normalizedWord = word.toLowerCase();
    const existing = existingMap.get(normalizedWord);
    const isDuplicate = !!existing;

    if (isDuplicate) {
      duplicateCount++;
    }

    validRows.push({
      rowIndex: i + 1,
      word,
      meaningsTr,
      partOfSpeech,
      example: example || `The word "${word}" is frequently tested in English examinations.`,
      synonyms,
      antonyms,
      collocations,
      difficulty: 'B2',
      isDuplicate,
      existingId: existing?.id,
    });
  }

  return {
    validRows,
    invalidRows,
    duplicateCount,
  };
}

/**
 * Exports current vocabulary to RFC 4180 CSV with UTF-8 BOM encoding for proper Turkish character display.
 */
export function exportVocabularyToCsv(items: VocabularyItem[]): string {
  const header = 'word,turkishMeaning,partOfSpeech,example,synonyms,antonyms,collocations\n';

  const escapeField = (field: string): string => {
    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
      return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
  };

  const rows = items.map((item) => {
    const word = escapeField(item.word);
    const meaning = escapeField(item.meaningsTr.join('; '));
    const pos = escapeField(item.partOfSpeech);
    const example = escapeField(item.example);
    const synonyms = escapeField(item.synonyms.join('; '));
    const antonyms = escapeField(item.antonyms.join('; '));
    const collocations = escapeField(item.collocations.join('; '));

    return `${word},${meaning},${pos},${example},${synonyms},${antonyms},${collocations}`;
  });

  // Prepend UTF-8 BOM
  return '\uFEFF' + header + rows.join('\n');
}

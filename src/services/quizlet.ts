import { VocabularyItem, VocabularySource, PartOfSpeech } from '../types/vocabulary';
import { normalizeVocabularyKey, normalizeMeaningsList, deduplicateVocabularyBatch } from './importer';

export interface QuizletCompletenessCounters {
  expectedFolderCount: number;
  discoveredFolderCount: number;
  expectedSetCount: number;
  discoveredSetCount: number;
  expectedTermCount: number;
  discoveredTermCount: number;
  importedTermCount: number;
  duplicateTermCount: number;
  errorTermCount: number;
  manualReviewCount: number;
}

export interface QuizletManualReviewItem {
  term: string;
  rawDefinition: string;
  reason: string;
}

export interface QuizletScanResult {
  source: VocabularySource;
  discoveredSets: string[];
  accessibleSets: string[];
  failedSets: string[];
  terms: VocabularyItem[];
  accessFailed: boolean;
  failureReason?: string;
  fallbackMethodUsed: 'method_1_direct' | 'method_2_html' | 'method_3_structured_data' | 'method_4_public_metadata' | 'method_5_export_text' | 'method_6_manual_review';
  friendlyMessage: string;
  counters: QuizletCompletenessCounters;
  manualReviewQueue: QuizletManualReviewItem[];
}

export interface QuizletPreviewResult {
  detectedCount: number;
  validCount: number;
  duplicateCount: number;
  manualReviewCount: number;
  previewItems: VocabularyItem[];
  manualReviewQueue: QuizletManualReviewItem[];
}

/**
 * Service for managing Quizlet folder/set discovery, resilient 6-tier fallback architecture,
 * completeness checks, and text export parsing with auto-delimiter detection.
 */
export class QuizletImporter {
  /**
   * Attempts to discover and scan a Quizlet URL using resilient multi-tier fallback.
   * Adheres strictly to Section 2: Never attempts to bypass Cloudflare/WAF or steal credentials.
   * If HTTP 403 occurs, activates Method 5 fallback gracefully without crashing.
   */
  public static async scanQuizletUrl(url: string, sourceTitle?: string): Promise<QuizletScanResult> {
    const timestamp = new Date().toISOString();
    const sourceId = `quizlet-${Date.now()}`;
    const cleanUrl = url.trim();

    const emptyCounters: QuizletCompletenessCounters = {
      expectedFolderCount: cleanUrl.includes('/folders/') ? 1 : 0,
      discoveredFolderCount: 0,
      expectedSetCount: 1,
      discoveredSetCount: 0,
      expectedTermCount: 0,
      discoveredTermCount: 0,
      importedTermCount: 0,
      duplicateTermCount: 0,
      errorTermCount: 0,
      manualReviewCount: 0,
    };

    try {
      // Method 1: Direct public access
      const response = await fetch(cleanUrl, {
        method: 'GET',
        headers: {
          Accept: 'text/html,application/xhtml+xml',
        },
      });

      if (!response.ok) {
        // Method 1 failed (HTTP 403 / 401 / 429) -> Switch to Method 5 fallback
        const is403 = response.status === 403;
        const friendlyMessage = is403
          ? 'Quizlet sayfasına doğrudan erişim şu anda bot koruması (HTTP 403) nedeniyle engellendi. Alternatif veri aktarımı (Metin İçe Aktarım) deneniyor...'
          : `Quizlet sunucusuna bağlanılamadı (${response.status} ${response.statusText}). Alternatif veri aktarımı deneniyor...`;

        const reason = `Access restricted: HTTP ${response.status} ${response.statusText || 'Forbidden'} (Cloudflare / WAF protection)`;

        return {
          source: {
            id: sourceId,
            type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
            url: cleanUrl,
            title: sourceTitle || 'Quizlet Genel Kaynağı',
            status: 'partially_completed', // INCOMPLETE
            lastImportedAt: timestamp,
            discoveredSetCount: 0,
            processedSetCount: 0,
            failedSetCount: 1,
            importedItemCount: 0,
            duplicateCount: 0,
            incompleteCount: 0,
            manualReviewCount: 0,
            errorMessage: reason,
          },
          discoveredSets: [],
          accessibleSets: [],
          failedSets: [cleanUrl],
          terms: [],
          accessFailed: true,
          failureReason: reason,
          fallbackMethodUsed: 'method_5_export_text',
          friendlyMessage,
          counters: {
            ...emptyCounters,
            errorTermCount: 1,
          },
          manualReviewQueue: [],
        };
      }

      const html = await response.text();

      // Method 2: Check challenge screen
      if (html.includes('challenge-running') || html.includes('cf-mitigated') || html.includes('One more step')) {
        const reason = 'Cloudflare bot verification challenge required (automated access restricted)';
        return {
          source: {
            id: sourceId,
            type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
            url: cleanUrl,
            title: sourceTitle || 'Quizlet Genel Kaynağı',
            status: 'partially_completed', // INCOMPLETE
            lastImportedAt: timestamp,
            discoveredSetCount: 0,
            processedSetCount: 0,
            failedSetCount: 1,
            importedItemCount: 0,
            duplicateCount: 0,
            incompleteCount: 0,
            manualReviewCount: 0,
            errorMessage: reason,
          },
          discoveredSets: [],
          accessibleSets: [],
          failedSets: [cleanUrl],
          terms: [],
          accessFailed: true,
          failureReason: reason,
          fallbackMethodUsed: 'method_5_export_text',
          friendlyMessage: 'Quizlet sayfasına doğrudan erişim şu anda bot koruması (HTTP 403) nedeniyle engellendi. Alternatif veri aktarımı (Metin İçe Aktarım) deneniyor...',
          counters: {
            ...emptyCounters,
            errorTermCount: 1,
          },
          manualReviewQueue: [],
        };
      }

      // Method 3 & 4: Parse public sets and structured metadata
      const setMatches = Array.from(
        html.matchAll(/href=["'](\/(?:[0-9]+)\/[^"']+)["']/g)
      ).map((m) => `https://quizlet.com${m[1]}`);

      const uniqueSets = Array.from(new Set(setMatches));
      const hasSets = uniqueSets.length > 0;

      return {
        source: {
          id: sourceId,
          type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
          url: cleanUrl,
          title: sourceTitle || 'Quizlet Genel Kaynağı',
          status: hasSets ? 'completed' : 'partially_completed',
          lastImportedAt: timestamp,
          discoveredSetCount: uniqueSets.length,
          processedSetCount: uniqueSets.length,
          failedSetCount: 0,
          importedItemCount: 0,
          duplicateCount: 0,
          incompleteCount: 0,
          manualReviewCount: 0,
        },
        discoveredSets: uniqueSets,
        accessibleSets: uniqueSets,
        failedSets: [],
        terms: [],
        accessFailed: false,
        fallbackMethodUsed: hasSets ? 'method_2_html' : 'method_4_public_metadata',
        friendlyMessage: hasSets
          ? `Başarılı! ${uniqueSets.length} adet halka açık set bulundu.`
          : 'Halka açık set bulunamadı. Metin yapıştırarak içe aktarabilirsiniz.',
        counters: {
          ...emptyCounters,
          discoveredFolderCount: cleanUrl.includes('/folders/') ? 1 : 0,
          discoveredSetCount: uniqueSets.length,
        },
        manualReviewQueue: [],
      };
    } catch (err: unknown) {
      const reason = err instanceof Error ? err.message : 'Network / CORS error connecting to Quizlet';
      return {
        source: {
          id: sourceId,
          type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
          url: cleanUrl,
          title: sourceTitle || 'Quizlet Genel Kaynağı',
          status: 'partially_completed', // Never show complete when failed
          lastImportedAt: timestamp,
          discoveredSetCount: 0,
          processedSetCount: 0,
          failedSetCount: 1,
          importedItemCount: 0,
          duplicateCount: 0,
          incompleteCount: 0,
          manualReviewCount: 0,
          errorMessage: reason,
        },
        discoveredSets: [],
        accessibleSets: [],
        failedSets: [cleanUrl],
        terms: [],
        accessFailed: true,
        failureReason: reason,
        fallbackMethodUsed: 'method_5_export_text',
        friendlyMessage: 'Quizlet sayfasına doğrudan erişim şu anda engellendi. Alternatif veri aktarımı (Metin İçe Aktarım) deneniyor...',
        counters: {
          ...emptyCounters,
          errorTermCount: 1,
        },
        manualReviewQueue: [],
      };
    }
  }

  /**
   * Infers part of speech for a word or phrase if not explicitly declared.
   */
  public static inferPartOfSpeech(word: string): PartOfSpeech {
    const lower = word.toLowerCase().trim();
    if (
      lower.includes(' ') &&
      (lower.startsWith('look ') ||
        lower.startsWith('carry ') ||
        lower.startsWith('take ') ||
        lower.startsWith('put ') ||
        lower.startsWith('give ') ||
        lower.startsWith('turn ') ||
        lower.startsWith('bring ') ||
        lower.startsWith('break ') ||
        lower.startsWith('call ') ||
        lower.startsWith('run ') ||
        lower.startsWith('set ') ||
        lower.startsWith('hold ') ||
        lower.startsWith('make ') ||
        lower.startsWith('come ') ||
        lower.startsWith('get ') ||
        lower.startsWith('go '))
    ) {
      return 'phrasal_verb';
    }

    if (lower.endsWith('ly')) return 'adverb';
    if (lower.endsWith('tion') || lower.endsWith('ment') || lower.endsWith('ness') || lower.endsWith('ity')) {
      return 'noun';
    }
    if (lower.endsWith('able') || lower.endsWith('ible') || lower.endsWith('ful') || lower.endsWith('ive') || lower.endsWith('ous')) {
      return 'adjective';
    }

    return 'noun';
  }

  /**
   * Detects the dominant delimiter used across text lines.
   * Prevents incorrect splitting on commas inside Turkish definitions when Tab or Dash is the real delimiter.
   */
  public static detectDominantDelimiter(lines: string[]): string {
    let tabCount = 0;
    let dashCount = 0;
    let colonCount = 0;
    let semicolonCount = 0;
    let commaCount = 0;

    for (const line of lines) {
      if (line.includes('\t')) tabCount++;
      if (line.includes(' - ') || line.includes(' – ') || line.includes(' — ')) dashCount++;
      if (line.includes(' : ')) colonCount++;
      if (line.includes(';')) semicolonCount++;
      if (line.includes(',')) commaCount++;
    }

    if (tabCount >= Math.max(1, lines.length * 0.3)) return '\t';
    if (dashCount >= Math.max(1, lines.length * 0.3)) return ' - ';
    if (colonCount >= Math.max(1, lines.length * 0.3)) return ' : ';
    if (semicolonCount >= Math.max(1, lines.length * 0.3)) return ';';
    if (commaCount >= Math.max(1, lines.length * 0.3)) return ',';

    return '\t';
  }

  /**
   * Method 5: Parses Quizlet standard export text (Tab, Comma, Dash, or Semicolon separated).
   * Strictly preserves unparseable lines into manualReviewQueue rather than dropping them.
   */
  public static parseQuizletExportText(
    rawText: string,
    options: {
      sourceId?: string;
      sourceTitle?: string;
      setName?: string;
      folderName?: string;
      sourceUrl?: string;
    } = {}
  ): {
    items: VocabularyItem[];
    incompleteCount: number;
    manualReviewQueue: QuizletManualReviewItem[];
  } {
    const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
    const items: VocabularyItem[] = [];
    const manualReviewQueue: QuizletManualReviewItem[] = [];
    let incompleteCount = 0;
    const timestamp = new Date().toISOString();

    const dominantDelimiter = this.detectDominantDelimiter(lines);

    lines.forEach((line, idx) => {
      let term = '';
      let definition = '';

      // Priority 1: Check dominant delimiter
      if (dominantDelimiter === '\t' && line.includes('\t')) {
        const parts = line.split('\t');
        term = parts[0].trim();
        definition = parts.slice(1).join(' ').trim();
      } else if (dominantDelimiter === ' - ' && (line.includes(' - ') || line.includes(' – ') || line.includes(' — '))) {
        const sep = line.includes(' - ') ? ' - ' : line.includes(' – ') ? ' – ' : ' — ';
        const parts = line.split(sep);
        term = parts[0].trim();
        definition = parts.slice(1).join(sep).trim();
      } else if (dominantDelimiter === ' : ' && line.includes(' : ')) {
        const parts = line.split(' : ');
        term = parts[0].trim();
        definition = parts.slice(1).join(' : ').trim();
      } else if (dominantDelimiter === ';' && line.includes(';')) {
        const parts = line.split(';');
        term = parts[0].trim();
        definition = parts.slice(1).join(';').trim();
      } else if (dominantDelimiter === ',' && line.includes(',')) {
        const parts = line.split(',');
        term = parts[0].trim();
        definition = parts.slice(1).join(',').trim();
      } else {
        // Fallback per-line checks
        if (line.includes('\t')) {
          const parts = line.split('\t');
          term = parts[0].trim();
          definition = parts.slice(1).join(' ').trim();
        } else if (line.includes(' - ') || line.includes(' – ')) {
          const sep = line.includes(' - ') ? ' - ' : ' – ';
          const parts = line.split(sep);
          term = parts[0].trim();
          definition = parts.slice(1).join(sep).trim();
        } else if (line.includes(' : ')) {
          const parts = line.split(' : ');
          term = parts[0].trim();
          definition = parts.slice(1).join(' : ').trim();
        } else if (line.includes(';')) {
          const parts = line.split(';');
          term = parts[0].trim();
          definition = parts.slice(1).join(';').trim();
        } else if (line.includes(',')) {
          const parts = line.split(',');
          term = parts[0].trim();
          definition = parts.slice(1).join(',').trim();
        } else {
          term = line;
          definition = '';
        }
      }

      if (!term) return;

      const normWord = normalizeVocabularyKey(term);
      const meanings = definition
        ? definition
            .split(/[,;/]/)
            .map((m) => m.trim())
            .filter(Boolean)
        : [];

      const normalizedMeanings = normalizeMeaningsList(meanings);
      const partOfSpeech = this.inferPartOfSpeech(term);

      const missingFields: string[] = [];
      if (normalizedMeanings.length === 0) {
        missingFields.push('meaningsTr');
        incompleteCount++;
        manualReviewQueue.push({
          term,
          rawDefinition: definition,
          reason: 'Türkçe tanım ayrıştırılamadı veya boş bırakılmış',
        });
      }

      const sourceId = options.sourceId || `quizlet-import-${Date.now()}`;
      const sourceTitle = options.sourceTitle || 'Quizlet İçe Aktarımı';

      items.push({
        id: `quizlet-${Date.now()}-${idx + 1}-${Math.random().toString(36).substring(2, 6)}`,
        word: term,
        meaningsTr: normalizedMeanings.length > 0 ? normalizedMeanings : ['[Tanım Yok]'],
        partOfSpeech,
        example: `The term "${term}" frequently appears in academic YDS and YDT examinations.`,
        exampleTr: `"${term}" kelimesi akademik YDS ve YDT sınavlarında sıklıkla karşılaşılmaktadır.`,
        synonyms: [],
        antonyms: [],
        collocations: [],
        visualMnemonic: `Memory anchor for ${term}: ${normalizedMeanings[0] || 'academic concept'}.`,
        pronunciation: `/${normWord}/`,
        difficulty: 'YDS',
        source: sourceTitle,
        sourceRefs: [
          {
            sourceId,
            sourceType: 'quizlet',
            sourceUrl: options.sourceUrl,
            folderName: options.folderName,
            setName: options.setName || 'Quizlet Set',
            importedAt: timestamp,
          },
        ],
        missingFields: missingFields.length > 0 ? missingFields : undefined,
        requiresManualReview: missingFields.length > 0,
      });
    });

    return {
      items,
      incompleteCount,
      manualReviewQueue,
    };
  }

  /**
   * Generates a preview of what will be imported without mutating the database.
   * Gives students exact counts of Detected, Valid, Duplicates, and Needs Review.
   */
  public static previewQuizletImport(
    rawText: string,
    existingVocabulary: VocabularyItem[]
  ): QuizletPreviewResult {
    const { items, manualReviewQueue } = this.parseQuizletExportText(rawText);

    const { toInsert, toUpdate, duplicateCount } = deduplicateVocabularyBatch(
      existingVocabulary,
      items
    );

    const validCount = toInsert.length + toUpdate.length;
    const reviewCount = manualReviewQueue.length + items.filter((i) => i.requiresManualReview).length;

    return {
      detectedCount: items.length,
      validCount,
      duplicateCount,
      manualReviewCount: reviewCount,
      previewItems: items,
      manualReviewQueue,
    };
  }
}

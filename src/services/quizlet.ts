import { VocabularyItem, VocabularySource, PartOfSpeech } from '../types/vocabulary';
import { normalizeVocabularyKey, normalizeMeaningsList } from './importer';

export interface QuizletScanResult {
  source: VocabularySource;
  discoveredSets: string[];
  accessibleSets: string[];
  failedSets: string[];
  terms: VocabularyItem[];
  accessFailed: boolean;
  failureReason?: string;
}

/**
 * Service for managing Quizlet folder/set discovery, access audit, and text export parsing.
 */
export class QuizletImporter {
  /**
   * Attempts to discover and scan a Quizlet URL.
   * Adheres strictly to Section 2: Never bypasses security or credentials.
   * If protected by Cloudflare/WAF (HTTP 403), records ACCESS_FAILED truthfully.
   */
  public static async scanQuizletUrl(url: string, sourceTitle?: string): Promise<QuizletScanResult> {
    const timestamp = new Date().toISOString();
    const sourceId = `quizlet-${Date.now()}`;
    const cleanUrl = url.trim();

    try {
      const response = await fetch(cleanUrl, {
        method: 'GET',
        headers: {
          Accept: 'text/html,application/xhtml+xml',
        },
      });

      if (!response.ok) {
        // Cloudflare or access control block (e.g. 403, 401, 429)
        const reason = `Access restricted: HTTP ${response.status} ${response.statusText || 'Forbidden'} (Cloudflare / WAF protection)`;
        return {
          source: {
            id: sourceId,
            type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
            url: cleanUrl,
            title: sourceTitle || 'Quizlet Public Source',
            status: 'access_failed',
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
        };
      }

      const html = await response.text();

      // If page returned a challenge screen (cf-mitigated)
      if (html.includes('challenge-running') || html.includes('cf-mitigated') || html.includes('One more step')) {
        const reason = 'Cloudflare bot verification challenge required (automated access restricted)';
        return {
          source: {
            id: sourceId,
            type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
            url: cleanUrl,
            title: sourceTitle || 'Quizlet Public Source',
            status: 'access_failed',
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
        };
      }

      // If HTML was returned cleanly, parse set links
      const setMatches = Array.from(
        html.matchAll(/href=["'](\/(?:[0-9]+)\/[^"']+)["']/g)
      ).map((m) => `https://quizlet.com${m[1]}`);

      const uniqueSets = Array.from(new Set(setMatches));

      return {
        source: {
          id: sourceId,
          type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
          url: cleanUrl,
          title: sourceTitle || 'Quizlet Public Source',
          status: uniqueSets.length > 0 ? 'completed' : 'partially_completed',
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
      };
    } catch (err: unknown) {
      const reason = err instanceof Error ? err.message : 'Network / CORS error connecting to Quizlet';
      return {
        source: {
          id: sourceId,
          type: cleanUrl.includes('/folders/') ? 'quizlet-folder' : 'quizlet-set',
          url: cleanUrl,
          title: sourceTitle || 'Quizlet Public Source',
          status: 'access_failed',
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
        lower.startsWith('make '))
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
   * Parses Quizlet standard export text (Tab, Comma, Dash, or Semicolon separated).
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
  } {
    const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
    const items: VocabularyItem[] = [];
    let incompleteCount = 0;
    const timestamp = new Date().toISOString();

    lines.forEach((line, idx) => {
      let term = '';
      let definition = '';

      if (line.includes('\t')) {
        const parts = line.split('\t');
        term = parts[0].trim();
        definition = parts.slice(1).join(' ').trim();
      } else if (line.includes(' - ')) {
        const parts = line.split(' - ');
        term = parts[0].trim();
        definition = parts.slice(1).join(' - ').trim();
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
      }

      const sourceId = options.sourceId || `quizlet-import-${Date.now()}`;
      const sourceTitle = options.sourceTitle || 'Quizlet Import';

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
    };
  }
}

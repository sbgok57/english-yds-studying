import { VocabularyItem, VocabularySource, PartOfSpeech } from '../types/vocabulary';
import { normalizeVocabularyKey, normalizeMeaningsList } from './importer';

export interface PdfExtractionResult {
  source: VocabularySource;
  items: VocabularyItem[];
  totalPages: number;
  incompleteCount: number;
  manualReviewCount: number;
}

/**
 * Service for extracting vocabulary items and phrasal verbs from PDF files.
 */
export class PdfVocabularyImporter {
  /**
   * Reads a PDF File object, extracts raw text content and page delimiters.
   */
  public static async extractTextFromPdf(file: File): Promise<{ pagesText: string[]; fullText: string }> {
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const decoder = new TextDecoder('latin1');
    const rawContent = decoder.decode(bytes);

    const pagesText: string[] = [];

    // Split stream by PDF page markers or stream tokens
    const streamRegex = /stream[\r\n]+([\s\S]*?)[\r\n]+endstream/g;
    let match;

    while ((match = streamRegex.exec(rawContent)) !== null) {
      const streamData = match[1];
      // Extract text inside Tj and TJ operators
      const textMatches = Array.from(streamData.matchAll(/\(([^)]*)\)\s*Tj/g)).map((m) => m[1]);
      const tjMatches = Array.from(streamData.matchAll(/\[(.*?)\]\s*TJ/g)).map((m) => {
        const inner = m[1];
        return Array.from(inner.matchAll(/\(([^)]*)\)/g))
          .map((sub) => sub[1])
          .join('');
      });

      const extracted = [...textMatches, ...tjMatches].join(' ');
      if (extracted.trim()) {
        pagesText.push(extracted.trim());
      }
    }

    // Fallback: If streams were compressed or not directly regexable, parse visible ASCII text strings
    if (pagesText.length === 0) {
      const cleanAscii = rawContent.replace(/[^\x20-\x7E\r\n\t]/g, ' ');
      const chunks = cleanAscii.split(/(?:\/Page\b|\f)/);
      chunks.forEach((chunk) => {
        const trimmed = chunk.trim();
        if (trimmed.length > 20) {
          pagesText.push(trimmed);
        }
      });
    }

    const fullText = pagesText.join('\n\n--- PAGE BREAK ---\n\n');
    return {
      pagesText: pagesText.length > 0 ? pagesText : [rawContent],
      fullText,
    };
  }

  /**
   * Detects whether a string is a recognized multi-word phrasal verb.
   */
  public static isPhrasalVerb(phrase: string): boolean {
    const phrasalVerbsList = [
      'account for', 'act on', 'add up', 'adhere to', 'agree with', 'allow for',
      'back up', 'bear out', 'blow up', 'break down', 'break in', 'break into',
      'break off', 'break out', 'break through', 'break up', 'bring about',
      'bring back', 'bring down', 'bring in', 'bring out', 'bring up',
      'build up', 'bump into', 'call for', 'call off', 'call on', 'carry on',
      'carry out', 'catch on', 'catch up', 'check in', 'check out', 'cheer up',
      'clear up', 'come across', 'come along', 'come around', 'come by',
      'come down with', 'come forward', 'come from', 'come off', 'come out',
      'come round', 'come to', 'come up with', 'count on', 'cut back',
      'cut down on', 'cut off', 'deal with', 'depend on', 'die out', 'do away with',
      'draw up', 'drop by', 'drop out', 'end up', 'face up to', 'fall apart',
      'fall behind', 'fall out', 'fall through', 'figure out', 'fill in', 'fill out',
      'find out', 'fit in', 'get across', 'get along', 'get at', 'get away',
      'get back', 'get by', 'get down to', 'get in', 'get off', 'get on',
      'get out', 'get over', 'get rid of', 'get round', 'get through', 'get up',
      'give away', 'give in', 'give off', 'give out', 'give up', 'go ahead',
      'go along with', 'go by', 'go off', 'go on', 'go over', 'go through',
      'go with', 'grow up', 'hand in', 'hand out', 'hang on', 'hang out',
      'hold on', 'hold up', 'keep on', 'keep up with', 'lay off', 'leave out',
      'let down', 'look after', 'look down on', 'look for', 'look forward to',
      'look into', 'look out', 'look over', 'look round', 'look through',
      'look up', 'look up to', 'make out', 'make up', 'make up for', 'pass away',
      'pass out', 'pay off', 'pick up', 'point out', 'pull through', 'put aside',
      'put away', 'put forward', 'put off', 'put on', 'put out', 'put through',
      'put up with', 'rely on', 'rule out', 'run across', 'run away', 'run into',
      'run out of', 'run over', 'set aside', 'set off', 'set out', 'set up',
      'show off', 'show up', 'slow down', 'stand by', 'stand for', 'stand out',
      'stand up for', 'take after', 'take away', 'take down', 'take in',
      'take off', 'take on', 'take over', 'take to', 'take up', 'tell apart',
      'tell off', 'think over', 'throw away', 'try on', 'try out', 'turn down',
      'turn into', 'turn off', 'turn on', 'turn out', 'turn over', 'turn up',
      'use up', 'wait on', 'wake up', 'warm up', 'wash up', 'watch out',
      'wear off', 'wear out', 'wind up', 'wipe out', 'work out'
    ];

    const normalized = phrase.toLowerCase().trim();
    return phrasalVerbsList.includes(normalized);
  }

  /**
   * Parses raw extracted lines into structured VocabularyItem instances.
   */
  public static parseLines(
    lines: string[],
    fileName: string,
    pageNumber = 1
  ): { items: VocabularyItem[]; incompleteCount: number; manualReviewCount: number } {
    const items: VocabularyItem[] = [];
    let incompleteCount = 0;
    let manualReviewCount = 0;
    const timestamp = new Date().toISOString();
    const sourceId = `pdf-${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}-${Date.now()}`;

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.length < 3 || line.startsWith('---') || line.startsWith('Page')) continue;

      let term = '';
      let meaning = '';

      // Check common delimiters: " - ", " : ", " = ", "\t", "–"
      if (line.includes(' - ')) {
        const parts = line.split(' - ');
        term = parts[0].trim();
        meaning = parts.slice(1).join(' - ').trim();
      } else if (line.includes(' – ')) {
        const parts = line.split(' – ');
        term = parts[0].trim();
        meaning = parts.slice(1).join(' – ').trim();
      } else if (line.includes(' : ')) {
        const parts = line.split(' : ');
        term = parts[0].trim();
        meaning = parts.slice(1).join(' : ').trim();
      } else if (line.includes(' = ')) {
        const parts = line.split(' = ');
        term = parts[0].trim();
        meaning = parts.slice(1).join(' = ').trim();
      } else if (line.includes('\t')) {
        const parts = line.split('\t');
        term = parts[0].trim();
        meaning = parts.slice(1).join(' ').trim();
      } else {
        // Line may only have the term/phrasal verb
        term = line;
        meaning = '';
      }

      // If word contains numbers at start like "1. carry out" or "12) put off"
      term = term.replace(/^\d+[.)\-\s]+/, '').trim();

      if (!term || term.length > 50) continue;

      const normWord = normalizeVocabularyKey(term);
      const isPhrasal = this.isPhrasalVerb(term) || term.includes(' ');
      const partOfSpeech: PartOfSpeech = isPhrasal ? 'phrasal_verb' : 'verb';

      const meanings = meaning
        ? meaning
            .split(/[,;/]/)
            .map((m) => m.trim())
            .filter(Boolean)
        : [];

      const normalizedMeanings = normalizeMeaningsList(meanings);

      const missingFields: string[] = [];
      if (normalizedMeanings.length === 0) {
        missingFields.push('turkishMeaning');
        incompleteCount++;
      }

      const requiresManualReview = missingFields.length > 0;
      if (requiresManualReview) {
        manualReviewCount++;
      }

      items.push({
        id: `pdf-${Date.now()}-${items.length + 1}-${Math.random().toString(36).substring(2, 6)}`,
        word: term,
        meaningsTr: normalizedMeanings.length > 0 ? normalizedMeanings : ['[Türkçe anlam PDF metninde bulunamadı]'],
        partOfSpeech,
        example: `The phrasal verb "${term}" is frequently tested in academic reading and grammar questions.`,
        exampleTr: `"${term}" deyimsel fiili akademik okuma ve dilbilgisi sorularında sıklıkla test edilir.`,
        synonyms: [],
        antonyms: [],
        collocations: [],
        visualMnemonic: `Visual context card for ${term}: ${normalizedMeanings[0] || 'academic verb'}.`,
        pronunciation: `/${normWord}/`,
        difficulty: 'YDS',
        source: `PDF: ${fileName}`,
        sourceRefs: [
          {
            sourceId,
            sourceType: 'pdf',
            fileName,
            sourcePage: pageNumber,
            importedAt: timestamp,
          },
        ],
        missingFields: missingFields.length > 0 ? missingFields : undefined,
        requiresManualReview,
      });
    }

    return { items, incompleteCount, manualReviewCount };
  }

  /**
   * Main entry point to process a PDF file.
   */
  public static async processPdfFile(file: File): Promise<PdfExtractionResult> {
    const { pagesText } = await this.extractTextFromPdf(file);
    const allItems: VocabularyItem[] = [];
    let totalIncomplete = 0;
    let totalManualReview = 0;

    pagesText.forEach((pageContent, pageIndex) => {
      const lines = pageContent.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const { items, incompleteCount, manualReviewCount } = this.parseLines(
        lines,
        file.name,
        pageIndex + 1
      );
      allItems.push(...items);
      totalIncomplete += incompleteCount;
      totalManualReview += manualReviewCount;
    });

    const sourceId = `pdf-${file.name.replace(/[^a-zA-Z0-9_-]/g, '_')}-${Date.now()}`;

    const source: VocabularySource = {
      id: sourceId,
      type: 'pdf',
      fileName: file.name,
      title: file.name,
      status: allItems.length > 0 ? 'completed' : 'failed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: pagesText.length,
      processedSetCount: pagesText.length,
      failedSetCount: 0,
      importedItemCount: allItems.length,
      duplicateCount: 0,
      incompleteCount: totalIncomplete,
      manualReviewCount: totalManualReview,
    };

    return {
      source,
      items: allItems,
      totalPages: pagesText.length,
      incompleteCount: totalIncomplete,
      manualReviewCount: totalManualReview,
    };
  }
}

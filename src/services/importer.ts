import { VocabularyItem, SourceReference, VocabularySource } from '../types/vocabulary';

/**
 * Deterministic canonical key normalization for vocabulary words and multi-word expressions.
 * Rules:
 * - Trims leading and trailing whitespace
 * - Collapses repeated internal whitespace into a single space
 * - Lowercases comparison string
 * - Strictly preserves multi-word expressions and phrasal verbs ("carry out" vs "carry")
 * - Strictly preserves meaningful hyphens ("well-known")
 */
export function normalizeVocabularyKey(word: string): string {
  if (!word) return '';
  return word
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

/**
 * Normalizes an array of Turkish meanings, deduplicating while preserving
 * Turkish Unicode characters (ç, ğ, ı, İ, ö, ş, ü) and meaningful punctuation.
 */
export function normalizeMeaningsList(meanings: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  meanings.forEach((m) => {
    const trimmed = m.trim();
    if (!trimmed) return;
    const lower = trimmed.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      result.push(trimmed);
    }
  });

  return result;
}

/**
 * Intelligently merges an incoming vocabulary definition into an existing record
 * without deleting useful alternative meanings, synonyms, or provenance.
 * NEVER resets user learning progress.
 */
export function mergeVocabularyRecords(
  existing: VocabularyItem,
  incoming: Partial<VocabularyItem>,
  sourceRef?: SourceReference
): VocabularyItem {
  // 1. Merge Turkish meanings preserving unique alternatives
  const mergedMeanings = normalizeMeaningsList([
    ...(existing.meaningsTr || []),
    ...(incoming.meaningsTr || []),
  ]);

  // 2. Merge synonyms without duplication
  const seenSynonyms = new Set(existing.synonyms?.map((s) => s.toLowerCase()) || []);
  const mergedSynonyms = [...(existing.synonyms || [])];
  (incoming.synonyms || []).forEach((syn) => {
    const trimmed = syn.trim();
    if (trimmed && !seenSynonyms.has(trimmed.toLowerCase())) {
      seenSynonyms.add(trimmed.toLowerCase());
      mergedSynonyms.push(trimmed);
    }
  });

  // 3. Merge antonyms
  const seenAntonyms = new Set(existing.antonyms?.map((a) => a.toLowerCase()) || []);
  const mergedAntonyms = [...(existing.antonyms || [])];
  (incoming.antonyms || []).forEach((ant) => {
    const trimmed = ant.trim();
    if (trimmed && !seenAntonyms.has(trimmed.toLowerCase())) {
      seenAntonyms.add(trimmed.toLowerCase());
      mergedAntonyms.push(trimmed);
    }
  });

  // 4. Merge collocations
  const seenCollocations = new Set(existing.collocations?.map((c) => c.toLowerCase()) || []);
  const mergedCollocations = [...(existing.collocations || [])];
  (incoming.collocations || []).forEach((col) => {
    const trimmed = col.trim();
    if (trimmed && !seenCollocations.has(trimmed.toLowerCase())) {
      seenCollocations.add(trimmed.toLowerCase());
      mergedCollocations.push(trimmed);
    }
  });

  // 5. Merge source provenance references
  const existingRefs = existing.sourceRefs || [
    {
      sourceId: 'seed-source',
      sourceType: 'seed' as const,
      importedAt: new Date().toISOString(),
    },
  ];

  const mergedRefs = [...existingRefs];
  if (sourceRef) {
    const isAlreadyReferenced = existingRefs.some(
      (ref) =>
        ref.sourceId === sourceRef.sourceId &&
        ref.sourceUrl === sourceRef.sourceUrl &&
        ref.setName === sourceRef.setName &&
        ref.sourcePage === sourceRef.sourcePage
    );
    if (!isAlreadyReferenced) {
      mergedRefs.push(sourceRef);
    }
  }

  // 6. Prefer non-empty example sentence
  const example =
    existing.example && !existing.example.includes('sample sentence')
      ? existing.example
      : incoming.example || existing.example;

  const exampleTr = existing.exampleTr || incoming.exampleTr;

  // 7. Pronunciation
  const pronunciation =
    existing.pronunciation && existing.pronunciation !== '/.../'
      ? existing.pronunciation
      : incoming.pronunciation || existing.pronunciation || `/${existing.word.toLowerCase()}/`;

  // 8. Visual Mnemonic
  const visualMnemonic =
    existing.visualMnemonic ||
    incoming.visualMnemonic ||
    `Visual memory cue for ${existing.word}`;

  // 9. Missing fields calculation
  const missingFields: string[] = [];
  if (mergedMeanings.length === 0) missingFields.push('meaningsTr');
  if (!example) missingFields.push('example');
  if (!pronunciation || pronunciation === '/.../') missingFields.push('pronunciation');

  const requiresManualReview =
    missingFields.length > 0 ||
    existing.requiresManualReview ||
    incoming.requiresManualReview ||
    false;

  return {
    ...existing,
    meaningsTr: mergedMeanings.length > 0 ? mergedMeanings : existing.meaningsTr,
    synonyms: mergedSynonyms,
    antonyms: mergedAntonyms,
    collocations: mergedCollocations,
    example,
    exampleTr,
    pronunciation,
    visualMnemonic,
    partOfSpeech: incoming.partOfSpeech || existing.partOfSpeech,
    difficulty: incoming.difficulty || existing.difficulty,
    sourceRefs: mergedRefs,
    missingFields: missingFields.length > 0 ? missingFields : undefined,
    requiresManualReview,
  };
}

/**
 * Deduplicates a batch of incoming vocabulary against existing items.
 */
export function deduplicateVocabularyBatch(
  existingVocabulary: VocabularyItem[],
  incomingVocabulary: VocabularyItem[],
  sourceRef?: SourceReference
): {
  toInsert: VocabularyItem[];
  toUpdate: VocabularyItem[];
  duplicateCount: number;
} {
  const existingMap = new Map<string, VocabularyItem>();
  existingVocabulary.forEach((item) => {
    existingMap.set(normalizeVocabularyKey(item.word), item);
  });

  const toInsert: VocabularyItem[] = [];
  const toUpdate: VocabularyItem[] = [];
  let duplicateCount = 0;

  incomingVocabulary.forEach((item) => {
    const normKey = normalizeVocabularyKey(item.word);
    if (!normKey) return;

    const existingItem = existingMap.get(normKey);
    if (existingItem) {
      duplicateCount++;
      const merged = mergeVocabularyRecords(existingItem, item, sourceRef);
      toUpdate.push(merged);
      // Update local map so chained duplicate references within same batch merge together
      existingMap.set(normKey, merged);
    } else {
      const newItem: VocabularyItem = {
        ...item,
        sourceRefs: sourceRef ? [sourceRef] : item.sourceRefs || [],
      };
      toInsert.push(newItem);
      existingMap.set(normKey, newItem);
    }
  });

  return {
    toInsert,
    toUpdate,
    duplicateCount,
  };
}

/**
 * Checks source completeness and returns human-readable audit messages.
 */
export function calculateSourceCompleteness(source: VocabularySource): {
  isComplete: boolean;
  messageTr: string;
  messageEn: string;
} {
  if (source.status === 'access_failed') {
    return {
      isComplete: false,
      messageTr: 'Kaynağa erişim engellendi veya başarısız oldu.',
      messageEn: 'Source access failed or was blocked.',
    };
  }

  if (source.discoveredSetCount > source.processedSetCount) {
    return {
      isComplete: false,
      messageTr: 'Bazı setlerin işlenmesi gerekiyor.',
      messageEn: 'Some sets still need to be processed.',
    };
  }

  if (source.discoveredSetCount === 0 && source.status === 'not_scanned') {
    return {
      isComplete: false,
      messageTr: 'Kaynak henüz taranmadı.',
      messageEn: 'Source has not been scanned yet.',
    };
  }

  return {
    isComplete: true,
    messageTr: 'Tüm keşfedilen setler başarıyla işlendi.',
    messageEn: 'All discovered sets were successfully processed.',
  };
}

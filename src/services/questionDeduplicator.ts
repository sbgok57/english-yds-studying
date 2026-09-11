import { YdsQuestion, YdsQuestionCategory } from '../types/yds';

export interface DeduplicationAuditReport {
  totalQuestions: number;
  uniqueStems: number;
  duplicateCount: number;
  categoryDistribution: Record<YdsQuestionCategory, number>;
  levelDistribution: Record<string, number>;
  duplicatePairs: Array<{ q1Id: string; q2Id: string; similarity: number; stem1: string; stem2: string }>;
  errors: string[];
  passed: boolean;
}

/**
 * Extracts the core substantive text for any question type (dialogue lines,
 * passage content, or sentence stem).
 */
export function getQuestionSubstantiveContent(q: YdsQuestion): string {
  if (q.dialogueSpeakers && q.dialogueSpeakers.length > 0) {
    return q.dialogueSpeakers.map(d => `${d.speaker}: ${d.text}`).join(' ');
  }
  if (q.category === 'paragraph_completion' || q.category === 'irrelevant_sentence') {
    return q.passage || q.stemEn;
  }
  return q.stemEn;
}

/**
 * Normalizes question text for linguistic comparison by removing punctuation,
 * extra spaces, and converting to lowercase.
 */
export function normalizeQuestionStem(stem: string): string {
  return (stem || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Computes Jaccard word-level similarity between two sentences.
 */
export function computeJaccardSimilarity(text1: string, text2: string): number {
  const words1 = new Set(normalizeQuestionStem(text1).split(' ').filter(w => w.length > 2));
  const words2 = new Set(normalizeQuestionStem(text2).split(' ').filter(w => w.length > 2));

  if (words1.size === 0 || words2.size === 0) return 0;

  let intersection = 0;
  words1.forEach(w => {
    if (words2.has(w)) intersection++;
  });

  const union = new Set([...words1, ...words2]).size;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Validates question integrity and detects any duplicate questions or patterns.
 */
export function auditQuestionBank(
  questions: YdsQuestion[],
  similarityThreshold = 0.85
): DeduplicationAuditReport {
  const report: DeduplicationAuditReport = {
    totalQuestions: questions.length,
    uniqueStems: 0,
    duplicateCount: 0,
    categoryDistribution: {} as Record<YdsQuestionCategory, number>,
    levelDistribution: {},
    duplicatePairs: [],
    errors: [],
    passed: false,
  };

  const idMap = new Set<string>();
  const normalizedItems: Array<{
    id: string;
    category: YdsQuestionCategory;
    contentNorm: string;
    optionsSig: string;
    raw: string;
  }> = [];

  questions.forEach((q, idx) => {
    // 1. ID Uniqueness Check
    if (idMap.has(q.id)) {
      report.errors.push(`Duplicate question ID detected: "${q.id}" at index ${idx}`);
    } else {
      idMap.add(q.id);
    }

    // 2. Options Audit
    if (!q.options || q.options.length !== 5) {
      report.errors.push(`Question "${q.id}" does not have exactly 5 options (found ${q.options?.length})`);
    }

    // 3. Correct Answer Audit
    if (!['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer)) {
      report.errors.push(`Question "${q.id}" has invalid correctAnswer: "${q.correctAnswer}"`);
    }

    // 4. Pedagogical Rationale Audit
    if (!q.whyCorrect || q.whyCorrect.trim().length < 5) {
      report.errors.push(`Question "${q.id}" missing whyCorrect explanation`);
    }

    // 5. Category Distribution
    report.categoryDistribution[q.category] = (report.categoryDistribution[q.category] || 0) + 1;

    // 6. Level Distribution
    const levelKey = q.level || 'B2';
    report.levelDistribution[levelKey] = (report.levelDistribution[levelKey] || 0) + 1;

    // Substantive collection
    const content = getQuestionSubstantiveContent(q);
    const contentNorm = normalizeQuestionStem(content);
    const optionsSig = (q.options || []).map(o => o.text.trim().toLowerCase()).sort().join(' | ');
    normalizedItems.push({
      id: q.id,
      category: q.category,
      contentNorm,
      optionsSig,
      raw: content,
    });
  });

  report.uniqueStems = new Set(normalizedItems.map(s => s.contentNorm)).size;

  // 7. Pairwise similarity & deduplication check
  for (let i = 0; i < normalizedItems.length; i++) {
    for (let j = i + 1; j < normalizedItems.length; j++) {
      const q1 = normalizedItems[i];
      const q2 = normalizedItems[j];

      if (q1.category !== q2.category) continue;

      // For reading & cloze passages, questions within same module share passage text,
      // so duplicate is flagged only if both stem and options match exactly.
      if (q1.category === 'reading' || q1.category === 'cloze') {
        const rawStem1 = normalizeQuestionStem(questions[i].stemEn);
        const rawStem2 = normalizeQuestionStem(questions[j].stemEn);
        if (rawStem1 === rawStem2 && q1.optionsSig === q2.optionsSig) {
          report.duplicateCount++;
          report.duplicatePairs.push({
            q1Id: q1.id,
            q2Id: q2.id,
            similarity: 1.0,
            stem1: questions[i].stemEn,
            stem2: questions[j].stemEn,
          });
        }
        continue;
      }

      // Exact content match
      if (q1.contentNorm === q2.contentNorm && q1.optionsSig === q2.optionsSig) {
        report.duplicateCount++;
        report.duplicatePairs.push({
          q1Id: q1.id,
          q2Id: q2.id,
          similarity: 1.0,
          stem1: q1.raw,
          stem2: q2.raw,
        });
      } else {
        // High similarity check on core content
        const sim = computeJaccardSimilarity(q1.contentNorm, q2.contentNorm);
        if (sim >= similarityThreshold) {
          report.duplicateCount++;
          report.duplicatePairs.push({
            q1Id: q1.id,
            q2Id: q2.id,
            similarity: Math.round(sim * 100) / 100,
            stem1: q1.raw,
            stem2: q2.raw,
          });
        }
      }
    }
  }

  report.passed = report.errors.length === 0 && report.duplicateCount === 0;
  return report;
}

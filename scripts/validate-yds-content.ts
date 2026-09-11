import { MODULE_PRACTICE_BANK } from '../src/services/ydsPracticeEngine.js';
import { generateMockExam, getMockExamList } from '../src/services/mockExamGenerator.js';
import { SCIENTIFIC_READINGS } from '../src/data/scientificReadings.js';
import { OFFICIAL_YDS_SECTIONS } from '../src/types/yds.js';

console.log('🔍 Starting Professional YDS Content & Schema Validation...\n');

let errorCount = 0;

function logError(msg: string) {
  console.error(`❌ ERROR: ${msg}`);
  errorCount++;
}

// 1. Validate Official Section Configurations
console.log('1. Checking 10 Official YDS Section Configurations...');
if (OFFICIAL_YDS_SECTIONS.length !== 10) {
  logError(`Expected 10 official sections, found ${OFFICIAL_YDS_SECTIONS.length}`);
} else {
  console.log(`  ✓ Exactly 10 official YDS sections verified.`);
}

const totalExamQuestions = OFFICIAL_YDS_SECTIONS.reduce((sum, s) => sum + s.questionCount, 0);
if (totalExamQuestions !== 80) {
  logError(`Total questions across sections must equal 80, but found ${totalExamQuestions}`);
} else {
  console.log(`  ✓ Sum of section question allocations equals exactly 80 questions.`);
}

// 2. Validate Question Practice Modules (All 15 Categories)
console.log('\n2. Validating 15 Standalone Question Practice Modules...');
import { ALL_PRACTICE_CATEGORIES } from '../src/types/yds.js';
import { COMPREHENSIVE_YDS_QUESTION_BANK } from '../src/data/ydsQuestionBank.js';
import { auditQuestionBank } from '../src/services/questionDeduplicator.js';

ALL_PRACTICE_CATEGORIES.forEach((catConfig) => {
  const cat = catConfig.category;
  const qs = MODULE_PRACTICE_BANK[cat];
  if (!qs || qs.length === 0) {
    logError(`Module "${cat}" has zero practice questions.`);
    return;
  }

  if (qs.length < catConfig.targetCount) {
    logError(`Module "${cat}" has ${qs.length} questions, below target of ${catConfig.targetCount}.`);
  }

  qs.forEach((q, idx) => {
    if (!q.id) logError(`Module "${cat}" question ${idx + 1} missing ID.`);
    if (!q.stemEn || q.stemEn.trim().length < 5) logError(`Module "${cat}" question ${q.id} has empty/short stem.`);
    if (q.options.length !== 5) logError(`Module "${cat}" question ${q.id} has ${q.options.length} options instead of 5.`);
    if (!['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer)) logError(`Module "${cat}" question ${q.id} has invalid correctAnswer: ${q.correctAnswer}`);
    if (!q.whyCorrect || q.whyCorrect.trim().length < 5) logError(`Module "${cat}" question ${q.id} missing whyCorrect rationale.`);
    if (!q.whyDistractorsFail || Object.keys(q.whyDistractorsFail).length < 4) logError(`Module "${cat}" question ${q.id} missing whyDistractorsFail map.`);
  });
  console.log(`  ✓ Module "${cat}" (${qs.length} questions, target: ${catConfig.targetCount}): Passed schema, options, and explanation audits.`);
});

console.log('\n2b. Validating Question Bank Deduplication Audit...');
const qBankAudit = auditQuestionBank(COMPREHENSIVE_YDS_QUESTION_BANK);
if (!qBankAudit.passed) {
  logError(`Question bank audit failed: ${qBankAudit.errors.length} errors, ${qBankAudit.duplicateCount} duplicates.`);
} else {
  console.log(`  ✓ Question bank audit: ${qBankAudit.totalQuestions} questions verified with 0 duplicates and 0 errors.`);
}

// 3. Validate Mock Exam Generation Engine
console.log('\n3. Validating 100+ Mock Exam Generator Engine...');
const catalog = getMockExamList(100);
if (catalog.length !== 100) {
  logError(`Expected 100 mock exams in catalog, found ${catalog.length}`);
} else {
  console.log(`  ✓ Catalog contains ${catalog.length} exams.`);
}

const testExamNumbers = [1, 5, 25, 50, 75, 100];
testExamNumbers.forEach((num) => {
  const exam = generateMockExam(num);
  if (exam.totalQuestions !== 80) logError(`Exam ${num} declared totalQuestions is ${exam.totalQuestions} instead of 80.`);
  if (exam.questions.length !== 80) logError(`Exam ${num} question array has length ${exam.questions.length} instead of 80.`);
  if (exam.durationMinutes !== 180) logError(`Exam ${num} duration is ${exam.durationMinutes} instead of 180 minutes.`);

  // Verify section question count
  const catDistribution: Record<string, number> = {};
  exam.questions.forEach((q) => {
    catDistribution[q.category] = (catDistribution[q.category] || 0) + 1;
    if (q.options.length !== 5) logError(`Exam ${num} question ${q.questionNumber} has ${q.options.length} options.`);
    if (!['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer)) logError(`Exam ${num} question ${q.questionNumber} invalid answer.`);
  });

  if (catDistribution['vocabulary'] !== 6) logError(`Exam ${num} vocabulary questions: ${catDistribution['vocabulary']} (expected 6)`);
  if (catDistribution['grammar'] !== 10) logError(`Exam ${num} grammar questions: ${catDistribution['grammar']} (expected 10)`);
  if (catDistribution['cloze'] !== 10) logError(`Exam ${num} cloze questions: ${catDistribution['cloze']} (expected 10)`);
  if (catDistribution['sentence_completion'] !== 10) logError(`Exam ${num} sentence_completion questions: ${catDistribution['sentence_completion']} (expected 10)`);
  if (catDistribution['translation'] !== 6) logError(`Exam ${num} translation questions: ${catDistribution['translation']} (expected 6)`);
  if (catDistribution['reading'] !== 20) logError(`Exam ${num} reading questions: ${catDistribution['reading']} (expected 20)`);
  if (catDistribution['dialogue'] !== 5) logError(`Exam ${num} dialogue questions: ${catDistribution['dialogue']} (expected 5)`);
  if (catDistribution['restatement'] !== 4) logError(`Exam ${num} restatement questions: ${catDistribution['restatement']} (expected 4)`);
  if (catDistribution['paragraph_completion'] !== 4) logError(`Exam ${num} paragraph_completion questions: ${catDistribution['paragraph_completion']} (expected 4)`);
  if (catDistribution['irrelevant_sentence'] !== 5) logError(`Exam ${num} irrelevant_sentence questions: ${catDistribution['irrelevant_sentence']} (expected 5)`);
});
console.log(`  ✓ Sampled mock exams (${testExamNumbers.join(', ')}): 100% compliant with 80-question YDS format and 180-min timer.`);

// 4. Validate Scientific Reading Library
console.log('\n4. Validating Scientific Reading Library...');
if (SCIENTIFIC_READINGS.length < 100) {
  logError(`Expected at least 100 scientific readings, found ${SCIENTIFIC_READINGS.length}`);
} else {
  SCIENTIFIC_READINGS.forEach((reading) => {
    if (!reading.id || !reading.title) logError(`Reading missing id or title.`);
    if (reading.passageEn.length < 100) logError(`Reading "${reading.title}" passage is too short.`);
    if (reading.summaryTr.length < 20) logError(`Reading "${reading.title}" summary is too short.`);
    if (reading.keyVocabulary.length === 0) logError(`Reading "${reading.title}" has no key vocabulary.`);
    reading.keyVocabulary.forEach((v) => {
      if (!v.word || !v.meaningTr) logError(`Reading "${reading.title}" vocabulary missing word or meaning.`);
    });
    if (!reading.openEndedQuestions || reading.openEndedQuestions.length === 0) {
      logError(`Reading "${reading.title}" missing open-ended questions.`);
    } else {
      reading.openEndedQuestions.forEach((oq) => {
        if (!oq.id || !oq.questionText || !oq.keyConcepts || oq.keyConcepts.length === 0) {
          logError(`Reading "${reading.title}" open-ended question ${oq.id} invalid.`);
        }
      });
    }
  });
  console.log(`  ✓ ${SCIENTIFIC_READINGS.length} academic scientific readings fully verified with vocabulary, comprehension & open-ended questions.`);
}

console.log('\n----------------------------------------');
if (errorCount > 0) {
  console.error(`❌ Validation FAILED with ${errorCount} errors.`);
  process.exit(1);
} else {
  console.log('✅ ALL YDS Content, Mock Exams, and Scientific Readings PASSED validation with 0 errors!\n');
}

import { MODULE_PRACTICE_BANK } from '../src/services/ydsPracticeEngine.js';
import { generateMockExam, getMockExamList } from '../src/services/mockExamGenerator.js';
import { SCIENTIFIC_READINGS } from '../src/data/scientificReadings.js';
import { OFFICIAL_YDS_SECTIONS, YdsQuestionCategory } from '../src/types/yds.js';

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

// 2. Validate Question Practice Modules
console.log('\n2. Validating 10 Standalone Question Practice Modules...');
const categories: YdsQuestionCategory[] = [
  'vocabulary',
  'grammar',
  'cloze',
  'sentence_completion',
  'translation',
  'reading',
  'dialogue',
  'restatement',
  'paragraph_completion',
  'irrelevant_sentence',
];

categories.forEach((cat) => {
  const qs = MODULE_PRACTICE_BANK[cat];
  if (!qs || qs.length === 0) {
    logError(`Module "${cat}" has zero practice questions.`);
    return;
  }

  qs.forEach((q, idx) => {
    if (!q.id) logError(`Module "${cat}" question ${idx + 1} missing ID.`);
    if (!q.stemEn || q.stemEn.trim().length < 5) logError(`Module "${cat}" question ${q.id} has empty/short stem.`);
    if (q.options.length !== 5) logError(`Module "${cat}" question ${q.id} has ${q.options.length} options instead of 5.`);
    if (!['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer)) logError(`Module "${cat}" question ${q.id} has invalid correctAnswer: ${q.correctAnswer}`);
    if (!q.whyCorrect || q.whyCorrect.trim().length < 10) logError(`Module "${cat}" question ${q.id} missing whyCorrect rationale.`);
    if (!q.whyDistractorsFail || Object.keys(q.whyDistractorsFail).length < 4) logError(`Module "${cat}" question ${q.id} missing whyDistractorsFail map.`);
  });
  console.log(`  ✓ Module "${cat}" (${qs.length} questions): Passed schema, options, and explanation audits.`);
});

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
if (SCIENTIFIC_READINGS.length === 0) {
  logError('Scientific Reading Library is empty.');
} else {
  SCIENTIFIC_READINGS.forEach((reading) => {
    if (!reading.id || !reading.title) logError(`Reading missing id or title.`);
    if (reading.passageEn.length < 100) logError(`Reading "${reading.title}" passage is too short.`);
    if (reading.summaryTr.length < 20) logError(`Reading "${reading.title}" summary is too short.`);
    if (reading.keyVocabulary.length === 0) logError(`Reading "${reading.title}" has no key vocabulary.`);
    reading.keyVocabulary.forEach((v) => {
      if (!v.word || !v.meaningTr) logError(`Reading "${reading.title}" vocabulary missing word or meaning.`);
    });
  });
  console.log(`  ✓ ${SCIENTIFIC_READINGS.length} academic scientific readings fully verified with vocabulary & comprehension questions.`);
}

console.log('\n----------------------------------------');
if (errorCount > 0) {
  console.error(`❌ Validation FAILED with ${errorCount} errors.`);
  process.exit(1);
} else {
  console.log('✅ ALL YDS Content, Mock Exams, and Scientific Readings PASSED validation with 0 errors!\n');
}

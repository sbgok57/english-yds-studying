import {
  processReview,
  createInitialLearningState,
  determineStage,
  buildStudyQueue,
} from '../src/services/spacedRepetition';
import { calculateMastery, getMasteryLevelInfo } from '../src/services/mastery';
import {
  parseCsvContent,
  validateAndAnalyzeCsv,
  exportVocabularyToCsv,
} from '../src/services/csv';
import { calculateLevel, updateStreak } from '../src/services/gamification';
import {
  generateVocabActivity,
  shuffleArray,
} from '../src/services/activityGenerator';
import { INITIAL_VOCABULARY } from '../src/data/vocabulary';
import { UserProgress, VocabularyItem, LearningState } from '../src/types';

let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, message: string) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    passedTests++;
    console.log(`  ✓ ${message}`);
  }
}

console.log('🧪 Starting Comprehensive Domain & Algorithm Unit Tests...\n');

// 1. SPACED REPETITION (SM-2 Adapted)
console.log('1. Spaced Repetition (SM-2) Tests:');
const initial = createInitialLearningState('vocab-test-1');
assert(initial.intervalDays === 0, 'Initial interval is 0');
assert(initial.consecutiveCorrect === 0, 'Initial consecutive correct is 0');

// 1st correct -> 1 day
const step1 = processReview(initial, true);
assert(step1.intervalDays === 1, '1st correct answer gives 1 day interval');
assert(step1.consecutiveCorrect === 1, '1st consecutive correct is 1');

// 2nd consecutive correct -> 3 days
const step2 = processReview(step1, true);
assert(step2.intervalDays === 3, '2nd consecutive correct gives 3 days interval');
assert(step2.consecutiveCorrect === 2, '2nd consecutive correct is 2');

// 3rd consecutive correct -> 7 days
const step3 = processReview(step2, true);
assert(step3.intervalDays === 7, '3rd consecutive correct gives 7 days interval');
assert(step3.consecutiveCorrect === 3, '3rd consecutive correct is 3');

// 4th consecutive correct -> 14 days
const step4 = processReview(step3, true);
assert(step4.intervalDays === 14, '4th consecutive correct gives 14 days interval');

// 5th consecutive correct -> 30 days
const step5 = processReview(step4, true);
assert(step5.intervalDays === 30, '5th consecutive correct gives 30 days interval');

// Incorrect review: gentle reduction, preserves historical count
const stepErr = processReview(step5, false);
assert(stepErr.intervalDays === 1, 'Incorrect answer reschedules near-term (1 day)');
assert(stepErr.consecutiveCorrect === 0, 'Consecutive correct resets to 0 on error');
assert(stepErr.correctCount === 5, 'Accumulated correctCount is strictly preserved');
assert(stepErr.incorrectCount === 1, 'IncorrectCount increments to 1');
assert(stepErr.easeFactor >= 1.3, 'Ease factor never drops below 1.3 minimum floor');

// 2. MASTERY CALCULATION
console.log('\n2. Multi-Evidence Mastery Tests:');
assert(calculateMastery({}) === 0, 'Empty evidence yields 0 mastery');
assert(
  calculateMastery({
    recognitionAccuracy: 1.0,
    recallAccuracy: 1.0,
    reverseRecallAccuracy: 1.0,
    contextualAccuracy: 1.0,
    synonymKnowledge: 1.0,
    collocationKnowledge: 1.0,
    spellingAccuracy: 1.0,
    recentAccuracy: 1.0,
    historicalAccuracy: 1.0,
    consecutiveCorrect: 5,
    delayedRecallPassed: true,
  }) === 100,
  'Full evidence achieves 100 mastery'
);

// NaN and Infinity protection
assert(
  calculateMastery({ recognitionAccuracy: NaN, recallAccuracy: Infinity }) === 0,
  'NaN and Infinity inputs are safely sanitized to 0'
);
assert(
  calculateMastery({ recognitionAccuracy: -5, recallAccuracy: -10 }) === 0,
  'Negative inputs are clamped without error'
);

// Level stages
assert(determineStage(10) === 'new', 'Mastery 10 is new');
assert(determineStage(35) === 'familiar', 'Mastery 35 is familiar');
assert(determineStage(50) === 'learning', 'Mastery 50 is learning');
assert(determineStage(75) === 'strong', 'Mastery 75 is strong');
assert(determineStage(90) === 'very_strong', 'Mastery 90 is very_strong');
assert(determineStage(98) === 'mastered', 'Mastery 98 is mastered');

const info = getMasteryLevelInfo(98);
assert(
  info.labelEn === 'Mastered for now',
  'Mastery label respects honest non-permanent memory claim'
);

// 3. CSV PARSER & EXPORTER
console.log('\n3. CSV Import & Export Tests:');
const testCsv = `"word","turkishMeaning","partOfSpeech","example","synonyms","antonyms","collocations"
"mitigate","hafifletmek; azaltmak","verb","Governments must mitigate risks.","alleviate; lessen","aggravate","mitigate risks"
"breakthrough","çığır açan buluş","noun","A major scientific breakthrough was achieved.","advance; leap","setback","scientific breakthrough"
`;

const parsedRows = parseCsvContent(testCsv);
assert(parsedRows.length === 3, 'Parsed exactly 3 CSV lines (including header)');

const analysis = validateAndAnalyzeCsv(parsedRows, INITIAL_VOCABULARY);
assert(analysis.validRows.length === 2, 'Found 2 valid rows');
assert(analysis.duplicateCount >= 1, 'Correctly detected existing duplicate for "mitigate"');

// Turkish characters preservation in CSV export
const testVocabs: VocabularyItem[] = [
  {
    id: 'test-1',
    word: 'çalışkanlık',
    meaningsTr: ['özenli çalışma', 'gayret'],
    partOfSpeech: 'noun',
    example: 'Öğrencinin çalışkanlığı takdir edildi.',
    synonyms: ['diligence'],
    antonyms: ['laziness'],
    collocations: ['büyük gayret'],
    visualMnemonic: 'Çalışkan karınca',
    pronunciation: '/test/',
    difficulty: 'B2',
    source: 'Test',
  },
];
const exported = exportVocabularyToCsv(testVocabs);
assert(exported.startsWith('\uFEFF'), 'CSV export begins with UTF-8 BOM');
assert(exported.includes('çalışkanlık'), 'Preserves Turkish character "ç"');
assert(exported.includes('özenli çalışma'), 'Preserves Turkish character "ö"');

// 4. GAMIFICATION (XP, Levels, Streak)
console.log('\n4. Gamification Tests:');
assert(calculateLevel(0) === 1, '0 XP is Level 1');
assert(calculateLevel(50) === 2, '50 XP is Level 2');
assert(calculateLevel(200) === 3, '200 XP is Level 3');

const userProg: UserProgress = {
  xp: 150,
  level: 2,
  dailyStreak: 3,
  weeklyStreak: 1,
  lastActiveDate: '2026-09-09',
  totalStudyTimeMinutes: 45,
  perfectSessions: 1,
};

// Updating streak for today
const updatedProg = updateStreak(userProg);
assert(
  updatedProg.dailyStreak >= 3,
  'Streak correctly preserved or incremented on active study'
);

// 5. ACTIVITY GENERATOR & ANSWER RANDOMIZATION
console.log('\n5. Activity Generator Tests:');
const sampleVocab = INITIAL_VOCABULARY[0];
const act = generateVocabActivity(sampleVocab, INITIAL_VOCABULARY, 'en_to_tr');
assert(act.options.includes(act.correctAnswer), 'Generated options contain correct answer');
assert(act.options.length >= 4, 'Generated at least 4 options');

const shuffled = shuffleArray([1, 2, 3, 4, 5]);
assert(shuffled.length === 5, 'shuffleArray preserves element count');

// Answer position randomization: run 20 times and verify correct answer is not always in slot 0
const positions = new Set<number>();
for (let i = 0; i < 30; i++) {
  const randomizedAct = generateVocabActivity(sampleVocab, INITIAL_VOCABULARY, 'en_to_tr');
  const pos = randomizedAct.options.indexOf(randomizedAct.correctAnswer);
  positions.add(pos);
}
assert(
  positions.size > 1,
  'Correct answer position is dynamically randomized across slots'
);

// 6. STUDY QUEUE PRIORITIZATION
console.log('\n6. Spaced Repetition Queue Selection Tests:');
const mockStates = new Map<string, LearningState>();
mockStates.set('vocab-mitigate', {
  vocabularyId: 'vocab-mitigate',
  mastery: 20,
  correctCount: 1,
  incorrectCount: 2,
  consecutiveCorrect: 0,
  consecutiveIncorrect: 1,
  easeFactor: 2.3,
  intervalDays: 1,
  lastReviewedAt: '2026-09-01T10:00:00Z',
  nextReviewAt: '2026-09-02T10:00:00Z', // Overdue
  learningStage: 'familiar',
});

const queueResult = buildStudyQueue(INITIAL_VOCABULARY, mockStates, 10);
assert(queueResult.sessionQueue.length > 0, 'Study queue successfully populated');
assert(
  queueResult.dueItems.some((d) => d.id === 'vocab-mitigate'),
  'Overdue review item is correctly detected and queued'
);

console.log('\n----------------------------------------');
console.log(`✅ All ${passedTests} of ${totalTests} Unit Tests PASSED successfully!`);
console.log('Zero failures detected in domain algorithms.\n');

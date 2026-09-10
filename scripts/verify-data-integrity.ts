import { dbService, storageService } from '../src/services/db';
import { VocabularyItem, LearningState, AppSettings } from '../src/types';

async function runDataIntegrityVerification() {
  console.log('🔬 Starting Formal Data Integrity Verification (Phase 40)...\n');

  // Test 1: Data Separation & Progress Preservation
  console.log('1. Testing Vocabulary Metadata Update vs Learning Progress:');
  const vocabId = 'vocab-test-integrity';
  const initialItem: VocabularyItem = {
    id: vocabId,
    word: 'integrity',
    meaningsTr: ['bütünlük', 'dürüstlük'],
    partOfSpeech: 'noun',
    example: 'Academic integrity is fundamental to scientific inquiry.',
    synonyms: ['honesty', 'probity'],
    antonyms: ['corruption', 'dishonesty'],
    collocations: ['academic integrity', 'personal integrity'],
    visualMnemonic: 'An unbroken shield of truth.',
    pronunciation: '/ɪnˈteɡ.rə.ti/',
    difficulty: 'B2',
    source: 'Integrity Test',
  };

  const initialLearningState: LearningState = {
    vocabularyId: vocabId,
    mastery: 62,
    correctCount: 8,
    incorrectCount: 3,
    consecutiveCorrect: 4,
    consecutiveIncorrect: 0,
    easeFactor: 2.6,
    intervalDays: 7,
    lastReviewedAt: '2026-09-01T12:00:00.000Z',
    nextReviewAt: '2026-09-08T12:00:00.000Z',
    learningStage: 'learning',
  };

  // Save initial records
  await dbService.saveVocabularyItem(initialItem);
  await dbService.saveLearningState(initialLearningState);

  // Read back to confirm
  const savedStateBefore = await dbService.getLearningState(vocabId);
  if (!savedStateBefore || savedStateBefore.mastery !== 62) {
    console.error('❌ FAILED: Initial state was not properly saved.');
    process.exit(1);
  }
  console.log('  ✓ Initial learning state successfully established (Mastery: 62%, Interval: 7d)');

  // UPDATE VOCABULARY METADATA: Change example, synonyms, meanings
  const updatedItem: VocabularyItem = {
    ...initialItem,
    meaningsTr: ['tamlık', 'bozulmamışlık', 'akademik dürüstlük'],
    example: 'The structural integrity of the bridge was verified by civil engineers.',
    synonyms: ['soundness', 'completeness', 'rectitude'],
    collocations: ['structural integrity', 'compromise integrity'],
  };

  await dbService.saveVocabularyItem(updatedItem);
  console.log('  ✓ Vocabulary metadata updated with new example sentence and synonyms.');

  // VERIFY LEARNING PROGRESS IS 100% UNTOUCHED
  const savedStateAfter = await dbService.getLearningState(vocabId);
  if (!savedStateAfter) {
    console.error('❌ FAILED: Learning state disappeared after metadata update!');
    process.exit(1);
  }

  const matches =
    savedStateAfter.mastery === 62 &&
    savedStateAfter.correctCount === 8 &&
    savedStateAfter.incorrectCount === 3 &&
    savedStateAfter.consecutiveCorrect === 4 &&
    savedStateAfter.intervalDays === 7 &&
    savedStateAfter.nextReviewAt === '2026-09-08T12:00:00.000Z' &&
    savedStateAfter.lastReviewedAt === '2026-09-01T12:00:00.000Z';

  if (!matches) {
    console.error('❌ FAILED: Learning state was altered during metadata update!');
    console.error('State before:', savedStateBefore);
    console.error('State after:', savedStateAfter);
    process.exit(1);
  }

  console.log('  ✓ CRITICAL VERIFICATION PASSED: Mutable LearningState survived metadata update with ZERO changes:');
  console.log(`    - Mastery: ${savedStateAfter.mastery}% (Unchanged)`);
  console.log(`    - Correct Count: ${savedStateAfter.correctCount} (Unchanged)`);
  console.log(`    - Incorrect Count: ${savedStateAfter.incorrectCount} (Unchanged)`);
  console.log(`    - Interval Days: ${savedStateAfter.intervalDays} (Unchanged)`);
  console.log(`    - Next Review: ${savedStateAfter.nextReviewAt} (Unchanged)`);

  // Test 2: LocalStorage Settings Persistence
  console.log('\n2. Testing Settings Persistence:');
  const testSettings: AppSettings = {
    theme: 'dark',
    voiceEnabled: true,
    voiceVolume: 0.8,
    voiceSpeed: 'slow',
    voiceGender: 'female',
    languageSupportLevel: 'bilingual',
    sessionDurationMinutes: 30,
    dailyGoalWords: 25,
    soundEffects: false,
  };

  storageService.saveSettings(testSettings);
  const loadedSettings = storageService.getSettings();
  if (
    loadedSettings.theme !== 'dark' ||
    loadedSettings.voiceSpeed !== 'slow' ||
    loadedSettings.sessionDurationMinutes !== 30
  ) {
    console.error('❌ FAILED: Settings did not persist correctly.');
    process.exit(1);
  }
  console.log('  ✓ Settings persistence verified successfully.');

  console.log('\n----------------------------------------');
  console.log('✅ ALL Phase 40 Data Integrity Verifications PASSED!\n');
  process.exit(0);
}

runDataIntegrityVerification();

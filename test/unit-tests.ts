import { hashString, shuffleWithSeed, getExamQuestions, getPracticeExamIds } from "../src/lib/data-exams";
import { BANK } from "../src/lib/data-bank";
import {
  BankQuestionSchema,
  ExamQuestionsArraySchema,
  deepCloneQuestion,
  calculateYdsNet,
  migrateUsageData,
} from "../src/lib/exam-validator";
import { validateAllTensesData, TENSE_TOPICS, TENSE_LEVELS } from "../src/lib/data-tenses-expanded";
import { defaultUsage, type UsageData } from "../src/lib/store";

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    failed++;
    console.error(`❌ FAIL: ${message}`);
    throw new Error(message);
  } else {
    passed++;
    console.log(`✅ PASS: ${message}`);
  }
}

async function runAllUnitTests() {
  console.log("==========================================");
  console.log("🚀 STARTING YDS MASTER COMPREHENSIVE UNIT TESTS");
  console.log("==========================================\n");

  // 1. hashString & shuffleWithSeed Determinism & Idempotency
  console.log("--- 1. Deterministic RNG & Shuffling ---");
  const h1 = hashString("yds-2024-ilkbahar");
  const h2 = hashString("yds-2024-ilkbahar");
  const h3 = hashString("yds-2023-sonbahar");
  assert(h1 === h2, "hashString must be idempotent for identical input strings");
  assert(h1 !== h3, "hashString must produce different hashes for different inputs");

  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const s1 = shuffleWithSeed(sampleArray, 12345);
  const s2 = shuffleWithSeed(sampleArray, 12345);
  const s3 = shuffleWithSeed(sampleArray, 99999);
  assert(JSON.stringify(s1) === JSON.stringify(s2), "shuffleWithSeed must produce identical order for same seed");
  assert(JSON.stringify(s1) !== JSON.stringify(s3), "shuffleWithSeed must produce different order for different seeds");
  assert(s1.length === sampleArray.length, "shuffleWithSeed must preserve array length");

  // 2. Shared BANK Immutability Snapshot Test
  console.log("\n--- 2. Shared BANK Immutability Snapshot ---");
  const snapshotBefore = JSON.stringify(BANK.slice(0, 100));
  for (let i = 0; i < 25; i++) {
    getExamQuestions(`random-seed-${i}`);
  }
  const snapshotAfter = JSON.stringify(BANK.slice(0, 100));
  assert(snapshotBefore === snapshotAfter, "Shared BANK must remain strictly immutable across exam generations");

  // 3. Deep Clone Verification
  console.log("\n--- 3. Deep Clone Isolation ---");
  const originalQ = BANK[0];
  const clonedQ = deepCloneQuestion(originalQ);
  clonedQ.s = "MUTATED_STEM";
  clonedQ.o[0] = "MUTATED_OPTION";
  assert(originalQ.s !== clonedQ.s, "Mutating cloned question stem must never affect original");
  assert(originalQ.o[0] !== clonedQ.o[0], "Mutating cloned options must never affect original");

  // 4. 100 Exams Generation & Structure Test
  console.log("\n--- 4. 100 Exams Generation & Schema Verification ---");
  const examIds = getPracticeExamIds();
  assert(examIds.length === 100, "getPracticeExamIds must return exactly 100 exam IDs");

  for (let i = 0; i < 100; i++) {
    const examId = examIds[i].id;
    const questions = getExamQuestions(examId);
    assert(questions.length === 80, `Exam ${examId} must contain exactly 80 questions`);
    
    // Check questions array schema
    ExamQuestionsArraySchema.parse(questions);
    
    // Check deterministic repeat
    const repeatQuestions = getExamQuestions(examId);
    assert(
      JSON.stringify(questions) === JSON.stringify(repeatQuestions),
      `Exam ${examId} must generate identical questions and options on repeat invocation`
    );
  }

  // 5. Unified YDS Net Formula Test
  console.log("\n--- 5. YDS Net Formula Calculation ---");
  assert(calculateYdsNet(80, 0) === 80, "80 correct, 0 wrong => 80 net");
  assert(calculateYdsNet(0, 80) === 0, "0 correct, 80 wrong => 0 net (never negative)");
  assert(calculateYdsNet(60, 20) === 55, "60 correct, 20 wrong => 60 - 5 = 55 net");
  assert(calculateYdsNet(70, 10) === 67.5, "70 correct, 10 wrong => 70 - 2.5 = 67.5 net");
  assert(calculateYdsNet(4, 16) === 0, "4 correct, 16 wrong => 4 - 4 = 0 net");
  assert(calculateYdsNet(2, 20) === 0, "2 correct, 20 wrong => max(0, 2 - 5) = 0 net");

  // 6. Corrupted localStorage Migration Test
  console.log("\n--- 6. Corrupted LocalStorage State Migration ---");
  const defaultState = defaultUsage();
  
  // Test null / undefined / empty
  const migratedNull = migrateUsageData(null, defaultState);
  assert(migratedNull.sessions === 1, "Null state migrates to default sessions 1");
  assert(typeof migratedNull.exams === "object", "Migrated state must have exams dictionary");
  assert(migratedNull.exams.taken === 0, "Migrated null state initializes exams.taken to 0");

  // Test non-object primitives
  const migratedString = migrateUsageData("corrupted_json_string", defaultState);
  assert(migratedString.sessions === 1, "Corrupted string migrates to valid default state");

  // Test partial corrupted state with missing exams
  const corruptedPartial = {
    sessions: 42,
    exams: null, // corrupted null exams
    words: { abandon: { c: 3, w: 1, last: Date.now() } },
  };
  const migratedPartial = migrateUsageData(corruptedPartial, defaultState);
  assert(migratedPartial.sessions === 42, "Preserves valid sessions count");
  assert(typeof migratedPartial.exams === "object" && migratedPartial.exams !== null, "Repairs corrupted null exams to object");
  assert(migratedPartial.words.abandon.c === 3, "Preserves valid word history");

  // 7. 1,000 Questions Schema Validation & Balance
  console.log("\n--- 7. 1,000 Bank Questions Validation & Balance ---");
  assert(BANK.length === 1000, "BANK must contain exactly 1,000 questions");

  const optionCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  for (let i = 0; i < BANK.length; i++) {
    const q = BANK[i];
    BankQuestionSchema.parse(q);
    optionCounts[q.a] = (optionCounts[q.a] || 0) + 1;
    assert(q.sourceType === "original-yds-style", `Question ${q.id} must have sourceType 'original-yds-style'`);
    assert(q.isOfficial === false, `Question ${q.id} must have isOfficial false`);
  }
  console.log("Answer Distribution:", optionCounts);
  assert(optionCounts[0] === 200, "Option A must appear exactly 200 times (20%)");
  assert(optionCounts[1] === 200, "Option B must appear exactly 200 times (20%)");
  assert(optionCounts[2] === 200, "Option C must appear exactly 200 times (20%)");
  assert(optionCounts[3] === 200, "Option D must appear exactly 200 times (20%)");
  assert(optionCounts[4] === 200, "Option E must appear exactly 200 times (20%)");

  // 8. 17 Tenses x 7 Levels (119 Blocks) Validation
  console.log("\n--- 8. 17 Tenses x 7 Levels (119 Blocks) Validation ---");
  const tenseValidation = validateAllTensesData();
  assert(tenseValidation.valid === true, "validateAllTensesData() must return valid: true");
  assert(tenseValidation.totalBlocks === 119, "Must validate exactly 119 blocks (17 tenses x 7 levels)");
  assert(tenseValidation.errors.length === 0, "Must have zero validation errors");
  assert(TENSE_TOPICS.length === 17, "TENSE_TOPICS must have exactly 17 topics");
  assert(Object.keys(TENSE_LEVELS).length === 17, "TENSE_LEVELS must have keys for all 17 tenses");

  console.log("\n==========================================");
  console.log(`🎉 ALL UNIT TESTS COMPLETED SUCCESSFULLY!`);
  console.log(`Passed: ${passed}, Failed: ${failed}`);
  console.log("==========================================");
}

runAllUnitTests().catch((err) => {
  console.error("FATAL ERROR IN UNIT TESTS:", err);
  process.exit(1);
});

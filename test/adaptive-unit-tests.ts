// Unit tests for CEFR Level Thresholds, Adaptive Plans, Spaced Repetition, and Mistake Notebook

import { evaluateCefrLevel } from "../src/lib/adaptive/level-thresholds";
import { scheduleNextReview, isDueForReview, getReviewUrgency } from "../src/lib/adaptive/retention-engine";
import { generateCustomStudyPlan } from "../src/lib/data-study-plans";
import { migrateUserData } from "../src/lib/migration/user-data-migration";

let totalErrors = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    totalErrors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log("🚀 [TEST:ADAPTIVE] Running Adaptive & Retention Engine Unit Tests...");

// 1. CEFR Level Thresholds Engine Tests
console.log("\n--- 1. CEFR Level Thresholds ---");

// Case 1: Solid C2 student
const c2Result = evaluateCefrLevel({
  levelAccuracy: { A1: 90, A2: 85, B1: 85, B2: 80, C1: 85, C2: 85 },
  skillAccuracy: { grammar: 85, vocabulary: 85, reading: 80, sentence: 80, translation: 85 },
  emptyCount: 0,
  totalQuestions: 42,
});
assert(c2Result.level === "C2", `Solid C2 scores should evaluate to C2 (got ${c2Result.level})`);
assert(c2Result.confidence === "high", `High C2 accuracy should have high confidence`);

// Case 2: B2 student with border potential for C1
const b2BorderResult = evaluateCefrLevel({
  levelAccuracy: { A1: 90, A2: 85, B1: 80, B2: 75, C1: 55, C2: 30 },
  skillAccuracy: { grammar: 75, vocabulary: 70, reading: 65, sentence: 70, translation: 70 },
  emptyCount: 0,
  totalQuestions: 42,
});
assert(b2BorderResult.level === "B2", `Should evaluate to B2 (got ${b2BorderResult.level})`);
assert(b2BorderResult.levelBand === "B2–C1", `Should identify border B2-C1 (got ${b2BorderResult.levelBand})`);
assert(!!b2BorderResult.borderNote, `Should provide a border note for borderline student`);

// Case 3: Naive random guesser (A1 poor, but guessed two C2 questions correctly)
const randomGuesserResult = evaluateCefrLevel({
  levelAccuracy: { A1: 30, A2: 20, B1: 20, B2: 20, C1: 30, C2: 60 },
  skillAccuracy: { grammar: 25, vocabulary: 30, reading: 20, sentence: 30, translation: 20 },
  emptyCount: 5,
  totalQuestions: 42,
});
assert(
  randomGuesserResult.level === "A1",
  `Guesser without A1/A2 foundation must NOT be awarded C2 (got ${randomGuesserResult.level})`
);

// 2. Spaced Repetition (Retention Engine) Tests
console.log("\n--- 2. Spaced Repetition Engine ---");

const initialItem = scheduleNextReview({ id: "word-1" }, 4, 1000000);
assert(initialItem.repetitionCount === 1, `First correct review should increment repetition to 1`);
assert(initialItem.successStreak === 1, `First review streak should be 1`);
assert(initialItem.intervalDays === 1, `First interval should be 1 day`);
assert(!initialItem.mastered, `Item should not be mastered after 1 review`);

// Second review with perfect recall (quality 5)
const secondItem = scheduleNextReview(initialItem, 5, 1000000 + 86400000);
assert(secondItem.repetitionCount === 2, `Second review should increment repetition to 2`);
assert(secondItem.successStreak === 2, `Streak should be 2`);
assert(secondItem.intervalDays === 3, `Second interval should be 3 days`);

// Lapse test (quality 1 - failed recall)
const lapseItem = scheduleNextReview(secondItem, 1, 1000000 + 86400000 * 4);
assert(lapseItem.successStreak === 0, `Lapse should reset streak to 0`);
assert(lapseItem.intervalDays < 1, `Lapse interval should reset to immediate review (<1 day)`);

// Mastery progression test (4 consecutive passes)
let masterCandidate = { id: "word-master" };
for (let i = 0; i < 4; i++) {
  masterCandidate = scheduleNextReview(masterCandidate, 5, 2000000 + i * 86400000 * 5);
}
assert((masterCandidate as any).mastered === true, `4 consecutive successful reviews should mark item as mastered`);

// Due check test
const overdueItem = { ...initialItem, nextReviewAt: 500000 };
assert(isDueForReview(overdueItem, 600000), `Item with past nextReviewAt must be due for review`);
assert(
  getReviewUrgency(overdueItem, 500000 + 48 * 60 * 60 * 1000) === "overdue",
  `Far overdue item should be labeled overdue`
);

// 3. Adaptive Study Plan Generator Tests
console.log("\n--- 3. Adaptive Study Plan Generator ---");

const customPlan = generateCustomStudyPlan({
  currentLevel: "B1",
  targetLevel: "B2",
  targetScore: 75,
  totalDays: 45,
  dailyMinutes: 60,
});

assert(customPlan.totalDays === 45, `Plan must have exactly 45 total days`);
assert(customPlan.dailyMinutes === 60, `Plan must have 60 daily minutes`);
assert(customPlan.weeks.length === Math.ceil(45 / 7), `Plan should have proper week count`);
assert(customPlan.checkpoints.length === 4, `Plan should include 4 checkpoints`);
assert(customPlan.memoryStrategy.length >= 4, `Plan must include evidence-based memory strategies`);

// Verify task composition inside day 1
const day1Tasks = customPlan.weeks[0].days[0].tasks;
assert(day1Tasks.length >= 3, `Day 1 should have at least 3 structured tasks`);
assert(
  day1Tasks.some((t) => t.module === "vocabulary"),
  `Day 1 must include vocabulary task`
);
assert(
  day1Tasks.some((t) => t.module === "grammar" || t.module === "tactics"),
  `Day 1 must include grammar or tactics task`
);

// 4. User Data Migration Tests
console.log("\n--- 4. User Data Migration Engine ---");

const rawV0Data = {
  words: {
    ephemeral: { c: 5, w: 1 },
  },
  exams: {
    taken: 3,
    bestNet: 65,
  },
};

const migrated = migrateUserData(rawV0Data);
assert(migrated.version === 2, `Migrated data must be version 2 (got ${migrated.version})`);
assert(migrated.words["ephemeral"].c === 5, `Words count must be preserved`);
assert(migrated.exams.bestNet === 65, `Best net must be preserved`);
assert(Array.isArray(migrated.mistakeNotebook), `mistakeNotebook array must be initialized`);
assert(migrated.levelTest.lastAssessment === null, `Default lastAssessment must be safely null`);
assert(typeof migrated.points.total === "number", `Points total must be safe number`);

if (totalErrors > 0) {
  console.error(`\n💥 [TEST:ADAPTIVE] Tests failed with ${totalErrors} errors.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [TEST:ADAPTIVE] All adaptive and retention unit tests passed cleanly!`);
  process.exit(0);
}

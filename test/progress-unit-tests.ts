// ============================================================
// test/progress-unit-tests.ts
// Unit tests for student progress percentage calculation
// ============================================================

import {
  calculateStudentProgress,
  getProgressMilestone,
  PROGRESS_TARGETS,
} from "../src/lib/progress/calculator";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${msg}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${msg}`);
}

console.log("🚀 [TEST:PROGRESS] Running Student Progress Percentage Unit Tests...\n");

// 1. Initial State (New Student)
const initial = calculateStudentProgress({});
assert(initial.overallPercent === 0, "Initial progress must be 0%");
assert(initial.milestoneTitle === "Yolculuk Başlıyor", "Initial milestone title must be 'Yolculuk Başlıyor'");
assert(initial.vocabulary.percent === 0, "Initial vocabulary percentage must be 0%");
assert(initial.grammar.percent === 0, "Initial grammar percentage must be 0%");
assert(initial.tactics.percent === 0, "Initial tactics percentage must be 0%");
assert(initial.practice.percent === 0, "Initial practice percentage must be 0%");

// 2. Milestone thresholds
assert(getProgressMilestone(0).title === "Yolculuk Başlıyor", "0% is 'Yolculuk Başlıyor'");
assert(getProgressMilestone(10).title === "Temel Atılıyor", "10% is 'Temel Atılıyor'");
assert(getProgressMilestone(25).title === "İvme Yakalandı", "25% is 'İvme Yakalandı'");
assert(getProgressMilestone(50).title === "Yarı Maraton Aşıldı", "50% is 'Yarı Maraton Aşıldı'");
assert(getProgressMilestone(75).title === "Hedefe Çeyrek Kaldı", "75% is 'Hedefe Çeyrek Kaldı'");
assert(getProgressMilestone(100).title === "YDS Efsanesi", "100% is 'YDS Efsanesi'");

// 3. Partial Progress & Weighting Verification
// 50% words (243/485) -> 50% * 0.35 = 17.5%
// 50% grammar (10/20) -> 50% * 0.30 = 15%
// 50% tactics (6/11)  -> 55% * 0.15 = 8.25%
// 50% practice (250q, 3 exams) -> 53% * 0.20 = 10.6%
// Total = ~51%
const halfway = calculateStudentProgress({
  wordsLearned: 243,
  grammarCompleted: 10,
  tacticsCompleted: 6,
  questionsSolved: 250,
  examsTaken: 3,
});
assert(halfway.overallPercent >= 48 && halfway.overallPercent <= 54, `Halfway progress should be around 51% (got ${halfway.overallPercent}%)`);
assert(halfway.milestoneTitle === "Yarı Maraton Aşıldı", `Milestone should be 'Yarı Maraton Aşıldı' (got ${halfway.milestoneTitle})`);

// 4. Over-target Clamping (Never exceed 100%)
const maxed = calculateStudentProgress({
  wordsLearned: 1000,
  grammarCompleted: 50,
  tacticsCompleted: 30,
  questionsSolved: 2000,
  examsTaken: 20,
});
assert(maxed.overallPercent === 100, `Clamped progress must be 100% (got ${maxed.overallPercent}%)`);
assert(maxed.vocabulary.percent === 100, "Vocabulary percent must cap at 100%");
assert(maxed.grammar.percent === 100, "Grammar percent must cap at 100%");
assert(maxed.tactics.percent === 100, "Tactics percent must cap at 100%");
assert(maxed.practice.percent === 100, "Practice percent must cap at 100%");
assert(maxed.milestoneTitle === "YDS Efsanesi", "Maxed milestone must be 'YDS Efsanesi'");

// 5. Negative values resilience
const negative = calculateStudentProgress({
  wordsLearned: -50,
  grammarCompleted: -10,
  tacticsCompleted: -5,
  questionsSolved: -100,
  examsTaken: -2,
});
assert(negative.overallPercent === 0, "Negative inputs must clamp to 0%");

console.log("\n🎉 [TEST:PROGRESS] All Progress Percentage Unit Tests Passed Successfully!");

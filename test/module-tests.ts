import { INVENTORY_ITEMS, INVENTORY_METRICS, exportInventoryToCsv, sanitizeCsvField } from "../src/lib/data-inventory";
import { LEVEL_TEST_QUESTIONS, calculateLevelAssessment } from "../src/lib/data-level-test";
import { PRESET_STUDY_PLANS, LEVEL_STUDY_GUIDES, generateCustomStudyPlan } from "../src/lib/data-study-plans";
import { MOTIVATIONS } from "../src/lib/data-motivations";
import { BADGES } from "../src/lib/gamification/badges-data";
import { signSessionToken, verifySessionToken } from "../src/lib/server-auth";
import { getXpTitle, POINTS_CONFIG, awardPointsIdempotent, defaultPointsState } from "../src/lib/gamification/points-config";

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passed++;
    console.log(`✅ PASS: ${message}`);
  } else {
    failed++;
    console.error(`❌ FAIL: ${message}`);
  }
}

async function runTests() {
  console.log("=== RUNNING EXTENSIVE MODULE & DEPLOYMENT TESTS ===\n");

  // 1. Inventory Tests
  assert(INVENTORY_ITEMS.length === 485, `Inventory count must be 485 (actual: ${INVENTORY_ITEMS.length})`);
  assert(INVENTORY_METRICS.total === 485, "Metrics total must match 485");
  assert(INVENTORY_METRICS.B2 === 429, "B2 level count must be 429");
  assert(sanitizeCsvField("=cmd|' /C calc'!A0") === "'=cmd|' /C calc'!A0", "Formula injection with '=' must be sanitized");
  assert(sanitizeCsvField("+123") === "'+123", "Formula injection with '+' must be sanitized");
  assert(sanitizeCsvField("@echo") === "'@echo", "Formula injection with '@' must be sanitized");

  // 2. Study Plans Tests
  assert(PRESET_STUDY_PLANS.length === 10, `Must have 10 preset plans (actual: ${PRESET_STUDY_PLANS.length})`);
  assert(Object.keys(LEVEL_STUDY_GUIDES).length === 6, "Must have study guides for all 6 CEFR levels A1-C2");
  const customPlan = generateCustomStudyPlan({
    currentLevel: "A2",
    targetLevel: "B2",
    targetScore: 75,
    totalDays: 60,
    dailyMinutes: 60,
  });
  assert(customPlan.weeks.length === 9, "60-day plan must generate 9 weeks");
  assert(customPlan.checkpoints.length === 4, "Plan must have 4 quarterly checkpoints");

  // 3. Level Test Diagnostics Tests
  assert(LEVEL_TEST_QUESTIONS.length === 42, `Level test must have exactly 42 questions (actual: ${LEVEL_TEST_QUESTIONS.length})`);
  const perfectAnswers: Record<string, number> = {};
  LEVEL_TEST_QUESTIONS.forEach((q) => {
    perfectAnswers[q.id] = q.answer;
  });
  const perfectAssessment = calculateLevelAssessment(perfectAnswers, LEVEL_TEST_QUESTIONS);
  assert(perfectAssessment.estimatedLevel === "C2", `Perfect score must yield C2 (actual: ${perfectAssessment.estimatedLevel})`);
  assert(perfectAssessment.scorePercent === 100, "Score percent must be 100%");
  assert(perfectAssessment.totalCorrect === 42, "Correct count must be 42");

  // 4. Motivations Data Tests
  assert(MOTIVATIONS.length === 10000, `Must have exactly 10000 motivations (actual: ${MOTIVATIONS.length})`);
  assert(MOTIVATIONS.every((m) => m.id && m.turkish && m.english && m.friendlyNote), "Every motivation must have valid fields");

  // 5. Gamification & XP Tests
  assert(BADGES.length === 42, `Must have exactly 42 badges (actual: ${BADGES.length})`);
  assert(BADGES.filter((b) => b.hidden).length === 6, "Must have exactly 6 hidden secret badges");
  const title0 = getXpTitle(0);
  assert(title0.current.title === "Yeni Yolcu", "0 XP title must be Yeni Yolcu");
  const title3500 = getXpTitle(3500);
  assert(title3500.current.title === "Net Savaşçısı", "3500 XP title must be Net Savaşçısı");
  const title25000 = getXpTitle(25000);
  assert(title25000.current.title === "Zirve Efsanesi", "25000 XP title must be Zirve Efsanesi");

  const ptState = defaultPointsState();
  const res1 = awardPointsIdempotent(ptState, { id: "test-pt-1", type: "streak_7", points: 100, sourceId: "s1" });
  assert(res1.awarded === true, "First point award must succeed");
  const res2 = awardPointsIdempotent(res1.updatedState, { id: "test-pt-1", type: "streak_7", points: 100, sourceId: "s1" });
  assert(res2.awarded === false, "Duplicate point award with same ID must be rejected");

  // 6. Server Auth Web Crypto
  const testPayload = { userId: "user-abc-123", email: "student@ydsmaster.com", username: "student", name: "Student" };
  const token = await signSessionToken(testPayload);
  assert(typeof token === "string" && token.split(".").length === 3, "JWT session token must have 3 segments");
  const verified = await verifySessionToken(token);
  assert(verified?.userId === "user-abc-123", "Verified userId must match");
  assert(verified?.email === "student@ydsmaster.com", "Verified email must match");

  console.log(`\n==========================================`);
  console.log(`MODULE VERIFICATION RESULT: ${passed} PASSED, ${failed} FAILED`);
  console.log(`==========================================\n`);

  if (failed > 0) process.exit(1);
}

runTests().catch((e) => {
  console.error(e);
  process.exit(1);
});

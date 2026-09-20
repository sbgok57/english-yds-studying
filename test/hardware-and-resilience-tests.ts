import assert from "assert";
import { getHardwareProfile, shouldThrottleGraphics } from "../src/lib/hardware-optimizer";
import { classifyError, reportCrash, getRecentCrashes, isSafeModeActive, resetSafeMode } from "../src/lib/crash-guardian";
import {
  saveSessionCheckpoint,
  loadSessionCheckpoint,
  clearSessionCheckpoint,
  getInterruptedSession,
  ExamCheckpoint,
  LevelTestCheckpoint,
} from "../src/lib/state-preservation";

async function runResilienceTests() {
  console.log("▶ Starting Hardware Optimization & Crash Resilience Unit Tests...");

  // 1. Hardware Profile
  console.log("  1. Testing Hardware & OS Optimizer Profile...");
  const profile = getHardwareProfile();
  assert(["low", "balanced", "high", "ultra"].includes(profile.tier), "Tier must be a valid tier");
  assert(profile.dpr >= 1 && profile.dpr <= 2, "DPR must be clamped safely between 1.0 and 2.0");
  assert(profile.cores >= 1, "Cores must be at least 1");
  assert(typeof profile.maxParticles === "number", "maxParticles must be a number");
  assert(profile.maxFps === 30 || profile.maxFps === 60, "maxFps must be 30 or 60");

  // 2. Crash Classification
  console.log("  2. Testing Crash Guardian Error Classification...");
  assert.strictEqual(classifyError(new Error("Loading chunk 404 failed")), "CHUNK_LOAD_ERROR");
  assert.strictEqual(classifyError(new Error("Failed to fetch dynamically imported module")), "CHUNK_LOAD_ERROR");
  assert.strictEqual(classifyError({ name: "QuotaExceededError", message: "Storage quota exceeded" }), "STORAGE_QUOTA_EXCEEDED");
  assert.strictEqual(classifyError(new Error("WebGL context lost")), "WEBGL_CONTEXT_LOST");
  assert.strictEqual(classifyError(new Error("Failed to fetch")), "NETWORK_OFFLINE");
  assert.strictEqual(classifyError(new Error("Random syntax calculation error")), "UNHANDLED_EXCEPTION");

  // 3. Crash Reporting & Circuit Breaker
  console.log("  3. Testing Crash Guardian Reporting & Circuit Breaker...");
  resetSafeMode();
  assert.strictEqual(isSafeModeActive(), false);

  const event1 = reportCrash(new Error("Test minor glitch 1"));
  assert(event1.id.startsWith("crash_"));
  assert.strictEqual(event1.category, "UNHANDLED_EXCEPTION");

  const event2 = reportCrash(new Error("Test minor glitch 2"));
  const event3 = reportCrash(new Error("Test minor glitch 3"));
  
  // 3 crashes in quick succession triggers safe mode
  assert.strictEqual(isSafeModeActive(), true, "Circuit breaker should activate after 3 crashes");
  resetSafeMode();
  assert.strictEqual(isSafeModeActive(), false);

  // 4. State Preservation & Auto-Recovery
  console.log("  4. Testing State Preservation Checkpoints...");
  const mockExamSession: ExamCheckpoint = {
    type: "exam",
    examId: "yds_2024_1",
    title: "2024 YDS/1 İlkbahar",
    url: "/exams/yds_2024_1",
    currentQuestion: 41,
    answers: { 1: 2, 2: 0, 3: 4, 42: 1 },
    flags: { 3: true },
    startedAt: Date.now() - 3600000, // 1 hour ago
    durationMinutes: 180,
    updatedAt: Date.now(),
  };

  saveSessionCheckpoint(mockExamSession);
  const loadedExam = loadSessionCheckpoint<ExamCheckpoint>("exam");
  assert(loadedExam !== null, "Exam checkpoint must load successfully");
  assert.strictEqual(loadedExam?.examId, "yds_2024_1");
  assert.strictEqual(loadedExam?.currentQuestion, 41);
  assert.strictEqual(loadedExam?.answers[42], 1);
  assert.strictEqual(loadedExam?.flags[3], true);

  // Check interrupted session detection
  const interrupted = getInterruptedSession();
  assert(interrupted !== null, "Interrupted session must be found");
  assert.strictEqual(interrupted?.type, "exam");
  assert.strictEqual(interrupted?.title, "2024 YDS/1 İlkbahar");

  // Clear checkpoint
  clearSessionCheckpoint("exam");
  const clearedExam = loadSessionCheckpoint<ExamCheckpoint>("exam");
  assert.strictEqual(clearedExam, null, "Exam checkpoint must be null after clear");

  // 5. Level Test State Preservation
  console.log("  5. Testing Level Test Checkpoints...");
  const mockLevelTest: LevelTestCheckpoint = {
    type: "level_test",
    title: "YDS CEFR Seviye Tespit Sınavı",
    url: "/level-test",
    currentIndex: 22,
    answers: { "lev-a1-01": 0, "lev-b1-05": 3 },
    startedAt: Date.now() - 600000,
    updatedAt: Date.now(),
  };

  saveSessionCheckpoint(mockLevelTest);
  const loadedLevelTest = loadSessionCheckpoint<LevelTestCheckpoint>("level_test");
  assert(loadedLevelTest !== null);
  assert.strictEqual(loadedLevelTest?.currentIndex, 22);
  assert.strictEqual(loadedLevelTest?.answers["lev-b1-05"], 3);

  clearSessionCheckpoint("level_test");
  assert.strictEqual(loadSessionCheckpoint("level_test"), null);

  console.log("✅ All Hardware Optimization & Resilience Unit Tests Passed Successfully!");
}

runResilienceTests().catch((err) => {
  console.error("❌ Hardware Optimization & Resilience Unit Tests Failed:", err);
  process.exit(1);
});

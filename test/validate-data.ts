// Centralized Diagnostic Data Validation Script
// Validates Level Test Bank, Questions, CEFR distributions, Options, and Schemas

import {
  LEVEL_TEST_QUESTIONS,
  CORE_LEVEL_QUESTIONS,
  VALIDATION_LEVEL_QUESTIONS,
  CefrLevel,
  SkillType,
} from "../src/lib/data-level-test";
import { LevelTestQuestionSchema } from "../src/lib/validation/schemas";

console.log("🔍 [VALIDATE:DATA] Starting Level Test Question Bank Validation...");

const EXPECTED_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
const EXPECTED_SKILLS: SkillType[] = ["grammar", "vocabulary", "reading", "sentence", "translation"];

let totalErrors = 0;

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    totalErrors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// Check total count
assert(
  LEVEL_TEST_QUESTIONS.length === 42,
  `Total questions must be exactly 42 (found ${LEVEL_TEST_QUESTIONS.length})`
);

// Check core vs validation count
assert(
  CORE_LEVEL_QUESTIONS.length === 36,
  `Core questions must be exactly 36 (found ${CORE_LEVEL_QUESTIONS.length})`
);

assert(
  VALIDATION_LEVEL_QUESTIONS.length === 6,
  `Validation questions must be exactly 6 (found ${VALIDATION_LEVEL_QUESTIONS.length})`
);

// Check unique IDs
const idSet = new Set<string>();
for (const q of LEVEL_TEST_QUESTIONS) {
  if (idSet.has(q.id)) {
    assert(false, `Duplicate question ID detected: ${q.id}`);
  }
  idSet.add(q.id);
}
assert(idSet.size === 42, `All 42 questions have unique IDs`);

// Check level distribution for core questions (6 per level)
for (const lvl of EXPECTED_LEVELS) {
  const count = CORE_LEVEL_QUESTIONS.filter((q) => q.level === lvl).length;
  assert(count === 6, `Level ${lvl} must have exactly 6 core questions (found ${count})`);
}

// Check validation question per level (1 per level)
for (const lvl of EXPECTED_LEVELS) {
  const count = VALIDATION_LEVEL_QUESTIONS.filter((q) => q.level === lvl).length;
  assert(count === 1, `Level ${lvl} must have exactly 1 validation question (found ${count})`);
}

// Check schema conformity on all 42 questions
let schemaPass = 0;
for (const q of LEVEL_TEST_QUESTIONS) {
  const parseResult = LevelTestQuestionSchema.safeParse(q);
  if (!parseResult.success) {
    console.error(`❌ Question ${q.id} failed schema validation:`, parseResult.error.format());
    totalErrors++;
  } else {
    schemaPass++;
  }

  // Extra constraints
  if (q.options.length !== 5) {
    assert(false, `Question ${q.id} must have exactly 5 options`);
  }
  if (q.answer < 0 || q.answer > 4) {
    assert(false, `Question ${q.id} answer index must be between 0 and 4 (found ${q.answer})`);
  }
  if (!q.stem || q.stem.trim().length < 5) {
    assert(false, `Question ${q.id} stem is too short or empty`);
  }
  if (!q.explanation || q.explanation.trim().length < 10) {
    assert(false, `Question ${q.id} explanation must be descriptive and non-empty`);
  }
}

assert(schemaPass === 42, `All 42 questions strictly conform to LevelTestQuestionSchema`);

if (totalErrors > 0) {
  console.error(`\n💥 [VALIDATE:DATA] Validation failed with ${totalErrors} errors.`);
  process.exit(1);
} else {
  console.log(`\n🎉 [VALIDATE:DATA] All 42 diagnostic test items successfully validated!`);
  process.exit(0);
}

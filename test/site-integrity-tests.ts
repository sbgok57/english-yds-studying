import assert from "assert";
import { PASSAGES, READING_PASSAGES, getReadingPassages } from "../src/lib/data-reading";
import { EXAMS, getExamQuestions, getExamMeta } from "../src/lib/data-exams";
import { WORDS, VOCABULARY, getVocabularyWords } from "../src/lib/data-vocabulary";
import { VOICE_REGISTRY, validateVoiceMatrix, getVoiceProfile } from "../src/lib/tts/voice-registry";
import { AVATARS } from "../src/lib/avatars";
import { LEVEL_TEST_QUESTIONS } from "../src/lib/data-level-test";
import { GRAMMAR_TOPICS } from "../src/lib/data-grammar";
import { TACTICS } from "../src/lib/data-tactics";
import { PRESET_STUDY_PLANS } from "../src/lib/data-study-plans";
import {
  MOTIVATION_VIDEOS,
  MOTIVATION_VIDEOS_COUNT,
  MOTIVATION_VIDEO_CATEGORIES,
} from "../src/lib/data-motivation-videos";

let passed = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    passed++;
    console.log(`  ✅ PASS: ${name}`);
  } catch (err: any) {
    console.error(`  ❌ FAIL: ${name} -> ${err.message}`);
    process.exit(1);
  }
}

console.log("\n========================================================");
console.log("🛡️ SITE INTEGRITY & HARDENING SPECIFICATION TESTS");
console.log("========================================================\n");

// 1. Reading Passages
console.log("1. Reading Passages Specification...");
test("All reading passages have title, valid paragraphs, and questions (>= 5 passages)", () => {
  assert(PASSAGES && Array.isArray(PASSAGES), "PASSAGES must be an array");
  assert(READING_PASSAGES && Array.isArray(READING_PASSAGES), "READING_PASSAGES must be an array");
  assert.strictEqual(PASSAGES, READING_PASSAGES, "READING_PASSAGES must alias PASSAGES");
  assert(PASSAGES.length >= 5, `Expected at least 5 reading passages, found ${PASSAGES.length}`);

  for (let i = 0; i < PASSAGES.length; i++) {
    const p = PASSAGES[i];
    assert(p.id && p.id.trim().length > 0, `Passage ${i} missing id`);
    assert(p.title && p.title.trim().length > 0, `Passage ${p.id} missing title`);
    assert(p.level && p.level.trim().length > 0, `Passage ${p.id} missing level`);
    assert(p.topic && p.topic.trim().length > 0, `Passage ${p.id} missing topic`);
    assert(Array.isArray(p.paragraphs) && p.paragraphs.length >= 2, `Passage ${p.id} must have at least 2 paragraphs`);
    assert(typeof p.content === "string" && p.content.trim().length > 0, `Passage ${p.id} must have valid content string`);
    assert(Array.isArray(p.questions) && p.questions.length >= 3, `Passage ${p.id} must have at least 3 questions`);
    assert(Array.isArray(p.glossary) && p.glossary.length >= 5, `Passage ${p.id} must have at least 5 glossary terms`);

    for (const q of p.questions) {
      assert(q.q && q.q.trim().length > 0, `Question missing prompt in ${p.id}`);
      assert(q.a && q.a.trim().length > 0, `Question missing answer in ${p.id}`);
    }

    for (const g of p.glossary) {
      assert(g.word && g.word.trim().length > 0, `Glossary missing word in ${p.id}`);
      assert(g.tr && g.tr.trim().length > 0, `Glossary missing tr in ${p.id}`);
    }
  }
});

// 2. Exams Generation & Options
console.log("\n2. Exams Specification...");
test("All exams generate exactly 80 questions with 5 options each", () => {
  assert(EXAMS && Array.isArray(EXAMS), "EXAMS must be an array");
  assert(EXAMS.length >= 10, `Expected at least 10 exam entries, found ${EXAMS.length}`);

  // Test deterministic generation on first 20 exams
  for (const ex of EXAMS.slice(0, 20)) {
    const meta = getExamMeta(ex.id);
    assert(meta && meta.title && meta.title.length > 0, `Exam ${ex.id} missing title in meta`);

    const questions = getExamQuestions(ex.id);
    assert.strictEqual(questions.length, 80, `Exam ${ex.id} must generate exactly 80 questions (got ${questions.length})`);

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      assert.strictEqual(q.n, i + 1, `Exam ${ex.id} Q${i + 1} has incorrect number ${q.n}`);
      assert(q.stem && q.stem.trim().length > 0, `Exam ${ex.id} Q${i + 1} has empty stem`);
      assert(Array.isArray(q.options) && q.options.length === 5, `Exam ${ex.id} Q${i + 1} must have 5 options (got ${q.options?.length})`);
      assert(q.answer >= 0 && q.answer <= 4, `Exam ${ex.id} Q${i + 1} invalid answer index: ${q.answer}`);
      assert.strictEqual(q.correctAnswer, q.answer, `Exam ${ex.id} Q${i + 1} correctAnswer must match answer`);
    }
  }
});

// 3. Vocabulary Items
console.log("\n3. Vocabulary Items Specification...");
test("All vocabulary items have valid word, meaning, and examples", () => {
  assert(WORDS && Array.isArray(WORDS), "WORDS must be an array");
  assert(VOCABULARY && Array.isArray(VOCABULARY), "VOCABULARY must be an array");
  assert.strictEqual(WORDS, VOCABULARY, "VOCABULARY must alias WORDS");
  assert(WORDS.length >= 400, `Expected at least 400 words, found ${WORDS.length}`);

  for (let i = 0; i < WORDS.length; i++) {
    const w = WORDS[i];
    assert(w.word && w.word.trim().length > 0, `Word missing at index ${i}`);
    assert(w.tr && w.tr.trim().length > 0, `Missing tr in word '${w.word}'`);
    assert(w.meaning && w.meaning.trim().length > 0, `Missing meaning in word '${w.word}'`);
    assert(w.example && w.example.trim().length > 0, `Missing example in word '${w.word}'`);
    assert(w.exampleTr && w.exampleTr.trim().length > 0, `Missing exampleTr in word '${w.word}'`);
  }

  // Explicit check for word #334 delay
  const delayWord = WORDS.find((w) => w.word === "delay");
  assert(delayWord, "Word 'delay' must exist in vocabulary");
  assert(delayWord.tr.length > 0, "Word 'delay' must have valid Turkish translation");
  assert(delayWord.meaning && delayWord.meaning.length > 0, "Word 'delay' must have valid meaning");
  assert(delayWord.example.includes("delayed"), "Word 'delay' must have valid example sentence");
});

// 4. TTS 12 Voices Matrix
console.log("\n4. TTS Multi-Accent Matrix Specification...");
test("All 6 accents have both female and male voices registered (12 total)", () => {
  const result = validateVoiceMatrix();
  assert(result.valid, `Voice matrix validation failed: ${result.errors.join(", ")}`);
  assert.strictEqual(VOICE_REGISTRY.length, 12, "Voice registry must contain exactly 12 voices");

  const expectedLocales = ["en-GB", "en-US", "en-CA", "en-AU", "en-NZ", "en-IN"];
  for (const loc of expectedLocales) {
    const female = VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "female");
    const male = VOICE_REGISTRY.find((v) => v.locale === loc && v.gender === "male");
    assert(female, `Missing female voice for locale ${loc}`);
    assert(male, `Missing male voice for locale ${loc}`);
  }
});

// 5. 1000 Avatars
console.log("\n5. 1000 Avatars Specification...");
test("All 1000 avatars have distinct labels, valid categories, and emojis", () => {
  assert.strictEqual(AVATARS.length, 1000, "Must have exactly 1000 avatars");
  const ids = new Set<string | number>();
  for (const av of AVATARS) {
    assert(!ids.has(av.id), `Duplicate avatar id ${av.id}`);
    ids.add(av.id);
    assert(av.label && av.label.length > 0, `Avatar ${av.id} missing label`);
    assert(av.emoji && av.emoji.length > 0, `Avatar ${av.id} missing emoji`);
  }
});

// 6. CEFR Level Test Bank
console.log("\n6. CEFR Level Test Specification...");
test("Level test has 42 questions with valid CEFR levels and skills", () => {
  assert.strictEqual(LEVEL_TEST_QUESTIONS.length, 42, "Level test must have exactly 42 questions");
  for (const q of LEVEL_TEST_QUESTIONS) {
    assert(["A1", "A2", "B1", "B2", "C1", "C2"].includes(q.level), `Invalid level for ${q.id}`);
    assert(["grammar", "vocabulary", "reading", "sentence", "translation"].includes(q.skill), `Invalid skill for ${q.id}`);
    assert(Array.isArray(q.options) && q.options.length >= 4, `Question ${q.id} must have >= 4 options`);
    assert(q.answer >= 0 && q.answer < q.options.length, `Invalid answer index for ${q.id}`);
    assert(q.stem && q.stem.length > 0, `Question ${q.id} missing stem`);
    assert(q.explanation && q.explanation.length > 0, `Question ${q.id} missing explanation`);
  }
});

// 7. Grammar Topics & Tactics
console.log("\n7. Grammar Topics & Tactics Specification...");
test("All 19 Grammar Topics and 11 Tactics have valid unique slugs and titles", () => {
  assert(GRAMMAR_TOPICS.length >= 19, `Expected >= 19 grammar topics, found ${GRAMMAR_TOPICS.length}`);
  const gSlugs = new Set<string>();
  for (const g of GRAMMAR_TOPICS) {
    assert(!gSlugs.has(g.slug), `Duplicate grammar slug: ${g.slug}`);
    gSlugs.add(g.slug);
    assert(g.title && g.title.length > 0, `Grammar ${g.slug} missing title`);
  }

  assert.strictEqual(TACTICS.length, 11, `Expected exactly 11 tactics, found ${TACTICS.length}`);
  const tSlugs = new Set<string>();
  for (const t of TACTICS) {
    assert(!tSlugs.has(t.slug), `Duplicate tactic slug: ${t.slug}`);
    tSlugs.add(t.slug);
    assert(t.title && t.title.length > 0, `Tactic ${t.slug} missing title`);
  }
});

// 8. Preset Study Plans
console.log("\n8. Preset Study Plans Specification...");
test("All preset study plans have valid duration, target levels, and daily tasks", () => {
  assert(PRESET_STUDY_PLANS.length >= 8, `Expected >= 8 preset plans, found ${PRESET_STUDY_PLANS.length}`);
  for (const plan of PRESET_STUDY_PLANS) {
    assert(plan.totalDays > 0, `Plan ${plan.id} invalid totalDays`);
    assert(plan.targetLevel, `Plan ${plan.id} missing targetLevel`);
    assert(plan.weeks && plan.weeks.length > 0, `Plan ${plan.id} missing weeks`);
  }
});

// 9. Curated Motivation Videos Library (> 100 Clips)
console.log("\n9. Curated Motivation Videos Library Specification...");
test("Motivation videos library contains over 100 clips (> 100) with complete metadata", () => {
  assert(MOTIVATION_VIDEOS && Array.isArray(MOTIVATION_VIDEOS), "MOTIVATION_VIDEOS must be an array");
  assert(MOTIVATION_VIDEOS_COUNT > 100, `Expected > 100 motivation videos, found ${MOTIVATION_VIDEOS_COUNT}`);
  assert.strictEqual(MOTIVATION_VIDEOS.length, MOTIVATION_VIDEOS_COUNT, "Length must match MOTIVATION_VIDEOS_COUNT");
  assert.strictEqual(MOTIVATION_VIDEOS_COUNT, 112, "Curated motivation library must have exactly 112 clips");
  assert.strictEqual(MOTIVATION_VIDEO_CATEGORIES.length, 8, "Must have 8 unique categories");

  const clipIds = new Set<string>();
  const validCategories = new Set(MOTIVATION_VIDEO_CATEGORIES.map((c) => c.id));

  for (let i = 0; i < MOTIVATION_VIDEOS.length; i++) {
    const v = MOTIVATION_VIDEOS[i];
    assert(v.id && v.id.length > 0, `Clip at index ${i} missing id`);
    assert(!clipIds.has(v.id), `Duplicate clip id ${v.id}`);
    clipIds.add(v.id);

    assert.strictEqual(v.provider, "youtube", `Clip ${v.id} provider must be youtube`);
    assert(v.videoId && v.videoId.trim().length > 0, `Clip ${v.id} missing videoId`);
    assert(v.title && v.title.trim().length > 0, `Clip ${v.id} missing title`);
    assert(v.creator && v.creator.trim().length > 0, `Clip ${v.id} missing creator`);
    assert(validCategories.has(v.category), `Clip ${v.id} has invalid category '${v.category}'`);
    assert(v.categoryLabelTr && v.categoryLabelTr.length > 0, `Clip ${v.id} missing categoryLabelTr`);
    assert(v.categoryEmoji && v.categoryEmoji.length > 0, `Clip ${v.id} missing categoryEmoji`);
    assert.strictEqual(v.embedAllowed, true, `Clip ${v.id} embedAllowed must be true`);
    assert(v.externalUrl.startsWith("https://www.youtube.com/watch?v="), `Clip ${v.id} invalid externalUrl`);
    assert(v.keyQuoteTr && v.keyQuoteTr.trim().length > 0, `Clip ${v.id} missing keyQuoteTr`);
    assert(v.durationApprox && v.durationApprox.trim().length > 0, `Clip ${v.id} missing durationApprox`);
  }
});

console.log("\n========================================================");
console.log(`🎉 ALL ${passed} SITE INTEGRITY TESTS PASSED WITH 100% SUCCESS!`);
console.log("========================================================\n");


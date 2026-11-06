import assert from "node:assert/strict";
import {
  browserVoicesForLanguage,
  chooseBrowserVoice,
  nativeVoiceOptionId,
  nativeVoiceUriFromOption,
  formatVoiceProfileLabel,
  type BrowserVoiceLike,
} from "../src/shared/speech-voices";
import {
  EMPTY_GRAMMAR_PROGRESS,
  loadGrammarProgress,
  normalizeGrammarProgress,
  saveGrammarProgress,
  currentLessonIndex,
  type GrammarProgressStorage,
} from "../src/shared/grammar-progress";
import { mergeUniqueStudyQueue, rememberStudyWords } from "../src/shared/study-queue";
import { appendUniqueWordCards } from "../src/shared/word-pagination";
import { getTrackProgress, saveTrackProgress, type AudioProgressStorage } from "../src/lib/audio/tracks";
import { isWordReviewDue, isWordStillLearning, scheduleWordReview } from "../src/lib/vocabulary/learning-schedule";
import { getHighestUnlockedCefrLevel, isCefrLevelUnlocked, isGrammarLevelUnlocked, isVocabularyLevelUnlocked } from "../src/lib/adaptive/content-access";
import { defaultUsage } from "../src/lib/store";
import { migrateUsageData } from "../src/lib/exam-validator";

let passed = 0;

function runTest(name: string, fn: () => void) {
  try {
    fn();
    passed++;
    console.log(`  ✅ ${name}`);
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`, err);
    throw err;
  }
}

class MemoryStorage implements GrammarProgressStorage {
  #values = new Map<string, string>();
  getItem(key: string) {
    return this.#values.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.#values.set(key, value);
  }
}

class MemoryAudioProgressStorage implements AudioProgressStorage {
  #values = new Map<string, string>();
  getItem(key: string) { return this.#values.get(key) ?? null; }
  setItem(key: string, value: string) { this.#values.set(key, value); }
}

export async function runSpeechAndStudyQueueTests() {
  console.log("==========================================");
  console.log("🚀 SPEECH, GRAMMAR PROGRESS & STUDY QUEUE TESTS");
  console.log("==========================================\n");

  runTest("CEFR learning content opens progressively from assessed level", () => {
    assert.equal(getHighestUnlockedCefrLevel(null), "A1");
    assert.equal(isCefrLevelUnlocked("A2", "A1"), true);
    assert.equal(isCefrLevelUnlocked("A2", "A2"), true);
    assert.equal(isCefrLevelUnlocked("A2", "B1"), false);
    assert.equal(isVocabularyLevelUnlocked("B1", "YDS"), false);
    assert.equal(isVocabularyLevelUnlocked("C1", "YDS"), true);
    assert.equal(isGrammarLevelUnlocked("C1", "YDS"), false);
    assert.equal(isGrammarLevelUnlocked("C2", "YDS"), true);
    assert.equal(isVocabularyLevelUnlocked("A1", "legacy-custom"), true);
  });

  const voices: BrowserVoiceLike[] = [
    { name: "Sophie", lang: "en-GB", voiceURI: "voice-en-f" },
    { name: "Daniel", lang: "en-GB", voiceURI: "voice-en-default", default: true },
    { name: "Filiz", lang: "tr-TR", voiceURI: "voice-tr-f" },
  ];

  runTest("browser voice list filters on the requested language and can choose a distinct voice", () => {
    assert.deepEqual(
      browserVoicesForLanguage(voices, "en-GB").map((voice) => voice.voiceURI),
      ["voice-en-f", "voice-en-default"],
    );
    assert.equal(chooseBrowserVoice(voices, "en-GB", "voice-en-f", "voice-en-f")?.voiceURI, "voice-en-default");
    assert.equal(chooseBrowserVoice(voices, "tr-TR")?.voiceURI, "voice-tr-f");
  });

  runTest("missed words enter a spaced-review queue and leave it after two successful recalls", () => {
    const now = 1_800_000_000_000;
    const missed = scheduleWordReview(undefined, false, now);
    assert.equal(missed.box, 0);
    assert.equal(isWordStillLearning(missed), true);
    assert.equal(isWordReviewDue(missed, now + 10 * 60 * 1000), true);

    const firstRecall = scheduleWordReview(missed, true, now + 10 * 60 * 1000);
    assert.equal(firstRecall.box, 1);
    assert.equal(isWordStillLearning(firstRecall), true);
    assert.equal(firstRecall.dueAt, now + 10 * 60 * 1000 + 24 * 60 * 60 * 1000);

    const secondRecall = scheduleWordReview(firstRecall, true, firstRecall.dueAt);
    assert.equal(secondRecall.box, 2);
    assert.equal(isWordStillLearning(secondRecall), false);
    assert.equal(secondRecall.dueAt, firstRecall.dueAt + 3 * 24 * 60 * 60 * 1000);

    const forgottenAgain = scheduleWordReview(secondRecall, false, secondRecall.dueAt);
    assert.equal(forgottenAgain.box, 0);
    assert.equal(forgottenAgain.correctStreak, 0);
    assert.equal(isWordStillLearning(forgottenAgain), true);
  });

  runTest("usage migration keeps valid review data and queues historically missed words", () => {
    const migrated = migrateUsageData({
      words: {
        historical: { c: 1, w: 3, last: 1_700_000_000_000 },
        mastered: { c: 4, w: 0, last: 1_700_000_000_000 },
      },
      wordReviews: {
        saved: { box: 2, dueAt: 1_800_000_000_000, correctStreak: 2, lastReviewedAt: 1_700_000_000_000 },
        invalid: { box: 99, dueAt: -1, correctStreak: -2, lastReviewedAt: 0 },
      },
    }, defaultUsage());

    assert.equal(migrated.wordReviews.historical.box, 0);
    assert.equal(migrated.wordReviews.mastered, undefined);
    assert.equal(migrated.wordReviews.saved.box, 2);
    assert.equal(migrated.wordReviews.invalid, undefined);
  });

  runTest("native voice option preserves encoded voice URIs and provider labels expose configured gender/accent", () => {
    const optionId = nativeVoiceOptionId("https://device voice/ü");
    assert.equal(nativeVoiceUriFromOption(optionId), "https://device voice/ü");
    assert.equal(nativeVoiceUriFromOption("native:%E0%A4%A"), null);
    assert.match(
      formatVoiceProfileLabel({
        id: "uk-f",
        label: "Sophie",
        voiceName: "Provider voice A",
        gender: "female",
        accent: "British",
        language: "en-GB",
      }),
      /kadın · British · en-GB/,
    );
  });

  runTest("corrupted or unavailable storage returns a safe first-lesson state", () => {
    const brokenStorage: GrammarProgressStorage = {
      getItem: () => "{invalid json",
      setItem: () => {
        throw new Error("denied");
      },
    };
    assert.deepEqual(loadGrammarProgress("broken", brokenStorage), EMPTY_GRAMMAR_PROGRESS);
    assert.equal(saveGrammarProgress(EMPTY_GRAMMAR_PROGRESS, "broken", brokenStorage), false);
    assert.deepEqual(loadGrammarProgress("no-storage", undefined), EMPTY_GRAMMAR_PROGRESS);
  });

  runTest("valid grammar progress is saved and loaded correctly", () => {
    const storage = new MemoryStorage();
    const progress = {
      ...EMPTY_GRAMMAR_PROGRESS,
      completedLessonIds: [EMPTY_GRAMMAR_PROGRESS.currentLessonId],
      answerIndex: 0,
      updatedAt: new Date().toISOString(),
    };
    assert.equal(saveGrammarProgress(progress, "test-progress", storage), true);
    const loaded = loadGrammarProgress("test-progress", storage);
    assert.deepEqual(loaded.completedLessonIds, progress.completedLessonIds);
    assert.equal(currentLessonIndex(loaded), 0);
  });

  runTest("audio resume progress is isolated by narrator and lesson script", () => {
    const storage = new MemoryAudioProgressStorage();
    saveTrackProgress("lesson-a", 42, false, "tr-TR-female-emel", "script revision one", storage);
    assert.equal(getTrackProgress("lesson-a", "tr-TR-female-emel", "script revision one", storage)?.currentSeconds, 42);
    assert.equal(getTrackProgress("lesson-a", "tr-TR-male-ahmet", "script revision one", storage), null);
    assert.equal(getTrackProgress("lesson-a", "tr-TR-female-emel", "script revision two", storage), null);
    saveTrackProgress("lesson-a", -1, false, "tr-TR-female-emel", "script revision one", storage);
    assert.equal(getTrackProgress("lesson-a", "tr-TR-female-emel", "script revision one", storage)?.currentSeconds, 42);
  });

  runTest("review session de-duplicates due/new pages and excludes previously answered words", () => {
    const due = [{ wordId: "due-1" }, { wordId: "due-2" }];
    const fresh = [{ wordId: "due-2" }, { wordId: "new-1" }, { wordId: "" }];
    assert.deepEqual(
      mergeUniqueStudyQueue(due, fresh, new Set(["new-0"])).map((item) => item.wordId),
      ["due-1", "due-2", "new-1"],
    );
  });

  runTest("seen-word updates do not mutate prior session state and are safely bounded", () => {
    const previous = new Set(["one"]);
    const next = rememberStudyWords(previous, ["two", "", "three"], 2);
    assert.deepEqual([...previous], ["one"]);
    assert.deepEqual([...next], ["two", "three"]);
  });

  runTest("appending word pages never repeats an existing or duplicate page item", () => {
    const initial = [
      { id: "a", term: "first" },
      { id: "b", term: "second" },
    ];
    const combined = appendUniqueWordCards(initial, [
      { id: "b", term: "duplicate" },
      { id: "c", term: "third" },
      { id: "c", term: "duplicate third" },
    ]);
    assert.deepEqual(
      combined.map((word) => word.term),
      ["first", "second", "third"],
    );
  });

  console.log(`\n🎉 ALL ${passed} SPEECH & STUDY QUEUE TESTS PASSED!\n`);
}

runSpeechAndStudyQueueTests().catch((e) => {
  console.error(e);
  process.exit(1);
});

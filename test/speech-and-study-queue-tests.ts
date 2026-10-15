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

export async function runSpeechAndStudyQueueTests() {
  console.log("==========================================");
  console.log("🚀 SPEECH, GRAMMAR PROGRESS & STUDY QUEUE TESTS");
  console.log("==========================================\n");

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

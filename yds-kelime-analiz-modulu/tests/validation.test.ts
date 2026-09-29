import assert from "node:assert/strict";
import { test } from "node:test";
import {
  bulkWordInputSchema,
  globalPdfImportSchema,
  progressInputSchema,
  reviewQueueQuerySchema,
  reviewSubmissionSchema,
  wordInputSchema,
  wordListQuerySchema,
} from "../src/validation";

test("kelime doğrulaması normal kelime ve phrasal ifade kabul eder", () => {
  assert.equal(wordInputSchema.parse({ term: "  abandon  " }).term, "abandon");
  assert.equal(wordInputSchema.parse({ term: "in   spite of" }).term, "in spite of");
  assert.equal(wordInputSchema.parse({ term: "well-known" }).term, "well-known");
});

test("kelime doğrulaması HTML, satır sonu ve admin alanlarını reddeder", () => {
  assert.equal(wordInputSchema.safeParse({ term: "<script>" }).success, false);
  assert.equal(wordInputSchema.safeParse({ term: "ignore\nthis" }).success, false);
  assert.equal(wordInputSchema.safeParse({ term: "abandon", isGlobal: true }).success, false);
  assert.equal(wordInputSchema.safeParse({ term: "" }).success, false);
});

test("toplu kelime ve PDF içe aktarım sınırları istek seviyesinde uygulanır", () => {
  const fiftyWords = Array.from({ length: 50 }, () => ({ term: "abandon" }));
  const fiveHundredWords = Array.from({ length: 500 }, () => ({ term: "abandon" }));
  assert.equal(bulkWordInputSchema.safeParse({ words: fiftyWords }).success, true);
  assert.equal(bulkWordInputSchema.safeParse({ words: [...fiftyWords, { term: "abandon" }] }).success, false);
  assert.equal(globalPdfImportSchema.safeParse({ words: fiveHundredWords }).success, true);
  assert.equal(globalPdfImportSchema.safeParse({ words: [] }).success, false);
  assert.equal(globalPdfImportSchema.safeParse({ words: [...fiveHundredWords, { term: "abandon" }] }).success, false);
});

test("review puanı yalnızca izinli enum ve UUID ile kabul edilir", () => {
  assert.equal(
    reviewSubmissionSchema.safeParse({
      requestId: "b8dbab4a-4769-4335-b633-6e7d09d002e5",
      rating: "GOOD",
    }).success,
    true,
  );
  assert.equal(
    reviewSubmissionSchema.safeParse({ requestId: "not-a-uuid", rating: "PERFECT" }).success,
    false,
  );
});

test("sayfalama, review ve ilerleme girişleri sınırlandırılmış", () => {
  assert.deepEqual(wordListQuerySchema.parse({}), { limit: 50 });
  assert.equal(wordListQuerySchema.safeParse({ limit: 100000 }).success, false);
  assert.equal(reviewQueueQuerySchema.safeParse({ limit: 20, newLimit: 10 }).success, true);
  assert.equal(reviewQueueQuerySchema.safeParse({ limit: 1000 }).success, false);
  assert.equal(progressInputSchema.safeParse({ isLearned: true }).success, true);
  assert.equal(progressInputSchema.safeParse({ isLearned: "yes" }).success, false);
});

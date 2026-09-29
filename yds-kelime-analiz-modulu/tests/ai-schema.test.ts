import assert from "node:assert/strict";
import { test } from "node:test";

process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test?schema=public";
process.env.ANTHROPIC_API_KEY = "test-only-not-a-real-key";
process.env.NODE_ENV = "test";

const validAnalysis = {
  isRecognized: true,
  lemma: "abandon",
  overallLevel: "B2",
  levelConfidence: "high",
  levelNoteTr: "Yaygın kullanımına göre yaklaşık B2 düzeyindedir.",
  reviewRequired: false,
  senses: [
    {
      partOfSpeech: "verb",
      meaningTr: "terk etmek",
      definitionEn: "to leave a plan, place, or activity permanently",
      cefrLevel: "B2",
      examples: [
        { sentence: "They abandoned the old plan.", translationTr: "Eski planı terk ettiler." },
        { sentence: "The crew abandoned the damaged ship.", translationTr: "Mürettebat hasarlı gemiyi terk etti." },
      ],
      collocations: ["abandon a plan"],
    },
  ],
};

test("AI analiz şeması geçerli anlam, çeviri ve iki örneği kabul eder", async () => {
  const { analysisSchema } = await import("../src/ai/word-enricher");
  const result = analysisSchema.parse(validAnalysis);
  assert.equal(result.senses[0]?.examples.length, 2);
  assert.equal(result.senses[0]?.meaningTr, "terk etmek");
});

test("AI analiz şeması hatalı örnek sayısını, enum'u ve ek alanı reddeder", async () => {
  const { analysisSchema } = await import("../src/ai/word-enricher");

  const oneExample = structuredClone(validAnalysis);
  oneExample.senses[0]!.examples.pop();
  assert.equal(analysisSchema.safeParse(oneExample).success, false);

  const invalidLevel = { ...validAnalysis, overallLevel: "C3" };
  assert.equal(analysisSchema.safeParse(invalidLevel).success, false);

  const extraProperty = { ...validAnalysis, isAdmin: true };
  assert.equal(analysisSchema.safeParse(extraProperty).success, false);
});

test("tanınmayan girdi boş sense ile, tanınan kelime en az bir sense ile gelmeli", async () => {
  const { analysisSchema } = await import("../src/ai/word-enricher");
  const unrecognized = {
    ...validAnalysis,
    isRecognized: false,
    overallLevel: "UNKNOWN",
    levelConfidence: "low",
    reviewRequired: true,
    senses: [],
  };
  assert.equal(analysisSchema.safeParse(unrecognized).success, true);

  const recognizedWithoutSense = { ...validAnalysis, senses: [] };
  assert.equal(analysisSchema.safeParse(recognizedWithoutSense).success, false);
});

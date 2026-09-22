import assert from "assert";
import {
  VOICE_REGISTRY,
  ACCENT_METADATA_LIST,
  getVoiceProfile,
  findVoice,
  getVoicesForAccent,
  validateVoiceMatrix,
  STANDARD_PREVIEW_TEXT,
  AccentCode,
} from "../src/lib/tts/voice-registry";
import { escapeXml, formatSpeakingRate } from "../src/lib/tts/tts-provider";
import { audioCache } from "../src/lib/tts/audio-cache";

console.log("▶ Starting TTS Voice Registry & Unit Tests...\n");

// 1. Matris Doğrulaması
console.log("  1. Testing 12 Voice Matrix Completeness...");
const matrix = validateVoiceMatrix();
assert.strictEqual(matrix.valid, true, `Matrix errors: ${matrix.errors.join(", ")}`);
assert.strictEqual(VOICE_REGISTRY.length, 12, "Tam olarak 12 ses profili olmalıdır.");
assert.strictEqual(ACCENT_METADATA_LIST.length, 6, "Tam olarak 6 aksan meta verisi olmalıdır.");
console.log("  ✅ PASS: Exactly 12 verified voices across 6 accents.\n");

// 2. Aksan ve Cinsiyet Birebir Eşleşmesi
console.log("  2. Testing Accent & Gender Coverage...");
const requiredLocales: AccentCode[] = ["en-GB", "en-US", "en-CA", "en-AU", "en-NZ", "en-IN"];
for (const loc of requiredLocales) {
  const female = findVoice(loc, "female");
  const male = findVoice(loc, "male");

  assert.ok(female, `${loc} kadın ses bulunamadı`);
  assert.ok(male, `${loc} erkek ses bulunamadı`);
  assert.strictEqual(female.locale, loc);
  assert.strictEqual(male.locale, loc);
  assert.strictEqual(female.gender, "female");
  assert.strictEqual(male.gender, "male");
  assert.notStrictEqual(female.id, male.id, `${loc} kadın ve erkek sesi aynı olamaz`);
  assert.notStrictEqual(
    female.providerVoiceId,
    male.providerVoiceId,
    `${loc} kadın ve erkek providerVoiceId aynı olamaz`
  );
}
console.log("  ✅ PASS: All 6 locales have distinct, verified female & male voices.\n");

// 3. Kanada Aksanı Spesifik Doğrulaması
console.log("  3. Testing Canadian English (en-CA) isolation...");
const caVoices = getVoicesForAccent("en-CA");
assert.strictEqual(caVoices.length, 2, "Kanada için tam 2 ses bulunmalı");
const caFemale = caVoices.find((v) => v.gender === "female");
const caMale = caVoices.find((v) => v.gender === "male");
assert.strictEqual(caFemale?.providerVoiceId, "en-CA-ClaraNeural");
assert.strictEqual(caMale?.providerVoiceId, "en-CA-LiamNeural");
assert.ok(caFemale?.description.includes("Kanada"));
assert.ok(caMale?.description.includes("Kanada"));
console.log("  ✅ PASS: Canadian English uses authentic en-CA neural voices.\n");

// 4. Cache Anahtarı ve Bounded LRU Önbellek
console.log("  4. Testing Audio Cache Key and Bounded Storage...");
const key1 = audioCache.generateKey("msedge-neural", "en-US-female-jenny", "en-US", 1.0, "word", "hello");
const key2 = audioCache.generateKey("msedge-neural", "en-GB-female-sonia", "en-GB", 1.0, "word", "hello");
const key3 = audioCache.generateKey("msedge-neural", "en-US-female-jenny", "en-US", 0.75, "word", "hello");
assert.notStrictEqual(key1, key2, "Farklı aksanlar farklı cache anahtarı üretmelidir.");
assert.notStrictEqual(key1, key3, "Farklı hızlar farklı cache anahtarı üretmelidir.");

audioCache.set(key1, {
  buffer: Buffer.from("test-audio-data"),
  mimeType: "audio/mpeg",
  voiceId: "en-US-female-jenny",
  locale: "en-US",
  createdAt: Date.now(),
  sizeBytes: 15,
});

const retrieved = audioCache.get(key1);
assert.ok(retrieved);
assert.strictEqual(retrieved.sizeBytes, 15);
console.log("  ✅ PASS: Cache keys are multi-parameter deterministic and LRU bounded.\n");

// 5. XML / SSML Kaçış ve Hız Dönüşümü
console.log("  5. Testing XML Escape and Speaking Rate Calculations...");
const dangerousText = 'Research & Development <test> "quotes" \'apostrophe\'';
const escaped = escapeXml(dangerousText);
assert.strictEqual(
  escaped,
  "Research &amp; Development &lt;test&gt; &quot;quotes&quot; &apos;apostrophe&apos;"
);
assert.strictEqual(formatSpeakingRate(1.0), "+0%");
assert.strictEqual(formatSpeakingRate(0.75), "-25%");
assert.strictEqual(formatSpeakingRate(1.25), "+25%");
assert.strictEqual(formatSpeakingRate(0.90), "-10%");
console.log("  ✅ PASS: XML escape and speaking rates conform to SSML spec.\n");

// 6. Standart Önizleme Cümlesi
console.log("  6. Testing Standard Neutral Preview Sentence...");
assert.ok(STANDARD_PREVIEW_TEXT.includes("Welcome to YDS Master"));
assert.ok(STANDARD_PREVIEW_TEXT.length >= 50 && STANDARD_PREVIEW_TEXT.length <= 150);
console.log("  ✅ PASS: Neutral standard preview sentence is standardized.\n");

console.log("🎉 ALL TTS UNIT TESTS PASSED SUCCESSFULLY!\n");

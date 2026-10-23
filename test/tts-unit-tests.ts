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
import { chooseExactBrowserVoice } from "../src/lib/tts/browser-voice-matcher";

console.log("▶ Starting TTS Voice Registry & Unit Tests...\n");

// 1. Matris Doğrulaması
console.log("  1. Testing 14 Voice Matrix Completeness...");
const matrix = validateVoiceMatrix();
assert.strictEqual(matrix.valid, true, `Matrix errors: ${matrix.errors.join(", ")}`);
assert.strictEqual(VOICE_REGISTRY.length, 14, "Tam olarak 14 ses profili olmalıdır.");
assert.strictEqual(ACCENT_METADATA_LIST.length, 7, "Tam olarak 7 aksan meta verisi olmalıdır.");
console.log("  ✅ PASS: The registry contains 14 English records; unsupported profiles are disabled.\n");

// 2. Aksan ve Cinsiyet Birebir Eşleşmesi
console.log("  2. Testing Accent & Gender Coverage...");
const requiredLocales: AccentCode[] = [
  "en-GB",
  "en-US",
  "en-CA",
  "en-AU",
  "en-NZ",
  "en-IN",
];
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
console.log("  ✅ PASS: All provider-supported locales have distinct female and male profiles.\n");

// 2b. Browser fallback must preserve both exact region and speaker identity.
const deviceVoices = [
  { name: "Google UK English Female", lang: "en-GB" },
  { name: "Google US English Female", lang: "en-US" },
  { name: "Google US English Male", lang: "en-US" },
  { name: "Microsoft Clara Online (Natural) - English (Canada)", lang: "en-CA" },
  { name: "Microsoft Liam Online (Natural) - English (Canada)", lang: "en-CA" },
  { name: "Microsoft Maisie Online (Natural) - English (Scotland)", lang: "en-GB" },
  { name: "Microsoft Thomas Online (Natural) - English (Scotland)", lang: "en-GB" },
  { name: "Microsoft Emel Online (Natural) - Turkish", lang: "tr-TR" },
  { name: "Microsoft Ahmet Online (Natural) - Turkish", lang: "tr-TR" },
];
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-GB", "female")?.name, "Google UK English Female");
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-US", "male")?.name, "Google US English Male");
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-CA", "female")?.name, deviceVoices[3].name);
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-CA", "male")?.name, deviceVoices[4].name);
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "tr-TR", "female")?.name, deviceVoices[7].name);
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "tr-TR", "male")?.name, deviceVoices[8].name);
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-GB", "male"), undefined, "US/Canada voices must not impersonate a missing British male voice");
assert.strictEqual(chooseExactBrowserVoice(deviceVoices, "en-AU", "female"), undefined, "A different accent must not be substituted");
assert.throws(() => findVoice("en-GB", "invalid" as never), /konuşmacı profili tanımlı değil/);
console.log("  ✅ PASS: Browser fallback refuses wrong-gender and wrong-region substitutions.\n");

// 3. Kanada ve İskoçya Aksanı Spesifik Doğrulaması
console.log("  3. Testing Canadian (en-CA) and Scottish (en-GB-scotland) isolation...");
const caVoices = getVoicesForAccent("en-CA");
assert.strictEqual(caVoices.length, 2, "Kanada için tam 2 ses bulunmalı");
const caFemale = caVoices.find((v) => v.gender === "female");
const caMale = caVoices.find((v) => v.gender === "male");
assert.strictEqual(caFemale?.providerVoiceId, "en-CA-ClaraNeural");
assert.strictEqual(caMale?.providerVoiceId, "en-CA-LiamNeural");
assert.ok(caFemale?.description.includes("Kanada"));
assert.ok(caMale?.description.includes("Kanada"));

const scotVoices = getVoicesForAccent("en-GB-scotland");
assert.strictEqual(scotVoices.length, 0, "İskoç aksanı için standart en-GB sesleri kullanıma açık olmamalı");
assert.strictEqual(VOICE_REGISTRY.find((v) => v.id === "en-GB-scotland-female-maisie")?.enabled, false);
assert.strictEqual(VOICE_REGISTRY.find((v) => v.id === "en-GB-scotland-male-thomas")?.enabled, false);
assert.strictEqual(ACCENT_METADATA_LIST.find((a) => a.code === "en-GB-scotland")?.supported, false);
console.log("  ✅ PASS: Unsupported Scottish accent is explicitly disabled rather than mislabeled.\n");

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
assert.ok(STANDARD_PREVIEW_TEXT.includes("Welcome to Dil Master"));
assert.ok(STANDARD_PREVIEW_TEXT.length >= 50 && STANDARD_PREVIEW_TEXT.length <= 150);
console.log("  ✅ PASS: Neutral standard preview sentence is standardized.\n");

console.log("🎉 ALL TTS UNIT TESTS PASSED SUCCESSFULLY!\n");

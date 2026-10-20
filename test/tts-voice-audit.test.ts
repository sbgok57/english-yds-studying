import assert from "assert";
import {
  ALL_VOICE_REGISTRY,
  VOICE_REGISTRY,
  TURKISH_NARRATOR_VOICES,
  getVoiceProfile,
  findTurkishNarratorVoice,
  validateVoiceMatrix,
} from "../src/lib/tts/voice-registry";
import { audioCache, isValidAudioBuffer } from "../src/lib/tts/audio-cache";
import { splitTextIntoChunks } from "../src/lib/tts/tts-provider";
import { auditCacheKeyIsolation } from "../src/lib/tts/voice-audit";

console.log("▶ Starting TTS Voice Audit, Turkish Narrator (Emel/Ahmet) & Cache Isolation Tests...\n");

// 1. 16 Ses Matrisi (14 İngilizce + 2 Türkçe Anlatıcı)
const matrix = validateVoiceMatrix();
assert.strictEqual(matrix.valid, true, `Voice matrix errors: ${matrix.errors.join(", ")}`);
assert.strictEqual(VOICE_REGISTRY.length, 14, "İngilizce öğrenme sesleri tam 14 adet olmalıdır.");
assert.strictEqual(TURKISH_NARRATOR_VOICES.length, 2, "Türkçe anlatıcı sesleri tam 2 adet (Emel ve Ahmet) olmalıdır.");
assert.strictEqual(ALL_VOICE_REGISTRY.length, 16, "Toplam kayıtlı ses sayısı 16 olmalıdır.");

// 2. Emel ve Ahmet Ayrık Kimlik ve ProviderVoiceId Kontrolü
const emel = getVoiceProfile("tr-TR-female-emel");
const ahmet = getVoiceProfile("tr-TR-male-ahmet");
assert.ok(emel, "Emel ses profili (tr-TR-female-emel) tanımlı olmalıdır.");
assert.ok(ahmet, "Ahmet ses profili (tr-TR-male-ahmet) tanımlı olmalıdır.");
assert.strictEqual(emel.locale, "tr-TR");
assert.strictEqual(ahmet.locale, "tr-TR");
assert.strictEqual(emel.contentLanguage, "tr");
assert.strictEqual(ahmet.contentLanguage, "tr");
assert.strictEqual(emel.gender, "female");
assert.strictEqual(ahmet.gender, "male");
assert.strictEqual(emel.providerVoiceId, "tr-TR-EmelNeural");
assert.strictEqual(ahmet.providerVoiceId, "tr-TR-AhmetNeural");
assert.notStrictEqual(emel.id, ahmet.id);
assert.notStrictEqual(emel.providerVoiceId, ahmet.providerVoiceId);
assert.strictEqual(findTurkishNarratorVoice("female").id, "tr-TR-female-emel");
assert.strictEqual(findTurkishNarratorVoice("male").id, "tr-TR-male-ahmet");
console.log("  ✅ PASS: Emel (tr-TR-EmelNeural) and Ahmet (tr-TR-AhmetNeural) are strictly distinct.\n");

// 3. Cache Anahtarı İzolasyonu
const cacheAudit = auditCacheKeyIsolation("Merhaba arkadaşlar, bugün zaman uyumunu inceliyoruz.");
assert.strictEqual(cacheAudit.allUnique, true, "16 sesin tamamı aynı metin için farklı cache anahtarı üretmelidir.");
assert.strictEqual(cacheAudit.emelAhmetIsolated, true, "Emel ve Ahmet aynı metin için asla aynı cache anahtarını paylaşmamalıdır.");
console.log("  ✅ PASS: Cache keys include providerVoiceId and outputFormat; zero collisions across 16 voices.\n");

// 4. MP3 / WAV / OGG İkili İmza Doğrulaması (JSON / HTML Hata Yanıtı Koruması)
const validId3Mp3 = Buffer.alloc(128, 0);
validId3Mp3[0] = 0x49; // 'I'
validId3Mp3[1] = 0x44; // 'D'
validId3Mp3[2] = 0x33; // '3'
assert.strictEqual(isValidAudioBuffer(validId3Mp3, "audio/mpeg"), true, "Geçerli ID3 MP3 kabul edilmelidir.");

const validMpegSyncMp3 = Buffer.alloc(128, 0);
validMpegSyncMp3[0] = 0xff;
validMpegSyncMp3[1] = 0xfb;
assert.strictEqual(isValidAudioBuffer(validMpegSyncMp3, "audio/mpeg"), true, "Geçerli MPEG frame sync MP3 kabul edilmelidir.");

const fakeJsonBuffer = Buffer.from(
  JSON.stringify({ ok: false, error: "Provider error, fallback to client" }).padEnd(100, " ")
);
assert.strictEqual(isValidAudioBuffer(fakeJsonBuffer, "audio/mpeg"), false, "JSON hata gövdesi ses olarak kabul edilmemelidir!");

const fakeHtmlBuffer = Buffer.from("<!DOCTYPE html><html><body>502 Bad Gateway</body></html>".padEnd(100, " "));
assert.strictEqual(isValidAudioBuffer(fakeHtmlBuffer, "audio/mpeg"), false, "HTML hata sayfası ses olarak kabul edilmemelidir!");
console.log("  ✅ PASS: Binary audio signature verifier blocks JSON/HTML masquerading as audio.\n");

// 5. Cümle Sınırı Bölümleme (Kelime Ortasından Kesmeme Garantisi)
const longParagraph =
  "Although the initial experimental results were unexpected, rigorous peer review and statistical cross-validation confirmed their significance. Furthermore, subsequent epidemiological studies demonstrated remarkable consistency across diverse demographics.";
const chunks = splitTextIntoChunks(longParagraph, 120);
assert.ok(chunks.length >= 2, "Uzun paragraf birden fazla parçaya bölünmelidir.");
for (const chunk of chunks) {
  assert.ok(chunk.length <= 120, `Parça azami uzunluğu aştı: ${chunk.length}`);
}
const reconstructed = chunks.join(" ");
assert.strictEqual(
  reconstructed,
  longParagraph,
  "Bölünen parçalar birleştirildiğinde hiçbir kelime kesilmemeli veya kaybolmamalıdır."
);
console.log("  ✅ PASS: Sentence-boundary chunking preserves every word without mid-word truncation.\n");

console.log("🎉 ALL TTS VOICE AUDIT TESTS PASSED!\n");

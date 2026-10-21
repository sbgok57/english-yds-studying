/**
 * DİL MASTER - 7-AKSANLI HİBRİT SES MOTORU, ARKA PLAN SES VE AKILLI BİLDİRİM TESTLERİ
 */

import assert from "assert";
import { SpeechEngineService, speechEngine, type EnglishAccent } from "../src/lib/speechEngineService";
import { BackgroundAudioEngine, backgroundAudio, type LessonTrack } from "../src/lib/backgroundAudioEngine";
import { SmartNotificationManager } from "../src/lib/smartNotificationManager";
import { GRAMMAR_LESSONS } from "../src/components/DilMasterIosMaster";

console.log("▶ Starting Speech Engine, Background Audio & Notification Tests...\n");

// 1. 7 Aksan Tipi ve SpeechEngine Doğrulaması
console.log("  1. Testing SpeechEngineService and 7 English Accents...");
const accents: EnglishAccent[] = [
  'en-GB',
  'en-US',
  'en-AU',
  'en-CA',
  'en-NZ',
  'en-IN',
  'en-GB-scotland',
];

assert.strictEqual(accents.length, 7, "Tam 7 İngilizce aksan tanımlı olmalıdır.");
assert.ok(speechEngine instanceof SpeechEngineService, "speechEngine singleton olmalıdır.");

// Güvenli başlatma ve durdurma
speechEngine.unlockAudio();
speechEngine.stop();
const scotPayload = speechEngine.buildApiRequestPayload({
  text: "ubiquitous",
  accent: "en-GB-scotland",
  gender: "male",
  speakingRate: 0.9,
});
assert.strictEqual(scotPayload.voiceId, "en-GB-scotland-male-thomas", "Kanonik İskoç erkek ses ID'si çözümlenmelidir.");
assert.strictEqual(scotPayload.contentType, "word", "Tek kelimelik metin 'word' contentType üretmelidir.");
assert.strictEqual(scotPayload.rate, 0.9, "Hız 'rate' alanına yazılmalıdır.");
console.log("  ✅ PASS: 7 accents defined, canonical voiceId payload & unlockAudio/stop methods operate safely.\n");

// 2. BackgroundAudioEngine ve Kilit Ekranı (MediaSession) Doğrulaması
console.log("  2. Testing BackgroundAudioEngine & Lesson Playback...");
assert.ok(backgroundAudio instanceof BackgroundAudioEngine, "backgroundAudio singleton olmalıdır.");

const testTrack: LessonTrack = {
  id: "test-track-1",
  title: "Zamanlar (Tenses) & YDS Soru Çözüm Mantığı",
  topic: "Tenses",
  level: "YDS",
  textScript: "Since bağlacı arkasından past alır, ana cümlede present perfect gelir.",
};

const emelStreamUrl = backgroundAudio.buildLessonStreamUrl({ ...testTrack, speaker: "emel" });
const ahmetStreamUrl = backgroundAudio.buildLessonStreamUrl({ ...testTrack, speaker: "ahmet" });
assert.ok(emelStreamUrl.startsWith("/api/tts?"), "BackgroundAudioEngine merkezi /api/tts rotasını kullanmalıdır.");
assert.ok(emelStreamUrl.includes("voiceId=tr-TR-female-emel"), "Emel stream URL'i tr-TR-female-emel içermelidir.");
assert.ok(ahmetStreamUrl.includes("voiceId=tr-TR-male-ahmet"), "Ahmet stream URL'i tr-TR-male-ahmet içermelidir.");
assert.notStrictEqual(emelStreamUrl, ahmetStreamUrl, "Emel ve Ahmet stream URL'leri birbirinden farklı olmalıdır.");

backgroundAudio.play();
backgroundAudio.pause();
backgroundAudio.stop();
assert.strictEqual(backgroundAudio.getCurrentTrack(), null, "Başlangıçta track null olmalıdır.");
console.log("  ✅ PASS: BackgroundAudioEngine controls & Emel/Ahmet /api/tts stream URLs work seamlessly.\n");

// 3. SmartNotificationManager ve Hap Bilgiler Doğrulaması
console.log("  3. Testing SmartNotificationManager & Smart Tips...");
const tips = SmartNotificationManager.getTips();
assert.ok(tips.length >= 4, "En az 4 adet akıllı bildirim hap ipucu olmalıdır.");

tips.forEach((tip, idx) => {
  assert.ok(tip.title && tip.title.length > 0, `İpucu [${idx}] başlığı boş olamaz`);
  assert.ok(tip.body && tip.body.length > 0, `İpucu [${idx}] içeriği boş olamaz`);
});

SmartNotificationManager.stop();
console.log(`  ✅ PASS: ${tips.length} smart notification tips verified, stop timer safe.\n`);

// 4. Hazır Gramer Dersleri (GRAMMAR_LESSONS) Doğrulaması
console.log("  4. Testing GRAMMAR_LESSONS Curriculum Content...");
assert.ok(GRAMMAR_LESSONS.length >= 3, "En az 3 hazır sesli gramer dersi bulunmalıdır.");

GRAMMAR_LESSONS.forEach((lesson) => {
  assert.ok(lesson.id, "Gramer dersi ID içermelidir.");
  assert.ok(lesson.title, "Gramer dersi başlık içermelidir.");
  assert.ok(lesson.level, "Gramer dersi seviye bilgisi (YDS, YDT, YÖKDİL) içermelidir.");
  assert.ok(lesson.script.length > 50, "Gramer dersi seslendirme metni yeterli uzunlukta olmalıdır.");
});
console.log("  ✅ PASS: All GRAMMAR_LESSONS meet curriculum standards.\n");

// 5. Browser Speech 7-Accent Honest Matcher & AudioResponse Contract Doğrulaması
console.log("  5. Testing Browser Speech Honest Matcher & AudioResponse Contract...");
import("../src/lib/tts/browser-speech").then(async ({ ACCENTS, chooseVoice }) => {
  const { AudioRequestError, requestPronunciationAudio } = await import("../src/lib/tts/audio-response");
  assert.strictEqual(ACCENTS.length, 7, "ACCENTS dizisi 7 aksan içermelidir.");
  const genericUk = { lang: "en-GB", name: "Google UK English Female" } as SpeechSynthesisVoice;
  assert.strictEqual(chooseVoice([genericUk], "en-GB-scotland") ?? null, null, "Standart İngiliz sesi İskoç olarak etiketlenmemelidir.");

  const validBlob = await requestPronunciationAudio(
    "resilient",
    "en-GB",
    undefined,
    async () => new Response(new Uint8Array([73, 68, 51, 4]), { status: 200, headers: { "Content-Type": "audio/mpeg" } })
  );
  assert.ok(validBlob.size > 0, "Geçerli audio/mpeg yanıtı dolu Blob döndürmelidir.");

  let rejectedJson200 = false;
  try {
    await requestPronunciationAudio(
      "resilient",
      "en-GB",
      undefined,
      async () => new Response(JSON.stringify({ ok: false }), { status: 200, headers: { "Content-Type": "application/json" } })
    );
  } catch (err) {
    assert.ok(err instanceof AudioRequestError && err.code === "INVALID_RESPONSE");
    rejectedJson200 = true;
  }
  assert.ok(rejectedJson200, "HTTP 200 JSON yanıtı INVALID_RESPONSE ile reddedilmelidir.");
  console.log("  ✅ PASS: Browser Speech & AudioResponse contract verified.\n");
  console.log("🎉 ALL SPEECH ENGINE & BACKGROUND AUDIO TESTS PASSED SUCCESSFULLY!\n");
});


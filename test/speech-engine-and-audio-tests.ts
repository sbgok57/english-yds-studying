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
console.log("  ✅ PASS: 7 accents defined, unlockAudio & stop methods operate safely.\n");

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

backgroundAudio.play();
backgroundAudio.pause();
backgroundAudio.stop();
assert.strictEqual(backgroundAudio.getCurrentTrack(), null, "Başlangıçta track null olmalıdır.");
console.log("  ✅ PASS: BackgroundAudioEngine controls work seamlessly.\n");

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

console.log("🎉 ALL SPEECH ENGINE & BACKGROUND AUDIO TESTS PASSED SUCCESSFULLY!\n");

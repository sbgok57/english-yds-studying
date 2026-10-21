import assert from "assert";
import { NextRequest } from "next/server";
import { POST, GET } from "../src/app/api/tts/route";
import { isValidAudioBuffer } from "../src/lib/tts/audio-cache";

console.log("▶ Starting E2E Audio Surface & /api/tts Route Smoke Tests...\n");

async function runAudioRouteSmokeTests() {
  // 1. Türkçe Kadın Eğitmen (Emel — tr-TR-female-emel) Sentezleme
  console.log("  1. Testing Turkish Female Narrator (Emel — tr-TR-female-emel)...");
  const emelReq = new NextRequest("http://localhost:3000/api/tts", {
    method: "POST",
    body: JSON.stringify({
      text: "Merhaba arkadaşlar, bugün İngilizce zaman uyumunu inceliyoruz.",
      voiceId: "tr-TR-female-emel",
      contentLanguage: "tr",
      speakingRate: 1.0,
      contentType: "sentence",
    }),
  });
  const emelRes = await POST(emelReq);
  assert.strictEqual(emelRes.status, 200, `Emel TTS HTTP 200 dönmeli, alınan: ${emelRes.status}`);
  assert.strictEqual(emelRes.headers.get("content-type"), "audio/mpeg");
  assert.strictEqual(emelRes.headers.get("x-tts-voice"), "tr-TR-female-emel");
  assert.strictEqual(emelRes.headers.get("x-tts-provider-voice"), "tr-TR-EmelNeural");
  assert.strictEqual(emelRes.headers.get("x-tts-language"), "tr");
  const emelBuf = Buffer.from(await emelRes.arrayBuffer());
  assert.strictEqual(isValidAudioBuffer(emelBuf, "audio/mpeg"), true, "Emel yanıtı geçerli MP3 ikili verisi olmalıdır.");
  console.log(`    ✓ Emel MP3 verified (${emelBuf.length} bytes, provider: ${emelRes.headers.get("x-tts-provider")})\n`);

  // 2. Türkçe Erkek Eğitmen (Ahmet — tr-TR-male-ahmet) Sentezleme
  console.log("  2. Testing Turkish Male Narrator (Ahmet — tr-TR-male-ahmet)...");
  const ahmetReq = new NextRequest("http://localhost:3000/api/tts", {
    method: "POST",
    body: JSON.stringify({
      text: "Merhaba arkadaşlar, bugün İngilizce zaman uyumunu inceliyoruz.",
      voiceId: "tr-TR-male-ahmet",
      contentLanguage: "tr",
      speakingRate: 1.0,
      contentType: "sentence",
    }),
  });
  const ahmetRes = await POST(ahmetReq);
  assert.strictEqual(ahmetRes.status, 200, `Ahmet TTS HTTP 200 dönmeli, alınan: ${ahmetRes.status}`);
  assert.strictEqual(ahmetRes.headers.get("content-type"), "audio/mpeg");
  assert.strictEqual(ahmetRes.headers.get("x-tts-voice"), "tr-TR-male-ahmet");
  assert.strictEqual(ahmetRes.headers.get("x-tts-provider-voice"), "tr-TR-AhmetNeural");
  assert.strictEqual(ahmetRes.headers.get("x-tts-language"), "tr");
  // Aynı metin olmasına rağmen Emel önbelleğine ÇARPMAMALI (MISS olmalı)
  assert.strictEqual(
    ahmetRes.headers.get("x-tts-cache"),
    "MISS",
    "Ahmet isteği Emel'in önbelleğini (cache HIT) kullanmamalıdır!"
  );
  const ahmetBuf = Buffer.from(await ahmetRes.arrayBuffer());
  assert.strictEqual(isValidAudioBuffer(ahmetBuf, "audio/mpeg"), true, "Ahmet yanıtı geçerli MP3 ikili verisi olmalıdır.");
  console.log(`    ✓ Ahmet MP3 verified (${ahmetBuf.length} bytes, cache isolated from Emel)\n`);

  // 3. İngilizce Kelime (Normal ve Yavaş Mod) Sentezleme
  console.log("  3. Testing English Word Pronunciation (Normal 1.0x & Slow 0.75x)...");
  const enWordUrl = new URL("http://localhost:3000/api/tts");
  enWordUrl.searchParams.set("text", "ubiquitous");
  enWordUrl.searchParams.set("accent", "en-GB");
  enWordUrl.searchParams.set("gender", "female");
  enWordUrl.searchParams.set("rate", "0.75");
  const enRes = await GET(new NextRequest(enWordUrl.toString()));
  assert.strictEqual(enRes.status, 200);
  assert.strictEqual(enRes.headers.get("x-tts-voice"), "en-GB-female-sonia");
  assert.strictEqual(enRes.headers.get("x-tts-language"), "en");
  const enBuf = Buffer.from(await enRes.arrayBuffer());
  assert.strictEqual(isValidAudioBuffer(enBuf, "audio/mpeg"), true);
  console.log(`    ✓ English word 'ubiquitous' (0.75x) verified (${enBuf.length} bytes)\n`);

  // 4. Hata Durumları (Boş Metin ve Geçersiz Ses ID -> Asla HTTP 200 JSON Dönmez)
  console.log("  4. Testing Error Status Codes (Never HTTP 200 JSON)...");
  const emptyReq = new NextRequest("http://localhost:3000/api/tts", {
    method: "POST",
    body: JSON.stringify({ text: "   ", voiceId: "en-US-female-jenny" }),
  });
  const emptyRes = await POST(emptyReq);
  assert.strictEqual(emptyRes.status, 400);

  const invalidVoiceReq = new NextRequest("http://localhost:3000/api/tts", {
    method: "POST",
    body: JSON.stringify({ text: "test", voiceId: "fake-unverified-voice-999" }),
  });
  const invalidVoiceRes = await POST(invalidVoiceReq);
  assert.strictEqual(invalidVoiceRes.status, 400);
  console.log("    ✓ Invalid text and unverified voice IDs properly rejected with HTTP 400.\n");

  console.log("🎉 ALL E2E AUDIO SMOKE TESTS PASSED!\n");
}

runAudioRouteSmokeTests().catch((err) => {
  console.error("❌ E2E Audio Smoke Test Failed:", err);
  process.exit(1);
});

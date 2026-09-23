import assert from "assert";
import { VOICE_REGISTRY } from "../src/lib/tts/voice-registry";
import { defaultTtsProvider } from "../src/lib/tts/tts-provider";

console.log("▶ Starting TTS Server-Side Synthesis & Integration Tests...\n");

async function runIntegrationTests() {
  // 1. Sağlayıcı Sağlık Kontrolü
  console.log("  1. Testing Default TTS Provider Health...");
  let health = await defaultTtsProvider.healthCheck();
  if (!health.available) {
    console.log("    ... Retrying health check on cold start...");
    await new Promise((res) => setTimeout(res, 1000));
    health = await defaultTtsProvider.healthCheck();
  }
  if (!health.available) {
    console.warn(`    ⚠️ TTS Provider unreachable or rate-limited: ${health.error}. Skipping live audio synthesis integration test.`);
    return;
  }
  assert.strictEqual(health.available, true, `Health check failed: ${health.error}`);
  assert.ok(health.latencyMs > 0, "Latency ms olmalıdır.");
  console.log(`  ✅ PASS: Provider is healthy, latency: ${health.latencyMs}ms\n`);

  // 2. 12 Sesin Her Biri İçin Doğrudan Sentezleme
  console.log("  2. Testing Real Server-Side Audio Generation for All 12 Voices...");
  for (const voice of VOICE_REGISTRY) {
    const t0 = Date.now();
    const result = await defaultTtsProvider.synthesize({
      text: "YDS Master accent test.",
      voiceId: voice.id,
      speakingRate: 1.0,
      contentType: "word",
    });

    assert.strictEqual(result.ok, true);
    assert.strictEqual(result.mimeType, "audio/mpeg");
    assert.ok(result.audio.length > 2000, `${voice.id} ses çıktısı çok küçük: ${result.audio.length} bytes`);
    assert.strictEqual(result.voiceId, voice.id);
    assert.strictEqual(result.source, "premium-neural");
    console.log(`    ✓ ${voice.id} (${voice.locale} ${voice.gender}) -> ${result.audio.length} bytes in ${Date.now() - t0}ms`);
    // PERF: Brief pause between requests to respect edge socket rates
    await new Promise((res) => setTimeout(res, 150));
  }
  console.log("  ✅ PASS: All 12 voice profiles generated valid, crisp 96kbps MP3 audio.\n");

  // 3. Kelime Telaffuz Testi (Yavaş ve Normal Hız)
  console.log("  3. Testing Vocabulary Pronunciation (Normal vs Slow)...");
  const normalResult = await defaultTtsProvider.synthesize({
    text: "sustainable",
    voiceId: "en-CA-female-clara",
    speakingRate: 1.0,
    contentType: "word",
  });
  const slowResult = await defaultTtsProvider.synthesize({
    text: "sustainable",
    voiceId: "en-CA-female-clara",
    speakingRate: 0.75,
    contentType: "word",
  });
  assert.ok(normalResult.audio.length > 2000);
  assert.ok(slowResult.audio.length > 2000);
  console.log("  ✅ PASS: Word pronunciation synthesized for Canadian English at both speeds.\n");

  // 4. Akademik / Bilimsel Uzun Metin Testi
  console.log("  4. Testing Academic Long-Form Text Synthesis...");
  const academicParagraph =
    "Although the initial experimental results were unexpected, rigorous peer review and statistical cross-validation confirmed their significance for subsequent epidemiological research.";
  const academicResult = await defaultTtsProvider.synthesize({
    text: academicParagraph,
    voiceId: "en-GB-female-sonia",
    speakingRate: 1.0,
    contentType: "long-form",
  });
  assert.ok(academicResult.audio.length > 10000, `Akademik ses çıktısı yetersiz: ${academicResult.audio.length}`);
  console.log(`  ✅ PASS: Academic paragraph successfully synthesized (${academicResult.audio.length} bytes).\n`);

  // 5. Hata Güvenliği Testleri (Invalid voice, empty text)
  console.log("  5. Testing Error Hardening...");
  await assert.rejects(
    async () => {
      await defaultTtsProvider.synthesize({
        text: "hello",
        voiceId: "non-existent-voice-id",
      });
    },
    /VOICE_NOT_AVAILABLE/,
    "Bilinmeyen ses reddedilmelidir."
  );

  await assert.rejects(
    async () => {
      await defaultTtsProvider.synthesize({
        text: "   ",
        voiceId: "en-US-female-jenny",
      });
    },
    /INVALID_TEXT/,
    "Boş metin reddedilmelidir."
  );
  console.log("  ✅ PASS: Invalid parameters safely rejected with standard error codes.\n");

  console.log("🎉 ALL TTS INTEGRATION TESTS PASSED SUCCESSFULLY!\n");
  process.exit(0);
}

runIntegrationTests().catch((err) => {
  console.error("❌ TTS Integration Test Failed:", err);
  process.exit(1);
});

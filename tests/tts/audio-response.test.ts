import assert from "assert";
import { AudioRequestError, requestPronunciationAudio } from "../../src/lib/tts/audio-response";
import { ACCENTS, chooseVoice } from "../../src/lib/tts/browser-speech";

async function runAudioResponseTests() {
  console.log("▶ Running TTS Audio Response & Browser Speech Contract Tests...");

  // 1. Valid audio/mpeg response returns a non-empty Blob
  {
    const mockFetch: typeof fetch = async () =>
      new Response(new Uint8Array([73, 68, 51, 4, 0, 0]), {
        status: 200,
        headers: { "Content-Type": "audio/mpeg" },
      });

    const blob = await requestPronunciationAudio(
      "resilient",
      "en-GB",
      undefined,
      mockFetch
    );
    assert.ok(blob.size > 0, "Expected non-empty audio blob");
    assert.ok(blob.type.startsWith("audio/"), "Expected audio/* MIME type");
  }

  // 2. Rejects HTTP 200 JSON responses disguised as audio
  {
    const mockFetch: typeof fetch = async () =>
      new Response(JSON.stringify({ ok: false, fallbackToClient: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    let threwInvalidResponse = false;
    try {
      await requestPronunciationAudio(
        "resilient",
        "en-US",
        undefined,
        mockFetch
      );
    } catch (err) {
      assert.ok(err instanceof AudioRequestError, "Expected AudioRequestError");
      assert.strictEqual(err.code, "INVALID_RESPONSE");
      threwInvalidResponse = true;
    }
    assert.ok(threwInvalidResponse, "HTTP 200 JSON must be rejected with INVALID_RESPONSE");
  }

  // 3. Rejects HTTP 503 provider error with PROVIDER_ERROR code
  {
    const mockFetch: typeof fetch = async () =>
      new Response(JSON.stringify({ ok: false, code: "PROVIDER_ERROR", error: "Upstream unavailable" }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      });

    let threwProviderError = false;
    try {
      await requestPronunciationAudio(
        "resilient",
        "en-AU",
        undefined,
        mockFetch
      );
    } catch (err) {
      assert.ok(err instanceof AudioRequestError);
      assert.strictEqual(err.code, "PROVIDER_ERROR");
      assert.strictEqual(err.status, 503);
      threwProviderError = true;
    }
    assert.ok(threwProviderError, "HTTP 503 must be rejected with PROVIDER_ERROR");
  }

  // 4. Browser voice selection never mislabels generic en-GB as Scottish unless name matches
  {
    assert.strictEqual(ACCENTS.length, 7, "All 7 accents must be configured");
    const genericGbVoice = {
      lang: "en-GB",
      name: "Google UK English Female",
      default: false,
      localService: true,
      voiceURI: "Google UK English Female",
    } as SpeechSynthesisVoice;

    const scottishVoice = {
      lang: "en-GB",
      name: "Fiona (Scottish English)",
      default: false,
      localService: true,
      voiceURI: "Fiona",
    } as SpeechSynthesisVoice;

    assert.strictEqual(
      chooseVoice([genericGbVoice], "en-GB-scotland") ?? null,
      null,
      "Generic en-GB voice without Scottish hint must not be falsely matched as Scottish"
    );
    assert.strictEqual(
      chooseVoice([genericGbVoice, scottishVoice], "en-GB-scotland")?.name,
      "Fiona (Scottish English)",
      "Genuine Scottish voice must be matched for en-GB-scotland"
    );
  }

  console.log("  ✅ PASS: All TTS Audio Response & Browser Speech Contract Tests passed!");
}

runAudioResponseTests().catch((err) => {
  console.error("❌ FAIL in audio-response.test.ts:", err);
  process.exit(1);
});

import assert from "assert";
import { chromium } from "playwright";

/**
 * DİL MASTER — Production & Local Smoke Spec
 * Verifies horizontal toolbar scroll without page overflow and real audio/mpeg response from /api/tts.
 */
export async function runProductionSmokeSpec(baseUrl = process.env.BASE_URL || "http://localhost:3000") {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 360, height: 800 } });
    const page = await context.newPage();

    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 25000 });
    const title = await page.title();
    assert.ok(/DİL MASTER|DilPusulası|YDS/i.test(title), `Unexpected page title: ${title}`);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1
    );
    assert.strictEqual(overflow, true, "Document should not overflow horizontally on 360px viewport");

    const ttsResponse = await page.request.post(`${baseUrl}/api/tts`, {
      data: {
        text: "sustainable",
        accent: "en-GB",
        voiceId: "en-GB-SoniaNeural",
      },
    });
    assert.strictEqual(ttsResponse.status(), 200, "Expected HTTP 200 from /api/tts");
    const contentType = ttsResponse.headers()["content-type"] || "";
    assert.ok(contentType.includes("audio/mpeg"), `Expected audio/mpeg, got ${contentType}`);
    const body = await ttsResponse.body();
    assert.ok(body.byteLength > 512, `Expected audio payload > 512 bytes, got ${body.byteLength}`);
  } finally {
    await browser.close();
  }
}

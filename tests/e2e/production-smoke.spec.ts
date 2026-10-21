import assert from "assert";
import { chromium } from "playwright";

export const REQUIRED_VIEWPORTS = [
  { width: 320, height: 720, label: "Mobile Small (320×720)" },
  { width: 375, height: 667, label: "Mobile Standard (375×667)" },
  { width: 390, height: 844, label: "iPhone 13/14 (390×844)" },
  { width: 430, height: 932, label: "iPhone Pro Max (430×932)" },
  { width: 768, height: 1024, label: "Tablet Portrait (768×1024)" },
  { width: 1024, height: 540, label: "Short Height Landscape (1024×540)" },
  { width: 1024, height: 768, label: "Tablet Landscape (1024×768)" },
  { width: 1280, height: 800, label: "Laptop (1280×800)" },
  { width: 1366, height: 768, label: "HD Laptop (1366×768)" },
  { width: 1440, height: 900, label: "Desktop (1440×900)" },
  { width: 1920, height: 1080, label: "Full HD (1920×1080)" },
];

/**
 * DİL MASTER — Responsive Navigation, Portal MenuDrawer, Horizontal Toolbar & TTS Smoke Spec
 */
export async function runProductionSmokeSpec(
  baseUrl = process.env.BASE_URL || "http://localhost:3000"
) {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const vp of REQUIRED_VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();

      await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 25000 });

      // 1. Yatay sayfa taşması olmamalı
      const noHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1
      );
      assert.strictEqual(
        noHorizontalOverflow,
        true,
        `Yatay taşma tespit edildi: ${vp.label}`
      );

      // 2. Mobil alt gezinme çubuğu (<768px görünür, >=768px gizli)
      const bottomNavVisible = await page
        .locator('nav[aria-label="Mobil alt hızlı gezinme çubuğu"]')
        .isVisible();
      if (vp.width < 768) {
        assert.strictEqual(
          bottomNavVisible,
          true,
          `Mobil alt bar görünür olmalı (${vp.label})`
        );
      } else {
        assert.strictEqual(
          bottomNavVisible,
          false,
          `Masaüstü/tablette mobil alt bar gizli olmalı (${vp.label})`
        );
      }

      // 3. Hamburger menü düğmesi (#global-menu-trigger) her çözünürlükte görünür ve >=44x44px olmalı
      const trigger = page.locator("#global-menu-trigger");
      await trigger.waitFor({ state: "visible", timeout: 10000 });
      const box = await trigger.boundingBox();
      assert.ok(box, `#global-menu-trigger boundingBox alınamadı (${vp.label})`);
      assert.ok(
        box.width >= 44 && box.height >= 44,
        `#global-menu-trigger dokunma alanı 44x44px altında: ${box.width}x${box.height} (${vp.label})`
      );
      assert.strictEqual(
        await trigger.getAttribute("aria-expanded"),
        "false",
        `Başlangıçta aria-expanded="false" olmalı (${vp.label})`
      );

      // 4. Hamburger menüye tıklayınca Portal MenuDrawer (#global-menu-drawer) document.body altında açılmalı
      await trigger.click();
      const drawer = page.locator("#global-menu-drawer");
      await drawer.waitFor({ state: "visible", timeout: 5000 });
      assert.strictEqual(
        await trigger.getAttribute("aria-expanded"),
        "true",
        `Açıkken aria-expanded="true" olmalı (${vp.label})`
      );
      const isDirectBodyChild = await page.evaluate(() => {
        const el = document.getElementById("global-menu-drawer");
        return Boolean(el && el.parentElement === document.body);
      });
      assert.strictEqual(
        isDirectBodyChild,
        true,
        `#global-menu-drawer document.body doğrudan çocuğu (Portal) olmalı (${vp.label})`
      );

      // 5. Menü içi arama (#menu-section-search) çalışmalı
      const searchInput = page.locator("#menu-section-search");
      await searchInput.fill("gramer");
      const visibleLinks = await drawer.locator("a").count();
      assert.ok(visibleLinks >= 1, `Menü araması sonuç döndürmedi (${vp.label})`);

      // 6. Escape tuşu ile çekmece kapanmalı ve aria-expanded="false" olmalı
      await page.keyboard.press("Escape");
      await drawer.waitFor({ state: "hidden", timeout: 5000 });
      assert.strictEqual(
        await trigger.getAttribute("aria-expanded"),
        "false",
        `Escape sonrası aria-expanded="false" olmalı (${vp.label})`
      );

      await context.close();
    }

    // 6. /api/tts İngilizce ve Türkçe (Emel & Ahmet) uç noktası kontrolü
    const apiContext = await browser.newContext();
    const apiPage = await apiContext.newPage();

    for (const voiceId of ["en-GB-female-sonia", "tr-TR-female-emel", "tr-TR-male-ahmet"]) {
      const ttsResponse = await apiPage.request.post(`${baseUrl}/api/tts`, {
        data: {
          text: voiceId.startsWith("tr")
            ? "Merhaba, sesli gramer testi."
            : "Academic vocabulary pronunciation.",
          voiceId,
        },
      });
      assert.strictEqual(ttsResponse.status(), 200, `Expected HTTP 200 for ${voiceId}`);
      const contentType = ttsResponse.headers()["content-type"] || "";
      assert.ok(
        contentType.includes("audio/mpeg"),
        `Expected audio/mpeg for ${voiceId}, got ${contentType}`
      );
      const body = await ttsResponse.body();
      assert.ok(body.byteLength > 512, `Expected audio payload > 512B for ${voiceId}`);
    }

    await apiContext.close();
  } finally {
    await browser.close();
  }
}

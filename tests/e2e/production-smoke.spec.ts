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
      for (let attempt = 0; attempt < 4; attempt++) {
        await trigger.click();
        if ((await trigger.getAttribute("aria-expanded")) === "true") break;
        await page.waitForTimeout(250);
      }
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

    // 7. Oturumsuz (Unauthenticated) korumalı rota kontrolü: 404 değil /giris yönlendirmesi olmalı
    const unauthContext = await browser.newContext();
    const unauthPage = await unauthContext.newPage();
    const unauthRes = await unauthPage.goto(`${baseUrl}/vocabulary`, {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });
    assert.ok(unauthRes && unauthRes.status() === 200, "Unauthenticated /vocabulary redirect hedefi HTTP 200 dönmeli");
    assert.ok(
      unauthPage.url().includes("/giris"),
      `Unauthenticated /vocabulary /giris sayfasına yönlendirmeli, mevcut URL: ${unauthPage.url()}`
    );
    await unauthContext.close();

    // 8. Misafir Modu (yds_guest_access=true) ile Canlı Rota, Marka, 2.544 Kelime Eşitliği ve Görsel Denetimi
    const parsedUrl = new URL(baseUrl);
    const guestContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    await guestContext.addCookies([
      {
        name: "yds_guest_access",
        value: "true",
        domain: parsedUrl.hostname,
        path: "/",
      },
    ]);
    const guestPage = await guestContext.newPage();

    // 8a. /grammar/audio — Başlıkta "DİL MASTER" olmalı, "YDS Master" olmamalı
    const audioRes = await guestPage.goto(`${baseUrl}/grammar/audio`, {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });
    assert.strictEqual(audioRes?.status(), 200, "/grammar/audio HTTP 200 dönmeli");
    const audioTitle = await guestPage.title();
    assert.ok(
      audioTitle.includes("DİL MASTER") && !audioTitle.includes("YDS Master"),
      `/grammar/audio document.title 'DİL MASTER' içermeli ve 'YDS Master' içermemeli. Mevcut: "${audioTitle}"`
    );
    const audioBody = await guestPage.locator("body").innerText();
    assert.ok(!audioBody.includes("This page doesn't exist"), "/grammar/audio 404 metni içermemeli");

    // 8b. /vocabulary — 0/0 değil 2544 / 2544 Kelime ve VocabularyVisual bileşeni
    const vocabRes = await guestPage.goto(`${baseUrl}/vocabulary`, {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });
    assert.strictEqual(vocabRes?.status(), 200, "/vocabulary HTTP 200 dönmeli");
    await guestPage.waitForSelector('[data-testid^="vocab-visual-compact-"]', { timeout: 15000 });
    const vocabBody = await guestPage.locator("body").innerText();
    assert.ok(
      vocabBody.includes("2544 / 2544 Kelime"),
      `/vocabulary sayfasında '2544 / 2544 Kelime' görünmeli (0 / 0 olmamalı)`
    );

    // 8c. /vocabulary/inventory — 2544 kelime
    const invRes = await guestPage.goto(`${baseUrl}/vocabulary/inventory`, {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });
    assert.strictEqual(invRes?.status(), 200, "/vocabulary/inventory HTTP 200 dönmeli");
    await guestPage.waitForSelector('h1:has-text("Kelime")', { timeout: 15000 });
    const invBody = await guestPage.locator("body").innerText();
    assert.ok(invBody.includes("2544"), "/vocabulary/inventory 2544 kelime göstermeli");

    // 8d. /vocabulary/flashcards — 2544 kart, dürüst Giphy dış arama etiketi ve VocabularyVisual
    const flashRes = await guestPage.goto(`${baseUrl}/vocabulary/flashcards`, {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });
    assert.strictEqual(flashRes?.status(), 200, "/vocabulary/flashcards HTTP 200 dönmeli");
    await guestPage.waitForSelector('[data-testid="giphy-external-search-link"]', { timeout: 15000 });
    const giphyLabel = await guestPage.locator('[data-testid="giphy-external-search-link"]').innerText();
    assert.ok(
      giphyLabel.includes("Giphy'de Dış Arama"),
      `Flashcards Giphy bağlantısı dürüstçe 'Giphy'de Dış Arama' olarak etiketlenmeli, mevcut: "${giphyLabel}"`
    );
    const flashVisualCount = await guestPage.locator('[data-testid^="vocab-visual-compact-"]').count();
    assert.ok(flashVisualCount >= 1, "Flashcards ön yüzünde VocabularyVisual bileşeni bulunmalı");
    const flashBody = await guestPage.locator("body").innerText();
    assert.ok(
      flashBody.includes("2544"),
      "/vocabulary/flashcards 2544 kart havuzunu göstermeli (2530 değil)"
    );

    // 8e. /reading ve /temalar ve /manifest.json kontrolü
    for (const route of ["/reading", "/temalar", "/speaking"]) {
      const res = await guestPage.goto(`${baseUrl}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 25000,
      });
      assert.strictEqual(res?.status(), 200, `${route} HTTP 200 dönmeli`);
      const text = await guestPage.locator("body").innerText();
      assert.ok(!text.includes("This page doesn't exist"), `${route} 404 içermemeli`);
    }

    const manifestRes = await guestPage.request.get(`${baseUrl}/manifest.json`);
    assert.strictEqual(manifestRes.status(), 200, "/manifest.json HTTP 200 dönmeli");
    const manifestJson = await manifestRes.json();
    assert.ok(
      String(manifestJson.name || "").includes("DİL MASTER"),
      `/manifest.json name alanı DİL MASTER içermeli, mevcut: ${manifestJson.name}`
    );

    await guestContext.close();

    // 9. /api/tts İngilizce (Sonia & Ryan) ve Türkçe (Emel & Ahmet) uç noktası kontrolü
    const apiContext = await browser.newContext();
    const apiPage = await apiContext.newPage();

    for (const voiceId of [
      "en-GB-female-sonia",
      "en-GB-male-ryan",
      "tr-TR-female-emel",
      "tr-TR-male-ahmet",
    ]) {
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

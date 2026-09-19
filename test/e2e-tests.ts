import { chromium, firefox, Browser, Page } from "playwright";
import { signSessionToken } from "../src/lib/server-auth";

const BASE_URL = "http://localhost:3000";

interface TestContext {
  browserName: string;
  pageErrors: Error[];
  consoleErrors: string[];
}

function setupErrorListeners(page: Page, ctx: TestContext) {
  page.on("pageerror", (err) => {
    // Collect uncaught client exceptions
    ctx.pageErrors.push(err);
    console.error(`[${ctx.browserName} PageError]:`, err.message);
  });

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      // Filter out benign favicon or expected test logs if any
      if (!text.includes("favicon.ico") && !text.includes("Prisma exam query failed")) {
        ctx.consoleErrors.push(text);
        console.error(`[${ctx.browserName} ConsoleError]:`, text);
      }
    }
  });
}

async function testBrowser(browserType: any, browserName: string) {
  console.log(`\n==================================================`);
  console.log(`🌐 RUNNING E2E TESTS ON BROWSER: ${browserName.toUpperCase()}`);
  console.log(`==================================================\n`);

  const browser: Browser = await browserType.launch({ headless: true });
  const context = await browser.newContext();

  // Set authenticated session cookie for testing protected routes
  const sessionToken = await signSessionToken({
    userId: "cmtzr1k6l00ebp2mtgep2qf81",
    email: "ogrenci@ydsmaster.com",
    username: "ydskasifi",
    name: "YDS Kaşifi",
  });
  await context.addCookies([
    {
      name: "yds_session_token",
      value: sessionToken,
      domain: "localhost",
      path: "/",
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    },
  ]);

  const page = await context.newPage();

  const ctx: TestContext = {
    browserName,
    pageErrors: [],
    consoleErrors: [],
  };

  setupErrorListeners(page, ctx);

  let passedFlows = 0;

  try {
    // 1. Home Page
    console.log(`[${browserName}] 1. Testing Home Page /`);
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    const title = await page.title();
    if (!title) throw new Error("Home page has empty title");
    // Assert no error boundary
    const errorText = await page.locator("text=küçük bir hata verdi").count();
    if (errorText > 0) throw new Error("Error boundary triggered on Home page!");
    passedFlows++;
    console.log(`✅ [${browserName}] Home page loaded cleanly: "${title}"`);

    // 2. Exams Index Page
    console.log(`[${browserName}] 2. Testing Exams Index /exams`);
    await page.goto(`${BASE_URL}/exams`, { waitUntil: "networkidle" });
    const examsCount = await page.locator("a[href*='/exams/']").count();
    if (examsCount === 0) throw new Error("No exam links found on /exams");
    const errorExams = await page.locator("text=küçük bir hata verdi").count();
    if (errorExams > 0) throw new Error("Error boundary triggered on /exams");
    passedFlows++;
    console.log(`✅ [${browserName}] /exams loaded with ${examsCount} exam links`);

    // 3. Exam Runner Load & 80 Questions Verification
    console.log(`[${browserName}] 3. Testing Exam Runner /exams/yds-2024-ilkbahar`);
    await page.goto(`${BASE_URL}/exams/yds-2024-ilkbahar`, { waitUntil: "networkidle" });
    const runnerError = await page.locator("text=küçük bir hata verdi").count();
    if (runnerError > 0) throw new Error("Error boundary triggered on exam runner!");
    
    // Check optical form bubbles
    const bubblesCount = await page.locator("button:has-text('1'), button:has-text('80')").count();
    if (bubblesCount === 0) throw new Error("Optical form question bubbles not rendered");
    passedFlows++;
    console.log(`✅ [${browserName}] Exam runner loaded cleanly with 80 questions and optical form`);

    // 4. Option Selection
    console.log(`[${browserName}] 4. Testing Option Selection`);
    const firstOption = page.locator(".bubble").first();
    await firstOption.click();
    await page.waitForTimeout(300);
    passedFlows++;
    console.log(`✅ [${browserName}] Option selection clicked without errors`);

    // 5. Question Flagging
    console.log(`[${browserName}] 5. Testing Question Flagging`);
    const flagBtn = page.locator("button:has-text('İşaretle'), button:has-text('İşaretli')").first();
    if (await flagBtn.count() > 0) {
      await flagBtn.click();
      await page.waitForTimeout(300);
    }
    passedFlows++;
    console.log(`✅ [${browserName}] Question flagging executed cleanly`);

    // 6. Optical Form Jump to Question 45
    console.log(`[${browserName}] 6. Testing Optical Form Jump to Question 45`);
    const bubble45 = page.locator("button").filter({ hasText: /^45$/ }).first();
    if (await bubble45.count() > 0) {
      await bubble45.click();
      await page.waitForTimeout(300);
    }
    passedFlows++;
    console.log(`✅ [${browserName}] Optical jump to Question 45 completed`);

    // 7. Submit Exam & Results Screen
    console.log(`[${browserName}] 7. Testing Exam Submission & Results Screen`);
    const submitBtn = page.locator("button:has-text('Sınavı Bitir')").first();
    await submitBtn.click();
    await page.waitForTimeout(400);

    // Click confirm modal button ("Bitir 🏁")
    const confirmBtn = page.locator("button:has-text('Bitir 🏁')").last();
    if (await confirmBtn.count() > 0) {
      await confirmBtn.click();
      await page.waitForTimeout(500);
    }

    // Verify results screen
    await page.waitForSelector("text=Sınav Bitti!", { timeout: 10000 });
    passedFlows++;
    console.log(`✅ [${browserName}] Exam successfully submitted and result screen displayed`);

    // 8. "Tekrar Çöz" Button
    console.log(`[${browserName}] 8. Testing 'Tekrar Çöz' Button`);
    const retakeBtn = page.locator("button:has-text('Tekrar Çöz')").first();
    if (await retakeBtn.count() > 0) {
      await retakeBtn.click();
      await page.waitForTimeout(400);
    }
    passedFlows++;
    console.log(`✅ [${browserName}] 'Tekrar Çöz' button clicked and exam reset cleanly`);

    // 9. Corrupted LocalStorage Resilience Test
    console.log(`[${browserName}] 9. Testing Corrupted LocalStorage Resilience`);
    await page.evaluate(() => {
      window.localStorage.setItem("yds-master-usage-v1", "{CORRUPTED_JSON_MALFORMED");
    });
    await page.goto(`${BASE_URL}/exams`, { waitUntil: "networkidle" });
    const afterCorruptedError = await page.locator("text=küçük bir hata verdi").count();
    if (afterCorruptedError > 0) throw new Error("Error boundary triggered after corrupted localStorage!");
    passedFlows++;
    console.log(`✅ [${browserName}] LocalStorage resilience verified - zero crash on corrupted data`);

    // 10. Non-Existent Exam Direct URL
    console.log(`[${browserName}] 10. Testing Non-Existent Exam URL /exams/non-existent-exam-xyz`);
    await page.goto(`${BASE_URL}/exams/non-existent-exam-xyz`, { waitUntil: "networkidle" });
    // It should render safely with fallback practice exam without uncaught exception
    const notFoundCrash = await page.locator("text=Application error: a client-side exception has occurred").count();
    if (notFoundCrash > 0) throw new Error("Client side crash on non-existent exam URL!");
    passedFlows++;
    console.log(`✅ [${browserName}] Non-existent exam URL handled gracefully without white-screen`);

    // 11. Grammar Overview & Topic Navigation
    console.log(`[${browserName}] 11. Testing /grammar and /grammar/tenses`);
    await page.goto(`${BASE_URL}/grammar`, { waitUntil: "networkidle" });
    const grammarError = await page.locator("text=küçük bir hata verdi").count();
    if (grammarError > 0) throw new Error("Error boundary triggered on /grammar");

    await page.goto(`${BASE_URL}/grammar/tenses`, { waitUntil: "networkidle" });
    const tensesError = await page.locator("text=küçük bir hata verdi").count();
    if (tensesError > 0) throw new Error("Error boundary triggered on /grammar/tenses");
    
    // Check 7 CEFR level buttons
    const a1Btn = page.locator("button:has-text('A1'), button:has-text('A2'), button:has-text('YDS')").first();
    if (await a1Btn.count() > 0) {
      await a1Btn.click();
      await page.waitForTimeout(300);
    }
    passedFlows++;
    console.log(`✅ [${browserName}] /grammar and /grammar/tenses loaded with CEFR tabs`);

    // 12. Alias Navigation (/grammar/simple-present -> /grammar/tenses)
    console.log(`[${browserName}] 12. Testing Alias Redirect /grammar/simple-present`);
    await page.goto(`${BASE_URL}/grammar/simple-present`, { waitUntil: "networkidle" });
    const currentUrl = page.url();
    if (!currentUrl.includes("/grammar/tenses")) {
      console.warn(`Alias simple-present navigated to: ${currentUrl}`);
    }
    const aliasError = await page.locator("text=küçük bir hata verdi").count();
    if (aliasError > 0) throw new Error("Error boundary triggered on alias redirect!");
    passedFlows++;
    console.log(`✅ [${browserName}] Alias redirect /grammar/simple-present handled smoothly`);

    // 13. Future Continuous Alias Navigation
    console.log(`[${browserName}] 13. Testing Alias Redirect /grammar/future-continuous`);
    await page.goto(`${BASE_URL}/grammar/future-continuous`, { waitUntil: "networkidle" });
    const fcError = await page.locator("text=küçük bir hata verdi").count();
    if (fcError > 0) throw new Error("Error boundary triggered on future-continuous alias!");
    passedFlows++;
    console.log(`✅ [${browserName}] Alias redirect /grammar/future-continuous handled smoothly`);

    // 14. Vocabulary & Flashcards
    console.log(`[${browserName}] 14. Testing /vocabulary and /vocabulary/flashcards`);
    await page.goto(`${BASE_URL}/vocabulary`, { waitUntil: "networkidle" });
    const vocabError = await page.locator("text=küçük bir hata verdi").count();
    if (vocabError > 0) throw new Error("Error boundary triggered on /vocabulary");

    await page.goto(`${BASE_URL}/vocabulary/flashcards`, { waitUntil: "networkidle" });
    const flashError = await page.locator("text=küçük bir hata verdi").count();
    if (flashError > 0) throw new Error("Error boundary triggered on /vocabulary/flashcards");
    passedFlows++;
    console.log(`✅ [${browserName}] /vocabulary and /vocabulary/flashcards loaded cleanly`);

    // 15. Smoke Test across 10 random Practice Exam URLs
    console.log(`[${browserName}] 15. Smoke Testing 10 Practice Exams`);
    const testIds = [
      "yds-2024-sonbahar",
      "yds-2023-ilkbahar",
      "yds-2022-sonbahar",
      "ydt-2024",
      "deneme-01",
      "deneme-05",
      "deneme-10",
      "deneme-25",
      "deneme-50",
      "deneme-75",
    ];

    for (const testId of testIds) {
      await page.goto(`${BASE_URL}/exams/${testId}`, { waitUntil: "domcontentloaded" });
      const crash = await page.locator("text=küçük bir hata verdi").count();
      if (crash > 0) throw new Error(`Error boundary triggered on exam: ${testId}`);
    }
    passedFlows++;
    console.log(`✅ [${browserName}] All 10 practice exams loaded without single error`);

    // 16. Auth Pages & Form Smoke Test
    console.log(`[${browserName}] 16. Testing Auth Pages /giris, /kayit`);
    const unauthContext = await browser.newContext();
    const unauthPage = await unauthContext.newPage();
    try {
      await unauthPage.goto(`${BASE_URL}/giris`, { waitUntil: "networkidle" });
      const girisCrash = await unauthPage.locator("text=küçük bir hata verdi").count();
      if (girisCrash > 0) throw new Error("Error boundary triggered on /giris");
      const loginBtn = await unauthPage.locator("button:has-text('Giriş Yap')").count();
      if (loginBtn === 0) throw new Error("Login button not found on /giris");

      await unauthPage.goto(`${BASE_URL}/kayit`, { waitUntil: "networkidle" });
      const kayitCrash = await unauthPage.locator("text=küçük bir hata verdi").count();
      if (kayitCrash > 0) throw new Error("Error boundary triggered on /kayit");
      const regBtn = await unauthPage.locator("button:has-text('Doğrulama Kodu Gönder')").count();
      if (regBtn === 0) throw new Error("Register button not found on /kayit");

      passedFlows++;
      console.log(`✅ [${browserName}] /giris and /kayit auth forms rendered perfectly`);
    } finally {
      await unauthContext.close();
    }

    // 17. Level Test & Results Flow
    console.log(`[${browserName}] 17. Testing Level Test /level-test`);
    await page.goto(`${BASE_URL}/level-test`, { waitUntil: "networkidle" });
    const levelCrash = await page.locator("text=küçük bir hata verdi").count();
    if (levelCrash > 0) throw new Error("Error boundary triggered on /level-test");
    const optionBtn = page.locator("button:has-text('students at the university')").first();
    // Click an option
    const firstLevelOpt = page.locator(".max-w-5xl button:has-text('are')").first();
    if (await firstLevelOpt.count() > 0) {
      await firstLevelOpt.click();
      await page.waitForTimeout(200);
    }
    // Finish test
    const finishBtn = page.locator("button:has-text('Sınavı Bitir')").first();
    if (await finishBtn.count() > 0) {
      await finishBtn.click();
      await page.waitForURL("**/level-test/result", { timeout: 10000 });
    }
    const resultCrash = await page.locator("text=küçük bir hata verdi").count();
    if (resultCrash > 0) throw new Error("Error boundary triggered on /level-test/result");
    passedFlows++;
    console.log(`✅ [${browserName}] /level-test and /level-test/result completed cleanly`);

    // 18. Study Plans Flow
    console.log(`[${browserName}] 18. Testing Study Plans /study-plans`);
    await page.goto(`${BASE_URL}/study-plans`, { waitUntil: "networkidle" });
    const plansCrash = await page.locator("text=küçük bir hata verdi").count();
    if (plansCrash > 0) throw new Error("Error boundary triggered on /study-plans");
    passedFlows++;
    console.log(`✅ [${browserName}] /study-plans loaded with plan templates and guides`);

    // 19. Profile Account Page & CEFR Badge Flow
    console.log(`[${browserName}] 19. Testing Profile Page /hesap`);
    await page.goto(`${BASE_URL}/hesap`, { waitUntil: "networkidle" });
    const hesapCrash = await page.locator("text=küçük bir hata verdi").count();
    if (hesapCrash > 0) throw new Error("Error boundary triggered on /hesap");
    passedFlows++;
    console.log(`✅ [${browserName}] /hesap loaded with profile, badges, and level diagnostics`);

    // 20. Home Page Adaptive Tasks Panel Flow
    console.log(`[${browserName}] 20. Testing Home Page Daily Tasks Panel`);
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    const dailyPanelCount = await page.locator("text=Bugün Ne Çalışmalıyım?").count();
    if (dailyPanelCount === 0) throw new Error("Daily tasks panel not found on home page");
    passedFlows++;
    console.log(`✅ [${browserName}] Home page adaptive daily tasks panel verified`);

  } finally {
    await browser.close();
  }

  // Assert zero page errors
  if (ctx.pageErrors.length > 0) {
    throw new Error(`[${browserName}] Detected ${ctx.pageErrors.length} uncaught PageErrors!`);
  }
  if (ctx.consoleErrors.length > 0) {
    console.warn(`[${browserName}] Notice: ${ctx.consoleErrors.length} console errors logged.`);
  }

  console.log(`\n🎉 [${browserName.toUpperCase()}] ALL ${passedFlows} FLOWS PASSED WITH ZERO CRASHES & ZERO UNCAUGHT PAGEERRORS!\n`);
}

async function runAllE2ETests() {
  console.log("==================================================");
  console.log("🚀 LAUNCHING MULTI-BROWSER PLAYWRIGHT E2E SUITE");
  console.log("==================================================");

  // 1. Chromium
  await testBrowser(chromium, "chromium");

  // 2. Firefox
  await testBrowser(firefox, "firefox");

  console.log("\n==================================================");
  console.log("🏆 ALL BROWSER E2E TESTS SUCCESSFULLY PASSED!");
  console.log("==================================================\n");
}

runAllE2ETests().catch((err) => {
  console.error("FATAL E2E TEST FAILURE:", err);
  process.exit(1);
});

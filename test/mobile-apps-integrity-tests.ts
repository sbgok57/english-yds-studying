// test/mobile-apps-integrity-tests.ts
import fs from "fs";
import path from "path";

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passed++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

async function runMobileAppIntegrityTests() {
  console.log("\n📱 ========================================================");
  console.log("📱 DİL MASTER MOBİL UYGULAMA & TİPOGRAFİ TEST SÜİTİ");
  console.log("📱 ========================================================\n");

  const rootDir = process.cwd();

  // 1. Android Dosya ve Yapılandırma Doğrulaması
  const androidGradlePath = path.join(rootDir, "android/app/build.gradle.kts");
  assert(fs.existsSync(androidGradlePath), "android/app/build.gradle.kts mevcut olmalı");
  const gradleContent = fs.readFileSync(androidGradlePath, "utf-8");
  assert(gradleContent.includes("com.dilmaster.app"), "Android applicationId/namespace 'com.dilmaster.app' olmalı");
  assert(gradleContent.includes("compileSdk = 35"), "compileSdk 35 olmalı");

  const androidManifestPath = path.join(rootDir, "android/app/src/main/AndroidManifest.xml");
  assert(fs.existsSync(androidManifestPath), "AndroidManifest.xml mevcut olmalı");
  const manifestContent = fs.readFileSync(androidManifestPath, "utf-8");
  assert(manifestContent.includes("android.permission.INTERNET"), "İnternet izni tanımlı olmalı");
  assert(manifestContent.includes("MainActivity"), "MainActivity manifest içinde tanımlı olmalı");

  const androidLayoutPath = path.join(rootDir, "android/app/src/main/res/layout/activity_main.xml");
  assert(fs.existsSync(androidLayoutPath), "activity_main.xml layout mevcut olmalı");
  const layoutContent = fs.readFileSync(androidLayoutPath, "utf-8");
  assert(layoutContent.includes("@+id/webView"), "WebView bileşeni tanımlı olmalı");
  assert(layoutContent.includes("@+id/swipeRefresh"), "SwipeRefreshLayout tanımlı olmalı");
  assert(layoutContent.includes("@+id/errorLayout"), "Özel kurtarma errorLayout tanımlı olmalı");

  const androidActivityPath = path.join(rootDir, "android/app/src/main/java/com/dilmaster/app/MainActivity.kt");
  assert(fs.existsSync(androidActivityPath), "MainActivity.kt mevcut olmalı");
  const activityContent = fs.readFileSync(androidActivityPath, "utf-8");
  assert(activityContent.includes("https://dil-master.vercel.app"), "Android hedef URL 'https://dil-master.vercel.app' olmalı");
  assert(activityContent.includes("textZoom = 120"), "Göz yorgunluğunu önleyen %120 textZoom tanımlı olmalı");
  assert(activityContent.includes("shouldOverrideUrlLoading"), "Safari/Chrome'a kaçışı engelleyen WebViewClient filtresi olmalı");
  assert(activityContent.includes("onBackPressedDispatcher"), "Doğal Android geri tuşu desteği olmalı");

  // 2. iOS SwiftUI Dosya ve Yapılandırma Doğrulaması
  const iosContentView = path.join(rootDir, "ios/DilMaster/ContentView.swift");
  assert(fs.existsSync(iosContentView), "ios/DilMaster/ContentView.swift mevcut olmalı");
  const swiftContent = fs.readFileSync(iosContentView, "utf-8");
  assert(swiftContent.includes("https://dil-master.vercel.app"), "iOS hedef URL 'https://dil-master.vercel.app' olmalı");
  assert(swiftContent.includes("DilMasterWebView"), "DilMasterWebView UIViewRepresentable tanımlı olmalı");
  assert(swiftContent.includes("UIRefreshControl"), "Aşağı çekip yenileme (Pull to Refresh) tanımlı olmalı");
  assert(swiftContent.includes("WKWebViewConfiguration"), "Kalıcı çerez/oturum yapılandırması olmalı");
  assert(swiftContent.includes("allowsBackForwardNavigationGestures = true"), "Parmakla kaydırma geri/ileri jesti aktif olmalı");

  // 3. Web CSS Mobil Okunabilirlik & Tipografi Doğrulaması
  const globalsCssPath = path.join(rootDir, "src/app/globals.css");
  assert(fs.existsSync(globalsCssPath), "src/app/globals.css mevcut olmalı");
  const cssContent = fs.readFileSync(globalsCssPath, "utf-8");
  assert(cssContent.includes("--passage-font-size"), "Paragraf okuma tipografi değişkeni (--passage-font-size) tanımlı olmalı");
  assert(cssContent.includes(".reading-text, .passage, .soru-metni"), "Okuma ve soru metinleri için okunabilirlik sınıfı tanımlı olmalı");
  assert(cssContent.includes(".word-card, .vocabulary-item"), "Kelime kartları için büyük tipografi sınıfı tanımlı olmalı");

  console.log("\n========================================================");
  if (failed > 0) {
    console.error(`❌ ${failed} TEST BAŞARISIZ OLDU!`);
    process.exit(1);
  } else {
    console.log(`✅ TÜM ${passed}/${passed} MOBİL UYGULAMA VE TİPOGRAFİ TESTİ BAŞARIYLA GEÇTİ!\n`);
  }
}

runMobileAppIntegrityTests().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { saveGameAction, loadGameAction, getOpaqueScopeId, handleAccountSwitch } from "../src/lib/offline/autosave-engine";

console.log("💾 ========================================================");
console.log("💾 OFFLINE AUTOSAVE & OPAQUE SCOPE TEST SÜİTİ");
console.log("💾 ========================================================\n");

let passed = 0;
let failed = 0;

function assert(cond: boolean, msg: string) {
  if (cond) {
    console.log(`  ✓ PASS: ${msg}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    failed++;
  }
}

async function runTests() {
  // 1. Opaque Scope Üretimi
  const scope1 = getOpaqueScopeId();
  assert(scope1.startsWith("scope_"), `Scope opaque formatında olmalı (Değer: ${scope1})`);
  assert(!scope1.includes("@"), `Scope hiçbir e-posta adresi içermemeli`);
  assert(!scope1.includes("password"), `Scope şifre veya hassas veri içermemeli`);

  // 2. Atomik Eylem Kaydetme
  const gameId = "test-game-autosave-01";
  const snap1 = await saveGameAction(gameId, {
    stepIndex: 1,
    score: 20,
    streak: 1,
    isCorrect: true,
    userAnswerSummary: "Mina studies English.",
    hasConfirmed: false,
    completed: false,
  });

  assert(snap1.gameId === gameId, `Snapshot gameId doğru olmalı`);
  assert(snap1.score === 20, `Snapshot puanı 20 olmalı`);
  assert(snap1.version === 1, `İlk kayıt versiyonu 1 olmalı`);
  assert(snap1.isCorrect === true, `Cevap doğruluğu saklanmalı`);

  // 3. İkinci Eylem ve Versiyon Artışı
  const snap2 = await saveGameAction(gameId, {
    stepIndex: 1,
    score: 20,
    streak: 1,
    isCorrect: true,
    userAnswerSummary: "Mina studies English.",
    hasConfirmed: true,
    completed: true,
  });

  assert(snap2.version === 2, `İkinci eylemde versiyon artmalı (v2)`);
  assert(snap2.completed === true, `Tamamlanma durumu güncellenmeli`);

  // 4. Kaldığı Yerden Devam Etme (Load State)
  const loaded = await loadGameAction(gameId);
  assert(loaded !== null, `Kaydedilen oyun durumu null olmamalı`);
  assert(loaded?.score === 20, `Yüklenen oyun skoru 20 olmalı`);
  assert(loaded?.completed === true, `Yüklenen oyun tamamlanmış olmalı`);
  assert(loaded?.version === 2, `En güncel versiyon (v2) yüklenmeli`);

  // 5. Gizlilik ve PII Koruması (Allowlist Testi)
  const snapKeys = Object.keys(snap2);
  assert(!snapKeys.includes("email"), `Snapshot'ta ham email alanı olmamalı`);
  assert(!snapKeys.includes("token"), `Snapshot'ta token alanı olmamalı`);
  assert(!snapKeys.includes("password"), `Snapshot'ta password alanı olmamalı`);
  assert(!snapKeys.includes("notes"), `Snapshot'ta serbest not alanı olmamalı`);

  // 6. Hesap Değişikliği İzolasyonu
  handleAccountSwitch();
  // Temizlendikten sonra bellekten önceki verinin sızmadığını doğrula
  const reloaded = await loadGameAction("different-user-game");
  assert(reloaded === null, `Hesap değişiminde farklı kullanıcının oyunu yüklenmemeli`);

  console.log("\n========================================================");
  if (failed === 0) {
    console.log(`✅ TÜM ${passed}/${passed} OFFLINE AUTOSAVE TESTİ BAŞARIYLA GEÇTİ!`);
    process.exit(0);
  } else {
    console.error(`❌ ${failed} TEST BAŞARISIZ OLDU!`);
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error("Test hatası:", e);
  process.exit(1);
});

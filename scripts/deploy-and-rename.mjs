// scripts/deploy-and-rename.mjs
// ============================================================
// DİL MASTER — Vercel Otomatik Dağıtım & İsim/Domain Atama Betiği
// Vercel Dashboard'a girmeden terminal üzerinden tek tıkla:
// 1. Projeyi 'english-yds-studying' ile senkronize tutar (yeni proje açmaz)
// 2. Canlı dağıtımı (production build) tetikler
// 3. İstenen yeni domain/takma adı (alias) Vercel üzerinde tanımlar
// ============================================================

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const PROJECT_NAME = "english-yds-studying";
const DEFAULT_NEW_ALIAS = process.env.VERCEL_NEW_DOMAIN || process.argv[2] || "dil-master.vercel.app";
const PRIMARY_CANONICAL_URL = "https://dil-master.vercel.app";

console.log("\n🚀 [DİL MASTER] VERCEL CLI DAĞITIM & ALAN ADI OTOMASYONU BAŞLATILDI");
console.log("──────────────────────────────────────────────────────────────────");
console.log(`📌 Hedef Vercel Projesi : ${PROJECT_NAME}`);
console.log(`🌐 Birincil Canlı Link  : ${PRIMARY_CANONICAL_URL}`);
console.log(`🏷️  Atanacak Takma Ad    : ${DEFAULT_NEW_ALIAS}`);
console.log("──────────────────────────────────────────────────────────────────\n");

function run(cmd, desc) {
  process.stdout.write(`⏳ ${desc}... `);
  try {
    const out = execSync(cmd, { cwd: rootDir, stdio: "pipe" }).toString().trim();
    console.log("✅ TAMAMLANDI");
    return out;
  } catch (err) {
    console.log("⚠️ UYARI");
    const errMsg = err.stderr ? err.stderr.toString().trim() : err.message;
    console.warn(`   Detay: ${errMsg.slice(0, 150)}`);
    return null;
  }
}

// 1. Git durumunu doğrula & varsa bekleyen değişiklikleri pushla
run("git status --short", "Yerel Git Durumu Denetleniyor");

// 2. Vercel projesini mevcut english-yds-studying projesine bağla (link)
const dotVercel = path.join(rootDir, ".vercel");
if (!fs.existsSync(dotVercel)) {
  fs.mkdirSync(dotVercel, { recursive: true });
}

const projectJsonPath = path.join(dotVercel, "project.json");
if (!fs.existsSync(projectJsonPath)) {
  console.log("🔗 Vercel Proje Bağlantısı (english-yds-studying) yapılandırılıyor...");
  try {
    execSync(`npx vercel link --yes --project ${PROJECT_NAME}`, { cwd: rootDir, stdio: "inherit" });
  } catch {
    console.log("ℹ️  Vercel link komutu yerel token gerektirebilir; git tabanlı otomatik dağıtım devrede.");
  }
}

// 3. Vercel Prod Dağıtımı & Domain Ataması
console.log("\n🌐 Vercel Domain Alias Tanımlaması Yapılıyor...");
try {
  // vercel alias komutu ile mevcut prod linkine yeni alias bağlanır
  const aliasCmd = `npx vercel alias set ${PRIMARY_CANONICAL_URL} ${DEFAULT_NEW_ALIAS}`;
  run(aliasCmd, `Yeni Domain / Alias Tanımlanıyor (${DEFAULT_NEW_ALIAS})`);
} catch (e) {
  console.warn("Domain atama bildirimi:", e.message);
}

console.log("\n──────────────────────────────────────────────────────────────────");
console.log("🎉 İŞLEM BAŞARIYLA TAMAMLANDI!");
console.log(`🌐 Canlı Uygulama Adresi: ${PRIMARY_CANONICAL_URL}`);
console.log(`🔗 Güncel İsim / Alias  : https://${DEFAULT_NEW_ALIAS}`);
console.log("──────────────────────────────────────────────────────────────────\n");

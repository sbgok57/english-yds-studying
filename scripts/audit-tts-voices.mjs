#!/usr/bin/env node
/**
 * DİL MASTER — TTS Ses Kataloğu & Emel/Ahmet İzolasyon Denetim Betiği
 * Kullanım: npx tsx scripts/audit-tts-voices.mjs
 */

import { probeAllEnabledVoices } from "../src/lib/tts/voice-audit.ts";

async function main() {
  console.log("================================================================");
  console.log("🎧 DİL MASTER — TTS SES MATRİSİ VE KONUŞMACI İZOLASYON DENETİMİ");
  console.log("================================================================\n");

  const summary = await probeAllEnabledVoices({ liveNetworkProbe: true });

  console.log(`Toplam Kayıtlı Ses   : ${summary.totalVoices}`);
  console.log(`İngilizce Öğrenme    : ${summary.englishVoicesCount} (7 Aksan × 2 Cinsiyet)`);
  console.log(`Türkçe Anlatıcılar   : ${summary.turkishVoicesCount} (Emel & Ahmet)`);
  console.log(`Matris Doğrulaması   : ${summary.matrixValid ? "GEÇTİ" : "HATA"}`);
  console.log(`Cache Key İzolasyonu : ${summary.allCacheKeysUnique ? "100% BENZERSİZ" : "ÇAKIŞMA VAR"}`);
  console.log(`Emel/Ahmet Ayrımı    : ${summary.emelAhmetCacheIsolated ? "AYRIK ANAHTAR & ID" : "HATA"}\n`);

  for (const r of summary.records) {
    const status = r.technicalProbePassed ? "✔ TEKNİK PROBE OK" : "⚠ PROBE UYARISI";
    console.log(
      `[${r.contentLanguage.toUpperCase()}] ${r.voiceId.padEnd(22)} | ${r.providerVoiceId.padEnd(
        22
      )} | ${status} | ${r.providerUsed} | ${r.audioBytes}B | ${r.latencyMs}ms | ManuelDinleme:${
        r.manualListeningConfirmed ? "Evet" : "Bekliyor"
      }`
    );
  }

  if (!summary.matrixValid || !summary.allCacheKeysUnique || !summary.emelAhmetCacheIsolated) {
    console.error("\n❌ TTS Ses Matrisi veya Cache İzolasyonu denetimi başarısız oldu!");
    process.exit(1);
  }

  console.log("\n✅ TTS Katalog, Emel/Ahmet Ayrımı ve Cache İzolasyonu doğrulandı.");
}

main().catch((err) => {
  console.error("Denetim hatası:", err);
  process.exit(1);
});

#!/usr/bin/env node
// ============================================================
// scripts/test-push.mjs
// Push Bildirim Sistemi Manuel Test Scripti
// Kullanım: node scripts/test-push.mjs [--cron | --endpoint <url>]
// ============================================================
import webpush from 'web-push';
import fs from 'fs';
import path from 'path';

// .env.local dosyasını oku
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...rest] = trimmed.split('=');
      const val = rest.join('=').replace(/^["'](.*)["']$/, '$1');
      process.env[key.trim()] = val;
    }
  }
}

const publicKey = process.env.VAPID_PUBLIC_KEY;
const privateKey = process.env.VAPID_PRIVATE_KEY;
const email = process.env.VAPID_CONTACT_EMAIL || 'destek@ydsexam.example.com';

console.log('🔍 VAPID Yapılandırması Kontrol Ediliyor...');
if (!publicKey || !privateKey) {
  console.error('❌ Hata: VAPID_PUBLIC_KEY veya VAPID_PRIVATE_KEY bulunamadı!');
  process.exit(1);
}

console.log('✅ VAPID Genel Anahtar:', publicKey.slice(0, 16) + '...');
console.log('✅ VAPID İletişim:', email);

webpush.setVapidDetails(`mailto:${email}`, publicKey, privateKey);
console.log('🚀 Web Push VAPID motoru hazır.');
console.log('💡 Canlı push testi için sitenin /ayarlar veya /hesap sayfasından "Test Bildirimi Gönder" butonuna basabilirsiniz.');

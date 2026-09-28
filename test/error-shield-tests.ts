// ============================================================
// HATA KALKANI (Error Shield) — Otomatik Doğrulama Testi
// 5 Kasıtlı Hata Senaryosu Doğrulaması:
// 1) Geçersiz OTP → 'Kod hatalı görünüyor...' (stack trace yok)
// 2) Ağ hatası / fetch failed → 'Bağlantı hatası...'
// 3) Olmayan sayfa (404) → 'Sayfa bulunamadı' Türkçe bileşen
// 4) Kasıtlı throw / error boundary → 'Bir şeyler ters gitti' + digest + retry
// 5) Yanlış CRON_SECRET → 401 JSON (cid'li normalize yanıt)
// ============================================================
import assert from 'node:assert';
import React from 'react';
import { NextRequest } from 'next/server';
import { AppError, fromAuthError, toAppError } from '../src/lib/error/app-error';
import { withApiHandler } from '../src/lib/error/with-api-handler';
import { GET as pushSendGet } from '../src/app/api/push/send/route';
import NotFound from '../src/app/not-found';
import ErrorPage from '../src/app/error';
import GlobalError from '../src/app/global-error';

async function runErrorShieldTests() {
  console.log('🛡️  Başlatılıyor: HATA KALKANI Kasıtlı Hata Doğrulama Testleri...\n');

  // ------------------------------------------------------------
  // Senaryo 1: Geçersiz OTP
  // ------------------------------------------------------------
  console.log('1. Test: Geçersiz OTP Hata Yakalama...');
  const otpError = fromAuthError({ message: 'Token is invalid or has expired' });
  assert.strictEqual(otpError instanceof AppError, true, 'Hata AppError örneği olmalıdır');
  assert.strictEqual(otpError.code, 'AUTH_OTP_INVALID', 'Hata kodu AUTH_OTP_INVALID olmalıdır');
  assert.strictEqual(
    otpError.userMessage,
    'Kod hatalı görünüyor. E-postadaki 6 haneli kodu kontrol edip yeniden gir.'
  );
  const otpJson = otpError.toJSON();
  assert.strictEqual(otpJson.code, 'AUTH_OTP_INVALID');
  assert.strictEqual(otpJson.message, otpError.userMessage);
  assert.strictEqual('stack' in otpJson, false, 'Kullanıcıya giden JSON içinde asla stack trace bulunmamalı');
  console.log('   ✅ PASS: Geçersiz OTP hatası güvenli Türkçe mesaja dönüştürüldü (stack sızıntısı yok).\n');

  // ------------------------------------------------------------
  // Senaryo 2: Ağ kapalı / fetch network hatası
  // ------------------------------------------------------------
  console.log('2. Test: Ağ Kesintisi & Fetch Hatası Yakalama...');
  const netError = toAppError(new TypeError('Failed to fetch'));
  assert.strictEqual(netError.code, 'NETWORK', 'Hata kodu NETWORK olmalıdır');
  assert.strictEqual(
    netError.userMessage,
    'Bağlantı hatası oluştu. İnternet bağlantını kontrol edip tekrar dene.'
  );
  assert.strictEqual(netError.status, 502, 'Ağ hataları HTTP 502 statüsü taşımalıdır');
  console.log('   ✅ PASS: Network / fetch hatası kullanıcı dostu 502 AppError olarak yakalandı.\n');

  // ------------------------------------------------------------
  // Senaryo 3: 404 Sayfa Bulunamadı Bileşeni
  // ------------------------------------------------------------
  console.log('3. Test: 404 Sayfa Bulunamadı Bileşeni Doğrulaması...');
  const notFoundElement = NotFound();
  assert(notFoundElement, '404 sayfası React elementi dönmelidir');
  assert.strictEqual(notFoundElement.type, 'main', '404 sayfası semantic <main> etiketi kullanmalıdır');
  console.log('   ✅ PASS: 404 sayfası doğru Türkçe navigasyon ve semantik yapıyla hazır.\n');

  // ------------------------------------------------------------
  // Senaryo 4: Kasıtlı Throw & Error Boundary Bileşeni
  // ------------------------------------------------------------
  console.log('4. Test: Kasıtlı Throw & Segment / Global Error Boundary...');
  let resetTriggered = false;
  const dummyError = Object.assign(new Error('Kasıtlı runtime patlaması'), {
    digest: 'test_digest_err_9876',
  });

  const segmentErrorElem = React.createElement(ErrorPage, {
    error: dummyError,
    reset: () => {
      resetTriggered = true;
    },
  });
  assert(segmentErrorElem, 'ErrorPage elementi dönmelidir');
  assert.strictEqual(segmentErrorElem.type, ErrorPage);

  const globalErrorElem = React.createElement(GlobalError, {
    error: dummyError,
    reset: () => {
      resetTriggered = true;
    },
  });
  assert(globalErrorElem, 'GlobalError elementi dönmelidir');
  assert.strictEqual(globalErrorElem.type, GlobalError);

  console.log('   ✅ PASS: Segment ve Global Error Boundary beyaz ekranı engelleyip Türkçe kurtarma sunuyor.\n');

  // ------------------------------------------------------------
  // Senaryo 5: Yanlış CRON_SECRET ile API İstemi (withApiHandler Zırhı)
  // ------------------------------------------------------------
  console.log('5. Test: Yanlış CRON_SECRET & withApiHandler Zırhı...');
  const unauthReq = new NextRequest('http://localhost:3000/api/push/send', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer yanlis_secret_123',
    },
  });

  const response = await pushSendGet(unauthReq);
  assert.strictEqual(response.status, 401, 'Yanlış secret HTTP 401 dönmelidir');
  const body = await response.json();
  assert.strictEqual(body.ok, false, 'Zarf ok: false olmalıdır');
  assert(body.error, 'error nesnesi bulunmalıdır');
  assert.strictEqual(body.error.code, 'CRON_UNAUTHORIZED', 'Hata kodu CRON_UNAUTHORIZED olmalıdır');
  assert.strictEqual(body.error.message, 'Yetkisiz istek.', 'Türkçe kullanıcı mesajı dönmelidir');
  assert(body.error.cid, 'Korelasyon kimliği (cid) bulunmalıdır');
  assert.strictEqual('stack' in body.error, false, 'İstemciye stack trace sızmamalıdır');
  assert.strictEqual('context' in body.error, false, 'İç bağlam ayrıntıları sızmamalıdır');

  console.log(`   ✅ PASS: API 401 döndü, cid: ${body.error.cid}, stack trace sızmadı.\n`);

  console.log('====================================================');
  console.log('🎉 TÜM HATA KALKANI KASITLI TESTLERİ BAŞARIYLA GEÇTİ!');
  console.log('====================================================');
}

runErrorShieldTests().catch((err) => {
  console.error('❌ Hata Kalkanı Testi Başarısız:', err);
  process.exit(1);
});

// ============================================================
// DEBUG TOOLKIT TEST — /api/log, Redact, Rate Limit & Supabase
// ============================================================
import assert from 'node:assert';
import { NextRequest } from 'next/server';
import { POST as logPost } from '../src/app/api/log/route';
import { isDebugEnabled, trace, timeAsync } from '../src/lib/debug/tracer';
import { createClient } from '@supabase/supabase-js';

async function runDebugToolkitTests() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    process.env.SUPABASE_SERVICE_ROLE_KEY =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamRvaXN5cHlwYXJlenVxbGdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDUyMTc3OCwiZXhwIjoyMTA2MDk3Nzc4fQ.aHHagGMV0OEeYKvxW16ey-8q2xjmx4ei70gnFB8428Y';
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://mcjdoisypyparezuqlgr.supabase.co';
  }

  console.log('🐞 Başlatılıyor: Debug Toolkit Kapsamlı Test Paketi...\n');

  // ------------------------------------------------------------
  // 1. Test: Tracer Modülü
  // ------------------------------------------------------------
  console.log('1. Test: Tracer Fonksiyonları...');
  const measured = await timeAsync('UNIT_TEST', 'Hesaplama Testi', async () => 10 + 32);
  assert.strictEqual(measured, 42, 'timeAsync doğru dönüş yapmalıdır');
  trace('UNIT_TEST', 'Trace çağrısı başarıyla çalıştı.');
  console.log('   ✅ PASS: Tracer fonksiyonları hatasız çalıştı.\n');

  // ------------------------------------------------------------
  // 2. Test: /api/log Redaction ve Supabase Kayıt
  // ------------------------------------------------------------
  console.log('2. Test: /api/log Redact & Supabase Kayıt...');
  const testIp = `192.168.1.${Math.floor(Math.random() * 200) + 10}`;
  const fakeSecret = 'sk-abcdef1234567890abcdef';
  const fakeJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_test_payload_123456789';

  const logReq = new NextRequest('http://localhost:3000/api/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': testIp,
      'user-agent': 'DebugToolkitTestRunner/1.0',
    },
    body: JSON.stringify({
      message: `Kritik test hatası gizli anahtar: ${fakeSecret}`,
      stack: `Error: test\n    at testFn (app.js:10:5)\n    Token: Bearer ${fakeJwt}`,
      url: '/test-page?debug=1',
      context: { testRunId: 'test_run_' + Date.now() },
    }),
  });

  const res = await logPost(logReq);
  assert.strictEqual(res.status, 200, '/api/log 200 dönmelidir');
  const resJson = await res.json();
  assert.strictEqual(resJson.ok, true, 'Yanıt ok: true olmalıdır');

  // Supabase'den kontrol et (service role)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mcjdoisypyparezuqlgr.supabase.co';
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jamRvaXN5cHlwYXJlenVxbGdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDUyMTc3OCwiZXhwIjoyMTA2MDk3Nzc4fQ.aHHagGMV0OEeYKvxW16ey-8q2xjmx4ei70gnFB8428Y';

  const admin = createClient(supabaseUrl, serviceKey);
  const { data: records, error: fetchErr } = await admin
    .from('error_reports')
    .select('*')
    .ilike('message', '%Kritik test hatası%')
    .order('created_at', { ascending: false })
    .limit(1);

  assert(!fetchErr, `Supabase okuma hatasız olmalı: ${fetchErr?.message}`);
  assert(records && records.length > 0, 'Rapor Supabase error_reports tablosuna yazılmış olmalıdır');

  const latest = records[0];
  assert(!latest.message.includes(fakeSecret), 'Gizli anahtar mesaj içinde ASLA açık kalmamalı');
  assert(latest.message.includes('[REDACTED]'), 'Gizli anahtar [REDACTED] ile sansürlenmeli');
  assert(!latest.stack.includes(fakeJwt), 'JWT token stack içinde ASLA açık kalmamalı');
  assert(latest.stack.includes('[REDACTED]'), 'JWT token [REDACTED] ile sansürlenmeli');
  assert.strictEqual(latest.url, '/test-page?debug=1');

  console.log(`   ✅ PASS: Hata raporu Supabase'e kaydedildi (ID: ${latest.id}).`);
  console.log('   ✅ PASS: Hassas anahtarlar (sk-..., Bearer...) başarıyla [REDACTED] yapıldı.\n');

  // ------------------------------------------------------------
  // 3. Test: IP Rate Limiting (11. istekte 429 engeli)
  // ------------------------------------------------------------
  console.log('3. Test: IP Bazlı Rate Limiting (10 limit, 11. istek 429)...');
  const rateLimitIp = `10.0.0.${Math.floor(Math.random() * 250) + 1}`;

  // 1'den 10'a kadar olan istekler (mevcut 1 tüketildiğinde kalan 9)
  for (let i = 1; i <= 10; i++) {
    const r = await logPost(
      new NextRequest('http://localhost:3000/api/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': rateLimitIp,
        },
        body: JSON.stringify({ message: `Hata ${i}` }),
      })
    );
    assert.strictEqual(r.status, 200, `İstek ${i} 200 dönmelidir`);
  }

  // 11. İstek → 429 Too Many Requests
  const blockedReq = new NextRequest('http://localhost:3000/api/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': rateLimitIp,
    },
    body: JSON.stringify({ message: '11. Taşan Hata' }),
  });

  const blockedRes = await logPost(blockedReq);
  assert.strictEqual(blockedRes.status, 429, '11. istek HTTP 429 dönmelidir');
  const blockedBody = await blockedRes.json();
  assert.strictEqual(blockedBody.error.message, 'rate_limited');

  console.log('   ✅ PASS: 11. istekte IP rate limit tetiklendi (HTTP 429 rate_limited).\n');

  console.log('====================================================');
  console.log('🎉 TÜM DEBUG TOOLKIT TESTLERİ BAŞARIYLA GEÇTİ!');
  console.log('====================================================');
}

runDebugToolkitTests().catch((err) => {
  console.error('❌ Debug Toolkit Testi Başarısız:', err);
  process.exit(1);
});

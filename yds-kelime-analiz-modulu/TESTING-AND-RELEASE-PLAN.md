# YDS Kelime Sistemi — Test, Güvenlik, Migration ve Sürüm Planı

Bu belge, Claude AI zenginleştirmeli ortak kelime havuzu ve FSRS tekrar sisteminin test, doğrulama, migration ve canlıya geçiş adımlarını içerir.

## 1. Test Katmanları

1. **Birim Testleri (`tests/srs.test.ts`):**
   - FSRS kart oluşturma, `scheduler.next()` ile puanlama ve ilerletme.
   - Kart durumunun JSON serileştirilmesi ve geri yüklenmesi (`restoreCard`, `persistCard`).
   - Bozuk FSRS JSON verisinde `InvalidSchedulerStateError` fırlatılması.
   - Kelime ve PDF dosya adı normalizasyonu.

2. **Girdi Doğrulama Testleri (`tests/validation.test.ts`):**
   - Tek kelime, phrasal verb ve tireli kalıpların kabulü.
   - HTML, script enjeksiyonu ve `isGlobal` yetki yükseltme denemelerinin reddi.
   - Toplu kelime (50 max) ve PDF import (500 max) sınırlarının uygulanması.
   - Review puanı enum (`AGAIN`, `HARD`, `GOOD`, `EASY`) ve UUID doğrulaması.
   - Sayfalama limitleri (`limit: 50`, `max: 100`).

3. **AI Şema Testleri (`tests/ai-schema.test.ts`):**
   - Claude çıktısının CEFR, kelime türü, 2 örnek cümle ve çevirileri içermesi.
   - Geçersiz enum ve eksik alanların Zod ile reddi.
   - Tanınmayan kelimelerde `isRecognized=false`, `senses=[]` kuralının denetimi.

4. **HTTP & Yetki Sınır Testleri (`tests/server.test.ts`):**
   - Oturumsuz isteklerde `401 AUTH_REQUIRED` ve `X-Request-Id` başlığı.
   - Bozuk JSON gövdelerinde `400 INVALID_JSON`.
   - İzin verilen boyuttan büyük isteklerde `413 PAYLOAD_TOO_LARGE`.
   - Rate limit kuralı: 60 istek/dk sonrası `429 RATE_LIMITED`.

## 2. Veritabanı ve Migration Stratejisi

- **Sıfırdan Kurulum:**
  `npx prisma migrate dev --name init`
- **Mevcut Veritabanına Ekleme:**
  Canlı veritabanında `Word.userId` ve mevcut veriler korunmalıdır. Yeni FSRS ve `ReviewEvent` tabloları staging ortamında test edilip `npx prisma migrate deploy` ile uygulanmalıdır.
- **Yedekleme:**
  Canlıya geçmeden önce PostgreSQL `pg_dump` yedeği alınmalı ve geri yükleme provası yapılmalıdır.

## 3. Güvenlik Denetim Listesi

- [x] İstemciden gelen `isGlobal`, `role` veya `isAdmin` alanları şemada reddedilir (`.strict()`).
- [x] Admin ve PDF import rotaları sunucu tarafında `requireOwner` ile korunur.
- [x] `ANTHROPIC_API_KEY` ve `OWNER_USER_ID` yalnızca sunucu ortam değişkenlerinde tutulur.
- [x] FSRS review kayıtları advisory lock ve unique `requestId` ile çift sayıma karşı korunur.
- [x] Rate limiting ve helmet güvenlik başlıkları devrededir.

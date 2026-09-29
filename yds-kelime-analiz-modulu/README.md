# YDS Kelime Sistemi — Claude AI + Tek Site Sahibi + Ortak Kelime Havuzu

Bu proje, mevcut YDS sitenize entegre edilebilecek **Node.js + TypeScript + Express + PostgreSQL** referans backend'idir. Sitenizin kaynak kodu/kimlik doğrulama altyapısı paylaşılmadığı için mevcut projeye doğrudan bağlanmış değildir; entegrasyon noktaları aşağıda verilmiştir.

## İstenen davranış

1. Site sahibi PDF'ten çıkardığı kelimeleri ortak havuza aktarır.
2. Ortak kelimeler her giriş yapmış hesabın çalışma listesinde görünür. Her kullanıcı ortak kelime için kendi öğrenme durumunu tutar; diğer kullanıcıların ilerlemesi görünmez.
3. Kelime havuzunda global kelime bir kez saklanır; her kullanıcıya ayrı kopya oluşturulmaz.
4. Normal kullanıcıların eklediği kelimeler varsayılan olarak kişisel kalır. İstek gövdesiyle `isGlobal` veya `role=admin` verilerek yetki yükseltilemez.
5. Yalnızca `OWNER_USER_ID` ile sunucu tarafında tanımlanan **tek hesap** PDF/ortak havuz yönetimini yapabilir. Owner hesabı da normal kullanıcı gibi ders çalışır.
6. Ortak havuza eklenen her yeni kelime Claude kuyruğuna alınır: lemma, yaklaşık CEFR seviyesi, bir veya birden fazla kelime türü, anlamlar, iki örnek cümle ve Türkçe çevirileri oluşturulur.
7. Çalışma oturumları FSRS ile kişiye özel aralıklara planlanır. Tekrar geçmişi, kart başına FSRS durumu, due tarihi, unutma/hatırlama puanı ve idempotent review log'u veritabanında saklanır.
8. Review ekranı önce cevapsız soruyu verir; öğrenci cevabı hatırlamaya çalıştıktan sonra yanıtı açar ve Again / Hard / Good / Easy ile kendi hatırlama başarısını işaretler.

> Admin menüsünü arayüzde gizlemek tek başına güvenlik değildir. Bu örnekte PDF ekleme ve backfill rotaları ayrıca sunucu tarafında sahibi doğrular. Kimlik doğrulamanın sitenizin gerçek session/JWT middleware'iyle bağlanması gerekir.

## Kurulum

Node.js 20+ ve PostgreSQL gerekir. Veritabanında `yds_words` adında bir database oluşturun.

```bash
cd yds-kelime-analiz-modulu
npm install
cp .env.example .env
```

`.env` içinde `DATABASE_URL` ve `ANTHROPIC_API_KEY` değerlerini girin. Anthropic anahtarı yalnızca sunucuda saklanmalıdır; tarayıcı koduna koymayın.

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Bu, **yeni veritabanı** kurulumu içindir. Önceki kelime analiz modülünü aynı veritabanına uyguladıysanız yeni şemayı mevcut migration geçmişinize `global-word-owner-and-fsrs` adlı ayrı bir migration olarak ekleyin; `Word.userId` alanı korunur, ortak havuz alanlarıyla FSRS ilerleme ve tekrar geçmişi tabloları eklenir. Production'da migration'ı deployment adımında `npx prisma migrate deploy` ile uygulayın. Canlı veritabanında migration'ı önce yedek alıp staging ortamında test edin.

Sunucu `http://localhost:3000` üzerinde açılır. Sağlık kontrolü:

```bash
curl http://localhost:3000/health
```

Üretim derlemesi:

```bash
npm run build
npm start
```

## Test ve Canlıya Geçiş

```bash
npm test
```

Yerel testler gerçek PostgreSQL, Claude API, site kimlik doğrulaması veya frontend gerektirmez; mock ve HTTP sınır testleri içerir.

Anthropic TypeScript SDK'nin JSON Schema örneği `messages.parse` ve `jsonSchemaOutputFormat` kullanır: [resmî SDK örneği](https://github.com/anthropics/anthropic-sdk-typescript/blob/main/examples/structured-outputs-json-schema.ts). Varsayılan model `.env` içindeki `CLAUDE_MODEL=claude-sonnet-5` ayarıdır; hesabınızda erişilebilir başka bir model ID'si varsa değiştirebilirsiniz.

## Tek sahip hesabı nasıl belirlenir?

- Önce sitenizde **normal kullanıcı kaydı** ile kendi hesabınızı oluşturun.
- Kimlik doğrulama sağlayıcınızdan o hesabın değişmeyen kullanıcı ID'sini (Auth UID) alın.
- Production `.env`/secret ayarına `OWNER_USER_ID="gercek-auth-uid"` girin. Bu değeri istemci tarafından gönderilen e-posta veya form alanından almayın.
- Kimlik doğrulama middleware'iniz doğruladığı kullanıcıyı `req.user.id` olarak sağlamalıdır.
- İlk başlangıçta kod, veritabanındaki sabit `SiteOwner.id = 1` kaydını oluşturur. Sonraki başlangıçlarda farklı `OWNER_USER_ID` girilirse uygulama hata vererek açılmaz; sahip otomatik olarak başka hesaba devredilmez.

Development örneğinde `.env.example` içindeki `DEV_USER_ID` ve `OWNER_USER_ID` aynı bırakılmıştır; sadece yerel test içindir. Production'da `DEV_USER_ID` bypass'ı devre dışıdır ve gerçek kullanıcı doğrulaması zorunludur. Public kayıt ekranında `role`, `isAdmin` veya `OWNER_USER_ID` alanı eklemeyin.

## Mevcut PDF yükleme akışına bağlama

Bu örnek sitenizin PDF yükleme/parsing biçimini bilmediği için PDF'i ayrıştırmaz. Mevcut PDF kodunuz kelimeleri çıkardıktan sonra aşağıdaki admin endpoint'ine gönderin. Endpoint yalnızca kelime/bağlam JSON'u alır, ortak havuza kaydeder ve Claude analiz kuyruğuna ekler.

### Endpoint

`POST /api/admin/pdf/import`

Body:

```json
{
  "sourceFileName": "yds-kelimeleri.pdf",
  "words": [
    { "term": "abandon", "context": "The team abandoned the initial plan." },
    { "term": "significant" },
    { "term": "in contrast" }
  ]
}
```

Bir PDF aktarımında en fazla 500 kelime kabul edilir. Aynı PDF içindeki tekrarlar tekilleştirilir. Aynı ortak kelime daha önce eklenmişse yeni kopya oluşturulmaz. Önceki sürümde site sahibinin kişisel listesine eklenmiş aynı kelime bulunursa, o kayıt ortak kayda çevrilir; varsa mevcut analiz ve owner çalışma ilerlemesi korunur.

### Mevcut PDF parser'ından çağırma örneği

Aşağıdaki `extractWordsFromPdf` sizin mevcut PDF kodunuzdur; çıktı biçimini endpoint'in beklediği `[{term, context?}]` şekline dönüştürün:

```ts
const extracted = await extractWordsFromPdf(pdfFile);

const response = await fetch("/api/admin/pdf/import", {
  method: "POST",
  credentials: "include", // mevcut oturum cookie'si
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    sourceFileName: pdfFile.name,
    words: extracted.map((item) => ({
      term: item.term,
      context: item.context,
    })),
  }),
});

if (response.status === 403) {
  throw new Error("PDF ile ortak kelime ekleme yalnızca site sahibine açıktır.");
}
if (!response.ok) {
  throw new Error("PDF kelimeleri ortak havuza aktarılamadı.");
}
const importResult = await response.json();
// { requested, uniqueInPdf, promotedToShared, queued, alreadyShared, sourceFile }
```

PDF'ten kelimeleri sunucuda çıkarıyorsanız aynı JSON'u sunucu içinden bu endpoint'e göndermek yerine mevcut upload handler'ınızdan doğrudan çağırabilirsiniz:

```ts
const result = await importGlobalPdfWords(
  prisma,
  req.user.id,                // doğrulanmış kullanıcı ID'si; owner middleware'i geçmiş olmalı
  extractedWords,             // [{ term, context? }]
  req.file.originalname,
);
```

Bu fonksiyon `src/global-word-import.ts` içindedir. PDF'in tamamını herkese servis etmeyin; kod yalnızca dosya adını kaynak bilgisi olarak saklar.

### Önemli entegrasyon noktası

Mevcut PDF upload kodunuz daha önce kelimeleri doğrudan kişisel `Word` kaydı olarak oluşturuyorsa, sadece UI'da herkese görünür yapmak yeterli değildir. Bu kayıt kodunu `/api/admin/pdf/import` akışına yönlendirin. Admin hesabıyla aynı PDF yeniden içe aktarılırsa önceki kişisel kayıtlar ortak kayda yükseltilir. Eski PDF içeriğinin kelimeleri veritabanında değilse, PDF'i bir kez daha yükleyin.

## API uç noktaları

### Kullanıcının owner durumunu al

```http
GET /api/session/me
```

Örnek yanıt: `{"userId":"...","isOwner":false}`. Frontend `isOwner` true ise PDF yükleme/yönetim butonlarını gösterebilir. Örnek: `if (session.isOwner) renderPdfAdminButton();`. Bu sadece arayüz içindir; yetki kontrolü admin endpoint'inde tekrar yapılır. Başka kullanıcı URL'yi bilse veya isteği elle oluştursa bile admin rotası `403` döndürür.

### Çalışma listesini getir

```http
GET /api/words?limit=50
GET /api/words?limit=50&cursor=SON_KELIMENIN_IDSI
```

Yanıt `words` içinde kullanıcının özel kelimeleriyle bütün ortak kelimeleri döndürür. Sayfalama için `nextCursor` değerini sonraki isteğe gönderin. Ortak kelimelerde `isShared: true`; kullanıcının kişisel ilerlemesi `progress` alanındadır.

### Kişisel kelime ekle

```bash
curl -X POST http://localhost:3000/api/words \
  -H 'Content-Type: application/json' \
  -d '{"term":"abandon"}'
```

Bu rota yalnızca kişisel kelime ekler. İstemci `isGlobal:true` yollasa bile şema bilinmeyen alanı reddeder.

### Bir kelimeyi çalışılmış olarak işaretle

```http
PUT /api/words/KELIME_ID/progress
Content-Type: application/json

{"isLearned": true}
```

Bu ilerleme yalnızca giriş yapan kullanıcının hesabına kaydedilir. Aynı ortak kelimeyi çalışan diğer kişilerin ilerlemesi etkilenmez.

### Analizi kontrol et

```http
GET /api/words/KELIME_ID
```

Yeni kelime önce `PENDING`/`PROCESSING`, analiz tamamlanınca `COMPLETED` olur. Kelime kaydı Claude çağrısından önce yazılır; sağlayıcı hatasında kaybolmaz, worker otomatik dener.

### Ortak kelimeleri yeniden analiz etme

Yalnızca owner oturumuyla:

```http
POST /api/admin/backfill
```

`analysis` alanı boş olan kayıtları kuyruğa ekler.

### Owner-only operasyon özeti

```http
GET /api/admin/diagnostics
```

Kelime/analiz kuyruğu sayaçlarını, son 24 saat review toplamını ve son başarısız analizlerden sınırlı listeyi verir.

## Kalıcı hatırlama için FSRS çalışma motoru

Kalıcı hafızayı yazılımla kesin olarak garanti etmek mümkün değildir. En iyi tasarım, kelimeyi tekrar tekrar okumak yerine hatırlamaya çalıştırmak, cevabı geri bildirim olarak göstermek ve tekrar zamanını kişiye göre ayarlamaktır. Aralıklı geri çağırma üzerine meta-analiz, toplu tekrar yerine zamana yayılan testlerin uzun dönem hatırlamayı güçlendirdiğini bildiriyor; artan aralıkların sabit aralıklara her durumda üstün olduğu gösterilmemiştir ([Latimier ve ark., 2021](https://eric.ed.gov/?id=EJ1310148)). Bu modülde kart zamanlaması için TS-FSRS kullanılır; algoritma hatırlanabilirlik/difficulty/stability durumuna göre sonraki tekrar tarihini üretir ([TS-FSRS belgeleri](https://open-spaced-repetition.github.io/ts-fsrs/)).

### Akış

1. `GET /api/reviews/due?limit=20&newLimit=10` ile önce zamanı gelen kartlar ve günlük limiti aşmayan yeni kelimeler alınır.
2. Response önce yalnızca kelimeyi/soruyu verir; `analysis` cevabı review queue'da gönderilmez.
3. Kullanıcı önce anlamı kendisi hatırlamaya çalışır. Ardından `GET /api/reviews/KELIME_ID/answer` ile doğru anlamı, kelime türünü, CEFR tahminini ve örnekleri açar.
4. Kullanıcı kendi hatırlama başarısını AGAIN, HARD, GOOD veya EASY olarak değerlendirir. Tahmin/şanslı doğru cevabı “Easy” olarak işaretlememelidir.
5. `POST /api/reviews/KELIME_ID` FSRS kart durumunu ve yeni tekrar tarihini sunucuda hesaplayıp kaydeder. Aynı `requestId` tekrar gönderilirse işlem ikinci kez uygulanmaz.
6. `GET /api/reviews/stats` son 30 gündeki tekrarları, hatırlama oranını, çalışma serisini ve kalan yeni kart limitini verir.

### Endpoint örnekleri

```http
GET /api/reviews/due?limit=20&newLimit=10
```

Yanıtta `due` (zamanı gelen tekrarlar) ve `new` (yeni/önceki sürümden FSRS planı olmayan kelimeler) ayrı gelir. Varsayılan yeni kelime limiti 24 saat içinde 20'dir; `.env` içindeki `DAILY_NEW_CARD_LIMIT` ile değiştirilebilir.

```http
GET /api/reviews/KELIME_ID/answer
```

Kullanıcı hatırlamaya çalıştıktan sonra cevabı gösterir.

Puanlama isteği:

```http
POST /api/reviews/KELIME_ID
Content-Type: application/json

{
  "requestId": "b8dbab4a-4769-4335-b633-6e7d09d002e5",
  "rating": "GOOD"
}
```

`requestId` her ayrı cevaplama için UUID olmalı; ağ hatası olursa aynı isteği yeniden gönderirken aynı UUID'yi kullanın. Sunucu aynı kartın eşzamanlı puanlanmasını advisory lock ile serileştirir, çift sayımı unique idempotency key ile önler.

### Frontend review akışına örnek

```ts
async function getNextQuestion() {
  const response = await fetch("/api/reviews/due?limit=20&newLimit=10", {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Tekrar kuyruğu alınamadı.");
  const queue = await response.json();
  return queue.due[0] ?? queue.new[0] ?? null; // Önce zamanı gelen kart
}

async function revealAnswerAfterAttempt(wordId: string) {
  const response = await fetch(`/api/reviews/${wordId}/answer`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Cevap alınamadı.");
  return response.json();
}

function createReviewSubmission(rating: "AGAIN" | "HARD" | "GOOD" | "EASY") {
  return { requestId: crypto.randomUUID(), rating };
}

async function sendReview(wordId: string, submission: ReturnType<typeof createReviewSubmission>) {
  const response = await fetch(`/api/reviews/${wordId}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  if (!response.ok) throw new Error("Tekrar sonucu kaydedilemedi.");
  return response.json(); // nextDueAt, stability, difficulty, retrievabilityBefore
}
```

## Sitede gerçekten yüksek fayda sağlayacak sonraki özellikler

- **Aktif geri çağırma kartı:** Cevabı açmadan önce anlamı yazdırın; sonra puanlayıp anında doğru cevabı/örneği gösterin.
- **Çift yönlü ve bağlamlı test:** İngilizce→Türkçe anlam, Türkçe→İngilizce kelime, cümlede boşluk doldurma ve doğru collocation seçimi.
- **YDS karışık mini sınavı:** Farklı kelime türleri/konular/bağlamları karıştırın.
- **Hata defteri ve karıştırılan kelimeler:** Again yanıtları için kişisel tekrar grubu oluşturun.
- **Küçük günlük hedef ve nazik hatırlatma:** Örneğin 10–20 yeni kelime üst sınırı, due review'ları önceleme.

## Ortak kelime ile kişisel ilerleme ayrımı

- `Word.isGlobal = true`: kelimenin içeriği bütün giriş yapmış kullanıcılara görünür ve yalnızca bir kez saklanır.
- `UserWordProgress`: o kelimenin belirli kullanıcı tarafından çalışılıp çalışılmadığıdır. Bu kayıt kullanıcıya özeldir.
- `Word.isGlobal = false`: sadece `Word.userId` sahibi görebilir.
- Site sahibi de `/api/words` ve `/api/words/:id/progress` kullanarak diğer kullanıcılar gibi çalışır; yönetici olmak çalışma deneyimini engellemez.

## Güvenlik ve üretim notları

- `requireUser` fonksiyonunu kendi session/JWT doğrulama middleware'inizle bağlayın. Bu middleware, imzası doğrulanmış kullanıcının ID'sini `req.user.id` içine koymalıdır.
- Admin uç noktalarında `requireUser` **ve** `requireOwner` bulunur.
- Siteniz cookie tabanlı oturum kullanıyorsa CSRF korumasını mevcut güvenlik katmanınızda sürdürün.
- `OWNER_USER_ID` ve `ANTHROPIC_API_KEY` sunucu secret'ı olmalıdır.
- Bu worker uzun çalışan Node.js servisi varsayar. Serverless ortamlarda worker'ı ayrı bir arka plan işi olarak çalıştırın.

## Dosyalar

```text
prisma/schema.prisma             Tek sahip, ortak kelime, FSRS ve review log modelleri
src/site-owner.ts               Owner bootstrap ve eski kelimelerin normalize edilmesi
src/global-word-import.ts       PDF kelimelerini ortak havuza ekleme/tekilleştirme
src/ai/word-enricher.ts         Claude JSON Schema analizi ve Zod doğrulaması
src/srs.ts                      FSRS zamanlayıcı ve güvenli kart serileştirmesi
src/worker.ts                   Kalıcı analiz kuyruğu ve retry
src/server.ts                   Kimlik/owner, ortak kelime ve review REST API'leri
src/validation.ts               İstek doğrulamaları
tests/srs.test.ts               FSRS ve yardımcı fonksiyon testleri
tests/validation.test.ts        API giriş doğrulama testleri
tests/ai-schema.test.ts         AI çıktı şeması testleri
tests/server.test.ts            DB'siz HTTP sınır testleri
```

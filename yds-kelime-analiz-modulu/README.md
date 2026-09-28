# YDS Kelime Sistemi — Claude AI + Tek Site Sahibi + Ortak Kelime Havuzu

Bu proje, mevcut YDS sitenize entegre edilebilecek **Node.js + TypeScript + Express + PostgreSQL** referans backend'idir. Sitenizin kaynak kodu/kimlik doğrulama altyapısı paylaşılmadığı için mevcut projeye doğrudan bağlanmış değildir; entegrasyon noktaları aşağıda verilmiştir.

## İstenen davranış

1. Site sahibi PDF'ten çıkardığı kelimeleri ortak havuza aktarır.
2. Ortak kelimeler her giriş yapmış hesabın çalışma listesinde görünür. Her kullanıcı ortak kelime için kendi öğrenme durumunu tutar; diğer kullanıcıların ilerlemesi görünmez.
3. Kelime havuzunda global kelime bir kez saklanır; her kullanıcıya ayrı kopya oluşturulmaz.
4. Normal kullanıcıların eklediği kelimeler varsayılan olarak kişisel kalır. İstek gövdesiyle `isGlobal` veya `role=admin` verilerek yetki yükseltilemez.
5. Yalnızca `OWNER_USER_ID` ile sunucu tarafında tanımlanan **tek hesap** PDF/ortak havuz yönetimini yapabilir. Owner hesabı da normal kullanıcı gibi ders çalışır.
6. Ortak havuza eklenen her yeni kelime Claude kuyruğuna alınır: lemma, yaklaşık CEFR seviyesi, bir veya birden fazla kelime türü, anlamlar, iki örnek cümle ve Türkçe çevirileri oluşturulur.

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

Bu, **yeni veritabanı** kurulumu içindir. Önceki kelime analiz modülünü aynı veritabanına uyguladıysanız yeni şemayı mevcut migration geçmişinize `global-word-owner` adlı ayrı bir migration olarak ekleyin; `Word.userId` alanı korunur, yeni görünürlük/ilerleme alanları eklenir. Production'da migration'ı deployment adımında `npx prisma migrate deploy` ile uygulayın. Canlı veritabanında migration'ı önce yedek alıp staging ortamında test edin.

Sunucu `http://localhost:3000` üzerinde açılır. Sağlık kontrolü:

```bash
curl http://localhost:3000/health
```

Üretim derlemesi:

```bash
npm run build
npm start
```

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

## Ortak kelime ile kişisel ilerleme ayrımı

- `Word.isGlobal = true`: kelimenin içeriği bütün giriş yapmış kullanıcılara görünür ve yalnızca bir kez saklanır.
- `UserWordProgress`: o kelimenin belirli kullanıcı tarafından çalışılıp çalışılmadığıdır. Bu kayıt kullanıcıya özeldir.
- `Word.isGlobal = false`: sadece `Word.userId` sahibi görebilir.
- Site sahibi de `/api/words` ve `/api/words/:id/progress` kullanarak diğer kullanıcılar gibi çalışır; yönetici olmak çalışma deneyimini engellemez.

## Güvenlik ve üretim notları

- `requireUser` fonksiyonunu kendi session/JWT doğrulama middleware'inizle bağlayın. Bu middleware, imzası doğrulanmış kullanıcının ID'sini `req.user.id` içine koymalıdır. E-postayı veya kullanıcı ID'sini istemciden gelen header/body'ye güvenerek kullanmayın.
- Admin uç noktalarında `requireUser` **ve** `requireOwner` bulunur. Başka kullanıcılar doğrudan endpoint'e istek atsa da `403` alır.
- Siteniz cookie tabanlı oturum kullanıyorsa CSRF korumasını mevcut güvenlik katmanınızda sürdürün. `CORS_ORIGINS` yalnızca gerçek frontend origin'lerine ayarlanmalıdır.
- `OWNER_USER_ID` ve `ANTHROPIC_API_KEY` sunucu secret'ı olmalıdır. Repo'ya `.env` dosyası eklemeyin.
- Bu worker uzun çalışan Node.js servisi varsayar. Serverless/uyuyan ortamlarda worker'ı ayrı, sürekli çalışan bir worker süreci olarak çalıştırın.
- Tarama (scan) PDF'lerde metin seçilebilir olmayabilir; PDF parser'ınız OCR yapmıyorsa önce OCR uygulayın ve çıkan kelimeleri aynı import endpoint'ine gönderin.
- CEFR seviyesi yaklaşık AI tahminidir. Anlam başına seviye, birden fazla kelime türü, `UNKNOWN`, `levelConfidence` ve `reviewRequired` alanları hata riskini azaltmak içindir; eğitim içeriğinde gerektiğinde gözden geçirin.

## Dosyalar

```text
prisma/schema.prisma             Tek sahip, kelime ve kullanıcı ilerlemesi veri modeli
src/site-owner.ts               Owner bootstrap ve eski kelimelerin normalize edilmesi
src/global-word-import.ts       PDF kelimelerini ortak havuza ekleme/tekilleştirme
src/ai/word-enricher.ts         Claude JSON Schema analizi ve Zod doğrulaması
src/worker.ts                   Kalıcı analiz kuyruğu ve retry
src/server.ts                   Kimlik/owner kontrolleri ve REST API
src/validation.ts               İstek doğrulamaları
```

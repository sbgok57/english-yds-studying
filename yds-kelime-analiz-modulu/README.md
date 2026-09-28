# YDS Kelime Analiz Modülü — Claude AI

Bu klasör, YDS kelime sitenize entegre edilebilecek çalışır bir backend referans uygulamasıdır. Kaynak sitenizin kodu/teknoloji bilgisi paylaşılmadığı için mevcut projeye doğrudan bağlanmış değildir; Node.js + TypeScript + Express + PostgreSQL varsayımıyla hazırlanmıştır.

## Neler yapar?
Kelime eklendiği anda kayıt PENDING durumuyla veritabanına yazılır. Arka plan worker'ı her kayıt için Claude API'yi çağırıp şu bilgileri üretir:
- Yaklaşık CEFR seviyesi (A1–C2; bilinmiyorsa UNKNOWN)
- Kelimenin lemma/kök biçimi
- Kelime türü: noun, verb, adjective, adverb vb. Bir kelime birden fazla türde kullanılabiliyorsa her kullanım ayrı anlam olarak saklanır.
- Her anlam için Türkçe karşılık ve İngilizce tanım
- Her anlam için tam 2 İngilizce örnek cümle ve Türkçe çevirisi
- Yaygın eşdizimler (collocations)
- Güven seviyesi ve insan kontrolü gerekip gerekmediği

Toplu ekleme uç noktası her kelimeyi ayrı iş olarak kuyruğa alır. Claude veya ağ geçici olarak çalışmazsa kayıt kaybolmaz; otomatik tekrar denenir. İstenirse başarısız bir kayıt elle yeniden kuyruğa alınabilir.

**Önemli:** CEFR kelime seviyesi tek ve değişmez/resmî bir değer değildir; anlam, bağlam ve kaynaklara göre değişebilir. Bu modül AI tahmini üretir. Belirsiz durumlarda UNKNOWN, düşük güven ve reviewRequired: true döner. Sınav içeriğinde kullanmadan önce kontrol etmeniz önerilir.

## Teknoloji
- Node.js 20+
- TypeScript, Express
- PostgreSQL + Prisma
- Anthropic TypeScript SDK ve Claude Messages API'nin JSON Schema ile yapılandırılmış çıktısı

Varsayılan model claude-sonnet-5 olarak ayarlanmıştır. Hesabınızda erişilebilir başka bir Claude model ID'si varsa .env içindeki CLAUDE_MODEL değerini değiştirebilirsiniz. Anthropic SDK'nin resmi örneği messages.parse ve jsonSchemaOutputFormat ile yapılandırılmış JSON çıktısını gösterir: [TypeScript SDK örneği](https://github.com/anthropics/anthropic-sdk-typescript/blob/main/examples/structured-outputs-json-schema.ts).

## 1. Kurulum
PostgreSQL'de `yds_words` adında bir veritabanı oluşturun. Ardından:
```bash
cd yds-kelime-analiz-modulu
npm install
cp .env.example .env
```
.env dosyasını açıp gerçek DATABASE_URL ve ANTHROPIC_API_KEY değerlerini girin. Anthropic anahtarını asla tarayıcıya/frontend koduna koymayın.
```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```
Servis `http://localhost:3000` adresinde başlar. Sağlık kontrolü:
```bash
curl http://localhost:3000/health
```
Üretim derlemesi:
```bash
npm run build
npm start
```

## 2. API kullanımı

### Tek kelime ekleme
```bash
curl -X POST http://localhost:3000/api/words \
  -H 'Content-Type: application/json' \
  -d '{"term":"abandon"}'
```
Yanıt 202 Accepted döner. status önce PENDING/PROCESSING, analiz bitince COMPLETED olur. API anahtarı veya ağ hatası olursa kelime kaydı veritabanında kalır ve tekrar denenir.

### Bağlam gönderme (çok anlamlı kelimeler için)
```json
{
  "term": "charge",
  "context": "The company was charged with violating environmental regulations."
}
```
Bağlam isteğe bağlıdır; doğru anlamı seçmeye yardımcı olur. En fazla 500 karakter kabul edilir.

### Analizi kontrol etme
POST yanıtındaki `word.id` değerini kullanın:
```bash
curl http://localhost:3000/api/words/WORD_ID
```
`word.analysis` örnek yapısı:
```json
{
  "isRecognized": true,
  "lemma": "abandon",
  "overallLevel": "B2",
  "levelConfidence": "medium",
  "levelNoteTr": "Bu, yaygın kullanıma göre yaklaşık CEFR tahminidir; bağlama göre değişebilir.",
  "reviewRequired": false,
  "senses": [
    {
      "partOfSpeech": "verb",
      "meaningTr": "terk etmek, bırakmak",
      "definitionEn": "to leave someone or something permanently or for a long time",
      "cefrLevel": "B2",
      "examples": [
        {
          "sentence": "The researchers abandoned the initial plan after the first trial.",
          "translationTr": "Araştırmacılar ilk denemeden sonra başlangıç planını bıraktı."
        },
        {
          "sentence": "Several villages were abandoned when the reservoir was built.",
          "translationTr": "Rezervuar inşa edildiğinde birkaç köy terk edildi."
        }
      ],
      "collocations": ["abandon a plan", "abandon an attempt"]
    }
  ]
}
```

### Toplu kelime ekleme
Tek istekte en fazla 50 kelime gönderilebilir; her biri ayrı ayrı analiz edilir:
```bash
curl -X POST http://localhost:3000/api/words/bulk \
  -H 'Content-Type: application/json' \
  -d '{"words":[{"term":"abandon"},{"term":"significant"},{"term":"in contrast"}]}'
```
Bu limit, bir anda çok fazla AI isteği gönderilmesini ve API sınırlarına takılmayı önlemeye yardımcı olur. Daha büyük listelerde 50'lik gruplara bölün.

### Başarısız analizi yeniden deneme
```bash
curl -X POST http://localhost:3000/api/words/WORD_ID/retry
```
Bu uç nokta, kelimenin sahibi olan oturumla çağrılmalıdır.

### Mevcut analizsiz kelimeleri kuyruğa alma
Örnek projedeki veritabanında analysis alanı boş olan bütün kelimeleri yeniden kuyruğa alır:
```bash
curl -X POST http://localhost:3000/api/admin/backfill \
  -H 'x-admin-key: ADMIN_API_KEY-degeriniz'
```
Bu rota ADMIN_API_KEY ile korunur. Farklı veritabanı/tablo yapısına sahip sitelerde ilgili migration ve backfill sorgusunu kendi şemanıza uyarlayın.

## 3. Mevcut siteye bağlama
Bu örnek API, Word tablosuna doğrudan kayıt oluşturur. Mevcut sitenizde zaten bir kelime ekleme endpoint'i varsa en temiz entegrasyon iki yoldan biridir:
1. Mevcut kelime ekleme endpoint'inizi `/api/words` mantığına uyarlayın; yeni kayıt PENDING olarak kaydedilsin.
2. Ya da siteniz bu servisten ayrıysa, sunucu tarafındaki mevcut kayıt işleminden sonra bu servisin `/api/words` endpoint'ine istek gönderin. Tarayıcıdan Claude API'ye doğrudan istek göndermeyin.

Üretime almadan önce:
- `requireUser` fonksiyonunu mevcut session/JWT kimlik doğrulama middleware'inizle bağlayın. Kimlik doğrulanan kullanıcı `req.user.id` alanında bulunmalıdır.
- Veritabanı migration'ını mevcut Word tablonuza uyarlayın. Bu örnek `userId`, `term`, `analysis`, `cefrLevel`, `enrichmentStatus` ve retry alanları kullanır.
- Kelime okuma/güncelleme sorgularında `userId` kapsamını koruyun. Bu örnek IDOR riskini azaltmak için GET ve retry sorgularını kullanıcı ID'siyle sınırlar.
- `DEV_USER_ID` yalnızca geliştirme kolaylığı içindir; production ortamında kullanılmaz.
- `ADMIN_API_KEY` ve `ANTHROPIC_API_KEY` değerlerini secret manager/ortam değişkeninde saklayın; repoya commit etmeyin.
- Gerçek frontend origin'lerinizi `CORS_ORIGINS` içine tam adresleriyle yazın. Aynı origin kullanıyorsanız CORS ayarı gerekmeyebilir.

### Basit frontend akışı:
```typescript
async function addYdsWord(term: string) {
  const response = await fetch("/api/words", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // siteniz cookie/session kullanıyorsa
    body: JSON.stringify({ term }),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error ?? "Kelime eklenemedi.");
  }
  const { word } = await response.json();
  // word.id'yi saklayıp GET /api/words/:id ile status=COMPLETED olana kadar
  // örneğin 1–2 saniyede bir kontrol edin. UI'da bu sırada "AI analiz ediyor" gösterin.
  return word;
}

async function waitForYdsAnalysis(id: string) {
  for (let attempt = 0; attempt < 120; attempt++) { // en fazla yaklaşık 3 dakika
    const response = await fetch(`/api/words/${encodeURIComponent(id)}`, {
      credentials: "include",
    });
    if (!response.ok) throw new Error("Kelime analizi alınamadı.");
    const { word } = await response.json();
    if (word.status === "COMPLETED") return word;
    if (word.status === "FAILED" && word.attempts >= 5) {
      throw new Error("Analiz tamamlanamadı; yeniden deneyebilirsiniz.");
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
  throw new Error("Analiz beklenenden uzun sürdü; daha sonra tekrar kontrol edin.");
}
```

Analiz beklerken kullanıcıya PENDING/PROCESSING durumunu gösterin. COMPLETED olduğunda `analysis.senses` listesini dolaşıp POS etiketini, seviye, anlamları ve örnek cümleleri gösterin. `reviewRequired` true ise “Kontrol önerilir” rozeti ekleyin.

## 4. Kuyruk ve hata davranışı
- Kayıt AI çağrısından önce yazılır; sağlayıcı hatasında kullanıcı kelimesini kaybetmez.
- Worker başarısız işlemleri artan bekleme süresiyle en fazla MAX_ATTEMPTS kadar tekrar dener.
- PROCESSING durumunda worker 15 dakikadan uzun süre kalmış işler yeniden alınabilir.
- Claude yanıtı API seviyesinde JSON Schema ile, ardından Zod ile doğrulanır. İki örnek cümle yoksa/yanıt alanları bozuksa analiz başarıyla kaydedilmez ve tekrar denenir.
- Bir kelimenin birden fazla kelime türü olabilir; tür ve seviye anlam başına saklanır. `overallLevel`, ana kullanım için genel tahmindir.
- Kullanıcı girdisinde İngilizce kelime ya da en fazla 6 kelimelik ifade kabul edilir. Ek bağlam 500 karakterle sınırlıdır.

## 5. Dosya yapısı
```text
prisma/schema.prisma       PostgreSQL veri modeli
src/ai/word-enricher.ts    Claude istemi, JSON Schema ve Zod doğrulaması
src/worker.ts              Kalıcı kuyruk, retry ve analiz kaydı
src/server.ts              REST uç noktaları, doğrulama, rate limit, admin backfill
src/validation.ts          Tekil/toplu giriş kontrolleri
src/config.ts              Ortam değişkeni doğrulaması
```

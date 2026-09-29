# YDS Kelime Atölyesi — Claude AI + Tek Site Sahibi + Ortak Kelime Havuzu

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
9. Her kullanıcı ortak kelime için sadece kendisinin görebildiği kişisel not, hafıza çağrışımı, örnek cümle ve etiket saklayabilir; bu hafıza FSRS geçmişiyle karıştırılmaz.
10. Frontend eklentisi beyaz/açık zemin, mor ağırlıklı olmayan canlı gökkuşağı vurguları, bölümlere özel sevimli ikonlar, erişilebilir focus durumları ve eşleşen favicon sunar; React avatar seçici tam 2.000 yaratıcı seçeneğe erişir.

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

Repo'daki migration.sql, boş/yeni veritabanı için başlangıç migration'ıdır; 20260929010000_user_word_memory kişisel not tablosunu, 20260929020000_user_avatar profil avatarı tablosunu ekler ve önceki modelleri/tabloları silmez. Önceki kelime analiz modülünü aynı veritabanına uyguladıysanız ilk migration'ı canlıya doğrudan çalıştırmayın; hedef şemayı mevcut migration geçmişiniz ve gerçek veritabanı şemanızla karşılaştırıp Word.userId alanını/verilerini koruyan staging'de test edilmiş ayrı bir migration/baseline hazırlayın. Production'da yalnızca doğrulanmış migration'ı deployment adımında npx prisma migrate deploy ile uygulayın. Canlı veritabanında migration'ı önce yedek alıp staging ortamında test edin.

Sunucu `http://localhost:3000` üzerinde açılır. Sağlık kontrolü:

```bash
curl http://localhost:3000/health
```

Üretim derlemesi:

```bash
npm run build
npm start
```

## Test ve canlıya geçiş

```bash
npm ci
npx prisma generate
npm test
npm run build
DATABASE_URL='postgresql://test:test@localhost:5432/test?schema=public' npx prisma validate
```

Yerel testler gerçek PostgreSQL, Claude API, site kimlik doğrulaması veya frontend gerektirmez; bu entegrasyonlar henüz canlı sisteminizde doğrulanmış değildir. Ayrıntılı QA/UAT senaryoları, migration ve backup/restore için `TESTING-AND-RELEASE-PLAN.md`; hafıza katmanları ve ürün özellikleri için `MEMORY-AND-FEATURE-ROADMAP.md`; gökkuşağı vurgulu açık tema, favicon ve 2.000 avatar UI örneğini bağlamak için `frontend-addon/INTEGRATION.md` dosyalarını izleyin. Hatasızlık veya kalıcı hafıza garanti edilemez; production öncesi gerçek auth, staging veritabanı, yetki testleri ve restore provası zorunludur.

Anthropic TypeScript SDK'nin JSON Schema örneği `messages.parse` ve `jsonSchemaOutputFormat` kullanır: [resmî SDK örneği](https://github.com/anthropics/anthropic-sdk-typescript/blob/main/examples/structured-outputs-json-schema.ts). Varsayılan analiz modeli `.env` içindeki `CLAUDE_MODEL=claude-sonnet-5-5` ayarıdır. Anthropic model kataloğunda Opus 5.5 en güçlü uzun iş/agentic kodlama seçeneklerinden; Sonnet 5.5 hız ve kalite dengesiyle bu kelime analiz kuyruğunun varsayılanıdır. Hesabınızın API erişimi ve bütçesine göre `CLAUDE_MODEL=claude-opus-5-5` seçebilirsiniz; model ID'lerini dağıtım öncesi [Anthropic'in güncel model kataloğunda](https://docs.anthropic.com/en/docs/about-claude/models/overview) doğrulayın. Var olan `.env` içinde `CLAUDE_MODEL` eski ID olarak açıkça yazılıysa varsayılan onu değiştirmez; değeri elle güncelleyin ve staging'de bir sentetik kelime ile smoke test yapın. Bu proje ayarı kelime analiz API çağrılarını etkiler; bu sohbetin hangi modele yönlendirileceğini değiştirmez.

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
  req.user.id, // doğrulanmış kullanıcı ID'si; owner middleware'i geçmiş olmalı
  extractedWords, // [{ term, context? }]
  req.file.originalname,
);
```

Bu fonksiyon `global-word-import.ts` içindedir. PDF'in tamamını herkese servis etmeyin; kod yalnızca dosya adını kaynak bilgisi olarak saklar.

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

### Kişisel kelime hafızası

Ortak kelime içeriğine dokunmadan kendi öğrenme notunu/çağrışımını saklayın:

```http
GET /api/words/KELIME_ID/memory
PUT /api/words/KELIME_ID/memory
Content-Type: application/json

{
  "personalNote": "Bu kelimeyi bağlamla öğren.",
  "mnemonic": "abandon a plan → planı bırak",
  "personalExample": "They abandoned the initial plan.",
  "tags": ["YDS", "fiil", "tekrar et"]
}
```

PUT gövdesi tam nesnedir: boş metin için `null`, boş etiket için `[]` gönderin. Kullanıcı başına kelime başına tek not kaydı vardır; notlar `userId + wordId` ile izole edilir ve diğer öğrencilere gönderilmez. En fazla 10 etiket; her birinde en fazla 30, notta 2000, çağrışım/örnekte 500 karakter kabul edilir. Notları temizlemek için `DELETE /api/words/KELIME_ID/memory` kullanın; bu işlem kelimeyi, FSRS ilerlemesini veya ReviewEvent geçmişini silmez.

Bu içerik süresiz saklanacak şekilde tasarlanır, ama hiçbir depolama “sınırsız” değildir: veritabanı kapasitesi, yedekleme/restore ve saklama politikası gerekir. Gerçek kullanıcı talebi/hesap kapatma kurallarına göre kişisel notlar ayrıca silinebilir.

### Gökkuşağı teması ve 2.000 avatar kataloğu

`yds-theme.css` beyaz/açık modu ve mavi, turuncu, yeşil, sarı, cyan, pembe vurguları kullanır; ana site rengi mor değildir. `favicon.svg` kitap simgesiyle YDS Kelime Atölyesi örnek başlığına uyar. Bu marka adı mevcut sitenin gerçek adı bilinmediğinden varsayılandır; başlığınız farklıysa `index.html` ve favicon metnini değiştirin.

Katalogda 5 aile (emoji, canavar, hayvan, uzay, çıkartma) × 20 palet × 20 motif ile tam 2.000 ID vardır. Avatarlar yüklenmiş 2.000 ayrı resim/GIF değil, ID'den üretilen aynı-origin SVG çizimleridir; API sadece sayfalı metadata verir, SVG'ler `/avatars/:id.svg` ile cache edilir. Oturum sahibi seçim için:

```http
GET /api/avatar-catalog?category=monster&offset=0&limit=40
GET /api/profile
PUT /api/profile/avatar
Content-Type: application/json

{"avatarId": 742}
```

Profile sadece 0–1999 arası ID yazar; dosya, `data:` URL veya kullanıcının yüklediği GIF saklanmaz. Bazı önizlemeler düşük hareket efekti alır; işletim sistemi `prefers-reduced-motion` tercihini etkinleştirirse kapanır. React picker örneği `AvatarPicker.tsx` içindedir.

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

Kelime/analiz kuyruğu sayaçlarını, son 24 saat review toplamını ve son başarısız analizlerden sınırlı listeyi verir. Destek/QA için kullanılır; normal kullanıcıya açmayın ve hata ayrıntılarının hassas veri içermediğini gözden geçirin.

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

Yanıtta `due` (zamanı gelen tekrarlar) ve `new` (yeni/önceki sürümden FSRS planı olmayan kelimeler) ayrı gelir. Varsayılan yeni kelime limiti 24 saat içinde 20'dir; `.env` içindeki `DAILY_NEW_CARD_LIMIT` ile değiştirilebilir. Önce `due` bölümünü çalışıp sonra `new` bölümüne geçmek önerilir.

```http
GET /api/reviews/KELIME_ID/answer
```

Kullanıcı hatırlamaya çalıştıktan sonra cevabı gösterir. Örnek sonuç: `{ "wordId": "...", "term": "abandon", "answer": { "senses": [...] } }`.

Puanlama isteği:

```http
POST /api/reviews/KELIME_ID
Content-Type: application/json

{
  "requestId": "b8dbab4a-4769-4335-b633-6e7d09d002e5",
  "rating": "GOOD"
}
```

`requestId` her ayrı cevaplama için UUID olmalı; ağ hatası olursa aynı isteği yeniden gönderirken aynı UUID'yi kullanın. AGAIN: hatırlayamadım/yanlış; HARD: doğru ama çok zorlandım; GOOD: normal çabayla hatırladım; EASY: hızlı ve rahat hatırladım. Sunucu aynı kartın eşzamanlı puanlanmasını advisory lock ile serileştirir, aynı istek için çift sayımı unique idempotency key ile önler.

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
  // Bu fonksiyonu kullanıcı önce kendisi hatırlamayı denedikten sonra çağırın.
  const response = await fetch(`/api/reviews/${wordId}/answer`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Cevap alınamadı.");
  return response.json();
}

function createReviewSubmission(rating: "AGAIN" | "HARD" | "GOOD" | "EASY") {
  // Aynı nesneyi saklayın; ağ retry'sinde requestId ve rating değişmemeli.
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

`FSRS_RETENTION=0.90` varsayılan hedef hatırlama olasılığıdır; bu bir başarı garantisi değil, zamanlama algoritmasının hedefidir. Çok daha yüksek hedef daha sık tekrar ve daha fazla günlük yük oluşturur. `UserWordProgress` FSRS kart durumunu ve `dueAt` tarihini kullanıcı/kelime bazında tutar; `ReviewEvent` geçmişi ve request-idempotency kaydını append-only biçimde saklar. `isLearned` raporu üç veya daha fazla tekrardan ve en az 21 günlük stability tahmininden sonra true olur; bu etiket de kesin/ömür boyu kalıcılık iddiası değildir.

## Sitede gerçekten yüksek fayda sağlayacak sonraki özellikler

Öncelik sırasıyla:
1. **Aktif geri çağırma kartı:** Cevabı açmadan önce anlamı yazdırın; sonra puanlayıp anında doğru cevabı/örneği gösterin. (Backend endpoint akışı hazır; frontend arayüzü mevcut siteye bağlanmalı.)
2. **Çift yönlü ve bağlamlı test:** İngilizce→Türkçe anlam, Türkçe→İngilizce kelime, cümlede boşluk doldurma ve doğru collocation seçimi. Aynı kelimeyi her defasında aynı biçimde göstermeyin.
3. **YDS karışık mini sınavı:** Farklı kelime türleri/konular/bağlamları karıştırın; sadece bir PDF'den veya tek konu başlığından arka arkaya sormayın.
4. **Hata defteri ve karıştırılan kelimeler:** Again yanıtları, benzer anlamlı/karıştırılan kelimeler ve sık hata yapılan örnekler için kişisel tekrar grubu oluşturun.
5. **Küçük günlük hedef ve nazik hatırlatma:** Örneğin 10–20 yeni kelime üst sınırı, due review'ları önceleme ve isteğe bağlı bildirim. Bildirim sayısını cezalandırıcı/stresli yapmayın.
6. **Ölçümleme:** “kaç kelime gördüm” yerine due review tamamlama, 7/30 günlük recall, tekrar aralığı ve unutulan kelime oranını ölçün. Bu metrikleri doğru öğrenme garantisi gibi sunmayın.
7. **Yedekleme ve denetlenebilirlik:** düzenli PostgreSQL yedeği, migration'ı staging'de test, review log'larının tutulması, owner işlemleri ve API hataları için alarm.

FSRS zamanlaması bu yol haritasının çekirdeği; etkili olması için review ekranı kullanıcının cevabı görmeden önce hatırlamaya gerçekten çalışmasını sağlamalıdır. Sadece “kartı açıp kapatma” veya kelimeyi tekrar tekrar okuma, recall pratiğinin yerini tutmaz.

## Ortak kelime ile kişisel ilerleme ayrımı

- `Word.isGlobal = true`: kelimenin içeriği bütün giriş yapmış kullanıcılara görünür ve yalnızca bir kez saklanır.
- `UserWordProgress`: o kelimenin belirli kullanıcı tarafından çalışılıp çalışılmadığıdır. Bu kayıt kullanıcıya özeldir.
- `Word.isGlobal = false`: sadece `Word.userId` sahibi görebilir.
- Site sahibi de `/api/words` ve `/api/words/:id/progress` kullanarak diğer kullanıcılar gibi çalışır; yönetici olmak çalışma deneyimini engellemez.

## Güvenlik ve üretim notları

- `requireUser` fonksiyonunu kendi session/JWT doğrulama middleware'inizle bağlayın. Bu middleware, imzası doğrulanmış kullanıcının ID'sini `req.user.id` içine koymalıdır. E-postayı veya kullanıcı ID'sini istemciden gelen header/body'ye güvenerek kullanmayın.
- Admin uç noktalarında `requireUser` ve `requireOwner` bulunur. Başka kullanıcılar doğrudan endpoint'e istek atsa da 403 alır.
- Siteniz cookie tabanlı oturum kullanıyorsa CSRF korumasını mevcut güvenlik katmanınızda sürdürün. `CORS_ORIGINS` yalnızca gerçek frontend origin'lerine ayarlanmalıdır.
- `OWNER_USER_ID` ve `ANTHROPIC_API_KEY` sunucu secret'ı olmalıdır. Repo'ya `.env` dosyası eklemeyin.
- Bu worker uzun çalışan Node.js servisi varsayar. Serverless/uyuyan ortamlarda worker'ı ayrı, sürekli çalışan bir worker süreci olarak çalıştırın.
- Tarama (scan) PDF'lerde metin seçilebilir olmayabilir; PDF parser'ınız OCR yapmıyorsa önce OCR uygulayın ve çıkan kelimeleri aynı import endpoint'ine gönderin.
- CEFR seviyesi yaklaşık AI tahminidir. Anlam başına seviye, birden fazla kelime türü, UNKNOWN, levelConfidence ve reviewRequired alanları hata riskini azaltmak içindir; eğitim içeriğinde gerektiğinde gözden geçirin.

## Dosyalar

```text
prisma/schema.prisma             Owner, ortak kelime, FSRS, memory ve profil/avatar modelleri
prisma/migrations/               Boş DB initial + ek hafıza/avatar migration'ları
src/site-owner.ts               Owner bootstrap ve eski kelimelerin normalize edilmesi
src/global-word-import.ts       PDF kelimelerini ortak havuza ekleme/tekilleştirme
src/ai/word-enricher.ts         Claude JSON Schema analizi ve Zod doğrulaması
src/srs.ts                      FSRS zamanlayıcı ve güvenli kart serileştirmesi
src/worker.ts                   Kalıcı analiz kuyruğu ve retry
src/server.ts                   Auth/owner, kelime, review, hafıza ve avatar REST API'leri
src/validation.ts               İstek doğrulamaları
src/avatar-catalog.ts           2.000 id'den üretilen güvenli SVG avatarlar
tests/srs.test.ts               FSRS yardımcı testleri
tests/validation.test.ts        API giriş doğrulama testleri
tests/memory-validation.test.ts Kişisel hafıza giriş doğrulama testleri
tests/avatar-catalog.test.ts    2.000 avatar ve seçim doğrulama testleri
tests/ai-schema.test.ts         AI çıktı şeması testleri
tests/server.test.ts            DB'siz HTTP sınır testleri
frontend-addon/                 Gökkuşağı vurgulu açık tema, favicon, typed API ve React örnekleri
TESTING-AND-RELEASE-PLAN.md     QA/UAT, migration, yedekleme ve release kapıları
MEMORY-AND-FEATURE-ROADMAP.md   Hafıza modeli ve genişletme yol haritası
```

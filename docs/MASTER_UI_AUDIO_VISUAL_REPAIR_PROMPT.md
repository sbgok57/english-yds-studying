# DİL MASTER — UÇTAN UCA MENÜ, SES, GÖRSEL VE TEMA ONARIMI
## Antigravity için tek parça uygulama talimatı

Bu belgeyi Antigravity'de GitHub ile bağlı gerçek proje deposu açıkken tek parça talimat olarak çalıştır. Yalnızca öneri, örnek ekran veya yapılacaklar listesi yazma: mevcut kodu incele, gereken dosyaları gerçekten ekle/değiştir, testleri çalıştır, değişiklikleri inceleme dalına kaydet ve Vercel önizlemesini doğrula. Bir kontrol geçmediyse başarılı raporlama. Eksik API anahtarı veya erişim varsa gizli bilgileri istemciye koymadan açıkça bildir; kod onarımını durdurma.

## 0. Proje kimliği ve güvenlik sınırları

- GitHub deposu: sbgok57/english-yds-studying
- Mevcut çalışma dalı: fix/tts-client-timeout-audio-validation. Önce uzak dalın son halini, git status ve son commit'i incele. Kirli çalışma ağacını silme.
- Mevcut PR: https://github.com/sbgok57/english-yds-studying/pull/1. Çakışan commit ve kontrolleri incele; önceki TTS/CSS onarımlarını kaybetme.
- Tek kanonik production adresi: https://dil-master.vercel.app
- Mevcut Vercel projesini kullan: dil-master.vercel.app. Yeni Vercel projesi oluşturma. Preview URL'leri yalnızca test içindir; kanonik adres ve metadata daima yukarıdaki domain olmalıdır.
- Supabase projesi: yds / ref mcjdoisypyparezuqlgr. Veritabanını silme, sıfırlama veya yeniden oluşturma. Var olan kullanıcı verisini ve auth sistemini koru.
- Yığın: Next.js 14, React 18, TypeScript, Tailwind, Framer Motion, React Three Fiber / Three.js, Drei, Lottie ve Supabase. Önce package.json'ı kontrol et; mevcut bağımlılıkları tercih et, gerekmedikçe paket ekleme.
- Gizli anahtar, service-role, Vercel tokenı veya TTS/görsel servis API anahtarını koda, tarayıcı bundle'ına, loga ya da commit'e yazma.
- main dalına doğrudan push yapma ve hazır olmayan sürümü production'a yükseltme. Sıra: kod → test → PR/preview → doğrulama → production.
- Hiçbir eylemi gerçek araç sonucu olmadan tamamlandı sayma.

## 1. Bağlı uygulaları uygun amaçla kullan

Erişimi gerçekten mevcut entegrasyonları kullan; kullanamadığın uygulamanın kullanıldığını iddia etme. Entegrasyon eksik diye bağımsız iş akışını durdurma.

1. GitHub: gerçek dosyaları, geçmiş commit'leri, branch, PR, workflow ve diff'leri denetle; kod değişikliğini anlamlı commit ile sakla.
2. Vercel: doğru project, environment variable isimleri, build logları, deployment durumu, production/preview ayrımı ve domain alias eşleşmesini doğrula. Secret değerlerini gösterme.
3. Supabase: proje sağlığı, mevcut tablo/Storage yapısı, RLS politikaları ve migration geçmişini denetle. Kullanıcı verisini koru; gerekirse önce test ortamında doğrula.
4. Figma bağlıysa menü, responsive navigasyon, kelime görsel kartları ve tema galerisi için tasarım/etkileşim referansı oluştur veya incele. Bağlantı yoksa varmış gibi davranma.
5. Adobe veya Canva bağlıysa yalnızca gerçekten üretilecek özgün görsel, ikon, 3D varlık, thumbnail ya da desen asset'leri için kullan; çıktıları lisans ve kaynak bilgisiyle depoya aktar. Kullanılmayan uygulamadan sonuç uydurma.
6. Browser bağlıysa production ve preview adresini masaüstü/tam ekran/mobil boyutlarda test et. Browser erişimi yoksa gerçek cihaz testi yapılmış deme.

## 2. Önce gerçek kök nedenleri bul

Hiçbir dosyayı körlemesine baştan yazma. Önce dosyaları ve import noktalarını incele; yol farklıysa kod tabanında ara.

Kontrol edilecek mevcut kritik dosyalar:
- src/app/globals.css
- src/app/layout.tsx
- src/components/Header.tsx
- src/components/MenuDrawer.tsx
- src/components/theme/ThemeProvider.tsx
- src/components/theme/ThemeInitializer.tsx
- src/components/DilMasterProSystem.tsx
- src/lib/tts/voice-registry.ts
- src/lib/tts/tts-provider.ts
- src/lib/tts/audio-client.ts
- src/lib/tts/audio-cache.ts
- src/app/api/tts/route.ts
- src/components/vocabulary/WordPronunciationBar.tsx
- AudioGrammarPlayer bileşeninin repo içindeki gerçek yolu
- src/app/vocabulary/page.tsx
- src/app/vocabulary/inventory/page.tsx
- src/app/grammar/audio/page.tsx
- src/app/reading/page.tsx
- src/lib/themes/
- public/manifest.json
- public/sw.js
- test/tts-integration-tests.ts
- test/e2e-tests.ts
- scripts/zero-error-check.mjs
- .github/workflows/zero-error.yml

Ön analizde şu somut riskleri doğrula:
- CSS'de kök yazı boyutunu 20px'e çıkaran, text-xs/text-sm sınıflarını 19–22px'e zorlayan, tüm p/li/article içeriklerini büyüten ya da tüm butonlara global minimum yükseklik veren kurallar vardı. Bunları geri getirme.
- Global header nav flex/nowrap/overflow override'ları breakpoint'leri ve menü yerleşimini bozabilir. Tüm navigasyona tek tip global layout dayatma.
- Header.tsx içindeki global-menu-trigger, yatay ScrollableToolbar ve MenuDrawer'ın görünürlük, click state, overflow, flex shrink, stacking context ve gerçek viewport ölçülerini ayrı ayrı denetle.
- AudioGrammarPlayer fallback yolunun Türkçe tr-TR sesi seçtiği ve Emel/Ahmet ayrımının yalnızca pitch değişikliği ile taklit edilip edilmediğini kontrol et. Bu iki konuşmacının gerçek ses kaynakları farklı mı test et.
- TTS registry içindeki her providerVoiceId'in gerçek sağlayıcı ses kimliği olduğunu doğrula; kayıt üzerindeki isim farklı diye sesi doğrulanmış sayma.
- Envanter ve kelime kartlarında emoji, bozuk GIF, 404 resim, hatalı MIME veya yanlış anlama karşılık gelen fotoğrafları bul.
- Tema kataloğundaki gerçek desen sayısı ile kullanıcıya gösterilen sayıyı karşılaştır.
Her tespit için dosya, satır aralığı ve yeniden üretim yolunu kaydet.

## 3. Menü her ekran boyutunda görünür olsun

### 3.1 Üst menü, hamburger ve drawer
- Menü tetikleyicisi masaüstünde, browser tam ekranında (F11 / OS fullscreen), pencere küçültülmüşken, mobilde, tablet yatay/dikey modda ve %80–125 zoom aralığında görünür ve kullanılabilir olmalı.
- Menü butonu hiçbir breakpoint'te saklanmamalı. Alan yetmiyorsa ikincil öğeleri duyarlı biçimde daralt/gizle; ana menü butonu ekrandan taşmamalı, clipping veya overlay arkasında kalmamalı.
- Header içindeki flex zincirinde min-width:0, flex-shrink, gap ve wrapping kurallarını bilinçli uygula; satırın gerçek genişliğini ölç.
- Drawer bir transform/backdrop-filter/overflow/stacking context yüzünden kırpılıyorsa React createPortal ile document.body'ye taşımayı değerlendir. document'a yalnızca client tarafında eriş; SSR'yi bozma. Sorunu sadece daha büyük z-index ekleyerek gizleme.
- Drawer tam viewport kaplamalı; başlık ve kapatma kontrolü üstte sabit kalmalı; içerik ayrı dikey kaymalı; 100dvh ve safe-area desteği kullanılmalı.
- Escape kapatsın, backdrop tıklaması kapatsın, odak açan menü düğmesine geri dönsün; aria-expanded, dialog/aria-modal, klavye odağı ve focus-visible durumları doğru olsun.
- Drawer açıkken body scroll lock gerekliyse önceki inline overflow ve scroll konumunu geri yükle. Bileşen kapanınca event listener ve focus trap temizlensin.
- Menüdeki arama, sınav, profil, tema ve çalışma serisi kontrolleri birbiriyle çakışmasın. Mobilde seçenekler tek sütuna düşebilsin.

### 3.2 Yatay kaydırma ve alt navigasyon
- Header'daki var olan ScrollableToolbar'ı bul ve onar; ikinci kopya bir toolbar yapıp mevcut linkleri çoğaltma.
- Hızlı gezinme şeridi fare, trackpad ve dokunmatik ekranla yatay kayabilsin. Yalnızca gerçekten kaydırılabilir kapsayıcıda overflow-x-auto, overscroll-behavior-x:contain, -webkit-overflow-scrolling:touch ve gerekli öğelerde flex-shrink:0 kullan.
- Tüm linklerin ekrana sığdığı yanılsaması yaratma; şeridin devam ettiğini hafif fade veya ok ile göstermek mümkün. Scrollbar gizliyse de swipe ve klavye erişimi kalsın.
- Mobilde kalıcı BottomNavigation ekle veya mevcut olanı düzelt: en fazla 5 ana hedef (Ana Sayfa, Kelimeler/Envanter, Gramer, Reading/Listening, Menü gibi). Gerçek route'ları denetle, yeni sahte hedef yazma. Bottom nav, MenuDrawer'ın yerine geçmez; ikisi de ulaşılabilir kalır.
- Alt bar env(safe-area-inset-bottom) ve kendi yüksekliğini hesaba katmalı; içerikte padding-bottom kullanarak son kartların arkasına saklanmasını önle. Ses oynatıcı kontrolleri barın altında kalmamalı.
- Desktop'ta sabit alt bar gösterme; breakpoint gerçek viewport testleriyle seç.
- Dikey sayfa kaydırması daima çalışsın. html/body/main ya da root'ta istemeden overflow:hidden kalmasın.

### 3.3 CSS sözleşmesi
- Temel html font-size 16px olsun ve Tailwind'in normal tipografi ölçeği korunsun. Tarayıcı metin büyütme tercihlerine engel olma.
- Global p/li/article veya [class*="text-sm"] ile tipografi dayatma. Reading passage boyutu sadece ilgili bileşende özel sınıfla ayarlanabilir.
- Her button/input'a global 48px minimum height uygulama; dokunma hedefini bileşen bazında düzenle.
- Global CSS header nav'a flex/nowrap/overflow/width zorlamamalı.
- Yatay taşmayı önlemek için sayfa dışına taşmayı kontrol et ama dikey scroll'u kapatma.
- section content-visibility gibi optimizasyonlar menü, animasyon veya player'ı gizlememeli. prefers-reduced-motion ve light/dark mode korunmalı.
- !important yalnızca kanıtlanmış özel bir çakışmada kullanılsın.

## 4. Site genelinde tek ve test edilebilir ses motoru

Hedef: kelime telaffuzu, cümle/paragraf okuma, Reading, Listening ve Sesli Gramer aynı merkezi ses katmanından geçsin. Her ekran ayrı ve çelişkili speechSynthesis seçimi yapmasın.

### 4.1 Dil ve konuşmacı modeli
- İngilizce öğrenme sesi ile Türkçe anlatım sesi ayrı diller olarak modellenmeli. Accent (en-US, en-GB vb.) ile narration language (en/tr) tek değişkende birleştirilmemeli.
- İngilizce kelime ve Reading metni seçilen İngilizce aksanında okunsun.
- Türkçe gramer açıklaması tr-TR konuşsun. Emel ve Ahmet ayrı konuşmacı ID'si, gerçek provider voice ID, metadata ve ayrı preview audio ile eşleşsin.
- Emel/Ahmet yalnız pitch 1.08/0.88 verilerek aynı temel sesten türetilmesin. İki gerçek konuşmacı doğrulanamıyorsa UI bunu dürüstçe söylesin.
- Voice id'leri gerçek sağlayıcı kataloğu/API'si ile doğrula; uydurulmuş veya varlığı doğrulanmamış sesleri enabled işaretleme.
- Mevcut AccentCode tipini, registry'yi ve client API'sini birlikte gözden geçirerek Türkçe ses desteğini ekle; İngilizce aksan seçimi bozulmasın.
- msedge-tts ve diğer provider'ların gerçek yetenek ve koşullarını araştır. Gerekirse resmî API adapter'ı server-only geliştir; credential yoksa açık durum/fallback göster. Sürekli neural ses garantisi iddia etme.

### 4.2 Merkezi API, hata yönetimi ve cache
- src/app/api/tts/route.ts, tts-provider.ts, audio-client.ts ve audio-cache.ts dosyalarını kopya motor oluşturmadan genişlet.
- Request text, locale, contentLanguage, voice id, accent, gender, speakingRate, content type ve requestId doğrulanmalı.
- Başarıda geçerli audio/* MIME ve gerçek ses buffer'ı dönmeli. Hata durumunda 200 + JSON dönüp istemcinin onu ses sanması yasak; uygun HTTP status ve makinece okunabilir hata kodu ver.
- Timeout, AbortSignal, kontrollü retry/backoff, rate limit, metin uzunluğu, chunking, cache hit/miss ve provider health check ekle.
- Cache anahtarı metin + provider + gerçek providerVoiceId + locale + speaking rate + output format içermeli. Emel/Ahmet veya farklı aksanlar aynı cached ses dosyasını kullanmamalı.
- Buffer boşluğu, MIME ve mümkünse MP3/OGG/WAV format imzasını doğrula. Hatalı içerikte player sonsuza kadar yüklenmesin.
- Blob URL/Audio nesnesini error, abort, route change ve component unmount durumlarında temizle. Aynı anda birden fazla oynatma için açık bir playback policy kullan.
- Browser speechSynthesis yalnız son fallback olsun. getVoices() geç yüklenmesi, voiceschanged, language/voice seçimi, onerror ve autoplay sınırlamalarını yönet. Fallback durumunu UI'de göster.
- Türkçe açıklama metni tr-TR TTS hattına; İngilizce örnek veya kelimeler en-* hattına gitsin. Her metin için content language açık olsun.
- Kayıtlı audio kullanılıyorsa Emel ve Ahmet için farklı audio source/URL olduğunu denetle; iki düğmede aynı dosyayı kullanma.
- Reading player Play/Pause/Stop/seek/speed kontrolü tek engine ile senkronize olsun. Bir bileşen unmount olunca audio ve progress timer temizlensin.
- Kullanıcı etkileşimi olmadan otomatik ses başlatma; autoplay politikasına uy.

### 4.3 Doğal, tane tane konuşma
- Varsayılan hız doğal konuşmaya yakın olsun. Yavaş mod yaklaşık 0.75–0.85 aralığında olabilir; kullanıcıya gereksiz hece arası yapay boşluk üretme.
- Provider SSML destekliyorsa rate/prosody/noktalama ayarlarını güvenli XML escaping ile uygula. Hız metin bölündüğünde de korunmalı.
- Uzun metin cümle sınırlarından veya anlamlı noktalama yerlerinden bölünsün; kelimenin ortasından kesilmesin. Chunk geçişlerinde çift kelime veya boşluk oluşturma.
- Metin/audio vurgusu varsa gerçek currentTime/cue kullan; yalnız tahmini timer ile yanlış cümle vurgulama.
- Kelime düğmesi yalnız kelimeyi; cümle düğmesi ilgili example sentence'ı okusun. IPA verisini normal TTS'ye yanlışlıkla gönderme.
- Accent/gender/rate ayarı ortak storage/event sistemiyle tüm sesli bileşenlerde çalışsın; SSR hydration hatası üretmesin.
- Neural synthesis'i insan tarafından kayıt edilmiş gibi etiketleme.

### 4.4 Ses kabul testleri
- Her enabled voice için standart preview üretilebilsin; buffer boş olmasın, MIME audio olsun, voiceId doğru olsun.
- Aynı metinde Emel/Ahmet ve iki farklı İngilizce aksan ayrı provider ID/cache entry kullansın. Hash farkı tek başına kulağa farklı geldiğini kanıtlamaz.
- Türkçe anlatım tr-TR; İngilizce telaffuz ve Reading içeriği seçili en-* locale ile çalışsın.
- Provider timeout, offline, 401/403, 429, empty audio, JSON error payload ve abort durumları test edilsin.
- Vocabulary, WordPronunciationBar, reading audio, grammar audio ve diğer ses yüzeyleri merkezi client kullanmalı.
- Her etkin konuşmacıyı dinlemeye yarayan Voice QA ekranı oluştur; teknik probe sonuçlarını ve manuel "dinleyerek doğrulandı" işaretini ayır. Gerçek dinleme yapılmadıysa doğrulandı yazma.
- Bu testler için mevcut yapı uygun değilse repo yapısına uyan dosyaları ekle: src/lib/tts/voice-audit.ts, scripts/audit-tts-voices.mjs, test/tts-voice-audit.test.ts, test/e2e-audio-smoke.test.ts. Önce aynı amaçlı dosyaları ara.

## 5. Kelime envanteri: gerçek fotoğraf, GIF ve 3D görselleştirme

Hedef: her kelimenin anlamını anlatan uygun görsel olsun. Emoji tek başına fotoğraf, animasyon veya anlam görseli yerine kullanılamaz.

- Word/id/slug, definition, part of speech, CEFR, example sentence ve görsel eşleşmesini denetle.
- Somut isimlerde konuyla ilgili gerçek fotoğraf; soyut kavram, phrasal verb, idiom ve akademik terimlerde anlamlı infografik/3D görselleştirme veya gerçekten mevcut animasyon kullanılabilir.
- İhtiyaca göre kullanıcıya Fotoğraf / 3D / Animasyon / Anlam kartı seçeneği sun. Her kelimede var olmayan bir mod için buton gösterme.
- Görsel kelime anlamına karşılık gelmeli; rastgele stock fotoğrafını anlam görseli gibi göstermemelisin.
- Görsel yoksa kırık link veya tek emoji kullanma. Kelime, Türkçe anlam ve örnek cümleyle şık SVG/tipografik fallback göster ve fotoğrafın mevcut olmadığını dürüstçe belirt.
- Lisans/attribution doğrulanmamış GIF, watermark'lı stock görsel veya telifli web scrape'i ekleme. Unsplash/Pexels benzeri API gerekiyor ise anahtar server-side env'de olsun; API'sizken dinamik arama çalışıyormuş gibi davranma.
- Depo içinde public/media/vocabulary/<slug>/ benzeri manifestli varlık düzeni veya mevcut Supabase Storage kullan. Önce mevcut bucket ve RLS'yi denetle. Görselleri yüzlerce kelimeye kopyalayarak katalog doldurma.
- Manifestte source URL, altTr/altEn, license, attribution, kind, dimensions ve reduced-motion fallback bulunsun.
- Next.js Image varsa remotePatterns yalnız gerekli host'larla sınırlansın. Rastgele domainlerin tümüne izin verme.
- Lazy loading, width/height, aspect ratio, object-fit, loading/error state ve doğru alt text sağla. Görsel yüklenmediğinde kart boyu zıplamasın.
- GIF/WebP/Lottie için gerçek MIME, dosya boyutu, frame oynatımı, CORS, cache ve reduced-motion fallback test et. GIF oynatmıyorsa gerçek bir Play/Pause kontrolü sun.
- package.json'da var olan Three.js, @react-three/fiber ve @react-three/drei değerlendir. 3D'yi lazy-load et; GPU/WebGL yoksa statik fallback kullan. Tüm kartlara ağır 3D sahne yükleme.
- Fotoğraf, 3D model, SVG diyagram, GIF ve Lottie türlerini doğru etiketle; gerçek fotoğrafı 3D diye sunma.

Gerekirse mevcut isimlere uyarak şu dosyaları ekle/düzelt:
- src/lib/media/visual-asset-registry.ts
- src/components/media/VocabularyVisual.tsx
- public/media/vocabulary/
- public/media/grammar/
- test/vocabulary-visuals.test.ts
Önce benzer dosyalar olup olmadığını araştır ve gereksiz kopya oluşturma.

## 6. Desenli tema galerisi

- ThemeProvider, ThemeInitializer ve mevcut tema motorunu koruyarak geliştir. Kullanıcı tercihi, light/dark mode ve kaydedilmiş tema kaybolmamalı.
- Emoji tabanlı desen yerine gerçek CSS/SVG desenleri ekle: dots, grid, wave, topographic contour, hexagon, blueprint, molecules, constellation, orbit, paper/noise, floral/geometric, circuit, bubbles, arcs, aurora, isometric tiles, stars, crosshatch, woven, terrazzo ve abstract geometry gibi kategoriler.
- İlk hedef 30+ benzersiz desen olabilir; yalnız gerçek registry'de tanımlanan sayıyı göster. Gerçekte 1000 desen yoksa 1000+ iddiasını kaldır.
- Katalog search/category/preview/select/save/reset ve active pattern state'i desteklesin.
- Güvenli metadata: id, nameTr, category, local SVG veya cssBackground, defaultScale, opacity, light/dark uyumu, motionMode ve attribution. Kullanıcı metninden eval veya keyfi CSS çalıştırma.
- Kontrastı ve metin okunabilirliğini koru. Opacity ayarı, prefers-reduced-motion için statik durum, mobil responsive kartlar, klavye erişimi ve tema kaydı ekle.
- Desen katmanı pointer-events:none olmalı; navigation/drawer z-index'i ve stacking context'i etkilememeli.
- Gerekli ve mevcut olmayan dosyalar: src/lib/themes/pattern-registry.ts, src/components/theme/ThemePatternPicker.tsx, src/components/theme/PatternPreview.tsx, public/media/patterns/, test/theme-patterns.test.ts. Benzer dosya varsa onu genişlet.

## 7. Görsel sistem ve erişilebilirlik

- Profesyonel eğitim ürünü gibi tutarlı spacing, type scale, 8px grid, kartlar ve focus-visible kullan. Her öğeyi neon gradient ile doldurma.
- Küçük yazıları global büyütme. Gerekirse A-/A+ tercihi bileşen bazında olsun; kök 16px kalsın ve tercih SSR-safe saklansın.
- Her formun label/aria-label, klavye odağı ve anlaşılır hata mesajı olsun.
- Drawer, dialog, theme picker, audio player ve visual mode switcher screen reader ve klavyeyle kullanılabilsin.
- Loading/empty/error state'leri tanımlı olsun; spinner sonsuza kadar dönmesin.
- Reduced motion, mobil performansı, light/dark theme ve yüksek kontrastı koru.

## 8. Beklenen dosyalar ve gerçek uygulama yöntemi

Önce dosya yapısını incele; aynı amaçlı dosya varsa onu değiştir, körlemesine kopya üretme.

Menü:
- src/components/Header.tsx
- src/components/MenuDrawer.tsx
- mevcut ScrollableToolbar bileşeni
- gerektiğinde src/components/navigation/BottomNavigation.tsx
- gerektiğinde src/components/navigation/MenuPortal.tsx
- src/app/globals.css
- gerekliyse src/app/layout.tsx

Ses:
- src/lib/tts/voice-registry.ts
- src/lib/tts/tts-provider.ts
- src/lib/tts/audio-client.ts
- src/lib/tts/audio-cache.ts
- src/app/api/tts/route.ts
- WordPronunciationBar, AudioGrammarPlayer, Reading/Listening player bileşenleri
- gerektiğinde voice-audit, test ve script dosyaları

Görsel/tema:
- gerektiğinde src/lib/media/visual-asset-registry.ts
- gerektiğinde src/components/media/VocabularyVisual.tsx
- gerektiğinde src/lib/themes/pattern-registry.ts
- gerektiğinde src/components/theme/ThemePatternPicker.tsx
- public/media/vocabulary/, public/media/grammar/, public/media/patterns/
- test/vocabulary-visuals.test.ts ve test/theme-patterns.test.ts

E2E:
- mevcut Playwright yapısına uyumlu responsive-navigation ve audio-surface testleri
- gerekiyorsa CI workflow değişikliği
- README/docs içinde env variable adları, provider seçimi ve asset attributions açıklaması

## 9. Otomatik kabul kriterleri

Gerçek tarayıcı testi:
- Viewport'lar: 320×720, 360×800, 390×844, 430×932, 768×1024 portrait/landscape, 1024×768, 1280×800, 1440×900 ve 1920×1080.
- Tam ekran ve %80/%100/%125 zoom da denensin.
- Her görünümde menü tetikleyicisi görünür/tıklanabilir; drawer açılır ve kapanır; Escape/overlay/focus restoration çalışır; drawer içi dikey scroll ve toolbar yatay scroll çalışır.
- Console veya network'te yeni hata olmamalı.

Ses testi:
- Word normal/slow/sentence playback.
- Reading Play/Pause/Stop/seek.
- Grammar Türkçe speaker path ve Emel/Ahmet ayrımı.
- Registry'deki tüm enabled sesler için preview.
- Offline/timeout/401/403/429/empty payload/JSON payload/abort ve route change.
- Response MIME, voice ID, latency ve UI state kaydedilsin; secrets loglanmasın.
- Teknik farklılık ve gerçek dinleyerek doğrulama ayrı tutulmalı.

Görsel/tema testi:
- somut kelime, soyut kelime, fiil/phrasal verb ve akademik kavram.
- image success/404/offline/invalid MIME, reduced motion, WebGL yokluğu ve mobil.
- Fotoğraf/3D/animasyon etiketleri doğru; GIF/Lottie gerçekten oynuyor ve durdurulabiliyor.
- 30+ desen gerçek registry ve önizlemeye sahip; tema seçimi sayfa yenilemesinde kalıcı.
- Light/dark, klavye, yüksek kontrast ve bottom nav içerik çakışması.
- Auth, çalışma ilerlemesi, notlar, favoriler ve CSV/JSON dışa aktarma geriye dönük test edilmeli.

## 10. Build, GitHub ve Vercel release kapısı

- Önce package.json'daki gerçek scriptleri ve lockfile'ı kontrol et. Gerçekten mevcutsa typecheck, zero-error, lint, unit, integration, e2e ve production build çalıştır. Var olmayan script'i varmış gibi çağırma.
- Gerçek package manager kullan; package-lock ve pnpm-lock'u rastgele birlikte değiştirme.
- Test başarısızsa kök nedeni düzelt; testleri silme, skip etme veya başarı gibi gösterme.
- Vercel'de mevcut projeyi kullan. Supabase bağlantısının ACTIVE/HEALTHY olduğunu ve gereken env var isimlerinin tanımlı olduğunu doğrula; değerleri açığa çıkarma.
- metadataBase, canonical, manifest start_url/scope, sitemap/share URL'leri https://dil-master.vercel.app ile aynı hedefi göstermeli.
- Deployment READY olmadan alias atamayı tamamlandı sayma. Hazır deployment'a yalnızca dil-master.vercel.app production alias'ı bağlandığını kontrol et; ikinci resmî alan adı oluşturma.
- Preview test edilmeden production promotion yapma. Sonuç olarak deployment ID/state/log ve gerçek HTTP smoke test'ini doğrula. Create deployment çağrısının başarılı olması tek başına live olduğunu kanıtlamaz.

## 11. Zorunlu teslimat raporu

Gerçek sonuçları aşağıdaki maddelerle döndür:
1. Kök nedenler: dosya ve satır aralığı.
2. Değiştirilen dosyalar: yol ve amaç.
3. Eklenen dosyalar: yol ve işlev.
4. Ses: hangi gerçek voice ID/locale/provider denendi, teknik ve manuel test durumları.
5. Görseller: kaç asset gerçekten bağlandı, lisans/attribution yöntemi, kırık URL sayısı ve fallback.
6. Temalar: registry'de gerçekten bulunan desen sayısı, kategoriler ve reduced-motion davranışı.
7. Testler: her komutun sonucu/exit code; çalıştırılmayan test geçmedi kabul edilir.
8. GitHub: dal, commit SHA, PR URL, CI sonucu.
9. Vercel: deployment ID, READY/ERROR, domain alias ve HTTP smoke test.
10. Kalan engeller: credential, manuel cihaz/ses dinleme veya harici servis engeli ve çözüm adımları.

Öncelik sırası:
P0 — build, veri koruma, tam ekran dahil görünür menü, dikey/yatay kaydırma, temel seslerin bozulmaması.
P1 — Emel/Ahmet gerçek ayrı konuşmacı, merkezi TTS ve cache/error doğrulaması.
P2 — semantik fotoğraf, 3D/animasyon türleri ve GIF onarımı.
P3 — daha fazla gerçek desen, performans ve görsel cilalama.

Başla: repoyu ve dalı incele, gerçek kök nedenleri bul, değişiklikleri gerçekten uygula, test et ve mümkün olan en güvenli preview/release adımına kadar ilerle. Kullanıcıya yalnızca plan sunup bekleme.
# 🧠 CLAUDE DEBUG PROTOKOLÜ

Bu kılavuz, Next.js + Supabase + Vercel stack'inde ortaya çıkan zorlu hataları Claude ile en verimli, kanıt-odaklı ve kalıcı şekilde çözmek için hazırlanmış 4 master prompt'u içerir.

---

## 🎯 PROMPT 1 — Master Debug (Her Zorlu Hatada İlk Kullanılacak)

```text
<rol>
Sen bu projenin (Next.js 14/15 + Supabase + Vercel) kıdemli hata avcısısın.
Tahminle değil, KANITLA çalışırsın. Amacın hatayı bu seferlik susturmak
değil, KÖK NEDENİ ortadan kaldırmaktır.
</rol>

<hata>
HATA MESAJI: <tam metin / DebugPanel JSON çıktısı>
Nerede görüldü: <terminal / Vercel log / tarayıcı konsolu / DebugPanel raporu>
Ne yaparken oldu: <adım adım>
Ne zamandır oluyor: <son değişiklikten beri / hep>
</hata>

<projeden-topla>
Başlamadan önce kendin topla: ilgili dosyaları oku, gerekiyorsa terminalde
`npm run build`, `grep`, `node scripts/smoke-test.mjs` gibi komutlarla durumu doğrula.
Benden bilgi istemek yerine önce kendin ara; bulamadığını tek soru olarak sor.
</projeden-topla>

<protokol>
1. YENİDEN ÜRET: Hatayı tetikleyen en küçük adımı bul ve çalıştır. Üretemezsen
   bunu açıkça söyle ve DUR.
2. NEDEN-ZİNCİRİ: Belirti → ara katman → kök neden zincirini kur. Her halkayı
   bir komut çıktısı veya kod satırıyla KANITLA.
3. HİPOTEZLER: En az 2 hipotez yaz; her birini nasıl ELEYECEĞİNİ belirt.
   Elemek için gerekli komutları çalıştır.
4. DÜZELTME: Yalnızca kök nedeni düzelt. Yama değil, kalıcı çözüm.
   Değişen her satır için "neden?" açıklaması ver.
5. REGRESYON TESTİ: Bu düzeltmenin bozabileceği 2-3 senaryoyu sen yaz ve test et.
6. KANIT: Önce/sonra komut çıktıları.
7. ÖNLEME: Aynı hatanın tekrarını engelleyecek 1 somut öneri
   (test, kural, zero-error-check kuralı veya doküman).
</protokol>

<yasaklar>
- Boş catch, @ts-ignore, özelliği silme, "yeniden başlat düzelir" çözümleri YASAK.
- Emin değilsen uydurma; "emin değilim, şu kontrol gerekli" de.
</yasaklar>

<cikti-formati>
Şu başlıklarla bitir:
## Kök Neden (tek cümle)
## Kanıt Zinciri (madde madde)
## Düzeltme (dosya + açıklama)
## Regresyon Testleri (sonuçlarıyla)
## Tekrarını Önleme
</cikti-formati>
```

---

## 🎯 PROMPT 2 — "Bir Türlü Tekrar Edilemeyen" (Heisenbug) Hatalar İçin

```text
Bu hata bazen oluyor bazen olmuyor (yarış durumu / zamanlama / önbellek şüphesi).
Senden istediğim:
1. Hatanın olasılıksal doğasını analiz et: hangi sıralama/önbellek/ağ koşulu tetikler?
2. Kodda yarış durumu yaratabilecek nokta noktaları listele
   (async state güncellemeleri, useEffect bağımlılıkları, paralel fetch'ler).
3. Her şüpheliye izleyici yerleştir: lib/debug/tracer.ts'teki trace() ve
   timeAsync() ile o akışı enstrümantasyona boğ; log noktalarını sen ekle.
4. Hatayı DETERMİNİSTİK yeniden üretecek bir senaryo tasarla
   (ör. yavaş ağ simülasyonu: Chrome DevTools → Slow 3G).
5. Üretilince Prompt 1 protokolüne geç.
```

---

## 🎯 PROMPT 3 — Düzeltme Sonrası "Bir Daha Dönmesin" Sigortası

```text
Az önce düzelttiğin hata için kalıcı sigorta yaz:
1. Aynı hatayı yakalayan otomatik test (basit node scripti veya test/ dosyası) — test/ veya scripts/ altına koy.
2. zero-error-check.mjs'e statik kural eklenebiliyorsa kural öner (regex + mesaj).
3. CI'da (zero-error.yml) koşulacak şekilde entegre et.
Test KIRMIZI iken düzeltmenin geri alındığını simüle ederek testin gerçekten
yakaladığını kanıtla, sonra yeşile çevir.
```

---

## 🎯 PROMPT 4 — Diff İncelemesi (PR Öncesi Bug Avı)

```text
Aşağıdaki git diff'ini bug açısından incele:
<git diff çıktısı>
Her değişiklik için şu soruları cevapla:
- null/undefined/boş dizi sınır durumları ele alındı mı?
- async yarış durumu oluşabilir mi?
- Hata yolu var mı (boş catch, sessiz düşüş)?
- RLS/güvenlik etkisi var mı?
- Önceki davranışı bozan gizli değişiklik var mı?
Bulgularını CİDDİYET (P0/P1/P2) + KANIT (satır no) + ÖNERİ formatında listele.
```

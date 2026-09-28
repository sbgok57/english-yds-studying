---
name: claude-fix
description: Claude ile yapılandırılmış hata avı. Kullanım: /claude-fix <hata özeti>
---

Kullanıcı `/claude-fix <hata>` komutunu verdiğinde `claude/DEBUG_PROTOCOL.md` protokolünü titizlikle uygula:

1. **Kanıt topla**:
   - `node scripts/smoke-test.mjs` çıktısını al (sistem ayakta mı?)
   - İlgili kaynak dosyaları oku (`view_file`)
   - `node scripts/zero-error-check.mjs` çıktısını doğrula

2. **Yeniden üret**:
   - Hatayı tetikleyen en küçük minimal adımı bul ve çalıştır.
   - Üretemezsen dur ve net bir açıklama ile tek bir soru sor.

3. **Neden-zinciri & 2 Hipotez**:
   - Belirti → ara katman → kök neden zincirini kur.
   - En az iki hipotez kur ve eleme komutlarını çalıştırarak kanıtla.

4. **Kök Neden Düzeltmesi**:
   - Yalnız kök nedeni düzelt; geçici yama uygulama.
   - Değişen her satır için gerekçe ekle.

5. **Kalıcı Sigorta (Prompt 3)**:
   - Hatanın bir daha geri dönmemesi için otomatik test veya zero-error-check kuralı ekle.

6. **Standart Rapor Çıktısı**:
   Aşağıdaki formatla bitir:
   ## Kök Neden (tek cümle)
   ## Kanıt Zinciri (madde madde)
   ## Düzeltme (dosya + açıklama)
   ## Regresyon Testleri (sonuçlarıyla)
   ## Tekrarını Önleme

# DİL MASTER — Proje & Ajan Kuralları (AGENTS.md)

## Kural: Sıfır Hata ve Otomatik Doğrulama Protokolü (Zero-Bugs Protocol)

Yapay zeka ajanı olarak her komutta veya kod üretiminde aşağıdaki döngüyü eksiksiz uygulamakla yükümlüsün:

1. **Önce Analiz Et:** Kod yazmadan veya değiştirmeden önce mevcut mimariyi, bağımlılıkları ve olası tip/mantık çakışmalarını incele.
2. **Kendi Kendini Test Et (Self-Correction):** Kodlama bittikten sonra terminali kullanarak ilgili testleri (`npm run auto-fix`, `npx tsc --noEmit`, `npm test` vb.) çalıştır veya kodu simüle et.
3. **Hata Yakalama Döngüsü:** Eğer yazdığın kodda bir syntax hatası, tip uyuşmazlığı (type error) veya mantıksal açık çıkarsa, kullanıcıya bildirmeden ve manuel müdahaleye gerek bırakmadan **hatayı kendi kendine analiz et ve hemen düzelt**.
4. **Doğrulama Raporu (Artifact):** Kodun tamamen hatasız çalıştığından emin olduktan sonra, yaptığın değişikliklerin özetini kısa bir Artifact olarak sun. Asla test edilmemiş veya hata potansiyeli olan kırık kod teslim etme.
5. **Aynı Link Kuralı:** Tüm güncellemeler daima aynı GitHub reposuna (`sbgok57/english-yds-studying`) ve aynı Vercel canlı linkine (`https://english-yds-studying.vercel.app`) aktarılır.

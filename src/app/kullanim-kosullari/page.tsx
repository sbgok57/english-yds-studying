import Link from "next/link";

export default function KullanimKosullariPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl space-y-8">
        <header className="border-b border-white/10 pb-6">
          <Link
            href="/"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors inline-block mb-4"
          >
            ← Ana Sayfaya Dön
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Kullanım Koşulları 📜
          </h1>
          <p className="text-sm text-white/50 mt-2">
            Son Güncelleme: 18 Eylül 2026 &bull; YDS Master Hizmet Şartları
          </p>
        </header>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>1.</span> Hizmetin Amacı
          </h2>
          <p>
            YDS Master; Yabancı Dil Bilgisi Seviye Tespit Sınavı (YDS), YDT ve YÖKDİL adaylarına yönelik görsel hafıza, interaktif alıştırmalar, optik form simülasyonu ve kelime envanteri sunan bir eğitim destek platformudur.
          </p>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>2.</span> Hesap Güvenliği ve Kullanıcı Sorumluluğu
          </h2>
          <p>
            Kullanıcı, hesap bilgilerinin gizliliğini korumakla yükümlüdür. Platform üzerinde başkalarının deneyimini olumsuz etkileyecek bot veya otomatik tarayıcı faaliyetleri yürütmek yasaktır.
          </p>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>3.</span> Fikri Mülkiyet ve İçerik Hakları
          </h2>
          <p>
            Sitede yer alan eğitim modülleri, taktik anlatımları, özgün deneme soruları ve yazılım mimarisi telif haklarıyla korunmaktadır. Kullanıcılar kişisel çalışma amacıyla içeriklerden faydalanabilir; içeriklerin izinsiz kopyalanması, çoğaltılması veya ticari amaçla dağıtılması yasaktır.
          </p>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>4.</span> Garanti ve Sorumluluk Reddi
          </h2>
          <p>
            YDS Master, platformun kesintisiz ve hatasız çalışması için azami gayreti gösterir. Ancak sınav başarısı adayın kişisel çalışma disiplini ve performansına bağlı olup, platform belirli bir sınav puanı garantisi vermez.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 text-xs text-white/40 text-center">
          YDS Master &bull; Başarılar dileriz! 🚀
        </div>
      </div>
    </div>
  );
}

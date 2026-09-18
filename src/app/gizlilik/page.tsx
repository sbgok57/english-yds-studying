import Link from "next/link";

export default function GizlilikPage() {
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
            Gizlilik Politikası 🛡️
          </h1>
          <p className="text-sm text-white/50 mt-2">
            Son Güncelleme: 18 Eylül 2026 &bull; YDS Master Güvenlik & Gizlilik İlkeleri
          </p>
        </header>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>1.</span> Veri Sorumlusu ve Temel İlke
          </h2>
          <p>
            YDS Master olarak, kullanıcılarımızın kişisel verilerinin ve sınav hazırlık süreçlerindeki gizliliğinin korunmasına azami özen gösteriyoruz. Platformumuz, kullanıcı deneyimini iyileştirmek ve çalışma ilerlemenizi takip edebilmeniz dışında hiçbir ticari veri toplama faaliyeti yürütmez.
          </p>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>2.</span> Toplanan Bilgiler ve Saklama Biçimi
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-white/70">
            <li>
              <strong className="text-white">Hesap Bilgileri:</strong> Kayıt sırasında alınan e-posta adresi, kullanıcı adı ve parola. Parolanız asla düz metin olarak kaydedilmez; endüstri standardı <code>bcrypt</code> ve <code>HMAC-SHA256</code> algoritmalarıyla tek yönlü şifrelenerek saklanır.
            </li>
            <li>
              <strong className="text-white">Çalışma İlerlemesi:</strong> Çözülen denemeler, kelime envanteri notları, kazanılan XP&apos;ler ve açılan rozetler yerel tarayıcı depolamanızda (localStorage) ve veritabanımızda oturumunuza bağlı olarak saklanır.
            </li>
            <li>
              <strong className="text-white">Çerezler (Cookies):</strong> Sadece güvenli oturum doğrulama amacıyla HTTP-Only <code>yds_session_token</code> oturum çerezi kullanılır. Üçüncü taraf reklam veya takip çerezi kesinlikle kullanılmaz.
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>3.</span> Üçüncü Taraf Servisler
          </h2>
          <p>
            E-posta doğrulama kodları güvenli SMTP/Resend altyapısı ile yalnızca kod iletimi amacıyla gönderilir. Motivasyon videoları Google&apos;ın gizlilik odaklı <code>youtube-nocookie.com</code> platformu üzerinden izleyici takip çerezleri engellenerek sunulur.
          </p>
        </section>

        <section className="space-y-4 text-sm text-white/80 leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>4.</span> Kullanıcı Hakları
          </h2>
          <p>
            İstediğiniz zaman hesap ayarları sayfasından tüm çalışma geçmişinizi sıfırlayabilir, hesabınızı silebilir veya verilerinizin dökümünü CSV formatında dışa aktarabilirsiniz.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 text-xs text-white/40 text-center">
          Sorularınız için: <span className="text-cyan-400 font-mono">destek@ydsmaster.com</span>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/animations";

const SECTIONS = [
  {
    emoji: "🌟",
    title: "Çoklu Sınav Modu (YDS · YDT · YÖKDİL)",
    href: "/exams",
    desc: "Üst menüdeki sınav değiştirici ile hedefinizi belirleyin: YDS (180 dk), YDT (120 dk) veya YÖKDİL (Sağlık, Fen, Sosyal). Kartlar ve denemeler otomatik filtrelenir.",
    tip: "İpucu: 'Hepsi' modunu seçerek tüm sınavların ortak soru ve kelime havuzunu aynı anda çalışabilirsiniz.",
  },
  {
    emoji: "📄",
    title: "Akıllı PDF & Kelime Ekleme Merkezi",
    href: "/import",
    desc: "Elinizdeki herhangi bir PDF'i (kitap, makale, deneme) yükleyin veya Claude AI ile tek kelime girin. Sistem otomatik CEFR seviyesi, türü ve doğal örnek cümleleri hazırlar.",
    tip: "İpucu: 2013-2026 yayınlar (Modadil, Akın Dil, Remzi Hoca vb.) hazır havuzunu tek tıkla kütüphanenize ekleyebilirsiniz.",
  },
  {
    emoji: "🃏",
    title: "3D Flashcards & Zengin Hafıza",
    href: "/vocabulary/flashcards",
    desc: "2.500+ master akademik kelime, yayınlar havuzu ve kendi ekledikleriniz tek kart destesinde. Kartı çevir, 3D küpü fareyle döndür, 5 farklı aksanda telaffuz dinle.",
    tip: "Kral modu: Zayıf olduğun kelimeler otomatik olarak en başta gelir. 5 seri doğruda havai fişek patlar!",
  },
  {
    emoji: "⏱️",
    title: "Sınav Merkezi (YDS · YDT · YÖKDİL)",
    href: "/exams",
    desc: "2010-2026 tüm çıkmış sınavlar ve 72'şer adet özgün deneme. YDT için 120 dk, YDS ve YÖKDİL için 180 dk gerçek sayaç ve optik form.",
    tip: "Net Hesabı: Doğru - (Yanlış ÷ 4). Sınav esnasında şüpheli sorularınızı bayrakla işaretleyin.",
  },
  {
    emoji: "🎧",
    title: "Sesli Gramer & Hafıza Kodları",
    href: "/grammar/audio",
    desc: "12 adet özel stüdyo kaydı: 'ALi CÜMLEci vs DEDE İSİMci', Sebahattin & Sevim, Zaman Uyumu gibi soru kurtaran pratik kodlamalar.",
    tip: "İpucu: Yolda, sporda veya uyumadan önce dinleyin; kilit ekranı kontrolleriyle durdurup devam edin.",
  },
  {
    emoji: "📖",
    title: "Animasyonlu Gramer Akademisi",
    href: "/grammar",
    desc: "27 konu: formüller, altın kurallar, hafıza kodlamaları, tuzaklar. '▶ Adım Adım Oynat' ile soruyu animasyonla çöz.",
    tip: "Kırmızı + altı çizili yerler kritik kurallardır. Üzerinde duran ℹ️ rozetli yerlere fareyle bekle → baloncuk açılır.",
  },
  {
    emoji: "🎯",
    title: "Soru Taktikleri",
    href: "/tactics",
    desc: "11 soru tipi için adım adım çözüm algoritmaları, çeldirici eleme stratejileri ve 600 soruluk pratik bankası.",
    tip: "Doğru cevapta 🎆 havai fişek, yanlışta dostça taktik tekrarı.",
  },
  {
    emoji: "🛡️",
    title: "Sistem Denetçisi & Sıfır Hata (0 Hata)",
    href: "/admin",
    desc: "Otomatik self-heal ve bütünlük motoru. Sağ üstteki '🛡️ 0 Hata Denetimi' butonuyla tüm sistem test edilir ve hatalar anında sıfırlanır.",
    tip: "İpucu: Herhangi bir problemde tek tıkla '⚡ Otomatik Tara & Hataları Sıfırla' butonuna basmanız yeterlidir.",
  },
  {
    emoji: "🔬",
    title: "Reading Lab",
    href: "/reading",
    desc: "Akademik okuma parçaları. Metinde altı çizili kelimeye tıkla → anında sözlük. Parça sonunda kendini test et.",
    tip: "Okumadan net olmaz kanka — günde en az 1 parça!",
  },
  {
    emoji: "👤",
    title: "Avatar & Profil (2.000+ Seçenek)",
    href: "/avatars",
    desc: "2.000'den fazla eğlenceli ve yaratıcı avatar arasından profilini seç, seviye testini tamamla ve kişisel hedefini belirle.",
    tip: "Hesap sayfasında (/hesap) kelime, sınav ve net istatistiklerini canlı takip et.",
  },
];

export default function KilavuzPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          📘 <span className="gradient-text">DİL MASTER Kullanım Kılavuzu</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          YDS, YDT ve YÖKDİL hazırlığında tüm modüllerin ne işe yaradığı ve gizli ipuçları aşağıda.
          <br />
          <span className="text-cyan-300/90 font-bold">
            Her karta tıkla → direkt o sayfaya gidersin. 👇
          </span>
        </p>
      </header>

      <div className="space-y-4">
        {SECTIONS.map((s, i) => (
          <Reveal key={i} delay={(i % 3) * 70}>
            <Link
              href={s.href}
              className="card-vibrant p-6 flex gap-4 group hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all block"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-tr from-pink-500/30 via-purple-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-3xl">
                {s.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>
                  <span className="text-xs text-white/30 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-2">{s.desc}</p>
                <p className="text-xs text-cyan-300/80 font-mono bg-cyan-950/40 border border-cyan-800/40 rounded-lg px-2.5 py-1 inline-block">
                  💡 {s.tip}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

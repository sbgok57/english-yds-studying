import Link from "next/link";
import { Reveal } from "@/components/animations";

const SECTIONS = [
  {
    emoji: "🎯",
    title: "YDS Sınav Akademisi (180 dk · 80 Soru)",
    href: "/yds",
    desc: "ÖSYM YDS formatında Kamu, Doktora ve Akademik Kariyer hedefleyenler için özel merkez. Çıkmış sınavlar, özgün denemeler ve yüksek frekanslı akademik kelimeler.",
    tip: "YDS Stratejisi: 80 soru için 180 dakikanız var (soru başına 2.25 dk). Çeviri ve diyalogları hızlı çözüp okuma parçalarına zaman ayırın.",
  },
  {
    emoji: "🎓",
    title: "YDT (LYS-5) Sınav Akademisi (120 dk · 80 Soru)",
    href: "/ydt",
    desc: "YKS Dil öğrencileri için 2010-2026 tüm LYS-5 ve YDT arşivini içeren özel merkez. 1.5 dakika/soru yüksek tempo antrenmanları ve dil puanı hedefleme.",
    tip: "YDT Temposu: 120 dakikada 80 soru çözülür. Hız ve zaman yönetimi için YDT denemelerini gerçek optik sayaçla çözün.",
  },
  {
    emoji: "🔬",
    title: "YÖKDİL Alan Akademisi (Sağlık · Fen · Sosyal)",
    href: "/yokdil",
    desc: "3 temel bilim dalına özel terminoloji ve soru havuzu: Sağlık 🩺, Fen Bilimleri ⚡, Sosyal Bilimler 🏛️. 180 dakika, 80 soru formatı.",
    tip: "Alan Seçimi: Tıp/Diş/Eczacılık için Sağlık; Mühendislik/Mimarlık için Fen; İİBF/Hukuk/Edebiyat için Sosyal alanını seçin.",
  },
  {
    emoji: "📄",
    title: "Akıllı PDF & Kelime Ekleme Merkezi",
    href: "/import",
    desc: "Elinizdeki herhangi bir PDF'i (kitap, makale, deneme) yükleyin veya kelime listesi girin. Sistem otomatik CEFR seviyesi, türü, Türkçe anlamı ve örnek cümleleri hazırlar.",
    tip: "Yayınlar Korpusu: Modadil, Akın Dil, Remzi Hoca, Pelikan, Benim Hocam gibi tüm kaynakların kelimeleri tek tıkla kütüphanenize eklenir.",
  },
  {
    emoji: "🃏",
    title: "3D Flashcards & Tüm Kelime Tablosu",
    href: "/vocabulary/flashcards",
    desc: "2.500+ master akademik kelime, yayınlar havuzu ve kendi ekledikleriniz. 3D küpü döndür, kartı çevir, 5 aksanda dinle veya 'Tablo' modunda tüm kelimeleri filtrele.",
    tip: "Akıllı Bellek (SM-2): Zayıf olduğunuz kelimeler otomatik olarak en başta gelir. 5 seri doğruda havai fişek patlar!",
  },
  {
    emoji: "🔬",
    title: "Reading Lab (Okuma & Tıkla-Sözlük)",
    href: "/reading",
    desc: "The Economist, Lancet, Nature ve New York Times tarzı akademik okuma parçaları. Metindeki herhangi bir kelimeye tıkla → anında sözlük açılır.",
    tip: "Altın Kural: Günde en az 1 okuma parçası tamamlayın. Parça sonundaki 3 soruluk testi çözerek kavrama oranınızı ölçün.",
  },
  {
    emoji: "🎧",
    title: "Listening Lab (Çoklu Aksan & Dinleme)",
    href: "/listening",
    desc: "Amerikan (US), İngiliz (UK), Kanada (CA), Avustralya (AU) ve Yeni Zelanda (NZ) aksanlarında dinleme laboratuvarı ve boşluk doldurma.",
    tip: "Aksan Antrenmanı: YDS ve YDT'de kulak dolgunluğu kazanmak için oynatma hızını (0.8x - 1.2x) ihtiyacınıza göre ayarlayın.",
  },
  {
    emoji: "✍️",
    title: "Writing Lab (Cümle Kurma & Paraphrase)",
    href: "/writing",
    desc: "Akademik cümle dizilimi (S+V+O+MPT), bağlaçlarla cümle birleştirme ve anlamca en yakın cümleyi (Restatement) yeniden yazma antrenmanları.",
    tip: "Çeviri Sorusu Taktikleri: Doğru ana fiili (Main Verb) bulma pratiği çeviri sorularında 12/12 tam net kazandırır.",
  },
  {
    emoji: "🎙️",
    title: "AI Speaking Lab (Sesli Konuşma Koçu)",
    href: "/speaking",
    desc: "Yapay zeka sesli koç ile interaktif İngilizce diyalog kurun. Telaffuzunuz, akıcılığınız ve dilbilgisi doğruluk oranınız anlık analiz edilir.",
    tip: "Özgüven Geliştirme: Mikrofon butonuna basarak sınav senaryolarında rol model konuşmaları tamamlayın.",
  },
  {
    emoji: "⏱️",
    title: "Sınav Merkezi (YDS · YDT · YÖKDİL Denemeleri)",
    href: "/exams",
    desc: "2010-2026 tüm çıkmış sınavlar ve 72 adet özgün deneme. Gerçek optik form, şüpheli soru işaretleme bayrağı ve anında net hesabı.",
    tip: "ÖSYM Net Hesabı: Net = Doğru - (Yanlış ÷ 4). Sınav biter bitmez detaylı soru çözüm karneniz oluşturulur.",
  },
  {
    emoji: "🎧",
    title: "Sesli Gramer & Hafıza Kodları",
    href: "/grammar/audio",
    desc: "12 adet özel stüdyo kaydı: 'ALi CÜMLEci vs DEDE İSİMci', Sebahattin & Sevim, Zaman Uyumu gibi soru kurtaran pratik kodlamalar.",
    tip: "Mobil Arka Plan: Yolda, sporda veya uyumadan önce dinleyin; kilit ekranı kontrolleriyle durdurup devam edin.",
  },
  {
    emoji: "📖",
    title: "Animasyonlu Gramer Akademisi",
    href: "/grammar",
    desc: "27 konu: formüller, altın kurallar, hafıza kodlamaları, tuzaklar. '▶ Adım Adım Oynat' ile soruyu adım adım animasyonla çöz.",
    tip: "İnteraktif İpuçları: ℹ️ rozetli ifadelere fareyle bekle → formül baloncuğu açılır.",
  },
  {
    emoji: "🎯",
    title: "Soru Çözüm Taktikleri",
    href: "/tactics",
    desc: "11 soru tipi için adım adım çözüm algoritmaları, çeldirici eleme stratejileri ve 600 soruluk pratik bankası.",
    tip: "Çeldirici Eleme: 'Zaman uyumsuzluğu', 'Aşırı genelleme' ve 'Bağlam dışı kelime' tuzaklarını tespit etmeyi öğrenin.",
  },
  {
    emoji: "🛡️",
    title: "Admin & Canlı Öğrenci Süreç Takibi",
    href: "/admin",
    desc: "Admin yetkisiyle öğrencilerin saat kaçta ne yaptığı, ne kadar süre harcadığı, 7 beceri süre dağılımı (dakika bazında) ve tek tıkla CSV karnesi indirme.",
    tip: "Süreç Çizelgesi: Öğrencinin son deneme netleri, kelime ezber serileri ve çalışma zamanları saniye saniye izlenir.",
  },
  {
    emoji: "👤",
    title: "Avatar & Profil (2.000+ Seçenek)",
    href: "/avatars",
    desc: "2.000'den fazla eğlenceli ve yaratıcı avatar arasından profilini seç, seviye testini tamamla ve kişisel hedefini belirle.",
    tip: "Hesap Sayfası: /hesap adresinden kelime, sınav ve net istatistiklerini canlı takip et.",
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

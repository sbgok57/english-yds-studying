import Link from "next/link";
import { Reveal } from "@/components/animations";

const SECTIONS = [
  {
    emoji: "🏠",
    title: "Ana Sayfa",
    desc: "Sana özel selamlama, 'Kanka İlerleme Paneli' (öğrendiklerin, zayıf kelimelerin, sınav ortalaman) ve tüm istasyonlara kısayollar.",
    tip: "İpucu: Sol alttaki 🌈 düğmesiyle gökkuşağı ambiansını aç/kapat. Tercihin hatırlanır.",
  },
  {
    emoji: "🃏",
    title: "3D Flashcards",
    desc: "Kartı tıkla ve çevir (ön: İngilizce, arka: Türkçe + kodlama + örnek). 3D küpü fareyle sürükleyerek döndür.",
    tip: "Kral modu: En zayıf kelimelerin otomatik önce gelir. 5 doğru seride havai fişek patlar!",
  },
  {
    emoji: "⏱️",
    title: "Optik Sınav (180 dk)",
    desc: "80 soru, baloncuk optik form, süre sayacı. Soruya cevap ver, '⚑' ile işaretle, bitirince net otomatik hesaplanır.",
    tip: "Net = Doğru − (Yanlış ÷ 4). Emin değilsen boş bırak kanka!",
  },
  {
    emoji: "📖",
    title: "Animasyonlu Gramer",
    desc: "15 konu: formüller, altın kurallar, 🎵 hafıza kodlamaları, tuzaklar. '▶ Adım Adım Oynat' ile soruyu animasyonla çöz.",
    tip: "Kırmızı + altı çizili yerler kritik kurallardır. Üzerinde duran ℹ️ rozetli yerlere fareyle bekle → baloncuk açılır.",
  },
  {
    emoji: "🎯",
    title: "Soru Taktikleri",
    desc: "11 soru tipi için adım adım çözüm algoritmaları ve çözümlü örnek sorular.",
    tip: "Doğru cevapta 🎆 havai fişek, yanlışta dostça taktik tekrarı.",
  },
  {
    emoji: "🎮",
    title: "Oyun Merkezi",
    desc: "Eşleştirme, Köstebek Vur, Çarkıfelek, Doğru/Yanlış ve Dinle & Seç oyunları.",
    tip: "Her doğru cevapta havai fişek. Oynayarak öğren, netleri uçur!",
  },
  {
    emoji: "🗄️",
    title: "YDS Arşivi",
    desc: "2013-2026 arası tüm YDS dönemleri + o sınavlarda çıkan kelimeler (Türkçe anlamlı).",
    tip: "Çıkmış kelimeleri '🔥 Çok sık' filtresiyle önceliklendir.",
  },
  {
    emoji: "🔬",
    title: "Reading Lab",
    desc: "Akademik okuma parçaları. Metinde altı çizili kelimeye tıkla → anında sözlük. Parça sonunda kendini test et.",
    tip: "Okumadan net olmaz kanka — günde 1 parça!",
  },
  {
    emoji: "🤖",
    title: "YDS Kanka AI",
    desc: "Sağ alttaki yüzen 🤖 asistan. Gramer, taktik, kelime sor; net hesabı ve 30 günlük plan iste.",
    tip: "'abundant ne demek', 'tenses nedir', 'net nasıl hesaplanır' dene!",
  },
  {
    emoji: "👤",
    title: "Avatar & Kayıt",
    desc: "500 avatar arasından profilini seç. Tüm ilerlemen (kelime, gramer, sınav) tarayıcında kaydedilir.",
    tip: "Aynı tarayıcıyı kullan, ilerlemen hep burada kanka.",
  },
];

export default function KilavuzPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-2">
          📘 <span className="gradient-text">Kullanım Kılavuzu</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Kanka, siteyi 2 dakikada çöz! Her modülün ne işe yaradığı ve gizli ipuçları aşağıda. 👇
        </p>
      </header>

      <div className="space-y-4">
        {SECTIONS.map((s, i) => (
          <Reveal key={i} delay={(i % 3) * 70}>
            <div className="card-vibrant p-6 flex gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-tr from-pink-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-3xl">
                {s.emoji}
              </div>
              <div>
                <h2 className="font-black text-lg mb-1">{s.title}</h2>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-amber-300/90 mt-2 leading-relaxed">💡 {s.tip}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform"
        >
          🚀 Hadi Başlayalım Kanka!
        </Link>
      </div>
    </div>
  );
}

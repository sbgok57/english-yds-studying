import Link from "next/link";
import { CountUp, Reveal } from "@/components/animations";
import HomeGreeting from "@/components/HomeGreeting";
import ProgressPanel from "@/components/ProgressPanel";
import DailyTasksPanel from "@/components/DailyTasksPanel";
import MotivationBox from "@/components/MotivationBox";

const STATIONS = [
  {
    href: "/vocabulary/inventory",
    emoji: "📦",
    title: "Kelime Envanteri (A1–C2)",
    desc: "485 akademik kelime, CEFR seviye filtreleri, kişisel not defteri ve güvenli CSV dışa aktarımı.",
    cta: "Envanteri Aç",
    color: "from-cyan-500 to-blue-600",
  },
  {
    href: "/study-plans",
    emoji: "📅",
    title: "YDS Çalışma Programları",
    desc: "7–180 günlük hedefe özel çalışma planları, günlük görev takibi ve CEFR A1–C2 seviye rehberleri.",
    cta: "Planları İncele",
    color: "from-purple-500 to-indigo-600",
  },
  {
    href: "/level-test",
    emoji: "📊",
    title: "Mini Seviye Tespit Sınavı",
    desc: "42 soruluk bilimsel teşhis sınavı ile gerçek CEFR seviyeni ve güçlü/zayıf becerilerini öğren.",
    cta: "Seviyeni Ölç",
    color: "from-emerald-500 to-green-600",
  },
  {
    href: "/vocabulary/flashcards",
    emoji: "🃏",
    title: "3D Flashcards & Görsel Hafıza",
    desc: "Kart çevirme animasyonu, 3D dönen kelime küpü ve SM-2 tekrar algoritması.",
    cta: "Öğrenmeye Başla",
    color: "from-pink-500 to-rose-500",
  },
  {
    href: "/exams",
    emoji: "⏱️",
    title: "180 dk Online Optik Sınav",
    desc: "2013-2026 çıkmış sınavlar ve özgün denemeler. Baloncuk formu ve otomatik net hesabı.",
    cta: "Sınavları İncele",
    color: "from-amber-500 to-orange-500",
  },
  {
    href: "/grammar",
    emoji: "📖",
    title: "19 Animasyonlu Gramer Konusu",
    desc: "A1 sadeliğinde Türkçe anlatım, renk kodlu formüller, adım adım animasyonlar ve tuzak uyarıları.",
    cta: "Konuları Keşfet",
    color: "from-violet-500 to-purple-600",
  },
  {
    href: "/tactics",
    emoji: "🎯",
    title: "11 YDS Soru Tipi ve Taktikleri",
    desc: "Her soru tipi için hafıza kodlamaları, adım adım çözüm algoritmaları ve çözümlü örnek sorular.",
    cta: "Taktikleri Oku",
    color: "from-emerald-500 to-teal-600",
  },
  {
    href: "/reading",
    emoji: "🔬",
    title: "Reader at Work Tarzı Reading Lab",
    desc: "Özgün akademik okuma parçaları, tıkla-açılır kelime sözlüğü ve 5 açık uçlu kavrama sorusu.",
    cta: "Okumaya Başla",
    color: "from-sky-500 to-blue-600",
  },
  {
    href: "/games",
    emoji: "🎮",
    title: "Oyun Merkezi (Wordwall tadında)",
    desc: "Eşleştirme, Köstebek Vur, Çarkıfelek, Doğru/Yanlış ve Dinle & Seç — her doğru cevapta havai fişek!",
    cta: "Oyna",
    color: "from-rose-500 to-red-600",
  },
  {
    href: "/arsiv",
    emoji: "🗄️",
    title: "2013-2026 YDS Arşivi",
    desc: "Tüm YDS dönemleri + o sınavlarda çıkan kelimeler (Türkçe anlamlarıyla).",
    cta: "Arşivi Aç",
    color: "from-amber-500 to-yellow-600",
  },
  {
    href: "/kilavuz",
    emoji: "📘",
    title: "Kullanım Kılavuzu",
    desc: "Siteyi 2 dakikada çöz: her modül + gizli ipuçları kanka dilinde.",
    cta: "Kılavuzu Oku",
    color: "from-sky-500 to-indigo-600",
  },
  {
    href: "/avatars",
    emoji: "👤",
    title: "1000 Profil & Maskot Avatarı",
    desc: "Profilini kişiselleştir: 7 kategori, 1000 benzersiz, tamamen çevrimdışı çalışan SVG karakter.",
    cta: "Avatar Seç",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    href: "/import",
    emoji: "📤",
    title: "PDF & Quizlet İçe Aktarma",
    desc: "Quizlet dışa aktarımını yapıştır-parse et-onayla akışı ve PDF metin içe aktarma.",
    cta: "İçe Aktar",
    color: "from-cyan-500 to-teal-600",
  },
  {
    href: "/vocabulary/flashcards?mode=fsrs",
    emoji: "🧠",
    title: "FSRS 2.0 Akıllı Bellek Laboratuvarı",
    desc: "Bilişsel unutma eğrisi, kişiselleştirilmiş aralıklı tekrar sıklığı ve kalıcı uzun süreli hafıza.",
    cta: "Laboratuvarı Aç",
    color: "from-purple-600 to-pink-600",
  },
];

const STATS = [
  { to: 1000, suffix: "", label: "Benzersiz Avatar", emoji: "👤" },
  { to: 1000, suffix: "", label: "Sınav Sorusu Bankası", emoji: "📝" },
  { to: 19, suffix: "", label: "Animasyonlu Gramer Konusu", emoji: "📖" },
  { to: 11, suffix: "", label: "Soru Tipi Taktikleri", emoji: "🎯" },
];

export default function Home() {
  return (
    <div>
      <HomeGreeting />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HERO */}
      <section className="text-center py-14 space-y-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300 anim-pulse-glow">
            🚀 YDS Zirve Maratonu · 5000 Değişen Motivasyon
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-lg text-white/70 max-w-2xl mx-auto italic">
            “Kanka, bugün çalıştığın her kelime, yarınki netinin teminatıdır. Başarı seninle! ✨”
          </p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              YDS'yi Ezberlemeden,
            </span>
            <br />
            <span className="text-white">Görsel Hafızayla Kodlayarak Fethedin!</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
            Kanka, burası tam sana göre: 3D dönebilen kelime küpleri, 180 dakikalık gerçek online
            optik form, 1000 avatar, animasyonlu gramer anlatımları ve 11 soru tipine özel taktiklerle
            YDS'de sıfır hata!
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/vocabulary/flashcards"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform"
            >
              🃏 3D Flashcards Başlat
            </Link>
            <Link
              href="/exams/yds-2024-ilkbahar"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
            >
              180 dk Optik Sınav Çöz
            </Link>
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="my-16">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">⚡</span>
            <h2 className="text-xl sm:text-2xl font-black text-center tracking-tight">
              Platform <span className="gradient-text">Güç Göstergeleri</span>
            </h2>
            <span className="text-2xl">✨</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="card-vibrant p-6 text-center">
              <div className="text-3xl mb-1">{s.emoji}</div>
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-cyan-300">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/50 mt-1 font-semibold">{s.label}</div>
            </div>
          </Reveal>
        ))}
        </div>
      </section>

      {/* PROGRESS */}
      <ProgressPanel />

      {/* ADAPTIVE DAILY TASKS */}
      <DailyTasksPanel />

      {/* MOTIVATION OF THE DAY */}
      <MotivationBox context="home" className="my-12" />

      {/* STATIONS */}
      <section className="my-16">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl">🧭</span>
            <h2 className="text-3xl font-black text-center">
              Öğrenme ve Simülasyon <span className="gradient-text">İstasyonları</span>
            </h2>
            <span className="text-3xl">🚀</span>
          </div>
          <p className="text-center text-white/50 mb-10">
            Her aşamada renkli, animasyonlu ve görsel hafıza destekli modüller
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATIONS.map((s, i) => (
            <Reveal key={s.href} delay={(i % 3) * 90}>
              <Link
                href={s.href}
                className="card-vibrant group p-6 flex flex-col h-full hover:border-white/25 transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {s.emoji}
                </div>
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-4 text-sm font-bold text-cyan-300 group-hover:translate-x-1 transition-transform">
                  {s.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="my-16">
        <Reveal>
          <div className="card-vibrant p-10 text-center bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              👑 Hazır mısın kanka? <span className="gradient-text">Optik form seni bekliyor.</span>
            </h3>
            <p className="text-white/60 mb-6">80 net hedefine giden yol, doğru taktik + düzenli tekrardan geçer. Kral olma vakti! 👑</p>
            <Link
              href="/exams"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform"
            >
              Sınav Salonuna Gir ⏱️
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
    </div>
  );
}

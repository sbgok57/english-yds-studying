import Link from "next/link";
import { CountUp, Reveal } from "@/components/animations";
import HomeGreeting from "@/components/HomeGreeting";
import ProgressPanel from "@/components/ProgressPanel";
import DailyTasksPanel from "@/components/DailyTasksPanel";
import MotivationBox from "@/components/MotivationBox";
import ExamModeSwitcher from "@/components/ExamModeSwitcher";
import ExamProgramsSection from "@/components/ExamPrograms";
import NavigationSectionIcon from "@/components/navigation/NavigationSectionIcon";

const STATIONS = [
  {
    href: "/vocabulary/inventory",
    icon: "library",
    title: "Kelime Envanteri (A1–C2)",
    desc: "485 akademik kelime, CEFR seviye filtreleri, kişisel not defteri ve güvenli CSV dışa aktarımı.",
    cta: "Envanteri Aç",
    color: "from-cyan-500 to-blue-600",
  },
  {
    href: "/study-plans",
    icon: "calendar-days",
    title: "Sınav Çalışma Programları",
    desc: "YDS, YDT ve YÖKDİL (Sağlık, Fen, Sosyal) için 7–180 günlük hedefe özel çalışma planları, günlük takvim ve CEFR A1–C2 seviye rehberleri.",
    cta: "Programları İncele",
    color: "from-purple-500 to-indigo-600",
  },
  {
    href: "/level-test",
    icon: "compass",
    title: "Mini Seviye Tespit Sınavı",
    desc: "42 soruluk bilimsel teşhis sınavı ile gerçek CEFR seviyeni ve güçlü/zayıf becerilerini öğren.",
    cta: "Seviyeni Ölç",
    color: "from-emerald-500 to-green-600",
  },
  {
    href: "/vocabulary/flashcards",
    icon: "book-open",
    title: "3D Flashcards & Görsel Hafıza",
    desc: "Kart çevirme animasyonu, 3D dönen kelime küpü ve SM-2 tekrar algoritması.",
    cta: "Öğrenmeye Başla",
    color: "from-pink-500 to-rose-500",
  },
  {
    href: "/exams",
    icon: "clipboard-list",
    title: "180 dk Online Optik Sınav",
    desc: "2013-2026 çıkmış sınavlar ve özgün denemeler. Baloncuk formu ve otomatik net hesabı.",
    cta: "Sınavları İncele",
    color: "from-amber-500 to-orange-500",
  },
  {
    href: "/grammar",
    icon: "graduation-cap",
    title: "19 Animasyonlu Gramer Konusu",
    desc: "A1 sadeliğinde Türkçe anlatım, renk kodlu formüller, adım adım animasyonlar ve tuzak uyarıları.",
    cta: "Konuları Keşfet",
    color: "from-violet-500 to-purple-600",
  },
  {
    href: "/tactics",
    icon: "list-checks",
    title: "11 YDS Soru Tipi ve Taktikleri",
    desc: "Her soru tipi için hafıza kodlamaları, adım adım çözüm algoritmaları ve çözümlü örnek sorular.",
    cta: "Taktikleri Oku",
    color: "from-emerald-500 to-teal-600",
  },
  {
    href: "/reading",
    icon: "audio-lines",
    title: "Reader at Work Tarzı Reading Lab",
    desc: "Özgün akademik okuma parçaları, tıkla-açılır kelime sözlüğü ve 5 açık uçlu kavrama sorusu.",
    cta: "Okumaya Başla",
    color: "from-sky-500 to-blue-600",
  },
  {
    href: "/games",
    icon: "zap",
    title: "Oyun Merkezi (Wordwall tadında)",
    desc: "Eşleştirme, Köstebek Vur, Çarkıfelek, Doğru/Yanlış ve Dinle & Seç — her doğru cevapta havai fişek!",
    cta: "Oyna",
    color: "from-rose-500 to-red-600",
  },
  {
    href: "/arsiv",
    icon: "archive",
    title: "2013-2026 YDS Arşivi",
    desc: "Tüm YDS dönemleri + o sınavlarda çıkan kelimeler (Türkçe anlamlarıyla).",
    cta: "Arşivi Aç",
    color: "from-amber-500 to-yellow-600",
  },
  {
    href: "/kilavuz",
    icon: "help-circle",
    title: "Kullanım Kılavuzu",
    desc: "Siteyi 2 dakikada çöz: her modül + gizli ipuçları kanka dilinde.",
    cta: "Kılavuzu Oku",
    color: "from-sky-500 to-indigo-600",
  },
  {
    href: "/avatars",
    icon: "user-plus",
    title: "Avatar ve Portre Galerisi",
    desc: "Özgün portrelerden birini seç, kendi illüstrasyon avatarını düzenle ya da kendi görselini yükle.",
    cta: "Avatar Seç",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    href: "/import",
    icon: "file-up",
    title: "PDF & Quizlet İçe Aktarma",
    desc: "Quizlet dışa aktarımını yapıştır-parse et-onayla akışı ve PDF metin içe aktarma.",
    cta: "İçe Aktar",
    color: "from-cyan-500 to-teal-600",
  },
  {
    href: "/writing",
    icon: "pen-line",
    title: "Writing & Cümle Kurma Lab",
    desc: "Akademik cümle mimarisi (S+V+O+MPT), bağlaç şifreleri, devrik yapılar ve interaktif paraphrase.",
    cta: "Yazmaya Başla",
    color: "from-indigo-500 to-purple-600",
  },
  {
    href: "/listening",
    icon: "headphones",
    title: "Listening & Dinleme Lab",
    desc: "İngiliz, Amerikan ve Avustralya aksanlarında dinleme ve telaffuz çalışmaları.",
    cta: "Dinlemeye Başla",
    color: "from-amber-500 to-orange-600",
  },
  {
    href: "/speaking",
    icon: "mic-vocal",
    title: "AI Speaking Lab",
    desc: "Yapay zeka ile sesli/yazılı interaktif diyalog pratiği ve telaffuz geribildirimi.",
    cta: "Konuşmaya Başla",
    color: "from-rose-500 to-pink-600",
  },
  {
    href: "/vocabulary/flashcards?mode=fsrs",
    icon: "layers-3",
    title: "FSRS 2.0 Akıllı Bellek Laboratuvarı",
    desc: "Bilişsel unutma eğrisi, kişiselleştirilmiş aralıklı tekrar sıklığı ve kalıcı uzun süreli hafıza.",
    cta: "Laboratuvarı Aç",
    color: "from-purple-600 to-pink-600",
  },
 ] as const;

const STATS = [
  { to: 6, suffix: "", label: "Özgün portre", icon: "user-plus", href: "/avatars" },
  { to: 1000, suffix: "+", label: "Sınav Sorusu Bankası", icon: "archive", href: "/exams" },
  { to: 19, suffix: "", label: "Animasyonlu Gramer Konusu", icon: "graduation-cap", href: "/grammar" },
  { to: 11, suffix: "", label: "Soru Tipi Taktikleri", icon: "list-checks", href: "/tactics" },
 ] as const;

export default function Home() {
  return (
    <div>
      <HomeGreeting />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* HERO */}
      <section className="text-center py-10 sm:py-14 space-y-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 text-xs font-black text-amber-300 anim-pulse-glow">
            DİL MASTER · Hedefine birlikte, adım adım!
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto italic font-medium">
            “Kanka, bugün attığın her küçük adım yarınki hedefini biraz daha yaklaştırıyor.”
          </p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300">
              DİL MASTER:
            </span>
            <br />
            <span className="text-white">YDS, YDT ve YÖKDİL yolunda yanındayız!</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Biraz kelime, biraz pratik, bolca moral! Denemeler, görsel kelime kartları, gramer,
            okuma-dinleme-yazma-konuşma çalışmaları ve sınav arşiviyle hedefe beraber ilerleyelim.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 text-sm sm:text-base font-bold text-fuchsia-100 shadow-lg shadow-fuchsia-950/20">
            Kahveni kap gel; kelimeler bugün senden hızlı kaçamayacak!
          </p>
        </Reveal>

        {/* 3 BÜYÜK SINAV SEÇİM MERKEZİ (YDS, YDT, YÖKDİL) */}
        <Reveal delay={280}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4 max-w-5xl mx-auto">
            {/* 1. YDS KART */}
            <Link
              href="/yds"
              className="p-5 rounded-3xl bg-gradient-to-br from-cyan-950/80 via-slate-900 to-slate-950 border-2 border-cyan-400/40 hover:border-cyan-300 transition-all hover:scale-[1.02] shadow-xl shadow-cyan-950/40 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="relative h-12 w-12 overflow-hidden rounded-xl shadow-md">
                    <NavigationSectionIcon icon="compass" className="h-7 w-7" />
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-mono">
                    180 dk • 80 Soru
                  </span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  YDS Sınav Merkezi
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Kamu personeli, doçentlik ve yüksek lisans adayları için 2013-2026 çıkmış sınavlar, akademik kelimeler ve taktikler.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
                <span>YDS Bölümüne Gir</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* 2. YDT KART */}
            <Link
              href="/ydt"
              className="p-5 rounded-3xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-950 border-2 border-amber-400/40 hover:border-amber-300 transition-all hover:scale-[1.02] shadow-xl shadow-amber-950/40 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="relative h-12 w-12 overflow-hidden rounded-xl shadow-md">
                    <NavigationSectionIcon icon="school" className="h-7 w-7" />
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 font-mono">
                    120 dk • 80 Soru
                  </span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                  YDT (LYS-5) Merkezi
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Üniversite YKS-Dil adayları için soru başı 1.5 dk tempo rehberi, lise müfredatına tam uyum ve 72 özgün deneme.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>YDT Bölümüne Gir</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* 3. YÖKDİL KART */}
            <Link
              href="/yokdil"
              className="p-5 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 border-2 border-purple-400/40 hover:border-purple-300 transition-all hover:scale-[1.02] shadow-xl shadow-purple-950/40 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="relative h-12 w-12 overflow-hidden rounded-xl shadow-md">
                    <NavigationSectionIcon icon="globe-2" className="h-7 w-7" />
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono">
                    Sağlık · Fen · Sosyal
                  </span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">
                  YÖKDİL Alan Merkezi
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Sağlık, fen ve sosyal bilim alanlarına özel terminoloji havuzları, makale okumaları ve alan denemeleri.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-purple-400">
                <span>YÖKDİL Bölümüne Gir</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </Reveal>

        {/* SINAV MODU SEÇİCİ KUTUSU (ÖĞRENCİ KENDİ SINAVINI SEÇER) */}
        <Reveal delay={340}>
          <div className="max-w-4xl mx-auto pt-2">
            <ExamModeSwitcher />
          </div>
        </Reveal>
      </section>

      {/* ENTERPRISE SINAV ÇALIŞMA PROGRAMLARI (YDS, YDT, YÖKDİL DİNAMİK VERİ MODELİ) */}
      <Reveal delay={150}>
        <ExamProgramsSection />
      </Reveal>

      {/* STATS */}
      <section className="my-16">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-center tracking-tight">
              Platform <span className="gradient-text">Güç Göstergeleri</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <Link
              href={s.href}
              className="card-vibrant p-6 text-center group cursor-pointer block hover:scale-[1.03] hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
              title={`${s.label} bölümünü aç`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative mx-auto mb-2 h-14 w-14 overflow-hidden rounded-2xl shadow-lg shadow-fuchsia-500/20 group-hover:scale-110 transition-transform duration-300">
                <NavigationSectionIcon icon={s.icon} className="h-8 w-8" />
              </div>
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-cyan-300">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/70 mt-1 font-semibold group-hover:text-white transition-colors">{s.label}</div>
              <div className="text-[11px] text-cyan-400/80 mt-1 font-bold flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Bölümü Aç</span>
                <span>→</span>
              </div>
            </Link>
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
            <h2 className="text-3xl font-black text-center">
              Öğrenme ve Simülasyon <span className="gradient-text">İstasyonları</span>
            </h2>
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
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-tr ${s.color} p-1 mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <NavigationSectionIcon icon={s.icon} className="h-9 w-9 text-white" />
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
              Hazır mısın kanka? <span className="gradient-text">Optik form seni bekliyor.</span>
            </h3>
            <p className="text-white/60 mb-6">80 net hedefine giden yol, doğru taktik + düzenli tekrardan geçer. Güzel bir ilerleme için tam zamanı.</p>
            <Link
              href="/exams"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform"
            >
              Sınav salonuna gir
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
    </div>
  );
}

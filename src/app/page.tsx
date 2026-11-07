import Link from "next/link";
import { Reveal } from "@/components/animations";
import HomeGreeting from "@/components/HomeGreeting";
import ProgressPanel from "@/components/ProgressPanel";
import DailyTasksPanel from "@/components/DailyTasksPanel";
import MotivationBox from "@/components/MotivationBox";
import ExamStudyChooser from "@/components/ExamStudyChooser";

export default function Home() {
  return (
    <div>
      <HomeGreeting />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="space-y-5 py-8 text-center sm:py-12" aria-labelledby="home-title">
          <Reveal>
            <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-xs font-black text-amber-200">
              DİL MASTER · Hedefine birlikte, adım adım!
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="home-title" className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent">DİL MASTER</span>
              <br />
              <span className="text-white">YDS, YDT ve YÖKDİL yolunda yanındayız!</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              Biraz kelime, biraz pratik, bolca moral. Önce hedef sınavını seç; ardından o sınava uygun kelime,
              gramer, oyun, okuma, dinleme, konuşma, yazma ve sınav alıştırmalarına tek yerden geç.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="inline-block rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-bold text-fuchsia-100">
              Kahveni kap gel; bugün küçük bir adım bile ilerlemedir.
            </p>
          </Reveal>
        </section>

        <ExamStudyChooser />

        <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-label="Öğrenci çalışma özeti">
          <ProgressPanel />
          <DailyTasksPanel />
        </section>
        <MotivationBox context="home" className="my-10" />

        <section className="my-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-9">
          <h2 className="text-2xl font-black text-white">Nereden başlayacağını mı düşünüyorsun?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/65">Önce seviyeni ölç, sonra seçtiğin sınava göre çalışma alanını kur.</p>
          <Link href="/level-test" className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:brightness-110">
            Mini seviye testini aç
          </Link>
        </section>
      </main>
    </div>
  );
}

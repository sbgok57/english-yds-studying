"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TenseTimeline from "./TenseTimeline";

interface GrammarVisualProps {
  slug: string;
}

export default function GrammarVisuals({ slug }: GrammarVisualProps) {
  const [activeStep, setActiveStep] = useState(0);

  // 12 Tense için TenseTimeline haritası
  const TENSE_CONFIGS: Record<
    string,
    {
      title: string;
      nowPosition?: number;
      events: { position: number; emoji: string; label: string; isDuration?: boolean; durationEnd?: number }[];
      sentence: string;
    }
  > = {
    "simple-present": {
      title: "Simple Present: Değişmez Doğrular & Rutin Döngü",
      nowPosition: 50,
      events: [
        { position: 20, emoji: "🔄", label: "Dün de doğruydu" },
        { position: 50, emoji: "☀️", label: "Bugün de doğru" },
        { position: 80, emoji: "🌍", label: "Gelecekte de doğru" },
      ],
      sentence: "Water boils at 100°C. → Zaman sınırı yoktur; her zaman geçerli evrensel gerçek!",
    },
    "present-continuous": {
      title: "Present Continuous: Şu Anda Akıp Giden Süreç",
      nowPosition: 55,
      events: [
        { position: 45, emoji: "🏃", label: "Az önce başladı", isDuration: true, durationEnd: 68 },
        { position: 55, emoji: "⚡", label: "Şu an devam ediyor!" },
      ],
      sentence: "Global temperatures are rising rapidly. → Tam şu an gerçekleşmekte olan dinamik değişim.",
    },
    "present-perfect": {
      title: "Present Perfect: Geçmişten Bugüne Köprü Zaman",
      nowPosition: 65,
      events: [
        { position: 25, emoji: "🏠", label: "2015: Taşındı", isDuration: true, durationEnd: 65 },
        { position: 65, emoji: "✨", label: "Hâlâ orada yaşıyor!" },
      ],
      sentence: "She HAS LIVED in Ankara since 2015. → Geçmişte başladı, etkisi ve devamlılığı ŞİMDİ geçerli!",
    },
    "present-perfect-continuous": {
      title: "Present Perfect Continuous: Kesintisiz Efor & Vurgulanan Süreç",
      nowPosition: 68,
      events: [
        { position: 20, emoji: "📚", label: "Sabah 08:00", isDuration: true, durationEnd: 68 },
        { position: 68, emoji: "🌊", label: "4 saattir aralıksız!" },
      ],
      sentence: "They HAVE BEEN STUDYING for 4 hours. → Eylemin kesintisiz devam edişi vurgulanıyor.",
    },
    "simple-past": {
      title: "Simple Past: Geçmişte Kapanan Kutu",
      nowPosition: 75,
      events: [
        { position: 25, emoji: "📜", label: "1923'te oldu bitti" },
      ],
      sentence: "The Republic was founded in 1923. → Geçmişte kaldı, kutu kapandı, bugüne uzanmaz.",
    },
    "past-continuous": {
      title: "Past Continuous: Geçmişte Devam Ederken Kesilme",
      nowPosition: 80,
      events: [
        { position: 30, emoji: "🎞️", label: "Yürüyüş yapıyordu (aralıksız)", isDuration: true, durationEnd: 55 },
        { position: 45, emoji: "⚡", label: "Telefon çaldı! (Kesilme)" },
      ],
      sentence: "While I was walking, the phone rang. → Uzun süren eylem (was Ving), anlık olayla (V2) kesildi.",
    },
    "past-perfect": {
      title: "Past Perfect: Geçmişin Geçmişi (Had V3)",
      nowPosition: 80,
      events: [
        { position: 20, emoji: "1️⃣", label: "1. Olay: Tren gitti (had left)" },
        { position: 45, emoji: "2️⃣", label: "2. Olay: İstasyona vardım (arrived)" },
      ],
      sentence: "When I arrived at the station, the train had already left. → İki geçmişten önce olanı had V3 alır.",
    },
    "past-perfect-continuous": {
      title: "Past Perfect Continuous: Geçmişteki Bir Ana Kadar Süren Süreç",
      nowPosition: 80,
      events: [
        { position: 15, emoji: "⏳", label: "3 saattir yağıyordu", isDuration: true, durationEnd: 50 },
        { position: 50, emoji: "🛑", label: "Sonunda durdu" },
      ],
      sentence: "It had been raining for 3 hours before it stopped. → Geçmişteki referans noktasına kadar süren efor.",
    },
    "simple-future": {
      title: "Simple Future (Will): Anlık Karar ve Tahmin",
      nowPosition: 40,
      events: [
        { position: 40, emoji: "💡", label: "Şimdi karar verildi" },
        { position: 75, emoji: "🔮", label: "Gelecekte yapılacak" },
      ],
      sentence: "I think artificial intelligence will transform healthcare by 2030.",
    },
    "be-going-to": {
      title: "Be Going To: Planlanmış & Belirtisi Olan Gelecek",
      nowPosition: 45,
      events: [
        { position: 45, emoji: "☁️", label: "Kara bulutlar var (Kanıt)" },
        { position: 70, emoji: "🌧️", label: "Yağmur yağacak!" },
      ],
      sentence: "Look at those dark clouds; it is going to rain! → Elde somut kanıt var.",
    },
    "future-continuous": {
      title: "Future Continuous: Gelecekte O Anda Devam Edecek Eylem",
      nowPosition: 30,
      events: [
        { position: 60, emoji: "🛫", label: "Uçuyor olacağım", isDuration: true, durationEnd: 85 },
      ],
      sentence: "This time tomorrow, I will be flying over the Alps.",
    },
    "future-perfect": {
      title: "Future Perfect: Gelecekte Bir Ana Kadar Tamamlanmış Olacak",
      nowPosition: 30,
      events: [
        { position: 40, emoji: "🏗️", label: "İnşaat süreci", isDuration: true, durationEnd: 80 },
        { position: 80, emoji: "🏁", label: "By 2030: Tamamlanmış olacak!" },
      ],
      sentence: "By 2030, scientists will have developed new energy grids. → By + gelecek zaman = Will have V3.",
    },
    "tenses": {
      title: "Tenses & Time Harmony: Zaman Uyumu Köprüsü",
      nowPosition: 50,
      events: [
        { position: 20, emoji: "📜", label: "Past Tarafı" },
        { position: 50, emoji: "🌉", label: "Since Köprüsü" },
        { position: 80, emoji: "☀️", label: "Present Tarafı" },
      ],
      sentence: "Since + Simple Past (V2), Present Perfect (have/has V3). Zaman uyumunun tek yasal köprüsü!",
    },
  };

  // Eğer Tense ise TenseTimeline bileşenini kullan
  const tenseConfig = TENSE_CONFIGS[slug];
  if (tenseConfig) {
    return (
      <TenseTimeline
        title={tenseConfig.title}
        nowPosition={tenseConfig.nowPosition ?? 65}
        events={tenseConfig.events}
        sentence={tenseConfig.sentence}
      />
    );
  }

  // 13. Passive Voice: Özne - Nesne Yer Değiştirme Animasyonu
  if (slug === "passive-voice") {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl text-white my-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 text-base md:text-lg">
            🔄 Passive Voice: Özne-Nesne Yer Değiştirme
          </h4>
          <button
            onClick={() => setActiveStep((s) => (s + 1) % 3)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow"
          >
            Adımı Değiştir ({activeStep + 1}/3)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className={`p-4 rounded-2xl border-2 transition-all ${activeStep === 0 ? "border-amber-400 bg-amber-500/10" : "border-white/10 bg-white/5"}`}>
            <span className="text-xs text-amber-300 font-mono font-bold block mb-1">1. AKTİF CÜMLE</span>
            <p className="text-base font-semibold">
              <span className="text-emerald-400 font-bold">[Scientists]</span> discovered{" "}
              <span className="text-cyan-400 font-bold">[the cure]</span>.
            </p>
            <p className="text-xs text-white/60 mt-1">Özne eylemi yapan kişidir.</p>
          </div>

          <div className={`p-4 rounded-2xl border-2 transition-all ${activeStep >= 1 ? "border-cyan-400 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
            <span className="text-xs text-cyan-300 font-mono font-bold block mb-1">2. PASİF CÜMLE (BE + V3)</span>
            <p className="text-base font-semibold">
              <span className="text-cyan-400 font-bold">[The cure]</span> was discovered{" "}
              <span className="text-emerald-400 font-bold">(by scientists)</span>.
            </p>
            <p className="text-xs text-white/60 mt-1">Nesne başa geldi, eylem 'be + V3' formatına dönüştü.</p>
          </div>
        </div>

        <div className="bg-black/40 rounded-2xl p-3 text-center text-xs text-yellow-200 border border-white/10">
          🧠 <strong>Altın Kural:</strong> YDS'de boşluğun sağında nesne yoksa ve 'by/with' ipucu varsa şıkların %90'ı <strong>Passive (be + V3)</strong>'tür!
        </div>
      </div>
    );
  }

  // 14. Conditionals: Olasılık Kapıları Animasyonu
  if (slug === "conditionals") {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-purple-950 border border-purple-500/30 rounded-3xl p-6 shadow-2xl text-white my-6">
        <h4 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300 text-base md:text-lg mb-4">
          🔀 If Clauses: 4 Olasılık Kapısı & Zaman Eşleşmeleri
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
          <div className="bg-white/5 border border-white/15 p-3 rounded-2xl hover:border-emerald-400 transition-colors">
            <span className="text-lg block mb-1">🚪 0</span>
            <strong className="text-emerald-400 block font-black">Type 0 (Doğa Kanunu)</strong>
            <p className="text-white/70 mt-1">If + V1, V1</p>
            <span className="text-[10px] text-white/50 block mt-1">%100 Kesin</span>
          </div>
          <div className="bg-white/5 border border-white/15 p-3 rounded-2xl hover:border-cyan-400 transition-colors">
            <span className="text-lg block mb-1">🚪 1</span>
            <strong className="text-cyan-400 block font-black">Type 1 (Gerçek Olasılık)</strong>
            <p className="text-white/70 mt-1">If + V1, will + V1</p>
            <span className="text-[10px] text-white/50 block mt-1">%50 Olasılık</span>
          </div>
          <div className="bg-white/5 border border-white/15 p-3 rounded-2xl hover:border-amber-400 transition-colors">
            <span className="text-lg block mb-1">🚪 2</span>
            <strong className="text-amber-400 block font-black">Type 2 (Hayal / Varsayım)</strong>
            <p className="text-white/70 mt-1">If + V2, would + V1</p>
            <span className="text-[10px] text-white/50 block mt-1">Şu an gerçek dışı</span>
          </div>
          <div className="bg-white/5 border border-white/15 p-3 rounded-2xl hover:border-rose-400 transition-colors">
            <span className="text-lg block mb-1">🚪 3</span>
            <strong className="text-rose-400 block font-black">Type 3 (Geçmiş Pişmanlık)</strong>
            <p className="text-white/70 mt-1">If + had V3, would have V3</p>
            <span className="text-[10px] text-white/50 block mt-1">%0 İmkânsız Geçmiş</span>
          </div>
        </div>
      </div>
    );
  }

  // 15. Relative Clauses: Cümle Birleştirme Animasyonu
  if (slug === "relative-clauses") {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-teal-950 border border-teal-500/30 rounded-3xl p-6 shadow-2xl text-white my-6">
        <h4 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-yellow-300 text-base md:text-lg mb-3">
          🔗 Relative Clauses: İki Cümlenin İsim Köprüsüyle Birleşmesi
        </h4>
        <div className="space-y-2 text-sm bg-black/40 p-4 rounded-2xl border border-white/10">
          <p className="text-white/70">
            1. Cümle: I met <span className="text-yellow-300 font-bold">a scientist</span>.
          </p>
          <p className="text-white/70">
            2. Cümle: <span className="text-yellow-300 font-bold">She</span> won the Nobel Prize.
          </p>
          <div className="pt-2 border-t border-white/15 text-emerald-300 font-semibold">
            ✨ Birleşik Hali: I met a scientist <strong className="text-white bg-teal-600 px-2 py-0.5 rounded-lg">WHO</strong> won the Nobel Prize.
          </div>
        </div>
      </div>
    );
  }

  // Standart Genel Animasyon Rozeti
  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-5 shadow-xl text-white my-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-2xl flex-shrink-0">
        💡
      </div>
      <div>
        <h4 className="font-bold text-sm text-yellow-300">Görsel Hafıza & Çözüm Mantığı</h4>
        <p className="text-xs text-white/80 mt-0.5">
          Bu konuda formülü ezberlemek yerine cümlenin mantıksal akışını ve sinyal sözcüklerini zihninizde kodlayın!
        </p>
      </div>
    </div>
  );
}

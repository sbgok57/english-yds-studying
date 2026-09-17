"use client";

import { useEffect, useState } from "react";
import { useUsage } from "@/lib/store";

const OPENERS = ["Kanka", "Kral", "Şampiyon", "YDS savaşçısı", "Zirve yolcusu", "Net avcısı", "Kelime ustası", "Gramer kahramanı", "Azimli öğrenci", "Efsane aday"];
const ACTIONS = ["bugünkü küçük adımın", "çözdüğün her soru", "öğrendiğin her kelime", "tekrar ettiğin her kural", "okuduğun her paragraf", "düzelttiğin her yanlış", "ayırdığın her dakika", "kurduğun her doğru cümle", "bitirdiğin her test", "vazgeçmediğin her an"];
const RESULTS = ["seni zirveye taşıyor", "yarının netine dönüşüyor", "hedefini biraz daha yaklaştırıyor", "özgüvenini büyütüyor", "YDS kasını güçlendiriyor", "başarı zincirine ekleniyor", "sınav hızını artırıyor", "bilgini kalıcılaştırıyor", "rakiplerinin önüne geçiriyor", "80 net yolunu açıyor"];
const ENDS = ["Devam! 🚀", "Bugün de senin günün! ✨", "Pes etmek yok! 💪", "Zirve seni bekliyor! 👑", "Bir soru daha! 🎯"];
export const MOTIVATION_COUNT = OPENERS.length * ACTIONS.length * RESULTS.length * ENDS.length; // 5000

function motivationAt(index: number) {
  let n = ((index % MOTIVATION_COUNT) + MOTIVATION_COUNT) % MOTIVATION_COUNT;
  const end = ENDS[n % ENDS.length]; n = Math.floor(n / ENDS.length);
  const result = RESULTS[n % RESULTS.length]; n = Math.floor(n / RESULTS.length);
  const action = ACTIONS[n % ACTIONS.length]; n = Math.floor(n / ACTIONS.length);
  const opener = OPENERS[n % OPENERS.length];
  return `${opener}, ${action} ${result}. ${end}`;
}

export default function HomeGreeting() {
  const { usage } = useUsage();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Her ana sayfa girişinde sıradaki mesaja geçer; tekrar şansa bırakılmaz.
    try {
      const key = "yds-zirve-maraton-visit";
      const previous = Number(window.localStorage.getItem(key) || "-1");
      const next = (Number.isFinite(previous) ? previous + 1 : 0) % MOTIVATION_COUNT;
      window.localStorage.setItem(key, String(next));
      setMessageIndex(next);
    } catch {
      setMessageIndex(Date.now() % MOTIVATION_COUNT);
    }
  }, []);

  const sessions = usage.sessions || 1;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="card-vibrant px-5 py-3 flex items-center gap-3 border-l-4 border-l-cyan-400/60">
        <span className="text-2xl">👋</span>
        <p className="text-sm text-white/80">
          <span className="font-black text-cyan-300">YDS Zirve Maratonu #{messageIndex + 1}</span>{" "}
          <span className="text-white/40">· {sessions}. ziyaret ·</span>{" "}{motivationAt(messageIndex)}
        </p>
      </div>
    </div>
  );
}

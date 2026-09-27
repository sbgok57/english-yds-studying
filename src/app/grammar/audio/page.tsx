import type { Metadata } from "next";
import Link from "next/link";
import AudioGrammarPlayer from "@/components/AudioGrammarPlayer";

export const metadata: Metadata = {
  title: "Sesli Gramer & Hafıza Kodları — YDS Master",
  description:
    "YDS zıtlık ve sebep bağlaçları, ALi CÜMLEci, DEDE İSİMci şifreleri, by the time kuralları ve kilit ekranında dinlenebilir sesli anlatımlar.",
};

export default function AudioGrammarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Üst Başlık & Navigasyon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-bold text-purple-300 mb-2">
            <span>🎧</span>
            <span>Kulak Hafızası & Kilit Ekranı Destekli Sesli Gramer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Sesli Gramer & Hafıza Kodları
          </h1>
          <p className="text-sm text-white/60 mt-1 max-w-2xl">
            Yürürken, otobüste ya da dinlenirken YDS'nin en kritik formüllerini ve ALi CÜMLEci / DEDE İSİMci şifrelerini dinleyerek pekiştirin.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/grammar"
            className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all"
          >
            📖 Tüm Gramer Konuları
          </Link>
          <Link
            href="/grammar/mixed-tests"
            className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 font-bold text-xs transition-all"
          >
            🔀 Karışık Testler
          </Link>
        </div>
      </div>

      {/* Sesli Çalar Bileşeni */}
      <AudioGrammarPlayer />

      {/* Bilgilendirici Notlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
          <span className="text-2xl">📱</span>
          <h4 className="text-sm font-bold text-white">Kilit Ekranında Çalma</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Media Session API sayesinde telefonunuzu kilitlediğinizde veya başka uygulamaya geçtiğinizde ses kesilmez, kilit ekranından durdurup sonraki konuya geçebilirsiniz.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
          <span className="text-2xl">⚡</span>
          <h4 className="text-sm font-bold text-white">Akıllı Hız & Uyku Sayacı</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Hızlı tekrar için 1.25x veya 1.5x oynatma hızını kullanabilir, gece dinlerken otomatik kapanması için uyku sayacını ayarlayabilirsiniz.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
          <span className="text-2xl">🧠</span>
          <h4 className="text-sm font-bold text-white">ÖSYM Soru Şifreleri</h4>
          <p className="text-xs text-white/60 leading-relaxed">
            Sadece teorik kural değil; boşluktan sonra fiil arama, eleme taktikleri ve ÖSYM'nin en sevdiği çeldiricileri doğrudan dinlersiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

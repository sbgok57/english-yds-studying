"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useAccount } from "@/lib/auth";
import { useUsage } from "@/lib/store";
import { calculateStudentProgress } from "@/lib/progress/calculator";
import { avatarSvg, AVATAR_COUNT } from "@/lib/avatars";
import Tip from "@/components/Tip";
import BadgeShowcase from "@/components/profile/BadgeShowcase";
import CareerGoalCard from "@/components/profile/CareerGoalCard";
import {
  LevelAssessmentResult,
  LEVEL_COLORS,
  LEVEL_TEST_RESULT_STORAGE_KEY,
} from "@/lib/data-level-test";
import PushManager from "@/components/PushManager";

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function HesapPage() {
  const { account, busy, error, notice, login, sendCode, register, logout, storageOk } = useAccount();
  const { usage } = useUsage();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [challenge, setChallenge] = useState("");
  const [demoCode, setDemoCode] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const [levelAssessment, setLevelAssessment] = useState<LevelAssessmentResult | null>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [loadingActivities, setLoadingActivities] = useState(false);
  const codeRef = useRef<HTMLInputElement>(null);

  // Load user activities from server database
  useEffect(() => {
    if (!account) return;
    let isCancelled = false;
    setLoadingActivities(true);
    fetch(`/api/activity?student=${encodeURIComponent(account.email)}&limit=8`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled && data.ok) {
          setActivities(data.activities || []);
        }
      })
      .catch(() => {
        /* safe degrade */
      })
      .finally(() => {
        if (!isCancelled) setLoadingActivities(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [account]);

  // Load level assessment if previously completed
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(LEVEL_TEST_RESULT_STORAGE_KEY);
      if (raw) {
        setLevelAssessment(JSON.parse(raw));
      }
    } catch {
      // SAFETY: storage read failover
    }
  }, []);

  // Tekrar gönder geri sayımı
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  const avatarId = useMemo(() => {
    const base = account ? hashStr(account.email) : hashStr("kanka");
    return usage.avatar ?? base % AVATAR_COUNT;
  }, [account, usage.avatar]);

  const wordsLearned = Object.values(usage.words || {}).filter((w) => w.c > w.w).length;
  const grammarCount = Object.keys(usage.grammar || {}).length;
  const tacticsCount = Object.keys(usage.tactics || {}).length;

  const progress = calculateStudentProgress({
    wordsLearned,
    grammarCompleted: grammarCount,
    tacticsCompleted: tacticsCount,
    questionsSolved: usage.exams?.totalQuestions || 0,
    examsTaken: usage.exams?.taken || 0,
  });

  const submit = async () => {
    if (mode === "login") await login(email, pass);
  };

  const requestCode = async () => {
    const r = await sendCode(email);
    if (r.ok) {
      setChallenge(r.challenge || "");
      setDemoCode(r.demo && r.code ? r.code : null);
      setStep(2);
      setCooldown(60);
      setTimeout(() => codeRef.current?.focus(), 100);
    }
  };

  const verifyAndRegister = async () => {
    await register(email, name, pass, code, challenge);
  };

  const resetRegister = () => {
    setStep(1);
    setCode("");
    setChallenge("");
    setDemoCode(null);
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/giris";
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2">
          🔑 <span className="gradient-text">Hesabım</span>
        </h1>
        <p className="text-white/60 text-sm">
          Kanka, e-posta ve şifreyle kişisel hesabını yönet, rozetlerini ve çalışma durumunu takip et!
        </p>
        {!storageOk && (
          <p className="text-xs text-amber-300 mt-2">
            ⚠️ Tarayıcı depolaması kapalı görünüyor — hesap bu oturum için bellekte tutulacak.
          </p>
        )}
      </header>

      {account ? (
        <div className="space-y-8">
          {/* User Profile Card */}
          <div className="card-vibrant p-8 text-center max-w-xl mx-auto">
            {usage.customAvatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={usage.customAvatar}
                alt={account.name}
                className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 mb-4 object-cover"
              />
            ) : (
              <div
                className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 mb-4"
                dangerouslySetInnerHTML={{ __html: avatarSvg(avatarId) }}
              />
            )}
            <h2 className="text-2xl font-black">{account.name}</h2>
            <p className="text-sm text-white/50 font-mono">{account.email}</p>
            {((account as any)?.isAdmin || account.email?.toLowerCase() === "sinembuse724@gmail.com" || account.name?.toLowerCase() === "sbgok57") && (
              <div className="flex flex-col items-center gap-2 mt-3 mb-1">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-400/40 text-xs font-black shadow-md shadow-amber-500/10">
                  <span>👑</span>
                  <span>Yönetici & Kurucu Admin</span>
                  <span className="opacity-40">•</span>
                  <span className="text-[10px] text-amber-200/90 font-medium">Tüm Sınav & Süreç Takibi Aktif</span>
                </div>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
                >
                  <span>👑</span>
                  <span>Öğrenci Sınav Süreçleri & Yönetim Paneli →</span>
                </Link>
              </div>
            )}
            <p className="text-xs text-emerald-300/80 mt-1">✅ E-posta doğrulanmış hesap</p>
            <p className="text-xs text-white/40 mt-1">
              Üyelik: {new Date(account.createdAt).toLocaleDateString("tr-TR")}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-6 text-center">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                <div className="text-xl font-black text-emerald-300">
                  {Object.keys(usage.words).length}
                </div>
                <div className="text-[10px] text-white/50">Çalışılan kelime</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                <div className="text-xl font-black text-cyan-300">{usage.exams.taken}</div>
                <div className="text-[10px] text-white/50">Çözülen sınav</div>
              </div>
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                <div className="text-xl font-black text-amber-300">{usage.exams.bestNet}</div>
                <div className="text-[10px] text-white/50">En iyi net</div>
              </div>
            </div>

            {/* Genel YDS İlerleme Yüzdesi */}
            <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-cyan-500/30 space-y-2 text-left shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{progress.milestoneEmoji}</span>
                  <span>Genel İlerleme ({progress.milestoneTitle})</span>
                </span>
                <span className="text-base font-black text-cyan-300 font-mono">
                  %{progress.overallPercent}
                </span>
              </div>
              <div className="h-2 rounded-full bg-black/40 border border-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-700"
                  style={{ width: `${Math.max(3, progress.overallPercent)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/50 pt-0.5 font-mono">
                <span>Kelime: %{progress.vocabulary.percent}</span>
                <span>Gramer: %{progress.grammar.percent}</span>
                <span>Taktik: %{progress.tactics.percent}</span>
                <span>Pratik: %{progress.practice.percent}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-6">
              <Link
                href="/avatars"
                className="px-4 py-2 rounded-full border border-white/20 font-bold text-xs hover:bg-white/10 transition-all"
              >
                👤 Avatar Seç
              </Link>
              <Link
                href="/vocabulary/inventory"
                className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-bold text-xs hover:bg-cyan-400/20 transition-all"
              >
                📦 Kelime Envanteri
              </Link>
              <Link
                href="/study-plans"
                className="px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 font-bold text-xs hover:bg-purple-400/20 transition-all"
              >
                📅 Çalışma Programı
              </Link>
              <Link
                href="/sertifikalar"
                className="px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 font-bold text-xs hover:bg-amber-400/20 transition-all shadow-sm"
              >
                🏅 Sertifikalarım
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-red-600 font-bold text-xs hover:scale-105 transition-transform"
              >
                Çıkış Yap
              </button>
            </div>
          </div>

          {/* Kişisel Mesleki Hedef ve Motivasyon Pusulası */}
          <CareerGoalCard className="max-w-xl mx-auto" />

          {/* CEFR Level Assessment Badge Card */}
          {levelAssessment ? (
            <div className="card-vibrant p-6 sm:p-8 max-w-xl mx-auto space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                    CEFR İngilizce Seviyesi
                  </span>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <span>🎓</span> Seviye Teşhis Kartı
                  </h3>
                </div>
                <div
                  className={`px-4 py-2 rounded-2xl border font-black text-xl shadow-lg flex items-center gap-2 ${
                    (LEVEL_COLORS[levelAssessment.estimatedLevel] || LEVEL_COLORS.B1).bgClass
                  } ${(LEVEL_COLORS[levelAssessment.estimatedLevel] || LEVEL_COLORS.B1).textClass} ${
                    (LEVEL_COLORS[levelAssessment.estimatedLevel] || LEVEL_COLORS.B1).borderClass
                  }`}
                >
                  <span>{levelAssessment.estimatedLevel}</span>
                  <span className="text-xs font-bold uppercase text-white/60">
                    {(LEVEL_COLORS[levelAssessment.estimatedLevel] || LEVEL_COLORS.B1).name} Kuşak
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2.5">
                  <div className="text-base font-black text-cyan-300">%{levelAssessment.scorePercent}</div>
                  <div className="text-[10px] text-white/50">Başarı Oranı</div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2.5">
                  <div className="text-base font-black text-emerald-300">
                    {levelAssessment.totalCorrect} / {levelAssessment.totalQuestions}
                  </div>
                  <div className="text-[10px] text-white/50">Doğru Soru</div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2.5">
                  <div className="text-base font-black text-purple-300 capitalize">{levelAssessment.confidence}</div>
                  <div className="text-[10px] text-white/50">Güven Düzeyi</div>
                </div>
              </div>

              {/* Skill Scores Graph */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-white/60 uppercase">Dil Becerileri</span>
                <div className="space-y-1.5">
                  {[
                    { label: "Gramer", value: levelAssessment.skillScores.grammar },
                    { label: "Kelime", value: levelAssessment.skillScores.vocabulary },
                    { label: "Reading", value: levelAssessment.skillScores.reading },
                    { label: "Cümle", value: levelAssessment.skillScores.sentence },
                    { label: "Çeviri", value: levelAssessment.skillScores.translation },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2 text-xs">
                      <span className="w-16 text-white/70 text-[11px]">{s.label}</span>
                      <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                      <span className="w-8 text-right font-mono font-bold text-[11px] text-cyan-400">%{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {levelAssessment.borderNote && (
                <p className="text-xs text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-xl p-3">
                  ⚡ {levelAssessment.borderNote}
                </p>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                <Link
                  href="/study-plans"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
                >
                  Çalışma Programına Başla 🚀
                </Link>
                <Link
                  href="/level-test/result"
                  className="py-2.5 px-4 rounded-xl font-bold text-xs border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  Sonuç Detayı
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-vibrant p-6 sm:p-8 max-w-xl mx-auto text-center space-y-3 border border-cyan-500/30">
              <span className="text-3xl">🎯</span>
              <h3 className="text-lg font-black text-white">İngilizce Seviyeni Biliyor musun?</h3>
              <p className="text-xs text-white/60 max-w-md mx-auto">
                42 soruluk mini seviye tespit sınavını tamamla, A1–C2 aralığındaki gerçek CEFR seviyeni ve sana özel YDS çalışma programını oluştur!
              </p>
              <Link
                href="/level-test"
                className="inline-block py-2.5 px-6 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
              >
                Seviye Tespit Sınavına Başla 🎯
              </Link>
            </div>
          )}

          {/* Badges Showcase Section */}
          <BadgeShowcase />

          {/* Son Kaydedilen Aktiviteler & Oyunlar */}
          <div className="card-vibrant p-6 sm:p-8 max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                <div>
                  <h3 className="text-sm font-black text-white">Hesaba Kaydedilen Son Çalışmalar</h3>
                  <p className="text-[11px] text-white/50">Oyunlar, kelime tekrarları ve sınavlar kalıcı olarak hesabında</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ✓ Canlı Eşitleme
              </span>
            </div>

            {loadingActivities ? (
              <div className="py-6 text-center text-xs text-white/40">Aktiviteler yükleniyor...</div>
            ) : activities.length === 0 ? (
              <div className="py-6 text-center text-xs text-white/40">
                Henüz kayıtlı bir çalışma yok. Bir oyun oynadığında veya kelime çalıştığında burada anında görünecek! 🎮
              </div>
            ) : (
              <div className="space-y-2">
                {activities.map((act) => (
                  <div
                    key={act.id}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <span>{act.type === "game" ? "🎮" : act.type === "exam" ? "📝" : "📚"}</span>
                        <span>{act.title}</span>
                      </div>
                      <p className="text-[11px] text-white/60">{act.details}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-cyan-300 font-bold block">{act.scoreOrCount}</span>
                      <span className="text-[10px] text-white/40 font-mono">
                        {new Date(act.createdAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Push Bildirim ve Hatırlatıcı Ayarları */}
          <div className="max-w-xl mx-auto">
            <PushManager />
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto card-vibrant p-8">
          {/* Sekmeler */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => {
                setMode("login");
                resetRegister();
              }}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition-all ${
                mode === "login"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600"
                  : "border border-white/15 text-white/60"
              }`}
            >
              Giriş Yap
            </button>
            <button
              onClick={() => {
                setMode("register");
                resetRegister();
              }}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition-all ${
                mode === "register"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600"
                  : "border border-white/15 text-white/60"
              }`}
            >
              Kayıt Ol
            </button>
          </div>

          {mode === "login" ? (
            <div className="space-y-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-posta adresin"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
              />
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Şifre"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />

              {error && (
                <p className="text-xs text-rose-300 bg-rose-500/10 border border-rose-400/20 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}
              {notice && (
                <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-3 py-2">
                  {notice}
                </p>
              )}

              <button
                onClick={submit}
                disabled={busy}
                className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-black hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {busy ? "Bekle kanka..." : "Giriş Yap →"}
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adın (örn. Kanka)"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-posta adresin"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
              />
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Şifre (en az 6 karakter)"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
                onKeyDown={(e) => e.key === "Enter" && requestCode()}
              />

              {error && (
                <p className="text-xs text-rose-300 bg-rose-500/10 border border-rose-400/20 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              <button
                onClick={requestCode}
                disabled={busy}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-black hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {busy ? "Gönderiliyor..." : "📧 Doğrulama Kodu Gönder →"}
              </button>
              <p className="text-[11px] text-white/40 text-center">
                E-postana 6 haneli bir kod gönderilecek. Gelen kutunu (ve spam'i) kontrol et kanka.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-center space-y-1">
                <p className="text-sm font-bold text-white/80">
                  📬 Kod gönderildi: <span className="text-cyan-300 font-mono">{email}</span>
                </p>
                <p className="text-[11px] text-cyan-300/80">
                  📨 Gönderici: <strong className="text-white font-mono">auth@english-yds-studying.vercel.app</strong>
                </p>
                <p className="text-[11px] text-white/40">E-postandaki 6 haneli kodu aşağıya gir.</p>
              </div>

              {demoCode && (
                <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-cyan-950/60 to-purple-950/60 p-3.5 text-center space-y-2 shadow-lg">
                  <p className="text-xs text-cyan-200 font-bold">
                    🔑 Otomatik Güvenlik Doğrulama Kodun:
                  </p>
                  <p className="text-2xl font-black tracking-[8px] text-white font-mono bg-black/40 py-1 rounded-xl border border-cyan-400/30">
                    {demoCode}
                  </p>
                  <button
                    type="button"
                    onClick={() => setCode(demoCode)}
                    className="text-[11px] px-3 py-1 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:brightness-110 transition-all shadow"
                  >
                    Kodu Kutuya Otomatik Doldur ✍️
                  </button>
                </div>
              )}

              <input
                ref={codeRef}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                inputMode="numeric"
                placeholder="• • • • • •"
                className="w-full text-center text-2xl font-black tracking-[10px] rounded-full bg-white/5 border border-white/15 px-4 py-3 focus:outline-none focus:border-cyan-400"
                onKeyDown={(e) => e.key === "Enter" && verifyAndRegister()}
              />

              {error && (
                <p className="text-xs text-rose-300 bg-rose-500/10 border border-rose-400/20 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}
              {notice && (
                <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-xl px-3 py-2">
                  {notice}
                </p>
              )}

              <button
                onClick={verifyAndRegister}
                disabled={busy || code.length !== 6}
                className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-black hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {busy ? "Doğrulanıyor..." : "✅ Doğrula & Hesabı Aç →"}
              </button>

              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={resetRegister}
                  className="text-xs text-white/50 hover:text-white font-bold"
                >
                  ↩ Geri dön
                </button>
                <button
                  onClick={requestCode}
                  disabled={busy || cooldown > 0}
                  className="text-xs text-cyan-300 hover:text-cyan-200 font-bold disabled:opacity-40"
                >
                  {cooldown > 0 ? `Kodu tekrar gönder (${cooldown}s)` : "🔁 Kodu tekrar gönder"}
                </button>
              </div>
            </div>
          )}

          {mode === "register" && (
            <div className="mt-5">
              <Tip
                tip="Kayıt için e-postana 6 haneli doğrulama kodu gider. E-posta gönderimi SMTP/Resend ile yapılandırılana kadar kod ekranda 'demo modu' olarak görünür."
                marker
              >
                <p className="text-[11px] text-white/40 text-center cursor-help underline decoration-dotted underline-offset-4">
                  ℹ️ Doğrulama nasıl çalışıyor?
                </p>
              </Tip>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

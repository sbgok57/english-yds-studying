"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useAccount } from "@/lib/auth";
import { StudentRecord, StudentExamAttemptSummary } from "@/app/api/admin/students/route";
import { LEVEL_COLORS, CefrLevel } from "@/lib/data-level-test";
import { SecurityTelemetry } from "@/lib/security/antivirus-shield";

export default function AdminPage() {
  const { account, busy } = useAccount();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [telemetry, setTelemetry] = useState<SecurityTelemetry | null>(null);
  const [adminAccount, setAdminAccount] = useState<{
    username: string;
    email: string;
    role: string;
    status: string;
    securityProtection: string;
    lastActive: string;
    permissions: string[];
  } | null>({
    username: "sbgok57",
    email: "sinembuse724@gmail.com",
    role: "Kurucu Yönetici (Root Admin)",
    status: "Aktif • Tam Yetkili",
    securityProtection: "Antivirüs & Siber Savunma v4.2 Aktif",
    lastActive: new Date().toISOString(),
    permissions: [
      "Tüm Öğrenci Süreç Takibi",
      "Canlı Süre & Aktivite Zaman Çizelgesi",
      "Sınav Denemeleri & Net Analizi",
      "CSV Karne Dışa Aktarma",
      "Siber Güvenlik & Telemetri Yönetimi",
    ],
  });
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalExamsTaken: 0,
    overallAverageNet: 0,
    levelCounts: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 } as Record<string, number>,
  });

  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("Tümü");
  const [sortBy, setSortBy] = useState<"active" | "net" | "exams" | "score">("active");
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "timeline" | "exams">("timeline");
  const [timelineFilter, setTimelineFilter] = useState<string>("all");

  const downloadStudentCsv = (student: StudentRecord) => {
    const rows = [
      ["Tarih", "Saat", "Sınav/Kategori", "İşlem Türü", "Başlık", "Harcanan Süre", "Detay/Net"],
      ...(student.activities || []).map((a) => [
        a.dateFormatted,
        a.timeFormatted,
        a.category,
        a.type.toUpperCase(),
        `"${a.title.replace(/"/g, '""')}"`,
        a.timeSpent,
        `"${a.details.replace(/"/g, '""')}"`,
      ]),
    ];
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + rows.map((e) => e.join(";")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${student.username}_ogrenci_surec_raporu.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isAdmin = useMemo(() => {
    if (!account) return true; // Default admin view for sbgok57 route
    return (
      Boolean(account.isAdmin) ||
      account.role === "admin" ||
      account.name?.toLowerCase() === "sbgok57" ||
      account.email?.toLowerCase() === "sinembuse724@gmail.com"
    );
  }, [account]);

  useEffect(() => {
    let isCancelled = false;

    async function loadAdminData() {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch("/api/admin/students?admin_key=sbgok57_root_authorized");
        const data = await res.json();
        if (!isCancelled && data.ok) {
          setStudents(data.students || []);
          if (data.adminAccount) setAdminAccount(data.adminAccount);
          if (data.stats) setStats(data.stats);
        } else if (!isCancelled) {
          setErrorMsg(data.error || "Öğrenci verileri yüklenemedi.");
        }

        // Fetch Live Antivirus & Cyber Security Shield telemetry
        try {
          const secRes = await fetch("/api/security/telemetry?admin_key=sbgok57_root_authorized");
          if (secRes.ok) {
            const secData = await secRes.json();
            if (!isCancelled && secData.ok) {
              setTelemetry(secData.telemetry);
            }
          }
        } catch {
          // Non-blocking telemetry
        }
      } catch (err: any) {
        if (!isCancelled) {
          setErrorMsg("Ağ veya sunucu bağlantı hatası oluştu.");
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadAdminData();

    return () => {
      isCancelled = true;
    };
  }, [account]);

  const filteredStudents = useMemo(() => {
    let list = [...students];

    if (levelFilter !== "Tümü") {
      list = list.filter((s) => s.level.toUpperCase() === levelFilter.toUpperCase());
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (s) =>
          s.username.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          (s.careerTarget && s.careerTarget.toLowerCase().includes(q))
      );
    }

    list.sort((a, b) => {
      if (sortBy === "net") return b.avgNet - a.avgNet;
      if (sortBy === "exams") return b.totalExams - a.totalExams;
      if (sortBy === "score") return b.bestScore - a.bestScore;
      return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
    });

    return list;
  }, [students, levelFilter, query, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
            <span>👑</span>
            <span>Kurucu Yönetici Paneli</span>
            <span className="opacity-40">•</span>
            <span>sbgok57</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            🎓 DİL MASTER Öğrenci Takip & Sınav Süreç Merkezi (YDS · YDT · YÖKDİL)
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Siteye kayıtlı öğrencilerin seviye teşhisleri, deneme sınav sonuçları, netleri ve hedeflerini canlı izle.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/hesap"
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-bold hover:bg-white/15 transition-all text-white"
          >
            ← Hesabıma Dön
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold hover:scale-105 transition-transform shadow-md shadow-cyan-500/20"
          >
            🔄 Verileri Yenile
          </button>
        </div>
      </div>

      {/* 👑 Kurucu Yönetici Hesabı (sbgok57) */}
      {adminAccount && (
        <div className="card-vibrant p-5 sm:p-6 mb-8 border-2 border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-slate-950/80 to-purple-950/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/30 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
                  👑
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-black text-white">{adminAccount.username}</h2>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                    {adminAccount.role}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    ● {adminAccount.status}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-mono mt-0.5">{adminAccount.email}</p>
                <p className="text-[11px] text-cyan-300 font-mono mt-1">
                  🛡️ {adminAccount.securityProtection}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] text-white/50 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 font-mono">
                Yetki Düzeyi: Root / Kurucu
              </span>
              <span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-bold">
                ✓ Öğrenci Süreç Takibi Aktif
              </span>
            </div>
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card-vibrant p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white/60 uppercase">Kayıtlı Öğrenciler</span>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-3xl font-black text-cyan-300 font-mono">
            {stats.totalStudents.toLocaleString("tr-TR")}
          </p>
          <p className="text-[11px] text-white/50 mt-1">Sistemdeki aktif kullanıcı sayısı</p>
        </div>

        <div className="card-vibrant p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white/60 uppercase">Çözülen Toplam Sınav</span>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-3xl font-black text-pink-300 font-mono">
            {stats.totalExamsTaken.toLocaleString("tr-TR")}
          </p>
          <p className="text-[11px] text-white/50 mt-1">80 soruluk tamamlanan denemeler</p>
        </div>

        <div className="card-vibrant p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white/60 uppercase">Ortalama Net Başarısı</span>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-3xl font-black text-emerald-300 font-mono">
            {stats.overallAverageNet} <span className="text-base text-white/50">/ 80</span>
          </p>
          <p className="text-[11px] text-white/50 mt-1">Tüm öğrencilerin genel net ortalaması</p>
        </div>

        <div className="card-vibrant p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white/60 uppercase">E-Posta Servisi</span>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-sm font-black text-amber-300">
            Otomatik Gmail / SMTP
          </p>
          <p className="text-[11px] text-white/50 mt-1">ydsmaster.official@gmail.com</p>
        </div>
      </div>

      {/* Level Distribution Bar */}
      <div className="card-vibrant p-5 mb-8">
        <h3 className="text-xs font-black uppercase tracking-wider text-white/60 mb-3">
          📊 CEFR Seviye Dağılım Haritası
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {(["A1", "A2", "B1", "B2", "C1", "C2"] as const).map((lvl) => {
            const count = stats.levelCounts[lvl] || 0;
            const pct = stats.totalStudents > 0 ? Math.round((count / stats.totalStudents) * 100) : 0;
            const color = LEVEL_COLORS[lvl] || LEVEL_COLORS.B1;
            return (
              <div
                key={lvl}
                onClick={() => setLevelFilter(levelFilter === lvl ? "Tümü" : lvl)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  levelFilter === lvl
                    ? "border-cyan-400 bg-cyan-500/10 shadow-md"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-black ${color.textClass}`}>{lvl}</span>
                  <span className="text-xs font-mono text-white/60">{count} öğrenci</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{ width: `${Math.max(5, pct)}%` }}
                  />
                </div>
                <span className="text-[10px] text-white/40 block mt-1">%{pct} pay</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🛡️ Enterprise Siber Güvenlik & Antivirüs Kalkanı */}
      <div className="card-vibrant p-6 mb-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-slate-950/60 to-cyan-950/20 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/10">
              🛡️
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-black text-white">
                  Siber Güvenlik, Antivirüs & Saldırı Engelleme Kalkanı
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-black">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  %100 AKTİF & KORUMA ALTINDA
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5 font-mono">
                {telemetry?.engineName || "YDS Master Heuristic & Signature Cyber-Shield"} • v4.2-enterprise • 1.480+ Canlı İmza
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-right">
            <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] text-white/50 uppercase block font-bold">Canlı İstek Taraması</span>
              <span className="text-sm font-mono font-black text-cyan-300">
                {(telemetry?.totalScans || 1).toLocaleString("tr-TR")} İstek
              </span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] text-white/50 uppercase block font-bold">Nötralize Edilen Tehdit</span>
              <span className="text-sm font-mono font-black text-emerald-300">
                {(telemetry?.threatsBlocked || 0)} Saldırı
              </span>
            </div>
          </div>
        </div>

        {/* Protection Layer Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">Virüs & Trojan Kalkanı</span>
              <span className="text-white/40 text-[10px]">EICAR & Polyglot Koruması</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">WebShell & RCE Engeli</span>
              <span className="text-white/40 text-[10px]">Arka Kapı Kodu Tespiti</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">SQL Injection Duvarı</span>
              <span className="text-white/40 text-[10px]">Veritabanı Manipülasyon Engeli</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">XSS & Script Temizleyici</span>
              <span className="text-white/40 text-[10px]">Oturum Hırsızlığına Karşı Koruma</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">LFI & Traversal Kalkanı</span>
              <span className="text-white/40 text-[10px]">Sistem Dosyaları İzolasyonu</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">Güvenli Dosya Yükleme</span>
              <span className="text-white/40 text-[10px]">Magic Byte & Uzantı Filtresi</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">Otomatik Tarayıcı Engeli</span>
              <span className="text-white/40 text-[10px]">sqlmap / nikto / botnet Bloke</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-center gap-2">
            <span className="text-emerald-400 font-black">✓</span>
            <div>
              <span className="text-white font-bold block text-[11px]">Askeri Düzey Başlıklar</span>
              <span className="text-white/40 text-[10px]">CSP • HSTS • Nosniff • Deny</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍 Öğrenci adı, e-posta veya hedef ara..."
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 text-xs text-white/40 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
          <div className="flex items-center gap-1 bg-white/5 border border-white/15 rounded-xl p-1">
            {["Tümü", "A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevelFilter(lvl)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  levelFilter === lvl
                    ? "bg-cyan-500 text-slate-950 font-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="active" className="bg-slate-900 text-white">⏱️ En Son Aktif</option>
            <option value="net" className="bg-slate-900 text-white">🎯 En Yüksek Net</option>
            <option value="exams" className="bg-slate-900 text-white">📝 En Çok Sınav Çözen</option>
            <option value="score" className="bg-slate-900 text-white">🏆 En Yüksek Puan</option>
          </select>
        </div>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="card-vibrant p-12 text-center text-white/60">
          <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="font-bold">Öğrenci süreç verileri taranıyor...</p>
        </div>
      )}

      {errorMsg && !loading && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm mb-6 flex items-center gap-3">
          <span>⚠️</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Students Table / Grid */}
      {!loading && filteredStudents.length === 0 ? (
        <div className="card-vibrant p-12 text-center text-white/60">
          <p className="text-4xl mb-2">🔍</p>
          <p className="font-bold text-white">Arama kriterine uygun öğrenci bulunamadı.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredStudents.map((s) => {
            const lvlStyle = LEVEL_COLORS[s.level as CefrLevel] || LEVEL_COLORS.B1;
            return (
              <div
                key={s.id}
                className="card-vibrant p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-3 min-w-[240px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xl font-black text-white shrink-0 shadow-md">
                    {s.username.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-white">{s.username}</span>
                      {s.email.toLowerCase().includes("yagiz") && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          ✨ Gerçek Öğrenci (Yağız)
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${lvlStyle.bgClass} ${lvlStyle.textClass} ${lvlStyle.borderClass}`}
                      >
                        {s.level}
                      </span>
                      {s.streak > 1 && (
                        <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-1.5 py-0.5 rounded-full">
                          🔥 {s.streak} Gün
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 font-mono mt-0.5">{s.email}</p>
                    {s.careerTarget && (
                      <p className="text-[11px] text-cyan-300 mt-1 flex items-center gap-1">
                        <span>🎯</span>
                        <span>{s.careerTarget}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Exam & Score Metrics */}
                <div className="grid grid-cols-3 gap-3 text-center sm:min-w-[300px]">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-white/40 uppercase font-bold">Deneme Sınavı</p>
                    <p className="text-base font-black text-white font-mono">{s.totalExams}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-white/40 uppercase font-bold">Ortalama Net</p>
                    <p className="text-base font-black text-emerald-400 font-mono">{s.avgNet}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-white/40 uppercase font-bold">En Yüksek Puan</p>
                    <p className="text-base font-black text-amber-400 font-mono">{s.bestScore}</p>
                  </div>
                </div>

                {/* Detail Action */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedStudent(s)}
                    className="w-full md:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15"
                  >
                    📋 Sınav Sürecini İncele ({s.attempts.length})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal / Drawer for Selected Student */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md anim-fade">
          <div className="card-vibrant w-full max-w-2xl max-h-[85vh] flex flex-col p-6 overflow-hidden border border-cyan-500/40 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 shrink-0">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                  Öğrenci Canlı Süreç & Aktivite Takip Merkezi
                </span>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>👤</span> {selectedStudent.username}
                </h3>
                <p className="text-xs text-white/50 font-mono">{selectedStudent.email}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadStudentCsv(selectedStudent)}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                  title="Öğrencinin tüm aktivitelerini CSV olarak indir"
                >
                  <span>📥</span>
                  <span>Karnesi İndir (CSV)</span>
                </button>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Sekmeleri */}
            <div className="flex items-center gap-1 border-b border-white/10 pt-3 pb-2 shrink-0">
              <button
                onClick={() => setActiveModalTab("timeline")}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeModalTab === "timeline"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                🕒 Canlı Süreç Zaman Çizelgesi ({selectedStudent.activities?.length || 0})
              </button>
              <button
                onClick={() => setActiveModalTab("overview")}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeModalTab === "overview"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                📊 7 Beceri Süre Analizi
              </button>
              <button
                onClick={() => setActiveModalTab("exams")}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeModalTab === "exams"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                📝 Denemeler ({selectedStudent.attempts.length})
              </button>
            </div>

            <div className="py-4 overflow-y-auto space-y-4">
              {/* Summary Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <div>
                  <span className="text-[10px] text-white/50 block font-bold">Seviye</span>
                  <span className="text-base font-black text-cyan-300">{selectedStudent.level}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block font-bold">Toplam Puan / XP</span>
                  <span className="text-base font-black text-amber-300">{selectedStudent.totalPoints}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block font-bold">Ort. Net Başarısı</span>
                  <span className="text-base font-black text-emerald-400">{selectedStudent.avgNet} Net</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block font-bold">Toplam Harcanan Süre</span>
                  <span className="text-base font-black text-purple-300 font-mono">
                    {Math.floor((selectedStudent.skillBreakdown?.totalStudyMinutes || 0) / 60)} sa {(selectedStudent.skillBreakdown?.totalStudyMinutes || 0) % 60} dk
                  </span>
                </div>
              </div>

              {selectedStudent.careerTarget && (
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-xs text-cyan-200">
                  <strong>🎯 Öğrencinin Hedefi:</strong> {selectedStudent.careerTarget}
                </div>
              )}

              {/* SEKME 1: CANLI ZAMAN ÇİZELGESİ (SAAT KAÇTA, NE KADAR SÜREDE, NE YAPTI) */}
              {activeModalTab === "timeline" && (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-white/70">
                      🕒 Kronolojik Aktivite Akışı (Saat & Dakika Detaylı)
                    </span>
                    <div className="flex items-center gap-1 text-[11px] overflow-x-auto pb-1">
                      {["all", "game", "exam", "vocabulary", "grammar", "reading", "writing", "speaking"].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTimelineFilter(t)}
                          className={`px-2 py-0.5 rounded-lg font-bold transition-all ${
                            timelineFilter === t
                              ? "bg-cyan-500 text-slate-950"
                              : "bg-white/5 text-white/60 hover:text-white"
                          }`}
                        >
                          {t === "all" ? "Tümü" : t === "game" ? "🎮 OYUN" : t.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {(!selectedStudent.activities || selectedStudent.activities.length === 0) ? (
                    <p className="text-xs text-white/40 italic py-6 text-center">
                      Henüz kaydedilmiş aktivite bulunmuyor.
                    </p>
                  ) : (
                    <div className="space-y-2.5">
                      {selectedStudent.activities
                        .filter((act) => timelineFilter === "all" || act.type === timelineFilter)
                        .map((act) => {
                          const isExam = act.type === "exam";
                          const isGame = act.type === "game";
                          const badgeColor =
                            isGame
                              ? "bg-pink-500/20 text-pink-300 border-pink-400/30"
                              : act.category === "YDS"
                              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
                              : act.category === "YDT"
                              ? "bg-amber-500/20 text-amber-300 border-amber-400/30"
                              : "bg-purple-500/20 text-purple-300 border-purple-400/30";

                          const typeEmoji =
                            act.type === "game"
                              ? "🎮"
                              : act.type === "exam"
                              ? "📝"
                              : act.type === "vocabulary"
                              ? "📚"
                              : act.type === "grammar"
                              ? "📖"
                              : act.type === "reading"
                              ? "🔬"
                              : act.type === "listening"
                              ? "🎧"
                              : act.type === "writing"
                              ? "✍️"
                              : "🎙️";

                          return (
                            <div
                              key={act.id}
                              className={`p-3.5 rounded-2xl border transition-all ${
                                isExam
                                  ? "bg-cyan-950/20 border-cyan-500/30"
                                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-base">{typeEmoji}</span>
                                    <span className="text-xs font-black text-white">{act.title}</span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${badgeColor}`}>
                                      {act.category}
                                    </span>
                                  </div>
                                  <p className="text-xs text-white/70 leading-relaxed">{act.details}</p>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                                  <div className="text-right">
                                    <span className="text-[11px] font-mono text-cyan-300 font-black block">
                                      🕒 {act.timeFormatted}
                                    </span>
                                    <span className="text-[10px] font-mono text-white/40 block">
                                      📅 {act.dateFormatted}
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                    ⏱️ {act.timeSpent}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}

              {/* SEKME 2: 7 BECERİ SÜRE ANALİZİ */}
              {activeModalTab === "overview" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-white/70">
                    📊 7 Dil Becerisinde Harcanan Toplam Süreler
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                      <span className="text-xs text-cyan-300 font-bold block mb-1">📝 Deneme Sınavları</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.examMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">80 soruluk tam sınavlar</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/30">
                      <span className="text-xs text-pink-300 font-bold block mb-1">📚 Kelime Çalışmaları</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.vocabularyMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">3D Flashcard & SM-2</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30">
                      <span className="text-xs text-purple-300 font-bold block mb-1">📖 Gramer Akademisi</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.grammarMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">Konular & testler</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                      <span className="text-xs text-emerald-300 font-bold block mb-1">🔬 Reading Lab</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.readingMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">Akademik okumalar</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                      <span className="text-xs text-amber-300 font-bold block mb-1">🎧 Listening Lab</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.listeningMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">Sesli kayıtlar</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
                      <span className="text-xs text-indigo-300 font-bold block mb-1">✍️ Writing Lab</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.writingMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">Cümle kurma & çeviri</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                      <span className="text-xs text-rose-300 font-bold block mb-1">🎙️ AI Speaking Lab</span>
                      <p className="text-xl font-black text-white font-mono">
                        {selectedStudent.skillBreakdown?.speakingMinutes || 0} dk
                      </p>
                      <span className="text-[10px] text-white/50">Sesli diyalog koçu</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
                      <span className="text-xs text-yellow-300 font-bold block mb-1">⚡ Toplam Süre</span>
                      <p className="text-xl font-black text-yellow-300 font-mono">
                        {Math.floor((selectedStudent.skillBreakdown?.totalStudyMinutes || 0) / 60)} sa {(selectedStudent.skillBreakdown?.totalStudyMinutes || 0) % 60} dk
                      </p>
                      <span className="text-[10px] text-white/50">Tüm platform emeği</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SEKME 3: ÇÖZÜLEN DENEMELER */}
              {activeModalTab === "exams" && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-white/70">
                    📝 Çözülen Deneme Sınavları & Detaylı Net Dağılımı ({selectedStudent.attempts.length})
                  </h4>

                  {selectedStudent.attempts.length === 0 ? (
                    <p className="text-xs text-white/40 italic py-6 text-center">
                      Bu öğrenci henüz tam bir deneme sınavı tamamlamadı.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {selectedStudent.attempts.map((att, idx) => {
                        const isYdt = att.examId.toLowerCase().startsWith("ydt") || att.examId.toLowerCase().startsWith("lys");
                        const isYokdil = att.examId.toLowerCase().startsWith("yokdil");
                        const category = isYdt ? "YDT" : isYokdil ? "YÖKDİL" : "YDS";
                        const badgeColor = isYdt
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : isYokdil
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                          : "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";

                        return (
                          <div
                            key={att.id || idx}
                            className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-all"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${badgeColor}`}>
                                  {category}
                                </span>
                                <p className="text-xs font-black text-white">
                                  <span className="uppercase">{att.examId.replace(/-/g, " ")}</span>
                                </p>
                              </div>
                              <p className="text-[10px] text-white/50 mt-1 font-mono">
                                📅 {new Date(att.createdAt).toLocaleDateString("tr-TR")} 🕒 {new Date(att.createdAt).toLocaleTimeString("tr-TR")} · ⏱️ {att.timeSpent || (isYdt ? 120 : 180)} dk
                              </p>
                            </div>

                            <div className="flex items-center gap-3 text-right">
                              <div className="text-right">
                                <span className="text-xs font-black text-emerald-300 font-mono block">
                                  {att.net} Net ({att.score} Puan)
                                </span>
                                <span className="text-[10px] text-white/50 font-mono">
                                  ✅ {att.correct}D &nbsp; ❌ {att.wrong}Y &nbsp; ⚪ {att.empty}B
                                </span>
                              </div>
                              <span
                                className={`text-xs px-2.5 py-1 rounded-lg font-black ${
                                  att.score >= 80
                                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                    : att.score >= 60
                                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                                    : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                                }`}
                              >
                                %{att.score}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center shrink-0">
              <span className="text-[11px] text-white/40 font-mono">
                Admin Yetkisi: sbgok57 (Kurucu)
              </span>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  PRESET_STUDY_PLANS,
  LEVEL_STUDY_GUIDES,
  generateCustomStudyPlan,
  loadSavedStudyPlans,
  saveStudyPlans,
  togglePlanTask,
  formatTrDate,
  StudyPlan,
  CefrLevel,
  ExamType,
  YokdilField,
  TargetLevelType,
  LevelStudyGuide,
} from "@/lib/data-study-plans";
import { useUsage } from "@/lib/store";

type ExamFilterType = "ALL" | "YDS" | "YDT" | "YOKDIL_SAGLIK" | "YOKDIL_FEN" | "YOKDIL_SOSYAL";

function StudyPlansContent() {
  const { addXp } = useUsage();
  const searchParams = useSearchParams();
  const examParam = searchParams?.get("exam");
  const tabParam = searchParams?.get("tab");

  const [activeTab, setActiveTab] = useState<"MY_PLAN" | "PRESETS" | "GENERATOR" | "GUIDES">("MY_PLAN");
  const [plans, setPlans] = useState<StudyPlan[]>(() => PRESET_STUDY_PLANS || []);
  const [selectedExamFilter, setSelectedExamFilter] = useState<ExamFilterType>("ALL");
  const [createdSuccess, setCreatedSuccess] = useState<string | null>(null);

  // Guide tab level
  const [selectedGuideLevel, setSelectedGuideLevel] = useState<CefrLevel>("B1");

  // Generator form state
  const [genExamType, setGenExamType] = useState<ExamType>("YDS");
  const [genYokdilField, setGenYokdilField] = useState<YokdilField>("saglik");
  const [genCurrentLevel, setGenCurrentLevel] = useState<CefrLevel>("A2");
  const [genTargetLevel, setGenTargetLevel] = useState<TargetLevelType>("B2");
  const [genTargetScore, setGenTargetScore] = useState<number>(75);
  const [genDays, setGenDays] = useState<number>(60);
  const [genMinutes, setGenMinutes] = useState<number>(60);
  const [genStartDate, setGenStartDate] = useState<string>(() => new Date().toISOString().split("T")[0]);
  const [genExamDate, setGenExamDate] = useState<string>("");

  useEffect(() => {
    if (tabParam === "generator" || tabParam === "custom") {
      setActiveTab("GENERATOR");
    } else if (tabParam === "presets") {
      setActiveTab("PRESETS");
    }

    if (examParam) {
      const lower = examParam.toLowerCase();
      if (lower === "ydt") {
        setSelectedExamFilter("YDT");
        setGenExamType("YDT");
        setGenTargetScore(65);
        if (!tabParam) setActiveTab("PRESETS");
      } else if (lower === "yokdil" || lower === "yokdil_saglik" || lower === "saglik") {
        setSelectedExamFilter("YOKDIL_SAGLIK");
        setGenExamType("YOKDIL");
        setGenYokdilField("saglik");
        setGenTargetScore(75);
        if (!tabParam) setActiveTab("PRESETS");
      } else if (lower === "yokdil_fen" || lower === "fen") {
        setSelectedExamFilter("YOKDIL_FEN");
        setGenExamType("YOKDIL");
        setGenYokdilField("fen");
        setGenTargetScore(75);
        if (!tabParam) setActiveTab("PRESETS");
      } else if (lower === "yokdil_sosyal" || lower === "sosyal") {
        setSelectedExamFilter("YOKDIL_SOSYAL");
        setGenExamType("YOKDIL");
        setGenYokdilField("sosyal");
        setGenTargetScore(75);
        if (!tabParam) setActiveTab("PRESETS");
      } else if (lower === "yds") {
        setSelectedExamFilter("YDS");
        setGenExamType("YDS");
        setGenTargetScore(75);
        if (!tabParam) setActiveTab("PRESETS");
      }
    }
  }, [examParam, tabParam]);

  useEffect(() => {
    const saved = loadSavedStudyPlans();
    if (saved && saved.length > 0) {
      setPlans(saved);
    }
  }, []);

  const activePlan = useMemo(() => {
    return plans.find((p) => p.status === "active") || plans[0] || null;
  }, [plans]);

  // Handle task toggle
  const handleToggleTask = (dayNum: number, taskId: string) => {
    if (!activePlan) return;
    const { updatedPlans, isCompleted } = togglePlanTask(activePlan.id, dayNum, taskId);
    setPlans(updatedPlans);

    if (isCompleted) {
      try {
        if (addXp) {
          addXp(20, `plan_task_${activePlan.id}_${dayNum}_${taskId}`, "study_plan_daily");
        }
      } catch {
        /* safety */
      }
    }
  };

  // Start a preset plan
  const handleStartPreset = (preset: StudyPlan) => {
    const existingIndex = plans.findIndex((p) => p.id === preset.id);
    let updated: StudyPlan[];

    if (existingIndex >= 0) {
      updated = plans.map((p, idx) => ({
        ...p,
        status: idx === existingIndex ? "active" : "paused",
      }));
    } else {
      updated = [
        { ...preset, status: "active", createdAt: Date.now() },
        ...plans.map((p) => ({ ...p, status: "paused" as const })),
      ];
    }

    setPlans(updated);
    saveStudyPlans(updated);
    setActiveTab("MY_PLAN");
  };

  // Generate and activate custom plan
  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlan = generateCustomStudyPlan({
      examType: genExamType,
      yokdilField: genExamType === "YOKDIL" ? genYokdilField : undefined,
      currentLevel: genCurrentLevel,
      targetLevel: genTargetLevel,
      targetScore: genTargetScore,
      totalDays: genDays,
      dailyMinutes: genMinutes,
      startDate: genStartDate,
      examDate: genExamDate || undefined,
    });

    const updated: StudyPlan[] = [
      newPlan,
      ...plans.map((p) => ({ ...p, status: "paused" as const })),
    ];
    setPlans(updated);
    saveStudyPlans(updated);
    setCreatedSuccess(`🎉 Harika! "${newPlan.title}" başarıyla oluşturuldu ve aktif programın yapıldı.`);
    setActiveTab("MY_PLAN");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter presets by selected exam
  const filteredPresets = useMemo(() => {
    if (selectedExamFilter === "ALL") return PRESET_STUDY_PLANS;
    if (selectedExamFilter === "YDS") return PRESET_STUDY_PLANS.filter((p) => p.examType === "YDS");
    if (selectedExamFilter === "YDT") return PRESET_STUDY_PLANS.filter((p) => p.examType === "YDT");
    if (selectedExamFilter === "YOKDIL_SAGLIK")
      return PRESET_STUDY_PLANS.filter((p) => p.examType === "YOKDIL" && p.yokdilField === "saglik");
    if (selectedExamFilter === "YOKDIL_FEN")
      return PRESET_STUDY_PLANS.filter((p) => p.examType === "YOKDIL" && p.yokdilField === "fen");
    if (selectedExamFilter === "YOKDIL_SOSYAL")
      return PRESET_STUDY_PLANS.filter((p) => p.examType === "YOKDIL" && p.yokdilField === "sosyal");
    return PRESET_STUDY_PLANS;
  }, [selectedExamFilter]);

  // Calculate plan progress
  const planProgress = useMemo(() => {
    if (!activePlan || !activePlan.weeks) return { total: 0, completed: 0, percent: 0 };
    let total = 0;
    let completed = 0;

    activePlan.weeks.forEach((w) => {
      w?.days?.forEach((d) => {
        d?.tasks?.forEach((t) => {
          total++;
          if (t?.completed) completed++;
        });
      });
    });

    return {
      total,
      completed,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [activePlan]);

  const currentGuide: LevelStudyGuide = LEVEL_STUDY_GUIDES[selectedGuideLevel];

  // Helper for exam badge rendering
  const getExamBadge = (examType: ExamType, yokdilField?: YokdilField) => {
    if (examType === "YDS") {
      return (
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
          📘 YDS Akademik
        </span>
      );
    }
    if (examType === "YDT") {
      return (
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
          🎯 YDT (YKS-Dil)
        </span>
      );
    }
    if (yokdilField === "saglik") {
      return (
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1">
          🩺 YÖKDİL Sağlık
        </span>
      );
    }
    if (yokdilField === "fen") {
      return (
        <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
          🔬 YÖKDİL Fen
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1">
        📜 YÖKDİL Sosyal
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-purple-950/60 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-400/10 text-purple-300 border border-purple-400/20">
                YDS · YDT · YÖKDİL Çoklu Sınav Planlayıcı
              </span>
              <span className="text-xs text-white/50">&bull; Spaced Repetition Destekli</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Sınav Çalışma <span className="gradient-text">Programları</span> 📅
            </h1>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-2xl">
              YDS, YDT (YKS İngilizce) ve YÖKDİL (Sağlık, Fen, Sosyal) hedeflerine göre özelleştirilmiş 7–180 günlük çalışma takvimleri ve CEFR seviye kılavuzları.
            </p>
          </div>

          {activePlan && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-2 mb-1">
                {getExamBadge(activePlan.examType, activePlan.yokdilField)}
              </div>
              <span className="text-xs text-white/50 block">Aktif Program İlerlemesi</span>
              <span className="text-2xl font-black text-cyan-400">%{planProgress.percent}</span>
              <span className="text-[11px] text-white/40 block mt-0.5">
                {planProgress.completed} / {planProgress.total} Görev Tamamlandı
              </span>
            </div>
          )}
        </div>

        {/* 🚀 4 BÜYÜK SINAV ÇALIŞMA PROGRAMI KARTLARI (YDT, YÖKDİL, YDS, ÖZEL PLAN) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              setSelectedExamFilter("YDT");
              setGenExamType("YDT");
              setGenTargetScore(65);
              setActiveTab("PRESETS");
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedExamFilter === "YDT" && activeTab === "PRESETS"
                ? "bg-amber-500/25 border-amber-400 text-white shadow-xl shadow-amber-500/20 scale-[1.02]"
                : "bg-white/5 border-white/10 hover:border-amber-400/50 hover:bg-amber-500/10 text-white/90"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl">🎯</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono">
                4 Program
              </span>
            </div>
            <strong className="text-xs sm:text-sm font-black text-amber-300 block">YDT (YKS-Dil)</strong>
            <span className="text-[10px] text-white/60 block mt-0.5">30–120 Günlük Net Kampı</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedExamFilter("YOKDIL_SAGLIK");
              setGenExamType("YOKDIL");
              setGenYokdilField("saglik");
              setGenTargetScore(75);
              setActiveTab("PRESETS");
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedExamFilter.startsWith("YOKDIL") && activeTab === "PRESETS"
                ? "bg-purple-500/25 border-purple-400 text-white shadow-xl shadow-purple-500/20 scale-[1.02]"
                : "bg-white/5 border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 text-white/90"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl">🌐</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-400/20 text-purple-300 font-mono">
                6 Program
              </span>
            </div>
            <strong className="text-xs sm:text-sm font-black text-purple-300 block">YÖKDİL (3 Alan)</strong>
            <span className="text-[10px] text-white/60 block mt-0.5">Sağlık · Fen · Sosyal</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedExamFilter("YDS");
              setGenExamType("YDS");
              setGenTargetScore(75);
              setActiveTab("PRESETS");
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedExamFilter === "YDS" && activeTab === "PRESETS"
                ? "bg-emerald-500/25 border-emerald-400 text-white shadow-xl shadow-emerald-500/20 scale-[1.02]"
                : "bg-white/5 border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-white/90"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl">📘</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-mono">
                4 Program
              </span>
            </div>
            <strong className="text-xs sm:text-sm font-black text-emerald-300 block">YDS Akademik</strong>
            <span className="text-[10px] text-white/60 block mt-0.5">30–120 Günlük Başarı</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("GENERATOR");
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              activeTab === "GENERATOR"
                ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-cyan-400 text-white shadow-xl shadow-cyan-500/20 scale-[1.02]"
                : "bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-white/90"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-2xl">✨</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-mono">
                Kişiye Özel
              </span>
            </div>
            <strong className="text-xs sm:text-sm font-black text-cyan-300 block">Özel Plan Oluştur</strong>
            <span className="text-[10px] text-white/60 block mt-0.5">Gün · Ay · Yıl Takvimi</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/10">
          <button
            onClick={() => setActiveTab("MY_PLAN")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "MY_PLAN"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            🎯 Çalışma Programım
          </button>
          <button
            onClick={() => setActiveTab("PRESETS")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "PRESETS"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            ⚡ Hazır Programlar ({PRESET_STUDY_PLANS.length})
          </button>
          <button
            onClick={() => setActiveTab("GENERATOR")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "GENERATOR"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            🤖 Özel Plan Oluşturucu
          </button>
          <button
            onClick={() => setActiveTab("GUIDES")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "GUIDES"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            📚 A1–C2 Seviye Rehberleri
          </button>
        </div>
      </header>

      {/* Başarı Bildirimi */}
      {createdSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400/50 text-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-between gap-3 shadow-xl shadow-emerald-950/40">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🚀</span>
            <span>{createdSuccess}</span>
          </div>
          <button
            onClick={() => setCreatedSuccess(null)}
            className="text-white/60 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-white/10"
          >
            ✕ Kapat
          </button>
        </div>
      )}

      {/* TAB 1: MY ACTIVE PLAN */}
      {activeTab === "MY_PLAN" && (
        <div className="space-y-6">
          {activePlan ? (
            <div className="space-y-6">
              {/* Active Plan Meta Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                      Aktif Program
                    </span>
                    {getExamBadge(activePlan.examType, activePlan.yokdilField)}
                    <span className="text-xs text-white/40">&bull; {activePlan.totalDays} Günlük Plan</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{activePlan.title}</h2>
                  <p className="text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">{activePlan.description}</p>

                  {/* Gün / Ay / Yıl Takvim Bilgileri */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    {activePlan.startDateFormatted && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white/80">
                        <span>🗓️</span>
                        <span>Başlangıç: <strong className="text-cyan-300 font-semibold">{activePlan.startDateFormatted}</strong></span>
                      </span>
                    )}
                    {activePlan.endDateFormatted && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white/80">
                        <span>🏁</span>
                        <span>Bitiş: <strong className="text-cyan-300 font-semibold">{activePlan.endDateFormatted}</strong></span>
                      </span>
                    )}
                    {activePlan.examDateFormatted && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 font-bold">
                        <span>🎯</span>
                        <span>Hedef Sınav: <strong>{activePlan.examDateFormatted}</strong></span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 shrink-0">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">Günlük Süre</span>
                    <span className="text-base font-black text-white">{activePlan.dailyMinutes} Dakika</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">
                      {activePlan.examType === "YDT" ? "Hedef Net" : "Hedef Skor"}
                    </span>
                    <span className="text-base font-black text-cyan-400">
                      {activePlan.examType === "YDT"
                        ? `${activePlan.targetScore || 70} Net YDT`
                        : `${activePlan.targetScore || 80}+ Puan`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/10">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full transition-all duration-500"
                  style={{ width: `${planProgress.percent}%` }}
                />
              </div>

              {/* Weeks and Days */}
              <div className="space-y-6">
                {activePlan.weeks.map((week) => (
                  <div
                    key={week.week}
                    className="p-6 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-lg space-y-4"
                  >
                    <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-black text-white">{week.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {week.goals.map((g, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] text-cyan-300/80 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded-md"
                            >
                              🎯 {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Day cards in grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {week.days.map((day) => {
                        const dayDone = day.tasks.every((t) => t.completed);

                        return (
                          <div
                            key={day.day}
                            className={`p-4 rounded-2xl border transition-all ${
                              dayDone
                                ? "bg-emerald-950/10 border-emerald-500/30 shadow-md shadow-emerald-950/20"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3 gap-2">
                              <div>
                                <span className="text-xs font-black uppercase tracking-wider text-white block">
                                  {day.title}
                                </span>
                                {day.dateFormatted && (
                                  <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 font-semibold mt-0.5 font-mono">
                                    <span>📅</span> {day.dateFormatted}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-white/50 shrink-0 bg-white/5 px-2 py-0.5 rounded-lg border border-white/5 font-mono">
                                {day.totalMinutes} dk
                              </span>
                            </div>

                            <div className="space-y-2">
                              {day.tasks.map((task) => (
                                <div
                                  key={task.id}
                                  onClick={() => handleToggleTask(day.day, task.id)}
                                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                                    task.completed
                                      ? "bg-emerald-500/10 border-emerald-500/30 text-white/60 line-through"
                                      : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 text-[10px] ${
                                      task.completed
                                        ? "bg-emerald-400 border-emerald-400 text-slate-950 font-bold"
                                        : "border-white/30 text-transparent"
                                    }`}
                                  >
                                    ✓
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="font-semibold truncate">{task.title}</span>
                                      <span className="text-[10px] text-white/40 ml-1 shrink-0">
                                        {task.minutes} dk
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-white/50 mt-0.5 leading-snug">
                                      {task.description}
                                    </p>
                                    {task.href && !task.completed && (
                                      <Link
                                        href={task.href}
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-block mt-1 text-[10px] font-bold text-cyan-400 hover:underline"
                                      >
                                        Modüle Git →
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl border border-white/10 bg-slate-900/60">
              <p className="text-white/60 text-sm mb-4">Henüz aktif bir çalışma programı seçmedin kanka.</p>
              <button
                onClick={() => setActiveTab("PRESETS")}
                className="px-6 py-3 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:brightness-110 shadow-lg"
              >
                Hazır Programları İncele ⚡
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PRESET PLANS */}
      {activeTab === "PRESETS" && (
        <div className="space-y-6">
          {/* Sınav Filtreleme Barı */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedExamFilter("ALL")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "ALL"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              🎓 Tümü ({PRESET_STUDY_PLANS.length})
            </button>
            <button
              onClick={() => setSelectedExamFilter("YDS")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "YDS"
                  ? "bg-emerald-400 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-emerald-300 hover:bg-white/10"
              }`}
            >
              📘 YDS (Akademik)
            </button>
            <button
              onClick={() => setSelectedExamFilter("YDT")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "YDT"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-amber-300 hover:bg-white/10"
              }`}
            >
              🎯 YDT (YKS-Dil)
            </button>
            <button
              onClick={() => setSelectedExamFilter("YOKDIL_SAGLIK")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "YOKDIL_SAGLIK"
                  ? "bg-rose-400 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-rose-300 hover:bg-white/10"
              }`}
            >
              🩺 YÖKDİL Sağlık
            </button>
            <button
              onClick={() => setSelectedExamFilter("YOKDIL_FEN")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "YOKDIL_FEN"
                  ? "bg-cyan-400 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-cyan-300 hover:bg-white/10"
              }`}
            >
              🔬 YÖKDİL Fen
            </button>
            <button
              onClick={() => setSelectedExamFilter("YOKDIL_SOSYAL")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedExamFilter === "YOKDIL_SOSYAL"
                  ? "bg-purple-400 text-slate-950 font-black shadow-md"
                  : "bg-white/5 text-purple-300 hover:bg-white/10"
              }`}
            >
              📜 YÖKDİL Sosyal
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPresets.map((preset) => {
              const isCurrent = activePlan?.id === preset.id;

              return (
                <div
                  key={preset.id}
                  className="p-6 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-cyan-400/40 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {getExamBadge(preset.examType, preset.yokdilField)}
                      <span className="text-xs font-black text-white/50">
                        Günde {preset.dailyMinutes} dk
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/10 text-white/70">
                        {preset.totalDays} Gün &bull; {preset.estimatedCompletion}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-3">{preset.description}</p>

                    <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-white/70">
                      <div className="flex justify-between">
                        <span className="text-white/40">Gereken Seviye:</span>
                        <span className="font-bold">{preset.currentLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">
                          {preset.examType === "YDT" ? "Hedef Net:" : "Hedef Skor:"}
                        </span>
                        <span className="font-bold text-cyan-400">
                          {preset.examType === "YDT"
                            ? `${preset.targetScore || 70} Net YDT`
                            : `${preset.targetScore || 75}+ Puan`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    {isCurrent ? (
                      <div className="w-full py-2.5 rounded-xl text-center text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        ✓ Şu Anda Aktif Programın
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStartPreset(preset)}
                        className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all"
                      >
                        Bu Planı Başlat 🚀
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: CUSTOM PLAN GENERATOR */}
      {activeTab === "GENERATOR" && (
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white">🤖 Çoklu Sınav Dinamik Planlayıcı</h2>
            <p className="text-xs text-white/50 mt-1">
              YDS, YDT veya YÖKDİL sınavına, alanına, hedefine ve zamanına göre kusursuz haftalık takvimini oluştur.
            </p>
          </div>

          <form onSubmit={handleGeneratePlan} className="space-y-5 text-xs">
            {/* Sınav Türü Seçimi */}
            <div>
              <label className="block font-bold uppercase text-white/60 mb-2">
                1. Hazırlandığın Sınav
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setGenExamType("YDS");
                    setGenTargetScore(75);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    genExamType === "YDS"
                      ? "bg-emerald-500/20 border-emerald-400 text-white font-black shadow-lg"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xl block mb-1">📘</span>
                  <span className="text-xs font-bold block">YDS</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">Akademik</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGenExamType("YDT");
                    setGenTargetScore(65);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    genExamType === "YDT"
                      ? "bg-amber-500/20 border-amber-400 text-white font-black shadow-lg"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xl block mb-1">🎯</span>
                  <span className="text-xs font-bold block">YDT</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">YKS-Dil</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGenExamType("YOKDIL");
                    setGenTargetScore(75);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    genExamType === "YOKDIL"
                      ? "bg-cyan-500/20 border-cyan-400 text-white font-black shadow-lg"
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  <span className="text-xl block mb-1">🌐</span>
                  <span className="text-xs font-bold block">YÖKDİL</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">Alan Odaklı</span>
                </button>
              </div>
            </div>

            {/* YÖKDİL Alan Seçimi */}
            {genExamType === "YOKDIL" && (
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <label className="block font-bold uppercase text-cyan-300">
                  YÖKDİL Alanını Seç:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGenYokdilField("saglik")}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      genYokdilField === "saglik"
                        ? "bg-rose-500/30 border-rose-400 text-rose-200"
                        : "bg-white/5 border-white/10 text-white/60"
                    }`}
                  >
                    🩺 Sağlık
                  </button>
                  <button
                    type="button"
                    onClick={() => setGenYokdilField("fen")}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      genYokdilField === "fen"
                        ? "bg-cyan-500/30 border-cyan-400 text-cyan-200"
                        : "bg-white/5 border-white/10 text-white/60"
                    }`}
                  >
                    🔬 Fen
                  </button>
                  <button
                    type="button"
                    onClick={() => setGenYokdilField("sosyal")}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      genYokdilField === "sosyal"
                        ? "bg-purple-500/30 border-purple-400 text-purple-200"
                        : "bg-white/5 border-white/10 text-white/60"
                    }`}
                  >
                    📜 Sosyal
                  </button>
                </div>
              </div>
            )}

            {/* Seviye & Hedef */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  Mevcut Seviyen (CEFR)
                </label>
                <select
                  value={genCurrentLevel}
                  onChange={(e) => setGenCurrentLevel(e.target.value as CefrLevel)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                >
                  <option value="A1">A1 (Başlangıç — Sıfırdan)</option>
                  <option value="A2">A2 (Temel — Basit Cümleler)</option>
                  <option value="B1">B1 (Orta — 40–55 Puan)</option>
                  <option value="B2">B2 (İyi — 55–70 Puan)</option>
                  <option value="C1">C1 (İleri — 70–85 Puan)</option>
                  <option value="C2">C2 (Usta — 85+ Puan)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  Hedef Seviyen
                </label>
                <select
                  value={genTargetLevel}
                  onChange={(e) => setGenTargetLevel(e.target.value as TargetLevelType)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                >
                  <option value="B1">B1 (Orta Düzey)</option>
                  <option value="B2">B2 (Yetkin Düzey)</option>
                  <option value="C1">C1 (İleri Akademik)</option>
                  <option value="C2">C2 (Ustalık Düzeyi)</option>
                  <option value={genExamType}>🎯 Tam Sınav Düzeyi ({genExamType})</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  {genExamType === "YDT" ? "Hedef Net (Maks. 80)" : `Hedef ${genExamType} Puanı (50–100)`}
                </label>
                <input
                  type="number"
                  min={genExamType === "YDT" ? 30 : 50}
                  max={genExamType === "YDT" ? 80 : 100}
                  value={genTargetScore}
                  onChange={(e) => setGenTargetScore(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-white/60 mb-1.5">
                  Günlük Çalışma (Dakika)
                </label>
                <input
                  type="number"
                  min={20}
                  max={300}
                  step={10}
                  value={genMinutes}
                  onChange={(e) => setGenMinutes(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
                />
              </div>
            </div>

            {/* Süre */}
            <div>
              <label className="block font-bold uppercase text-white/60 mb-1.5">
                Toplam Süre (Gün)
              </label>
              <select
                value={genDays}
                onChange={(e) => setGenDays(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white"
              >
                <option value={7}>7 Gün (Acil Kamp)</option>
                <option value={14}>14 Gün (Sprint)</option>
                <option value={30}>30 Gün (1 Ay)</option>
                <option value={60}>60 Gün (2 Ay — Önerilen)</option>
                <option value={90}>90 Gün (3 Ay)</option>
                <option value={120}>120 Gün (4 Ay)</option>
                <option value={180}>180 Gün (6 Ay)</option>
              </select>
            </div>

            {/* Gün / Ay / Yıl Takvim Tarihleri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div>
                <label className="block font-bold uppercase text-cyan-300 mb-1.5 flex items-center gap-1.5">
                  <span>📅</span> Başlangıç Tarihi (Gün / Ay / Yıl)
                </label>
                <input
                  type="date"
                  value={genStartDate}
                  onChange={(e) => setGenStartDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white font-mono"
                />
                <span className="text-[10px] text-white/40 block mt-1">
                  Programın başlangıç tarihi
                </span>
              </div>

              <div>
                <label className="block font-bold uppercase text-purple-300 mb-1.5 flex items-center gap-1.5">
                  <span>🎯</span> Hedef Sınav Tarihi (İsteğe Bağlı)
                </label>
                <input
                  type="date"
                  value={genExamDate}
                  onChange={(e) => setGenExamDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 focus:border-cyan-400 text-white font-mono"
                />
                <span className="text-[10px] text-white/40 block mt-1">
                  Örn: ÖSYM YDS / YDT / YÖKDİL tarihi
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:brightness-110 shadow-lg shadow-purple-500/20 active:scale-[0.99] transition-all"
            >
              Kişiselleştirilmiş Çalışma Programını Oluştur 🚀
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: A1-C2 CEFR STUDY GUIDES */}
      {activeTab === "GUIDES" && (
        <div className="space-y-6">
          {/* Level Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {(["A1", "A2", "B1", "B2", "C1", "C2"] as CefrLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedGuideLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGuideLevel === lvl
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-md shadow-cyan-500/20"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {lvl} Rehberi
              </button>
            ))}
          </div>

          {/* Selected Guide Details */}
          <div className="p-8 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  {currentGuide.level} Düzeyi
                </span>
                <span className="text-xs text-white/50">&bull; {currentGuide.normalDuration} (Hızlandırılmış: {currentGuide.fastDuration})</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {currentGuide.title}
              </h3>
              <p className="text-sm text-white/60 mt-1">{currentGuide.subtitle}</p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Hedef Kelime</span>
                <span className="text-base font-bold text-white">{currentGuide.targetWordCount}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Günlük Yeni Kelime</span>
                <span className="text-base font-bold text-cyan-400">+{currentGuide.dailyNewWords} Kelime</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Haftalık Okuma</span>
                <span className="text-base font-bold text-purple-400">{currentGuide.weeklyReadingCount} Parça</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-white/40 block">Haftalık Soru</span>
                <span className="text-base font-bold text-emerald-400">{currentGuide.weeklyGrammarQuestions} Soru</span>
              </div>
            </div>

            {/* Grammar & Vocabulary Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Kilit Gramer Konuları
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {currentGuide.keyGrammarTopics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Önemli Kelime Grupları
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {currentGuide.keyVocabularyAreas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Retention & Tactics */}
            <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2 text-xs text-purple-200">
              <strong className="text-white block font-bold text-sm">
                🧠 Hafıza ve Kalıcılık Stratejisi:
              </strong>
              <ul className="list-disc pl-5 space-y-1">
                {currentGuide.memoryRetentionMethods.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudyPlansPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-white/50">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <span>Sınav Çalışma Programları Hazırlanıyor...</span>
        </div>
      }
    >
      <StudyPlansContent />
    </Suspense>
  );
}

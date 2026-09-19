"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, Clock, Flame, Sparkles, ArrowRight } from "lucide-react";
import { useUsage } from "@/lib/store";
import {
  LevelAssessmentResult,
  LEVEL_COLORS,
  LEVEL_TEST_RESULT_STORAGE_KEY,
} from "@/lib/data-level-test";

interface DailyTask {
  id: string;
  title: string;
  description: string;
  durationMin: number;
  category: "vocab" | "grammar" | "reading" | "mistake";
  href: string;
  badge: string;
}

const BASE_TASKS: DailyTask[] = [
  {
    id: "task-daily-vocab",
    title: "Kelime & SM-2 Aralıklı Tekrar",
    description: "15 yeni akademik kelimeyi incele ve dünün kelimelerini aktif geri çağırma ile test et.",
    durationMin: 15,
    category: "vocab",
    href: "/vocabulary/flashcards",
    badge: "15 Dk",
  },
  {
    id: "task-daily-grammar",
    title: "Gramer Formülü & Soru Pratiği",
    description: "Zaman uyumu ve bağlaç şablonlarını renk kodlu özetle incele, 10 pratik sorusu çöz.",
    durationMin: 20,
    category: "grammar",
    href: "/grammar",
    badge: "20 Dk",
  },
  {
    id: "task-daily-reading",
    title: "Akademik Reading Parçası",
    description: "1 adet özgün Reader at Work tarzı okuma parçası oku ve kavrama sorularını yanıtla.",
    durationMin: 20,
    category: "reading",
    href: "/reading",
    badge: "20 Dk",
  },
  {
    id: "task-daily-mistake",
    title: "Yanlış Defteri & Çeldirici Analizi",
    description: "Önceki testlerde yapılan yanlışların doğru gerekçelerini incele ve çeldiricileri ele.",
    durationMin: 15,
    category: "mistake",
    href: "/tactics",
    badge: "15 Dk",
  },
];

export default function DailyTasksPanel() {
  const { addXp } = useUsage();
  const [levelAssessment, setLevelAssessment] = useState<LevelAssessmentResult | null>(null);
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});

  const todayKey = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const storageKey = `yds-master-daily-tasks-${todayKey}`;

  // Load level result and today's task completion state
  useEffect(() => {
    try {
      const rawLevel = window.localStorage.getItem(LEVEL_TEST_RESULT_STORAGE_KEY);
      if (rawLevel) {
        setLevelAssessment(JSON.parse(rawLevel));
      }
      const rawTasks = window.localStorage.getItem(storageKey);
      if (rawTasks) {
        setCompletedTaskIds(JSON.parse(rawTasks));
      }
    } catch {
      // SAFETY: storage read failover
    }
  }, [storageKey]);

  const handleToggle = (taskId: string) => {
    const isNowCompleted = !completedTaskIds[taskId];
    const updated = {
      ...completedTaskIds,
      [taskId]: isNowCompleted,
    };
    setCompletedTaskIds(updated);

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // SAFETY: storage write failover
    }

    if (isNowCompleted && addXp) {
      try {
        addXp(15, `daily_task_${todayKey}_${taskId}`, "study_plan_daily");
      } catch {
        // SAFETY: XP award failover
      }
    }
  };

  const completedCount = Object.values(completedTaskIds).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / BASE_TASKS.length) * 100);

  const levelColor = levelAssessment
    ? LEVEL_COLORS[levelAssessment.estimatedLevel] || LEVEL_COLORS.B1
    : null;

  return (
    <section className="my-12">
      <div className="card-vibrant p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-purple-950/30 border border-white/15 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20 shrink-0">
              🎯
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">Bugün Ne Çalışmalıyım?</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
                  Günlük Görevler
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                {levelAssessment ? (
                  <>
                    Seviyen: <strong className={levelColor?.textClass}>{levelAssessment.estimatedLevel}</strong> &bull; Günlük hedef: 70 dakika
                  </>
                ) : (
                  "Adaptif YDS programın için önerilen günlük çalışma akışı"
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs font-bold text-white/50 block">Bugünkü İlerlemen</span>
              <span className="text-lg font-black text-cyan-400 font-mono">
                {completedCount} / {BASE_TASKS.length} Tamamlandı
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center font-black text-xs text-cyan-300 bg-white/5">
              %{progressPercent}
            </div>
          </div>
        </div>

        {/* Level Test Prompt if not yet taken */}
        {!levelAssessment && (
          <div className="mb-6 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-xs font-bold text-white">Seviyeni henüz ölçmedin kanka!</h4>
                <p className="text-[11px] text-white/70">
                  42 soruluk mini seviye tespit sınavına girerek görevleri tam seviyene optimize edebilirsin.
                </p>
              </div>
            </div>
            <Link
              href="/level-test"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:brightness-110 shadow-md shrink-0 text-center transition-all"
            >
              Seviyemi Ölç 📊
            </Link>
          </div>
        )}

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {BASE_TASKS.map((task) => {
            const isDone = !!completedTaskIds[task.id];

            return (
              <div
                key={task.id}
                className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                  isDone
                    ? "bg-emerald-950/20 border-emerald-500/30 text-white/60"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => handleToggle(task.id)}
                  className="mt-0.5 shrink-0 transition-transform active:scale-90"
                  aria-label={isDone ? "Görevi tamamlanmadı yap" : "Görevi tamamla"}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-white/30 hover:text-white/70" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className={`text-sm font-bold truncate ${
                        isDone ? "line-through text-white/50" : "text-white"
                      }`}
                    >
                      {task.title}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-white/70">
                      {task.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                    {task.description}
                  </p>
                </div>

                <Link
                  href={task.href}
                  className={`shrink-0 p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                    isDone
                      ? "border-white/10 text-white/40 hover:text-white"
                      : "border-cyan-400/40 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20"
                  }`}
                  title="Modüle git"
                >
                  <span>Çalış</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer info & CTA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/50">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Her tamamlanan günlük görev +15 XP kazandırır!</span>
          </div>

          <Link
            href="/study-plans"
            className="font-bold text-cyan-300 hover:text-cyan-200 flex items-center gap-1"
          >
            <span>Tüm Çalışma Planlarını İncele</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

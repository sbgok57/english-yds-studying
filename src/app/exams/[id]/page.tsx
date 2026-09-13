"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Loader2, ArrowLeft, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";
import type { ExamQuestion } from "@/components/exams/OptikForm";

// KRİTİK: ssr: false -> window/localStorage/hydration çökmeleri tamamen imkânsız hale gelir
const OptikForm = dynamic(() => import("@/components/exams/OptikForm"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[70vh] flex items-center justify-center text-white">
      <div className="text-center space-y-3">
        <Loader2 className="w-12 h-12 text-yellow-300 animate-spin mx-auto" />
        <p className="font-bold text-sm">80 Soruluk Optik Form Yükleniyor...</p>
      </div>
    </div>
  ),
});

export default function ExamDetailPage() {
  const params = useParams();
  const examId = (params?.id as string) || "";

  const [examData, setExamData] = useState<{
    id: string;
    title: string;
    durationMinutes: number;
    isReal: boolean;
    questions: ExamQuestion[];
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!examId) return;

    let isMounted = true;
    setLoading(true);
    setFetchError(null);

    fetch(`/api/exams/${encodeURIComponent(examId)}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Sınav yüklenemedi (HTTP ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setExamData(data);
        }
      })
      .catch((err) => {
        console.warn("Sınav veri çekme uyarısı:", err);
        if (isMounted) {
          setFetchError(err.message || "Sınav verisi alınamadı");
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [examId]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white">
        <div className="text-center space-y-3">
          <Loader2 className="w-12 h-12 text-yellow-300 animate-spin mx-auto" />
          <p className="font-bold text-sm">80 Soruluk Optik Form Hazırlanıyor...</p>
        </div>
      </div>
    );
  }

  // Sınav bulunamadı veya sorular henüz yüklenmemişse: Asla çökme, bilgi ekranı göster
  if (fetchError || !examData || !Array.isArray(examData.questions) || examData.questions.length === 0) {
    const title = examData?.title || `YDS Sınavı (${examId})`;
    const count = examData?.questions?.length || 0;

    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-8 max-w-lg text-center shadow-2xl space-y-4 text-white">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto text-4xl">
            🚧
          </div>
          <h1 className="text-2xl font-black text-amber-300">{title}</h1>
          <p className="font-semibold text-sm text-white/90">
            Bu sınavın içeriği hazırlanıyor ({count}/80 soru yüklendi).
          </p>
          <p className="text-xs text-white/70">
            PDF / Quizlet içe aktarma arayüzünden bu sınava ait soru kitapçığını yükleyebilirsiniz.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-3">
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-6 py-3 rounded-full text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" /> Diğer Sınavlara Bak
            </Link>
            <Link
              href="/import"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-full text-sm border border-white/20 transition-colors"
            >
              <FileText className="w-4 h-4" /> PDF / Soru Yükle
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <OptikForm
      examId={examData.id}
      examTitle={examData.title}
      questions={examData.questions}
      durationMinutes={examData.durationMinutes || 180}
      isRealExam={examData.isReal}
    />
  );
}

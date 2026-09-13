"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import OptikForm, { type ExamQuestion } from "@/components/exams/OptikForm";
import { Loader2 } from "lucide-react";

export default function ExamDetailPage() {
  const params = useParams();
  const examId = params?.id as string;

  const [examData, setExamData] = useState<{
    id: string;
    title: string;
    durationMinutes: number;
    isReal: boolean;
    questions: ExamQuestion[];
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!examId) return;

    fetch(`/api/exams/${examId}`)
      .then((res) => res.json())
      .then((data) => setExamData(data))
      .catch((err) => console.error("Sınav yüklenemedi:", err))
      .finally(() => setLoading(false));
  }, [examId]);

  if (loading || !examData) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white">
        <div className="text-center space-y-3">
          <Loader2 className="w-12 h-12 text-yellow-300 animate-spin mx-auto" />
          <p className="font-bold text-sm">80 Soruluk Optik Form Yükleniyor...</p>
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

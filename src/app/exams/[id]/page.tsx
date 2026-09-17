import { getExamMeta, getExamQuestions } from "@/lib/data-exams";
import ExamRunner from "@/components/ExamRunner";
import ErrorBoundary from "@/components/ErrorBoundary";

export function generateMetadata({ params }: { params: { id: string } }) {
  const id = params?.id || "yds-2024-ilkbahar";
  const meta = getExamMeta(id);
  return {
    title: `${meta.title} — YDS Master Optik Sınav`,
    description: `${meta.title}: ${meta.questionCount} soru, ${meta.durationMin} dakikalık online optik form.`,
  };
}

export default function ExamPage({ params }: { params: { id: string } }) {
  // id ne olursa olsun güvenli veri döndürülür → client-side exception oluşmaz.
  const id = params?.id || "yds-2024-ilkbahar";
  const meta = getExamMeta(id);
  const questions = getExamQuestions(id);
  return (
    <ErrorBoundary label="Optik sınav">
      <ExamRunner meta={meta} questions={questions} />
    </ErrorBoundary>
  );
}

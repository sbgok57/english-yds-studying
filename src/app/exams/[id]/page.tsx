import { getExamMeta, getExamQuestions } from "@/lib/data-exams";
import ExamRunner from "@/components/ExamRunner";
import ErrorBoundary from "@/components/ErrorBoundary";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id: routeId } = await params;
  const id = routeId || "yds-2024-ilkbahar";
  const meta = getExamMeta(id);
  return {
    title: `${meta.title} — DİL MASTER Optik Sınav`,
    description: `${meta.title}: ${meta.questionCount} soru, ${meta.durationMin} dakikalık online optik form.`,
  };
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: routeId } = await params;
  // id ne olursa olsun güvenli veri döndürülür → client-side exception oluşmaz.
  const id = routeId || "yds-2024-ilkbahar";
  const meta = getExamMeta(id);
  const questions = getExamQuestions(id);
  return (
    <ErrorBoundary label="Optik sınav">
      <ExamRunner meta={meta} questions={questions} />
    </ErrorBoundary>
  );
}

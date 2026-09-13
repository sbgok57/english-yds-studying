import { notFound } from "next/navigation";
import { GRAMMAR_TOPICS } from "@/lib/data-grammar";
import GrammarTopicView from "@/components/GrammarTopicView";
import ErrorBoundary from "@/components/ErrorBoundary";

export function generateStaticParams() {
  return GRAMMAR_TOPICS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = GRAMMAR_TOPICS.find((t) => t.slug === params.slug);
  return {
    title: topic ? `${topic.title} — YDS Master Gramer` : "Gramer — YDS Master",
  };
}

export default function GrammarTopicPage({ params }: { params: { slug: string } }) {
  const topic = GRAMMAR_TOPICS.find((t) => t.slug === params.slug);
  if (!topic) notFound();
  return (
    <ErrorBoundary label="Gramer konusu">
      <GrammarTopicView topic={topic} />
    </ErrorBoundary>
  );
}

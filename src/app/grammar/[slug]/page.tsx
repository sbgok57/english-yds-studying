import { redirect } from "next/navigation";
import { GRAMMAR_TOPICS } from "@/lib/data-grammar";
import { findGrammarByAlias } from "@/lib/grammar-extras";
import GrammarTopicView from "@/components/GrammarTopicView";
import ErrorBoundary from "@/components/ErrorBoundary";
import TopicFallback from "@/components/TopicFallback";

// Bilinmeyen slug'lar da sunucuda işlenebilsin → asla 404 olmaz.
export const dynamicParams = true;

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
  let topic = GRAMMAR_TOPICS.find((t) => t.slug === params.slug);

  // İngilizce/takma adla gelindiyse (örn. "simple-present") doğru konuya yönlendir.
  if (!topic) {
    const canonical = findGrammarByAlias(params.slug);
    if (canonical) redirect(`/grammar/${canonical}`);
  }

  if (!topic) {
    return (
      <TopicFallback
        title="Gramer konusu"
        slug={params.slug}
        items={GRAMMAR_TOPICS.map((t) => ({ slug: t.slug, title: t.title, emoji: t.emoji }))}
        listHref="/grammar"
      />
    );
  }
  return (
    <ErrorBoundary label="Gramer konusu">
      <GrammarTopicView topic={topic} />
    </ErrorBoundary>
  );
}

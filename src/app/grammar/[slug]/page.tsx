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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = GRAMMAR_TOPICS.find((t) => t.slug === slug);
  return {
    title: topic ? `${topic.title} — DİL MASTER Gramer` : "Gramer — DİL MASTER",
  };
}

export default async function GrammarTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let topic = GRAMMAR_TOPICS.find((t) => t.slug === slug);

  // İngilizce/takma adla gelindiyse (örn. "simple-present") doğru konuya yönlendir.
  if (!topic) {
    const canonical = findGrammarByAlias(slug);
    if (canonical) redirect(`/grammar/${canonical}`);
  }

  if (!topic) {
    return (
      <TopicFallback
        title="Gramer konusu"
        slug={slug}
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

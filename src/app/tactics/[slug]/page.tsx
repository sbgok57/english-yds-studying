import { TACTICS } from "@/lib/data-tactics";
import TacticView from "@/components/TacticView";
import ErrorBoundary from "@/components/ErrorBoundary";
import TopicFallback from "@/components/TopicFallback";

// Bilinmeyen slug'lar da sunucuda işlenebilsin → asla 404 olmaz.
export const dynamicParams = true;

export function generateStaticParams() {
  return TACTICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tactic = TACTICS.find((t) => t.slug === slug);
  return {
    title: tactic ? `${tactic.title} — DİL MASTER Taktikleri` : "Taktikler — DİL MASTER",
  };
}

export default async function TacticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tactic = TACTICS.find((t) => t.slug === slug);
  if (!tactic) {
    return (
      <TopicFallback
        title="Soru taktiği"
        slug={slug}
        items={TACTICS.map((t) => ({ slug: t.slug, title: t.title, emoji: t.emoji }))}
        listHref="/tactics"
      />
    );
  }
  return (
    <ErrorBoundary label="Soru taktiği">
      <TacticView tactic={tactic} />
    </ErrorBoundary>
  );
}

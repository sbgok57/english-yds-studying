import { TACTICS } from "@/lib/data-tactics";
import TacticView from "@/components/TacticView";
import ErrorBoundary from "@/components/ErrorBoundary";
import TopicFallback from "@/components/TopicFallback";

// Bilinmeyen slug'lar da sunucuda işlenebilsin → asla 404 olmaz.
export const dynamicParams = true;

export function generateStaticParams() {
  return TACTICS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tactic = TACTICS.find((t) => t.slug === params.slug);
  return {
    title: tactic ? `${tactic.title} — YDS Master Taktikleri` : "Taktikler — YDS Master",
  };
}

export default function TacticPage({ params }: { params: { slug: string } }) {
  const tactic = TACTICS.find((t) => t.slug === params.slug);
  if (!tactic) {
    return (
      <TopicFallback
        title="Soru taktiği"
        slug={params.slug}
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

import { notFound } from "next/navigation";
import { TACTICS } from "@/lib/data-tactics";
import TacticView from "@/components/TacticView";
import ErrorBoundary from "@/components/ErrorBoundary";

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
  if (!tactic) notFound();
  return (
    <ErrorBoundary label="Soru taktiği">
      <TacticView tactic={tactic} />
    </ErrorBoundary>
  );
}

import { notFound } from "next/navigation";
import GrammarLesson from "@/components/grammar/GrammarLesson";
import { GRAMMAR_TOPICS } from "@/lib/grammar-data";

export const dynamic = "force-dynamic";

export default async function GrammarSlugPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;

  const topic = GRAMMAR_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GrammarLesson topic={topic} />
    </div>
  );
}

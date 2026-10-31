import { Suspense } from "react";
import { GRAMMAR_TOPICS } from "@/lib/data-grammar";
import { findGrammarByAlias } from "@/lib/grammar-extras";
import { redirect } from "next/navigation";
import TopicPracticeRunner from "./TopicPracticeRunner";

export const dynamicParams = true;

export function generateStaticParams() {
  return GRAMMAR_TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = GRAMMAR_TOPICS.find((t) => t.slug === slug);
  return {
    title: topic ? `${topic.title} 100 Soru Testi — DİL MASTER` : "Gramer Konu Testi — DİL MASTER",
  };
}

export default async function GrammarPracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let topic = GRAMMAR_TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    const canonical = findGrammarByAlias(slug);
    if (canonical) redirect(`/grammar/${canonical}/practice`);
  }

  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto p-12 text-center text-white/50 font-mono text-sm">
          Konu Testi Yukleniyor... ⚡
        </div>
      }
    >
      <TopicPracticeRunner slug={slug} topic={topic} />
    </Suspense>
  );
}

import { Suspense } from "react";
import { GRAMMAR_TOPICS } from "@/lib/data-grammar";
import { findGrammarByAlias } from "@/lib/grammar-extras";
import { redirect } from "next/navigation";
import TopicPracticeRunner from "./TopicPracticeRunner";

export const dynamicParams = true;

export function generateStaticParams() {
  return GRAMMAR_TOPICS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = GRAMMAR_TOPICS.find((t) => t.slug === params.slug);
  return {
    title: topic ? `${topic.title} 100 Soru Testi — YDS Master` : "Gramer Konu Testi — YDS Master",
  };
}

export default function GrammarPracticePage({ params }: { params: { slug: string } }) {
  let topic = GRAMMAR_TOPICS.find((t) => t.slug === params.slug);

  if (!topic) {
    const canonical = findGrammarByAlias(params.slug);
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
      <TopicPracticeRunner slug={params.slug} topic={topic} />
    </Suspense>
  );
}

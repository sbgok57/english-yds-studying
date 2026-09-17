import { Suspense } from "react";
import MixedGrammarRunner from "@/components/MixedGrammarRunner";

export const metadata = {
  title: "500 Karışık Gramer Sorusu — YDS Master",
  description: "Tüm konulardan çoklu kural içeren 500 karışık soru, zayıf konu tespiti ve detaylı çözüm analizleri.",
};

export default function MixedGrammarPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto p-12 text-center text-white/50 font-mono text-sm">
          Karışık Soru Bankası Yükleniyor... ⚡
        </div>
      }
    >
      <MixedGrammarRunner />
    </Suspense>
  );
}

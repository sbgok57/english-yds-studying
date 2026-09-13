import React from "react";

/**
 * ^^kelime^^ → kırmızı + altı çizili kritik vurgu
 * **kelime** → sarı kalın vurgu
 */
export default function RichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = (text || "").split(/(\^\^.*?\^\^|\*\*.*?\*\*)/g);
  return (
    <span className={className}>
      {parts.map((p, i) => {
        if (p.startsWith("^^") && p.endsWith("^^") && p.length > 4) {
          return (
            <span key={i} className="crit">
              {p.slice(2, -2)}
            </span>
          );
        }
        if (p.startsWith("**") && p.endsWith("**") && p.length > 4) {
          return (
            <strong key={i} className="text-amber-300 font-bold">
              {p.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}

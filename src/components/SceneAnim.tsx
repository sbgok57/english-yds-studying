"use client";

/** GIF benzeri animasyonlu emoji sahnesi — çevrimdışı çalışır, CPU dostu (sadece transform). */
const SCENES: Record<string, string[]> = {
  tenses: ["⏳", "🕰️", "⏰", "📅"],
  "passive-voice": ["🔄", "🏗️", "🪄", "🎭"],
  modals: ["🎛️", "🔮", "🧭", "🚦"],
  conditionals: ["🔀", "🌦️", "🎲", "🪞"],
  "relative-clauses": ["🔗", "🧬", "🪢", "🧩"],
  "noun-clauses": ["🧩", "📦", "🎁", "🪆"],
  "gerunds-infinitives": ["⚙️", "🔩", "🛞", "🏃"],
  participles: ["✂️", "🧵", "🪡", "📎"],
  causatives: ["🛠️", "👷", "🔨", "⚒️"],
  conjunctions: ["🔀", "🌉", "🛤️", "🧲"],
  prepositions: ["📍", "🗺️", "📌", "🧭"],
  "phrasal-verbs": ["🧗", "🪜", "🎢", "🚀"],
  determiners: ["🔢", "⚖️", "🎛️", "🧮"],
  comparatives: ["⚖️", "📏", "📊", "🏆"],
  inversion: ["🔃", "🙃", "🔄", "🎢"],
  // kelime kategorileri
  "YDS-Çekirdek": ["📚", "💡", "🧠", "✨"],
  Phrasal: ["🧗", "🪜", "🎢", "🚀"],
  default: ["🎬", "🍿", "🎞️", "📽️"],
};

export default function SceneAnim({
  slug,
  size = "text-3xl",
  className = "",
}: {
  slug: string;
  size?: string;
  className?: string;
}) {
  const emojis = SCENES[slug] || SCENES.default;
  const delays = ["0s", "-1.4s", "-2.8s", "-4.2s"];

  return (
    <div className={`flex items-center justify-center gap-4 py-2 select-none ${className}`} aria-hidden>
      {emojis.map((e, i) => (
        <span
          key={i}
          className={`${size} inline-block`}
          style={{
            animation: `float 3.4s ease-in-out ${delays[i % delays.length]} infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {e}
        </span>
      ))}
    </div>
  );
}

export type GeneratedImageStyle = "3d" | "photorealistic" | "cartoon";

function cleanPromptValue(value: string, maxLength: number): string {
  return value.replace(/[<>\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function generateVocabularyVisualPrompt(
  english: string,
  turkish: string,
  type: string,
  example: string,
  style: GeneratedImageStyle,
): string {
  const cleanEn = cleanPromptValue(english, 90);
  const cleanTr = cleanPromptValue(turkish, 180);
  const cleanType = cleanPromptValue(type, 40);
  const cleanExample = cleanPromptValue(example, 260);
  const context = cleanExample ? ` Use this sentence only to understand the intended sense: “${cleanExample}”.` : "";

  const visualDirection: Record<GeneratedImageStyle, string> = {
    "3d": "Create a premium tactile 3D editorial memory scene: a richly detailed miniature diorama, physically believable materials, realistic studio lighting and depth, vivid but tasteful colors, and one unmistakable focal action.",
    photorealistic: "Create a natural, high-quality photorealistic editorial photograph with real people or objects, believable environment, documentary-style lighting, realistic proportions, and one unmistakable focal action. Do not make it look like a render, diagram, icon, or stock-photo collage.",
    cartoon: "Create a polished, expressive 2D animated-film illustration for a vocabulary memory card: appealing hand-drawn character design, clean cel shading, lively gesture, clear silhouette, rich color, and a simple story-like scene that makes the meaning instantly memorable. Do not imitate any named studio or copyrighted character.",
  };

  return `${visualDirection[style]} The exact English vocabulary item is “${cleanEn}”; its Turkish meaning is “${cleanTr}”; part of speech: ${cleanType}.${context} Depict the intended sense through a clear, memorable scene; choose fitting people, objects, setting, and action. For an abstract word, use one intuitive physical metaphor rather than a semantic diagram. The vocabulary strings are guidance only and must never appear as visible text. No words, letters, numbers, labels, subtitles, diagrams, arrows, icons, emojis, charts, collages, or watermark.`;
}

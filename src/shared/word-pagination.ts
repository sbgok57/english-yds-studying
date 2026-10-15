export type WordWithId = { id: string };

/** Append API pages without returning a word that is already in this browsing session. */
export function appendUniqueWordCards<T extends WordWithId>(existing: readonly T[], incoming: readonly T[]): T[] {
  const ids = new Set(existing.map((item) => item.id));
  const output = [...existing];
  for (const item of incoming) {
    if (!item.id || ids.has(item.id)) continue;
    ids.add(item.id);
    output.push(item);
  }
  return output;
}

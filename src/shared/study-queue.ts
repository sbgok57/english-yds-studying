export type QueueWord = { wordId: string };

/** Keeps first occurrence order (due before new) and filters words already handled in this session. */
export function mergeUniqueStudyQueue<T extends QueueWord>(
  due: readonly T[],
  fresh: readonly T[],
  seenWordIds: ReadonlySet<string> = new Set(),
): T[] {
  const ids = new Set(seenWordIds);
  const result: T[] = [];
  for (const item of [...due, ...fresh]) {
    if (!item.wordId.trim() || ids.has(item.wordId)) continue;
    ids.add(item.wordId);
    result.push(item);
  }
  return result;
}

/** Add non-empty IDs to the seen set without mutating the caller's set. */
export function rememberStudyWords(
  previous: ReadonlySet<string>,
  wordIds: readonly string[],
  maximum = 2_000,
): Set<string> {
  const next = new Set(previous);
  for (const id of wordIds) {
    if (!id.trim()) continue;
    next.add(id);
  }
  const boundedMaximum = Number.isInteger(maximum) ? Math.max(1, Math.min(10_000, maximum)) : 2_000;
  while (next.size > boundedMaximum) {
    const oldest = next.values().next().value as string | undefined;
    if (oldest === undefined) break;
    next.delete(oldest);
  }
  return next;
}

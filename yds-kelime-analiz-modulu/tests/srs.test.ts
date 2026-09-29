import assert from "node:assert/strict";
import { test } from "node:test";

// Config doğrulaması modül yüklenirken çalışır. Testlerde gerçek servis anahtarı/DB gerekmez.
process.env.DATABASE_URL ??= "postgresql://test:test@localhost:5432/test";
process.env.ANTHROPIC_API_KEY ??= "test-only-not-a-real-key";
process.env.NODE_ENV = "test";

const now = new Date("2026-09-29T12:00:00.000Z");
let modulesPromise: Promise<{
  srs: typeof import("../src/srs");
  words: typeof import("../src/global-word-import");
}> | undefined;

function getModules() {
  modulesPromise ??= Promise.all([
    import("../src/srs"),
    import("../src/global-word-import"),
  ]).then(([srs, words]) => ({ srs, words }));
  return modulesPromise;
}

test("FSRS kartı bir puanlamadan sonra tekrar tarihini ileri alır", async () => {
  const { srs } = await getModules();
  const empty = srs.createInitialCard(now);
  const outcome = srs.scheduler.next(empty, now, srs.fsrsRatingByInput.GOOD);

  assert.equal(outcome.card.reps, 1);
  assert.ok(outcome.card.due.getTime() > now.getTime());
  assert.ok(outcome.card.stability > 0);
});

test("FSRS durumu JSON olarak saklanıp aynı Date/state ile geri yüklenir", async () => {
  const { srs } = await getModules();
  const outcome = srs.scheduler.next(
    srs.createInitialCard(now),
    now,
    srs.fsrsRatingByInput.GOOD,
  );
  const restored = srs.restoreCard(srs.persistCard(outcome.card), now);

  assert.equal(restored.due.toISOString(), outcome.card.due.toISOString());
  assert.equal(restored.state, outcome.card.state);
  assert.equal(restored.reps, outcome.card.reps);
  assert.equal(restored.stability, outcome.card.stability);
});

test("bozuk scheduler JSON'u sessizce sıfırlanmaz", async () => {
  const { srs } = await getModules();
  assert.throws(
    () => srs.restoreCard({ due: "not-a-date" }, now),
    srs.InvalidSchedulerStateError,
  );
});

test("PDF terimleri tekilleştirme için normalize edilir ve dosya yolu temizlenir", async () => {
  const { words } = await getModules();
  assert.equal(words.normalizeTerm("  AbanDON   "), "abandon");
  assert.equal(words.safeSourceFileName("../../yds-words.pdf"), "yds-words.pdf");
});

import assert from "node:assert/strict";
import { test } from "node:test";

function configureApiTestEnvironment(): void {
  process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test?schema=public";
  process.env.ANTHROPIC_API_KEY = "test-only-not-a-real-key";
  process.env.NODE_ENV = "test";
  // Kimlik sağlayıcısı olmadığı için bu dosya gerçek 401 sınırını test eder.
  delete process.env.DEV_USER_ID;
}

test("HTTP sınırı: kimlik doğrulama, request-id, parser hataları ve rate limit", async () => {
  configureApiTestEnvironment();
  const { app } = await import("../src/server");
  const server = app.listen(0, "127.0.0.1");

  await new Promise<void>((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const address = server.address();
  assert.ok(address && typeof address !== "string");
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    const missingRouteResponse = await fetch(`${baseUrl}/does-not-exist`);
    assert.equal(missingRouteResponse.status, 404);
    const missingRouteBody = (await missingRouteResponse.json()) as { code: string; requestId: string };
    assert.equal(missingRouteBody.code, "NOT_FOUND");
    assert.equal(missingRouteBody.requestId, missingRouteResponse.headers.get("x-request-id"));

    const adminResponse = await fetch(`${baseUrl}/api/admin/diagnostics`);
    assert.equal(adminResponse.status, 401);
    const adminBody = (await adminResponse.json()) as { code: string; requestId: string };
    assert.equal(adminBody.code, "AUTH_REQUIRED");
    assert.equal(adminBody.requestId, adminResponse.headers.get("x-request-id"));
    assert.match(adminBody.requestId, /^[0-9a-f-]{36}$/i);

    const invalidJsonResponse = await fetch(`${baseUrl}/api/words`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{not-json",
    });
    assert.equal(invalidJsonResponse.status, 400);
    const invalidJsonBody = (await invalidJsonResponse.json()) as { code: string; requestId: string };
    assert.equal(invalidJsonBody.code, "INVALID_JSON");
    assert.equal(invalidJsonBody.requestId, invalidJsonResponse.headers.get("x-request-id"));

    const oversizedResponse = await fetch(`${baseUrl}/api/words`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term: "x".repeat(512 * 1024) }),
    });
    assert.equal(oversizedResponse.status, 413);
    const oversizedBody = (await oversizedResponse.json()) as { code: string };
    assert.equal(oversizedBody.code, "PAYLOAD_TOO_LARGE");

    let finalResponse: Response | undefined;
    for (let i = 0; i < 60; i += 1) {
      finalResponse = await fetch(`${baseUrl}/api/session/me`);
    }
    assert.ok(finalResponse);
    assert.equal(finalResponse.status, 429);
    const rateLimitBody = (await finalResponse.json()) as { code: string; requestId: string };
    assert.equal(rateLimitBody.code, "RATE_LIMITED");
    assert.equal(rateLimitBody.requestId, finalResponse.headers.get("x-request-id"));
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});

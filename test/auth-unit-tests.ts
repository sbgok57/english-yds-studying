import assert from "assert";
import { getSafeDatabaseUrl } from "../src/lib/server-config";
import { signSessionToken, verifySessionToken } from "../src/lib/server-auth";
import {
  authSuccess,
  authError,
  generateRequestId,
  AUTH_ERROR_CODES,
} from "../src/lib/auth-contract";

async function runUnitTests() {
  console.log("▶ Starting Auth Unit Tests...");

  // 1. Database URL Resolution
  console.log("  Testing database URL resolution...");
  const localUrl = getSafeDatabaseUrl();
  assert(localUrl.startsWith("file:"), "Database URL must start with file:");
  assert(localUrl.includes("dev.db"), "Database URL must point to dev.db");

  // 2. Auth Contract
  console.log("  Testing auth contract helpers...");
  const reqId = generateRequestId();
  assert(reqId.startsWith("req_"), "RequestId must start with req_");

  const successRes = authSuccess({ foo: "bar" }, "Operation ok", reqId);
  assert.strictEqual(successRes.ok, true);
  assert.strictEqual(successRes.data.foo, "bar");
  assert.strictEqual(successRes.requestId, reqId);
  assert.strictEqual(successRes.message, "Operation ok");

  const errorRes = authError(
    AUTH_ERROR_CODES.INVALID_CREDENTIALS,
    "Hatalı şifre",
    "password",
    reqId
  );
  assert.strictEqual(errorRes.ok, false);
  assert.strictEqual(errorRes.error.code, "INVALID_CREDENTIALS");
  assert.strictEqual(errorRes.error.message, "Hatalı şifre");
  assert.strictEqual(errorRes.error.field, "password");
  assert.strictEqual(errorRes.requestId, reqId);

  // 3. Server Auth Token Signing & Verification
  console.log("  Testing session token signing and verification...");
  const testPayload = {
    userId: "usr_test_123",
    email: "test_kanka@ydsmaster.com",
    username: "test_kanka",
    name: "Test Kanka",
  };

  const token = await signSessionToken(testPayload);
  assert(typeof token === "string" && token.split(".").length === 3, "Token must be a valid 3-part JWT");

  const verified = await verifySessionToken(token);
  assert(verified !== null, "Verified payload must not be null");
  assert.strictEqual(verified?.userId, testPayload.userId);
  assert.strictEqual(verified?.email, testPayload.email);
  assert.strictEqual(verified?.username, testPayload.username);
  assert(typeof verified?.exp === "number", "Token must have numeric expiration");

  // 4. Tampered Token Rejection
  console.log("  Testing tampered token rejection...");
  const tamperedToken = token.slice(0, -5) + "abcde";
  const tamperedResult = await verifySessionToken(tamperedToken);
  assert.strictEqual(tamperedResult, null, "Tampered token must be rejected");

  // 5. Expired Token Rejection
  console.log("  Testing expired token rejection...");
  const expiredToken = await signSessionToken({
    ...testPayload,
    exp: Math.floor(Date.now() / 1000) - 60, // expired 60s ago
  });
  const expiredResult = await verifySessionToken(expiredToken);
  assert.strictEqual(expiredResult, null, "Expired token must be rejected");

  // 6. Database Config Validation & Sanitization
  console.log("  Testing validateDatabaseConfig & sanitizeEnvUrl...");
  const { validateDatabaseConfig, sanitizeEnvUrl } = await import("../src/lib/server-config");
  
  assert.strictEqual(sanitizeEnvUrl(' "postgresql://user:pass@host/db" '), "postgresql://user:pass@host/db");
  assert.strictEqual(sanitizeEnvUrl("'file:./dev.db'"), "file:./dev.db");
  assert.strictEqual(sanitizeEnvUrl(""), "");

  // Test transient DB error detection
  console.log("  Testing isTransientDbError & withDbRetry...");
  const { isTransientDbError, withDbRetry } = await import("../src/lib/db-retry");

  assert.strictEqual(isTransientDbError({ code: "P1001" }), true, "P1001 must be transient");
  assert.strictEqual(isTransientDbError({ code: "ETIMEDOUT" }), true, "ETIMEDOUT must be transient");
  assert.strictEqual(isTransientDbError({ code: "P2002" }), false, "P2002 unique constraint is not transient");
  assert.strictEqual(isTransientDbError(new Error("Connection pool is full")), true, "Connection pool message must be transient");

  // Test withDbRetry retry behavior
  let attemptCount = 0;
  const retryResult = await withDbRetry(
    async () => {
      attemptCount++;
      if (attemptCount < 2) {
        const transientErr = new Error("Connection timed out");
        (transientErr as any).code = "ETIMEDOUT";
        throw transientErr;
      }
      return "recovered_value";
    },
    { maxRetries: 2, timeoutMs: 2000, requestId: "test_retry_1" }
  );
  assert.strictEqual(retryResult, "recovered_value");
  assert.strictEqual(attemptCount, 2, "Should have retried once and succeeded on attempt 2");

  // Non-transient errors must fail immediately without retry
  let nonTransientAttempts = 0;
  try {
    await withDbRetry(
      async () => {
        nonTransientAttempts++;
        const nonTransientErr = new Error("User already exists");
        (nonTransientErr as any).code = "P2002";
        throw nonTransientErr;
      },
      { maxRetries: 2, timeoutMs: 2000, requestId: "test_retry_2" }
    );
    assert.fail("Non-transient error should have thrown");
  } catch (err: any) {
    assert.strictEqual(nonTransientAttempts, 1, "Non-transient error should not retry");
    assert.strictEqual(err.code, "P2002");
  }

  console.log("✅ All Auth Unit Tests Passed Successfully!");
}

runUnitTests().catch((err) => {
  console.error("❌ Auth Unit Tests Failed:", err);
  process.exit(1);
});


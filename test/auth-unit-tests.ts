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

  console.log("✅ All Auth Unit Tests Passed Successfully!");
}

runUnitTests().catch((err) => {
  console.error("❌ Auth Unit Tests Failed:", err);
  process.exit(1);
});

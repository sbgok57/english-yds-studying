import assert from "assert";
import fs from "fs";
import path from "path";

// Ensure local env variables are loaded if running standalone
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match && !process.env[match[1]]) {
      let val = match[2] || "";
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[match[1]] = val;
    }
  }
}

import { NextRequest } from "next/server";
import { POST as sendCodePost } from "../src/app/api/auth/send-code/route";
import { POST as verifyCodePost } from "../src/app/api/auth/verify-code/route";
import { POST as registerPost } from "../src/app/api/auth/register/route";
import { POST as loginPost } from "../src/app/api/auth/login/route";
import { GET as sessionGet } from "../src/app/api/auth/session/route";
import { POST as logoutPost } from "../src/app/api/auth/logout/route";
import { prisma } from "../src/lib/prisma";
import { adminClient } from "../src/lib/supabase/admin";

async function runIntegrationTests() {
  console.log("▶ Starting Auth Integration Tests...");

  const testEmail = `test_${Date.now()}@ydsmaster.com`;
  const testUsername = `user_${Date.now().toString().slice(-6)}`;
  const testPassword = "SuperSecurePassword123!";

  let createdUserId: string | null = null;
  let challengeToken = "";
  let verificationCode = "";

  try {
    // 1. Send Code API
    console.log("  1. Testing POST /api/auth/send-code...");
    const sendReq = new NextRequest("http://localhost:3000/api/auth/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: testEmail }),
    });
    const sendRes = await sendCodePost(sendReq);
    const sendBody = await sendRes.json();

    assert.strictEqual(sendRes.status, 200, "Send code must return 200");
    assert.strictEqual(sendBody.ok, true, "Send code response ok must be true");
    assert(sendBody.challenge, "Challenge must be returned");
    assert(sendBody.code, "Demo mode code must be returned");
    challengeToken = sendBody.challenge;
    verificationCode = sendBody.code;

    // 2. Verify Code API
    console.log("  2. Testing POST /api/auth/verify-code...");
    const verifyReq = new NextRequest("http://localhost:3000/api/auth/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testEmail,
        code: verificationCode,
        challenge: challengeToken,
      }),
    });
    const verifyRes = await verifyCodePost(verifyReq);
    const verifyBody = await verifyRes.json();
    assert.strictEqual(verifyRes.status, 200);
    assert.strictEqual(verifyBody.ok, true);

    // 3. Register API
    console.log("  3. Testing POST /api/auth/register...");
    const regReq = new NextRequest("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testEmail,
        username: testUsername,
        password: testPassword,
        code: verificationCode,
        challenge: challengeToken,
      }),
    });
    const regRes = await registerPost(regReq);
    const regBody = await regRes.json();

    assert.strictEqual(regRes.status, 201, "Register must return HTTP 201");
    assert.strictEqual(regBody.ok, true, "Register ok must be true");
    assert.strictEqual(regBody.data.user.email, testEmail);
    assert.strictEqual(regBody.data.user.username, testUsername);
    assert.strictEqual(regBody.data.user.totalPoints, 50, "Initial XP bonus must be 50");
    createdUserId = regBody.data.user.id;

    // Verify session cookie was set
    const setCookieHeader = regRes.cookies.get("yds_session_token")?.value;
    assert(setCookieHeader, "Session cookie yds_session_token must be set on register");

    // 4. Register Duplicate Rejection
    console.log("  4. Testing duplicate email & username prevention...");
    const dupEmailReq = new NextRequest("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testEmail,
        username: "another_user_name",
        password: testPassword,
      }),
    });
    const dupEmailRes = await registerPost(dupEmailReq);
    assert.strictEqual(dupEmailRes.status, 409, "Duplicate email must return HTTP 409");

    const dupUserReq = new NextRequest("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "different@email.com",
        username: testUsername,
        password: testPassword,
      }),
    });
    const dupUserRes = await registerPost(dupUserReq);
    assert.strictEqual(dupUserRes.status, 409, "Duplicate username must return HTTP 409");

    // 5. Login API (Invalid Credentials)
    console.log("  5. Testing POST /api/auth/login with wrong password...");
    const badLoginReq = new NextRequest("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: testEmail,
        password: "WrongPassword999!",
      }),
    });
    const badLoginRes = await loginPost(badLoginReq);
    assert.strictEqual(badLoginRes.status, 401, "Wrong password must return 401");

    // 6. Login API (Success with Email)
    console.log("  6. Testing POST /api/auth/login with email...");
    const goodLoginReq = new NextRequest("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: testEmail,
        password: testPassword,
      }),
    });
    const goodLoginRes = await loginPost(goodLoginReq);
    const goodLoginBody = await goodLoginRes.json();
    assert.strictEqual(goodLoginRes.status, 200);
    assert.strictEqual(goodLoginBody.ok, true);
    assert.strictEqual(goodLoginBody.data.user.email, testEmail);

    const loginCookie = goodLoginRes.cookies.get("yds_session_token")?.value;
    assert(loginCookie, "Session cookie must be set on login");

    // 7. Login API (Success with Username)
    console.log("  7. Testing POST /api/auth/login with username...");
    const userLoginReq = new NextRequest("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: testUsername,
        password: testPassword,
      }),
    });
    const userLoginRes = await loginPost(userLoginReq);
    assert.strictEqual(userLoginRes.status, 200);

    // 8. Session API with Cookie
    console.log("  8. Testing GET /api/auth/session...");
    const sessionReq = new NextRequest("http://localhost:3000/api/auth/session", {
      method: "GET",
      headers: {
        Cookie: `yds_session_token=${loginCookie}`,
      },
    });
    const sessionRes = await sessionGet(sessionReq);
    const sessionBody = await sessionRes.json();
    assert.strictEqual(sessionRes.status, 200);
    assert.strictEqual(sessionBody.data.authenticated, true);
    assert.strictEqual(sessionBody.data.user.id, createdUserId);
    assert(!sessionBody.data.user.passwordHash, "passwordHash must never be exposed");

    // 9. Logout API
    console.log("  9. Testing POST /api/auth/logout...");
    const logoutRes = await logoutPost();
    assert.strictEqual(logoutRes.status, 200);
    const expiredCookie = logoutRes.cookies.get("yds_session_token");
    assert(expiredCookie?.value === "", "Logout must clear cookie value");

    console.log("✅ All Auth Integration Tests Passed Successfully!");
  } finally {
    // Cleanup created test user and any dangling test users
    try {
      if (createdUserId) {
        console.log("  Cleaning up test user:", createdUserId);
        await prisma.user.deleteMany({ where: { id: createdUserId } });
        try {
          await adminClient.auth.admin.deleteUser(createdUserId);
        } catch {
          // ignore
        }
      }
      await prisma.user.deleteMany({
        where: {
          OR: [
            { email: { startsWith: "test_" } },
            { email: { startsWith: "testnew" } },
            { username: { startsWith: "user_" } },
            { username: { startsWith: "testnew" } },
          ],
        },
      });
      // Compact database pages so no dirty byte fragments remain in SQLite B-tree
      await prisma.$executeRawUnsafe("VACUUM;").catch(() => {});
    } catch {
      /* ignore */
    }
  }
}

runIntegrationTests().catch((err) => {
  console.error("❌ Auth Integration Tests Failed:", err);
  process.exit(1);
});

import assert from "node:assert/strict";
import { NextRequest } from "next/server";

async function runSecurityBoundaryTests() {
  if (!process.env.DATABASE_URL?.startsWith("file:") || !process.env.DATABASE_URL.includes("security-boundary-test")) {
    throw new Error("Security boundary tests require a dedicated SQLite DATABASE_URL containing 'security-boundary-test'.");
  }
  if (!process.env.AUTH_SECRET || process.env.AUTH_SECRET.length < 32) {
    throw new Error("Security boundary tests require a temporary AUTH_SECRET of at least 32 characters.");
  }

  const [{ prisma }, { signSessionToken, SESSION_COOKIE_NAME }, activity, examSubmit, adminStudents, examGet, { getExamQuestions }] = await Promise.all([
    import("../src/lib/prisma"),
    import("../src/lib/server-auth"),
    import("../src/app/api/activity/route"),
    import("../src/app/api/exams/[id]/submit/route"),
    import("../src/app/api/admin/students/route"),
    import("../src/app/api/exams/[id]/route"),
    import("../src/lib/data-exams"),
  ]);

  const suffix = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const owner = await prisma.user.create({
    data: { email: `owner_${suffix}@example.test`, username: `owner_${suffix}`, passwordHash: "test-only" },
  });
  const victim = await prisma.user.create({
    data: { email: `victim_${suffix}@example.test`, username: `victim_${suffix}`, passwordHash: "test-only" },
  });
  const admin = await prisma.user.create({
    data: { email: "sinembuse724@gmail.com", username: `admin_${suffix}`, passwordHash: "test-only" },
  });

  const ownerToken = await signSessionToken({
    userId: owner.id,
    email: owner.email,
    username: owner.username,
    name: owner.username,
  });
  const adminToken = await signSessionToken({
    userId: admin.id,
    email: admin.email,
    username: admin.username,
    name: admin.username,
  });
  const cookieRequest = (
    url: string,
    token?: string,
    init?: Pick<RequestInit, "method" | "body" | "headers">
  ) => {
    const headers = new Headers(init?.headers);
    if (token) headers.set("Cookie", `${SESSION_COOKIE_NAME}=${token}`);
    return new NextRequest(url, { ...init, headers });
  };

  try {
    const forgedActivity = await activity.POST(cookieRequest(
      "http://localhost/api/activity",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "vocabulary",
          title: "forged unauthenticated event",
          userEmail: victim.email,
          username: victim.username,
          points: 500,
        }),
      }
    ));
    assert.equal(forgedActivity.status, 401, "Unauthenticated body identity must not create an activity");

    const acceptedActivity = await activity.POST(cookieRequest(
      "http://localhost/api/activity",
      ownerToken,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "vocabulary",
          category: "YDS",
          title: "Verified owner activity",
          userEmail: victim.email,
          username: victim.username,
          points: 500,
          timeSpentMinutes: 4,
        }),
      }
    ));
    assert.equal(acceptedActivity.status, 200);
    const acceptedBody = await acceptedActivity.json();
    assert.equal(acceptedBody.userId, owner.id, "Activity identity must come from the signed session");
    assert.equal(acceptedBody.pointsAwarded, 0, "Generic activity cannot grant client-selected points");

    const ownerRecords = await prisma.progress.findMany({ where: { userId: owner.id } });
    const victimRecords = await prisma.progress.findMany({ where: { userId: victim.id } });
    assert.equal(ownerRecords.length, 1);
    assert.equal(victimRecords.length, 0, "Forged body identity must not write into the victim account");
    assert.match(ownerRecords[0].data, /authenticated-user-action/);
    assert.match(ownerRecords[0].data, /"points":0/);

    const anonymousRead = await activity.GET(cookieRequest("http://localhost/api/activity?student=" + encodeURIComponent(victim.email)));
    assert.equal(anonymousRead.status, 401, "Activity reads require a verified session");

    const crossAccountRead = await activity.GET(cookieRequest(
      "http://localhost/api/activity?student=" + encodeURIComponent(victim.email),
      ownerToken
    ));
    assert.equal(crossAccountRead.status, 403, "A student cannot read another student's activities");

    const anonymousExam = await examSubmit.POST(
      cookieRequest("http://localhost/api/exams/yds-2024-ilkbahar/submit", undefined, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: {}, userEmail: victim.email, score: 100 }),
      }),
      { params: Promise.resolve({ id: "yds-2024-ilkbahar" }) }
    );
    assert.equal(anonymousExam.status, 401, "An exam cannot be attached to a client-named account");

    const publicExam = await examGet.GET(
      new NextRequest("http://localhost/api/exams/yds-2024-ilkbahar"),
      { params: Promise.resolve({ id: "yds-2024-ilkbahar" }) }
    );
    assert.equal(publicExam.status, 200);
    const publicExamBody = await publicExam.json();
    assert(publicExamBody.questions.length > 0);
    assert.equal("correct" in publicExamBody.questions[0], false, "Public exam API must not disclose answer keys");
    assert.equal("explanation" in publicExamBody.questions[0], false, "Public exam API must not disclose answer explanations");

    const questions = getExamQuestions("yds-2024-ilkbahar");
    const allCorrect = Object.fromEntries(questions.map((question) => [String(question.n), question.answer]));
    const gradedExam = await examSubmit.POST(
      cookieRequest("http://localhost/api/exams/yds-2024-ilkbahar/submit", ownerToken, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: allCorrect, correct: 0, wrong: 80, net: 0, score: 0, userEmail: victim.email }),
      }),
      { params: Promise.resolve({ id: "yds-2024-ilkbahar" }) }
    );
    assert.equal(gradedExam.status, 200);
    const gradeBody = await gradedExam.json();
    assert.equal(gradeBody.score, 100, "Server must grade from the answer bank instead of client score fields");
    assert.equal(gradeBody.correct, 80);
    const ownerAttempts = await prisma.examAttempt.findMany({ where: { userId: owner.id } });
    const victimAttempts = await prisma.examAttempt.findMany({ where: { userId: victim.id } });
    assert.equal(ownerAttempts.length, 1);
    assert.equal(victimAttempts.length, 0);
    assert.match(ownerAttempts[0].answers, /server-graded-v1/);

    const unauthAdmin = await adminStudents.GET(cookieRequest("http://localhost/api/admin/students"));
    assert.equal(unauthAdmin.status, 403);
    const ownerAdmin = await adminStudents.GET(cookieRequest("http://localhost/api/admin/students", ownerToken));
    assert.equal(ownerAdmin.status, 403, "A user-supplied role claim cannot authorize the admin dashboard");
    const authorizedAdmin = await adminStudents.GET(cookieRequest("http://localhost/api/admin/students", adminToken));
    assert.equal(authorizedAdmin.status, 200);
    const adminBody = await authorizedAdmin.json();
    assert(!adminBody.students.some((student: { id: string }) => student.id === "4e58197d-4fa5-420b-9a75-60bca85a3cc4"), "Dashboard must not insert a synthetic student");

    console.log("✅ Security boundary tests passed: session ownership, no IDOR, server grading, private answer keys, and no synthetic dashboard students.");
  } finally {
    await prisma.user.deleteMany({ where: { id: { in: [owner.id, victim.id, admin.id] } } });
    await prisma.$disconnect();
  }
}

runSecurityBoundaryTests().catch((error) => {
  console.error("❌ Security boundary tests failed:", error instanceof Error ? error.message : "unknown error");
  process.exit(1);
});

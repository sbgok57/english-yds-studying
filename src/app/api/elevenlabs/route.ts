import { NextRequest } from "next/server";
import { createElevenLabsService } from "@/lib/tts/elevenlabs-service.cjs";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
const handle = createElevenLabsService();
export function GET(request: NextRequest) { return handle(request, request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"); }
export function POST(request: NextRequest) { return handle(request, request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"); }

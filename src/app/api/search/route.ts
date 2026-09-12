import { NextRequest, NextResponse } from "next/server";
import { filterEntities } from "@/lib/data";

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const results = filterEntities({
    q: searchParams.get("q") ?? undefined,
    type: searchParams.get("type") ?? undefined,
    location: searchParams.get("location") ?? undefined,
    focus: searchParams.get("focus") ?? undefined,
  });

  return NextResponse.json({ total: results.length, data: results });
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");

  if (!userId) return NextResponse.json("-", { status: 200 });

  const res = await fetch(
    `${process.env.MOCKAPI_URL}/requests?userId=${userId}`
  );
  let data: any[] = await res.json();

  return NextResponse.json(data.length, { status: 200 });
}

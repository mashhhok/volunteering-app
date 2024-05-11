import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");

  if (!userId) return NextResponse.json("-", { status: 200 });

  const res = await fetch(
    `${process.env.MOCKAPI_URL}/requests?userId=${userId}`
  );
  let data: any[] = await res.json();
  
  let collectedMoney = 0

  for(let item of data){
    collectedMoney += item.collectedMoney
  }

  return NextResponse.json(collectedMoney, { status: 200 });
}

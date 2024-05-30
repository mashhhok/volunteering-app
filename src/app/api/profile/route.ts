import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = cookies().get("session")?.value;
    const user = await getSession(session);
    if (!user) return null;
    let res = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
      (res) => res.json()
    );
    res = res.find((item: any) => item.userId === user?.id);

    return res
  } catch (err) {
    return NextResponse.json(err, { status: 405 });
  }
}

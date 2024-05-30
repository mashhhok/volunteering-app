import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const session = cookies().get("session")?.value;
    const avatar = String(formData.get("avatar"));
    if (!session) return NextResponse.json({}, { status: 405 });
    const user = await getSession(session);

    let getUser = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
      (res) => res.json()
    );
    getUser = getUser.filter((item: any) => item.userId === user?.id);
    const res = await fetch(
      `${process.env.MOCKAPI_URL}/profiles/${getUser[0].id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ avatar: avatar }),
      }
    );
    const data = await res.json();
    return NextResponse.json(data.avatar, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Change Avatar Error" },
      { status: 500 }
    );
  }
}

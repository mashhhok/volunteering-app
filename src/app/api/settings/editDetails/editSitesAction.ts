"use server";
import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const editSitesAction = async (formData: FormData) => {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);

  if (!session)
    return NextResponse.json("AUTH ERROR", { status: 405 });

  const googleRes = formData.get("google");
  const google = googleRes ? googleRes : "";

  const facebookRes = formData.get("facebook");
  const facebook = facebookRes ? facebookRes : "";

  const whatsappRes = formData.get("whatsapp");
  const whatsapp = whatsappRes ? whatsappRes : "";

  const telegramRes = formData.get("telegram");
  const telegram = telegramRes ? telegramRes : "";

  const instagramRes = formData.get("instagram");
  const instagram = instagramRes ? instagramRes : "";

  const updateData: any = {
    google,
    facebook,
    whatsapp,
    telegram,
    instagram,
  };

  const data = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then((res) =>
    res.json()
  );
  const user = data.filter((item: any) => item.userId === session?.id)[0];
  const res = await fetch(`${process.env.MOCKAPI_URL}/profiles/${user.id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sites: updateData,
    }),
  }).then((res) => res.json());
};

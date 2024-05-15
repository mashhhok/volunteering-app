"use server";

import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const editDetailsAction = async (formData: FormData) => {
  const sessionToken = cookies().get("session")?.value;
  const session = await getSession(sessionToken);

  if (!session) return { error: "AUTH ERROR" };

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const description = formData.get("description");

  const facebook = formData.get("facebook");
  const instagram = formData.get("instagram");
  const google = formData.get("google");
  const telegram = formData.get("telegram");
  const whatsapp = formData.get("whatsapp");

  const email =
    formData.get("email") === formData.get("emailAgain")
      ? formData.get("email")
      : null;

  const phone =
    formData.get("phone") === formData.get("phoneAgain")
      ? formData.get("phone")
      : null;

  let profiles = await fetch(
    `${process.env.MOCKAPI_URL}/profiles?userId=${session.id}`
  ).then((res) => res.json());
  const profile = profiles.filter((item: any) => item.userId === session.id)[0];

  const request: any = {
    sites: {
      facebook,
      instagram,
      google,
      telegram,
      whatsapp,
    },
  };
  if (email) request.email = email;
  if (email) request.phone = phone;
  if (description && String(description).length < 551)
    request.description = description;
  if (firstName && String(firstName).length < 10) request.firstName = firstName;
  if (lastName && String(lastName).length < 10) request.lastName = lastName;

  const res = await fetch(`${process.env.MOCKAPI_URL}/profiles/${profile.id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(request),
  });
  redirect(`/profile/${session.id}`);
};

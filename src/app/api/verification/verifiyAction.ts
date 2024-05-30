"use server";

import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifiyAction = async (formData: FormData) => {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);
  if (!session) return null;
  const verifyMethods = ["dia", "fileKey", "bankId"];
  const verificationBy = formData.get("verificationBy");
  if (verificationBy && !verifyMethods.includes(String(verificationBy)))
    return null;

  const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
    (res) => res.json()
  );
  const profile = profiles.find((item: any) => item.userId === session.id);
  if (!profile) return null;

  const res = await fetch(
    `${process.env.MOCKAPI_URL}/profiles/${profile?.id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        verifiedBy: String(verificationBy),
      }),
    }
  ).then((res) => res.json());
  redirect("/");
};

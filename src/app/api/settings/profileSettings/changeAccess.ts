"use server";

import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";

export const changeAccess = async (formData: FormData) => {
  const profilePhoto = formData.get("profilePhoto");
  const requestCount = formData.get("requestCount");
  const funds = formData.get("funds");
  const yearsWork = formData.get("yearsWork");

  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);
  if (!session) return null;

  const changeData = {
    isShowFundsCount: funds ? true : false,
    isShowProfilePhoto: profilePhoto ? true : false,
    isShowRequestsCount: requestCount ? true : false,
    isShowYearsWork: yearsWork ? true : false,
  };

  const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then(
    (res) => res.json()
  );
  const profile = profiles.filter(
    (item: any) => item.userId === session?.id
  )[0];

  const res = await fetch(
    `${process.env.MOCKAPI_URL}/profiles/${profile?.id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(changeData),
    }
  ).then((res) => res.json());

  return res;
};

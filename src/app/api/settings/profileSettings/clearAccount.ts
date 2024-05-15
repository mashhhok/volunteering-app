"use server";
import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const clearAccount = async () => {
  const session = await getSession(cookies().get("session")?.value);
  if (!session) return NextResponse.json("AUTH ERROR", { status: 405 });
  const users = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then((res) =>
    res.json()
  );

  const user = users.filter((item: any) => item.userId === session?.id)[0];

  const res = await fetch(`${process.env.MOCKAPI_URL}/profiles/${user.id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      avatar: "",
      description: "",
      sites: {},
      email: "",
      phone: "",
      isShowFundsCount: true,
      isShowProfilePhoto: true,
      isShowRequestsCount: true,
      firstName: "",
      lastName: "",
    }),
  }).then((res) => res.json());

  const requests = await fetch(`${process.env.MOCKAPI_URL}/requests`).then(
    (res) => res.json()
  );

  let timerCount = 1;
  requests.forEach((item: any) => {
    if (item.userId === session.id) {
      setTimeout(() => {
        const res = fetch(`${process.env.MOCKAPI_URL}/requests/${item.id}`, {
          method: "DELETE",
        });
      }, timerCount * 600);
      timerCount++;
    }
  });
};

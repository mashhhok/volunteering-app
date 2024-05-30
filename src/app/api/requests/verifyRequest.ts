"use server";

import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";

interface IVerifyRequest {
  error?: string | null;
  ok?: boolean;
}

export async function verifyRequest(reqId: number | string): Promise<IVerifyRequest> {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);

  if (!session)
    return {
      error: "USER IS NOT VERIFIED",
    };

  const request = await fetch(
    `${process.env.MOCKAPI_URL}/requests/${reqId}`
  ).then((res) => res.json());
  if (request?.userId !== session?.id)
    return {
      error: "YOU ARE NOT REQUEST OWNER",
    };

  if (request?.status !== "open")
    return {
      error: "REQUEST CONFIRMATION IS NOT AVAILABLE",
    };

  const verifyFund = await fetch(
    `${process.env.MOCKAPI_URL}/requests/${reqId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status: "closed",
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((res) => res.json());
  console.log(verifyFund)
  return {
    error: null,
    ok: true,
  };
}

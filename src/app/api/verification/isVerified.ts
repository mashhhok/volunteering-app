import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";

export const isVerified = async () => {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);

  if (!session) return false;

  const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then(
    (res) => res.json()
  );
  const profile = profiles.find((item) => item.userId === session?.id);

  return profile?.verifiedBy;
};

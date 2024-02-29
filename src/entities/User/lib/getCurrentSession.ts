import "server-only";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export async function getCurrentSession() {
  return await getServerSession(authOptions);
}

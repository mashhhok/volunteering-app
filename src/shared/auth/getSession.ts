import { decrypt } from "./lib";
import { cookies } from "next/headers";
import { z } from "zod";
import { JWTUserValidator, type JWTUser } from "@/entities/User/schema";

const sessionValidator = z.object({
  user: JWTUserValidator,
});

export async function getSession(name?: string): Promise<JWTUser | null> {
  const session = name ? name : cookies().get("session")?.value;
  if (!session) return null;

  return sessionValidator.parse(await decrypt(session)).user;
}

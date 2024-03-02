import "server-only";

import { encrypt } from "./lib";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";
import { JWTUserValidator } from "@/entities/User/schema";
import { getFullUserByEmail } from "@/entities/User/repository";

export async function login(email: string, password: string) {
  const user = await getFullUserByEmail(email);
  if (!user) return false;

  const passwordsMatch = await compare(password, user.password);
  if (!passwordsMatch) return false;

  const JWTUser = JWTUserValidator.parse(user);

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user: JWTUser, expires });

  cookies().set("session", session, { expires, httpOnly: true });
  return true;
}

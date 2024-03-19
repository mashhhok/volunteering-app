"use server";
import { getUserByEmail } from "@/entities/User/repository";
import { redirect } from "next/navigation";

export async function isEmailExistAction(formData: FormData) {
  "use server";
  const email = formData.get("email")?.toString();
  if (!email) redirect("/auth/1");
  const user = await getUserByEmail(email);
  const isExistUser = Boolean(user);
  return isExistUser
}

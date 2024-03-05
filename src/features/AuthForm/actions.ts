import { login } from "@/shared/auth";
import { redirect } from "next/navigation";

export async function authAction(
  previousState: unknown,
  formData: FormData
): Promise<string> {
  "use server";
  let setSession;
  try {
    let userLogin = formData.get("login");
    let userPassword = formData.get("password");

    if (userLogin === null || userPassword === null) return "Ошибка валидации!";

    userLogin = userLogin.toString();
    userPassword = userPassword.toString();
    setSession = await login(userLogin, userPassword);
  } catch (err) {
    return "Не удалось авторизоваться!";
  }
  if (setSession) redirect("/");
  return "Не удалось авторизоваться!";
}

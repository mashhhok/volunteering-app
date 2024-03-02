import { getSession, login } from "@/shared/auth";
import { redirect } from "next/navigation";

export async function authAction(
  previousState: unknown,
  formData: FormData
): Promise<string | unknown> {
  "use server";
  let setSession;
  try {
    let userLogin = formData.get("login");
    let userPassword = formData.get("password");
    console.log(1);

    if (userLogin === null || userPassword === null) return "Ошибка валидации!";
    console.log(2);

    userLogin = userLogin.toString();
    userPassword = userPassword.toString();
    console.log(3);
    setSession = await login(userLogin, userPassword);
  } catch (err) {
    return "Не удалось авторизоваться!";
  }
  if (setSession) redirect("/");
  if (!setSession) return "Не удалось авторизоваться!";
}

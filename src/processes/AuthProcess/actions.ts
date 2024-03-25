"use server";
import { getUserByEmail } from "@/entities/User/repository";
import { redirect } from "next/navigation";
import { login } from "@/shared/auth";
import { register } from "@/entities/User/repository";
import { SelectUser, insertUserValidator } from "@/entities/User/schema";

interface IZodIssues {
  issues: IZodIssueItem[];
  name: string;
}

interface IZodIssueItem {
  validation: string;
  code: string;
  message: string;
  path: string[];
  minimum: number;
  type: string;
  inclusive: boolean;
  exact: boolean;
}

interface IIssues {
  isExist?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  avatar?: string;
}

export interface IRegisterAction {
  issues: IIssues;
}

export type IregisterActionResponse = IRegisterAction | null;

export async function registerAction(
  previousState: any,
  formData: FormData
): Promise<IregisterActionResponse> {
  "use server";

  try {
    const formDataValidate = insertUserValidator.parse(
      Object.fromEntries(formData)
    );
    const res = await register(formDataValidate);
    if (res === null) return { issues: { isExist: "Account creation error" } };
    return null;
  } catch (err) {
    const _err = err as IZodIssues;
    const validateError = () => {
      let issues: any = {};

      for (let i = 0; i < _err.issues.length; i++) {
        if (issues[_err.issues[i].path[0]]) continue;
        issues[_err.issues[i].path[0]] = _err.issues[i].message;
      }
      return issues as IIssues;
    };
    return {
      issues: validateError(),
    } as {
      issues: IIssues;
    };
  }
}

export async function isEmailExistAction(formData: FormData) {
  "use server";
  const email = formData.get("email")?.toString();
  if (!email) redirect("/auth/1");
  const user = await getUserByEmail(email);
  const isExistUser = Boolean(user);
  if (isExistUser) redirect("/auth/4");
  else redirect("/auth/2");
}

export async function authAction(
  previousState: unknown,
  formData: FormData
): Promise<string | undefined> {
  "use server";
  let setSession;
  try {
    let userLogin = formData.get("email");
    let userPassword = formData.get("password");

    if (userLogin === null || userPassword === null) return "Ошибка валидации!";

    userLogin = userLogin.toString();
    userPassword = userPassword.toString();
    if (true) {
      setSession = await login(userLogin, userPassword);
    } else {
      setSession = "confirm_mail";
    }
  } catch (err) {
    return "Не удалось авторизоваться!";
  }
  // if (setSession === "confirm_mail") redirect("/auth/3");
  if (setSession) redirect("/");
  return "Не удалось авторизоваться!";
}

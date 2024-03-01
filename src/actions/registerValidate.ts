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
  isExist?: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  avatar?: string;
}

export interface IRegisterAction {
  issues: IIssues;
}

export type IRegisterValidateResponse = IRegisterAction | null;

export async function registerValidate(
  previousState: any,
  formData: FormData
): Promise<IRegisterValidateResponse> {
  "use server";

  try {
    const formDataValidate = insertUserValidator.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    });
    const res = await register(formDataValidate);
    if (res === null) return { issues: { isExist: true } };
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

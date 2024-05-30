import React from "react";
import { AuthedPage } from "./AuthedPage/AuthedPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import {
  IregisterActionResponse,
  authAction,
  isEmailExistAction,
  registerAction,
} from "../actions";
import { AuthPage } from "./AuthPage/AuthPage";
import { Title } from "@mantine/core";
import { BeginPage } from "./BeginPage/BeginPage";
import { IDictionary } from "@/shared/config/i18n.config";

export const AuthProcess = ({ pageId, dict }: { pageId: number, dict: IDictionary }) => {
  async function registerActionUpd(prevState: any, formData: FormData) {
    "use server";
    const res: IregisterActionResponse = await registerAction(
      prevState,
      formData
    );
    if (res === null) {
      const res = await authAction(prevState, formData);
    }
    return res;
  }

  return (
    <>
      <Title order={4} style={{ textAlign: "center" }} maw={500} mb={40}>
        {dict.auth_process.title}
      </Title>
      {pageId === 1 && <BeginPage dict={dict} action={isEmailExistAction} />}
      {pageId === 3 && <AuthedPage dict={dict} />}
      {pageId === 2 && <RegisterPage dict={dict} action={registerActionUpd} />}
      {pageId === 4 && <AuthPage  dict={dict} action={authAction} />}
    </>
  );
};

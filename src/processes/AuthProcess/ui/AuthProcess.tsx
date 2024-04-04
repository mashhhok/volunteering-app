import React from "react";
import { FirstPage } from "./FirstPage/FirstPage";
import { SecondPage } from "./SecondPage/SecondPage";
import { ThirdPage } from "./ThirdPage/ThirdPage";
import {
  IregisterActionResponse,
  authAction,
  isEmailExistAction,
  registerAction,
} from "../actions";
import { ForthPage } from "./ForthPage/ForthPage";
import { redirect } from "next/navigation";
import { Title } from "@mantine/core";

export const AuthProcess = ({ pageId }: { pageId: number }) => {
  async function registerActionUpd(prevState: any, formData: FormData) {
    "use server";
    const res: IregisterActionResponse = await registerAction(
      prevState,
      formData
    );
    if (res === null) redirect("/auth/3");
    return res;
  }

  return (
    <>
      <Title order={4} style={{ textAlign: "center" }} maw={500} mb={40}>
        We`ll sign you in or create an account if you don`t have one yet
      </Title>
      {pageId === 1 && <FirstPage action={isEmailExistAction} />}
      {pageId === 3 && <SecondPage />}
      {pageId === 2 && <ThirdPage action={registerActionUpd} />}
      {pageId === 4 && <ForthPage action={authAction} />}
    </>
  );
};

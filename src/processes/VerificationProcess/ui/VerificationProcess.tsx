import React from "react";
import { ChooseMethodPage } from "./ChooseMethodPage/ChooseMethodPage";
import { DiaMethodPage } from "./DiaMethodPage/DiaMethodPage";
import { redirect } from "next/navigation";
import { IDictionary } from "@/shared/config/i18n.config";

export const VerificationProcess = ({ pageId, dict }: { pageId: string, dict: IDictionary }) => {
  const array = ["home", "dia"];
  if (!(array.includes(pageId))) redirect("/");
  return (
    <>
      {pageId === "home" && <ChooseMethodPage dict={dict} />}
      {pageId === "dia" && <DiaMethodPage />}
    </>
  );
};

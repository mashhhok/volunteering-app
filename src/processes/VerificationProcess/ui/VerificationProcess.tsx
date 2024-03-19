import React from "react";
import { ChooseMethodPage } from "./ChooseMethodPage/ChooseMethodPage";
import { DiaMethodPage } from "./DiaMethodPage/DiaMethodPage";
import { redirect } from "next/navigation";

export const VerificationProcess = ({ pageId }: { pageId: string }) => {
  const array = ["home", "dia"];
  if (!(array.includes(pageId))) redirect("/");
  return (
    <>
      {pageId === "home" && <ChooseMethodPage />}
      {pageId === "dia" && <DiaMethodPage />}
    </>
  );
};

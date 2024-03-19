import React from "react";
import { FirstPage } from "./FirstPage/FirstPage";
import { SecondPage } from "./SecondPage/SecondPage";
import { ThirdPage } from "./ThirdPage/ThirdPage";
import { insertUserValidator } from "@/entities/User/schema";
import { getUserByEmail, register } from "@/entities/User/repository";
import { isEmailExistAction } from "./actions";
import { ForthPage } from "./ForthPage/ForthPage";

export const AuthProcess = ({ pageId }: { pageId: number }) => {


  return (
    <>
      {pageId === 1 && <FirstPage action={isEmailExistAction} />}
      {pageId === 2 && <SecondPage />}
      {pageId === 3 && <ThirdPage />}
      {pageId === 4 && <ForthPage/> }
    </>
  );
};

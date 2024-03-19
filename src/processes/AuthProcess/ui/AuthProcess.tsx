import React from "react";
import { FirstPage } from "./FirstPage/FirstPage";
import { SecondPage } from "./SecondPage/SecondPage";
import { ThirdPage } from "./ThirdPage/ThirdPage";

export const AuthProcess = ({ pageId }: { pageId: number }) => {
  return (
    <>
      {pageId === 1 && <FirstPage />}
      {pageId === 2 && <SecondPage />}
      {pageId === 3 && <ThirdPage />}
    </>
  );
};

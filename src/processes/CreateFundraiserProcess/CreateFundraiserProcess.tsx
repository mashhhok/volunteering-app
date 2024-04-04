import { Box, Title } from "@mantine/core";
import React from "react";
import { NamesPage } from "./NamesPage/NamesPage";
import { BackBtn } from "./BackBtn";
import { AmountPage } from "./AmountPage/AmountPage";
import { PreviewPage } from "./PreviewPage/PreviewPage";

export const CreateFundraiserProcess = ({ page }: { page: string }) => {
  return (
    <>
      {page === "names" && <NamesPage />}
      {page === "amount" && <AmountPage />}
      {page === "preview" && <PreviewPage />}
    </>
  );
};

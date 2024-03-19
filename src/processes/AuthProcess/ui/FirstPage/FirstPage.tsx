"use client";

import { useInput } from "@/shared/lib/hooks";
import { Box } from "@mantine/core";
import React from "react";
import { EmailInput } from "./EmailInput";
import { ContinueWithBtns } from "./ContinueWithBtns";
import { useAuthStore } from "../../store";
import Link from "next/link";

export const FirstPage = () => {
  const email = useInput("", { isEmail: true });
  const setEmail = useAuthStore((state) => state.setEmail);

  React.useEffect(() => {
    setEmail(email.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email.value]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Box w={"100%"} maw={500}>
      <form action="/auth/2" onSubmit={onSubmit}>
        <EmailInput email={email} />

        <ContinueWithBtns
          continueHref={"/auth/2"}
          isContinueDisabled={!email.isValid}
          googleHref={""}
        />
      </form>
    </Box>
  );
};

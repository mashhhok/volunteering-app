"use client";

import { useInput } from "@/shared/lib/hooks";
import { Box } from "@mantine/core";
import React, { FormEvent, FormHTMLAttributes } from "react";
import { EmailInput } from "./EmailInput";
import { ContinueWithBtns } from "./ContinueWithBtns";
import { useAuthStore } from "../../store";
import { useFormState } from "react-dom";
import { getUserByEmail } from "@/entities/User/repository";
import { redirect } from "next/navigation";

export const FirstPage = ({
  action,
}: {
  action: (formData: FormData) => Promise<any>;
}) => {
  const email = useInput("", {
    isEmail: true,
    debounceTimeout: 30,
    withDebounce: false,
  });
  const setEmail = useAuthStore((state) => state.setEmail);

  React.useEffect(() => {
    setEmail(email.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email.value]);

  return (
    <Box w={"100%"} maw={500}>
      <form action={action}>
        <EmailInput email={email} />

        <ContinueWithBtns isContinueDisabled={!email.isValid} googleHref={""} />
      </form>
    </Box>
  );
};

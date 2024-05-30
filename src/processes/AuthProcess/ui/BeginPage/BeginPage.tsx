"use client";
import { useInput } from "@/shared/lib/hooks";
import { Box } from "@mantine/core";
import React, { FormEvent, FormHTMLAttributes } from "react";
import { EmailInput } from "./EmailInput";
import { ContinueWithBtns } from "./ContinueWithBtns";
import { useAuthStore } from "../../store";
import { IDictionary } from "@/shared/config/i18n.config";

export const BeginPage = ({
  action,
  dict
}: {
  action: (formData: FormData) => Promise<any>;
  dict: IDictionary
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

  function onSubmit(e: FormEvent) {
    if (!email.isValid) {
      e.preventDefault();
    }
  }

  return (
    <Box w={"100%"} maw={500}>
      <form action={action} onSubmit={onSubmit}>
        <EmailInput dict={dict} email={email} />

        <ContinueWithBtns dict={dict} isContinueDisabled={!email.isValid} googleHref={""} />
      </form>
    </Box>
  );
};

"use client";
import { Box, Button, Text, TextInput, Title } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";
import { useAuthStore } from "../../store";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { PasswordInput } from "../PasswordInput";
import { isPasswordMatches } from "../../selectors";
import { ContinueBtn } from "../ContinueBtn";
import { useFormState } from "react-dom";
import { act } from "react-dom/test-utils";
import { colors } from "@/shared/enums";
import { HiddenInput } from "@/shared/ui";
import { IDictionary } from "@/shared/config/i18n.config";

export const AuthPage = ({
  action,
  dict
}: {
  action: (prevState: any, formData: FormData) => Promise<any>;
  dict: IDictionary
}) => {
  const isPasswordError = useAuthStore((state) => state.password.isError);
  const email = useAuthStore((state) => state.email);
  const [state, formAction] = useFormState(action, null);

  // useConditionalRedirect();
  return (
    <Box maw={500} w={"100%"}>
      <Title order={2} style={{ textAlign: "center" }} mb={24}>
        {dict.auth_process.auth_page.title}
      </Title>
      <Text
        color={colors.red}
        size="xl"
        mb={10}
        style={{ textAlign: "center" }}
      >
        {state}
      </Text>
      <form action={formAction}>
        <PasswordInput dict={dict} />
        <HiddenInput value={email} name="email" />
        <Box h={40} />
        <ContinueBtn disabled={isPasswordError}>{dict.auth_process.auth_page.continue_btn}</ContinueBtn>
      </form>
    </Box>
  );
};

"use client";
import { colors } from "@/shared/enums";
import { Box, Button, Flex, Text,  Title } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { EmailShower } from "./EmailShower";
import { PasswordInput } from "../PasswordInput";
import { ConfirmInput } from "./ConfirmInput";
import { useAuthStore } from "../../store";
import { isPasswordMatches } from "../../selectors";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { ContinueBtn } from "../ContinueBtn";
import { useRouter } from "next/navigation";
import { HiddenInput } from "@/shared/ui";
import { useFormState } from "react-dom";
import { IregisterActionResponse } from "../actions";

export const ThirdPage = ({
  action,
}: {
  action: (
    prevState: any,
    formData: FormData
  ) => Promise<IregisterActionResponse>;
}) => {
  const email = useAuthStore((state) => state.email);
  const isPasswordMatchesRes = isPasswordMatches(
    useAuthStore((state) => state)
  );
  const [state, formAction] = useFormState(action, null);
  const router = useRouter();
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {}
  useConditionalRedirect();

  return (
    <form
      action={formAction}
      onSubmit={onSubmit}
      style={{ maxWidth: 500, width: "100%" }}
    >
      <Flex w={"100%"} direction={"column"} align={"center"}>
        <EmailShower email={email} />
        <Title mb={24} order={3} style={{ textAlign: "center" }}>
          Please, create a new password:
        </Title>
        <Text color={colors.red} size="xl" mb={10}>
          {state?.issues.isExist}
        </Text>
        <Flex direction={"column"} gap={12} w={"100%"}>
          <PasswordInput />
          <ConfirmInput />
          <HiddenInput name="email" value={email} />
          <ContinueBtn disabled={!isPasswordMatchesRes}>Continue</ContinueBtn>
        </Flex>
      </Flex>
    </form>
  );
};

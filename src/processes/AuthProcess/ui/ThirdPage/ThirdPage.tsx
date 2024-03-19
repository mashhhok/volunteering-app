"use client";
import { colors } from "@/shared/enums";
import { RightSVG } from "@/shared/svg";
import { Box, Button, Flex, Text, TextInput, Title } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { EmailShower } from "./EmailShower";
import { PasswordInput } from "./PasswordInput";
import { ConfirmInput } from "./ConfirmInput";
import { useAuthStore } from "../../store";
import { isPasswordMatches } from "../../selectors";

export const ThirdPage = () => {
  const email = useAuthStore((state) => state.email);
  const isPasswordMatchesRes = isPasswordMatches(useAuthStore(state => state))
  
  function formAction(formData: FormData) {

  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form action={formAction} onSubmit={onSubmit}>
      <Flex w={"100%"} direction={"column"} align={"center"}>
        <EmailShower email={email} />
        <Title mb={24} order={3} style={{ textAlign: "center" }}>
          Please, create a new password:
        </Title>
        <Flex direction={"column"} gap={12} w={"100%"}>
          <PasswordInput />
          <ConfirmInput />
          <Button
            color="violet"
            fullWidth
            disabled={!isPasswordMatchesRes}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

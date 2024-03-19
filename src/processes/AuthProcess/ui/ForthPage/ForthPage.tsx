"use client";
import { Box, Button, TextInput, Title } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";
import { useAuthStore } from "../../store";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { PasswordInput } from "../PasswordInput";
import { isPasswordMatches } from "../../selectors";
import { ContinueBtn } from "../ContinueBtn";

export const ForthPage = () => {
  const isPasswordError = useAuthStore((state) => state.password.isError);

  useConditionalRedirect();
  return (
    <Box maw={500} w={"100%"}>
      <Title order={2} style={{ textAlign: "center" }} mb={24}>
        Log in to account
      </Title>
      <PasswordInput />
      <Box h={40} />
      <ContinueBtn disabled={isPasswordError}>Continue</ContinueBtn>
    </Box>
  );
};

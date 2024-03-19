"use client";
import { Box, Button, TextInput } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";
import { useAuthStore } from "../../store";
import { useConditionalRedirect } from "../../hooks/useConditionalRedirect";
import { PasswordInput } from "../PasswordInput";
import { isPasswordMatches } from "../../selectors";
import { ContinueBtn } from "../ContinueBtn";

export const ForthPage = () => {
  const isUserExist = useAuthStore((state) => state.isUserExist);
  const isPasswordError = useAuthStore((state) => state.password.isError)


  if (isUserExist === false) redirect("/auth/2");
  useConditionalRedirect();
  return (
    <Box maw={500} w={'100%'}>
      <PasswordInput />
      <Box h={40} />
      <ContinueBtn disabled={isPasswordError}>Continue</ContinueBtn>
    </Box>
  );
};

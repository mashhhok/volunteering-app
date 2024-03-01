"use client";
import {
  Box,
  ComboboxItem,
  Fieldset,
  Flex,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { SubmitBtn } from "./SubmitBtn";
import { useFormState } from "react-dom";
import React from "react";
import {
  IRegisterAction,
  IRegisterValidateResponse,
} from "@/actions/registerValidate";

export const RegisterForm = ({
  action,
}: {
  action: (
    previousState: unknown,
    formData: FormData
  ) => Promise<IRegisterValidateResponse>;
}) => {
  const [state, formAction] = useFormState(action, null);
  return (
    <Box>
      <form action={formAction} method="post">
        <Fieldset legend="Register Form" mx={15}>
          <Text color="red" fz='xl' fw={500} >{state?.issues.isExist && "User already exist!"}</Text>
          <Flex gap={15} direction={"column"}>
            <TextInput
              label="Input your email"
              placeholder="test@outlook.com"
              size="md"
              name="email"
              error={state?.issues.email}
            />
            <TextInput
              label="Input password"
              placeholder="password..."
              size="md"
              name="password"
              error={state?.issues.password}
            />

            <TextInput
              name="firstName"
              placeholder="James"
              label="Input your first name"
              error={state?.issues.firstName}
            />
            <TextInput
              name="lastName"
              placeholder="Robertson"
              label="Input your last name"
              error={state?.issues.lastName}
            />
          </Flex>
          <Box h={15} />
          <Flex justify={"flex-end"}>
            
            <SubmitBtn/>
          </Flex>
        </Fieldset>
      </form>
    </Box>
  );
};

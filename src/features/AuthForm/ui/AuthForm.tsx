"use client";
import { getSession, login } from "@/shared/auth";
import {
  Box,
  Button,
  Fieldset,
  Flex,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useFormState } from "react-dom";

export default function AuthForm({ action }: { action: any }) {
  const [state, formAction] = useFormState(action, '');

  return (
    <Box>
      <form action={formAction} method="post">
        <Fieldset legend={<Title order={4}>Login Form</Title>} mx={15}>
          <Text fz="xl" fw={500} color="red">
            {state}
          </Text>
          <Flex gap={15} direction={"column"}>
            <TextInput label="Input email address" name="login" />
            <TextInput label="Input Password" name="password" type="password" />
            <Flex justify={"flex-end"}>
              <Button type="submit" variant="gradient">
                Submit
              </Button>
            </Flex>
          </Flex>
        </Fieldset>
      </form>
    </Box>
  );
}

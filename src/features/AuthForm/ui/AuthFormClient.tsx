"use client";
import { colors } from "@/shared/enums";
import {
  Box,
  Button,
  Fieldset,
  Flex,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function AuthFormClient({
  action,
}: {
  action: (previousState: unknown, formData: FormData) => Promise<string>;
}) {
  const [state, formAction] = useFormState(action, "");

  return (
    <Box>
      <form action={formAction} method="post">
        <Fieldset legend={<Title order={4}>Login Form</Title>} mx={15}>
          <Text fz="xl" fw={500} color="red">
            {state}
          </Text>
          <Flex gap={15} direction={"column"}>
            <TextInput
              label="Input email address"
              name="login"
              placeholder="test@outlook.com"
            />
            <TextInput
              label="Input Password"
              name="password"
              type="password"
              placeholder="password..."
            />
            <Flex justify={"space-between"}>
              <Link
                href="/register"
                style={{ color: colors.blue, textDecoration: "underline", cursor: 'pointer', zIndex: 1 }}
              >
                create account
              </Link>
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

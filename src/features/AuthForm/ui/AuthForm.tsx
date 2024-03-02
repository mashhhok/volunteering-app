"use client";
import { Box, Button, Fieldset, Flex, TextInput, Title } from "@mantine/core";

export default function AuthForm() {
  return (
    <Box>
      <form action="/api/auth/callback/credentials" method="post">
        <Fieldset legend={<Title order={4}>Login Form</Title>} mx={15}>
          <Flex gap={15} direction={"column"}>
            <TextInput label="Input email address" name="username" />
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

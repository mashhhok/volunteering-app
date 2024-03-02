import { authAction } from "@/actions";
import { AuthForm } from "@/features/AuthForm";
import { getSession, login } from "@/shared/auth";
import { Box, Flex } from "@mantine/core";

import React from "react";

const AuthPage = async () => {
  return (
    <Box>
      <Box h={15} />
      <Flex justify={"center"}>
        <Box maw={500} w="100%">
          <AuthForm action={authAction} />
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthPage;

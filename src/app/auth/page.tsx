import { AuthForm } from "@/features/AuthForm";
import { Box, Flex } from "@mantine/core";

import React from "react";

const AuthPage = async () => {
  return (
    <Box>
      <Box h={30} />
      <Flex justify={"center"}>
        <Box maw={500} w="100%">
          <AuthForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthPage;

import { RegisterForm } from "@/features/RegisterForm";
import { Box, Center, Flex } from "@mantine/core";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <Box h={30} />
      <Flex justify={"center"} align={"center"}>
        <Box maw={500} w="100%">
          <RegisterForm />
        </Box>
      </Flex>
    </div>
  );
};

export default RegisterPage;

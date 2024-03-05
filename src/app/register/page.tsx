import { RegisterForm } from "@/features/RegisterForm";
import { Box, Flex } from "@mantine/core";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <Box h={15} />
      <Flex justify={"center"}>
        <Box maw={500} w="100%">
          <RegisterForm />
        </Box>
      </Flex>
    </div>
  );
};

export default RegisterPage;

import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export const ContactInputs = () => {
  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        Contact
      </Text>
      <Flex mb={16} gap={20}>
        <Box flex="1 1 auto">
          <TextField noColors title="Email" placeholder="User`s email" />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title="Extra email"
            placeholder="User`s extra email"
            noColors
          />
        </Box>
      </Flex>
      <Flex gap={20}>
        <Box flex="1 1 auto">
          <TextField
            title="Phone number"
            placeholder="User`s phone number"
            noColors
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title="Extra phone number"
            placeholder="User`s extra phone number"
            noColors
          />
        </Box>
      </Flex>
    </Box>
  );
};

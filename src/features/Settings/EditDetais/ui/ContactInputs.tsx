import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export const ContactInputs = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        Contact
      </Text>
      <Flex mb={16} gap={20}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title="Email"
            defaultValue={email}
            placeholder="User`s email"
            name="email"
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title="Extra email"
            placeholder="User`s extra email"
            noColors
            name="emailAgain"
          />
        </Box>
      </Flex>
      <Flex gap={20}>
        <Box flex="1 1 auto">
          <TextField
            title="Phone number"
            placeholder="User`s phone number"
            noColors
            name="phone"
            defaultValue={phone}
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title="Extra phone number"
            placeholder="User`s extra phone number"
            noColors
            name="phoneAgain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

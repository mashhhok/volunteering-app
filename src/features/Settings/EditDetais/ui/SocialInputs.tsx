import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export const SocialInputs = () => {
  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        Contact
      </Text>
      <Flex mb={16} gap={20}>
        <Box flex="1 1 auto">
          <TextField title="Instagram" placeholder="User`s Instagram link" />
        </Box>
        <Box flex="1 1 auto">
          <TextField title="Facebook" placeholder="User`s Facebook link" />
        </Box>
      </Flex>
    </Box>
  );
};

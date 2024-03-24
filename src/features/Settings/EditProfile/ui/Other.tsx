import { colors } from "@/shared/enums";
import { Box, Checkbox, Flex, Text } from "@mantine/core";
import React from "react";

export const Other = () => {
  return (
    <Box>
      <Text fw={500} mb={24} >
        Other
      </Text>
      <Flex direction={'column'} gap={8}>
        <Checkbox label="Profile visible in search engines" />
        <Checkbox label="I want to receive occasional emails about the most intresting events and compaigns on UnitaryAid" />
      </Flex>
    </Box>
  );
};

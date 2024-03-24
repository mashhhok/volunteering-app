import { colors } from "@/shared/enums";
import { Box, Checkbox, Text } from "@mantine/core";
import React from "react";

export const CompletedInput = () => {
  return (
    <Box>
      <Text fw={500} mb={24} color={colors.black}>
        Show in my public profile
      </Text>
      <Checkbox label="Fundraiser edit" />
    </Box>
  );
};

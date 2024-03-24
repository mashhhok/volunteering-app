import { colors } from "@/shared/enums";
import { Box, Select, Text } from "@mantine/core";
import React from "react";

export const RecieveEmails = () => {
  return (
    <Box>
      <Text fw={500} >
        Receive emails from UnitaryAid
      </Text>
      <Text fz="sm" color={colors.gray} mb={8}>
        Choose one
      </Text>
      <Select placeholder="Placeholder text"  />
    </Box>
  );
};

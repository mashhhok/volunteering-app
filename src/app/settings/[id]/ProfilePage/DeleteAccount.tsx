import { colors } from "@/shared/enums";
import { Box, Text } from "@mantine/core";
import React from "react";

export const DeleteAccount = () => {
  return (
    <Box>
      <Text fw={500} mb={24} color={colors.black}>
        Delete account
      </Text>
      <Text size="sm" lh={1.5} mb={24}>
        When you delete your account, your fundraiserrs and verifications will
        be removed. All donations that have been created after deleting the
        account will be returned to donators.
      </Text>
      <Box style={{ textDecoration: "underline" }} color={colors.red}>
        Delete account
      </Box>
    </Box>
  );
};

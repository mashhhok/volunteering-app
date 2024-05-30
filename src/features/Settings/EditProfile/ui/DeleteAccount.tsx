"use client";
import { clearAccount } from "@/app/api/settings/profileSettings/clearAccount";
import { colors } from "@/shared/enums";
import { Box, Text, Button } from "@mantine/core";
import React from "react";

export const DeleteAccount = () => {

  return (
    <form action={clearAccount}>
      <Box>
        <Text fw={500} mb={24}>
          Clear All Data From Account
        </Text>
        <Text size="sm" lh={1.5} mb={24}>
          When you clear data from your account, your fundraiserrs and
          verifications will be removed. All donations that have been created
          after deleting the account will be returned to donators.
        </Text>
        <Box>
          <button type="submit">
            <Text style={{ textDecoration: "underline" }} color={colors.red}>
              Clear All Data
            </Text>
          </button>
        </Box>
      </Box>
    </form>
  );
};

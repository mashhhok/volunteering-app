"use client";
import { TextField } from "@/shared/ui";
import React from "react";
import { useCreateFundraiserStore } from "../store";
import { Box, Text, Textarea } from "@mantine/core";
import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";

export const NameInput = () => {
  const setName = useCreateFundraiserStore((store) => store.setName);
  const name = useCreateFundraiserStore((store) => store.name);

  return (
    <Box>
      <Textarea
        w={"100%"}
        placeholder="Name your fundraiser"
        onChange={e => setName(e.target.value)}
        value={name}
        mb={5}
        minRows={1}
      />
      <Text color={colors.gray} size="xs">
        Up to 75 characters
      </Text>
    </Box>
  );
};

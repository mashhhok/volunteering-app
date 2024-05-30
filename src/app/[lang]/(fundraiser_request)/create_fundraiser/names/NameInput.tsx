/* eslint-disable react-hooks/exhaustive-deps */
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
  const error = useCreateFundraiserStore((store) => store.nameError);
  const setError = useCreateFundraiserStore((store) => store.setNameError);

  const input = useInput(name, { maxWidth: 75, minWidth: 10 });

  React.useEffect(() => {
    setName(input.value);
    setError(!input.isValid);
  }, [input.value]);
  return (
    <Box>
      <TextField
        w={"100%"}
        placeholder="Name your fundraiser"
        mb={5}
        input={input}
        bottomSection={`Up to ${75 - input.value.length} characters`}
      />
      <Text color={colors.gray} size="xs"></Text>
    </Box>
  );
};

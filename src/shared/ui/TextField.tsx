import { Box, Text, TextInput, TextInputProps } from "@mantine/core";
import React from "react";
import { colors } from "../enums";

export const TextField = (
  props: TextInputProps & { title: string; bottomSection?: React.ReactNode }
) => {
  return (
    <Box>
      <Text size="xs" color={colors.gray} mb={2} ml={10} lh={2.2}>
        {props.title}
      </Text>
      <TextInput {...props} size="md" radius={"md"} />
      {props.bottomSection}
    </Box>
  );
};

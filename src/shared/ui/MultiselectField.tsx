import { Box, MultiSelect, MultiSelectProps, Text } from "@mantine/core";
import React from "react";
import { colors } from "../enums";

export const MultiselectField = (
  props: MultiSelectProps & { title?: string; bottomSection?: React.ReactNode }
) => {
  return (
    <Box>
      <Text size="xs" color={colors.gray} mb={2} ml={10} lh={2.2}>
        {props.title}
      </Text>
      <MultiSelect {...props} size="md" radius={"md"} mb={4} />
      <Text color={colors.gray} size='xs' > {props.bottomSection}</Text>
    </Box>
  );
};

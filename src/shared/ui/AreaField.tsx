"use client";
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { useInput } from "../lib/hooks";

export const AreaField = (
  props: TextareaProps & { title: string; maxLen: number }
) => {
  const { title, maxLen, ...inputProps } = props;
  const input = useInput("", { maxWidth: props.maxLen });

  return (
    <Box>
      <Text size="xs" color={colors.gray} mb={2} ml={10} lh={2.2}>
        {props.title}
      </Text>
      <Textarea {...inputProps} value={input.value} {...input.handlers} error={input.isShowError} />
      <Text fz={10} color={colors.gray} mt={8} ml={10}>
        Available characters with spaces {props.maxLen - input.value.length}
      </Text>
    </Box>
  );
};

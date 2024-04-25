import { Box, Text, TextInput, TextInputProps } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { IInputRules, useInput } from "../lib/hooks";

export const TextField = (
  props: TextInputProps & {
    title?: string;
    bottomSection?: React.ReactNode;
    rules?: IInputRules;
    input?: ReturnType<typeof useInput>;
  }
) => {
  const {
    title,
    bottomSection,
    rules,
    input: propsInput,
    ...inputProps
  } = props;

  const input_inner = useInput("", props.rules ? props.rules : {});
  const input = propsInput ? propsInput : input_inner;

  const inputColor = input.isValid
    ? colors.green
    : input.isShowError
      ? colors.red
      : colors.gray;
  return (
    <Box>
      <Text size="xs" color={colors.gray} mb={2} ml={10} lh={2.2}>
        {props.title}
      </Text>
      <TextInput
        color={inputColor}
        {...(input.isValid && {
          styles: {
            input: {
              borderColor: inputColor,
              color: inputColor,
            },
          },
        })}
        error={input.isShowError}
        {...input.handlers}
        {...props}
        size="md"
        radius={"md"}
        mb={4}
        {...inputProps}
      />
      <Text color={colors.gray} size="xs">
        {" "}
        {props.bottomSection}
      </Text>
    </Box>
  );
};

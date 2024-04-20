"use client";
import { colors } from "@/shared/enums";
import { CrossSVG, RightSVG } from "@/shared/svg";
import { Box, TextInput, Flex, Text, TextInputProps } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { IInputRules, useInput } from "../lib/hooks";

interface IPassword {
  rightSectionError?: React.ReactNode;
  leftSectionError?: React.ReactNode;
  password?: ReturnType<typeof useInput>;
  rules?: IInputRules;
}

export const PasswordField = (props: IPassword & TextInputProps) => {
  const { leftSectionError, rightSectionError, ...inputProps } = props;
  const password_inner = useInput("", props.rules ? props.rules : {});
  const password = props.password ? props.password : password_inner;

  const passwordColor = password.isValid
    ? colors.green
    : password.isShowError
      ? colors.red
      : colors.gray;

  return (
    <Box>
      <TextInput
        {...(password.isValid && {
          styles: {
            input: {
              borderColor: colors.green,
              color: colors.green,
            },
          },
        })}
        error={password.isShowError}
        {...password.handlers}
        {...inputProps}
      />
      <Flex justify={"space-between"} mx={10} mt={4}>
        <Flex align={"center"} gap={10}>
          <Text color={passwordColor} size="xs">
            {leftSectionError}
          </Text>
          {password.isShowError && <CrossSVG />}
          {password.isValid && <RightSVG />}
        </Flex>

        <Text color={passwordColor} size="xs">
          {rightSectionError}
        </Text>
      </Flex>
    </Box>
  );
};

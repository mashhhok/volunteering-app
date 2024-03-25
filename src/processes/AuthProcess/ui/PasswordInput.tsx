import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { CrossSVG, RightSVG } from "@/shared/svg";
import { Box, TextInput, Flex, Text } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { useAuthStore } from "../store";

export const PasswordInput = () => {
  const password = useInput("", { minWidth: 10 });
  const setPassword = useAuthStore((state) => state.setPassword);

  React.useEffect(() => {
    setPassword(password.value, !password.isValid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password.value, password.isValid]);

  const passwordColor = password.isValid
    ? colors.green
    : password.isShowError
    ? colors.red
    : colors.gray;

  return (
    <Box w={"100%"}>
      <TextInput
        {...(password.isValid && {
          styles: {
            input: {
              borderColor: colors.green,
              color: colors.green,
            },
          },
        })}
        name='password'
        autoFocus
        placeholder="Enter password"
        w={"100%"}
        {...password.handlers}
        error={password.isShowError}
      />
      <Flex justify={"space-between"} mx={10} mt={4}>
        <Flex align={"center"} gap={10}>
          <Text color={passwordColor} size="xs">
            Use 10 or more characters
          </Text>
          {password.isShowError && <CrossSVG />}
          {password.isValid && <RightSVG />}
        </Flex>

        <Text color={passwordColor} size="xs">
          {password.value.length}/10
        </Text>
      </Flex>
    </Box>
  );
};

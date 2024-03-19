import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { CrossSVG, RightSVG } from "@/shared/svg";
import { Box, TextInput, Flex, Text } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { useAuthStore } from "../../store";

export const ConfirmInput = () => {
  const password_1 = useAuthStore((state) => state.password);
  const password = useInput("", { match: password_1.text, minWidth: 1 });
  const setPassword = useAuthStore((state) => state.setConfirmPassword);

  React.useEffect(() => {
    setPassword(password.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password.value]);

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
        placeholder="Enter password"
        w={"100%"}
        {...password.handlers}
        error={password.isShowError}
      />
      <Flex justify={"space-between"} mx={10} mt={4}>
        <Flex align={"center"} gap={10}>
          <Text color={passwordColor} size="xs">
            Confirm password
          </Text>
          {password.isShowError && <CrossSVG />}
          {password.isValid && <RightSVG />}
        </Flex>

        <Text color={passwordColor} size="xs">
          {password.isShowError && "do not match"}
          {password.isValid && "match"}
        </Text>
      </Flex>
    </Box>
  );
};

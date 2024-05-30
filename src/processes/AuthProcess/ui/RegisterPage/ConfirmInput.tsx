import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { CrossSVG, RightSVG } from "@/shared/svg";
import { Box, TextInput, Flex, Text } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { useAuthStore } from "../../store";
import { PasswordField } from "@/shared/ui";
import { IDictionary } from "@/shared/config/i18n.config";

export const ConfirmInput = ({dict}: {dict: IDictionary}) => {
  const password_first = useAuthStore((state) => state.password);
  const password = useInput("", { match: password_first.text, minWidth: 1 });
  const setPassword = useAuthStore((state) => state.setConfirmPassword);

  React.useEffect(() => {
    setPassword(password.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password.value]);

  return (
    <Box w={"100%"}>
      <PasswordField
        password={password}
        placeholder={dict.auth_process.register_page.confirm_field.placeholder}
        leftSectionError={dict.auth_process.register_page.confirm_field.left_section}
        rightSectionError={password.isValid ? "match" : "not match"}
      />
    </Box>
  );
};

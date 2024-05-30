"use client";
import { useInput } from "@/shared/lib/hooks";
import { Box} from "@mantine/core";
import React from "react";
import { useAuthStore } from "../store";
import { PasswordField } from "@/shared/ui";
import { IDictionary } from "@/shared/config/i18n.config";

export const PasswordInput = ({dict}: {dict: IDictionary}) => {
  const password = useInput("", { minWidth: 10 });
  const setPassword = useAuthStore((state) => state.setPassword);

  React.useEffect(() => {
    setPassword(password.value, !password.isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password.value, password.isValid]);
  return (
    <Box w={"100%"}>
      <PasswordField
        password={password}
        rightSectionError={`${password.value.length}/10`}
        leftSectionError={dict.auth_process.register_page.password_field.left_section}
        name="password"
        autoFocus
        placeholder={dict.auth_process.register_page.password_field.placeholder}
        w={"100%"}
      />
    </Box>
  );
};

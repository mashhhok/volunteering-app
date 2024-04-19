"use client";
import { useInput } from "@/shared/lib/hooks";
import { Box} from "@mantine/core";
import React from "react";
import { useAuthStore } from "../store";
import { PasswordField } from "@/shared/ui";

export const PasswordInput = () => {
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
        leftSectionError={`Use 10 or more characters`}
        name="password"
        autoFocus
        placeholder="Enter password"
        w={"100%"}
      />
    </Box>
  );
};

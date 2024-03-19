import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { RightSVG } from "@/shared/svg";
import { TextInput } from "@mantine/core";
import React from "react";

export const EmailInput = ({
  email,
}: {
  email: ReturnType<typeof useInput>;
}) => {
  return (
    <TextInput
      radius={"md"}
      mb={24}
      autoFocus
      placeholder={"Your Email"}
      {...email.handlers}
      {...(email.isValid && {
        styles: {
          input: {
            borderColor: colors.green,
            color: colors.green,
          },
        },
        rightSection: <RightSVG />,
      })}
      error={email.isShowError}
    />
  );
};

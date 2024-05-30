import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { useInput } from "@/shared/lib/hooks";
import { RightSVG } from "@/shared/svg";
import { TextInput } from "@mantine/core";
import React from "react";

export const EmailInput = ({
  email,
  dict,
}: {
  email: ReturnType<typeof useInput>;
  dict: IDictionary;
}) => {
  return (
    <TextInput
      radius={"md"}
      mb={24}
      autoFocus
      name="email"
      placeholder={dict.auth_process.begin_page.email_input.placeholder}
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

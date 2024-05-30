import { colors } from "@/shared/enums";
import { RightSVG } from "@/shared/svg";
import { TextInput } from "@mantine/core";
import React from "react";

export const EmailShower = ({ email }: { email: string }) => {
  return (
    <TextInput
      radius={"md"}
      styles={{
        input: {
          borderColor: colors.green,
          color: colors.green,
        },
      }}
      readOnly
      value={email}
      leftSection={<RightSVG />}
      w={"100%"}
      mb={50}
    />
  );
};

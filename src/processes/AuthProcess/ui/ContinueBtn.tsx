import { colors } from "@/shared/enums";
import { Button } from "@mantine/core";
import React from "react";

export const ContinueBtn = ({
  disabled,
  children,
}: {
  disabled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {!disabled ? (
        <Button
          fz="18px"
          color={colors.violet}
          mb={12}
          py={19.5}
          h="auto"
          variant="filled"
          fullWidth
          type="submit"
        >
          {children}
        </Button>
      ) : (
        <Button
          fz="18px"
          color={colors.lightViolet}
          mb={12}
          py={19.5}
          h="auto"
          variant="filled"
          fullWidth
        >
          {children}
        </Button>
      )}
    </>
  );
};

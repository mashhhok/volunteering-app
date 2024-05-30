import { colors } from "@/shared/enums";
import { Button } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const NextBtn = ({ disabled }: { disabled: boolean }) => {
  return (
    <Link href="/create_fundraiser/amount">
      <Button
        fullWidth
        w={"100%"}
        size="lg"
        disabled={disabled}
        color={disabled ? colors.lightViolet : colors.violet}
      >
        Next
      </Button>
    </Link>
  );
};

import { colors } from "@/shared/enums";
import { Button, ButtonProps } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const NextBtn = (props: ButtonProps &{ disabled?: boolean }) => {
  return (
    <Button
      
      {...props}
      color={props.disabled ? colors.lightViolet : colors.violet}
    >
      {props.children}
    </Button>
  );
};

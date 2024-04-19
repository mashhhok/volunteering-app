import { colors } from "@/shared/enums";
import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";
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

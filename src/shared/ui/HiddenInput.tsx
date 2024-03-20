import { Input, InputProps, PolymorphicComponentProps } from "@mantine/core";
import React from "react";

export const HiddenInput = (props: any) => {
  return (
    <Input
      style={{
        opacity: "0",
        position: "absolute",
        visibility: "hidden",
        w: 0,
        h: 0,
        pointerEvents: "none",
      }}
      {...props}
    />
  );
};

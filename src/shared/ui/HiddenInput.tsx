import {
  Input,
  InputProps,
  TextInputProps,
  TextInput,
  __InputStylesNames,
  MantineComponent,
} from "@mantine/core";
import React from "react";

export const HiddenInput = (
  props: TextInputProps & { ref?: React.Ref<HTMLInputElement> }
) => {
  const { ref, ...inputProps } = props;
  return (
    <TextInput
      style={{
        opacity: "0",
        position: "absolute",
        visibility: "hidden",
        w: 0,
        h: 0,
        pointerEvents: "none",
      }}
      {...inputProps}
      ref={ref}
    />
  );
};

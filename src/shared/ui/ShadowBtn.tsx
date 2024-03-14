"use client";
import { Button, darken, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { colors } from "../enums";

export const ShadowBtn = (props: typeof Button.arguments) => {
  const { color, bg, variant, ...rest } = props;

  return (
    <Button
      {...rest}
      variant="white"
      style={{
        color: colors.black,
        boxShadow: `0px 4px 4px 0px #0000000A`,
      }}
    />
  );
};

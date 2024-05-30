"use client";
import { Button, ButtonProps, rgba } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { useThemeStore } from "@/app/store";

export const ShadowBtn = (props: ButtonProps ) => {
  const { color, bg, variant, ...rest } = props;
  const colorScheme = useThemeStore(state => state.theme)
  const isDark = colorScheme === "dark";

  return (
    <Button
      {...rest}
      color="transparent"
      style={{
        color: isDark ? colors.white : colors.black,
        boxShadow: `0px 4px 4px 0px ${
          isDark ? rgba(colors.white, 0.04) : rgba(colors.fullBlack, 0.04)
        }`,
        backgroundColor: "transparent",
      }}
    />
  );
};

"use client";
import { Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { colors } from "../enums";

export const LinkBtn = (props: typeof Text.arguments) => {
  const { hovered, ref } = useHover();

  return (
    <Text
      ref={ref}
      style={
        hovered
          ? {
              color: colors.violet,
              transition: "0.2s",
            }
          : {
              transition: "0.2s",
            }
      }
      {...props}
    ></Text>
  );
};

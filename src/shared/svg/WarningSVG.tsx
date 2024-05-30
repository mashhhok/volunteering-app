"use client";
import { useThemeStore } from "@/app/store";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";

export const WarningSVG = ({ fill, width, height, bg }: ISVG) => {
  const colorScheme = useThemeStore(state => state.theme)

  return (
    <svg
      width={width ? width : "77"}
      height={height ? height : "74"}
      viewBox={`0 0 77 74`}
      fill={bg ? bg : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1"
        width="75"
        height="72"
        rx="19"
        stroke={fill ? fill : colorScheme === "dark" ? "white" : "black"}
        strokeWidth="2"
      />
      <path
        d="M36.2031 44.2031L35.0859 18.4062H42.1953L41.0781 44.2031H36.2031ZM34.6797 57V49.0781H42.6016V57H34.6797Z"
        fill={fill ? fill : colorScheme === "dark" ? "white" : "black"}
      />
    </svg>
  );
};

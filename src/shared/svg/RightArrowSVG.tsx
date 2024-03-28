"use client";
import React from "react";
import { colors } from "../enums";
import { useMantineColorScheme } from "@mantine/core";
import { useThemeStore } from "@/app/store";

export const RightArrowSVG = (props: ISVG) => {
  const colorScheme = useThemeStore(state => state.theme)
  return (
    <svg
      width={props.width ? props.width : "19"}
      height={props.height ? props.height : "18"}
      viewBox={`0 0 ${props.width ? props.width : 19} ${
        props.height ? props.height : 18
      }`}
      fill={props.bg ? props.bg : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1716 7.99992L8.87868 1.70703L10.2929 0.292818L19 8.99992L10.2929 17.707L8.87868 16.2928L15.1716 9.99992L0.585787 9.99992V7.99992L15.1716 7.99992Z"
        fill={
          props.fill
            ? props.fill
            : colorScheme === "dark"
            ? colors.white
            : colors.black
        }
      />
    </svg>
  );
};

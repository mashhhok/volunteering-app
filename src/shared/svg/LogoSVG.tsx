"use client";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { useThemeStore } from "@/app/store";
export const LogoSVG = (props: ISVG) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg
      width={props.width ? props.width : 35}
      height={props.height ? props.height : 46}
      viewBox={`0 0 ${props.width ? props.width : 35} ${
        props.height ? props.height : 46
      }`}
      fill={props.bg ? props.bg : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4714 41.2161C7.27496 41.2161 0 34.5712 0 24.7185V0.086792H11.2848V24.4894C11.2848 28.4419 13.8052 30.9624 17.4714 30.9624C21.1948 30.9624 23.7152 28.4419 23.7152 24.4894V0.086792H35V24.7185C35 34.5712 27.725 41.2161 17.4714 41.2161Z"
        fill={
          props.fill
            ? props.fill
            : theme === "dark"
              ? colors.lightGray
              : colors.black
        }
      />
      <path
        d="M30.8183 45.9133L26.9517 36.7365H8.80442L4.98936 45.9133H1.12275L16.0737 9.82493H19.4247L34.7365 45.9133H30.8183ZM17.775 14.8773L10.1448 33.3855H25.5597L17.775 14.8773Z"
        fill={
          props.fill
            ? props.fill
            : theme === "dark"
              ? colors.lightGray
              : colors.black
        }
      />
    </svg>
  );
};

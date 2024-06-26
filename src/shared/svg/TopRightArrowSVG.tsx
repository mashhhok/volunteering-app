"use client";
import { useThemeStore } from "@/app/store";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";

export const TopRightArrowSVG = (props: ISVG) => {
  const colorScheme = useThemeStore(state => state.theme);

  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3706 2.73823L1.98781 2.73823L1.98782 0.404894H16.3538V14.7709L14.0205 14.7709L14.0205 4.38814L1.98782 16.4208L0.337901 14.7709L12.3706 2.73823Z"
        fill={
          props.fill ? props.fill : colorScheme === "dark" ? "white" : "black"
        }
      />
    </svg>
  );
};

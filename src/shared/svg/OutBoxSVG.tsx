"use client";
import { useThemeStore } from "@/app/store";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";

export const OutBoxSVG = (props: ISVG) => {
  const colorScheme = useThemeStore(state => state.theme)
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1667 18.6666V6.31647L19.0084 10.1582L20.6583 8.50827L14 1.84998L7.34171 8.50827L8.99162 10.1582L12.8333 6.31647V18.6666H15.1667ZM24.5 23.3332V12.8332H22.1667V23.3332H5.83333V12.8332H3.5V23.3332C3.5 24.6219 4.54467 25.6666 5.83333 25.6666H22.1667C23.4553 25.6666 24.5 24.6219 24.5 23.3332Z"
        fill={
          props.fill ? props.fill : colorScheme === "dark" ? "white" : "black"
        }
      />
    </svg>
  );
};

'use client'
import { useThemeStore } from "@/app/store";
import React from "react";

export const CopySVG = (props: ISVG) => {
  const colorScheme = useThemeStore(theme => theme.theme)

  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0.5H18C19.1523 0.5 20 1.34772 20 2.5V12.5C20 13.6523 19.1523 14.5 18 14.5H14V18.5C14 19.6523 13.1523 20.5 12 20.5H2C0.847715 20.5 0 19.6523 0 18.5V8.5C0 7.34772 0.847715 6.5 2 6.5H6V2.5C6 1.34772 6.84772 0.5 8 0.5ZM6 8.5H2V18.5H12V14.5H8C6.84772 14.5 6 13.6523 6 12.5V8.5ZM8 2.5V12.5H18V2.5H8Z"
        fill={
          props.fill ? props.fill : colorScheme === "dark" ? "white" : "black"
        }
      />
    </svg>
  );
};

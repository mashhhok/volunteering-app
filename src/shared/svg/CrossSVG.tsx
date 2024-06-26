import { useThemeStore } from "@/app/store";
import React from "react";

export const CrossSVG = (props: ISVG) => {

  return (
    <svg
      width={props.width ? props.width : 14}
      height={props.height ? props.height : 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.17851 6.99996L13.4818 12.3033L12.3033 13.4818L7 8.17847L1.6967 13.4818L0.518188 12.3033L5.82149 6.99996L0.518188 1.69666L1.6967 0.518145L7 5.82145L12.3033 0.518145L13.4818 1.69666L8.17851 6.99996Z"
        fill={props.fill ? props.fill : "#F13D3F"}
      />
    </svg>
  );
};

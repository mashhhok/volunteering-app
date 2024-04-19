"use client";
import React from "react";

export const RightSVG = (props: ISVG) => {
  return (
    <svg
      width={props.width ? props.width : 17}
      height={props.height ? props.height : 13}
      viewBox={`0 0 17 13`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.70711 9.79289L15 0.5L16.4142 1.91421L5.70711 12.6213L0 6.91421L1.41421 5.5L5.70711 9.79289Z"
        fill="#006437"
      />
    </svg>
  );
};

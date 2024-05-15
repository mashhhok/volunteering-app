"use client";
import { useThemeStore } from "@/app/store";
import React from "react";

export const FacebookSVG = (props: ISVG) => {
  const colorScheme = useThemeStore((theme) => theme.theme);

  return (
    <svg
    width={props.width ? props.width : 18}
    height={props.width ? props.width : 18}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4006_151744)">
        <path
          d="M8.35 19.9C3.6 19.05 0 14.95 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 14.95 16.4 19.05 11.65 19.9L11.1 19.45H8.9L8.35 19.9Z"
          fill="url(#paint0_linear_4006_151744)"
        />
        <path
          d="M13.9 12.8004L14.35 10.0004H11.7V8.05039C11.7 7.25039 12 6.65039 13.2 6.65039H14.5V4.10039C13.8 4.00039 13 3.90039 12.3 3.90039C10 3.90039 8.40002 5.30039 8.40002 7.80039V10.0004H5.90002V12.8004H8.40002V19.8504C8.95002 19.9504 9.50002 20.0004 10.05 20.0004C10.6 20.0004 11.15 19.9504 11.7 19.8504V12.8004H13.9Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4006_151744"
          x1="10.0005"
          y1="19.3045"
          x2="10.0005"
          y2="-0.00368389"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0062E0" />
          <stop offset="1" stop-color="#19AFFF" />
        </linearGradient>
        <clipPath id="clip0_4006_151744">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

"use client";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";

export const FiltersSVG = ({ fill, width, height, bg }: ISVG) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <svg
      width={width ? width : "20"}
      height={height ? height : "18"}
      viewBox={`0 0 ${width ? width : 20} ${height ? height : 20}`}
      fill={bg ? bg : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8C9.13616 8 7.57006 6.72523 7.12602 5H0V3H7.12602C7.57006 1.27477 9.13616 0 11 0C13.2091 0 15 1.79086 15 4C15 6.20914 13.2091 8 11 8ZM17 3H20V5H17V3ZM6 18C4.13616 18 2.57006 16.7252 2.12602 15H0V13H2.12602C2.57006 11.2748 4.13616 10 6 10C8.20914 10 10 11.7909 10 14C10 16.2091 8.20914 18 6 18ZM12 15H20V13H12V15ZM8 14C8 15.1046 7.10457 16 6 16C4.89543 16 4 15.1046 4 14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14ZM13 4C13 5.10457 12.1046 6 11 6C9.89543 6 9 5.10457 9 4C9 2.89543 9.89543 2 11 2C12.1046 2 13 2.89543 13 4Z"
        fill={fill ? fill : colorScheme === "dark" ? "white" : "black"}
      />
    </svg>
  );
};

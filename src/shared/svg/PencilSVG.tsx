"use client";
import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import { colors } from "../enums";
import { useThemeStore } from "@/app/store";

export const PencilSVG = (props: ISVG) => {
  const colorScheme = useThemeStore(state => state.theme)
  return (
    <svg
      width={props.width ? props.width :"14"}
      height={props.height ? props.height :"14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.95815 0.333008C10.3946 0.333008 10.8131 0.507288 11.1187 0.81529L13.1859 2.88256C13.4937 3.19034 13.6666 3.60779 13.6666 4.04306C13.6666 4.47833 13.4937 4.89578 13.1859 5.20357L5.63826 12.7488C5.1726 13.286 4.51252 13.616 3.75632 13.6679H0.333252V13.0012L0.335417 10.1912C0.392211 9.48823 0.71903 8.83456 1.21758 8.39529L8.79684 0.816093C9.10418 0.506894 9.52215 0.333008 9.95815 0.333008ZM3.70924 12.3362C4.06539 12.311 4.39691 12.1453 4.66311 11.8408L9.70439 6.79949L7.20147 4.29647L2.13065 9.36607C1.86055 9.60496 1.69346 9.93916 1.66659 10.2449V12.335L3.70924 12.3362ZM8.14439 3.35377L10.6472 5.85668L12.2431 4.26076C12.3009 4.20302 12.3333 4.12471 12.3333 4.04306C12.3333 3.96141 12.3009 3.8831 12.2431 3.82537L10.174 1.75625C10.1169 1.69871 10.0392 1.66634 9.95815 1.66634C9.8771 1.66634 9.79939 1.69871 9.7423 1.75625L8.14439 3.35377Z"
        fill={
          props.fill
            ? props.fill
            : colors.gray
        }
      />
    </svg>
  );
};

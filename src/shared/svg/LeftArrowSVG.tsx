import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import { colors } from "../enums";

export const LeftArrowSVG = (props: ISVG) => {
  const { colorScheme } = useMantineColorScheme();
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.41412 10.0001L10.707 16.293L9.2928 17.7072L0.585693 9.00008L9.2928 0.292969L10.707 1.70718L4.41412 8.00008H18.9999V10.0001H4.41412Z"
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

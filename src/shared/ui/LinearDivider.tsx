import { Box } from "@mantine/core";
import React from "react";

interface LinearDivider {
  h: number | string;
  w: number | string;
  color: string;
}

export const LinearDivider = (props: LinearDivider) => {
  return (
    <Box
      w={props.w}
      h={props.h}
      style={{
        background: `linear-gradient(${props.color} 0%,
  ${props.color} 50%,
  ${props.color} 100%`,
      }}
    ></Box>
  );
};

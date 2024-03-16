"use client";
import { Box, rgba } from "@mantine/core";
import React from "react";

interface LinearDivider {
  h: number | string;
  w: number | string;
  color: string;
  deg?: number;
}

export const LinearDivider = (props: LinearDivider) => {
  return (
    <Box
      maw={props.w}
      w={"100%"}
      h={props.h}
      style={{
        background: `linear-gradient(${
          props.deg ? props.deg + "deg" : "90deg"
        }, ${rgba(props.color, 0)} 0% ,${rgba(props.color, 1)} 50%, ${rgba(
          props.color,
          0
        )} 100%)`,
      }}
    ></Box>
  );
};

"use client";
import { Box, ButtonCssVariables, Button, darken } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

export const BlurButton = (props: typeof Button.arguments) => {
  const { hovered, ref } = useHover();
  const {
    leftSection: LeftSection,
    rightSection: RightSection,
    ...rest
  } = props;

  return (
    <Button
      ref={ref}
      style={{
        overflow: "hidden",
      }}
      pos="relative"
      {...(LeftSection && {
        leftSection: (
          <Box style={{ zIndex: 5 }}>
            {LeftSection}
          </Box>
        ),
      })}
      {...(RightSection && {
        rightSection: (
          <Box style={{ zIndex: 5 }}>
            {RightSection}
          </Box>
        ),
      })}
      {...rest}
    >
      <Box
        pos={"absolute"}
        top={0}
        right={0}
        w={"15%"}
        h={"100%"}
        style={{
          transition: "0.4s",
          boxShadow: `0px 0px 35px 30px ${
            hovered ? darken(props.color, 0.45) : "transparent"
          }`,
          backgroundColor: hovered ? darken(props.color, 0.45) : "transparent",
        }}
      />
      <Box style={{ zIndex: 10000 }}>{props.children}</Box>
    </Button>
  );
};

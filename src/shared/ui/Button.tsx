"use client";
import {
  Box,
  ButtonCssVariables,
  Button,
  darken,
  ButtonProps,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

export const BlurButton = (props: ButtonProps & { color: string }) => {
  const { hovered, ref } = useHover<HTMLButtonElement>();
  const {
    leftSection: LeftSection,
    rightSection: RightSection,
    ...rest
  } = props;

  return (
    <Box
      display={"inline-block"}
      style={{ opacity: props.disabled ? 0.65 : 1 }}
    >
      <Button
        ref={ref}
        styles={{
          root: {
            overflow: "hidden",
          },
        }}
        pos="relative"
        {...(LeftSection && {
          leftSection: <Box style={{ zIndex: 5 }}>{LeftSection}</Box>,
        })}
        {...(RightSection && {
          rightSection: <Box style={{ zIndex: 5 }}>{RightSection}</Box>,
        })}
        type="submit"
        {...rest}
        bg={props.color}
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
            backgroundColor: hovered
              ? darken(props.color, 0.45)
              : "transparent",
          }}
        />
        <Box style={{ zIndex: 5, letterSpacing: "2px" }}>{props.children}</Box>
      </Button>
    </Box>
  );
};

import { Box, Button, rgba } from "@mantine/core";
import React from "react";
import { colors } from "../enums";

interface IChip {
  selected?: boolean;
  children: React.ReactNode;
}

export const Chip = (props: IChip) => {
  return (
    <Button
      style={{
        backgroundColor: props.selected ? colors.neutral : "black",
        border: `2px solid ${props.selected ? "" : "transparent"}`,
        color: props.selected ? "#000" : "#fff",
        boxShadow: `inset 0 4px 4px 0 ${rgba(colors.black, 0.25)}`,
      }}
    >
      {props.children}
    </Button>
  );
};

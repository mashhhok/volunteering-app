import { Box } from "@mantine/core";
import React from "react";

export const Wrapper = ({ children }: any) => {
  return (
    <Box maw={"100%"} w={"100%"} style={{ overflow: "hidden" }}>
      {children}
    </Box>
  );
};

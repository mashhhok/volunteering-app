import { Box } from "@mantine/core";
import React from "react";

export const ContentWrapper = ({children}: {children: React.ReactNode}) => {
  return <Box py={40} px={{ base: 10, xs: 15, sm: 20, lg: 30, xl: 40 }}>{children}</Box>;
};

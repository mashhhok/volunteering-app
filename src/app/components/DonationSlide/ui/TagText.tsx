import React from "react";
import { Box } from "@mantine/core";
import { colors } from "@/shared/enums";

export const TagText = ({children}: {children: string}) => {
  return (
    <Box
      style={{ borderRadius: 44, border: `2px solid ${colors.gray}` }}
      py={7}
      px={12}
    >
      {children}
    </Box>
  );
};

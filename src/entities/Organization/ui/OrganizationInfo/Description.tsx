import { colors } from "@/shared/enums";
import { Box, ScrollArea, Title } from "@mantine/core";
import React from "react";

export const Description = ({children}: {children: React.ReactNode}) => {
  return (
    <Box >
      <Title fz={20} mb={24}>
        About
      </Title>
      <ScrollArea h={190} scrollbars="y" color={colors.gray} fz={16}>
        {children}
      </ScrollArea>
    </Box>
  );
};

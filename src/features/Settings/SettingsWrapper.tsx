import { colors } from "@/shared/enums";
import { Box, Card } from "@mantine/core";
import React from "react";

export const SettingsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Card
      bg={"transparent"}
      radius="lg"
      style={{ border: `1px solid ${colors.lightGray}` }}
    >
      <Box py={40} px={{ base: 10, xs: 15, sm: 20, lg: 30, xl: 40 }}>
        {children}
      </Box>
    </Card>
  );
};

import { colors } from "@/shared/enums";
import { Card } from "@mantine/core";
import React from "react";

export const Bordered = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "big" | "small";
}) => {
  return (
    <Card
      radius={"lg"}
      py={size === "small" ? 20 : 45}
      px={size === "small" ? 20 : 40}
      withBorder
    >
      {children}
    </Card>
  );
};

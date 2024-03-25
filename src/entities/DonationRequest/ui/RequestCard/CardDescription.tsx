import { colors } from "@/shared/enums";
import { Text } from "@mantine/core";
import React from "react";

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Text
      color={colors.gray}
      fz="16px"
      style={{
        display: "-webkit-box",
        "-webkit-line-clamp": "8" /* количество строк */,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        "text-overflow": "ellipsis",
      }}
    >
      {children}
    </Text>
  );
};

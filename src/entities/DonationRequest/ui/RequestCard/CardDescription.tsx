import { colors } from "@/shared/enums";
import { ScrollArea, Text } from "@mantine/core";
import React from "react";

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ScrollArea style={{ flexGrow: "1" }}>
      <Text
        color={colors.gray}
        fz="16px"
        style={{
          display: "-webkit-box",
          // "-webkit-line-clamp": "8" /* количество строк */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        }}
      >
        {children}
      </Text>
    </ScrollArea>
  );
};

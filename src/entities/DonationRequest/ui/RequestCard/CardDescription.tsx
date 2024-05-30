import { colors } from "@/shared/enums";
import { ScrollArea, Text } from "@mantine/core";
import React from "react";
import parse from "html-react-parser";

export const CardDescription = ({ children }: { children: string }) => {
  const parsed = parse(children);

  return (
    <ScrollArea style={{ flexGrow: "1" }}>
      <Text
        p={5}
        color={colors.gray}
        component="div"
        fz="16px"
        style={{
          display: "-webkit-box",
          // "-webkit-line-clamp": "8" /* количество строк */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        }}
      >
        {parsed}
      </Text>
    </ScrollArea>
  );
};

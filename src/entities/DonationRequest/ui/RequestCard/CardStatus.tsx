import { colors } from "@/shared/enums";
import { Flex, Button } from "@mantine/core";
import React from "react";

export const CardStatus = ({
  status,
  tags,
  isTextHidden,
}: {
  status: "pending" | "open" | "closed";
  isTextHidden?: boolean;
  tags: string[];
}) => {
  return (
    <Flex wrap={"wrap"} gap={8}>
      {status === "pending" && (
        <Button color="violet">
          ⚠️ {isTextHidden ? "" : "Current fundraising"}
        </Button>
      )}
      {status === "open" && (
        <Button color="yellow">
          ⏳ {isTextHidden ? "" : "Waiting for the report"}
        </Button>
      )}
      {status === "closed" && (
        <Button color="green">
          ✅ {isTextHidden ? "" : "Successfully reported"}
        </Button>
      )}
      {tags.map((item, index) => (
        <Button key={index} variant="outline" color={colors.gray}>
          {isTextHidden ? item.slice(0, 2) : item}
        </Button>
      ))}
    </Flex>
  );
};

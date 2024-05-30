import { colors } from "@/shared/enums";
import { Flex, Button, Text } from "@mantine/core";
import React from "react";

export const CardStatus = ({
  status,
  tags,
  isTextHidden,
  small,
}: {
  status: "pending" | "open" | "closed";
  isTextHidden?: boolean;
  tags: string[];
  small?: boolean;
}) => {
  return (
    <Flex wrap={"wrap"} gap={8}>
      {status === "pending" && (
        <Button
          px={12}
          h={25}
          color="violet"
          {...(small && { fz: 10 })}
          style={{ alignContent: "center" }}
        >
          ⚠️ {isTextHidden ? "" : "Current fundraising"}
        </Button>
      )}
      {status === "open" && (
        <Button
          px={12}
          h={25}
          color="yellow"
          {...(small && { fz: 10 })}
          style={{ alignContent: "center" }}
        >
          ⏳ {isTextHidden ? "" : "Waiting for the report"}
        </Button>
      )}
      {status === "closed" && (
        <Button
          px={12}
          h={25}
          color="green"
          {...(small && { fz: 10 })}
          style={{ alignContent: "center" }}
        >
          ✅ {isTextHidden ? "" : "Successfully reported"}
        </Button>
      )}
      {tags &&
        tags.map((item, index) => (
          <Button
            px={12}
            h={25}
            key={index}
            {...(small && { fz: 10 })}
            variant="outline"
            color={colors.gray}
            style={{ alignContent: "center" }}
          >
            {isTextHidden ? item.slice(0, 2) : item}
          </Button>
        ))}
    </Flex>
  );
};

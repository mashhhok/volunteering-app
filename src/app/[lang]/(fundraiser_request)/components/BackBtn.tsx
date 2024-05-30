import { LeftArrowSVG } from "@/shared/svg";
import { Box, Flex, Text } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const BackBtn = ({ absolute }: { absolute?: boolean }) => {
  return (
    <Link href="/settings/details">
      <Flex
        gap={11}
        {...(absolute && {
          pos: "absolute",
          top: 40,
          left: 30,
        })}
        style={{ cursor: "pointer" }}
      >
        <LeftArrowSVG />
        <Text size="xs">Back to Settings</Text>
      </Flex>
    </Link>
  );
};

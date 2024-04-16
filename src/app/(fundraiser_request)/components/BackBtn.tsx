import { LeftArrowSVG } from "@/shared/svg";
import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const BackBtn = ({ absolute }: { absolute?: boolean }) => {
  return (
    <Link href="/settings">
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

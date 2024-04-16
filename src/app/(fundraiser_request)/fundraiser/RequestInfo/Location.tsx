import { LocationSVG } from "@/shared/svg";
import { Flex, Text } from "@mantine/core";
import React from "react";

export const Location = () => {
  return (
    <Flex>
      <Flex align={"center"} gap={6}>
        <LocationSVG width={12} height={15} /> <Text size="xs">Location:</Text>
        <Text size="xs">Kharkiv, Ukraine</Text>
      </Flex>
    </Flex>
  );
};

import { colors } from "@/shared/enums";
import { Flex, Box, Text } from "@mantine/core";
import React from "react";

export const Published = () => {
  return (
    <Flex gap={12}>
      <Text size="xs" color={colors.gray}>
        Project published: 27 Mar 2024
      </Text>
      <Flex gap={4} align={"center"}>
        <Box h={9} w={9} style={{ borderRadius: "50%" }} bg={colors.violet} />
        <Text size="xs" color={colors.gray}>
          Current
        </Text>
      </Flex>
    </Flex>
  );
};

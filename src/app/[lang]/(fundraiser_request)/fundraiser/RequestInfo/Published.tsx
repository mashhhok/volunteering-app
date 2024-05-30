import { colors } from "@/shared/enums";
import { Flex, Box, Text } from "@mantine/core";
import React from "react";

export const Published = ({ status, date }: { status: string; date: number }) => {
  const createDate = new Date(date);
  const published =
    createDate.getDay() +
    " " +
    createDate.getMonth() +
    " " +
    createDate.getFullYear();
  return (
    <Flex gap={12}>
      <Text size="xs" color={colors.gray}>
        Project published: {published}
      </Text>
      <Flex gap={4} align={"center"}>
        <Box h={9} w={9} style={{ borderRadius: "50%" }} bg={colors.violet} />
        <Text size="xs" color={colors.gray}>
          {status}
        </Text>
      </Flex>
    </Flex>
  );
};

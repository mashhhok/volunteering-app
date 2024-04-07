import { colors } from "@/shared/enums";
import { LinearDivider } from "@/shared/ui";
import { Flex, Title, Box } from "@mantine/core";
import React from "react";

export const Remains = ({ remains }: { remains: string }) => {
  return (
    <Flex direction={"column"} flex="1 1 auto" align={"flex-end"}>
      <Title mb={16} order={5} style={{ color: colors.lightGray }} mr={30}>
        {remains}
      </Title>
      <LinearDivider h={"2"} w={"280px"} color={colors.violet} />
      <Box h={16} />
      <Title order={5} mr={30} style={{ color: colors.violet }}>
        Remains
      </Title>
    </Flex>
  );
};

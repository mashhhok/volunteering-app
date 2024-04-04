import { colors } from "@/shared/enums";
import { LinearDivider } from "@/shared/ui";
import { Box, Flex, Title } from "@mantine/core";
import React from "react";

export const Goal = () => {
  return (
    <Flex direction={"column"} flex="1 1 auto">
      <Title mb={16} order={5} style={{ color: colors.lightGray }} ml={30}>
        10 000 000 UAH
      </Title>
      <LinearDivider h={"2"} w={"280px"} color={colors.violet} />
      <Box h={16} />
      <Title order={5} ml={30} style={{ color: colors.violet }}>
        Our goal
      </Title>
    </Flex>
  );
};

import { Box, Progress, Flex, Title } from "@mantine/core";
import React from "react";

export const ProgressBar = ({
  collected,
  need,
}: {
  collected: number;
  need: number;
}) => {
  const moneyPercent = Math.round((collected / need) * 100);
  return (
    <Box>
      <Progress
        value={moneyPercent}
        h={4}
        color={moneyPercent === 100 ? "green.5" : "violet.4"}
        radius={"md"}
      />
      <Box h={12} />
      <Flex justify={"space-between"}>
        <Title order={5}>{moneyPercent}%</Title>
        <Title order={5}>100% UAH</Title>
      </Flex>
    </Box>
  );
};

import { Box, Progress, Flex, Title } from "@mantine/core";
import React from "react";

export const ProgressBar = ({
  collected,
  need,
  small,
}: {
  collected: number;
  need: number;
  small?:boolean;
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
      <Box h={small?6:12} />
      <Flex justify={"space-between"}>
        <Title order={5} {...(small&&{fz: 10})}>{moneyPercent}%</Title>
        <Title order={5} {...(small&&{fz: 10})} >100%</Title>
      </Flex>
    </Box>
  );
};

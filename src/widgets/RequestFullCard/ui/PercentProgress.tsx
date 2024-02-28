import { ActionIcon, Box, Flex, Progress, Title } from "@mantine/core";
import React from "react";

interface IPercentProgress {
  collectedMoney: number;
  needMoney: number;
}

export const PercentProgress: React.FC<IPercentProgress> = ({
  collectedMoney,
  needMoney,
}) => {
  const percent = Math.round((collectedMoney / needMoney) * 100);

  return (
    <Box w={"100%"} maw={500}>
      <Flex justify={"space-between"} align={"center"} mb={4}>
        <Title order={4}>Collected</Title>
        <ActionIcon color="teal" size={"lg"}>
          <Title order={4}> {percent}% </Title>
        </ActionIcon>
        <Title order={4}>Need</Title>
      </Flex>
      <Progress color="teal" value={percent} w={"100%"} h={10} radius={"sm"} />
      <Flex justify={"space-between"} mt={4}>
        <Title order={4}>{collectedMoney}</Title>
        <Title order={4}>{needMoney}</Title>
      </Flex>
    </Box>
  );
};

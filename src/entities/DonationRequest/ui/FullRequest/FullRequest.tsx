import { Box, Button, Flex, Title } from "@mantine/core";
import React from "react";
import { PercentProgress } from "./PercentProgress";
import { InterBtns } from "./InterBtns";

interface IFullRequest {
  createdAt: string;
  requestTitle: string;
  collectedMoney: number;
  needMoney: number;
}

export const FullRequest = ({
  createdAt,
  requestTitle,
  collectedMoney,
  needMoney,
}: IFullRequest) => {
  

  return (
    <Flex align={"center"} justify={"center"} direction={"column"} gap={20}>
      <Button radius={"xl"} px={15} fz="lg" lh={0.7} color="teal.8">
        {createdAt}
      </Button>
      <Title order={3} style={{ textAlign: "center" }}>
        {requestTitle}
      </Title>
      <InterBtns />
      <PercentProgress collectedMoney={collectedMoney} needMoney={needMoney} />
    </Flex>
  );
};

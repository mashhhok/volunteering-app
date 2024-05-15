import { Box, Flex } from "@mantine/core";
import React from "react";
import { Title } from "./Title";
import { CardList } from "./CardList";

export const ScrollCards = async ({ userId }: { userId: number }) => {

  return (
    <Box>
      <Title />
      <Box h={26} />
      <CardList userId={userId}  />
    </Box>
  );
};

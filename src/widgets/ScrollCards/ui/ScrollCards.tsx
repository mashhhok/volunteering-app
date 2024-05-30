import { Box, Flex } from "@mantine/core";
import React from "react";
import { Title } from "./Title";
import { CardList } from "./CardList";
import { IDictionary } from "@/shared/config/i18n.config";

export const ScrollCards = async ({ userId, dict }: { userId: number, dict: IDictionary }) => {

  return (
    <Box>
      <Title dict={dict} />
      <Box h={26} />
      <CardList dict={dict} userId={userId}  />
    </Box>
  );
};

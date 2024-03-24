import { Box, Flex } from "@mantine/core";
import React from "react";
import { Title } from "./Title";
import { getDonationRequestById } from "@/entities/DonationRequest/repository";
import { CardList } from "./CardList";

export const ScrollCards = async () => {

  const cards = await getDonationRequestById(1);

  return (
    <Box>
      <Title />
      <Box h={26} />
      <CardList noCards={true} cards={cards} />
    </Box>
  );
};

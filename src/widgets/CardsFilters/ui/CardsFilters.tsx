import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { Title } from "./Title";
import { FilterOptions } from "./FilterOptions";
import { CardsList } from "./CardsList";
import { Footer } from "./Footer";

export const CardsFilters = () => {
  return (
    <Container size={"xl"}>
      <Title pending={3} waitReport={2} closed={8} />
      <Box h={42} />
      <Flex gap={40} direction={{ base: "column", sm: "row" }}>
        <FilterOptions />
        <Box flex="1 1 auto">
          <Flex mih="100%" direction={"column"}>
            <Box flex="1 1 auto">
              <CardsList />
            </Box>
            <Footer />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

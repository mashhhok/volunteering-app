import { Box, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Search } from "./Search";
import { Categories } from "./Categories";
import { CardsFilters } from "@/widgets/CardsFilters";

const FindFundraisingsPage = () => {
  return (
    <Container mt={40} size="xl">
      <Search />
      <Box h={40} />
      <Categories />
      <Box h={{ base: 40, md: 100 }} />
      <CardsFilters/>
    </Container>
  );
};

export default FindFundraisingsPage;

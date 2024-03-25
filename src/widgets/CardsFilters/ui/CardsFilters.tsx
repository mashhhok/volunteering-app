import { Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { Title } from "./Title";
import { FilterOptions } from "./FilterOptions";
import { CardsList } from "./CardsList";
import { Footer } from "./Footer";
import { colors } from "@/shared/enums";

export const CardsFilters = ({ companyId }: { companyId?: number | null }) => {
  return (
    <Container size={"xl"}>
      <Title
        pending={companyId === null ? "" : 3}
        waitReport={companyId === null ? "" : 3}
        closed={companyId === null ? "" : 3}
      />
      <Box h={42} />
      {companyId === null ? (
        <Text color={colors.gray}>No fundraifings yet.</Text>
      ) : (
        <Flex gap={40} direction={{ base: "column", md: "row" }}>
          <FilterOptions />
          <Box flex="1 1 auto">
            <Flex mih="100%" direction={"column"}>
              <Box flex="1 1 auto" mb={24}>
                <CardsList />
              </Box>
              <Footer />
            </Flex>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

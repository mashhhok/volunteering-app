import { Box, Container, Flex, Text } from "@mantine/core";
import { Title } from "./Title";
import { FilterOptions } from "./FilterOptions";
import { CardsList } from "./CardsList";
import { Footer } from "./Footer";
import { colors } from "@/shared/enums";
import { CardsFiltersProps } from "../types";

export const CardsFiltersInner = (props: CardsFiltersProps) => {
  return (
    <Container size={"xl"}>
      <Title pending={""} waitReport={""} closed={""} />
      <Box h={42} />
      {props.companyId === null ? (
        <Text color={colors.gray}>No fundraifings yet.</Text>
      ) : (
        <Flex gap={40} direction={{ base: "column", lg: "row" }}>
          <Flex maw={300} w={"100%"} flex="0 0 auto" visibleFrom="lg">
            <FilterOptions />
          </Flex>
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

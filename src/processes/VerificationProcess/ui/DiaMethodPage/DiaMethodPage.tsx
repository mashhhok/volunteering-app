import { Box, Card, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";
import { colors } from "@/shared/enums";
import { LeftSection } from "./LeftSection";
import { HowWork } from "../HowWork";

export const DiaMethodPage = () => {
  return (
    <Container size="xl">
      <Title order={1} mb={40}>
        Authorizе with Дія.Підпис
      </Title>
      <Flex
        gap={10}
        justify={"space-between"}
        align={{ base: "flex-start", md: "flex-end" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box maw={592} w={"100%"}>
          <LeftSection />
        </Box>
        <Box maw={592} w={"100%"}>
          <HowWork />
        </Box>
      </Flex>
    </Container>
  );
};

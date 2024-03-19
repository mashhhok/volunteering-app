import { Box, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";
import { BlurButton } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { LeftSection } from "./LeftSection";
import { MethodsBtns } from "./MethodsBtns";
import { HowWork } from "../HowWork";

export const ChooseMethodPage = () => {
  return (
    <Container size="xl">
      <Title style={{ textTransform: "capitalize" }} mb={40} order={1}>
        choose an authorization method
      </Title>
      <Flex
        gap={10}
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <Box maw={592} w={"100%"}>
          <LeftSection />
        </Box>
        <Box maw={592} w={"100%"}>
          <Title mb={32} order={2}>
            Other methods of implementation:
          </Title>
          <MethodsBtns />
          <HowWork />
        </Box>
      </Flex>
    </Container>
  );
};

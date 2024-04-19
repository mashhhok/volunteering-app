import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { LeftSection } from "./LeftSection";
import { LinearDivider, Logo } from "@/shared/ui";
import { RightSection } from "./RightSection";
import { BlurText } from "./BlurText";
import { colors } from "@/shared/enums";
import { Anchor } from "./Anchor";

export const Footer = () => {
  

  return (
    <Box>
      <Container size={"xl"} mt={100}>
        <Flex justify={"center"}>
          <LinearDivider h={"2px"} w={"647px"} color={colors.violet} />
        </Flex>
        <Flex justify={"flex-end"} mt={5}>
          <Anchor/>
        </Flex>
        <Box h={{ base: 80, sm: 152 }} />
        <Flex
          justify={"space-between"}
          direction={{ base: "column", sm: "row" }}
        >
          <Box hiddenFrom="sm" pb={10}>
            <Logo />
          </Box>
          <LeftSection />
          <Box visibleFrom="sm">
            <Logo />
          </Box>
          <Box p={8} hiddenFrom="sm">
            <LinearDivider h={"2px"} w={"40%"} color={colors.yellow} />
          </Box>
          <RightSection />
        </Flex>
        <Box h={110} />
      </Container>
      <Container size="2000px" p={0}>
        <BlurText />
      </Container>
    </Box>
  );
};

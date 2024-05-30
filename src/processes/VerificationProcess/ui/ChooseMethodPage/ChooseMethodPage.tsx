import { Box, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Bordered } from "../Bordered";
import { BlurButton } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { LeftSection } from "./LeftSection";
import { MethodsBtns } from "./MethodsBtns";
import { HowWork } from "../HowWork";
import { IDictionary } from "@/shared/config/i18n.config";

export const ChooseMethodPage = ({ dict }: { dict: IDictionary }) => {
  return (
    <Container size="xl">
      <Title style={{ textTransform: "capitalize" }} mb={40} order={1}>
        {dict.verification_process.choose_mehtod_page.title}
      </Title>
      <Flex
        gap={10}
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <Box maw={592} w={"100%"}>
          <LeftSection dict={dict} />
        </Box>
        <Box maw={592} w={"100%"}>
          <Title mb={32} order={2}>
            {dict.verification_process.choose_mehtod_page.subtitle}
          </Title>
          <MethodsBtns dict={dict} />
          <HowWork dict={dict} />
        </Box>
      </Flex>
    </Container>
  );
};

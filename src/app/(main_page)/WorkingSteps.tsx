import { colors } from "@/shared/enums";
import { SuperTitle } from "@/shared/ui";
import { Box, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";

const Step = ({ title, text }: { title: string; text: string }) => (
  <Flex gap={20}>
    <SuperTitle color={colors.violet} order={2}>
      {title}
    </SuperTitle>
    <Text maw={350} size="lg">
      {text}
    </Text>
  </Flex>
);

export const WorkingSteps = () => {
  return (
    <Container size="xl">
      <Title mb={40}>Our way of working</Title>
      <Flex gap={40} direction={{ base: "column", xl: "row" }}>
        <Flex direction={"column"} gap={40}>
          <Step
            title={"1"}
            text={
              "We check incoming applications to ensure that identity documents are valid"
            }
          />
          <Step
            title={"2"}
            text={
              "We identify the urgent needs of citizens in the territory of Ukraine"
            }
          />
        </Flex>
        <Flex direction={"column"} gap={40}>
          <Step
            title={"3"}
            text={
              "We prioritise requests according to the urgency and strategic importance of the need"
            }
          />
          <Step
            title={"4"}
            text={
              "We carry out the project: fundraising, procurement, logistics, etc"
            }
          />
        </Flex>
        <Step
          title={"5"}
          text={"We receive reports and monitor the use of support"}
        />
      </Flex>
    </Container>
  );
};

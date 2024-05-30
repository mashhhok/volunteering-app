import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { SuperTitle } from "@/shared/ui";
import { Box, Container, Flex, Text, Title } from "@mantine/core";

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

export const WorkingSteps = ({ dict }: { dict: IDictionary }) => {
  return (
    <Container size="xl">
      <Title mb={40}>{dict.main_page.working_steps.title}</Title>
      <Flex gap={40} direction={{ base: "column", xl: "row" }}>
        <Flex direction={"column"} gap={40}>
          <Step title={"1"} text={dict.main_page.working_steps.flex.first} />
          <Step title={"2"} text={dict.main_page.working_steps.flex.second} />
        </Flex>
        <Flex direction={"column"} gap={40}>
          <Step title={"3"} text={dict.main_page.working_steps.flex.third} />
          <Step title={"4"} text={dict.main_page.working_steps.flex.forth} />
        </Flex>
        <Step title={"5"} text={dict.main_page.working_steps.flex.fifth} />
      </Flex>
    </Container>
  );
};

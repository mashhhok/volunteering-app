import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { Box, Container, Flex, Text, Title } from "@mantine/core";

export const Numbers = ({ dict }: { dict: IDictionary }) => {
  const statistic = [
    {
      title: dict.main_page.numbers_block.flex.fundraisers.title,
      text: dict.main_page.numbers_block.flex.fundraisers.subtitle,
    },
    {
      title: dict.main_page.numbers_block.flex.users.title,
      text: dict.main_page.numbers_block.flex.users.subtitle,
    },
    {
      title: dict.main_page.numbers_block.flex.donation_amount.title,
      text: dict.main_page.numbers_block.flex.donation_amount.subtitle,
    },
    {
      title: dict.main_page.numbers_block.flex.total_number.title,
      text: dict.main_page.numbers_block.flex.total_number.subtitle,
    },
  ];

  return (
    <Container size="xl">
      <Title mb={40} order={2} style={{ textTransform: "capitalize" }}>
        {dict.main_page.numbers_block.title}
      </Title>
      <Flex gap={26} wrap={"wrap"} direction={{ base: "column", xs: "row" }}>
        {statistic.map((item, index) => (
          <Flex
            gap={15}
            direction={"column"}
            w={{ base: "100%", xs: 300 }}
            key={index}
            p={40}
            mih={170}
            style={{ borderRadius: 16 }}
            bg={colors.black}
          >
            <Text size="xl" flex="1 1 auto" color={colors.white}>
              {item.title}
            </Text>
            <Title style={{ color: colors.white }} order={3}>
              {item.text}
            </Title>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

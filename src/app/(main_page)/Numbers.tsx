import { colors } from "@/shared/enums";
import { Box, Container, Flex, Text, Title } from "@mantine/core";

export const Numbers = () => {
  const statistic = [
    {
      title: "Fundraisers",
      text: "100 000 000 000",
    },
    {
      title: "Users",
      text: "100 000 000 000",
    },
    {
      title: "Donation amount ($)",
      text: "100 000 000 000",
    },
    {
      title: "Total number of donations ($)",
      text: "100 000 000 000",
    },
  ];

  return (
    <Container size="xl">
      <Title mb={40} order={2} style={{ textTransform: "capitalize" }}>
        the numbers of our platform
      </Title>
      <Flex gap={26} wrap={'wrap'} direction={{base: 'column', xs: 'row'}} >
        {statistic.map((item) => (
          <Flex
            gap={15}
            direction={"column"}
            w={{base: '100%', xs: 300}}
            key={item.title}
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

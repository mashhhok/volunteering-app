import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { ShadowBtn } from "@/shared/ui";
import { Box, Button, ButtonProps, Flex, Text, Title } from "@mantine/core";
import React from "react";

const PriceChip = (props: ButtonProps) => (
  <Button
    {...props}
    px={14}
    fz={16}
    radius={13}
    bg={colors.gray}
    fw={400}
    style={{ border: "none" }}
  />
);

export const DonationCard = () => {
  const isDisabled = true;
  return (
    <Flex
      direction={"column"}
      py={40}
      px={20}
      style={{ border: "2px solid", borderRadius: 20 }}
      w={282}
      h={432}
    >
      <Title order={5} mb={20}>
        One-time donation
      </Title>
      <Box bg={colors.lightGray} h={1} w={"100%"} />
      <Box flex="1 1 auto" />
      <Flex justify={"space-between"} mb={31} align={"flex-end"}>
        <Text color={colors.gray} fz={44} fw={500}>
          0
        </Text>
        <Text
          color={colors.gray}
          fz={20}
          fw={500}
          style={{ textTransform: "uppercase" }}
        >
          Uah
        </Text>
      </Flex>
      <Box
        w={"100%"}
        mb={28}
        style={{ border: `1px dashed ${colors.lightGray}` }}
      />
      <Flex justify={"space-between"} flex="1 1 auto">
        <PriceChip>10 ₴</PriceChip>
        <PriceChip>100 ₴</PriceChip>
        <PriceChip>200 ₴</PriceChip>
      </Flex>
      <Button
        fullWidth
        color={isDisabled ? colors.lightViolet : colors.violet}
        mb={12}
        rightSection={<TopRightArrowSVG fill={colors.white} />}
      >
        Donate
      </Button>
      <ShadowBtn
        fullWidth
        rightSection={
          <TopRightArrowSVG style={{ transform: "rotate(90deg)" }} />
        }
      >
        Requisites for payment
      </ShadowBtn>
    </Flex>
  );
};

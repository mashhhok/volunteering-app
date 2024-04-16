"use client";
import { colors } from "@/shared/enums";
import { CopySVG, TopRightArrowSVG } from "@/shared/svg";
import { Box, Button, Card, Flex, Text } from "@mantine/core";
import React from "react";

interface IDonateMethInfo {
  category: string;
  walletType: string;
  cardNum: string;
  title: string;
  names: string;
  copy: boolean;
}

export const DonateMethInfo = ({
  category,
  walletType,
  cardNum,
  title,
  names,
  copy,
}: IDonateMethInfo) => {
  function onCopy() {
    navigator.clipboard.writeText(`
    User\`s name: ${names}
    Category: ${category}
    Wallet type: ${walletType}
    Information: ${cardNum}
    `);
  }
  return (
    <Card
      px={{ base: 20, md: 40 }}
      py={{ base: 12, md: 24 }}
      bg={colors.black}
      radius={"lg"}
    >
      <Flex gap={16} justify={"space-between"} align={"center"} wrap={"wrap"}>
        <Box>
          <Text fw={500} size="lg" mb={16} color={colors.white}>
            {title}
          </Text>
          <Flex gap={6} direction={"column"}>
            <Text color={colors.lightGray}>
              <u>User`s name: </u>
              {names}
            </Text>
            <Text color={colors.lightGray}>
              <u>Category: </u>
              {category}
            </Text>
            <Text color={colors.lightGray}>
              <u>Wallet type: </u>
              {walletType}
            </Text>
            <Text color={colors.lightGray}>
              <u>Information: </u>
              {cardNum}
            </Text>
          </Flex>
        </Box>
        {copy ? (
          <Button
            rightSection={<CopySVG fill={colors.black} />}
            size="lg"
            variant="white"
            color={colors.black}
            px={20}
            onClick={onCopy}
          >
            Copy
          </Button>
        ) : (
          <Button
            rightSection={<TopRightArrowSVG fill={colors.black} />}
            size="lg"
            variant="white"
            color={colors.black}
            px={20}
          >
            Edit
          </Button>
        )}
      </Flex>
    </Card>
  );
};

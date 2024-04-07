import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { Box, Button, Card, Flex, Text } from "@mantine/core";
import React from "react";

interface IDonateMethInfo {
  category: string;
  walletType: string;
  cardNum: string;
}

export const DonateMethInfo = ({
  category,
  walletType,
  cardNum,
}: IDonateMethInfo) => {
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
            Your donation method:
          </Text>
          <Flex gap={6} direction={"column"}>
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
        <Button
          rightSection={<TopRightArrowSVG fill={colors.black} />}
          size="medium"
          variant="white"
          color={colors.black}
          px={20}
        >
          Edit
        </Button>
      </Flex>
    </Card>
  );
};

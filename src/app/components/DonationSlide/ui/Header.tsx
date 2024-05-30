"use client";
import React from "react";
import { Box, Title, Text, Flex, ScrollArea } from "@mantine/core";
import { UserSVG } from "@/shared/svg";
import { TagText } from "./TagText";
import { useDonationSlideStore } from "../store";
import { colors } from "@/shared/enums";
import { LinearDivider } from "@/shared/ui";

export const Header = ({
  title,
  organization,
  tags,
}: {
  title: string;
  organization: string;
  tags: string[];
}) => {
  const blocksAmount = 3;
  const { block, currency, amount, email } = useDonationSlideStore();

  return (
    <Box ml={{ base: 0, md: 80 }}>
      <Flex justify={"space-between"} align={"flex-end"} mb={50}>
        <Flex gap={50} wrap={"wrap"}>
          <Box>
            <Title order={5} mb={24}>
              Fundraising info:
            </Title>
            <Text size="sm" mb={16} maw={600}>
              {title}
            </Text>
            <Flex gap={8} mb={16}>
              <UserSVG width={20} height={20} />
              <Text size="sm" maw={450}>
                {organization}
              </Text>
            </Flex>
            <Flex gap={8} wrap={"wrap"}>
              {tags.map((item, index) => (
                <TagText key={index}>{item}</TagText>
              ))}
            </Flex>
          </Box>
          {currency && amount && (
            <Box>
              <Title order={5} mb={24}>
                The donation:
              </Title>
              <Flex justify={"space-between"}>
                <Text size="sm" mb={16} maw={600} w={"100%"}>
                  {amount}
                </Text>
                <Text size="sm" mb={16} maw={600} w={"100%"}>
                  {currency}
                </Text>
              </Flex>
            </Box>
          )}
          {email && (
            <Box>
              <Title order={5} mb={24}>
                E-mail adress:
              </Title>
              <Text size="sm" mb={16} maw={600} w={"100%"}>
                {email}
              </Text>
            </Box>
          )}
        </Flex>
        <Flex direction={"column"} gap={8}>
          {[...new Array(blocksAmount)].map((item, index) => (
            <Box
              key={index}
              bg={index <= block ? colors.violet : colors.lightGray}
              style={{ borderRadius: "50%" }}
              h={12}
              w={12}
            />
          ))}
        </Flex>
      </Flex>
      <Flex justify={"center"} mb={50}>
        <LinearDivider h={2} w={"90%"} color={colors.violet} />
      </Flex>
    </Box>
  );
};

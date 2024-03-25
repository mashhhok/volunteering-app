import React from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { Box, Flex, Text } from "@mantine/core";
import { BlurButton, Info, LinearDivider } from "@/shared/ui";
import Link from "next/link";
import { colors } from "@/shared/enums";

export const VerifyFunds = () => {
  return (
    <Box>
      <Info
        title={"Why we need your data and what about safety?"}
        subtitle={
          <Link
            style={{ color: colors.red, textDecoration: "underline" }}
            href=""
          >
            Check here
          </Link>
        }
      />
      <Box h={24} />
      <SettingsWrapper>
        <Flex
          direction={"column"}
          justify={"flex-start"}
          align={"flex-start"}
          gap={16}
          mb={40}
        >
          <Text mb={24} fw={500}>
            Provide your data
          </Text>
          <Text size="sm">
            If you want to verify the description and purpose of your
            fundraiser, send us scans/photos of appropriate documents. Obtaining
            a verification is recommended particularly for charitable
            fundraisers.
          </Text>
          <Text size="sm">
            After obtaining the ‘verified’ badge, editing description or title
            of the fundraiser will be impossible.
          </Text>
          <Text size="sm">
            Please send the documents after complete verification of your
            account.
          </Text>
        </Flex>
        <LinearDivider h={"2px"} w={"100%"} color={colors.violet} />
        <Box h={40} />
        <Flex direction={"column"} align={"center"} justify={"center"} gap={16}>
          <Text fw={500} size="sm" >
            You have not fundraisers!
          </Text>
          <BlurButton color={colors.violet} size='lg'>Create fundraiser</BlurButton>
        </Flex>
      </SettingsWrapper>
    </Box>
  );
};

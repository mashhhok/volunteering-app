import React from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { BlurButton, Info } from "@/shared/ui";
import Link from "next/link";
import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text } from "@mantine/core";
import { TopRightArrowSVG } from "@/shared/svg";

export const VerifyAcctount = () => {
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
        <Flex gap={20} wrap={"wrap"} justify={"space-between"}>
          <Box>
            <Text fw={500} mb={24}>
              Choose an authorization method
            </Text>
            <Flex direction={"column"} gap={10} align={"flex-start"}>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                Authorizе with Дія.Підпис
              </BlurButton>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                Authorizе with Bank Id
              </BlurButton>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                File key
              </BlurButton>
            </Flex>
          </Box>
          <Card
            radius={"md"}
            style={{ border: `1px solid ${colors.lightGray}` }}
            p={20}
            maw={260}
            w={"100%"}
          >
            <Text fw={500} size="sm" color={colors.gray} mb={16}>
              How is it work?
            </Text>
            <Text fw={400} size="xs" color={colors.gray} lh={1.5}>
              You need to confirm your identity for authorization. You can do
              this in several ways: using the ID.GOV.UA system, the Diya
              application or a personal key. Choose the authorization method
              convenient for you and follow the instructions.
            </Text>
          </Card>
        </Flex>
      </SettingsWrapper>
    </Box>
  );
};

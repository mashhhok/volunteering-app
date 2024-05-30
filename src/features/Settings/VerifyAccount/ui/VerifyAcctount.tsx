"use client";
import React, { useContext } from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { BlurButton, Info } from "@/shared/ui";
import { Link } from "@/shared/ui/Link";
import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text } from "@mantine/core";
import { TopRightArrowSVG } from "@/shared/svg";
import { LangContext } from "@/app/[lang]/LangProvider";

export const VerifyAcctount = () => {
  const dict = useContext(LangContext);

  return (
    <Box>
      <Info
        title={dict.settings_process.verify_account_page.info_block.title}
        subtitle={
          <Link
            style={{ color: colors.red, textDecoration: "underline" }}
            href=""
          >
            {dict.settings_process.verify_account_page.info_block.link}
          </Link>
        }
      />
      <Box h={24} />
      <SettingsWrapper>
        <Flex gap={20} wrap={"wrap"} justify={"space-between"}>
          <Box>
            <Text fw={500} mb={24}>
              {dict.settings_process.verify_account_page.choose_method.title}
            </Text>
            <Flex direction={"column"} gap={10} align={"flex-start"}>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                {dict.settings_process.verify_account_page.choose_method.dia}
              </BlurButton>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                {
                  dict.settings_process.verify_account_page.choose_method
                    .bank_id
                }
              </BlurButton>
              <BlurButton
                rightSection={<TopRightArrowSVG />}
                color={colors.violet}
                size="md"
              >
                {
                  dict.settings_process.verify_account_page.choose_method
                    .file_key
                }
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
              {dict.settings_process.verify_account_page.how_work.title}
            </Text>
            <Text fw={400} size="xs" color={colors.gray} lh={1.5}>
              {dict.settings_process.verify_account_page.how_work.subtitle}
            </Text>
          </Card>
        </Flex>
      </SettingsWrapper>
    </Box>
  );
};

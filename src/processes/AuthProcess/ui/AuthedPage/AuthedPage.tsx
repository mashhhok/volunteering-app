"use client";
import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Link } from "@/shared/ui/Link";
import { IDictionary } from "@/shared/config/i18n.config";
export const AuthedPage = ({dict}: {dict: IDictionary}) => {
  return (
    <>
      <Flex align={"center"} direction={"column"}>
        <Title order={2} mb={24} style={{ textAlign: "center" }} maw={600}>
          {dict.auth_process.authed_page.title}
        </Title>
        <Link href='/auth/4'>
          <BlurButton mb={20} size="lg" color={colors.violet}>
          {dict.auth_process.authed_page.redirect_btn}
          </BlurButton>
        </Link>
      </Flex>
    </>
  );
};

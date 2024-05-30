"use client";
import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { LinkBtn } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import { Link } from "@/shared/ui/Link";
import React from "react";

export const Info = ({ dict }: { dict: IDictionary }) => {
  return (
    <>
      <LinkBtn
        href="/"
        activeProps={{ color: colors.violet }}
        props={{ style: { fw: 500 } }}
      >
        {dict.widgets.header.info.home}
      </LinkBtn>
      <LinkBtn
        href="/find_fundraisings"
        activeProps={{ color: colors.violet }}
        props={{ style: { fw: 500 } }}
      >
        {dict.widgets.header.info.find_fund}
      </LinkBtn>
    </>
  );
};

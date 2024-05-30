"use client";
import { useThemeStore } from "@/app/store";
import { IDictionary } from "@/shared/config/i18n.config";
import { colors } from "@/shared/enums";
import { ShadowBox } from "@/shared/ui";
import {
  Box,
  Card,
  Flex,
  Text,
  Title,
  rgba,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";

export const DonateInfo = ({
  donors,
  funds,
  workYear,
  dict
}: {
  donors: number | string;
  funds: number | string;
  workYear: number | string;
  dict: IDictionary
}) => {
  function correctNum(num: number | string) {
    if (typeof num !== "number") return num;
    if (num >= 1000000) {
      const res = Math.round(num / 1000000);
      return res + "M+";
    } else if (num >= 1000) {
      const res = Math.round(num / 1000);
      return res + "K+";
    } else {
      return `${num}`;
    }
  }

  return (
    <Flex gap={19} wrap={"wrap"}>
      <Box flex={"1 1 auto"}>
        <ShadowBox title={correctNum(donors)} subtitle={dict.widgets.organization_info.donate_info.requests} />
      </Box>

      <Box flex={"1 1 auto"}>
        <ShadowBox title={correctNum(funds)} subtitle={dict.widgets.organization_info.donate_info.funds} />
      </Box>

      <Box flex={"1 1 auto"}>
        <ShadowBox title={`${workYear}`} subtitle={dict.widgets.organization_info.donate_info.years} />
      </Box>
    </Flex>
  );
};

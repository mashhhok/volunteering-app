"use client";
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
}: {
  donors: number | "-";
  funds: number | "-";
  workYear: number | "-";
}) => {
  const { colorScheme } = useMantineColorScheme();

  function correctNum(num: number | string) {
    if (typeof num !== "number") return num;
    if (num > 1000) {
      const res = Math.round(num / 1000);
      return res + "K+";
    } else if (num > 1000000) {
      const res = Math.round(num / 1000000);
      return res + "M+";
    } else {
      return `${num}`;
    }
  }

  return (
    <Flex gap={19} >
      <Box flex={"1 1 auto"}>
        <ShadowBox
          title={correctNum(donors)}
          subtitle={"Donors and volunteers"}
        />
      </Box>

      <Box flex={"1 1 auto"}>
        <ShadowBox title={correctNum(funds)} subtitle={"Funds"} />
      </Box>

      <Box flex={"1 1 auto"}>
        <ShadowBox title={`${workYear}`} subtitle={"Years of work"} />
      </Box>
    </Flex>
  );
};

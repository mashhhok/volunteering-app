"use client";
import { colors } from "@/shared/enums";
import { ShadowBtn } from "@/shared/ui";
import { NextBtn } from "@/shared/ui/NextBtn";
import {
  Box,
  Flex,
  NumberInput,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { AmountInput } from "./AmountInput";
import { useCreateFundraiserStore } from "../store";
import { CurrencyInput } from "./CurrencyInput";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RgbaBgLayout } from "@/shared/ui/RgbaBgLayout";
import { BackBtn } from "../BackBtn";

export const AmountPage = () => {
  const { amount, currency } = useCreateFundraiserStore((store) => store);
  const isValid = amount.length > 0 && amount.length < 13 && currency;
  const router = useRouter();

  return (
    <RgbaBgLayout>
      <BackBtn absolute />

      <Box maw={500} w={"100%"}>
        <Title order={4} style={{ textAlign: "center" }} mb={40}>
          What are we fundraising for today?
        </Title>
        <Flex gap={12} mb={5} align={"center"}>
          <AmountInput />
          <CurrencyInput />
        </Flex>
        <Text color={colors.gray} size="xs">
          Up to 12 characters
        </Text>
        <Box h={65} />
        <Flex gap={28}>
          <Box onClick={router.back} w={"100%"}>
            <ShadowBtn fullWidth w={"100%"} size="lg">
              Back
            </ShadowBtn>
          </Box>
          <Link href={"/create_fundraiser/preview"} style={{ width: "100%" }}>
            <NextBtn fullWidth size="lg" disabled={!isValid}>
              Next
            </NextBtn>
          </Link>
        </Flex>
      </Box>
    </RgbaBgLayout>
  );
};

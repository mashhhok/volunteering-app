'use client'
import { useCreateFundraiserStore } from '@/app/(fundraiser_request)/create_fundraiser/store';
import { colors } from '@/shared/enums';
import {  ShadowBtn } from '@/shared/ui';
import { NextBtn } from '@/shared/ui/NextBtn';
import { RgbaBgLayout } from '@/shared/ui/RgbaBgLayout';
import { Box, Title, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import { AmountInput } from './AmountInput';
import { CurrencyInput } from './CurrencyInput';
import { BackBtn } from '../../components/BackBtn';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';


const AmountPage = () => {
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
    </RgbaBgLayout>)
}

export default AmountPage
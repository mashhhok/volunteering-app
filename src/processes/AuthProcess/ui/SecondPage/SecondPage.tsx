"use client";
import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import Link from "next/link";
export const SecondPage = () => {
  return (
    <>
      <Flex align={"center"} direction={"column"}>
        <Title order={2} mb={24} style={{ textAlign: "center" }} maw={600}>
          your account has been successfully registered! Now you need to log in
          to your account
        </Title>
        <Link href='/auth/4'>
          <BlurButton mb={20} size="lg" color={colors.violet}>
            Redirect To Login Page
          </BlurButton>
        </Link>
      </Flex>
    </>
  );
};

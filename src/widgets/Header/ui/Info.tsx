"use client";
import { colors } from "@/shared/enums";
import { LinkBtn } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const Info = () => {
  return (
    <>
      <LinkBtn href="/" activeProps={{color: colors.violet }} props={{ style: { fw: 500 }}}>
        Home
      </LinkBtn>
      <LinkBtn href="/find_fundraisings" activeProps={{ color: colors.violet}} props={{ style: { fw: 500 }}}>
        Find Fundraisings
      </LinkBtn>
    </>
  );
};

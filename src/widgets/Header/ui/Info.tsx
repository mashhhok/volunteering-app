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
        Donator`s rate
      </LinkBtn>
      <LinkBtn href="/about" activeProps={{ color: colors.violet}} props={{ style: { fw: 500 }}}>
        About us
      </LinkBtn>
      <LinkBtn href="/faq" activeProps={{ color: colors.violet}} props={{ style: { fw: 500 }}}>
        FAQ
      </LinkBtn>
    </>
  );
};

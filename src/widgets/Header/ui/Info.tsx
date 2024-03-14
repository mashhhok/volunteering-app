"use client";
import { LinkBtn } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const Info = () => {
  return (
    <>
      <Link href="/">
        <LinkBtn fw={500}>Donator`s rate</LinkBtn>
      </Link>
      <Link href="/">
        <LinkBtn fw={500}>About us</LinkBtn>
      </Link>
      <Link href="/">
        <LinkBtn fw={500}>FAQ</LinkBtn>
      </Link>
    </>
  );
};

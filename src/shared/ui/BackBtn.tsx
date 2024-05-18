"use client";
import React from "react";
import { Flex, Text } from "@mantine/core";
import { LeftArrowSVG } from "../svg";
import { useRouter } from "next/router";

export const BackBtn = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Flex
      gap={11}
      align={"center"}
      style={{ cursor: "pointer" }}
      onClick={() => router.back()}
    >
      <LeftArrowSVG />
      <Text>{children}</Text>
    </Flex>
  );
};

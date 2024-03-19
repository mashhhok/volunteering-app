"use client";
import { LeftArrowSVG } from "@/shared/svg";
import { Flex, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export const BackBtn = () => {
  const router = useRouter()

  function click(){
    router.back()
  }

  return (
    <Flex style={{ display: "inline-flex" }} gap={8} align={"center"} mt={10} onClick={click}>
      <LeftArrowSVG />
      <Text size="xs">Back to site</Text>
    </Flex>
  );
};

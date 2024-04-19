"use client";
import { ShadowBtn } from "@/shared/ui";
import { useRouter } from "next/navigation";
import React from "react";
import {Box} from '@mantine/core'

export const BackBtn = () => {
  const router = useRouter();

  function click() {
    router.push("/verification/home");
  }

  return (
    <Box onClick={click}>
      <ShadowBtn size="xl">Back to authorize</ShadowBtn>
    </Box>
  );
};

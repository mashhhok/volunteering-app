"use client";
import React from "react";
import { Flex, Box } from "@mantine/core";
import { BlurButton, ShadowBtn } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { useDonationSlideStore } from "../store";

export const BlockNavigateBtns = ({
  nextDisable,
  isSubmit,
}: {
  nextDisable: boolean;
  isSubmit?: boolean;
}) => {
  const { setBlock, block } = useDonationSlideStore();

  function onBackClick() {
    if (block > 0) setBlock(block - 1);
  }

  function onNextClick() {
    setBlock(block + 1);
  }

  return (
    <Flex justify="flex-end">
      <Flex gap={24}>
        <Box onClick={onBackClick}>
          <ShadowBtn size="lg">Back</ShadowBtn>
        </Box>
        <button
          onClick={onNextClick}
          type={isSubmit ? "submit" : "button"}
          disabled={nextDisable}
        >
          <BlurButton
            style={{ pointerEvents: "none" }}
            size="lg"
            disabled={nextDisable}
            color={colors.violet}
          >
            Next
          </BlurButton>
        </button>
      </Flex>
    </Flex>
  );
};

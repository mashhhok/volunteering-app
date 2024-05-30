"use client";
import { Link } from "@/shared/ui/Link";
import React from "react";
import { Flex, Title, Text, Box } from "@mantine/core";
import { BlurButton, ShadowBtn } from "@/shared/ui";
import { colors } from "@/shared/enums";
import { TopRightArrowSVG } from "@/shared/svg";
import { useDonationSlideStore } from "../store";

export const ErrorDonateBlock = () => {
  const { setBlock, clear } = useDonationSlideStore();
  function onTryAgainClick() {
    setBlock(0);
  }
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      h={"100%"}
      justify={"center"}
      align={"center"}
    >
      <Title order={2} mb={40} maw={484}>
        Oops... something went wrong and we not receive your donation 😔
      </Title>
      <Text size="xl" mb={40} maw={484}>
        Take care and remember that together we are a force that will defeat the
        darkness.
      </Text>
      <Flex gap={24}>
        <Box onClick={clear}>
          <ShadowBtn size="lg">Back to Homepage</ShadowBtn>
        </Box>
        <Box onClick={onTryAgainClick}>
          <BlurButton
            style={{ pointerEvents: "none" }}
            size="lg"
            rightSection={<TopRightArrowSVG fill={colors.white} />}
            color={colors.violet}
          >
            Try again
          </BlurButton>
        </Box>
      </Flex>
    </Flex>
  );
};

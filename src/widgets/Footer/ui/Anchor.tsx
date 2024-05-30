"use client";
import { colors } from "@/shared/enums";
import { TopArrowSVG } from "@/shared/svg/TopArrowSVG";
import { Box } from "@mantine/core";
import React from "react";

export const Anchor = () => {
  function onAnchorClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box
      py={20}
      px={40}
      style={{ borderRadius: 35 }}
      onClick={onAnchorClick}
      bg={colors.black}
    >
      <TopArrowSVG />
    </Box>
  );
};

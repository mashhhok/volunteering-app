import { Box, Button, Text } from "@mantine/core";
import React from "react";
import top_right_arrow from "@/public/arrow_top_right.svg";
import Image from "next/image";
import { ShadowBtn } from "@/shared/ui";
import { TopRightArrowSVG } from "@/shared/svg";
export const RightSection = () => {
  return (
    <Box>
      <Text size="xl" mb={16}>
        Convert your hatred into donations
      </Text>
      <ShadowBtn rightSection={<TopRightArrowSVG />} size="xl">
        Find fundraising
      </ShadowBtn>
    </Box>
  );
};

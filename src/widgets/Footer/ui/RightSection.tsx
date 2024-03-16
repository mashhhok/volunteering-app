import { Box, Button, Text } from "@mantine/core";
import React from "react";
import top_right_arrow from "@/public/arrow_top_right.svg";
import Image from "next/image";
import { ShadowBtn } from "@/shared/ui";

const TopRightArrow = () => (
  <Image src={top_right_arrow} width={undefined} height={undefined} alt={""} />
);

export const RightSection = () => {
  return (
    <Box>
      <Text size="xl" mb={16}>
        Convert your hatred into donations
      </Text>
      <ShadowBtn rightSection={<TopRightArrow />} size="xl">
        Donate
      </ShadowBtn>
    </Box>
  );
};

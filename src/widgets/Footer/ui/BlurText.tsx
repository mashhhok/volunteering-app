import { colors } from "@/shared/enums";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import footer_blur_text from "@/public/footer_blur_text.png";

const BlurImg = () => (
  <Image
    src={footer_blur_text}
    alt={""}
    width={undefined}
    height={undefined}
    style={{ width: "100%", backgroundSize: "cover", height: 'auto' }}
  />
);

export const BlurText = () => {
  return <BlurImg />;
};

import { colors } from "@/shared/enums";
import { BlurButton, ShadowBtn } from "@/shared/ui";
import { Button, Flex } from "@mantine/core";
import React from "react";
import Image from "next/image";
import out_box_icon from "@/public/out_box.svg";

const OutBoxImg = () => (
  <Image src={out_box_icon} width={undefined} height={undefined} alt="" />
);

export const InterBtns = () => {
  return (
    <Flex wrap="wrap" gap={20}>
      <ShadowBtn
        rightSection={<OutBoxImg />}
        size="lg"
        px={35}
      >
        Share
      </ShadowBtn>
      <ShadowBtn size="lg" px={35}>
        Site
      </ShadowBtn>
      <ShadowBtn size="lg" px={35}>
        Send a message
      </ShadowBtn>
    </Flex>
  );
};

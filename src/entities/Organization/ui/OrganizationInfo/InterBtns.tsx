import { colors } from "@/shared/enums";
import { BlurButton, ShadowBtn } from "@/shared/ui";
import { Button, Flex } from "@mantine/core";
import React from "react";
import Image from "next/image";
import out_box_icon from "@/public/out_box.svg";
import { TopRightArrowSVG } from "@/shared/svg";
import Link from "next/link";

const OutBoxImg = () => (
  <Image src={out_box_icon} width={undefined} height={undefined} alt="" />
);

export const InterBtns = ({ isMe }: { isMe: boolean }) => {
  return (
    <Flex wrap="wrap" gap={20}>
      <ShadowBtn rightSection={<OutBoxImg />} size="lg" px={35}>
        Share
      </ShadowBtn>
      <ShadowBtn size="lg" px={35}>
        Site
      </ShadowBtn>
      {isMe ? (
        <Link href='/verification'>
          <ShadowBtn size="lg" px={35} rightSection={<TopRightArrowSVG />}>
            Verify account
          </ShadowBtn>
        </Link>
      ) : (
        <ShadowBtn size="lg" px={35}>
          Send a message
        </ShadowBtn>
      )}
    </Flex>
  );
};

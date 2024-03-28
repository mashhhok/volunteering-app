import {  ShadowBtn } from "@/shared/ui";
import {  Flex } from "@mantine/core";
import React from "react";
import { OutBoxSVG, TopRightArrowSVG } from "@/shared/svg";
import Link from "next/link";

export const InterBtns = ({ isMe }: { isMe: boolean }) => {
  return (
    <Flex wrap="wrap" gap={20}>
      <ShadowBtn rightSection={<OutBoxSVG />} size="lg" px={35}>
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

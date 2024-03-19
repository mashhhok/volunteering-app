import { Box, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import auth_bg from "@/public/auth_bg/default.png";

export const BgImg = () => {
  return (
    <Flex
      pos={"absolute"}
      top={0}
      left={0}
      w={"100%"}
      h={'100%'}
      justify={"center"}
      align={"center"}
      style={{overflow: 'hidden'}}
    >
      <Image
        src={auth_bg}
        alt={""}
        style={{
          animationName: "rotating",
          animationDuration: "25s",
          animationIterationCount: "infinite",
          width: "1600px",
          height: "1180px",
        }}
      />
    </Flex>
  );
};

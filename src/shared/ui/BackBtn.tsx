import Image from "next/image";
import React from "react";
import arrow_left from "@/public/arrow_left.svg";
import { Flex, Text } from "@mantine/core";

const LeftArrow = () => (
  <Image src={arrow_left} width={18} height={17} alt="" />
);

export const BackBtn = () => {
  return (
    <Flex gap={11} align={'center'}>
      <LeftArrow />
      <Text>Back</Text>
    </Flex>
  );
};

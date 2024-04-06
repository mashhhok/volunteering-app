import { colors } from "@/shared/enums";
import { Box, Card, Center, Flex } from "@mantine/core";
import React from "react";
import { Goal } from "./Goal";
import { Collected } from "./Collected";
import { Remains } from "./Remains";

export const Graphic = () => {
  return (
    <Flex
      bg={colors.black}
      px={58}
      py={30}
      mih={432}
      gap={27}
      align={"center"}
      w={"100%"}
      style={{borderRadius: 20}}
      direction={{base: 'column', md: 'row'}}
    >
      <Goal />
      <Collected />
      <Remains />
    </Flex>
  );
};

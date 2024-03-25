import React from "react";
import { Flex, Text } from "@mantine/core";
import { LeftArrowSVG } from "../svg";


export const BackBtn = ({children}: {children: React.ReactNode}) => {
  return (
    <Flex gap={11} align={'center'} style={{cursor: 'pointer'}}>
      <LeftArrowSVG />
      <Text>{children}</Text>
    </Flex>
  );
};

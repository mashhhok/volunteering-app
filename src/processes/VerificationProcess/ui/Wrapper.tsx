import { LeftArrowSVG } from "@/shared/svg";
import { Box, Button, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { BackBtn } from "./BackBtn";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container size={"xl"}>
        <BackBtn />
      </Container>
      <Box h={24} />
      {children}
    </Box>
  );
};

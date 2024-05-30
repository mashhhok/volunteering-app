import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { Nav } from "./Nav";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size="xl">
      <Box h={44} />
      <Flex justify={"space-between"} wrap={"wrap"} gap={20}>
        <Nav />
        <Box maw={800} w={"100%"}>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default SettingsLayout;

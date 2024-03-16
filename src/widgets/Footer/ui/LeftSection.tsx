import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const LeftSection = () => {
  return (
    <Box>
      <Title order={4} mb={16}>
        Made with love from ukrainians
      </Title>
      <Text mb={{ base: 20, sm: 40 }}>Copyright 2024. All rights reserved</Text>
      <Flex gap={16}>
        <Text>Terms & Condition</Text>
        <Text>Privacy policy</Text>
      </Flex>
    </Box>
  );
};

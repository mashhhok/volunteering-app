import { colors } from "@/shared/enums";
import { Box, Checkbox, Flex, Text } from "@mantine/core";
import React from "react";

export const ShowSettings = () => {
  return (
    <Box>
      <Text fw={500} mb={24} color={colors.black}>Show in my public profile</Text>
        <Flex gap={20} justify={'space-between'} wrap={'wrap'}>
          <Flex direction={'column'} gap={8}>
            <Checkbox label="Profile photo" />
            <Checkbox label="Email" />
            <Checkbox label="Phone number" />
            <Checkbox label="Date registered" />
          </Flex>
          <Flex direction={'column'} gap={8}>
            <Checkbox label="Donors and volunteers" />
            <Checkbox label="Funds" />
            <Checkbox label="Years of work" />
          </Flex>
        </Flex>
      
    </Box>
  );
};

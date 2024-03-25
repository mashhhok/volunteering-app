import { BlurButton, Info, TextField } from "@/shared/ui";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { colors } from "@/shared/enums";

export const ChangePassword = () => {
  return (
    <Box>
      <Info title={"Please,"} subtitle={"Fill in the required fields."} />
      <Box h={24} />
      <SettingsWrapper>
        {/* <form action=""> */}
          <Text fw={500} mb={24}>
            Change password
          </Text>
          <Flex>
            <Box flex={{ base: "1 1 auto", xs: "0 1 50%" }}>
              <TextField
                mr={12}
                title={"Old password"}
                placeholder="Enter password"
                mb={24}
              />
            </Box>
          </Flex>
          <Flex gap={14} mb={64} wrap={{ base: "wrap", xs: "nowrap" }}>
            <Box flex="1 1 auto">
              <TextField title={"Old password"} placeholder="Enter password" />
            </Box>
            <Box flex="1 1 auto">
              <TextField title={"Old password"} placeholder="Enter password" />
            </Box>
          </Flex>
          <BlurButton color={colors.violet}>Save changes</BlurButton>
        {/* </form> */}
      </SettingsWrapper>
    </Box>
  );
};

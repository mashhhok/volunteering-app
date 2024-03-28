import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text } from "@mantine/core";
import React from "react";
import { ShowSettings } from "./ShowSettings";
import { LinearDivider } from "@/shared/ui";
import { CompletedInput } from "./CompletedInput";
import { Other } from "./Other";
import { RecieveEmails } from "./RecieveEmails";
import { DeleteAccount } from "./DeleteAccount";
import { SettingsWrapper } from "../../SettingsWrapper";

export const EditProfile = () => {
  return (
    <SettingsWrapper>
      <form action="">
        <Flex gap={40} direction={"column"}>
          <ShowSettings />
          <LinearDivider h={2} w={"100%"} color={colors.violet} />
          <Box>
            <Other />
            <Box h={24} />
            <RecieveEmails />
            <Box h={56} />
            <LinearDivider h={2} w={"100%"} color={colors.violet} />
          </Box>
          <DeleteAccount />

          <linearGradient />
        </Flex>
      </form>
    </SettingsWrapper>
  );
};

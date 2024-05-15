import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text } from "@mantine/core";
import React from "react";
import { ShowSettings } from "./ShowSettings";
import { BlurButton, LinearDivider } from "@/shared/ui";
import { CompletedInput } from "./CompletedInput";
import { Other } from "./Other";
import { RecieveEmails } from "./RecieveEmails";
import { DeleteAccount } from "./DeleteAccount";
import { SettingsWrapper } from "../../SettingsWrapper";
import { changeAccess } from "@/app/api/settings/profileSettings/changeAccess";

export const EditProfile = () => {
  async function action(formData: FormData) {
    "use server";
    changeAccess(formData);
  }

  return (
    <SettingsWrapper>
      <form action={action}>
        <Flex gap={40} direction={"column"}>
          <ShowSettings />
          <LinearDivider h={2} w={"100%"} color={colors.violet} />
          <Box>
            <Other />
            <Box h={24} />
            <RecieveEmails />
            <Box h={30} />
            <BlurButton color={colors.violet}>Save changes</BlurButton>
            <Box h={20} />
            <LinearDivider h={2} w={"100%"} color={colors.violet} />
          </Box>

          <linearGradient />
        </Flex>
      </form>
      <DeleteAccount />
    </SettingsWrapper>
  );
};

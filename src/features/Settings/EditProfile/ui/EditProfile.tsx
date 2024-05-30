import { colors } from "@/shared/enums";
import { Box, Card, Flex, Text } from "@mantine/core";
import React from "react";
import { ShowSettings } from "./ShowSettings";
import { BlurButton, LinearDivider } from "@/shared/ui";
import { Other } from "./Other";
import { RecieveEmails } from "./RecieveEmails";
import { DeleteAccount } from "./DeleteAccount";
import { SettingsWrapper } from "../../SettingsWrapper";
import { changeAccess } from "@/app/api/settings/profileSettings/changeAccess";
import { getProfile } from "@/app/api/profile/getProfile";
import { SaveBtn } from "./SaveBtn";

export const EditProfile = async () => {
  const profile = await getProfile();
  return (
    <SettingsWrapper>
      <form action={changeAccess}>
        <Flex gap={40} direction={"column"}>
          <ShowSettings profile={profile} />
          <LinearDivider h={2} w={"100%"} color={colors.violet} />
          <Box>
            <Other />
            <Box h={24} />
            <RecieveEmails />
            <Box h={30} />
            <SaveBtn/>
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

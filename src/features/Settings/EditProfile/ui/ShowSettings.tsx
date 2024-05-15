import { getProfile } from "@/app/api/profile/getProfile";
import { changeAccess } from "@/app/api/settings/profileSettings/changeAccess";
import { colors } from "@/shared/enums";
import { BlurButton } from "@/shared/ui";
import { Box, Checkbox, Flex, Text } from "@mantine/core";
import React from "react";

export const ShowSettings = async () => {
  const profile = await getProfile();

  return (
    <Box>
      <Text fw={500} mb={24}>
        Show in my public profile
      </Text>
      <Flex mb={20} gap={20} justify={"space-between"} wrap={"wrap"}>
        <Flex direction={"column"} gap={8}>
          <Checkbox
            label="Profile photo"
            defaultChecked={profile?.isShowProfilePhoto}
            name="profilePhoto"
          />
          <Checkbox label="Email" disabled />
          <Checkbox label="Phone number" disabled />
          <Checkbox label="Date registered" disabled />
        </Flex>
        <Flex direction={"column"} gap={8}>
          <Checkbox
            label="Request Count"
            defaultChecked={profile?.isShowRequestsCount}
            name="requestCount"
          />
          <Checkbox
            label="Funds"
            defaultChecked={profile?.isShowFundsCount}
            name="funds"
          />
          <Checkbox
            label="Years of work"
            defaultChecked={profile?.isShowYearsWork}
            name="yearsWork"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

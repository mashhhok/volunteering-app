'use client'
import { LangContext } from "@/app/[lang]/LangProvider";
import { Box, Checkbox, Flex, Text } from "@mantine/core";
import React, { useContext } from "react";

export const ShowSettings =({profile}: {profile: any}) => {
  const dict = useContext(LangContext)

  return (
    <Box>
      <Text fw={500} mb={24}>
        {dict.settings_process.show_settings.title}
      </Text>
      <Flex mb={20} gap={20} justify={"space-between"} wrap={"wrap"}>
        <Flex direction={"column"} gap={8}>
          <Checkbox
            label={dict.settings_process.show_settings.profile_photo}
            defaultChecked={profile?.isShowProfilePhoto}
            name="profilePhoto"
          />
          <Checkbox label={dict.settings_process.show_settings.email} disabled />
          <Checkbox label={dict.settings_process.show_settings.phone_number} disabled />
          <Checkbox label={dict.settings_process.show_settings.date_registered} disabled />
        </Flex>
        <Flex direction={"column"} gap={8}>
          <Checkbox
            label={dict.settings_process.show_settings.request_count}
            defaultChecked={profile?.isShowRequestsCount}
            name="requestCount"
          />
          <Checkbox
            label={dict.settings_process.show_settings.funds}
            defaultChecked={profile?.isShowFundsCount}
            name="funds"
          />
          <Checkbox
            label={dict.settings_process.show_settings.years}
            defaultChecked={profile?.isShowYearsWork}
            name="yearsWork"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

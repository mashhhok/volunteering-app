'use client'
import { LangContext } from "@/app/[lang]/LangProvider";
import { colors } from "@/shared/enums";
import { Box, Select, Text } from "@mantine/core";
import React, { useContext } from "react";

export const RecieveEmails = () => {
  const dict = useContext(LangContext)

  return (
    <Box>
      <Text fw={500}>{dict.settings_process.show_settings.recieve_emails_block.title}</Text>
      <Text fz="sm" color={colors.gray} mb={8}>
      {dict.settings_process.show_settings.recieve_emails_block.subtitle}
      </Text>
      <Select placeholder={dict.settings_process.show_settings.recieve_emails_block.placeholder} />
    </Box>
  );
};

'use client'
import { LangContext } from "@/app/[lang]/LangProvider";
import { colors } from "@/shared/enums";
import { Box, Checkbox, Flex, Text } from "@mantine/core";
import React, { useContext } from "react";

export const Other = () => {
  const dict = useContext(LangContext)

  return (
    <Box>
      <Text fw={500} mb={24} >
        {dict.settings_process.show_settings.other_block.title}
      </Text>
      <Flex direction={'column'} gap={8}>
        <Checkbox label={dict.settings_process.show_settings.other_block.f_label} />
        <Checkbox label={dict.settings_process.show_settings.other_block.l_label} />
      </Flex>
    </Box>
  );
};

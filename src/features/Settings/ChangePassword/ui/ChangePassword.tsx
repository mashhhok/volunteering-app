import { BlurButton, Info, TextField } from "@/shared/ui";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { colors } from "@/shared/enums";
import { IDictionary } from "@/shared/config/i18n.config";

export const ChangePassword = ({ dict }: { dict: IDictionary }) => {
  return (
    <Box>
      <Info title={"Please,"} subtitle={"Fill in the required fields."} />
      <Box h={24} />
      <SettingsWrapper>
        <Text fw={500} mb={24}>
          {dict.settings_process.change_password_page.title}
        </Text>
        <Flex>
          <Box flex={{ base: "1 1 auto", xs: "0 1 50%" }}>
            <TextField
              mr={12}
              title={
                dict.settings_process.change_password_page.old_password.title
              }
              placeholder={
                dict.settings_process.change_password_page.old_password
                  .placeholder
              }
              mb={24}
            />
          </Box>
        </Flex>
        <Flex gap={14} mb={64} wrap={{ base: "wrap", xs: "nowrap" }}>
          <Box flex="1 1 auto">
            <TextField
              title={
                dict.settings_process.change_password_page.old_password.title
              }
              placeholder={
                dict.settings_process.change_password_page.old_password
                  .placeholder
              }
            />
          </Box>
          <Box flex="1 1 auto">
            <TextField
              title={
                dict.settings_process.change_password_page.new_password.title
              }
              placeholder={
                dict.settings_process.change_password_page.new_password
                  .placeholder
              }
            />
          </Box>
        </Flex>
        <BlurButton color={colors.violet}>
          {dict.settings_process.change_password_page.save_btn}
        </BlurButton>
      </SettingsWrapper>
    </Box>
  );
};

"use client";

import { LangContext } from "@/app/[lang]/LangProvider";
import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React, { useContext } from "react";

export const ContactInputs = ({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) => {
  const dict = useContext(LangContext);

  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        {dict.settings_process.edit_details_page.contact_inputs.title}
      </Text>
      <Flex mb={16} gap={20}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title={
              dict.settings_process.edit_details_page.contact_inputs.email_field
                .title
            }
            defaultValue={email}
            placeholder={
              dict.settings_process.edit_details_page.contact_inputs.email_field
                .placeholder
            }
            name="email"
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title={
              dict.settings_process.edit_details_page.contact_inputs
                .extra_email_field.title
            }
            placeholder={
              dict.settings_process.edit_details_page.contact_inputs
                .extra_email_field.placeholder
            }
            noColors
            name="emailAgain"
          />
        </Box>
      </Flex>
      <Flex gap={20}>
        <Box flex="1 1 auto">
          <TextField
            title={
              dict.settings_process.edit_details_page.contact_inputs
                .phone_number.title
            }
            placeholder={
              dict.settings_process.edit_details_page.contact_inputs
                .phone_number.placeholder
            }
            noColors
            name="phone"
            defaultValue={phone}
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            title={
              dict.settings_process.edit_details_page.contact_inputs
                .extra_phone_number.title
            }
            placeholder={
              dict.settings_process.edit_details_page.contact_inputs
                .extra_phone_number.placeholder
            }
            noColors
            name="phoneAgain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

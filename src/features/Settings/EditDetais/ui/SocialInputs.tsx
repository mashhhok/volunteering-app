'use client'
import { LangContext } from "@/app/[lang]/LangProvider";
import { TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React, { useContext } from "react";

export const SocialInputs = ({
  instagram,
  facebook,
  google,
  telegram,
  whatsapp,
}: {
  instagram: string;
  facebook: string;
  google: string;
  telegram: string;
  whatsapp: string;
}) => {
  const dict = useContext(LangContext);

  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        {dict.settings_process.edit_details_page.social_inputs.title}
      </Text>
      <Flex mb={16} gap={20} direction={{ base: "column", sm: "row" }}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title={dict.settings_process.edit_details_page.social_inputs.instagram_field.title}
            placeholder={dict.settings_process.edit_details_page.social_inputs.instagram_field.placeholder}
            name="instagram"
            defaultValue={instagram}
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title={dict.settings_process.edit_details_page.social_inputs.facebook_field.title}
            placeholder={dict.settings_process.edit_details_page.social_inputs.facebook_field.placeholder}
            name="facebook"
            defaultValue={facebook}
          />
        </Box>
      </Flex>
      <Flex mb={16} gap={20} direction={{ base: "column", sm: "row" }}>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title={dict.settings_process.edit_details_page.social_inputs.google_field.title}
            placeholder={dict.settings_process.edit_details_page.social_inputs.google_field.placeholder}
            name="google"
            defaultValue={google}
          />
        </Box>
        <Box flex="1 1 auto">
          <TextField
            noColors
            title={dict.settings_process.edit_details_page.social_inputs.telegram_field.title}
            placeholder={dict.settings_process.edit_details_page.social_inputs.telegram_field.placeholder}
            name="telegram"
            defaultValue={telegram}
          />
        </Box>
      </Flex>
      <Box flex="1 1 auto">
        <TextField
          noColors
          title={dict.settings_process.edit_details_page.social_inputs.whatsapp_field.title}
          name="whatsapp"
          placeholder={dict.settings_process.edit_details_page.social_inputs.google_field.placeholder}
          defaultValue={whatsapp}
        />
      </Box>
    </Box>
  );
};

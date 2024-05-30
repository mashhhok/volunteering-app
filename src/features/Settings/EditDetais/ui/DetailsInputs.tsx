"use client";
import { LangContext } from "@/app/[lang]/LangProvider";
import { AreaField, TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React, { useContext } from "react";

export const DetailsInputs = ({
  firstName,
  lastName,
  description,
}: {
  firstName: string;
  lastName: string;
  description: string;
}) => {
  const dict = useContext(LangContext);

  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        {dict.settings_process.edit_details_page.detailsw_inputs.title}
      </Text>

      <Flex gap={20} mb={16}>
        <Box flex={"1 1 auto"}>
          <TextField
            title={
              dict.settings_process.edit_details_page.detailsw_inputs
                .first_name_field.title
            }
            placeholder={
              dict.settings_process.edit_details_page.detailsw_inputs
                .first_name_field.placeholder
            }
            radius={"md"}
            name="firstName"
            noColors
            defaultValue={firstName}
          />
        </Box>
        <Box flex={"1 1 auto"}>
          <TextField
            title={
              dict.settings_process.edit_details_page.detailsw_inputs.last_name
                .title
            }
            placeholder={
              dict.settings_process.edit_details_page.detailsw_inputs.last_name
                .placeholder
            }
            radius={"md"}
            name="lastName"
            noColors
            defaultValue={lastName}
          />
        </Box>
      </Flex>
      <AreaField
        defaultValue={description ? description : ""}
        title={
          dict.settings_process.edit_details_page.detailsw_inputs
            .description_field.title
        }
        maxLen={551}
        w={"100%"}
        styles={{ input: { height: 140 } }}
        name="description"
      />
    </Box>
  );
};

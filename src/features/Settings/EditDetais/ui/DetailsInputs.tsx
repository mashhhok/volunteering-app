import { AreaField, TextField } from "@/shared/ui";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export const DetailsInputs = ({
  firstName,
  lastName,
  description,
}: {
  firstName: string;
  lastName: string;
  description: string;
}) => {
  return (
    <Box>
      <Text fw={500} mb={15} ml={10}>
        My details
      </Text>

      <Flex gap={20} mb={16}>
        <Box flex={"1 1 auto"}>
          <TextField
            title={"First name"}
            placeholder="User`s name"
            radius={"md"}
            name="first_name"
            noColors
            defaultValue={firstName}
          />
        </Box>
        <Box flex={"1 1 auto"}>
          <TextField
            title={"Last name"}
            placeholder="User`s last name"
            radius={"md"}
            name="last_name"
            noColors
            defaultValue={lastName}
          />
        </Box>
      </Flex>
      <AreaField
        defaultValue={description}
        title={"About me"}
        maxLen={551}
        w={"100%"}
        styles={{ input: { height: 140 } }}
        name="about_me"
      />
    </Box>
  );
};

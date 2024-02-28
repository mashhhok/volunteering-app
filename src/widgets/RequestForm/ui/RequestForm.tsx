"use client";
import { Box, Button, Fieldset, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { CurrencyInput } from "./CurrencyInput";
import { TitleInput } from "./TitleInput";
import { DescriptionInput } from "./DescriptionInput";
import MediaInput from "./MediaInput";

const RequesForm = () => {
  return (
    <Box maw={700} w={"95%"}>
      <Flex justify={"center"}>
        <Title order={3}>Add New Request</Title>
      </Flex>
      <Fieldset
        legend={
          <Text size="md" fw={500}>
            Creating Request Form
          </Text>
        }
      >
        <Flex direction={"column"} gap={15}>
          <TitleInput />
          <DescriptionInput />
          <CurrencyInput />
          <MediaInput />
        </Flex>
        <Box h={15} />
        <Flex justify={"flex-end"}>
          <Button size="lg" variant="gradient" radius={"md"}>
            Submit
          </Button>
        </Flex>
      </Fieldset>
    </Box>
  );
};

export default RequesForm;

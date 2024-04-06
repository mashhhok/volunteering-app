"use client";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Tags } from "./Tags";
import { InfoTitle } from "./InfoTitle";
import { Published } from "./Published";
import { LocationSelect } from "./LocationSelect";
import { ProfileInfo } from "./ProfileInfo";

export const RequestInfo = () => {
  return (
    <Flex direction={"column"} flex='1 1 auto'>
      <InfoTitle />
      <Box h={20} />
      <Published />
      <Box h={20} />

      <Tags />
      <Box flex="1 1 auto" />
      <Box h="10px" />

      <Box maw={500} mb={25}>
        <LocationSelect />
      </Box>
      <ProfileInfo avatarUrl={""} names={"Veronika Herasymchuk"} />
    </Flex>
  );
};

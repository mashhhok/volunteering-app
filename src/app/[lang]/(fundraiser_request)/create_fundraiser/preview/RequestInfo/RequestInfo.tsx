"use client";
import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Tags } from "./Tags";
import { InfoTitle } from "./InfoTitle";
import { Published } from "./Published";
import { LocationSelect } from "./LocationSelect";
import { ProfileInfo } from "../../../components/ProfileInfo";
import { HiddenInput } from "@/shared/ui";
import { IDictionary } from "@/shared/config/i18n.config";
import { useCreateFundraiserStore } from "../../store";

export const RequestInfo = ({
  avatarUrl,
  names,
  isVerified,
  dict,
}: {
  avatarUrl: string;
  names: string;
  isVerified: boolean;
  dict: IDictionary;
}) => {
  const { currency, categories, amount, imagesUrls, localFiles } =
    useCreateFundraiserStore();

  return (
    <Flex direction={"column"} flex="1 1 auto">
      <InfoTitle />
      <Box h={20} />
      <Published />
      <Box h={20} />
      <HiddenInput name="currency" value={currency} />
      <HiddenInput name="tags" value={JSON.stringify(categories)} />
      <HiddenInput name="needMoney" value={amount} />
      <HiddenInput
        name="images_length"
        value={localFiles?.length ? localFiles?.length : 0}
      />

      <Tags />
      <Box flex="1 1 auto" />
      <Box h="10px" />

      <Box maw={500} mb={25}>
        <LocationSelect />
      </Box>
      <ProfileInfo
        dict={dict}
        avatarUrl={avatarUrl}
        names={names}
        isVerified={isVerified}
        profileId={""}
      />
    </Flex>
  );
};

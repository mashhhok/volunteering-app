"use client";
import { IRequestCard, RequestCard } from "@/entities/DonationRequest";
import { colors } from "@/shared/enums";
import { InfoSVG } from "@/shared/svg";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { useCreateFundraiserStore } from "../store";
export const CardPreview = ({
  companyName,
  verifiedAndTrusted,
}: {
  companyName: string;
  verifiedAndTrusted: boolean;
}) => {
  const { name: regTitle, categories,amount, description, location } = useCreateFundraiserStore(
    (store) => store
  );

  return (
    <Box w={"100%"}>
      <Flex gap={9} align={"center"} mb={12}>
        <InfoSVG width={19} height={19} fill={colors.blue} />
        <Text size="xs" color={colors.blue}>
          Your fundraiser mini card
        </Text>
      </Flex>
      <RequestCard
        companyName={companyName}
        requestTitle={regTitle}
        categories={categories}
        requestDescription={description}
        requestStatus={"pending"}
        verifiedAndTrusted={verifiedAndTrusted}
        needMoney={0}
        collectedMoney={0}
        small
        location={location ? location : ''} id={""}      />
    </Box>
  );
};

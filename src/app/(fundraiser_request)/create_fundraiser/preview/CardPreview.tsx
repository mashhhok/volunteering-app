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
  const { name: regTitle, categories } = useCreateFundraiserStore(
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
        requestDescription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas sint iure facere dolorem ratione dicta rem veniam, quaerat amet ipsam maxime praesentium! Distinctio explicabo nisi optio adipisci maxime rerum!"
        }
        requestStatus={"pending"}
        verifiedAndTrusted={verifiedAndTrusted}
        needMoney={1}
        collectedMoney={0}
        small
        location={"Kiiv Dnipro"}
      />
    </Box>
  );
};

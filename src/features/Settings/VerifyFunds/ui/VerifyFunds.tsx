import React from "react";
import { SettingsWrapper } from "../../SettingsWrapper";
import { Box, Flex, Text, Button } from "@mantine/core";
import { BlurButton, Info, LinearDivider } from "@/shared/ui";
import { Link } from "@/shared/ui/Link";
import { colors } from "@/shared/enums";
import { getSession } from "@/shared/auth";
import { redirect } from "next/navigation";
import { getAllRequestsByUserId } from "@/app/api/requests/getAllRequestsByUserId";
import { RequestCard } from "@/entities/DonationRequest";
import { VerifyCards } from "./VerifyCards";
import { IDictionary } from "@/shared/config/i18n.config";

export const VerifyFunds = async ({dict}: {dict: IDictionary}) => {
  const session = await getSession();
  if (!session) redirect("/auth/1");
  const requests = await getAllRequestsByUserId(session?.id, {
    status: "open",
  });
  return (
    <Box>
      <Info
        title={"Why we need your data and what about safety?"}
        subtitle={
          <Link
            style={{ color: colors.red, textDecoration: "underline" }}
            href=""
          >
            Check here
          </Link>
        }
      />
      <Box h={24} />
      <SettingsWrapper>
        <Flex
          direction={"column"}
          justify={"flex-start"}
          align={"flex-start"}
          gap={16}
          mb={40}
        >
          <Text mb={24} fw={500}>
            Provide your data
          </Text>
          <Text size="sm">
            If you want to verify the description and purpose of your
            fundraiser, send us scans/photos of appropriate documents. Obtaining
            a verification is recommended particularly for charitable
            fundraisers.
          </Text>
          <Text size="sm">
            After obtaining the ‘verified’ badge, editing description or title
            of the fundraiser will be impossible.
          </Text>
          <Text size="sm">
            Please send the documents after complete verification of your
            account.
          </Text>
        </Flex>
        <LinearDivider h={"2px"} w={"100%"} color={colors.violet} />
        <Box h={40} />
        {!requests.requestsData.length && (
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            gap={16}
          >
            <Text fw={500} size="sm">
              You have not fundraisers to verify!
            </Text>
            <BlurButton color={colors.violet} size="lg">
              Create fundraiser
            </BlurButton>
          </Flex>
        )}
        <VerifyCards requests={requests} dict={dict}/>
      </SettingsWrapper>
    </Box>
  );
};

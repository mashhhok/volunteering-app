import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { Logo } from "./Logo";
import { Description } from "./Description";
import { InterBtns } from "./InterBtns";
import { getUserById } from "@/entities/User/repository";
import { DonateInfo } from "./DonateInfo";
import { IsVerified } from "@/shared/components/IsVerified";
import { PencilSVG } from "@/shared/svg/PencilSVG";
import { colors } from "@/shared/enums";
import { getSession } from "@/shared/auth";
import Link from "next/link";
import { getProfile } from "@/app/api/profile/getProfile";

interface IOrganizationInfo {
  userId: number;
}

export const OrganizationInfo = async ({ userId }: IOrganizationInfo) => {
  const user = await getUserById(userId);
  const session = await getSession();
  const isMe = session?.id === user?.id;
  let allRequests = await fetch(
    `${process.env.URL}/api/requests/count?userId=${userId}`
  ).then(res => res.json())

  let allFunds = await fetch(
    `${process.env.URL}/api/requests/funds?userId=${userId}`
  ).then(res => res.json())

  let accCreatedAt = await getUserById(userId);
  const profile = await getProfile()

  let date = new Date();
  let createdAt = accCreatedAt?.createdAt
    ? new Date(accCreatedAt?.createdAt)
    : new Date();
  let workYear = date.getFullYear() - createdAt.getFullYear()




  return (
    <Box>
      <Flex gap={30} direction={"column"}>
        <Flex align="center" gap={20} wrap={"wrap"} justify={"space-between"}>
          <IsVerified isVerified={false} />

          <Link href="/settings/details">
            <Flex gap={8} align={"center"} display={isMe ? "flex" : "none"}>
              <PencilSVG />
              <Text color={colors.gray}>Edit profile</Text>
            </Flex>
          </Link>
        </Flex>

        <Logo
          avatarUrl={profile?.avatar}
          companyName={profile?.firstName}
        />
        <DonateInfo
          donors={allRequests}
          funds={allFunds}
          workYear={workYear}
        />
        <Description />
        <InterBtns isMe={isMe} />
      </Flex>
    </Box>
  );
};

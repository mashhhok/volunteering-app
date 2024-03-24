import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { Logo } from "./Logo";
import { Description } from "./Description";
import { InterBtns } from "./InterBtns";
import { getUserById } from "@/entities/User/repository";
import { VerifiedInfo } from "./VerifiedInfo";
import { DonateInfo } from "./DonateInfo";
import { IsVerified } from "@/shared/components/IsVerified";
import { PencilSVG } from "@/shared/svg/PencilSVG";
import { colors } from "@/shared/enums";
import { getSession } from "@/shared/auth";
import Link from "next/link";

interface IOrganizationInfo {
  userId: number;
}

export const OrganizationInfo = async ({ userId }: IOrganizationInfo) => {
  const user = await getUserById(userId);
  const session = await getSession();
  const isMe = session?.id === user?.id;
  const isUser = !!Boolean(user?.organization); // delete one ! on production

  return (
    <Box>
      <Flex gap={30} direction={"column"}>
        <Flex align="center" gap={20} wrap={"wrap"} justify={"space-between"}>
          <IsVerified isVerified={false} />

          <Link href="/edit_profile">
            <Flex gap={8} align={"center"} display={isMe ? "flex" : "none"}>
              <PencilSVG />
              <Text color={colors.gray}>Edit profile</Text>
            </Flex>
          </Link>
        </Flex>

        <Logo
          avatarUrl={user?.avatar}
          companyName={user?.organization?.companyName}
        />
        <DonateInfo
          donors={isUser ? "-" : 10123}
          funds={isUser ? "-" : 10000023}
          workYear={isUser ? "-" : 20}
        />
        <Description />
        <InterBtns isMe={isMe} />
      </Flex>
    </Box>
  );
};

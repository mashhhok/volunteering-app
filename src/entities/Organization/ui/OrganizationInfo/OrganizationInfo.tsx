import { Box, Flex } from "@mantine/core";
import React from "react";
import { Logo } from "./Logo";
import { Description } from "./Description";
import { InterBtns } from "./InterBtns";
import { getUserById } from "@/entities/User/repository";
import { VerifiedInfo } from "./VerifiedInfo";
import { DonateInfo } from "./DonateInfo";


interface IOrganizationInfo {
  userId: number;
}

export const OrganizationInfo = async ({ userId }: IOrganizationInfo) => {
  const user = await getUserById(userId);

  return (
    <Box maw={580} w={"100%"}>
      <Flex gap={30} direction={"column"}>
        <VerifiedInfo isVerified={false} />
        <Logo
          avatarUrl={user?.avatar}
          companyName={user?.organization?.companyName}
        />
        <DonateInfo donors={10123} funds={10000023} workYear={20} />
        <Description />
        <InterBtns />
      </Flex>
    </Box>
  );
};

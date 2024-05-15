import { Box, Flex, Text } from "@mantine/core";
import { Logo } from "./Logo";
import { Description } from "./Description";
import { InterBtns } from "./InterBtns/InterBtns";
import { getUserById } from "@/entities/User/repository";
import { DonateInfo } from "./DonateInfo";
import { IsVerified } from "@/shared/components/IsVerified";
import { PencilSVG } from "@/shared/svg/PencilSVG";
import { colors } from "@/shared/enums";
import { getSession } from "@/shared/auth";
import Link from "next/link";
import { getProfile } from "@/app/api/profile/getProfile";
import { getRequestsInfo } from "@/app/api/requests/info/getRequestsInfo";
import { isVerified } from "@/app/api/verification/isVerified";

interface IOrganizationInfo {
  userId: number;
}

export const OrganizationInfo = async ({ userId }: IOrganizationInfo) => {
  const session = await getSession();
  const isMe = session?.id === userId;
  const requestsInfo = await getRequestsInfo(userId);

  const profile = await getProfile(userId);
  const isUserVerified = await isVerified();

  return (
    <Box w={"100%"}>
      <Flex gap={30} direction={"column"}>
        <Flex align="center" gap={20} wrap={"wrap"} justify={"space-between"}>
          <IsVerified isVerified={isUserVerified} />

          <Link href="/settings/details">
            <Flex gap={8} align={"center"} display={isMe ? "flex" : "none"}>
              <PencilSVG />
              <Text color={colors.gray}>Edit profile</Text>
            </Flex>
          </Link>
        </Flex>

        <Logo
          avatarUrl={profile?.avatar}
          companyName={profile?.firstName + " " + profile?.lastName}
        />
        <DonateInfo
          donors={requestsInfo.requestsCount}
          funds={requestsInfo.fundsCount}
          workYear={requestsInfo.yearsWork}
        />
        <Description>{profile?.description}</Description>
        <InterBtns
          isMe={isMe}
          sites={{
            facebook: profile?.sites?.facebook,
            google: profile?.sites?.google,
            instagram: profile?.sites?.instagram,
            telegram: profile?.sites?.telegram,
            whatsapp: profile?.sites?.whatsapp,
          }}
        />
      </Flex>
    </Box>
  );
};

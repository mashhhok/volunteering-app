import { Box, Flex, Text } from "@mantine/core";
import { Logo } from "./Logo";
import { Description } from "./Description";
import { InterBtns } from "./InterBtns/InterBtns";
import { getUserById } from "@/entities/User/repository";
import { DonateInfo } from "./DonateInfo";
import { PencilSVG } from "@/shared/svg/PencilSVG";
import { colors } from "@/shared/enums";
import { getSession } from "@/shared/auth";
import { Link } from "@/shared/ui/Link";
import { getProfile } from "@/app/api/profile/getProfile";
import { getRequestsInfo } from "@/app/api/requests/info/getRequestsInfo";
import { isVerified } from "@/app/api/verification/isVerified";
import { IsVerified } from "@/shared/ui/IsVerified";
import { IDictionary } from "@/shared/config/i18n.config";

interface IOrganizationInfo {
  userId: number;
  dict: IDictionary
}

export const OrganizationInfo = async ({ userId, dict }: IOrganizationInfo) => {
  const session = await getSession();
  const isMe = session?.id === userId;
  const requestsInfo = await getRequestsInfo(userId);

  const profile = await getProfile(userId);
  const isUserVerified = await isVerified();

  return (
    <Box w={"100%"}>
      <Flex gap={30} direction={"column"}>
        <Flex align="center" gap={20} wrap={"wrap"} justify={"space-between"}>
          <IsVerified dict={dict} isVerified={isUserVerified} />

          <Link href="/settings/details">
            <Flex gap={8} align={"center"} display={isMe ? "flex" : "none"}>
              <PencilSVG />
              <Text color={colors.gray}>{dict.widgets.organization_info.edit_profile_btn}</Text>
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
          dict={dict}
        />
        <Description dict={dict} >{profile?.description}</Description>
        <InterBtns
          isMe={isMe}
          dict={dict}
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

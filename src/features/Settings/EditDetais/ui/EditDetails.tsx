import { colors } from "@/shared/enums";
import { BlurButton, Info, LinearDivider } from "@/shared/ui";
import { Avatar, Box, Card, Flex, Title } from "@mantine/core";
import React from "react";
import { DetailsInputs } from "./DetailsInputs";
import { ContactInputs } from "./ContactInputs";
import { SocialInputs } from "./SocialInputs";
import { SiteInput } from "./SiteInput";
import { SettingsWrapper } from "../../SettingsWrapper";
import { AvatarEl } from "./Avatar";
import { getProfile } from "@/app/api/profile/getProfile";
import { editDetailsAction } from "@/app/api/settings/editDetails/editDetailsAction";
import { IDictionary } from "@/shared/config/i18n.config";

export const EditDetails = async ({dict}: {dict: IDictionary}) => {
  const profile = await getProfile();
  return (
    <Box>
      <Info title={"Please,"} subtitle={"Fill in the required fields."} />
      <Box h={27} />

      <SettingsWrapper>
        <Flex direction={"column"} justify="center" align={"center"}>
          <AvatarEl src={profile?.avatar} />
          <Title
            order={2}
            mb={28}
            style={{
              textTransform: "uppercase",
              display: "inline-block",
              textAlign: "center",
            }}
            lh={1}
          >
            {profile?.firstName} {profile?.lastName}
          </Title>
        </Flex>
        <Box w={"100%"}>
          <LinearDivider h={2} w={"100%"} color={colors.violet} />
          <Box h={40} />
          <form action={editDetailsAction}>
            <DetailsInputs
              firstName={profile?.firstName}
              lastName={profile?.lastName}
              description={profile?.description}
            />
            <Box h={40} />
            <ContactInputs email={profile?.email} phone={profile?.phone} />
            <Box h={40} />
            <SocialInputs
              instagram={profile?.sites?.instagram}
              facebook={profile?.sites?.facebook}
              google={profile?.sites?.google}
              telegram={profile?.sites?.telegram}
              whatsapp={profile?.sites?.whatsapp}
            />
            <Box h={48} />
            <Box h={40} />
            <BlurButton color={colors.violet}>{dict.settings_process.edit_details_page.save_btn}</BlurButton>
          </form>
        </Box>
      </SettingsWrapper>
    </Box>
  );
};

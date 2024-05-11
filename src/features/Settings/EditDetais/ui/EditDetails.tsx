"use client";
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

export const EditDetails = () => {
  const [profile, setProfile] = React.useState<any>();
  React.useEffect(() => {
    (async () => {
      const profile = await fetch(`/api/profile`, {
        cache: "no-store",
      }).then((res) => res.json());
      setProfile(profile);
    })();
  }, []);
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
          <form action="">
            <DetailsInputs
              firstName={profile?.firstName}
              lastName={profile?.lastName}
              description={profile?.description}
            />
            <Box h={40} />
            <ContactInputs />
            <Box h={40} />
            <SocialInputs />
            <Box h={48} />
            <SiteInput />
            <Box h={40} />
            <BlurButton color={colors.violet}>Save changes</BlurButton>
          </form>
        </Box>
      </SettingsWrapper>
    </Box>
  );
};

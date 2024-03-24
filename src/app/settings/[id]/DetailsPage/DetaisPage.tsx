import { colors } from "@/shared/enums";
import { BlurButton, Info, LinearDivider } from "@/shared/ui";
import { Avatar, Box, Card, Flex, Title } from "@mantine/core";
import React from "react";
import user_img from "@/public/user_2.svg";
import { DetailsInputs } from "./DetailsInputs";
import { ContactInputs } from "./ContactInputs";
import { SocialInputs } from "./SocialInputs";
import { SiteInput } from "./SiteInput";
import { ContentWrapper } from "../ContentWrapper";

export const DetailsPage = () => {
  const avatarUrl = "";
  return (
    <Box>
      <Info title={"Please,"} subtitle={"Fill in the required fields."} />
      <Box h={27} />
      <Card
        p={0}
        radius={"lg"}
        style={{ border: `1px solid ${colors.lightGray}` }}
      >
        <ContentWrapper>
          <Flex direction={"column"} justify="center" align={"center"}>
            <Avatar
              src={avatarUrl ? avatarUrl : user_img.src}
              w={100}
              bg={colors.lightGray}
              h={100}
              radius="lg"
              size="md"
              p={16}
              style={{
                backgroundSize: "cover",
                flexShrink: 0,
                // borderTop: "3px dashed",
              }}
              mb={28}
              alt={"logo"}
            />
            <Title
              order={2}
              mb={28}
              style={{ textTransform: "uppercase", display: "inline-block", textAlign: 'center' }}
              lh={1}
            >
              Veronika Herasymchuk
            </Title>
          </Flex>
          <Box w={"100%"}>
            <LinearDivider h={2} w={"100%"} color={colors.violet} />
            <Box h={40} />
            <form action="">
              <DetailsInputs />
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
        </ContentWrapper>
      </Card>
    </Box>
  );
};

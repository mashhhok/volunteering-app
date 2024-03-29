import { OrganizationInfo } from "@/entities/Organization";
import { UserInfoColumn } from "@/entities/User";
import { getUserById } from "@/entities/User/repository";
import { colors } from "@/shared/enums";
import { BackBtn } from "@/shared/ui";
import { LinearDivider } from "@/shared/ui/LinearDivider";
import { CardsFilters } from "@/widgets/CardsFilters";
import { ScrollCards } from "@/widgets/ScrollCards";
import { Box, Container, Flex } from "@mantine/core";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const ProfilePage = async ({ params }: IProps) => {

  
  return (
    <Container size={"xl"}>
      <BackBtn>Back</BackBtn>
      <Box h={24} />
      <Flex
        align={"flex-start"}
        direction={{ base: "column", lg: "row" }}
        justify={"center"}
        gap={{ base: 20, lg: 0 }}
      >
        <Flex gap={60}>
          <OrganizationInfo userId={parseInt(params.id)} />
          <LinearDivider h={"auto"} w={2} color={colors.violet} deg={180} />
        </Flex>
        <Box flex="1 0 auto" w='100%' maw={640}>
          <ScrollCards  />
        </Box>
      </Flex>
      <Box h={100} />
      <CardsFilters companyId={null} />
    </Container>
  );
};

export default ProfilePage;

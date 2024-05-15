import { getProfile } from "@/app/api/profile/getProfile";
import { OrganizationInfo } from "@/entities/Organization";
import { colors } from "@/shared/enums";
import { BackBtn } from "@/shared/ui";
import { LinearDivider } from "@/shared/ui/LinearDivider";
import { CardsFilters } from "@/widgets/CardsFilters";
import { ScrollCards } from "@/widgets/ScrollCards";
import { Box, Container, Flex } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const ProfilePage = async ({ params }: IProps) => {
  const id = parseInt(params.id);
  let isError = false;
  if (Number.isNaN(id)) isError = true;
  if (isError) redirect("/not-found");
  const user = await getProfile(id);
  if(!user) redirect("/not-found");

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
        <Flex gap={60} flex="0 1 50%">
          <OrganizationInfo userId={id} />
          <LinearDivider h={"auto"} w={2} color={colors.violet} deg={180} />
        </Flex>
        <Box flex="1 0 auto" w="100%" maw={{ base: "100%", lg: 640 }}>
          <ScrollCards userId={id} />
        </Box>
      </Flex>
      <Box h={100} />
      <CardsFilters companyId={id} />
    </Container>
  );
};

export default ProfilePage;

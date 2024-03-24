import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import { Nav } from "./Nav";
import { DetailsPage } from "./DetailsPage/DetaisPage";
import { ProfilePage } from "./ProfilePage/ProfilePage";
import { ContentWrapper } from "./ContentWrapper";

const SettingsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Container size="xl">
      <Box h={44} />
      <Flex justify={"space-between"} wrap={"wrap"}>
        <Nav />
        <Box maw={800} w={"100%"}>
          {params.id === "details" && <DetailsPage />}
          {params.id === "profile" && <ProfilePage />}
        </Box>
      </Flex>
    </Container>
  );
};

export default SettingsPage;

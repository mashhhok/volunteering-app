import { Box, Flex } from "@mantine/core";
import React from "react";
import { Header } from "./Header";
import { Published } from "./Published";
import { Location } from "./Location";
import { Tags } from "./Tags";
import { ProfileInfo } from "../../components/ProfileInfo";

export const RequestInfo = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <Header />
      <Published />
      <Location />
      <Tags tags={["🔥 Emergency", "🪖 Military", "🚗 Military cars"]} />
      <Box flex="1 1 auto" />
      <ProfileInfo avatarUrl={""} names={"Veronika Herasymchuk"} />
    </Flex>
  );
};

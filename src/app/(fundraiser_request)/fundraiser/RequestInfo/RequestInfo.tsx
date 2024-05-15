import { Box, Flex } from "@mantine/core";
import React from "react";
import { Header } from "./Header";
import { Published } from "./Published";
import { Location } from "./Location";
import { Tags } from "./Tags";
import { ProfileInfo } from "../../components/ProfileInfo";

export const RequestInfo = ({
  tags,
  names,
  isVerified,
  avatar,
  title,
  status,
  date
}: {
  tags: string[];
  names: string;
  isVerified: boolean;
  avatar: string;
  title: string;
  status: string
  date: number
}) => {
  return (
    <Flex direction={"column"} gap={20}>
      <Header title={title} />
      <Published status={status} date={date}  />
      <Location />
      <Tags tags={tags} />
      <Box flex="1 1 auto" />
      <ProfileInfo avatarUrl={avatar} names={names} isVerified={isVerified} />
    </Flex>
  );
};

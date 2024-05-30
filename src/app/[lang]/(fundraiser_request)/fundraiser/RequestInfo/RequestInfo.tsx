import { Box, Flex } from "@mantine/core";
import React from "react";
import { Header } from "./Header";
import { Published } from "./Published";
import { Location } from "./Location";
import { Tags } from "./Tags";
import { ProfileInfo } from "../../components/ProfileInfo";
import { IDictionary } from "@/shared/config/i18n.config";

export const RequestInfo = ({
  tags,
  names,
  isVerified,
  avatar,
  title,
  status,
  date,
  location,
  profileId,
  dict
}: {
  tags: string[];
  names: string;
  isVerified: boolean;
  avatar: string;
  title: string;
  status: string;
  date: number;
  location: string;
  profileId: string | number;
  dict: IDictionary
}) => {
  return (
    <Flex direction={"column"} gap={20}>
      <Header title={title} />
      <Published status={status} date={date} />
      <Location>{location}</Location>
      <Tags tags={tags} />
      <Box flex="1 1 auto" />
      <ProfileInfo profileId={profileId} avatarUrl={avatar} names={names} isVerified={isVerified} dict={dict} />
    </Flex>
  );
};

import { Avatar, Flex, Text, Title } from "@mantine/core";
import React from "react";

interface IRequestInfo {
  companyName: string;
  date: string;
  avatarUrl: string
}

export const RequestInfo = ({ companyName, date, avatarUrl }: IRequestInfo) => {
  return (
    <>
      <Avatar src={avatarUrl} size={"lg"} />
      <Flex
        direction={"column"}
        gap={2}
        style={{ whiteSpace: "nowrap" }}
        align={"center"}
      >
        <Title order={4}>{companyName}</Title>
        <Text fw={500} fz="md">
          {date}
        </Text>
      </Flex>
    </>
  );
};

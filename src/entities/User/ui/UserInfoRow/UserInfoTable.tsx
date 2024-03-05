import { Avatar, Box, Flex, Menu, MenuTarget, Title } from "@mantine/core";
import React from "react";
import { firstLetsOfNames } from "../../lib/utils/firstLetsOfNames";

interface IUserInfoTable {
  firstName: string;
  lastName: string;
  avatar: string | null | undefined;
}

export const UserInfoTable = ({
  firstName,
  lastName,
  avatar,
}: IUserInfoTable) => {
  return (
    <Flex
      gap={5}
      align={"center"}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <Avatar radius={"md"} bg={"teal"} color="inherit" src={avatar}>
        {firstLetsOfNames(firstName, lastName)}
      </Avatar>
      <Title order={5} style={{ whiteSpace: "nowrap" }} visibleFrom="xs">
        {firstName} {lastName}
      </Title>
    </Flex>
  );
};

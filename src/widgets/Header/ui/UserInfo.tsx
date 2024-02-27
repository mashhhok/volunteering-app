import { Avatar, Box, Flex, Menu, MenuTarget, Title } from "@mantine/core";
import React from "react";

export const UserInfo = () => {
  return (
    <Flex
      gap={5}
      align={"center"}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <Avatar radius={"md"} bg={"teal"} color="inherit">
        MK
      </Avatar>
      <Title order={5} style={{ whiteSpace: "nowrap" }} visibleFrom="xs">
        First Name
      </Title>
    </Flex>
  );
};

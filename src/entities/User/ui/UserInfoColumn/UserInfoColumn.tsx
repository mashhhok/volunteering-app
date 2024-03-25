import { Box, Divider, Flex, Title } from "@mantine/core";
import React from "react";
import { AvatarImage } from "./AvatarImage";

interface IUserInfoColumn {
  avatarUrl: string | null | undefined;
  name: string;
}

export const UserInfoColumn: React.FC<IUserInfoColumn> = ({
  avatarUrl,
  name,
}) => {
  return (
    <Flex
      display={"inline-flex"}
      direction={"column"}
      align={"center"}
      gap={10}
    >
      <AvatarImage imageUrl={avatarUrl} companyName={name} />
      <Title
        order={1}
        style={{ textAlign: "center", textTransform: "capitalize" }}
        display={"inline-block"}
      >
        {name}
      </Title>
      <Divider
        orientation="horizontal"
        size={5}
        w={"100%"}
        maw={200}
        color="teal"
      />
    </Flex>
  );
};

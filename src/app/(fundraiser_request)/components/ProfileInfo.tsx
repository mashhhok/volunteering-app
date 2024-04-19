import { IsVerified } from "@/shared/components/IsVerified";
import { User2SVG } from "@/shared/svg/User2SVG";
import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const ProfileInfo = ({
  avatarUrl,
  names,
}: {
  avatarUrl: string;
  names: string;
}) => {
  return (
    <Flex justify={"space-between"} align={"center"} maw={500}>
      <Flex gap={12} align={"center"}>
        <Avatar size={"md"} radius={"lg"} src={avatarUrl}>
          <User2SVG width={22} height={22} />
        </Avatar>
        <Text fw={500} size="sm" style={{ textTransform: "uppercase" }}>
          {names}
        </Text>
      </Flex>
      <IsVerified isVerified={true} short />
    </Flex>
  );
};

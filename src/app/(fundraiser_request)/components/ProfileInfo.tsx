import { User2SVG } from "@/shared/svg/User2SVG";
import { IsVerified } from "@/shared/ui/IsVerified";
import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

export const ProfileInfo = ({
  avatarUrl,
  names,
  isVerified,
}: {
  avatarUrl: string;
  names: string;
  isVerified: boolean;
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
      <IsVerified isVerified={isVerified} short />
    </Flex>
  );
};

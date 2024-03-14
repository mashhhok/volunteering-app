import { getUserById } from "@/entities/User/repository";
import { Avatar, Box, Flex, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface ILogo {
  avatarUrl: string | null | undefined;
  companyName: string | undefined;
}

export const Logo = ({ avatarUrl, companyName }: ILogo) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      gap={20}
      // style={{ borderBottom: "3px dashed" }}
    >
      <Avatar
        src={avatarUrl ? avatarUrl : ""}
        w={100}
        h={100}
        style={{
          backgroundSize: "cover",
          flexShrink: 0,
          // borderTop: "3px dashed",
        }}
        alt={"logo"}
        radius={"xs"}
      />
      <Title order={2} style={{ textTransform: "uppercase", wordBreak: 'break-all' }}>
        {companyName}asd asds adda
      </Title>
    </Flex>
  );
};

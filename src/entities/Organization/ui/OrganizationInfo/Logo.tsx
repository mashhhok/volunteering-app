import { getUserById } from "@/entities/User/repository";
import { Avatar, Box, Flex, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import user_img from "@/public/user_2.svg";
import { colors } from "@/shared/enums";

interface ILogo {
  avatarUrl: string | null | undefined;
  companyName: string | undefined;
}

export const Logo = ({ avatarUrl, companyName }: ILogo) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      wrap={"wrap"}
      gap={20}
      // style={{ borderBottom: "3px dashed" }}
    >
      <Avatar
        src={avatarUrl ? avatarUrl : user_img.src}
        w={100}
        bg={colors.lightGray}
        h={100}
        radius="lg"
        size="md"
        p={16}
        style={{
          backgroundSize: "cover",
          flexShrink: 0,
          // borderTop: "3px dashed",
        }}
        styles={{
          image: {
            borderRadius: 10,
          },
        }}
        alt={"logo"}
      />
      <Title
        order={2}
        style={{ textTransform: "uppercase", wordBreak: "break-all" }}
      >
        {companyName}
      </Title>
    </Flex>
  );
};

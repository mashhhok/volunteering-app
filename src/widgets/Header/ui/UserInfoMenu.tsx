"use client";
import { Avatar, Divider, Flex, Menu, Text } from "@mantine/core";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { routes } from "@/shared/config/routes";

interface IUserInfoMenu {
  userInfo: JSX.Element;
}

export const UserInfoMenu: React.FC<IUserInfoMenu> = ({ userInfo }) => {
  return (
    <Menu shadow="xl" width={200} radius="md">
      <Menu.Target>{userInfo}</Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          <Flex gap={5} align={"center"}>
            <Avatar radius={"sm"} bg={"teal"} color="inherit" size="sm">
              MK
            </Avatar>{" "}
            <Text fz={"md"} fw={500}>
              First Name
            </Text>
          </Flex>
        </Menu.Label>
        <Divider mb={3} />
        <Menu.Item fz={"lg"} fw={500} leftSection={<CgProfile />}>
          <Link href={routes.profile}>Profile</Link>
        </Menu.Item>
        <Menu.Item fz={"lg"} fw={500} leftSection={<IoMdSettings />}>
          <Link href='/settings'>Settings</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

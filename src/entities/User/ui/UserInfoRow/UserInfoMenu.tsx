"use client";
import { Avatar, Divider, Flex, Menu, Text } from "@mantine/core";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { routes } from "@/shared/config/routes";
import { firstLetsOfNames } from "../../lib/utils/firstLetsOfNames";
import { MdLogout } from "react-icons/md";

interface IUserInfoMenu {
  userInfo: JSX.Element;
  firstName: string;
  lastName: string;
  avatar: string | null | undefined;
  logOutFn: () => any;
}

export const UserInfoMenu: React.FC<IUserInfoMenu> = ({
  userInfo,
  firstName,
  lastName,
  avatar,
  logOutFn,
}) => {
  const [logOutCount, setLogoutCount] = React.useState<number>(0);
  React.useEffect(() => {
    if (logOutCount < 1) return;
    logOutFn();
  }, [logOutCount]);

  return (
    <Menu shadow="xl" width={200} radius="md">
      <Menu.Target>{userInfo}</Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          <Flex gap={5} align={"center"}>
            <Avatar
              src={avatar}
              radius={"sm"}
              bg={"teal"}
              color="inherit"
              size="sm"
            >
              {firstLetsOfNames(firstName, lastName)}
            </Avatar>{" "}
            <Text fz={"md"} fw={500}>
              {firstName} {lastName}
            </Text>
          </Flex>
        </Menu.Label>
        <Divider mb={3} />
        <Menu.Item fz={"lg"} fw={500} leftSection={<CgProfile />}>
          <Link href={routes.profile}>Profile</Link>
        </Menu.Item>
        <Menu.Item fz={"lg"} fw={500} leftSection={<IoMdSettings />}>
          <Link href="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item
          fz={"lg"}
          fw={500}
          leftSection={<MdLogout />}
          onClick={() => setLogoutCount((prev) => prev + 1)}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

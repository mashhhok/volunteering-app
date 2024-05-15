"use client";
import { Avatar, Divider, Flex, Menu, Text, Title } from "@mantine/core";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { routes } from "@/shared/config/routes";
import { firstLetsOfNames } from "../../lib/utils/firstLetsOfNames";
import { MdLogout } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { redirect } from "next/navigation";

interface IUserInfoMenu {
  userInfo: JSX.Element;
  firstName: string;
  lastName: string;
  avatar: string | null | undefined;
  logOutFn: () => any;
  profilLink: string;
}

export const UserInfoMenu: React.FC<IUserInfoMenu> = ({
  userInfo,
  firstName,
  lastName,
  avatar,
  logOutFn,
  profilLink,
}) => {
  const [logOutCount, setLogoutCount] = React.useState<number>(0);
  React.useEffect(() => {
    if (logOutCount < 1) return;
    logOutFn();
  }, [logOutCount, logOutFn]);

  return (
    <Menu shadow="xl" width={200} radius="md">
      <Menu.Target>{userInfo}</Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <Flex gap={5} align={"center"}>
            <Avatar
              src={avatar}
              radius={"sm"}
              bg={"teal"}
              color="inherit"
              size="sm"
            >
              <Title size="13px" fw={500}>
                {firstLetsOfNames(firstName, lastName)}
              </Title>
            </Avatar>{" "}
            <Text
              fz={"lg"}
              fw={500}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "46%",
              }}
            >
              {firstName} {lastName}
            </Text>
          </Flex>
        </Menu.Item>
        <Divider mb={3} />
        <Menu.Item fz={"lg"} fw={500} leftSection={<CgProfile />}>
          <Link href={profilLink}>Profile</Link>
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
        <Menu.Item fz={"lg"} fw={500} leftSection={<IoMdCreate />}>
          <Link href={"/create_fundraiser"}>Create Fund</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

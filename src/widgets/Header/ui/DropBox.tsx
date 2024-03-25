"use client";
import { Box, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Info } from "./Info";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSelect } from "./LanguageSelect";

export const DropBox = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <IoMdMenu
        style={{ width: 35, height: 45, cursor: "pointer" }}
        onClick={toggle}
      />
      <Drawer opened={opened} onClose={close} position="left">
        <Flex gap={20} direction={"column"}>
          <Info />
          <ThemeSwitcher />
          <LanguageSelect/>
        </Flex>
      </Drawer>
    </>
  );
};

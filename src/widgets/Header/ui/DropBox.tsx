"use client";
import { Box, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Info } from "./Info";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSelect } from "./LanguageSelect";
import { IDictionary } from "@/shared/config/i18n.config";

export const DropBox = ({dict}: {dict: IDictionary}) => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <IoMdMenu
        style={{ width: 35, height: 45, cursor: "pointer" }}
        onClick={toggle}
      />
      <Drawer opened={opened} onClose={close} position="left">
        <Flex gap={20} direction={"column"} onClick={close}>
          <Info dict={dict} />
          <ThemeSwitcher />
          <LanguageSelect dict={dict} />
        </Flex>
      </Drawer>
    </>
  );
};

"use client";
import { Box, Divider, Flex, Menu, TextInput } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";

export const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = React.useState(false);

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function onClearClick() {
    setSearchValue("");
    searchRef.current?.focus();
  }

  function filterItemClick() {
    searchRef.current?.focus();
  }

  function onSearchFocus() {
    setIsFocus(true);
  }
  function onSearchBlur() {
    setIsFocus(false);
  }
  return (
    <Box>
      <TextInput
        radius={"sm"}
        leftSection={<IoSearch />}
        leftSectionPointerEvents="none"
        onFocus={onSearchFocus}
        placeholder="Search..."
        onBlur={onSearchBlur}
        ref={searchRef}
        w={{ base: "100%", xs: isFocus ? "300px" : "270px" }}
        style={{ transition: ".3s" }}
        value={searchValue}
        onChange={onSearchChange}
        rightSection={
          <Flex w={70} h={"80%"} align={"center"}>
            <Menu radius={"md"} position="bottom-end">
              <Menu.Target>
                <Flex>
                  <VscSettings size={20} style={{ cursor: "pointer" }} />
                </Flex>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Select one of</Menu.Label>
                <Divider mb={3} />
                <Menu.Item
                  onClick={filterItemClick}
                  leftSection={<IoMdDoneAll />}
                >
                  All
                </Menu.Item>
                <Menu.Item
                  onClick={filterItemClick}
                  leftSection={<IoLogoClosedCaptioning />}
                >
                  By Company Name
                </Menu.Item>
                <Menu.Item
                  onClick={filterItemClick}
                  leftSection={<FaCodePullRequest />}
                >
                  By Request Name
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Divider orientation="vertical" size={2} mx={3} />
            <MdOutlineClear
              size={20}
              onClick={onClearClick}
              style={{ cursor: "pointer" }}
            />
            <Box w={20} />
          </Flex>
        }
      />
    </Box>
  );
};

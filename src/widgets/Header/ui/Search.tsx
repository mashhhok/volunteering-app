"use client";
import { colors } from "@/shared/enums";
import { Box, Divider, Flex, Menu, TextInput } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

export const Search = () => {
  const [isFirstClick, setIsFirstClick] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { hovered, ref } = useHover<HTMLDivElement>();

  function onSearchClick() {
    setIsFirstClick(true);
    inputRef.current?.focus();
  }

  return (
    <Box maw={200} w={'100%'}>
      {/* <IoSearch  /> */}
      {/* <MdOutlineClear/> */}
      <TextInput
        leftSection={
          <Flex ref={ref} justify={'center'} align={'center'}>
            <IoSearch
              style={{
                transform: isFirstClick ? "scale(1)" : "scale(1.7)",
                cursor: "pointer",
                transition: "0.3s",
              }}
              color={hovered ? colors.violet : ""}
              onClick={onSearchClick}
            />
          </Flex>
        }
        ref={inputRef}
        leftSectionPointerEvents={isFirstClick ? "none" : "all"}
        w={isFirstClick ? "100%" : 0}
        radius={"md"}
        placeholder="Search..."
        styles={{
          root: {
            transition: ".5s",
          },
          input: {
            backgroundColor: "transparent",
            border: isFirstClick
              ? "calc(0.0625rem* var(--mantine-scale)) solid var(--input-bd)"
              : "0px solid var(--input-bd)",
            pointerEvents: isFirstClick ? "all" : "none",
          },
        }}
      />
    </Box>
  );
};

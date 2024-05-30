"use client";
import { colors } from "@/shared/enums";
import {
  Box,
  Divider,
  Flex,
  Menu,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IDictionary } from "../config/i18n.config";

export const SearchInput = (
  props: TextInputProps & { value?: string; setValue?: (val: string) => void, dict: IDictionary }
) => {
  const { hovered, ref } = useHover<HTMLInputElement>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [clicked, setClicked] = React.useState(false);
  const [value, setValue] = React.useState(props.value ? props.value : '');

  React.useEffect(() => {
    if (props.setValue) props.setValue(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <TextInput
      {...props}
      leftSection={
        clicked ? null : (
          <Flex justify={"center"} align={"center"}>
            <IoSearch
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
              color={hovered ? colors.violet : ""}
            />
          </Flex>
        )
      }
      value={value}
      onChange={onChange}
      wrapperProps={{ ref: ref }}
      onFocus={() => setClicked(true)}
      // onBlur={() => setClicked(false)}
      ref={inputRef}
      radius={"md"}
      placeholder={clicked ? "" : props.dict.find_fundraising_page.search.search_field.placeholder}
      rightSection={
        clicked ? (
          <IoMdClose
            onClick={() => {
              setValue("");
              setClicked(false);
            }}
          />
        ) : null
      }
      styles={{
        root: {
          transition: ".5s",
        },
        input: {
          backgroundColor: "transparent",
          borderColor: hovered ? colors.violet : "",
        },
      }}
    />
  );
};

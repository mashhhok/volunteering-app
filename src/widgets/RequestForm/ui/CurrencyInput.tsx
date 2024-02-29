"use client";
import { Flex, Menu, NumberInput } from "@mantine/core";
import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

import { FaHryvniaSign } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

export const CurrencyInput = () => {
  const input_icon_size = 24;
  const [currency, setCurrency] = React.useState(1);
  function SelectedCurrencyIcon() {
    switch (currency) {
      case 1:
        return <FaDollarSign size={input_icon_size} />;
      case 2:
        return <FaEuroSign size={input_icon_size} />;
      case 3:
        return <FaHryvniaSign size={input_icon_size} />;
    }
  }

  return (
    <NumberInput
      size="md"
      label="Required amount of money"
      placeholder="Field..."
      withAsterisk
      allowNegative={false}
      leftSection={
        <Menu>
          <Menu.Target>
            <Flex align={"center"}>
              <SelectedCurrencyIcon />
              <IoMdArrowRoundDown style={{ marginLeft: "-3px" }} />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Select currency</Menu.Label>

            <Menu.Item onClick={() => setCurrency(1)}>Dollar</Menu.Item>
            <Menu.Item onClick={() => setCurrency(2)}>Euro</Menu.Item>
            <Menu.Item onClick={() => setCurrency(3)}>Hryvnia</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      }
    />
  );
};

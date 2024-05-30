"use client";
import React from "react";
import { Box, Flex, NumberInput, Select, ScrollArea } from "@mantine/core";
import { BlockNavigateBtns } from "./BlockNavigateBtns";
import { Chip, HiddenInput } from "@/shared/ui";
import { useDonationSlideStore } from "../store";

export const SelectAmountBlock = () => {
  const chipValues = [10, 50, 100, 200];
  const [activeCurrency, setActiveCurrency] = React.useState(-1);
  const { amount, setAmount, currency, setCurrency } = useDonationSlideStore();
  const curr =
    (currency === "$" && "usd") ||
    (currency === "₴" && "uah") ||
    (currency === "€" && "eur");

  

  return (
    <Box>
      <Flex mb={50} direction={"column"} align={"center"}>
        <Select
          label="Select currency for fundraising"
          data={["$", "₴", "€"]}
          mb={20}
          size="lg"
          value={currency}
          onChange={(val) => setCurrency(val)}
        />
        <NumberInput
          styles={{
            input: {
              border: "2px solid",
              maxWidth: 360,
              width: "100%",
              height: 170,
              fontSize: 64,
              textAlign: "center",
            },
          }}
          allowNegative={false}
          maxLength={8}
          thousandSeparator={" "}
          minLength={10}
          value={amount}
          radius={20}
          onChange={(val) => {
            if (typeof val === "number") {
              setAmount(val);
              setActiveCurrency(-1);
            }
          }}
          suffix={currency ? currency : ""}
          mb={40}
          hideControls
          name="amount"
        />
        <HiddenInput name="currency" value={curr || ""} />
        <ScrollArea maw={700}>
          <Flex gap={22}>
            {chipValues.map((item, index) => (
              <Box
                onClick={() => {
                  setAmount(item);
                  setActiveCurrency(index);
                }}
                key={item}
              >
                <Chip size="xl" selected={activeCurrency === index}>
                  {item} {currency}
                </Chip>
              </Box>
            ))}
          </Flex>
        </ScrollArea>
      </Flex>
      <BlockNavigateBtns nextDisable={!(amount && currency)} />
    </Box>
  );
};

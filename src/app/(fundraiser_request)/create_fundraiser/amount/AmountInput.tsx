"use client";
import { NumberInput } from "@mantine/core";
import React from "react";
import { useCreateFundraiserStore } from "../store";

export const AmountInput = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { setAmount, amount } = useCreateFundraiserStore((store) => store);

  function onChange() {
    if (typeof ref.current?.value === 'string') {
      setAmount(ref.current.value);
    }
  }

  return (
    <NumberInput
      placeholder="Amount"
      thousandSeparator=" "
      ref={ref}
      defaultValue={amount}
      onChange={onChange}
    />
  );
};

import { Select } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { useCreateFundraiserStore } from "../store";

const currencyType = [{label: "USD$", value: 'usd'}, {label: "EUR€", value: 'eur'}, {label: "UAH₴", value: 'uah'}];
export const CurrencyInput = () => {
  const { currency, setCurrency } = useCreateFundraiserStore((store) => store);

  function onChange(value: string | null) {
    if (value) {
      setCurrency(value);
    }
  }

  return (
    <Select
      data={currencyType}
      placeholder="Select currency"
      value={currency}
      
      defaultValue={currencyType[2].value}
      allowDeselect={false}
      onChange={(value, option) => onChange(value)}
    />
  );
};

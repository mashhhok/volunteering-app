"use client";
import { MultiselectField } from "@/shared/ui/MultiselectField";
import React from "react";
import { useCreateFundraiserStore } from "../store";

const data = [
  "🔥 Emergency",
  "🚗 Military cars",
  "🥾 Equipment",
  "🪖 Military",
  "🦅 Drones",
  "💊 Medical",
  "📚 Education",
  "🐾 Animals",
  "👧🏻 Сhildren",
  "👨🏼‍🦳 Еlderly",
  "🙋🏼‍♂️ Volunteering",
];

export const SelectInput = () => {
  const categories = useCreateFundraiserStore((store) => store.categories);
  const setCategories = useCreateFundraiserStore(
    (store) => store.setCategories
  );

  return (
    <MultiselectField
      radius={"md"}
      width={"100%"}
      data={data}
      value={categories}
      onChange={setCategories}
      placeholder="Select categories"
      bottomSection={"You can choose 3 categories"}
      maxValues={3}
    />
  );
};
